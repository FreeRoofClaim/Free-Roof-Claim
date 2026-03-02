import type { Metadata } from 'next';
import BlogLayout from '@/components/blog/BlogLayout';

const SLUG = 'how-long-to-file-roof-insurance-claim';
const TITLE = 'How Long Do You Have to File a Roof Insurance Claim? Deadlines by State';
const DESCRIPTION =
  'State-by-state deadlines for filing a roof insurance claim after storm damage. Learn the difference between policy deadlines and statutes of limitations, plus what happens if you miss the window.';
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
    tags: ['insurance claim deadline', 'roof claim filing', 'storm damage', 'insurance claim', 'state deadlines'],
  },
};

export default function HowLongToFileRoofInsuranceClaim() {
  return (
    <BlogLayout
      title={TITLE}
      description={DESCRIPTION}
      publishedDate={PUBLISHED_DATE}
      publishedDateISO={PUBLISHED_DATE_ISO}
      readingTimeMinutes={9}
      slug={SLUG}
      city={CITY}
    >
      <p className="text-gray-700 leading-relaxed mb-4">
        After a major storm, most homeowners focus on the damage itself - not the calendar. But missing your
        insurance claim deadline can mean losing tens of thousands of dollars in coverage, even if your damage
        is legitimate and well-documented. Deadlines vary significantly by state, and your policy may impose
        an even shorter window than state law allows.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This guide breaks down the claim filing deadlines for every major state, explains the critical
        difference between a policy deadline and a statute of limitations, and tells you exactly what
        happens if you miss the window. The short answer: file within 30 days of the storm whenever
        possible, regardless of how much time the law technically gives you.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        What Is the Deadline to File a Roof Insurance Claim?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There is no single national deadline. Your window is determined by two things: (1) your insurance
        policy language, and (2) your state&apos;s statute of limitations for contract disputes. Whichever
        one is shorter is the deadline that actually governs your claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most homeowners insurance policies require you to provide &quot;prompt notice&quot; of a loss. Some
        policies define this as 30 days, others say 60 days, and some say only &quot;as soon as reasonably
        possible.&quot; Many state insurance departments have stepped in to mandate minimum windows - but
        those minimums are not always generous.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        Policy Deadline vs. Statute of Limitations: What Is the Difference?
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        These two concepts are often confused, and conflating them can be costly:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>
          <strong>Policy deadline (notice requirement):</strong> The window your insurer gives you to
          report a loss and formally open a claim. Missing this can result in claim denial.
        </li>
        <li>
          <strong>Statute of limitations:</strong> The legal window within which you can sue your insurer
          if they deny your claim or pay too little. Missing this forfeits your right to litigation.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For example, in Oregon, your policy may require you to file within 1 year of the loss, but you
        have 2 years from the date of denial to file a lawsuit. In Missouri, the statute of limitations
        for contract claims is 5 years - but your insurer&apos;s policy could require notice within 60 days.
        Always read both documents.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Roof Insurance Claim Deadlines by State (2026)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The table below reflects statutory minimums and common policy standards as of 2026. Your
        specific policy may impose a shorter window. Always verify with your insurer.
      </p>

      <table className="w-full border-collapse mb-6">
        <thead>
          <tr>
            <th className="bg-blue-600 text-white px-4 py-2 text-left">State</th>
            <th className="bg-blue-600 text-white px-4 py-2 text-left">Claim Filing Window</th>
            <th className="bg-blue-600 text-white px-4 py-2 text-left">Lawsuit Deadline</th>
            <th className="bg-blue-600 text-white px-4 py-2 text-left">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-200">Texas</td>
            <td className="px-4 py-2 border border-gray-200">1-2 years (policy-dependent)</td>
            <td className="px-4 py-2 border border-gray-200">2 years</td>
            <td className="px-4 py-2 border border-gray-200">TDI mandates reasonable time; many policies say 1 yr</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border border-gray-200">Florida</td>
            <td className="px-4 py-2 border border-gray-200">1 year</td>
            <td className="px-4 py-2 border border-gray-200">1 year</td>
            <td className="px-4 py-2 border border-gray-200">Supplemental claims: 18 months from date of loss</td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-200">Colorado</td>
            <td className="px-4 py-2 border border-gray-200">1 year</td>
            <td className="px-4 py-2 border border-gray-200">1 year</td>
            <td className="px-4 py-2 border border-gray-200">SB 10-213 reform; hail very common, file quickly</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border border-gray-200">Georgia</td>
            <td className="px-4 py-2 border border-gray-200">1 year</td>
            <td className="px-4 py-2 border border-gray-200">2 years</td>
            <td className="px-4 py-2 border border-gray-200">Prompt notice required; many policies define as 60 days</td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-200">Oklahoma</td>
            <td className="px-4 py-2 border border-gray-200">1 year</td>
            <td className="px-4 py-2 border border-gray-200">2 years</td>
            <td className="px-4 py-2 border border-gray-200">Wind/hail common; adjuster backlogs frequent after storms</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border border-gray-200">Oregon</td>
            <td className="px-4 py-2 border border-gray-200">1 year (policy)</td>
            <td className="px-4 py-2 border border-gray-200">2 years (lawsuit)</td>
            <td className="px-4 py-2 border border-gray-200">INS 742 governs; policy window and suit window differ</td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-200">Indiana</td>
            <td className="px-4 py-2 border border-gray-200">1 year</td>
            <td className="px-4 py-2 border border-gray-200">2 years</td>
            <td className="px-4 py-2 border border-gray-200">IC 27-8 requires suit within 1 yr of denial</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border border-gray-200">Tennessee</td>
            <td className="px-4 py-2 border border-gray-200">1 year</td>
            <td className="px-4 py-2 border border-gray-200">1 year</td>
            <td className="px-4 py-2 border border-gray-200">Strict enforcement; appeals must happen fast</td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-200">Missouri</td>
            <td className="px-4 py-2 border border-gray-200">Policy-dependent (often 1-2 yr)</td>
            <td className="px-4 py-2 border border-gray-200">5 years (contract SOL)</td>
            <td className="px-4 py-2 border border-gray-200">Longer lawsuit window; check your policy notice requirement</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border border-gray-200">Kansas</td>
            <td className="px-4 py-2 border border-gray-200">Policy-dependent</td>
            <td className="px-4 py-2 border border-gray-200">5 years</td>
            <td className="px-4 py-2 border border-gray-200">Tornado Alley; prompt notice still strongly recommended</td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-200">North Carolina</td>
            <td className="px-4 py-2 border border-gray-200">1 year</td>
            <td className="px-4 py-2 border border-gray-200">3 years</td>
            <td className="px-4 py-2 border border-gray-200">Hurricane and wind damage common on coast</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border border-gray-200">South Carolina</td>
            <td className="px-4 py-2 border border-gray-200">1 year</td>
            <td className="px-4 py-2 border border-gray-200">3 years</td>
            <td className="px-4 py-2 border border-gray-200">Coastal wind/hail deductibles common</td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-200">Virginia</td>
            <td className="px-4 py-2 border border-gray-200">1 year</td>
            <td className="px-4 py-2 border border-gray-200">2 years</td>
            <td className="px-4 py-2 border border-gray-200">Must file within policy period in most cases</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border border-gray-200">Ohio</td>
            <td className="px-4 py-2 border border-gray-200">1 year</td>
            <td className="px-4 py-2 border border-gray-200">6 years (contract)</td>
            <td className="px-4 py-2 border border-gray-200">Policy notice requirements often shorter than SOL</td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-200">Michigan</td>
            <td className="px-4 py-2 border border-gray-200">1 year</td>
            <td className="px-4 py-2 border border-gray-200">1 year</td>
            <td className="px-4 py-2 border border-gray-200">MCL 500.2833 governs; very strict</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border border-gray-200">Illinois</td>
            <td className="px-4 py-2 border border-gray-200">1-2 years (policy)</td>
            <td className="px-4 py-2 border border-gray-200">5 years</td>
            <td className="px-4 py-2 border border-gray-200">215 ILCS 5; check your specific policy terms</td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-200">Arizona</td>
            <td className="px-4 py-2 border border-gray-200">1 year</td>
            <td className="px-4 py-2 border border-gray-200">1 year</td>
            <td className="px-4 py-2 border border-gray-200">Monsoon and hail season June-September</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border border-gray-200">Louisiana</td>
            <td className="px-4 py-2 border border-gray-200">1 year</td>
            <td className="px-4 py-2 border border-gray-200">1 year</td>
            <td className="px-4 py-2 border border-gray-200">Hurricane-heavy; special rules for named storm events</td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-200">Minnesota</td>
            <td className="px-4 py-2 border border-gray-200">2 years</td>
            <td className="px-4 py-2 border border-gray-200">2 years</td>
            <td className="px-4 py-2 border border-gray-200">MN Stat 65A; one of more generous windows</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border border-gray-200">Nebraska</td>
            <td className="px-4 py-2 border border-gray-200">1 year (policy)</td>
            <td className="px-4 py-2 border border-gray-200">5 years</td>
            <td className="px-4 py-2 border border-gray-200">Frequent hail; Omaha metro sees many claims annually</td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-200">Washington</td>
            <td className="px-4 py-2 border border-gray-200">1 year</td>
            <td className="px-4 py-2 border border-gray-200">3 years</td>
            <td className="px-4 py-2 border border-gray-200">Wind damage primary; moss/algae often excluded</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 border border-gray-200">New York</td>
            <td className="px-4 py-2 border border-gray-200">2 years</td>
            <td className="px-4 py-2 border border-gray-200">2 years</td>
            <td className="px-4 py-2 border border-gray-200">NY Ins Law 3404; broader consumer protections</td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-200">Pennsylvania</td>
            <td className="px-4 py-2 border border-gray-200">1-2 years (policy)</td>
            <td className="px-4 py-2 border border-gray-200">4 years</td>
            <td className="px-4 py-2 border border-gray-200">Longer contract SOL; still file promptly</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        What Does &quot;Prompt Notice&quot; Mean on a Roof Claim?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nearly every homeowners policy includes a &quot;prompt notice&quot; requirement - language that says you
        must report a covered loss &quot;as soon as practicable&quot; or &quot;promptly.&quot; Even in states with a
        1-year filing window, insurers can still dispute or deny a claim if they believe you delayed
        unreasonably after discovering the damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Courts have generally interpreted &quot;prompt notice&quot; as somewhere between 30 and 90 days, depending
        on circumstances. If a hailstorm hit your neighborhood and you waited 8 months to file, expect
        questions. If you discovered damage during a routine inspection 6 months after a storm, document
        exactly when and how you discovered it - that date starts your prompt notice clock.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        What Happens If You Miss the Deadline?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Missing the policy&apos;s notice requirement gives your insurer grounds to deny the claim entirely,
        arguing they were &quot;prejudiced&quot; by the late notice - meaning the delay made it harder for them to
        investigate the loss. In states that require the insurer to prove actual prejudice (like Texas and
        California), you may still have options. In states with strict compliance requirements (like
        Michigan and Tennessee), late notice can be an automatic denial.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>
          <strong>Denial on notice grounds:</strong> Most common outcome. Insurer argues they cannot properly
          investigate damage after substantial time has passed.
        </li>
        <li>
          <strong>Reduced settlement:</strong> In some cases, insurer may pay but argue the delay caused
          additional deterioration they are not responsible for.
        </li>
        <li>
          <strong>Loss of litigation rights:</strong> Once the statute of limitations passes, you cannot
          sue - no matter how valid your claim was.
        </li>
        <li>
          <strong>Inability to supplement:</strong> In Florida, you have 18 months from the date of loss
          to file supplemental claims for additional damage found after initial settlement. Miss that window
          and the supplement is barred.
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        Florida&apos;s 18-Month Supplemental Claim Deadline
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Florida is unique in explicitly codifying a supplemental claim deadline under HB 7065 (2021).
        After your initial claim settles, you have 18 months from the original date of loss - not the
        settlement date - to file a supplemental claim for additional damage. After 18 months, the
        claim is permanently closed. This is critical for homeowners who discover additional damage
        months after their initial adjuster visit.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Why You Should Always File Within 30 Days of the Storm
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Even if your state gives you 1 or 2 years, roofing and insurance professionals consistently
        recommend filing within 30 days of any storm event. Here is why:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>
          <strong>Evidence degrades fast:</strong> Hail spatter marks, bruised shingles, and broken
          granules are easier to identify 2 weeks after a storm than 6 months later. Weathering can
          make storm damage look like wear and tear over time.
        </li>
        <li>
          <strong>Secondary damage accumulates:</strong> A storm-cracked shingle will leak. The longer
          it goes unrepaired, the more damage accumulates - and insurers will argue the secondary damage
          (rot, mold, deck damage) is due to your failure to mitigate.
        </li>
        <li>
          <strong>Adjuster demand spikes after major storms:</strong> After a large hailstorm, adjusters
          in affected areas get booked out weeks or months. Filing early means faster service.
        </li>
        <li>
          <strong>Contractor availability:</strong> Materials and labor get allocated quickly after
          regional storm events. Early filers get better scheduling and pricing.
        </li>
        <li>
          <strong>Documentation is easier:</strong> Storm data, weather records, and neighboring claims
          are easiest to corroborate in the immediate aftermath.
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For context on what a major hailstorm looks like and the documentation process, see our guide to the{' '}
        <a href="/blog/central-oregon-hailstorm-2025" className="text-blue-600 hover:underline">
          Central Oregon hailstorm of 2025
        </a>
        , which generated hundreds of simultaneous claims across Bend and Redmond.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        How to Protect Yourself Before Filing
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before you call your insurer, take these steps to protect your claim:
      </p>
      <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
        <li>Document all visible damage with photos and video, including the date and time stamp.</li>
        <li>Save any weather reports or weather app screenshots from the storm date.</li>
        <li>Look up your specific policy to find the exact notice requirement (often in the &quot;Conditions&quot; section).</li>
        <li>Have a licensed roofing contractor perform a free inspection and produce a written damage report before the adjuster arrives.</li>
        <li>Make emergency repairs only (tarping, temporary patches) to prevent further damage - but do not make permanent repairs before your adjuster inspects.</li>
        <li>Keep all receipts for any emergency repair or mitigation expenses.</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        Have questions about the claims process? Visit the{' '}
        <a href="/faq" className="text-blue-600 hover:underline">FreeRoofPros FAQ</a>{' '}
        for answers to the most common homeowner questions about storm damage and roof insurance claims.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
        Action Checklist: Filing on Time
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>Locate your policy and find the notice requirement in the Conditions section within 24 hours of the storm.</li>
        <li>Document all visible exterior damage with timestamped photos within 48-72 hours.</li>
        <li>Schedule a professional roof inspection within 7-14 days to get a written damage assessment.</li>
        <li>File your claim with your insurer within 30 days - even if you are still gathering estimates.</li>
        <li>Note the exact date you filed and the claim number in writing.</li>
        <li>For Florida homeowners: mark your calendar 18 months from the storm date as your supplemental claim deadline.</li>
        <li>If your claim is denied or you receive a low settlement, consult a public adjuster or attorney before the lawsuit deadline passes.</li>
        <li>
          Ready to get a professional inspection before filing?{' '}
          <a href="/#contact" className="text-blue-600 hover:underline">
            Contact FreeRoofPros
          </a>{' '}
          to connect with a licensed roofer in your area.
        </li>
      </ul>
    </BlogLayout>
  );
}
