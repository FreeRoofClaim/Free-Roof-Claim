import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import haversineDistance from "@/utils/haversineDistance";
import { createHash } from "crypto";

// =============================================================================
// Zapier Lead Ingestion Endpoint
//
// POST /api/zapier-lead
//
// Accepts leads from Zapier (or any external source) and runs them through
// the same pipeline as the website form: insert → contractor matching →
// notifications → CAPI.
//
// Auth: Bearer token via ZAPIER_WEBHOOK_SECRET env var.
//
// Expected JSON body (field names are flexible — see mapping below):
// {
//   "first_name": "John",
//   "last_name": "Doe",
//   "email": "john@example.com",
//   "phone": "(555) 123-4567",
//   "address": "123 Main St, Dallas, TX 75201",
//   "insurance_company": "State Farm",     // optional
//   "policy_number": "SF-12345",           // optional
//   "source": "Facebook LeadGen"           // optional, defaults to "Zapier"
// }
// =============================================================================

const LEAD_PRICES: Record<string, number> = {
  address_only: 30,
  partial: 100,
  complete: 150,
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function sha256(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

/** Geocode an address via Google Geocoding API */
async function geocodeAddress(
  address: string
): Promise<{ lat: number; lng: number } | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey || !address) return null;

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`
    );
    const data = await res.json();
    if (data.results?.[0]?.geometry?.location) {
      return data.results[0].geometry.location;
    }
  } catch (err) {
    console.error("[zapier-lead] Geocode error:", err);
  }
  return null;
}

// ---------------------------------------------------------------------------
// Notification helpers
// ---------------------------------------------------------------------------

async function sendFacebookCAPIEvent(eventData: {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  address?: string;
}) {
  const accessToken = process.env.FACEBOOK_CAPI_TOKEN;
  const pixelId = "1500669871629313";
  if (!accessToken) return;

  const rawPhone = eventData.phone.replace(/\D/g, "");
  const normalizedPhone = rawPhone.startsWith("1") ? rawPhone : `1${rawPhone}`;

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: "https://www.freeroofpros.com",
        user_data: {
          em: [sha256(eventData.email)],
          ph: [sha256(normalizedPhone)],
          fn: [sha256(eventData.firstName)],
          ln: [sha256(eventData.lastName)],
          country: [sha256("us")],
        },
        custom_data: {
          content_name: "Zapier Lead",
          content_category: "roof_inspection",
          lead_type: "homeowner",
        },
      },
    ],
  };

  try {
    await fetch(
      `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
  } catch (err) {
    console.error("[zapier-lead] CAPI error:", err);
  }
}

