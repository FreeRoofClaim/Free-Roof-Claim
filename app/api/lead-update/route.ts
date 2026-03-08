import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import haversineDistance from "@/utils/haversineDistance";
import { createHash } from "crypto";

// =============================================================================
// lead-update API route
// Used to upgrade partial leads (address_only → partial → complete).
//
// PUT /api/lead-update
// Body: { leadId, address, firstName, lastName, phoneNumber, email,
//         insuredBy, policyNumber, coords, lead_type, lead_price }
//
// - Updating to 'partial': updates the record, sends admin email, no contractor matching.
// - Updating to 'complete': updates the record, runs full contractor matching + CAPI.
// =============================================================================

// Lead type price map
const LEAD_PRICES: Record<string, number> = {
  address_only: 30,
  partial: 100,
  complete: 150,
};

// SHA-256 hash helper for Facebook CAPI
function sha256(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

// Send server-side Lead event to Facebook Conversions API
async function sendFacebookCAPIEvent(eventData: {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  address?: string;
  eventSourceUrl?: string;
}) {
  const accessToken = process.env.FACEBOOK_CAPI_TOKEN;
  const pixelId = "1500669871629313";

  if (!accessToken) {
    console.warn("FACEBOOK_CAPI_TOKEN not set, skipping CAPI event");
    return;
  }

  const rawPhone = eventData.phone.replace(/\D/g, "");
  const normalizedPhone = rawPhone.startsWith("1") ? rawPhone : `1${rawPhone}`;

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: eventData.eventSourceUrl || "https://www.freeroofpros.com",
        user_data: {
          em: [sha256(eventData.email)],
          ph: [sha256(normalizedPhone)],
          fn: [sha256(eventData.firstName)],
          ln: [sha256(eventData.lastName)],
          country: [sha256("us")],
        },
        custom_data: {
          content_name: "Homeowner Lead Form",
          content_category: "roof_inspection",
          lead_type: "homeowner",
        },
      },
    ],
  };

  try {
    const res = await fetch(
      `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    const result = await res.json();
    if (!res.ok) {
      console.error("Facebook CAPI error:", result);
    } else {
      console.log("Facebook CAPI Lead event sent:", result);
    }
  } catch (err) {
    console.error("Facebook CAPI request failed:", err);
  }
}

// Send email notification via Resend API
async function sendLeadUpdateNotification(leadData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  insurance: string;
  policyNumber: string;
  leadType: string;
  status: string;
  assignedTo?: string | null;
}) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) return;

  const name = `${leadData.firstName} ${leadData.lastName}`;
  const leadTypeLabel = leadData.leadType.replace(/_/g, " ");
  const subject = `🏠 Lead Upgraded to ${leadTypeLabel}: ${name}`;

  const htmlBody = `
    <h2>Lead Upgraded to ${leadTypeLabel}</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${leadData.email}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${leadData.phone}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Address</td><td style="padding:8px;border:1px solid #ddd;">${leadData.address || "N/A"}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Insurance</td><td style="padding:8px;border:1px solid #ddd;">${leadData.insurance || "N/A"}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Policy #</td><td style="padding:8px;border:1px solid #ddd;">${leadData.policyNumber || "N/A"}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Lead Type</td><td style="padding:8px;border:1px solid #ddd;">${leadTypeLabel}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Status</td><td style="padding:8px;border:1px solid #ddd;">${leadData.status}</td></tr>
      ${leadData.assignedTo ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Assigned To</td><td style="padding:8px;border:1px solid #ddd;">${leadData.assignedTo}</td></tr>` : ""}
    </table>
    <p style="margin-top:16px;"><a href="https://freeroofpros.twenty.com">View in Twenty CRM →</a></p>
  `;

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "FreeRoofPros <notifications@freeroofpros.com>",
        to: ["info@freeroofpros.com"],
        subject,
        html: htmlBody,
      }),
    });
  } catch (err) {
    console.error("Email notification failed:", err);
  }
}

