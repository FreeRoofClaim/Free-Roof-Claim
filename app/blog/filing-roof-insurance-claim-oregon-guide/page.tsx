import type { Metadata } from 'next';
import BlogLayout from '@/components/blog/BlogLayout';

const SLUG = 'filing-roof-insurance-claim-oregon-guide';
const TITLE = 'Complete Guide to Filing a Roof Insurance Claim in Oregon';
const DESCRIPTION =
  'An Oregon-specific guide to filing a roof insurance claim — covering documentation requirements, the insurance company process, common pitfalls, and how FreeRoofPros helps Central Oregon homeowners maximize their claim.';
const PUBLISHED_DATE = 'March 5, 2026';
const PUBLISHED_DATE_ISO = '2026-03-05';
const CITY = 'Oregon';

export const metadata: Metadata = {
  title: `${TITLE} | FreeRoofPros`,
  description: DESCRIPTION,
  alternates: {
    canonical: `https://www.freeroofpros.com/blog/${SLUG}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `https://www.freeroofpros.com/blog/${SLUG}`,
    siteName: 'FreeRoofPros',
    type: 'article',
    publishedTime: PUBLISHED_DATE_ISO,
    authors: ['FreeRoofPros Team'],
    tags: ['roof insurance claim', 'Oregon', 'hail damage', 'insurance process', 'claim guide'],
  },
};

