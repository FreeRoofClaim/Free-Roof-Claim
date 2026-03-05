import type { Metadata } from 'next';
import BlogLayout from '@/components/blog/BlogLayout';

const SLUG = 'choosing-roofing-contractor-bend-oregon';
const TITLE = 'How to Choose a Roofing Contractor in Bend, Oregon';
const DESCRIPTION =
  'What to look for, red flags to avoid, Oregon CCB licensing requirements, and why vetting your contractor matters — especially for Bend homeowners filing hail damage claims after the August 2025 storm.';
const PUBLISHED_DATE = 'March 5, 2026';
const PUBLISHED_DATE_ISO = '2026-03-05';
const CITY = 'Bend, Oregon';

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
    tags: ['roofing contractor', 'Bend Oregon', 'CCB license', 'storm chaser', 'contractor vetting'],
  },
};

export default function ChoosingRoofingContractorBendOregonPage() {
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
        After a major hailstorm like the one that hit <a href="/bend-or" className="text-blue-600 hover:underline">Bend</a> and <a href="/redmond-or" className="text-blue-600 hover:underline">Redmond</a> in August 2025, roofing contractors flood Central Oregon from all over the country. Some are excellent. Some will take your insurance check, do substandard work, and disappear before the first leak appears. The difference between the two is not always obvious — especially when you&apos;re dealing with insurance paperwork and deadline pressure at the same time.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This guide gives you a framework to evaluate any roofing contractor in Bend or the surrounding area, explains Oregon&apos;s licensing requirements, and outlines the red flags that distinguish local professionals from out-of-state storm chasers.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Oregon CCB Licensing: The Non-Negotiable Starting Point</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In Oregon, any contractor performing construction work — including roofing — for compensation must be licensed by the <strong>Construction Contractors Board (CCB)</strong>. This is state law, not a suggestion. An unlicensed contractor performing work on your home creates serious problems:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>You have no access to the CCB&apos;s dispute resolution process if work quality is unacceptable</li>
        <li>You may be personally liable if a worker is injured on your property</li>
        <li>Your homeowners insurance may deny claims for damage caused by unlicensed work</li>
        <li>You may not be able to pull the required building permits (yes, most roof replacements require a permit in Deschutes County)</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>How to verify:</strong> The CCB maintains a public license lookup at <a href="https://www.oregon.gov/ccb/Pages/contractor-search.aspx" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">oregon.gov/ccb</a>. Enter the contractor&apos;s business name or CCB number. You can also call the CCB directly at <strong>503-378-4621</strong>. Verify three things: the license is active, the bond is current, and the license type covers residential roofing.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Oregon CCB License Types for Roofing</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Oregon uses several license categories. For residential roofing, you want a contractor with a <strong>Residential General Contractor (RGC)</strong> or <strong>Residential Specialty Contractor (RSC)</strong> license in the roofing category. Commercial roofing projects require a <strong>Commercial Contractor</strong> license. Be wary of any contractor who says they don&apos;t need a license for the type of work they&apos;re proposing.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5 Signs of a Quality Roofing Contractor in Bend</h2>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Local Presence and References</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A quality contractor in Bend has a physical business address in Central Oregon, has been operating in the area for multiple years, and can provide references from local homeowners you can contact directly. Ask for 3-5 references from the past year and actually call them. Ask specifically: Did the work come in on budget? Was the crew on time? Did they clean up completely? Would you hire them again?
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Manufacturer Certifications</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Major shingle manufacturers — GAF, Owens Corning, CertainTeed — offer certification programs that require contractors to meet installation standards, maintain insurance, and complete training. Certifications like GAF Master Elite or Owens Corning Preferred Contractor indicate the contractor has been vetted by the manufacturer and can offer extended warranty coverage that standard contractors cannot. In Deschutes County, where Class 4 impact-resistant shingles are often the right choice for hail protection, a manufacturer-certified installer matters.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. Written, Itemized Estimates</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Every reputable contractor provides a written estimate detailing materials (brand, grade, and color), labor, permit costs, debris removal, and warranty terms. If a contractor quotes you a round number verbally and asks you to sign something vague, that&apos;s a significant warning sign. The estimate should match the scope of what your insurance adjuster approved, and the contractor should be willing to explain any line-item differences.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. Proper Insurance Coverage</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ask for certificates of insurance showing both <strong>general liability</strong> (minimum $1 million per occurrence for residential work) and <strong>workers&apos; compensation</strong>. The certificate should name you as the certificate holder. If a worker falls off your roof and the contractor doesn&apos;t have workers&apos; comp, you may be exposed to a claim against your homeowners insurance — which can result in a premium increase or policy cancellation.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Clear Communication on Insurance Claims</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A contractor experienced with <a href="/services/insurance-claims" className="text-blue-600 hover:underline">insurance claim work</a> will understand the Xactimate estimating system insurers use, know how to prepare a scope of work that matches insurer expectations, and be willing to attend or review the adjuster&apos;s inspection. They should never suggest you inflate your claim or sign an Assignment of Benefits (AOB) contract that transfers your claim rights to them — both are serious red flags.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Red Flags: Storm Chasers and Predatory Contractors</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the August 2025 hailstorm, Central Oregon saw an influx of out-of-state contractors targeting affected neighborhoods. The Oregon Division of Financial Regulation and the CCB issued warnings about predatory practices. Watch for these warning signs:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>Out-of-state license plates</strong> on work trucks and vans — legitimate local contractors don&apos;t drive in from Texas or Florida</li>
        <li><strong>High-pressure door-to-door solicitation</strong> — a contractor who says &quot;I was just in your neighborhood and noticed your roof looks damaged&quot; and pressures you to sign the same day is a red flag</li>
        <li><strong>Assignment of Benefits (AOB) agreements</strong> — these contracts transfer your insurance claim rights to the contractor, removing you from the process and often leading to inflated estimates or poor-quality work</li>
        <li><strong>&quot;We&apos;ll waive your deductible&quot;</strong> — this is insurance fraud in Oregon; your deductible is your contractual responsibility and a contractor who &quot;waives&quot; it is simply hiding it in inflated costs</li>
        <li><strong>No written contract or estimate</strong> — any contractor who starts work without a detailed written contract is exposing you to significant risk</li>
        <li><strong>Requests for large upfront cash payments</strong> — standard practice is a modest deposit (10-20%) at contract signing, with the balance due after completion</li>
        <li><strong>No Oregon CCB number</strong> — if they can&apos;t immediately provide their CCB license number for verification, walk away</li>
      </ul>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Questions to Ask Before Signing Anything</h2>
      <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
        <li>What is your Oregon CCB license number? (Verify it before they leave.)</li>
        <li>Are you bonded and insured? Can you provide certificates of insurance naming me as certificate holder?</li>
        <li>How many roofs have you replaced in Deschutes County in the past 12 months? Can you provide local references?</li>
        <li>What specific materials will you use, and what warranties do they carry?</li>
        <li>Will you pull the required permit with Deschutes County?</li>
        <li>Have you worked with [my insurance company] before, and are you familiar with their claim process?</li>
        <li>What is your warranty on labor? What does it cover, and for how long?</li>
        <li>Who specifically will be on-site during the installation — your own employees or subcontractors?</li>
      </ol>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why FreeRoofPros Vets Contractors</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        FreeRoofPros doesn&apos;t send just any contractor to your door. Every contractor in our network must maintain an active Oregon CCB license, carry adequate insurance, and have a track record of quality work in Central Oregon. We verify licensing and insurance on an ongoing basis — not just at initial onboarding.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Our contractors specialize in <a href="/services/storm-damage-repair" className="text-blue-600 hover:underline">hail damage repair</a> and <a href="/services/roof-replacement" className="text-blue-600 hover:underline">full roof replacement</a> for Central Oregon homeowners — they know the local climate, the county permitting requirements, and the insurance claim process specific to Oregon.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For <a href="/la-pine-or" className="text-blue-600 hover:underline">La Pine</a> homeowners dealing with the unique freeze-thaw conditions at higher elevation, or <a href="/bend-or" className="text-blue-600 hover:underline">Bend</a> homeowners navigating the Deschutes County wood shingle ban, our contractors understand the local context that out-of-state crews simply don&apos;t.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Get Connected to a Vetted Central Oregon Contractor</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        With the August 2026 claim deadline for the 2025 hailstorm approaching, now is the time to schedule your inspection and get a written assessment in hand before you contact your insurer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>FreeRoofPros.com connects you with licensed, vetted, locally established Oregon roofing contractors — at no cost to you.</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><a href="/#lead-form" className="text-blue-600 hover:underline">Get Your Free Roof Inspection at FreeRoofPros.com</a></strong><br />
        Call us: <strong>541-728-0266</strong><br />
        Email: <strong>info@freeroofpros.com</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>We serve homeowners throughout Bend, Redmond, La Pine, Sunriver, Tumalo, and all of Deschutes County.</em>
      </p>
    </BlogLayout>
  );
}