// Send SMS via Twilio
async function sendSMSViaTwilio(
  to: string,
  message: string
): Promise<{ success: boolean; error?: any }> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !fromNumber) {
    console.warn("Twilio credentials not set, skipping SMS");
    return { success: false, error: "Twilio credentials not configured" };
  }

  let phoneWithCountryCode = to.trim().replace(/[^\d+]/g, "");
  if (!phoneWithCountryCode.startsWith("+")) {
    phoneWithCountryCode = "+1" + phoneWithCountryCode;
  }

  try {
    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
        },
        body: new URLSearchParams({
          From: fromNumber,
          To: phoneWithCountryCode,
          Body: message,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error(`❌ Twilio SMS failed to ${phoneWithCountryCode}:`, result);
      return { success: false, error: result };
    }

    console.log(`✅ SMS sent successfully to ${phoneWithCountryCode}`);
    return { success: true };
  } catch (err) {
    console.error(`❌ Error sending SMS to ${phoneWithCountryCode}:`, err);
    return { success: false, error: err };
  }
}

// Send premium lead notification to contractors within service radius
async function sendPremiumLeadNotificationToContractors(
  contractors: Array<{ email: string; fullName: string; phone: string }>,
  leadData: {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    phone: string;
  }
) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey || contractors.length === 0) return;

  const contractorUrl =
    process.env.NEXT_PUBLIC_CONTRACTOR_URL || "https://contractor.freeroofpros.com";
  const leadName = `${leadData.firstName.slice(0, 2)}*** ${leadData.lastName.slice(0, 2)}***`;
  const leadAddressPreview = `${leadData.address.slice(0, 2)}***`;
  const leadEmailPreview = `${leadData.email.slice(0, 2)}***@***.com`;
  const leadPhonePreview = `${leadData.phone.slice(0, 3)}***`;

  const subject = `🔥 New Premium Lead Available in Your Area - Act Fast!`;
  const smsMessage = `🔥 New Premium Lead Available!\n\nName: ${leadName}\nAddress: ${leadAddressPreview}\n\nView & Purchase: ${contractorUrl}/leads\n\n⏰ Act Fast!`;

  const htmlBody = `
<!DOCTYPE html>
<html lang="en" style="margin:0;padding:0;">
<head><meta charset="UTF-8" /><title>New Lead Notification</title></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:'Segoe UI',Roboto,Arial,sans-serif;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr><td align="center" style="padding:40px 0;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;background:#fff;border-radius:12px;overflow:hidden;">
        <tr><td style="background:#1e40af;padding:30px;text-align:center;color:#fff;">
          <h1 style="margin:0;font-size:24px;color:white;">🔥 Premium Lead Available!</h1>
          <p style="margin:10px 0 0;font-size:16px;color:white;">High-quality lead in your service area</p>
        </td></tr>
        <tr><td style="padding:30px 40px;color:#111827;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:30px;">
            <tr><td style="padding:8px 0;font-weight:600;color:#374151;width:120px;">👤 Name:</td><td style="padding:8px 0;color:#1f2937;font-weight:500;">${leadName}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#374151;">📍 Address:</td><td style="padding:8px 0;color:#1f2937;font-weight:500;">${leadAddressPreview}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#374151;">✉️ Email:</td><td style="padding:8px 0;color:#1f2937;font-weight:500;">${leadEmailPreview}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;color:#374151;">📞 Phone:</td><td style="padding:8px 0;color:#1f2937;font-weight:500;">${leadPhonePreview}</td></tr>
          </table>
          <div style="text-align:center;margin:30px 0;">
            <a href="${contractorUrl}/contractor/leads" style="background:#2563eb;color:#fff;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:600;display:inline-block;" target="_blank">View & Purchase Lead →</a>
          </div>
          <div style="background:#fef3c7;border-left:4px solid #f59e0b;border-radius:8px;padding:20px;margin:20px 0;">
            <p style="margin:0;font-size:15px;color:#92400e;font-weight:600;">Act Fast!</p>
            <p style="margin:8px 0 0;font-size:14px;color:#78350f;">Premium leads are first-come, first-served.</p>
          </div>
        </td></tr>
        <tr><td style="background:#f9fafb;padding:20px 40px;text-align:center;">
          <p style="font-size:13px;color:#6b7280;margin:0;">Best regards,<br><strong style="color:#1e40af;">FreeRoofPros Team</strong></p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  await Promise.allSettled(
    contractors.map(async (contractor) => {
      // Email
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from:
              process.env.RESEND_FROM_EMAIL ||
              "FreeRoofPros <notifications@freeroofpros.com>",
            to: [contractor.email],
            subject,
            html: htmlBody,
          }),
        });
      } catch (err) {
        console.error(`❌ Email failed to ${contractor.email}:`, err);
      }

      // SMS
      if (contractor.phone) {
        await sendSMSViaTwilio(contractor.phone, smsMessage);
      }
    })
  );
}

export async function PUT(request: Request) {
  const body = await request.json();

  const { leadId } = body;
  if (!leadId) {
    return NextResponse.json({ error: "leadId is required" }, { status: 400 });
  }

  const leadType: string = body.lead_type || "complete";
  const leadPrice: number = body.lead_price ?? LEAD_PRICES[leadType] ?? 150;

  // 1️⃣ Build update payload
  const updatePayload: Record<string, any> = {
    "Property Address": body.address,
    "First Name": body.firstName || "",
    "Last Name": body.lastName || "",
    "Phone Number": body.phoneNumber || "",
    "Email Address": body.email || "",
    "Insurance Company": body.insuredBy || "",
    "Policy Number": body.policyNumber || "",
    Latitude: body.coords?.lat ?? null,
    Longitude: body.coords?.lng ?? null,
    lead_type: leadType,
    lead_price: leadPrice,
  };

  // 2️⃣ Update the lead record
  const { data: lead, error } = await supabaseAdmin
    .from("Leads_Data")
    .update(updatePayload)
    .eq("id", leadId)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // For address_only and partial upgrades: send admin email only, no contractor matching
  if (leadType === "address_only" || leadType === "partial") {
    await sendLeadUpdateNotification({
      firstName: lead["First Name"],
      lastName: lead["Last Name"],
      email: lead["Email Address"],
      phone: lead["Phone Number"],
      address: lead["Property Address"],
      insurance: lead["Insurance Company"],
      policyNumber: lead["Policy Number"],
      leadType,
      status: "open",
      assignedTo: null,
    });

    return NextResponse.json({ lead, autoAssigned: false });
  }

  // =====================================================================
  // COMPLETE LEAD UPGRADE — run full contractor matching + notifications
  // =====================================================================

  let finalStatus: "open" | "close" = "open";
  let assignedContractorName: string | null = null;

  // 3️⃣ Fetch pending requests
  const { data: pendingRequests, error: requestError } = await supabaseAdmin
    .from("Leads_Request")
    .select("*")
    .ilike("Status", "pending")
    .order("created_at", { ascending: true });

  if (requestError) {
    return NextResponse.json({ error: requestError.message }, { status: 500 });
  }

  // 4️⃣ Auto-assign logic
  if (pendingRequests && pendingRequests.length > 0) {
    for (const requestRow of pendingRequests) {
      const contractorId = requestRow.contractor_id;
      const requestId = requestRow.id;

      const { data: contractor, error: contractorError } = await supabaseAdmin
        .from("Roofing_Auth")
        .select('"Latitude", "Longitude", "Service Radius", "Full Name"')
        .eq("user_id", contractorId)
        .maybeSingle();

      if (contractorError || !contractor) continue;

      const distance = haversineDistance(
        contractor["Latitude"],
        contractor["Longitude"],
        lead["Latitude"],
        lead["Longitude"]
      );

      if (distance <= parseFloat(contractor["Service Radius"])) {
        await supabaseAdmin.from("Assigned_Leads").insert([
          {
            contractor_id: contractorId,
            request_id: requestId,
            "First Name": lead["First Name"],
            "Last Name": lead["Last Name"],
            "Phone Number": lead["Phone Number"],
            "Email Address": lead["Email Address"],
            "Property Address": lead["Property Address"],
            "Insurance Company": lead["Insurance Company"],
            "Policy Number": lead["Policy Number"],
            "Assigned Date": new Date().toISOString(),
            Latitude: lead["Latitude"],
            Longitude: lead["Longitude"],
          },
        ]);

        await supabaseAdmin.from("Contractor_Leads").insert([
          {
            contractor_id: contractorId,
            lead_id: lead.id,
            "First Name": lead["First Name"],
            "Last Name": lead["Last Name"],
            "Phone Number": lead["Phone Number"],
            "Email Address": lead["Email Address"],
            "Property Address": lead["Property Address"],
            "Insurance Company": lead["Insurance Company"],
            "Policy Number": lead["Policy Number"],
            Latitude: lead["Latitude"],
            Longitude: lead["Longitude"],
            status: "open",
          },
        ]);

        const newSendLeads = requestRow["Send Leads"] + 1;
        const newPendingLeads = requestRow["Pending Leads"] - 1;

        await supabaseAdmin
          .from("Leads_Request")
          .update({
            "Send Leads": newSendLeads,
            "Pending Leads": newPendingLeads,
            Status: newPendingLeads <= 0 ? "assigned" : "pending",
          })
          .eq("id", requestId);

        await supabaseAdmin
          .from("Leads_Data")
          .update({ Status: "close" })
          .eq("id", lead.id);

        finalStatus = "close";
        assignedContractorName = contractor["Full Name"];
        break;
      }
    }
  }

  // 4.5️⃣ If no pending request matched, notify all verified contractors within radius
  if (finalStatus === "open" && lead["Latitude"] && lead["Longitude"]) {
    try {
      const { data: allContractors, error: contractorsError } = await supabaseAdmin
        .from("Roofing_Auth")
        .select('"Latitude", "Longitude", "Service Radius", "Full Name", "Email Address", "Phone Number", "Is Verified"')
        .in("Is Verified", ["confirmed", "assigned"]);

      if (contractorsError) {
        console.error("Error fetching contractors:", contractorsError);
      } else {
        const matchingContractors: Array<{ email: string; fullName: string; phone: string }> = [];

        for (const contractor of allContractors) {
          if (
            !contractor["Latitude"] ||
            !contractor["Longitude"] ||
            !contractor["Email Address"] ||
            !contractor["Service Radius"]
          ) {
            continue;
          }

          const distance = haversineDistance(
            contractor["Latitude"],
            contractor["Longitude"],
            lead["Latitude"],
            lead["Longitude"]
          );

          const serviceRadius = parseFloat(contractor["Service Radius"]);
          if (isNaN(serviceRadius)) continue;

          if (distance <= serviceRadius) {
            matchingContractors.push({
              email: contractor["Email Address"],
              fullName: contractor["Full Name"] || "Contractor",
              phone: contractor["Phone Number"] || "",
            });
          }
        }

        if (matchingContractors.length > 0) {
          await sendPremiumLeadNotificationToContractors(matchingContractors, {
            firstName: lead["First Name"],
            lastName: lead["Last Name"],
            address: lead["Property Address"],
            email: lead["Email Address"],
            phone: lead["Phone Number"],
          });
        }
      }
    } catch (err) {
      console.error("Error finding contractors for premium lead notification:", err);
    }
  }

  // 5️⃣ Send admin notification
  await sendLeadUpdateNotification({
    firstName: lead["First Name"],
    lastName: lead["Last Name"],
    email: lead["Email Address"],
    phone: lead["Phone Number"],
    address: lead["Property Address"],
    insurance: lead["Insurance Company"],
    policyNumber: lead["Policy Number"],
    leadType,
    status: finalStatus,
    assignedTo: assignedContractorName,
  });

  // 6️⃣ Fire Facebook CAPI for complete leads (fire-and-forget)
  sendFacebookCAPIEvent({
    email: body.email,
    phone: body.phoneNumber,
    firstName: body.firstName,
    lastName: body.lastName,
    address: body.address,
    eventSourceUrl: "https://www.freeroofpros.com",
  }).catch((err) => console.error("CAPI fire-and-forget error:", err));

  return NextResponse.json({
    lead,
    autoAssigned: finalStatus === "close",
  });
}

// POST handler — alias for PUT.
// navigator.sendBeacon (used in beforeunload) can only send POST requests,
// so we need this alias so beacon-based lead updates work.
export async function POST(request: Request) {
  return PUT(request);
}
