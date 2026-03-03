import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import haversineDistance from "@/utils/haversineDistance";
import { createHash } from "crypto";

// SHA-256 hash helper for Facebook CAPI (required for user data)
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

  // Normalize phone: strip non-digits, ensure country code
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

// Send email notification via Resend API (no dependency needed)
async function sendLeadNotification(leadData: {
  type: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email: string;
  phone: string;
  address?: string;
  insurance?: string;
  policyNumber?: string;
  status?: string;
  assignedTo?: string | null;
}) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) return;

  const isContractor = leadData.type === "contractor_signup";
  const name = isContractor
    ? leadData.fullName
    : `${leadData.firstName} ${leadData.lastName}`;

  const subject = isContractor
    ? `\ud83d\udd27 New Contractor Signup: ${name}`
    : `\ud83c\udfe0 New Homeowner Lead: ${name}`;

  const htmlBody = isContractor
    ? `
      <h2>New Contractor Signup</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${leadData.email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${leadData.phone}</td></tr>
      </table>
      <p style="margin-top:16px;"><a href="https://freeroofpros.twenty.com">View in Twenty CRM \u2192</a></p>
    `
    : `
      <h2>New Homeowner Lead</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${leadData.email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${leadData.phone}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Address</td><td style="padding:8px;border:1px solid #ddd;">${leadData.address || "N/A"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Insurance</td><td style="padding:8px;border:1px solid #ddd;">${leadData.insurance || "N/A"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Policy #</td><td style="padding:8px;border:1px solid #ddd;">${leadData.policyNumber || "N/A"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Status</td><td style="padding:8px;border:1px solid #ddd;">${leadData.status || "open"}</td></tr>
        ${leadData.assignedTo ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Assigned To</td><td style="padding:8px;border:1px solid #ddd;">${leadData.assignedTo}</td></tr>` : ""}
      </table>
      <p style="margin-top:16px;"><a href="https://freeroofpros.twenty.com">View in Twenty CRM \u2192</a></p>
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
        // to: ["info@freeroofpros.com"],
        to: ["nojaba1979@bultoc.com"],
        subject,
        html: htmlBody,
      }),
    });
  } catch (err) {
    console.error("Email notification failed:", err);
  }
}

export async function POST(request: Request) {
  const body = await request.json();

  // 1\ufe0f\u20e3 Prepare payload for DB
  const payload = {
    "Property Address": body.address,
    "First Name": body.firstName,
    "Last Name": body.lastName,
    "Phone Number": body.phoneNumber,
    "Email Address": body.email,
    "Insurance Company": body.insuredBy,
    "Policy Number": body.policyNumber,
    Status: "open",
    Latitude: body.coords?.lat ?? null,
    Longitude: body.coords?.lng ?? null,
  };

  // 2\ufe0f\u20e3 Insert lead
  const { data: lead, error } = await supabaseAdmin
    .from("Leads_Data")
    .insert([payload])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Track FINAL status
  let finalStatus: "open" | "close" = "open";
  let assignedContractorName: string | null = null;

  // 3\ufe0f\u20e3 Fetch pending requests
  const { data: pendingRequests, error: requestError } = await supabaseAdmin
    .from("Leads_Request")
    .select("*")
    .ilike("Status", "pending")
    .order("created_at", { ascending: true });

  if (requestError) {
    return NextResponse.json({ error: requestError.message }, { status: 500 });
  }

  // 4\ufe0f\u20e3 Auto-assign logic
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
        // Assign lead
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

  // 5\ufe0f\u20e3 Send email notification to info@freeroofpros.com
  await sendLeadNotification({
    type: "new_homeowner_lead",
    firstName: lead["First Name"],
    lastName: lead["Last Name"],
    email: lead["Email Address"],
    phone: lead["Phone Number"],
    address: lead["Property Address"],
    insurance: lead["Insurance Company"],
    policyNumber: lead["Policy Number"],
    status: finalStatus,
    assignedTo: assignedContractorName,
  });

  // 6\ufe0f\u20e3 Send server-side Lead event to Facebook CAPI (fire-and-forget)
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
