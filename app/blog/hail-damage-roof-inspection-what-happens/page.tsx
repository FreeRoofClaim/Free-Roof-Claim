import type { Metadata } from 'next';
import BlogLayout from '@/components/blog/BlogLayout';

const SLUG = 'hail-damage-roof-inspection-what-happens';
const TITLE = 'What Happens During a Free Hail Damage Roof Inspection?';
const DESCRIPTION =
  'A step-by-step walkthrough of the free roof inspection process for Central Oregon homeowners — what inspectors look for, how long it takes, what you should prepare, and what happens after.';
const PUBLISHED_DATE = 'March 5, 2026';
const PUBLISHED_DATE_ISO = '2026-03-05';
const CITY = 'Central Oregon';

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
    tags: ['roof inspection', 'hail damage', 'free inspection', 'Central Oregon', 'insurance claim'],
  },
};

export default function HailDamageRoofInspectionWhatHappensPage() {
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
      <p className="text-gray-700 leading-relaxed mb-4">
        Most Central Oregon homeowners have never had a professional roof inspection — and don&apos;t know what to expect from one. If you&apos;re considering scheduling a free inspection after the August 2025 hailstorm that affected <a href="/bend-or" className="text-blue-600 hover:underline">Bend</a>, <a href="/redmond-or" className="text-blue-600 hover:underline">Redmond</a>, and <a href="/la-pine-or" className="text-blue-600 hover:underline">La Pine</a>, this guide walks you through the entire process: before, during, and after.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Understanding what happens during an inspection helps you know what questions to ask, what documents to have ready, and how to use the results to support your <a href="/services/insurance-claims" className="text-blue-600 hover:underline">insurance claim</a>.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Before the Inspector Arrives: What to Prepare</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A little preparation before the inspection makes the process smoother and ensures you get the most useful report possible.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Gather Your Insurance Policy Documents</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Have your insurance declarations page available. The inspector doesn&apos;t need to read your policy — but knowing your deductible amount, your insurer&apos;s name, and your policy number allows them to answer questions about whether documented damage is likely to meet your insurer&apos;s approval threshold.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Note Any Visible Damage You&apos;ve Already Observed</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Write down anything you&apos;ve noticed since the storm: granules in gutters, dents on AC units, water stains on ceilings, areas where your roof looks discolored. This is helpful context for the inspector — even if what you observed turns out not to be storm damage, it helps them prioritize where to look first.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Clear Access to Your Attic (If Possible)</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Many inspectors also check the attic for signs of water infiltration, compromised decking, or daylight visible through the roof. If your attic access is buried under stored items, try to clear a path before the appointment.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Ensure Safe Ladder Access</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The inspector will need to access the perimeter of your home with a ladder. Make sure gates are unlocked, vehicles are moved away from the house, and there are no obstacles along the foundation where the inspector will be working. You do not need to be on the roof or hold the ladder — the inspector handles all of this.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Step-by-Step: What Happens During the Inspection</h2>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 1: Ground-Level Assessment (5-10 Minutes)</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The inspector starts on the ground, walking the full perimeter of your home. They&apos;re looking for:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>Dents or fresh damage on gutters, downspouts, and fascia</li>
        <li>Granule accumulation around downspout splash areas</li>
        <li>Visible missing or displaced shingles</li>
        <li>Damage to window screens, siding, or other exterior surfaces that corroborates a hail event</li>
        <li>Any prior repairs or patches that indicate previous damage history</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Dented gutters and AC condenser fins are particularly useful evidence — they&apos;re easy to photograph, difficult to dispute, and prove that hail impacted the property on the date in question.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 2: Roof Access and Safety Setup (5 Minutes)</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The inspector stages their ladder, puts on appropriate footwear with good grip, and accesses the roof. They typically begin at the lowest accessible slope and work systematically across the entire roof surface.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 3: Test Square Assessment (15-25 Minutes)</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the core of the inspection. Insurance adjusters — and experienced inspectors preparing for insurance claims — use a method called test square assessment. They mark out 10-foot by 10-foot sections (100 square feet = one &quot;square&quot; in roofing terminology) and count the number of hail impact marks within each square.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most insurance companies require a minimum number of impacts per square before approving a claim. The exact threshold varies by insurer, but typically:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>8-10 impacts per square</strong> is often the threshold that triggers a full replacement recommendation</li>
        <li>A licensed contractor will document multiple test squares across different roof slopes to establish a consistent pattern</li>
        <li>Each impact is photographed; the inspector typically uses chalk to circle impacts before photographing for clarity</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The inspector is also evaluating the <em>character</em> of the damage: is it consistent with hail impact (random distribution, circular bruising, missing granules) or does it look like aging, foot traffic, or prior damage? This distinction matters enormously when working with insurance adjusters.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 4: Detailed Damage Documentation (10-15 Minutes)</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Beyond the test squares, the inspector photographs and documents:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>Ridge cap condition — hail often damages these first</li>
        <li>Metal flashing around chimneys, skylights, and vents</li>
        <li>Pipe boot seals — rubber boots around plumbing vents crack easily under hail impact</li>
        <li>Roof valleys — areas where two slopes meet accumulate more hail impact</li>
        <li>Any cracked, split, or displaced shingles</li>
        <li>Any previous repairs or patches that need to be noted</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 5: Attic Inspection (5-10 Minutes, If Applicable)</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If attic access is available, the inspector checks for water staining on roof decking, wet or compressed insulation, daylight visible through nail pops or cracks, and any active moisture. Attic evidence of water infiltration strengthens an insurance claim significantly.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 6: Inspector&apos;s Findings Discussion (5-10 Minutes)</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        At the end of the inspection, the contractor walks you through what they found. A good inspector gives you a candid assessment: if there&apos;s clear, documentable hail damage consistent with the August 2025 storm, they&apos;ll tell you. If the damage is minimal or appears pre-existing, they&apos;ll tell you that too. <strong>A trustworthy inspector doesn&apos;t push you to file a claim you don&apos;t have grounds for</strong> — that creates problems for everyone.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How Long Does a Hail Damage Inspection Take?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a typical Central Oregon residential roof (1,500–2,500 square feet), a thorough hail damage inspection takes <strong>45 minutes to 90 minutes</strong>. Larger homes, more complex roof geometry (multiple angles, valleys, dormers), or homes with significant damage will take longer. Plan to be home for the full inspection period so you can answer questions and receive the inspector&apos;s findings in person.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What You Receive After the Inspection</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A professional post-inspection report from a qualified contractor typically includes:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>Written summary</strong> of findings, including the contractor&apos;s professional opinion on whether damage is consistent with hail impact</li>
        <li><strong>Dated photographs</strong> of all documented damage, organized by roof section</li>
        <li><strong>Measurement of damaged area</strong> in roofing squares, which informs the claim estimate</li>
        <li><strong>Material recommendations</strong> — for Central Oregon, this often includes discussion of Class 4 impact-resistant shingles</li>
        <li><strong>Estimate of replacement or repair cost</strong> that you can use as a reference when reviewing your insurance adjuster&apos;s offer</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        This report is your most important document in the insurance claim process. Keep a copy, submit a copy to your insurer when filing, and have it available when the adjuster comes to your home.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Happens Next: Filing Your Claim</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the inspection, if damage is documented, the recommended next steps are:
      </p>
      <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>Notify your insurer immediately</strong> — call and say: &quot;I had a professional roof inspection following the August 5, 2025 hailstorm in Deschutes County and the inspection found storm damage. I want to file a claim.&quot;</li>
        <li><strong>Request your adjuster visit date</strong> — ask that your contractor be present during the adjuster visit or, at minimum, that the adjuster review the inspection report before their visit.</li>
        <li><strong>Do not make repairs</strong> before the adjuster visits, except emergency tarping to prevent active leaks.</li>
        <li><strong>Review the adjuster&apos;s estimate</strong> against your contractor&apos;s findings — if there is a significant difference, you can request a re-inspection or dispute the amount.</li>
      </ol>
      <p className="text-gray-700 leading-relaxed mb-4">
        For a complete guide to this process, read our <a href="/blog/filing-roof-insurance-claim-oregon-guide" className="text-blue-600 hover:underline">complete guide to filing a roof insurance claim in Oregon</a>.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Schedule Your Free Inspection Today</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        FreeRoofPros connects <a href="/bend-or" className="text-blue-600 hover:underline">Bend</a>, <a href="/redmond-or" className="text-blue-600 hover:underline">Redmond</a>, and <a href="/la-pine-or" className="text-blue-600 hover:underline">La Pine</a> homeowners with vetted, licensed Oregon roofing contractors who specialize in hail damage documentation and <a href="/services/roof-replacement" className="text-blue-600 hover:underline">storm damage roof replacement</a>. The inspection is completely free and carries no obligation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>With the August 2026 deadline for the 2025 storm approaching, don&apos;t delay.</strong>
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
