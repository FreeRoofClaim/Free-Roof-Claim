import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import haversineDistance from "@/utils/haversineDistance";
import { createHash, createHmac } from "crypto";

// =============================================================================
// Facebook LeadGen Webhook
//
// GET  /api/facebook-leadgen  — Webhook verification (Facebook challenge)
// POST /api/facebook-leadgen  — Receive leadgen event, fetch lead data, insert
//
// Environment variables required:
//   FACEBOOK_CAPI_TOKEN          — Page access token (also used to fetch lead data)
//   FACEBOOK_WEBHOOK_VERIFY_TOKEN — Custom string you set in Facebook App Dashboard
//   FACEBOOK_APP_SECRET          — App secret for payload signature verification
//
// Permissions required on the Facebook App:
//   leads_retrieval, pages_manage_metadata, pages_show_list, pages_read_engagement
// =============================================================================

const GRAPH_API_VERSION = "v21.0";

// Lead prices (same as the website form)
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

/** Verify X-Hub-Signature-256 header from Facebook */
function verifySignature(
  payload: string,
  signature: string | null,
  appSecret: string
): boolean {
  if (!signature) return false;
  const expected =
    "sha256=" + createHmac("sha256", appSecret).update(payload).digest("hex");
  return signature === expected;
}

/** Fetch full lead data from Facebook Graph API using the leadgen_id */
async function fetchLeadData(leadgenId: string, accessToken: string) {
  const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${leadgenId}?access_token=${accessToken}&fields=created_time,id,ad_id,form_id,field_data`;

  const res = await fetch(url);
  if (!res.ok) {
    const err = await res.text();
    console.error("[fb-leadgen] Graph API error fetching lead:", err);
    return null;
  }
  return res.json();
}

/** Map Facebook field_data array to a flat object keyed by field name */
function mapFieldData(
  fieldData: Array<{ name: string; values: string[] }>
): Record<string, string> {
  const mapped: Record<string, string> = {};
  for (const field of fieldData) {
    // Facebook field names are lowercase (e.g. "email", "full_name", "phone_number", "street_address", "city", "state", "zip_code")
    mapped[field.name.toLowerCase()] = field.values?.[0] ?? "";
  }
  return mapped;
}

/** Split a "full_name" string into first and last name */
function splitName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  const firstName = parts[0];
  const lastName = parts.slice(1).join(" ");
  return { firstName, lastName };
}

// ---------------------------------------------------------------------------
// Notification helpers (same as lead-create route)
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
          content_name: "Facebook LeadGen Form",
          content_category: "roof_inspection",
          lead_type: "homeowner",
        },
      },
    ],
  };

  try {
    await fetch(
      `https://graph.facebook.com/${GRAPH_API_VERSION}/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
  } catch (err) {
    console.error("[fb-leadgen] CAPI error:", err);
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
  const subject = `🏠 New Facebook Lead: ${name}`;

  const htmlBody = `
    <h2>New Lead from Facebook LeadGen</h2>
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
    console.error("[fb-leadgen] Admin email failed:", err);
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
        console.error(`[fb-leadgen] Email to ${contractor.email} failed:`, err);
      }

      if (contractor.phone) {
        await sendSMSViaTwilio(contractor.phone, smsMessage);
      }
    })
  );
}

// ---------------------------------------------------------------------------
// Geocode an address string using Google Places API
// ---------------------------------------------------------------------------
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
      return data.results[0].geometry.location; // { lat, lng }
    }
  } catch (err) {
    console.error("[fb-leadgen] Geocode error:", err);
  }
  return null;
}

// ---------------------------------------------------------------------------
// Core: process a single Facebook lead
// ---------------------------------------------------------------------------
async function processLead(leadgenId: string) {
  const accessToken = process.env.FACEBOOK_CAPI_TOKEN;
  if (!accessToken) {
    console.error("[fb-leadgen] FACEBOOK_CAPI_TOKEN not set");
    return;
  }

  // 1️⃣ Fetch lead data from Facebook Graph API
  const leadData = await fetchLeadData(leadgenId, accessToken);
  if (!leadData || !leadData.field_data) {
    console.error("[fb-leadgen] Could not fetch lead data for", leadgenId);
    return;
  }

  const fields = mapFieldData(leadData.field_data);
  console.log("[fb-leadgen] Lead fields:", JSON.stringify(fields));

  // 2️⃣ Extract and normalize fields
  // Facebook forms can use various field names — handle common variants
  let firstName = fields["first_name"] || "";
  let lastName = fields["last_name"] || "";
  if (!firstName && fields["full_name"]) {
    const split = splitName(fields["full_name"]);
    firstName = split.firstName;
    lastName = split.lastName;
  }

  const email = fields["email"] || "";
  const phone = fields["phone_number"] || fields["phone"] || "";

  // Address — Facebook may split into parts or use a single field
  const streetAddress = fields["street_address"] || fields["address"] || "";
  const city = fields["city"] || "";
  const state = fields["state"] || "";
  const zipCode = fields["zip_code"] || fields["zip"] || fields["post_code"] || "";
  const fullAddress = [streetAddress, city, state, zipCode]
    .filter(Boolean)
    .join(", ");

  // Insurance fields (only if the Facebook form includes them)
  const insurance = fields["insurance_company"] || fields["insurance"] || fields["insured_by"] || "";
  const policyNumber = fields["policy_number"] || fields["policy"] || "";

  // Determine lead type based on what data we have
  let leadType: string;
  if (firstName && email && insurance && policyNumber) {
    leadType = "complete";
  } else if (firstName && email) {
    leadType = "partial";
  } else if (fullAddress) {
    leadType = "address_only";
  } else {
    leadType = "partial"; // Facebook leads always have at least name+email
  }

  const leadPrice = LEAD_PRICES[leadType] ?? 150;

  // 3️⃣ Geocode the address to get lat/lng for contractor matching
  const coords = fullAddress ? await geocodeAddress(fullAddress) : null;

  // 4️⃣ Insert into Leads_Data (same table as website form)
  const { data: lead, error } = await supabaseAdmin
    .from("Leads_Data")
    .insert([
      {
        "Property Address": fullAddress,
        "First Name": firstName,
        "Last Name": lastName,
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
    console.error("[fb-leadgen] Supabase insert error:", error.message);
    return;
  }

  console.log(`[fb-leadgen] Lead ${lead.id} inserted as '${leadType}' ($${leadPrice})`);

  // 5️⃣ ALL LEAD TYPES — run full contractor matching
  // All leads (address_only, partial, complete) within a contractor's
  // service radius are now auto-assigned.
  let finalStatus: "open" | "close" = "open";
  let assignedContractorName: string | null = null;

  // Fetch pending lead requests
  const { data: pendingRequests, error: requestError } = await supabaseAdmin
    .from("Leads_Request")
    .select("*")
    .ilike("Status", "pending")
    .order("created_at", { ascending: true });

  if (requestError) {
    console.error("[fb-leadgen] Error fetching pending requests:", requestError.message);
  }

  // Auto-assign if a matching pending request exists
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
        console.log(`[fb-leadgen] Lead auto-assigned to ${assignedContractorName}`);
        break;
      }
    }
  }

  // If no pending request matched, directly assign to ALL verified contractors within radius
  if (finalStatus === "open" && lead["Latitude"] && lead["Longitude"]) {
    try {
      const { data: allContractors } = await supabaseAdmin
        .from("Roofing_Auth")
        .select('"user_id", "Latitude", "Longitude", "Service Radius", "Full Name", "Email Address", "Phone Number", "Business Address", "Is Verified"')
        .in("Is Verified", ["confirmed", "assigned"]);

      const matchingContractors: Array<{ email: string; fullName: string; phone: string }> = [];
      const assignedContractorNames: string[] = [];

      for (const contractor of allContractors || []) {
        if (
          !contractor["Latitude"] ||
          !contractor["Longitude"] ||
          !contractor["Email Address"] ||
          !contractor["Service Radius"] ||
          !contractor["user_id"]
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
          const contractorId = contractor["user_id"];
          console.log(`[fb-leadgen] ✅ Contractor ${contractor["Full Name"]} within radius (${distance.toFixed(2)} mi) — auto-assigning`);

          // Directly assign lead to this contractor
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
              lead_type: lead.lead_type || "complete",
              lead_price: lead.lead_price || 150,
            },
          ]);

          assignedContractorNames.push(contractor["Full Name"] || "Contractor");

          matchingContractors.push({
            email: contractor["Email Address"],
            fullName: contractor["Full Name"] || "Contractor",
            phone: contractor["Phone Number"] || "",
          });
        }
      }

      // Mark lead as closed if assigned
      if (assignedContractorNames.length > 0) {
        await supabaseAdmin
          .from("Leads_Data")
          .update({ Status: "close" })
          .eq("id", lead.id);

        finalStatus = "close";
        assignedContractorName = assignedContractorNames.join(", ");
        console.log(`[fb-leadgen] 📋 Lead auto-assigned to: ${assignedContractorName}`);
      }

      // Send notifications to matching contractors
      if (matchingContractors.length > 0) {
        await sendPremiumLeadNotificationToContractors(matchingContractors, {
          firstName,
          lastName,
          address: fullAddress,
          email,
          phone,
        });
        console.log(`[fb-leadgen] Notified ${matchingContractors.length} contractors`);
      }
    } catch (err) {
      console.error("[fb-leadgen] Contractor auto-assign error:", err);
    }
  }

  // 7️⃣ Admin notification
  await sendAdminNotification({
    firstName,
    lastName,
    email,
    phone,
    address: fullAddress,
    insurance,
    policyNumber,
    leadType,
    status: finalStatus,
    assignedTo: assignedContractorName,
    source: "Facebook LeadGen",
  });

  // 8️⃣ Fire CAPI event (fire-and-forget)
  sendFacebookCAPIEvent({
    email,
    phone,
    firstName,
    lastName,
    address: fullAddress,
  }).catch(() => {});
}

// =============================================================================
// GET — Webhook verification
// Facebook sends a GET request with hub.mode, hub.verify_token, hub.challenge
// =============================================================================
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  const verifyToken = process.env.FACEBOOK_WEBHOOK_VERIFY_TOKEN;

  if (mode === "subscribe" && token === verifyToken) {
    console.log("[fb-leadgen] Webhook verification successful");
    return new NextResponse(challenge, { status: 200 });
  }

  console.warn("[fb-leadgen] Webhook verification failed — token mismatch");
  return NextResponse.json({ error: "Verification failed" }, { status: 403 });
}

// =============================================================================
// POST — Receive leadgen webhook events
// =============================================================================
export async function POST(request: NextRequest) {
  const rawBody = await request.text();

  // Verify signature if app secret is configured
  const appSecret = process.env.FACEBOOK_APP_SECRET;
  if (appSecret) {
    const signature = request.headers.get("x-hub-signature-256");
    if (!verifySignature(rawBody, signature, appSecret)) {
      console.warn("[fb-leadgen] Invalid webhook signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
    }
  }

  let body: any;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Facebook expects a 200 response quickly — process leads async
  // so we don't time out on the webhook response.
  if (body.object === "page" && body.entry) {
    for (const entry of body.entry) {
      for (const change of entry.changes || []) {
        if (change.field === "leadgen" && change.value?.leadgen_id) {
          const leadgenId = String(change.value.leadgen_id);
          console.log(`[fb-leadgen] Received leadgen_id: ${leadgenId}`);

          // Process in background (don't await — respond to Facebook immediately)
          processLead(leadgenId).catch((err) =>
            console.error("[fb-leadgen] processLead error:", err)
          );
        }
      }
    }
  }

  // Always return 200 to Facebook so it doesn't retry
  return NextResponse.json({ received: true });
}