export default function FilingRoofInsuranceClaimOregonGuidePage() {
  return (
    <BlogLayout
      title={TITLE}
      description={DESCRIPTION}
      publishedDate={PUBLISHED_DATE}
      publishedDateISO={PUBLISHED_DATE_ISO}
      readingTimeMinutes={10}
      slug={SLUG}
      city={CITY}
    >
      <p className="text-gray-700 leading-relaxed mb-4">
        Filing a roof insurance claim in Oregon is not as simple as calling your insurer and waiting for a check. The process involves documentation requirements, adjuster negotiations, potential underpayment disputes, and deadlines that, once missed, are nearly impossible to recover. For Central Oregon homeowners affected by the August 5, 2025 hailstorm, the <strong>August 2026 claim filing deadline</strong> makes acting quickly essential.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This guide covers the full process from first notice to final payment — including the specific Oregon laws and regulations that work in your favor.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Phase 1: Before You File — Documentation Is Everything</h2>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 1: Get a Professional Roof Inspection</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before you call your insurance company, schedule a free <a href="/services/storm-damage-repair" className="text-blue-600 hover:underline">storm damage inspection</a> from a licensed Oregon roofing contractor. This accomplishes three things:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>Determines whether damage exists and meets the threshold for a viable claim</li>
        <li>Creates a professional written record with dated photographs that predates your insurer&apos;s adjuster visit</li>
        <li>Gives you an independent estimate to compare against your insurer&apos;s offer</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For details on what this inspection involves, read our guide on <a href="/blog/hail-damage-roof-inspection-what-happens" className="text-blue-600 hover:underline">what happens during a free hail damage roof inspection</a>.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 2: Gather Supporting Documentation</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Assemble the following before filing:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>Your contractor&apos;s inspection report</strong> with photographs, impact counts, and scope of damage</li>
        <li><strong>Date-stamped photos</strong> you took yourself after the storm (gutters, AC unit, visible shingle damage)</li>
        <li><strong>Weather documentation</strong> — the NWS storm report for the August 5, 2025 Deschutes County event, a HailTrace report for your specific address, or both</li>
        <li><strong>Pre-storm documentation</strong> — if you have photos of your roof from before August 2025 (real estate listing photos, prior inspection reports), these help establish that damage is new</li>
        <li><strong>Any receipts</strong> for emergency temporary repairs (tarping, emergency water mitigation)</li>
        <li><strong>Your insurance policy</strong> — particularly the declarations page and the Duties After Loss section</li>
      </ul>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Phase 2: Filing the Claim</h2>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">How to Notify Your Insurer</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Call your insurer&apos;s claims line — not your agent — to file. Your agent can help, but the claims department handles the actual filing. When you call:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>State clearly: &quot;I&apos;m filing a claim for hail damage to my roof from the August 5, 2025 storm in Deschutes County, Oregon.&quot;</li>
        <li>Provide your policy number, property address, and phone number</li>
        <li>Note the claim number they give you — every subsequent communication should reference this number</li>
        <li>Ask for the name and direct contact information of the adjuster assigned to your claim</li>
        <li>Ask: &quot;What is the required proof of loss deadline under my policy?&quot;</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Follow up your call immediately with an email or letter confirming the filing date and the details of your conversation. This creates a paper trail that protects you if the insurer later disputes the notice date.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">What Oregon Law Requires of Your Insurer After You File</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under Oregon insurance regulations (OAR Chapter 836), once you file a claim your insurer must:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>Acknowledge your claim</strong> within 30 days of receiving notification</li>
        <li><strong>Complete their investigation</strong> within 45 days of receiving your notification</li>
        <li><strong>Accept or deny the claim</strong> within 30 days after receiving a completed proof of loss</li>
        <li><strong>Provide updates</strong> every 45 days if they need additional time to investigate</li>
        <li><strong>Pay undisputed amounts promptly</strong> — Oregon law prohibits unreasonable delay in payment</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer misses any of these deadlines or communicates poorly, document it and file a complaint with the <a href="https://dfr.oregon.gov/insure/home/storm/pages/index.aspx" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Oregon Division of Financial Regulation</a> at 888-877-4894.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Phase 3: The Adjuster Inspection</h2>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">What to Do Before the Adjuster Arrives</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The adjuster inspection is the most important event in the claim process. Do not treat it as a formality. Before they arrive:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>Request that your roofing contractor be present</strong> — you have the right to have a licensed contractor accompany the adjuster during the inspection. This is perhaps the single most important step you can take to protect your claim value.</li>
        <li><strong>Provide the contractor&apos;s inspection report</strong> to the adjuster at the start of their visit</li>
        <li><strong>Do not make any permanent repairs</strong> before the adjuster has seen the damage — only emergency tarping is acceptable</li>
        <li><strong>Ensure all previously identified damage areas are accessible</strong></li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Understanding the Adjuster&apos;s Role</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance adjusters are employees or contracted representatives of your insurance company. Their job is to determine the scope of covered damage and produce an estimate — using software called Xactimate that most Oregon insurers use as their standard estimating tool. The adjuster&apos;s goal is accurate assessment, but they are working for the insurer, not for you.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A common dispute arises over partial replacement vs. full replacement. If the adjuster says only one slope of your roof needs replacement but your contractor says the entire roof must be replaced for consistent material matching (as Oregon courts have upheld), you have grounds to dispute the partial scope.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Phase 4: Reviewing the Settlement Offer</h2>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">ACV vs. RCV: The Most Important Policy Distinction</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your policy pays based on either <strong>Actual Cash Value (ACV)</strong> or <strong>Replacement Cost Value (RCV)</strong>. Understanding the difference determines how much you actually receive:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>ACV policies</strong> pay the depreciated value of your old roof — if your 15-year-old roof has a 20-year lifespan, they may pay only 25% of the replacement cost after depreciation. For a $20,000 roof replacement, that might mean a $5,000 check minus your deductible.</li>
        <li><strong>RCV policies</strong> pay the full cost to replace the damaged property with new materials of similar quality. The insurer typically pays ACV first, then releases the &quot;recoverable depreciation&quot; after the work is completed and you submit receipts.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Check your declarations page right now to confirm which type you have. If you have ACV coverage on a damaged roof, you may want to discuss upgrading to RCV coverage with your agent before the next renewal — though that won&apos;t help with the current claim.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">How to Dispute an Underpayment</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the adjuster&apos;s estimate is significantly lower than your contractor&apos;s estimate, you have options:
      </p>
      <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>Request a re-inspection</strong> with your contractor present if they weren&apos;t there for the first one</li>
        <li><strong>Submit a supplemental claim</strong> — contractors regularly identify items the adjuster missed (code upgrades, permit costs, drip edge replacement, ice and water shield requirements) that can be added to the original estimate</li>
        <li><strong>Invoke the appraisal clause</strong> — most Oregon homeowners policies include a dispute resolution mechanism where both parties hire an independent appraiser, and the two appraisers select a neutral umpire whose decision is binding</li>
        <li><strong>Hire a licensed public adjuster</strong> — a public adjuster works for you (not the insurer) and charges a percentage of the claim settlement; they can be worth it for large or complicated disputes</li>
        <li><strong>File a complaint with Oregon DFR</strong> — if you believe your insurer is acting in bad faith or violating Oregon&apos;s claims handling regulations</li>
      </ol>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Pitfalls That Reduce or Eliminate Oregon Roof Claims</h2>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Missing the Proof of Loss Deadline</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After you file your initial notice, your insurer will likely ask you to complete a formal &quot;Proof of Loss&quot; document. This sworn statement of the details and value of your claim typically must be filed within 60 days of the insurer&apos;s request. Missing this deadline can result in claim denial even if you filed your initial notice on time.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Making Repairs Before the Adjuster Visits</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Only perform emergency temporary repairs (tarping an active leak) before the adjuster has documented the damage. Permanent repairs made before the insurer&apos;s inspection eliminate their ability to assess the damage — giving them grounds to deny the claim or reduce the payout.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Signing an Assignment of Benefits Agreement</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some contractors ask you to sign an Assignment of Benefits (AOB) agreement, which transfers your insurance claim rights to them. This removes you from the process and can lead to disputes between the contractor and your insurer that delay your project — sometimes for months. Avoid AOB agreements. You have the right to manage your own claim.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Accepting the First Offer Without Review</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance adjuster estimates are opening offers, not final determinations. A significant percentage of initial offers are lower than the full cost of repair or replacement, particularly when code upgrades or material matching requirements haven&apos;t been accounted for. Always have your contractor review the adjuster&apos;s estimate before accepting.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Waiting Too Long</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most common and most costly mistake. For the August 2025 storm, the practical claim deadline is <strong>August 2026</strong>. After that, most insurers will deny the claim as untimely. Review our detailed guide on <a href="/blog/oregon-roof-insurance-claim-deadline" className="text-blue-600 hover:underline">Oregon roof insurance claim deadlines</a> for the full legal framework.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How FreeRoofPros Helps Central Oregon Homeowners</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        FreeRoofPros connects <a href="/bend-or" className="text-blue-600 hover:underline">Bend</a>, <a href="/redmond-or" className="text-blue-600 hover:underline">Redmond</a>, and <a href="/la-pine-or" className="text-blue-600 hover:underline">La Pine</a> homeowners with vetted, licensed Oregon contractors who specialize in the full insurance claim cycle — from initial inspection through adjuster negotiations, supplemental claims, and final <a href="/services/roof-replacement" className="text-blue-600 hover:underline">roof replacement</a>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Our contractors understand Xactimate — the software your insurer&apos;s adjuster uses — and know how to build a documented case that supports the full scope of covered damage. They know the Oregon-specific requirements: permit costs, code upgrades required by Deschutes County, and the Class 4 impact-resistant shingle standards that are increasingly standard in Central Oregon.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The <a href="/services/insurance-claims" className="text-blue-600 hover:underline">insurance claims process</a> is complex. Our goal is to make sure you receive every dollar you&apos;re entitled to — without having to become an insurance expert yourself.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Start With a Free Inspection</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every successful roof insurance claim in Oregon starts with thorough documentation. A free inspection from a FreeRoofPros contractor gives you the professional report, photographs, and scope assessment you need to file a credible claim — at no cost and with no obligation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The August 2026 deadline for the August 2025 storm is approaching. Don&apos;t leave money on the table.</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><a href="/#lead-form" className="text-blue-600 hover:underline">Schedule Your Free Roof Inspection at FreeRoofPros.com</a></strong><br />
        Call us: <strong>541-728-0266</strong><br />
        Email: <strong>info@freeroofpros.com</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>We serve homeowners throughout Bend, Redmond, La Pine, Sunriver, Tumalo, and all of Deschutes County. Free inspection, no obligation.</em>
      </p>
    </BlogLayout>
  );
}
