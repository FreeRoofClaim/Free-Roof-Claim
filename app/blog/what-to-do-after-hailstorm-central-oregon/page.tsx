import type { Metadata } from 'next';
import Link from 'next/link';
import BlogLayout from '@/components/blog/BlogLayout';

const SLUG = 'what-to-do-after-hailstorm-central-oregon';
const TITLE = 'What to Do After a Hailstorm in Central Oregon: A Homeowner\'s Checklist';
const DESCRIPTION =
  'A step-by-step checklist for Central Oregon homeowners after a hailstorm \u2014 covering immediate safety steps, documentation, when to call your insurance company, when to get a roof inspection, and how to protect your claim before Oregon\'s filing deadline.';
const PUBLISHED_DATE = 'March 5, 2026';
const PUBLISHED_DATE_ISO = '2026-03-05';
const CITY = 'Central Oregon';

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
    tags: ['after hailstorm checklist', 'Central Oregon', 'hail damage', 'roof inspection', 'insurance claim'],
  },
};

export default function WhatToDoAfterHailstormCentralOregonPage() {
  return (
    <BlogLayout
      title={TITLE}
      description={DESCRIPTION}
      publishedDate={PUBLISHED_DATE}
      publishedDateISO={PUBLISHED_DATE_ISO}
      readingTimeMinutes={7}
      slug={SLUG}
      city={CITY}
    >
      {/* BLUF */}
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>After a hailstorm in Central Oregon, the most important thing to do in the first 24\u201372 hours is document everything, do not make permanent repairs, and notify your insurer \u2014 even if you are not sure you have a claim.</strong> Oregon&apos;s one-year policy filing deadline means every week you wait narrows your options. For homeowners affected by the August 5, 2025 Bend hailstorm, that deadline is <strong>August 5, 2026</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This checklist walks through exactly what to do \u2014 in order \u2014 from the first hour after a storm to the day your claim check arrives.
      </p>

      <hr className="my-8 border-gray-200" />

      {/* Phase 1 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Phase 1: The First 24 Hours \u2014 Safety and Documentation</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Goal: Create a dated, thorough record of all storm damage before anything changes.</strong>
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 1 \u2014 Ensure It Is Safe to Go Outside</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hailstorms in Central Oregon often bring lightning. Wait until the storm has fully passed before going outside to assess damage. Check for downed power lines and standing water before walking around your property.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 2 \u2014 Photograph and Video Everything, Immediately</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your phone camera is your most important tool in the first 24 hours. Walk your entire property and document:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>Gutters and downspouts</strong> \u2014 dents, dings, and accumulated hailstones are easy to photograph and hard for insurers to dispute</li>
        <li><strong>Window screens and sills</strong> \u2014 punctured screens are a clear indicator of hail size and impact force</li>
        <li><strong>Siding</strong> \u2014 look for circular dents or cracks, especially on aluminum, vinyl, or wood siding</li>
        <li><strong>HVAC units and outdoor equipment</strong> \u2014 dented fins on air conditioning units are among the clearest evidence of hail size</li>
        <li><strong>Vehicles</strong> \u2014 dents in your car confirm hail size and intensity even if roof damage isn&apos;t immediately visible</li>
        <li><strong>Roof (from the ground)</strong> \u2014 photograph any visible missing shingles, displaced flashing, or debris on the roof surface</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Upload all photos to cloud storage immediately</strong> (Google Photos, iCloud, Dropbox) with automatic date-stamping enabled. This prevents any future dispute about when the photos were taken.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 3 \u2014 Take Emergency Mitigation Steps Only</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your roof is actively leaking, apply a tarp to prevent further water damage. This is the only type of repair you should make before your insurance adjuster has documented the damage. Permanent repairs made before the adjuster&apos;s visit can reduce or void your claim. Document the tarp installation with photos.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 4 \u2014 Collect the Storm Record</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance adjusters sometimes dispute whether a storm was severe enough to cause the damage claimed. Beat them to it by collecting:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>National Weather Service storm reports for your area (available at weather.gov)</li>
        <li>Any news coverage of the storm (Bend Bulletin, KTVZ, OPB)</li>
        <li>Hail size data from HailTrace or StormSite for your specific address</li>
        <li>NWS severe thunderstorm warnings issued for your county</li>
      </ul>

      <hr className="my-8 border-gray-200" />

      {/* Phase 2 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Phase 2: Within 72 Hours \u2014 Get a Professional Inspection</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Goal: Establish an independent, professional damage assessment before your insurer&apos;s adjuster visits.</strong>
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Why You Need a Roof Inspection Before Calling Your Insurer</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your insurer&apos;s adjuster is not your advocate. Their job is to assess damage objectively \u2014 but in practice, adjusters often miss non-visible hail damage like granule loss, micro-fractures in shingles, and bruising that only shows up under close inspection. Hail damage that an untrained eye misses on the ground can represent thousands of dollars in long-term roof deterioration.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Getting a written inspection report from a licensed Oregon roofing contractor before the adjuster&apos;s visit gives you a documented baseline. If the adjuster&apos;s estimate comes in significantly lower, you have grounds to dispute it with an independent professional assessment already in hand.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">What a Professional Hail Inspection Includes</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A thorough hail damage inspection covers:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>Granule loss assessment</strong> \u2014 measured by checking granule accumulation in gutters and using close-range inspection of shingle surfaces</li>
        <li><strong>Bruise mapping</strong> \u2014 documenting the location and density of hail impact points across each roof plane</li>
        <li><strong>Flashing, ridge cap, and vent assessment</strong> \u2014 often-overlooked areas that take significant hail damage</li>
        <li><strong>Substrate inspection</strong> \u2014 checking whether impacts penetrated through the shingle to the underlayment or decking</li>
        <li><strong>Measurements and photo documentation</strong> \u2014 tied to a written report suitable for insurance claim submission</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        FreeRoofPros provides free professional inspections for Central Oregon homeowners with no obligation. <Link href="/" className="text-blue-600 hover:underline">Schedule yours here</Link> or call <strong>(541) 728-0266</strong>.
      </p>

      <hr className="my-8 border-gray-200" />

      {/* Phase 3 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Phase 3: File Your Insurance Claim</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Goal: Initiate your claim promptly with full documentation, without making statements that could limit your payout.</strong>
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">When Should I Call My Insurance Company?</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        File within 7\u201314 days of the storm if possible. Under Oregon DFR rules, your insurer has 30 days to acknowledge your claim after notification. Filing promptly starts that clock running and gets the adjuster visit scheduled before weather conditions change the evidence.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        You do not need to wait until you have a full damage estimate. You can file a preliminary notice of loss \u2014 essentially telling your insurer that a storm occurred and you believe there may be damage \u2014 and follow up with the full claim documentation once your inspection is complete.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">What to Say (and Not Say) When You File</h3>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>Do say:</strong> The date of the storm, the type of damage you observed, and that you have not yet had a professional inspection completed</li>
        <li><strong>Do not say:</strong> &quot;It&apos;s probably not that bad&quot; or &quot;I&apos;m not sure I want to file&quot; \u2014 these statements can be used later to minimize your claim</li>
        <li><strong>Do not say:</strong> Any specific dollar amount until you have a professional estimate in hand</li>
        <li><strong>Do ask:</strong> What documentation they need, what the inspection timeline will be, and whether you have RCV or ACV coverage on your roof</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Read Your &quot;Duties After Loss&quot; Section</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every Oregon homeowners policy includes a &quot;Duties After Loss&quot; section that specifies exactly what you must do after a storm event \u2014 when to notify your insurer, what records to keep, how to cooperate with the investigation. Violating these requirements, even unknowingly, can give your insurer grounds to deny the claim. Read this section before you file and follow it precisely.
      </p>

      <hr className="my-8 border-gray-200" />

      {/* Phase 4 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Phase 4: The Adjuster Visit</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Goal: Be present, be prepared, and do not let your contractor or adjuster rush the process.</strong>
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Should I Be Present During the Adjuster&apos;s Inspection?</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Yes \u2014 and you should have your licensed contractor present as well. Under Oregon law, you have the right to have a professional representative present during any inspection. Your contractor can point out damage the adjuster might miss and document any disagreements in real time. An adjuster who knows a licensed contractor is watching typically does a more thorough assessment.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">What If the Adjuster&apos;s Estimate Is Much Lower Than the Contractor&apos;s?</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is common and it is not the end of the road. You can:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>Submit your contractor&apos;s written estimate as a formal supplement to the claim</li>
        <li>Request a re-inspection with a different adjuster</li>
        <li>File a complaint with the Oregon Division of Financial Regulation (888-877-4894)</li>
        <li>Hire a licensed public adjuster to represent your interests</li>
        <li>Exercise your policy&apos;s appraisal clause (most Oregon policies include one) to get a neutral third-party assessment</li>
      </ul>

      <hr className="my-8 border-gray-200" />

      {/* Phase 5 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Phase 5: After Approval \u2014 Watch the Deadlines</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Goal: Collect every dollar you&apos;re owed, including recoverable depreciation, without missing the completion deadline.</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have RCV coverage, you will receive a first check (the ACV payment) when your claim is approved and a second check (recoverable depreciation) only after you complete repairs and submit proof. Most insurers give you 6\u201312 months to complete repairs. Ask your insurer for this deadline in writing and put it in your calendar. Miss it, and you forfeit that second check permanently.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        After your contractor completes the work, submit the final invoice and certificate of completion to your insurer promptly. If the actual repair cost exceeded the original estimate due to hidden damage discovered during tear-off, ask your contractor to submit a supplement claim for the additional amount.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Questions about your specific situation? Our team at FreeRoofPros handles claim documentation, adjuster meetings, and supplement submissions for Central Oregon homeowners. <Link href="/" className="text-blue-600 hover:underline font-semibold">Get your free inspection &rarr;</Link> or call <strong>(541) 728-0266</strong>.
      </p>
    </BlogLayout>
  );
}
