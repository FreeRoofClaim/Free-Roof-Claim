import type { Metadata } from 'next';
import BlogLayout from '@/components/blog/BlogLayout';

const SLUG = 'roof-insurance-claim-process-step-by-step';
const TITLE = 'The Roof Insurance Claim Process: A Step-by-Step Guide for Homeowners';
const DESCRIPTION =
  'A complete walkthrough of the roof insurance claim process - from documenting damage to collecting your final payment. Learn what to say, what to avoid, and how the two-payment RCV system works.';
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
    tags: ['insurance claim process', 'roof claim steps', 'storm damage', 'insurance adjuster', 'roof replacement'],
  },
};

export default function RoofInsuranceClaimProcessStepByStep() {
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
        Filing a roof insurance claim for the first time is confusing - and the stakes are high. A
        typical roof replacement costs $8,000 to $20,000. How you navigate the claims process can
        mean the difference between a full payout and a settlement that leaves you thousands of
        dollars short.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This guide walks through every step of the process, from the moment you suspect storm damage
        to the day you collect your final depreciation check. We cover typical timelines, what to say
        to your insurer, what to avoid saying, and how the two-payment system works for replacement
        cost value (RCV) policies.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Overview: The 7 Steps of a Roof Insurance Claim
      </h2>

      <table className="w-full border-collapse mb-6">
        <thead>
          <tr>
            <th className="bg-blue-600 text-white px-4 py-2 text-left">Step</th>
            <th className="bg-blue-600 text-white px-4 py-2 text-left">Action</th>
            <th className="bg-blue-600 text-white px-4 py-2 text-left">Typical Timeline</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-200">1</td>
            <td className="px-4 py-2 border border-gray-200">Inspect and document damage</td>
            <td className="px-4 py-2 border border-gray-200">Day 1-7 after storm</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border border-gray-200">2</td>
            <td className="px-4 py-2 border border-gray-200">Review your insurance policy</td>
            <td className="px-4 py-2 border border-gray-200">Day 1-3</td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-200">3</td>
            <td className="px-4 py-2 border border-gray-200">File the claim with your insurer</td>
            <td className="px-4 py-2 border border-gray-200">Day 3-14</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border border-gray-200">4</td>
            <td className="px-4 py-2 border border-gray-200">Adjuster inspection</td>
            <td className="px-4 py-2 border border-gray-200">7-21 days after filing</td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-200">5</td>
            <td className="px-4 py-2 border border-gray-200">Receive estimate and settlement offer</td>
            <td className="px-4 py-2 border border-gray-200">7-14 days after adjuster visit</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border border-gray-200">6</td>
            <td className="px-4 py-2 border border-gray-200">Negotiate or supplement if needed</td>
            <td className="px-4 py-2 border border-gray-200">2-8 weeks after initial offer</td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-200">7</td>
            <td className="px-4 py-2 border border-gray-200">Complete repairs and collect final payment</td>
            <td className="px-4 py-2 border border-gray-200">30-90 days total from filing</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Step 1: Inspect and Document the Damage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before you call your insurer, document everything. Take photos and video of all visible
        damage from ground level and from inside the attic if you can safely access it. Look for:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>Missing, cracked, or curled shingles</li>
        <li>Granule loss in gutters or on the ground below downspouts</li>
        <li>Dents on metal flashing, vents, or gutters (strong indicator of hail)</li>
        <li>Bruised or dimpled shingles (press gently - a soft spot indicates hail bruising)</li>
        <li>Damaged skylights, chimneys, or pipe boots</li>
        <li>Interior water stains on ceilings or in the attic</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Save any weather alerts, radar screenshots, or news articles confirming the storm event in
        your area. This date-stamps the event and counters any insurer argument about the cause of
        damage. Most importantly, schedule a professional roof inspection with a licensed contractor
        immediately - ideally before your adjuster arrives. A contractor&apos;s written damage report is
        one of the most powerful tools in your claim.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Step 2: Review Your Insurance Policy Before You Call
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before contacting your insurer, spend 20 minutes with your policy. Locate and note:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>Your coverage type - RCV (replacement cost value) or ACV (actual cash value)</li>
        <li>Your all-perils deductible and your wind/hail deductible (they may differ)</li>
        <li>Any cosmetic damage exclusion for hail</li>
        <li>The notice requirement (how many days you have to report)</li>
        <li>Whether you have code upgrade coverage (Ordinance or Law coverage)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding the difference between RCV and ACV before you call can help you interpret the
        settlement offer correctly. See our full breakdown of{' '}
        <a href="/blog/rcv-vs-acv-roof-insurance" className="text-blue-600 hover:underline">
          RCV vs. ACV roof insurance
        </a>{' '}
        to understand how depreciation affects your payout.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Step 3: File the Claim With Your Insurer
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most insurers allow claims to be filed online, through a mobile app, or by phone. Have the
        following ready before you make contact:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>Your policy number</li>
        <li>The date and approximate time of the storm</li>
        <li>A brief description of the damage (keep it factual and concise)</li>
        <li>Photos or video documentation</li>
        <li>Any emergency repair receipts (tarps, temporary patches)</li>
      </ul>
      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        What to Say - and What Not to Say - When Filing
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Do say:</strong> Factual, specific statements. &quot;On [date], my property experienced a
        hailstorm. I have observed damage to my roof shingles, gutters, and skylights. I am requesting
        an inspection.&quot;
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Do not say:</strong> Estimates of cost, speculation about the full extent of damage,
        or anything that could be interpreted as an admission that damage predates the storm. Avoid
        phrases like &quot;the roof was already in bad shape&quot; or &quot;I noticed this a while ago.&quot; Stick to
        the storm event and what you can directly observe.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        You will receive a claim number. Write it down. All future correspondence should reference it.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Step 4: The Adjuster Inspection
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your insurer will assign an adjuster - either a staff adjuster, an independent adjuster
        contracted to the insurer, or in some cases a desk adjuster who reviews photos and documentation
        remotely without visiting your property. In-person inspections typically take 45 to 90 minutes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Critical step: Have your roofing contractor present during the adjuster inspection.</strong>{' '}
        An experienced contractor knows what to point out, where to look for collateral damage
        (gutters, HVAC units, fascia, skylights), and how to document findings that an adjuster
        might otherwise overlook. This step alone can significantly increase your settlement amount.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The adjuster will use industry-standard software - typically Xactimate - to generate a scope
        of loss and a line-item cost estimate. This becomes the basis for your initial settlement offer.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Step 5: Review the Estimate and Settlement Offer
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Expect to receive the adjuster&apos;s written estimate within 7 to 14 days of the inspection.
        Review it carefully before accepting. Compare it line by line against the estimate from your
        roofing contractor. Common issues include:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>Missing line items (no ice-and-water shield, missing ridge cap, omitted skylights)</li>
        <li>Incorrect measurements or square footage</li>
        <li>Missing code upgrade items (required by local building department)</li>
        <li>Understated Xactimate pricing that does not reflect current market rates</li>
        <li>Omitted collateral damage (gutters, soffits, fascia)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For RCV policies, the initial payment will typically be an ACV check - your full replacement
        cost minus depreciation and minus your deductible. The remaining depreciation amount is held
        back until repairs are completed.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Step 6: Negotiate or Supplement If Needed
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You do not have to accept the first offer. If your contractor&apos;s estimate is higher than the
        adjuster&apos;s, your contractor can submit a supplemental claim with documentation supporting
        the additional line items. Most experienced roofing contractors work with insurers on
        supplements regularly.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For guidance on negotiation tactics, see our detailed guide on{' '}
        <a href="/blog/how-to-negotiate-roof-insurance-claim" className="text-blue-600 hover:underline">
          how to negotiate a roof insurance claim
        </a>
        . If your claim is denied or significantly underpaid, you may have grounds for a re-inspection,
        independent appraisal, or complaint to your state insurance commissioner.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Step 7: Complete Repairs and Collect Final Payment
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once you accept the settlement, your contractor begins work. For RCV policies, the payment
        process works in two stages:
      </p>
      <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
        <li>
          <strong>First check (ACV payment):</strong> Issued when your claim is approved. This covers
          the depreciated value of your roof minus your deductible. For example: $14,000 replacement
          cost - $3,500 depreciation - $2,000 deductible = $8,500 initial check.
        </li>
        <li>
          <strong>Second check (recoverable depreciation):</strong> Issued after you submit proof
          that repairs are completed - typically a final invoice from your contractor and photos of
          the finished roof. In this example, you would receive the remaining $3,500 once work
          is complete.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your mortgage lender is listed on the claim check, they will need to endorse it. Contact
        your lender as soon as you receive the check - this process can take several business days
        and should not delay your contractor scheduling.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Have questions about any stage of this process? The{' '}
        <a href="/faq" className="text-blue-600 hover:underline">FreeRoofPros FAQ</a>{' '}
        covers the most common homeowner questions from claim filing through final payment.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Action Checklist: Navigating Your Claim
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>Within 24-48 hours: Document all damage with timestamped photos and save weather records for the storm date.</li>
        <li>Within 7 days: Schedule a licensed contractor inspection and get a written damage report.</li>
        <li>Within 14-30 days: File your claim with your insurer using factual, storm-specific language.</li>
        <li>Before adjuster visit: Confirm your contractor will be present. Do not make permanent repairs yet.</li>
        <li>After adjuster visit: Compare their Xactimate estimate line by line against your contractor&apos;s report.</li>
        <li>If underpaid: Have your contractor file a supplement with documentation. Do not close the claim prematurely.</li>
        <li>After repairs: Submit your contractor&apos;s final invoice to release your depreciation holdback.</li>
        <li>If your lender is on the check: Contact them immediately to initiate their endorsement process.</li>
      </ul>
    </BlogLayout>
  );
}
