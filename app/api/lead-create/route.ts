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
// async function sendSMSViaTwilio(
//   to: string,
//   message: string
// ): Promise<{ success: boolean; error?: any }> {
//   const accountSid = process.env.TWILIO_ACCOUNT_SID;
//   const authToken = process.env.TWILIO_AUTH_TOKEN;
//   const fromNumber = process.env.TWILIO_PHONE_NUMBER;

//   if (!accountSid || !authToken || !fromNumber) {
//     console.warn("Twilio credentials not set, skipping SMS");
//     return { success: false, error: "Twilio credentials not configured" };
//   }

//   // Normalize phone number: remove non-digits, ensure country code
//   const normalizedPhone = to.replace(/\D/g, "");
//   const phoneWithCountryCode = normalizedPhone.startsWith("1") 
//     ? `+${normalizedPhone}` 
//     : `+1${normalizedPhone}`;

//   try {
//     const response = await fetch(
//       `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//           Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
//         },
//         body: new URLSearchParams({
//           From: fromNumber,
//           To: phoneWithCountryCode,
//           Body: message,
//         }),
//       }
//     );

//     const result = await response.json();

//     if (!response.ok) {
//       console.error(`❌ Twilio SMS failed to ${phoneWithCountryCode}:`, result);
//       return { success: false, error: result };
//     }

//     console.log(`✅ SMS sent successfully to ${phoneWithCountryCode}`);
//     return { success: true };
//   } catch (err) {
//     console.error(`❌ Error sending SMS to ${phoneWithCountryCode}:`, err);
//     return { success: false, error: err };
//   }
// }

