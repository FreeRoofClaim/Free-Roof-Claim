import type { Metadata } from 'next';
import BlogLayout from '@/components/blog/BlogLayout';

const SLUG = 'what-to-expect-insurance-adjuster-roof-inspection';
const TITLE = 'What to Expect When the Insurance Adjuster Inspects Your Roof';
const DESCRIPTION =
  'A complete guide to the insurance adjuster roof inspection process - what they look for, how long it takes, what to have ready, and what to do if they miss damage or offer too little.';
const PUBLISHED_DATE = 'March 1, 2026';
const PUBLISHED_DATE_ISO = '2026-03-01';
const CITY = 'Nationwide';

export const metadata: Metadata = {
  title: `${TITLE} | FreeRoofPros`,
  description: DESCRIPTION,
  alternates: {
    canonical: `https://freeroofpros.com/blog/${SLUG}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `https://freeroofpros.com/blog/${SLUG}`,
    siteName: 'FreeRoofPros',
    type: 'article',
    publishedTime: PUBLISHED_DATE_ISO,
    authors: ['FreeRoofPros Team'],
    tags: ['insurance adjuster', 'roof inspection', 'insurance claim', 'storm damage', 'adjuster visit'],
  },
};

export default function WhatToExpectInsuranceAdjusterRoofInspection() {
  return (
    <BlogLayout
      title={TITLE}
      description={DESCRIPTION}
      publishedDate={PUBLISHED_DATE}
      publishedDateISO={PUBLISHED_DATE_ISO}
      readingTimeMinutes={8}
      slug={SLUG}
      city={CITY}
    >
      <p className="text-gray-700 leading-relaxed mb-4">
        The insurance adjuster visit is the single most important moment in your roof claim. What
        the adjuster documents - or fails to document - determines your initial settlement offer.
        A well-prepared homeowner who has a roofing contractor present typically receives a materially
        higher settlement than one who shows up alone with no documentation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This guide tells you exactly what to expect before, during, and after the adjuster
        inspection - including what adjusters look for, how long the visit takes, what to have ready,
        and what to do if your damage is missed or your offer comes in too low.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        What Type of Adjuster Will Inspect Your Roof?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all adjusters are the same - and the type assigned to your claim affects how the
        inspection goes:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>
          <strong>Staff adjuster (company adjuster):</strong> A full-time employee of your insurance
          company. They handle the inspection directly and have authority to approve or deny your claim.
          Most common for routine claims.
        </li>
        <li>
          <strong>Independent adjuster (IA):</strong> A licensed adjuster contracted by your insurer
          to handle claims during high-volume periods - typically after a major storm event. They work
          on behalf of the insurer, not you. May be less familiar with local roofing conditions
          and material pricing.
        </li>
        <li>
          <strong>Desk adjuster (virtual adjuster):</strong> Reviews your claim remotely using
          photos, satellite imagery, and documentation without visiting your property. Increasingly
          common for minor claims. Higher risk of missed damage since they never physically
          examine your roof.
        </li>
        <li>
          <strong>Public adjuster:</strong> Works for YOU, not the insurer. You hire and pay a
          public adjuster (typically 10-15% of settlement) to advocate for the highest possible
          settlement. Most valuable on complex or high-value claims.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Before the Adjuster Arrives: 5 Things to Have Ready
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Preparation before the visit can increase your settlement significantly. Have these five
        items ready before your adjuster arrives:
      </p>

      <table className="w-full border-collapse mb-6">
        <thead>
          <tr>
            <th className="bg-blue-600 text-white px-4 py-2 text-left">Item</th>
            <th className="bg-blue-600 text-white px-4 py-2 text-left">Why It Matters</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-200">Your insurance policy and declarations page</td>
            <td className="px-4 py-2 border border-gray-200">Know your deductible, coverage type (RCV vs. ACV), and any wind/hail exclusions before the visit</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border border-gray-200">Your contractor&apos;s written damage report</td>
            <td className="px-4 py-2 border border-gray-200">A professional assessment before the adjuster arrives gives you a benchmark and documents damage the adjuster might miss</td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-200">Timestamped photos and video of all damage</td>
            <td className="px-4 py-2 border border-gray-200">Establishes the condition immediately after the storm before any weathering or secondary deterioration</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border border-gray-200">Maintenance records or previous inspection reports</td>
            <td className="px-4 py-2 border border-gray-200">Demonstrates that your roof was in good condition before the storm and counters any &quot;pre-existing condition&quot; arguments</td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-200">Written list of questions for the adjuster</td>
            <td className="px-4 py-2 border border-gray-200">Ensures you do not forget to ask about timeline, scope, Xactimate pricing, and next steps</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        The Single Most Important Step: Have Your Contractor Present
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        An experienced roofing contractor present during the adjuster inspection is the most valuable
        thing you can do for your claim. Contractors who regularly work insurance claims know:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>Where to look for collateral damage (gutters, HVAC units, window screens, fascia, skylights) that adjusters routinely miss</li>
        <li>How to identify and point out hail hits on test squares that meet the threshold for functional damage</li>
        <li>What code upgrade items apply to your local jurisdiction</li>
        <li>How to read the Xactimate estimate and identify missing line items on the spot</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        A contractor who understands your local damage patterns and insurer tendencies is far more
        valuable than arriving alone. For more on identifying what storm damage looks like, see our
        guide to{' '}
        <a href="/blog/signs-of-hail-damage-on-roof" className="text-blue-600 hover:underline">
          signs of hail damage on a roof
        </a>
        .
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        During the Inspection: What the Adjuster Is Looking For
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A standard in-person roof inspection takes 45 to 90 minutes. Here is what the adjuster
        will typically examine:
      </p>
      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Test Squares</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Adjusters use a method called &quot;test squares&quot; to assess hail damage. They mark off a 10x10
        foot (100 square foot) section of the roof and count the number of hail hits within that area.
        Industry standard is that 8 or more hits per 100 square feet in a representative sample
        indicates functional damage to the entire slope. Your contractor should be watching to ensure
        the test squares are placed representatively - not in the least-damaged areas.
      </p>
      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">What Adjusters Document on the Roof</h3>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>Shingle bruising, cracking, or granule loss consistent with hail impact</li>
        <li>Missing or lifted shingles from wind damage</li>
        <li>Damaged ridge cap, hip ridge, and starter strip</li>
        <li>Condition of pipe boots, vents, and flashing</li>
        <li>Exposed or cracked underlayment</li>
        <li>Any structural deck damage visible from surface or attic</li>
      </ul>
      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Collateral Damage Check</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A thorough adjuster will also check non-roof surfaces for evidence of the same storm event -
        dented gutters, dented HVAC condenser fins, pitted window screens, and damaged siding. This
        &quot;collateral damage&quot; serves two purposes: it corroborates the storm event and may be
        separately covered under your policy. Your contractor should walk the property with the
        adjuster to ensure nothing is overlooked.
      </p>
      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Xactimate Estimate Generation</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The adjuster takes measurements, notes all damage, and inputs the data into Xactimate software
        - either on-site with a tablet or back at the office. Xactimate generates a line-item estimate
        for every component of the repair or replacement. This becomes the insurer&apos;s initial
        settlement position.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        What NOT to Do During the Adjuster Visit
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>
          <strong>Do not make permanent repairs before the inspection.</strong> Once the old shingles
          are gone, documenting the original damage becomes much harder. Make only emergency temporary
          repairs (tarps) until after the adjuster visit.
        </li>
        <li>
          <strong>Do not sign anything on the spot.</strong> Some adjusters may present a settlement
          release or authorization form at the inspection. Do not sign anything that closes your
          claim until you have reviewed the written estimate in full.
        </li>
        <li>
          <strong>Do not accept a verbal estimate as final.</strong> Get everything in writing. The
          written Xactimate report is the binding document - not anything said during the visit.
        </li>
        <li>
          <strong>Do not assume the adjuster found everything.</strong> Even thorough adjusters miss
          items. You have the right to review the estimate and dispute missing items through a
          supplement or re-inspection.
        </li>
        <li>
          <strong>Do not agree to waive your re-inspection rights.</strong> If you disagree with the
          scope, you are entitled to request a re-inspection or invoke the appraisal clause in your
          policy.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        After the Inspection: What Happens Next
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the in-person visit, expect to receive the written Xactimate estimate within 7 to 14
        business days. Some insurers issue it faster; after major regional storms with high claim
        volume, it may take longer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        When the estimate arrives, review it with your contractor immediately. Compare it line by line
        against the contractor&apos;s scope of work. Common missing items include ice-and-water shield,
        ridge cap, permit fees, code upgrade items, and collateral damage to gutters or soffits.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        What to Do If the Adjuster Missed Damage
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your contractor identifies significant damage not included in the adjuster&apos;s estimate,
        your contractor can submit a supplemental claim - a written request with documentation
        (photos, measurements, line items) to add the missed items to the settlement. Most legitimate
        supplements are reviewed and accepted within 2-4 weeks.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If the supplement is denied or the gap is substantial, you have additional options: a
        re-inspection by a different adjuster, invoking the appraisal clause (which brings in a
        neutral appraiser), filing a complaint with your state insurance commissioner, or consulting
        a public adjuster or insurance attorney.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For detailed negotiation tactics, see our guide on{' '}
        <a href="/blog/how-to-negotiate-roof-insurance-claim" className="text-blue-600 hover:underline">
          how to negotiate a roof insurance claim
        </a>
        . For questions about what your policy covers and how the claims process works, visit the{' '}
        <a href="/faq" className="text-blue-600 hover:underline">FreeRoofPros FAQ</a>.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Action Checklist: Preparing for Your Adjuster Visit
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>Schedule your licensed roofing contractor to be present at the same time as the adjuster - confirm this when you book the inspection.</li>
        <li>Have your policy documents, claim number, and deductible amount ready before the visit.</li>
        <li>Provide your contractor&apos;s written damage report to the adjuster at the start of the inspection.</li>
        <li>Walk the entire property with the adjuster and contractor - do not let the adjuster inspect the roof alone.</li>
        <li>Ask the adjuster directly: what is your scope, what will you include, and when will I receive the written estimate?</li>
        <li>Do not sign any release or settlement agreement at the inspection without reviewing the full written estimate first.</li>
        <li>When the estimate arrives, compare it line by line to your contractor&apos;s scope and note any discrepancies immediately.</li>
        <li>If damage is missing from the estimate, have your contractor file a formal supplement within 30 days of receiving the estimate.</li>
        <li>Note your state&apos;s re-inspection and lawsuit deadlines so you know how much time you have to dispute a low offer.</li>
      </ul>
    </BlogLayout>
  );
}
