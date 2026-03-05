import type { Metadata } from 'next';
import BlogLayout from '@/components/blog/BlogLayout';
import Link from 'next/link';

const SLUG = 'rcv-vs-acv-roof-insurance';
const TITLE = 'RCV vs. ACV Roof Insurance: What It Means for Your Claim Payout';
const DESCRIPTION =
  'Understand the difference between Replacement Cost Value (RCV) and Actual Cash Value (ACV) roof insurance policies - and how it affects your real payout when you file a claim.';
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
    tags: ['RCV vs ACV', 'roof insurance', 'replacement cost', 'actual cash value', 'insurance claim'],
  },
};

export default function RcvVsAcvPage() {
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
        After a hailstorm or major wind event, most homeowners assume their insurance will simply pay for a new roof. The reality depends entirely on four letters buried in your policy: RCV or ACV. These two coverage types can mean the difference between a $15,000 check and a $6,000 check for the exact same roof on the exact same house. Understanding which one you have - and what it actually pays - is the single most important thing you can do before filing a claim.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Is Replacement Cost Value (RCV)?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Replacement Cost Value coverage pays to replace your damaged roof with materials of like kind and quality at today&apos;s prices, regardless of how old your current roof was. If a contractor quotes $18,000 to replace your storm-damaged roof, your RCV policy is designed to cover that full amount - minus your deductible.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        With RCV policies, most insurers use a two-check process. The first check, called the Actual Cash Value payment (or &quot;ACV payment&quot;), arrives after your claim is approved. This represents the depreciated value - what your roof was worth at the time of damage, not what it costs to replace it. The second check, called the &quot;recoverable depreciation&quot; payment, arrives after you complete the repairs and submit proof of completion to your insurer. Together, both checks add up to the full replacement cost minus your deductible.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">What Is Recoverable Depreciation?</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Depreciation is the calculated loss in value that your roof has experienced due to age and wear. A 10-year-old asphalt shingle roof that originally cost $15,000 to install might be depreciated by 40-50% by a typical insurance formula - leaving a current cash value of roughly $7,500 to $9,000. With RCV coverage, that depreciation is &quot;recoverable,&quot; meaning the insurer holds it in reserve and releases it once repairs are confirmed complete. With ACV coverage, you never see that money.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most insurers give you 6 to 12 months to complete repairs and claim recoverable depreciation. Miss that window, and you forfeit the holdback amount. Always confirm your insurer&apos;s specific deadline in writing.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Is Actual Cash Value (ACV)?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Actual Cash Value coverage pays only what your roof was worth at the time of the loss - after factoring in depreciation. There is no second check, no recoverable depreciation, and no way to get back the depreciation withheld. You receive one payment and must cover the gap between that and actual replacement cost out of pocket.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        ACV policies typically carry lower premiums, which is why many homeowners unknowingly choose them - or are defaulted into them by their insurer without fully understanding the trade-off. For a newer roof (under 5 years old), the depreciation gap is small. For a 15-year-old roof, it can be enormous.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Side-by-Side Payout Example: The Real Math</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The example below uses a common real-world scenario: a 10-year-old asphalt shingle roof with a replacement cost of $15,000, a $1,500 deductible, and 45% depreciation applied by the insurer.
      </p>

      <table className="w-full border-collapse mb-6">
        <thead>
          <tr>
            <th className="bg-blue-600 text-white px-4 py-2 text-left">Scenario</th>
            <th className="bg-blue-600 text-white px-4 py-2 text-left">RCV Policy</th>
            <th className="bg-blue-600 text-white px-4 py-2 text-left">ACV Policy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-200">Full Replacement Cost</td>
            <td className="px-4 py-2 border border-gray-200">$15,000</td>
            <td className="px-4 py-2 border border-gray-200">$15,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">Depreciation (45%)</td>
            <td className="px-4 py-2 border border-gray-200">-$6,750</td>
            <td className="px-4 py-2 border border-gray-200">-$6,750</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">ACV (Initial Check)</td>
            <td className="px-4 py-2 border border-gray-200">$8,250 - $1,500 deductible = $6,750</td>
            <td className="px-4 py-2 border border-gray-200">$8,250 - $1,500 deductible = $6,750</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">Recoverable Depreciation</td>
            <td className="px-4 py-2 border border-gray-200">$6,750 (released after repair)</td>
            <td className="px-4 py-2 border border-gray-200">$0 - not available</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">Total Homeowner Receives</td>
            <td className="px-4 py-2 border border-gray-200 font-semibold">$13,500</td>
            <td className="px-4 py-2 border border-gray-200 font-semibold">$6,750</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">Out-of-Pocket Gap</td>
            <td className="px-4 py-2 border border-gray-200">$1,500 (deductible only)</td>
            <td className="px-4 py-2 border border-gray-200 font-semibold text-red-600">$8,250</td>
          </tr>
        </tbody>
      </table>

      <p className="text-gray-700 leading-relaxed mb-4">
        That $6,750 difference is not a rounding error - it is the entire financial impact of the policy type you selected years ago when you bought your home. Most homeowners have no idea which coverage they hold until they file a claim.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How Does Depreciation Get Calculated?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers use standardized depreciation schedules based on the material type and expected useful life. A standard 3-tab asphalt shingle roof has an expected lifespan of about 20 years. If yours is 10 years old, the insurer may calculate it as 50% depreciated. Architectural (dimensional) shingles with a 30-year lifespan may be depreciated at only 33% at age 10.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Some insurers use a straight-line method (equal depreciation each year), while others use an accelerated schedule that front-loads depreciation in early years. The depreciation method is not always disclosed upfront. Ask your insurer specifically which schedule they apply - you have a right to that information.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Does Roof Age Affect What Policy You Can Get?</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Yes - significantly. Many insurers will only offer ACV coverage on roofs that are 15 to 20 years old or older, regardless of the homeowner&apos;s preference. Some will not write a new policy at all on roofs over 20 years unless the roof has been recently inspected and certified. In high-hail states like Texas, Oklahoma, Colorado, and Kansas, some carriers now require ACV coverage on roofs over 10 years old in certain counties.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your roof is aging, it is worth replacing proactively before your insurer reclassifies your policy to ACV-only at renewal. A new roof often qualifies for RCV coverage and can lower your premium by 10-20%.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Which States Restrict ACV-Only Policies?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        State insurance regulations vary considerably. Some states have consumer protection rules that limit when insurers can downgrade a homeowner to ACV-only coverage or impose special restrictions on roofing claims:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>Colorado:</strong> Senate Bill 22-212 (effective 2023) restricts insurers from applying cosmetic-only exclusions to roof damage claims and limits how ACV-only endorsements can be applied. Insurers must clearly disclose ACV roof endorsements at the time of sale.</li>
        <li><strong>Texas:</strong> The Texas Department of Insurance requires disclosure of any roof-specific ACV endorsement (called a &quot;cosmetic damage exclusion&quot;). Insurers must offer RCV as an option.</li>
        <li><strong>Oklahoma and Kansas:</strong> Recent legislative sessions have addressed insurer practices of mid-term policy downgrades. Check with your state insurance commissioner for the latest rules.</li>
        <li><strong>Most other states:</strong> Insurers have broad latitude to classify roof coverage, but must disclose the policy type clearly in writing at renewal.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Always review your policy&apos;s &quot;Roof Coverage Endorsement&quot; section - not just the declarations page - to confirm whether depreciation is recoverable on your specific roof claim. See our <Link href="/faq" className="text-blue-600 hover:underline">FreeRoofPros FAQ</Link> for common policy questions homeowners ask before filing.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Two-Check RCV Process: Step by Step</h2>
      <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
        <li>Your claim is approved and the insurer issues the first check (ACV payment minus your deductible).</li>
        <li>You hire a licensed roofing contractor and the work is completed. Get a final invoice and certificate of completion.</li>
        <li>Submit proof of completed repairs to your insurer - typically the final invoice, contractor&apos;s signed statement, and sometimes photos of the finished work.</li>
        <li>The insurer releases the withheld depreciation as a second check, typically within 15-30 days of documentation submission.</li>
        <li>If the actual repair cost exceeds the original estimate, you may be entitled to a supplement (additional payment) - always ask.</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Supplemental claims are common in roofing because hidden damage is often discovered during tear-off. A good contractor will document any additional damage and submit a supplement to your insurer on your behalf. To understand how this played out in a real storm event, read our coverage of the <Link href="/blog/central-oregon-hailstorm-2025" className="text-blue-600 hover:underline">Central Oregon Hailstorm 2025</Link>, where many homeowners discovered their ACV vs. RCV designation only after their claims were settled.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Check Which Coverage You Have Right Now</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not wait for a storm to find out. Here is how to check your current policy:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>Pull up your homeowner&apos;s insurance declarations page (the summary document at the front of your policy). Look for &quot;Roof Coverage&quot; or &quot;Dwelling Coverage&quot; and whether it reads &quot;Replacement Cost&quot; or &quot;Actual Cash Value.&quot;</li>
        <li>Search your policy document for the words &quot;cosmetic damage,&quot; &quot;roof schedule,&quot; or &quot;roof endorsement.&quot; These sections often contain ACV-only roof restrictions that don&apos;t appear on the declarations page.</li>
        <li>Call your insurance agent and ask directly: &quot;If my roof is totaled by a hailstorm today, will I receive full replacement cost or actual cash value?&quot;</li>
        <li>Ask specifically whether depreciation is &quot;recoverable&quot; on your roof claim.</li>
      </ul>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Action Steps Before Your Next Claim</h2>
      <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
        <li>Locate your current homeowner&apos;s policy and confirm whether your roof coverage is RCV or ACV - today, not after a storm.</li>
        <li>If you have ACV coverage and your roof is under 15 years old, contact your insurer or agent to ask about upgrading to RCV. The premium difference is often $100-$300 per year.</li>
        <li>If your roof is over 15 years old and still under RCV coverage, check your renewal documents carefully - insurers sometimes downgrade roof coverage at renewal without prominent notice.</li>
        <li>Document your current roof condition with dated photos stored in cloud storage. This is invaluable if a future claim involves pre-existing damage disputes.</li>
        <li>After any storm event, get a free inspection from <Link href="/services/insurance-claims" className="text-blue-600 hover:underline">our insurance claim specialists</Link> before calling your insurer - understanding the scope of damage puts you in a much stronger negotiating position.</li>
        <li>If your claim involves recoverable depreciation, track the submission deadline carefully and submit repair documentation at least 30 days before it expires.</li>
      </ol>
    </BlogLayout>
  );
}