// Send premium lead notification to contractors within service radius (Email + SMS)
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
  if (!resendKey) {
    console.warn("RESEND_API_KEY not set, skipping premium lead notifications");
    return;
  }

  if (contractors.length === 0) {
    console.log("No contractors to notify");
    return;
  }

  const contractorUrl = process.env.NEXT_PUBLIC_CONTRACTOR_URL || "https://contractor.freeroofpros.com";
  const leadName = `${leadData.firstName.slice(0, 2)}*** ${leadData.lastName.slice(0, 2)}***`;
  const leadAddressPreview = `${leadData.address.slice(0, 2)}***`;
  const leadEmailPreview = `${leadData.email.slice(0, 2)}***@***.com`;
  const leadPhonePreview = `${leadData.phone.slice(0, 3)}***`;

  const subject = `🔥 New Premium Lead Available in Your Area - Act Fast!`;
  
  // Prepare SMS message
  const smsMessage = `🔥 New Premium Lead Available!\n\nName: ${leadName}\nAddress: ${leadAddressPreview}\n\nView & Purchase: ${contractorUrl}/leads\n\n⏰ Act Fast! First-come, first-served.`;

  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: #f8f9fa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header with Gradient -->
        <div style="background: linear-gradient(135deg, #122E5F 0%, #2563eb 100%); padding: 40px 30px; text-align: center; border-radius: 0;">
          <div style="background-color: rgba(255, 255, 255, 0.15); border-radius: 50px; padding: 12px 24px; display: inline-block; margin-bottom: 15px;">
            <span style="color: #ffffff; font-size: 14px; font-weight: 600; letter-spacing: 1px;">🔥 PREMIUM LEAD</span>
          </div>
          <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 700; line-height: 1.2;">
            New Opportunity Available!
          </h1>
          <p style="color: rgba(255, 255, 255, 0.9); margin: 15px 0 0 0; font-size: 16px;">
            High-quality lead in your service area
          </p>
        </div>

        <!-- Main Content -->
        <div style="padding: 40px 30px;">
          <!-- Welcome Message -->
          <div style="margin-bottom: 30px;">
            <p style="font-size: 18px; line-height: 1.6; color: #1f2937; margin: 0;">
              Hi there! 👋<br><br>
              A <strong style="color: #2563eb;">premium lead</strong> has just been added in your service area. This is a high-quality opportunity you won't want to miss!
            </p>
          </div>
          
          <!-- Lead Preview Card -->
          <div style="background: linear-gradient(to bottom, #ffffff 0%, #f9fafb 100%); border: 2px solid #e5e7eb; border-radius: 16px; padding: 30px; margin: 30px 0; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
            <div style="display: flex; align-items: center; margin-bottom: 25px;">
              <div style="background-color: #2563eb; width: 4px; height: 24px; border-radius: 2px; margin-right: 12px;"></div>
              <h2 style="color: #122E5F; margin: 0; font-size: 22px; font-weight: 700;">Lead Preview</h2>
            </div>
            
            <table style="border-collapse: collapse; width: 100%;">
              <tr>
                <td style="padding: 12px 0; font-weight: 600; color: #374151; width: 120px; font-size: 15px;">👤 Name:</td>
                <td style="padding: 12px 0; color: #1f2937; font-size: 15px; font-weight: 500;">${leadName}</td>
              </tr>
              <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; font-weight: 600; color: #374151; font-size: 15px;">📍 Address:</td>
                <td style="padding: 12px 0; color: #1f2937; font-size: 15px; font-weight: 500;">${leadAddressPreview}</td>
              </tr>
              <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; font-weight: 600; color: #374151; font-size: 15px;">✉️ Email:</td>
                <td style="padding: 12px 0; color: #1f2937; font-size: 15px; font-weight: 500;">${leadEmailPreview}</td>
              </tr>
              <tr style="border-top: 1px solid #e5e7eb;">
                <td style="padding: 12px 0; font-weight: 600; color: #374151; font-size: 15px;">📞 Phone:</td>
                <td style="padding: 12px 0; color: #1f2937; font-size: 15px; font-weight: 500;">${leadPhonePreview}</td>
              </tr>
            </table>
          </div>

          <!-- CTA Button -->
          <div style="text-align: center; margin: 30px 0;">
            <a href="${contractorUrl}/contractor/leads" 
               style="background: linear-gradient(135deg, #2563eb 0%, #122E5F 100%); color: #ffffff; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: 700; display: inline-block; font-size: 16px; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4); transition: all 0.3s ease;">
               View & Purchase Lead Now →
            </a>
          </div>

          <!-- Urgency Banner -->
          <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 8px; padding: 20px; margin: 30px 0;">
            <div style="display: flex; align-items: center;">
              <div>
                <p style="margin: 0; font-size: 15px; color: #92400e; font-weight: 600;">
                  Act Fast!
                </p>
                <p style="margin: 8px 0 0 0; font-size: 14px; color: #78350f; line-height: 1.5;">
                  Premium leads are first-come, first-served. Other contractors in your area are also being notified about this opportunity.
                </p>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div style="border-top: 1px solid #e5e7eb; padding-top: 30px; margin-top: 40px; text-align: center;">
            <p style="font-size: 15px; color: #6b7280; margin: 0 0 10px 0; line-height: 1.6;">
              Best regards,<br>
              <strong style="color: #122E5F; font-size: 16px;">FreeRoofPros Team</strong>
            </p>
            <p style="font-size: 12px; color: #9ca3af; margin: 20px 0 0 0;">
              © ${new Date().getFullYear()} FreeRoofPros. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  // Send email and SMS to each contractor
  const notificationPromises = contractors.map(async (contractor) => {
    const results = {
      email: { success: false, error: null as any },
      sms: { success: false, error: null as any },
    };

    // Send Email
    try {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "FreeRoofPros <notifications@freeroofpros.com>",
          to: [contractor.email],
          subject,
          html: htmlBody,
        }),
      });

      const emailResult = await emailResponse.json();
      
      if (!emailResponse.ok) {
        console.error(`❌ Failed to send email to ${contractor.email}:`, emailResult);
        results.email.error = emailResult;
      } else {
        console.log(`✅ Email sent to ${contractor.fullName} (${contractor.email})`);
        results.email.success = true;
      }
    } catch (err) {
      console.error(`❌ Error sending email to ${contractor.email}:`, err);
      results.email.error = err;
    }

    // Send SMS (if phone number is available)
    if (contractor.phone) {
      try {
        // const smsResult = await sendSMSViaTwilio(contractor.phone, smsMessage);
        // if (smsResult.success) {
        //   console.log(`✅ SMS sent to ${contractor.fullName} (${contractor.phone})`);
        //   results.sms.success = true;
        // } else {
        //   results.sms.error = smsResult.error;
        // }
      } catch (err) {
        console.error(`❌ Error sending SMS to ${contractor.phone}:`, err);
        results.sms.error = err;
      }
    } else {
      console.log(`⚠️ No phone number for ${contractor.fullName}, skipping SMS`);
    }

    return results;
  });

  // Wait for all notifications and log results
  const results = await Promise.allSettled(notificationPromises);
  const emailSuccessful = results.filter(
    (r) => r.status === "fulfilled" && r.value?.email?.success
  ).length;
  const emailFailed = results.length - emailSuccessful;
  
  const smsSuccessful = results.filter(
    (r) => r.status === "fulfilled" && r.value?.sms?.success
  ).length;
  const smsFailed = results.length - smsSuccessful;
  
  console.log(`📊 Notification summary:`);
  console.log(`   📧 Emails: ${emailSuccessful} sent successfully, ${emailFailed} failed`);
  console.log(`   📱 SMS: ${smsSuccessful} sent successfully, ${smsFailed} failed`);
  
  if (emailFailed > 0 || smsFailed > 0) {
    console.error("Some notifications failed to send. Check logs above for details.");
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

  // 4.5\ufe0f\u20e3 If no pending request matched, notify all verified contractors within radius
  if (finalStatus === "open" && lead["Latitude"] && lead["Longitude"]) {
    try {
      // Fetch all verified contractors
      const { data: allContractors, error: contractorsError } = await supabaseAdmin
        .from("Roofing_Auth")
        .select('"Latitude", "Longitude", "Service Radius", "Full Name", "Email Address", "Phone Number", "Is Verified"')
        .in("Is Verified", ["confirmed", "assigned"]);

      if (contractorsError) {
        console.error("Error fetching contractors:", contractorsError);
      } else {
        const matchingContractors: Array<{ email: string; fullName: string; phone: string }> = [];

        // Check each contractor's service radius
        for (const contractor of allContractors) {
          if (
            !contractor["Latitude"] ||
            !contractor["Longitude"] ||
            !contractor["Email Address"] ||
            !contractor["Service Radius"]
          ) {
            console.log(`⚠️ Skipping contractor ${contractor["Full Name"]} - missing location/email/radius data`);
            continue;
          }

          const distance = haversineDistance(
            contractor["Latitude"],
            contractor["Longitude"],
            lead["Latitude"],
            lead["Longitude"]
          );

          const serviceRadius = parseFloat(contractor["Service Radius"]);
          if (isNaN(serviceRadius)) {
            console.log(`⚠️ Skipping contractor ${contractor["Full Name"]} - invalid service radius`);
            continue;
          }

          if (distance <= serviceRadius) {
            matchingContractors.push({
              email: contractor["Email Address"],
              fullName: contractor["Full Name"] || "Contractor",
              phone: contractor["Phone Number"] || "",
            });
            console.log(`✅ Contractor ${contractor["Full Name"]} is within service radius (${distance.toFixed(2)} miles)`);
          }
        }

        // Send premium lead notifications to matching contractors
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
      // Don't fail the request if notification fails
    }
  } else {
    if (finalStatus !== "open") {
      console.log("Lead was auto-assigned, skipping premium lead notifications");
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