async function sendAdminNotification(leadData: {
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
  source: string;
}) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) return;

  const name = `${leadData.firstName} ${leadData.lastName}`;
  const subject = `🏠 New Lead (${leadData.source}): ${name}`;

  const htmlBody = `
    <h2>New Lead from ${leadData.source}</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Source</td><td style="padding:8px;border:1px solid #ddd;">📘 ${leadData.source}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${leadData.email}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${leadData.phone}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Address</td><td style="padding:8px;border:1px solid #ddd;">${leadData.address || "N/A"}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Insurance</td><td style="padding:8px;border:1px solid #ddd;">${leadData.insurance || "N/A"}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Policy #</td><td style="padding:8px;border:1px solid #ddd;">${leadData.policyNumber || "N/A"}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Lead Type</td><td style="padding:8px;border:1px solid #ddd;">${leadData.leadType}</td></tr>
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
        from:
          process.env.RESEND_FROM_EMAIL ||
          "FreeRoofPros <notifications@freeroofpros.com>",
        to: ["info@freeroofpros.com"],
        subject,
        html: htmlBody,
      }),
    });
  } catch (err) {
    console.error("[zapier-lead] Admin email failed:", err);
  }
}

async function sendSMSViaTwilio(
  to: string,
  message: string
): Promise<{ success: boolean }> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;
  if (!accountSid || !authToken || !fromNumber) return { success: false };

  let phone = to.trim().replace(/[^\d+]/g, "");
  if (!phone.startsWith("+")) phone = "+1" + phone;

  try {
    const res = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
        },
        body: new URLSearchParams({ From: fromNumber, To: phone, Body: message }),
      }
    );
    return { success: res.ok };
  } catch {
    return { success: false };
  }
}

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
    process.env.NEXT_PUBLIC_CONTRACTOR_URL ||
    "https://contractor.freeroofpros.com";
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
        console.error(`[zapier-lead] Email to ${contractor.email} failed:`, err);
      }

      if (contractor.phone) {
        await sendSMSViaTwilio(contractor.phone, smsMessage);
      }
    })
  );
}

// ---------------------------------------------------------------------------
// Flexible field name mapping — handles Zapier's various naming conventions
// ---------------------------------------------------------------------------
function extractField(body: Record<string, any>, ...keys: string[]): string {
  for (const key of keys) {
    // Try exact key, then lowercase, then with underscores replaced by spaces
    if (body[key] !== undefined && body[key] !== null) return String(body[key]).trim();
    const lower = key.toLowerCase();
    for (const bKey of Object.keys(body)) {
      if (bKey.toLowerCase() === lower) return String(body[bKey]).trim();
    }
  }
  return "";
}

// =============================================================================
// POST — Accept a lead from Zapier
// =============================================================================
export async function POST(request: NextRequest) {
  // 1️⃣ Auth check
  const webhookSecret = process.env.ZAPIER_WEBHOOK_SECRET;
  if (webhookSecret) {
    const authHeader = request.headers.get("authorization") || "";
    const token = authHeader.replace(/^Bearer\s+/i, "");
    if (token !== webhookSecret) {
      console.warn("[zapier-lead] Invalid auth token");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  let body: Record<string, any>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  console.log("[zapier-lead] Received:", JSON.stringify(body));

  // 2️⃣ Extract fields (flexible naming to handle Zapier/Facebook field variations)
  const firstName = extractField(body, "first_name", "firstName", "First Name", "fname");
  const lastName = extractField(body, "last_name", "lastName", "Last Name", "lname");
  const email = extractField(body, "email", "Email", "Email Address", "email_address");
  const phone = extractField(body, "phone", "phone_number", "phoneNumber", "Phone Number", "Phone");
  const address = extractField(body, "address", "street_address", "Property Address", "full_address", "city_address");
  const insurance = extractField(body, "insurance_company", "insurance", "insuredBy", "Insurance Company", "insured_by");
  const policyNumber = extractField(body, "policy_number", "policy", "policyNumber", "Policy Number");
  const source = extractField(body, "source", "lead_source") || "Facebook LeadGen";

  // If we have a full_name but no first/last, split it
  let finalFirstName = firstName;
  let finalLastName = lastName;
  if (!finalFirstName) {
    const fullName = extractField(body, "full_name", "fullName", "Full Name", "name");
    if (fullName) {
      const parts = fullName.trim().split(/\s+/);
      finalFirstName = parts[0] || "";
      finalLastName = parts.slice(1).join(" ") || finalLastName;
    }
  }

  // Basic validation
  if (!finalFirstName && !email && !address) {
    return NextResponse.json(
      { error: "At least one of first_name, email, or address is required" },
      { status: 400 }
    );
  }

  // 3️⃣ Determine lead type
  let leadType: string;
  if (finalFirstName && email && insurance && policyNumber) {
    leadType = "complete";
  } else if (finalFirstName && email) {
    leadType = "partial";
  } else if (address) {
    leadType = "address_only";
  } else {
    leadType = "partial";
  }
  const leadPrice = LEAD_PRICES[leadType] ?? 150;

  // 4️⃣ Geocode address for contractor matching
  const coords = address ? await geocodeAddress(address) : null;

  // 5️⃣ Insert into Leads_Data
  const { data: lead, error } = await supabaseAdmin
    .from("Leads_Data")
    .insert([
      {
        "Property Address": address,
        "First Name": finalFirstName,
        "Last Name": finalLastName,
        "Phone Number": phone,
        "Email Address": email,
        "Insurance Company": insurance,
        "Policy Number": policyNumber,
        Status: "open",
        Latitude: coords?.lat ?? null,
        Longitude: coords?.lng ?? null,
        lead_type: leadType,
        lead_price: leadPrice,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("[zapier-lead] Supabase insert error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  console.log(`[zapier-lead] Lead ${lead.id} inserted as '${leadType}' ($${leadPrice}) from ${source}`);

  // 6️⃣ For address_only / partial: admin notification only
  if (leadType === "address_only" || leadType === "partial") {
    await sendAdminNotification({
      firstName: finalFirstName,
      lastName: finalLastName,
      email,
      phone,
      address,
      insurance,
      policyNumber,
      leadType,
      status: "open",
      assignedTo: null,
      source,
    });

    return NextResponse.json({
      success: true,
      lead_id: lead.id,
      lead_type: leadType,
      lead_price: leadPrice,
    });
  }

  // 7️⃣ COMPLETE LEAD — full contractor matching pipeline
  let finalStatus: "open" | "close" = "open";
  let assignedContractorName: string | null = null;

  const { data: pendingRequests } = await supabaseAdmin
    .from("Leads_Request")
    .select("*")
    .ilike("Status", "pending")
    .order("created_at", { ascending: true });

  if (pendingRequests && pendingRequests.length > 0 && lead["Latitude"] && lead["Longitude"]) {
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

  // Notify contractors within radius if no pending request matched
  if (finalStatus === "open" && lead["Latitude"] && lead["Longitude"]) {
    try {
      const { data: allContractors } = await supabaseAdmin
        .from("Roofing_Auth")
        .select('"Latitude", "Longitude", "Service Radius", "Full Name", "Email Address", "Phone Number", "Is Verified"')
        .in("Is Verified", ["confirmed", "assigned"]);

      const matchingContractors: Array<{ email: string; fullName: string; phone: string }> = [];

      for (const contractor of allContractors || []) {
        if (
          !contractor["Latitude"] ||
          !contractor["Longitude"] ||
          !contractor["Email Address"] ||
          !contractor["Service Radius"]
        )
          continue;

        const distance = haversineDistance(
          contractor["Latitude"],
          contractor["Longitude"],
          lead["Latitude"],
          lead["Longitude"]
        );

        const serviceRadius = parseFloat(contractor["Service Radius"]);
        if (!isNaN(serviceRadius) && distance <= serviceRadius) {
          matchingContractors.push({
            email: contractor["Email Address"],
            fullName: contractor["Full Name"] || "Contractor",
            phone: contractor["Phone Number"] || "",
          });
        }
      }

      if (matchingContractors.length > 0) {
        await sendPremiumLeadNotificationToContractors(matchingContractors, {
          firstName: finalFirstName,
          lastName: finalLastName,
          address,
          email,
          phone,
        });
      }
    } catch (err) {
      console.error("[zapier-lead] Contractor notification error:", err);
    }
  }

  // 8️⃣ Admin notification
  await sendAdminNotification({
    firstName: finalFirstName,
    lastName: finalLastName,
    email,
    phone,
    address,
    insurance,
    policyNumber,
    leadType,
    status: finalStatus,
    assignedTo: assignedContractorName,
    source,
  });

  // 9️⃣ Fire CAPI (fire-and-forget)
  if (email) {
    sendFacebookCAPIEvent({
      email,
      phone,
      firstName: finalFirstName,
      lastName: finalLastName,
      address,
    }).catch(() => {});
  }

  return NextResponse.json({
    success: true,
    lead_id: lead.id,
    lead_type: leadType,
    lead_price: leadPrice,
    auto_assigned: finalStatus === "close",
  });
}
