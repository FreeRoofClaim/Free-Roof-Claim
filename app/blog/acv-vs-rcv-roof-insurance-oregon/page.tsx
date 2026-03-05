import type { Metadata } from 'next';
import BlogLayout from '@/components/blog/BlogLayout';
import Link from 'next/link';

const SLUG = 'acv-vs-rcv-roof-insurance-oregon';
const TITLE = 'ACV vs. RCV Roof Insurance: Which Policy Do You Have and Why It Matters in Oregon';
const DESCRIPTION =
  'If your Oregon homeowners policy is ACV (Actual Cash Value), depreciation is deducted from your payout and you never get it back. RCV (Replacement Cost Value) pays the full replacement cost. Learn the difference, how Oregon law treats depreciation, and what to do if you have ACV coverage.';
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
    tags: ['ACV vs RCV', 'roof insurance Oregon', 'actual cash value', 'replacement cost value', 'homeowners insurance'],
  },
};


export default function AcvVsRcvRoofInsuranceOregonPage() {
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
      {/* BLUF */}
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>If your policy is ACV, your insurance payout will be reduced by depreciation — meaning you&apos;ll pay more out of pocket. RCV policies pay the full replacement cost.</strong> For Oregon homeowners filing a claim after the August 5, 2025 Bend hailstorm, this distinction can mean the difference between a $6,000 check and a $15,000 check for the same roof on the same house. Most homeowners don&apos;t know which coverage they have until they file — and by then, it&apos;s too late to change it.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This guide explains both policy types in plain English, how Oregon law treats depreciation disputes, and exactly what to do if you discover you have ACV coverage.
      </p>

      <hr className="my-8 border-gray-200" />

      {/* Section 1 */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Is the Difference Between ACV and RCV?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The core difference is simple: <strong>RCV pays what it costs to replace your roof today. ACV pays what your roof was worth the day before the storm.</strong>
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">What Does RCV (Replacement Cost Value) Pay?</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Replacement Cost Value coverage pays to replace your damaged roof with materials of like kind and quality at today&apos;s prices — regardless of how old your current roof was. If a contractor quotes $18,000 to replace your storm-damaged roof, an RCV policy is designed to cover that full amount minus your deductible.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most RCV insurers use a two-check process. The first check (the &quot;ACV payment&quot;) arrives after claim approval and covers the depreciated value. The second check — called &quot;recoverable depreciation&quot; — is released after you complete repairs and submit proof to your insurer. Together, both checks cover the full replacement cost minus your deductible.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">What Does ACV (Actual Cash Value) Pay?</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Actual Cash Value coverage pays only what your roof was worth at the time of the loss — after factoring in depreciation. There is no second check, no recoverable depreciation, and no way to recover what was withheld. You receive one payment and must cover the gap between that and the actual replacement cost entirely out of pocket.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        ACV policies typically carry lower premiums, which is why many homeowners unknowingly choose them — or are quietly defaulted into them by their insurer without understanding the trade-off. For a roof under 5 years old, the depreciation gap is small. For a 15-year-old roof, the gap can exceed $8,000 on a standard Bend-area home.
      </p>

      <hr className="my-8 border-gray-200" />

      {/* Section 2: Real math */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Does the Payout Difference Actually Look Like?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The example below uses a common scenario: a 12-year-old asphalt shingle roof in Bend with a $17,000 replacement cost (near the local average), a $1,500 deductible, and 50% depreciation applied by the insurer.
      </p>

      <table className="w-full border-collapse mb-6">
        <thead>
          <tr>
            <th className="bg-blue-600 text-white px-4 py-2 text-left">Item</th>
            <th className="bg-blue-600 text-white px-4 py-2 text-left">RCV Policy</th>
            <th className="bg-blue-600 text-white px-4 py-2 text-left">ACV Policy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-200">Full Replacement Cost</td>
            <td className="px-4 py-2 border border-gray-200">$17,000</td>
            <td className="px-4 py-2 border border-gray-200">$17,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">Depreciation (50%)</td>
            <td className="px-4 py-2 border border-gray-200">-$8,500</td>
            <td className="px-4 py-2 border border-gray-200">-$8,500</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">Initial Check (ACV minus deductible)</td>
            <td className="px-4 py-2 border border-gray-200">$8,500 - $1,500 = $7,000</td>
            <td className="px-4 py-2 border border-gray-200">$8,500 - $1,500 = $7,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">Recoverable Depreciation</td>
            <td className="px-4 py-2 border border-gray-200">$8,500 (released after repair)</td>
            <td className="px-4 py-2 border border-gray-200">$0 — not available</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">Total Homeowner Receives</td>
            <td className="px-4 py-2 border border-gray-200 font-semibold">$15,500</td>
            <td className="px-4 py-2 border border-gray-200 font-semibold">$7,000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">Out-of-Pocket Gap</td>
            <td className="px-4 py-2 border border-gray-200">$1,500 (deductible only)</td>
            <td className="px-4 py-2 border border-gray-200 font-semibold text-red-600">$10,000</td>
          </tr>
        </tbody>
      </table>

      <p className="text-gray-700 leading-relaxed mb-4">
        That $8,500 difference is not abstract — it is the direct financial consequence of which four letters appear in your policy. Most homeowners have no idea which coverage they hold until they file a claim and receive a check far smaller than expected.
      </p>

      <hr className="my-8 border-gray-200" />

      {/* Section 3: Oregon-specific */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How Does Oregon Law Treat ACV Depreciation?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Oregon does not have a statute that requires insurers to offer RCV coverage or bans ACV-only roof policies. However, Oregon insurance regulations do impose important consumer protections around how depreciation is applied and disclosed:
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Depreciation Must Be Reasonable and Documented</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Oregon&apos;s Division of Financial Regulation (DFR) requires that any depreciation applied to a claim be based on a documented, reasonable methodology — not an arbitrary number. If your insurer applies 80% depreciation to a 10-year-old architectural shingle roof with a 30-year rated lifespan, you have grounds to challenge that calculation. Ask your insurer for the specific depreciation schedule they used and the data source behind it.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Policy Endorsements Must Be Disclosed</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under Oregon insurance rules, any endorsement that materially restricts coverage — including a roof-specific ACV endorsement added to an otherwise RCV policy — must be disclosed in writing. If your insurer quietly added an ACV roof endorsement at renewal without clear disclosure, that may be a basis for a bad faith claim or DFR complaint.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">You Can Dispute the Depreciation Amount</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even under an ACV policy, the depreciation amount itself is negotiable. If you believe your insurer&apos;s depreciation figure is excessive relative to your roof&apos;s actual condition, you can submit a counter-estimate supported by an independent contractor&apos;s assessment and manufacturer documentation about the roof&apos;s expected remaining lifespan.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The Oregon DFR consumer helpline at <strong>888-877-4894</strong> provides free assistance for homeowners who believe their claim has been unfairly handled, including disputes over depreciation methodology.
      </p>

      <hr className="my-8 border-gray-200" />

      {/* Section 4: What to do if you have ACV */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Should I Do If I Have an ACV Policy?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Discovering you have ACV coverage after a hailstorm is frustrating — but there are still steps you can take to maximize your recovery.
      </p>
      <ol className="list-decimal pl-6 mb-4 space-y-3 text-gray-700">
        <li>
          <strong>Request the full depreciation breakdown in writing.</strong> Ask your insurer to provide the specific depreciation schedule, methodology, and the age/condition assumptions they used. This is your right under Oregon insurance regulations.
        </li>
        <li>
          <strong>Get an independent inspection report that documents your roof&apos;s actual condition.</strong> If your roof was in better-than-average condition for its age — for example, recently sealed or in a low-UV-exposure location — that documented evidence can support a lower depreciation figure.
        </li>
        <li>
          <strong>Negotiate the depreciation directly with your insurer.</strong> Adjusters have some flexibility in applying depreciation schedules. A well-documented counter-assessment from a licensed contractor carries weight.
        </li>
        <li>
          <strong>Check whether your policy has a &quot;recoverable depreciation&quot; option you didn&apos;t know about.</strong> Some policies marketed as ACV include a rider that makes depreciation partially recoverable upon repair completion. Read your &quot;Roof Coverage Endorsement&quot; section carefully.
        </li>
        <li>
          <strong>For future coverage: ask about upgrading to RCV at renewal.</strong> For a roof under 15 years old, the premium difference is often $100–$300 per year — a fraction of the payout gap in a major claim. Some Oregon insurers will upgrade coverage mid-term; ask.
        </li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you&apos;re currently dealing with an August 5, 2025 storm claim, remember that the <strong>August 5, 2026 policy filing deadline</strong> applies regardless of your coverage type. Don&apos;t let ACV coverage discouragement cause you to miss that window. Even a partial ACV payout is better than no payout at all. See our post on the <Link href="/blog/august-2025-bend-hailstorm-filing-deadline" className="text-blue-600 hover:underline">August 2025 Bend hailstorm filing deadline</Link> for the full timeline.
      </p>

      <hr className="my-8 border-gray-200" />

      {/* Section 5: How to check */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How Do I Find Out Which Coverage I Have Right Now?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Do not wait for a storm. Check today:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>Pull up your homeowners insurance <strong>declarations page</strong>. Look for &quot;Roof Coverage&quot; or &quot;Dwelling Coverage&quot; — it should read &quot;Replacement Cost&quot; or &quot;Actual Cash Value.&quot;</li>
        <li>Search the full policy for the words <strong>&quot;roof endorsement,&quot; &quot;roof schedule,&quot;</strong> or <strong>&quot;cosmetic damage exclusion.&quot;</strong> ACV-only roof restrictions are often buried in endorsements, not on the declarations page.</li>
        <li>Call your insurance agent and ask directly: <strong>&quot;If my roof is totaled by hail today, do I receive full replacement cost or actual cash value? Is depreciation recoverable?&quot;</strong></li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you&apos;re filing a claim right now and aren&apos;t sure which policy type you have, our team can help you interpret your policy and maximize what you recover. <Link href="/" className="text-blue-600 hover:underline font-semibold">Request a free inspection and policy review &rarr;</Link> or call <strong>(541) 728-0266</strong>.
      </p>
    </BlogLayout>
  );
}
