import type { Metadata } from 'next';
import BlogLayout from '@/components/blog/BlogLayout';

const SLUG = 'how-to-spot-hail-damage-central-oregon';
const TITLE = 'How to Spot Hail Damage on Your Roof in Central Oregon';
const DESCRIPTION =
  'A practical guide for Bend, Redmond, and La Pine homeowners on identifying hail damage after a storm, when to schedule a professional inspection, and how to document damage for your insurance claim.';
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
    tags: ['hail damage', 'roof inspection', 'Central Oregon', 'Bend', 'Redmond', 'La Pine'],
  },
};

export default function HowToSpotHailDamageCentralOregonPage() {
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
        On August 5, 2025, a severe hailstorm dropped golf ball-sized hail across Deschutes County — damaging tens of thousands of roofs in <a href="/bend-or" className="text-blue-600 hover:underline">Bend</a>, <a href="/redmond-or" className="text-blue-600 hover:underline">Redmond</a>, <a href="/la-pine-or" className="text-blue-600 hover:underline">La Pine</a>, and surrounding communities. The problem? Most hail damage is invisible from the ground and only becomes obvious years later — as leaks, premature aging, or denied insurance claims.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        With the <strong>August 2026 claim filing deadline</strong> approaching for that storm, now is the time to inspect your roof and document what you find. This guide walks you through exactly what to look for, how to photograph it, and when to call in a professional.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Hail Damage Is Hard to See</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Unlike a fallen tree branch or missing shingles, hail damage is often subtle. A piece of hail strikes an asphalt shingle and dislodges the protective granule layer — the tiny sand-like particles that shield the asphalt mat from UV rays and weathering. The impact leaves a soft, bruised spot or a circular depression. From twenty feet away on the ground, it looks like nothing. From five feet away on the roof, it&apos;s unmistakable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance companies understand this well. Their adjusters are trained to walk a roof and count impact marks per 10-square-foot test square. If they find enough impacts, they approve the claim. If they don&apos;t, they deny it. <strong>Your job before the adjuster arrives is to know what&apos;s up there.</strong>
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8 Signs of Hail Damage on an Asphalt Shingle Roof</h2>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Random Circular Bruise Marks</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The signature sign of hail damage is a soft, circular spot where granules have been knocked loose. Press your thumb into it — if it feels softer than the surrounding shingle or leaves a slight indentation, the asphalt mat below has been compromised. These marks appear randomly across the roof surface, not in a pattern (mechanical damage like foot traffic tends to be linear or concentrated).
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Granule Loss in Gutters and Downspouts</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the storm, check your gutters. A significant collection of dark, sand-like granules — beyond what accumulates normally over months — is a strong indicator that hail knocked them loose. Downspout splash blocks often show concentrated granule deposits after a hail event.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. Dents on Metal Surfaces</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Before you even get on your roof, look at metal surfaces: gutters, downspouts, AC units, metal chimney caps, and flashing around skylights and vents. Fresh dents in a scattered pattern — especially ones where the paint or coating has cracked — are reliable indicators of hail impact. These are easier to photograph and hard for insurers to dispute.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. Cracked or Missing Shingles</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Large hailstones — Central Oregon&apos;s August 2025 storm produced stones up to 1.5 inches in diameter — can crack shingles outright or dislodge them entirely. Look for shingles with split lines running through impact marks, and check the perimeter of your roof from the ground for any missing shingles.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Exposed Black Substrate (Asphalt Mat)</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Where granules have been removed, the dark asphalt mat beneath becomes visible. This is particularly serious because the mat is now directly exposed to UV radiation, which accelerates deterioration dramatically. Patches of exposed mat are highly visible in photographs and constitute clear evidence of damage.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. Damaged Ridge Cap Shingles</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The ridge cap — the shingles that run along the peak of your roof — is particularly vulnerable because it receives impacts from two angles. Look for cracking, splitting, or granule loss on ridge cap shingles. These are often visible from the ground with binoculars.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7. Damaged Pipe Boots and Vent Covers</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Rubber pipe boots around plumbing vents and plastic covers over attic vents are commonly cracked by hail. Inspect these closely — a cracked pipe boot is an active water entry point, and a cracked vent cover can be documented as hail impact evidence.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">8. Interior Water Stains or Attic Moisture</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If hail damage has allowed water infiltration, you may see brown water stains on interior ceilings or walls — typically appearing after the next rainfall. Check your attic for wet insulation, dark staining on wood decking, or daylight visible through the roof. These are late-stage signs; if you&apos;re seeing them, the damage has likely been there for months.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Photograph Hail Damage for Your Insurance Claim</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Good documentation dramatically increases the odds of a full claim approval. Follow these steps before and during a professional inspection:
      </p>
      <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>Enable date/time stamps</strong> on your phone camera before taking any photos.</li>
        <li><strong>Take wide shots first</strong> — full roof elevation photos from each side of the house, plus photos of gutters and downspouts.</li>
        <li><strong>Get close-up shots</strong> of every impact mark you can identify. Place a coin or ruler next to each mark for scale.</li>
        <li><strong>Photograph all metal damage</strong> — gutters, AC unit, chimney cap, flashing, satellite dish mounts.</li>
        <li><strong>Check multiple roof surfaces</strong> — south- and west-facing slopes receive more sun and show granule loss more clearly; north-facing slopes may show impacts more distinctly because they&apos;re less weathered.</li>
        <li><strong>Photograph the interior</strong> — any water stains, wet insulation, or attic deck staining.</li>
        <li><strong>Save weather records</strong> — download the NWS storm report or a HailTrace report for your address confirming hail date and size. This is available for the August 5, 2025 Deschutes County event.</li>
      </ol>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">When Should You Get a Professional Inspection?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The short answer: <strong>immediately, if you haven&apos;t already.</strong> A professional <a href="/services/storm-damage-repair" className="text-blue-600 hover:underline">storm damage inspection</a> from a licensed Oregon roofing contractor serves three purposes:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>Confirms or rules out damage</strong> — so you&apos;re not filing a claim on an undamaged roof, or worse, missing damage that&apos;s already there.</li>
        <li><strong>Creates a written record</strong> — a professional inspection report with photos is far more credible than homeowner photos alone when dealing with insurance adjusters.</li>
        <li><strong>Establishes scope before the adjuster visits</strong> — if your contractor&apos;s assessment and the insurer&apos;s adjuster estimate disagree significantly, you have documentation to dispute the lower number.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For Central Oregon homeowners affected by the August 2025 storm, the <strong>practical claim deadline is August 2026</strong>. Don&apos;t wait until summer — contractor schedules fill up quickly as deadlines approach. Learn more about the <a href="/blog/oregon-roof-insurance-claim-deadline" className="text-blue-600 hover:underline">Oregon insurance claim deadline and what it means for your roof</a>.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Safety Warning: Don&apos;t Inspect Your Own Roof</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        We strongly recommend against DIY roof inspections. Falls from roofs are one of the leading causes of fatal home accidents. Everything described in the inspection section above can be observed by a professional in 30-45 minutes at no cost to you. A free inspection from a licensed contractor protects you, gives you documented evidence, and costs nothing.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Central Oregon Hail: What Makes It Different</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Central Oregon&apos;s high desert climate creates conditions that amplify hail damage in ways many homeowners don&apos;t realize. The intense UV radiation at Bend&apos;s elevation accelerates granule oxidation — meaning shingles that might last 25 years in a coastal climate often age faster here. When hail removes granules, that UV exposure accelerates even faster. A storm that would cause moderate damage on the coast can be significantly more serious in Deschutes County.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The freeze-thaw cycles common in La Pine and higher-elevation parts of Deschutes County also matter. Any crack or compromise introduced by hail becomes a water entry point — and water that enters a crack and then freezes expands the damage dramatically over winter. What looks like a minor surface hit in August can become a serious structural issue by February.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Get a Free Hail Damage Inspection Today</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        FreeRoofPros connects <a href="/bend-or" className="text-blue-600 hover:underline">Bend</a>, <a href="/redmond-or" className="text-blue-600 hover:underline">Redmond</a>, and <a href="/la-pine-or" className="text-blue-600 hover:underline">La Pine</a> homeowners with vetted, licensed Oregon roofing contractors who specialize in <a href="/services/insurance-claims" className="text-blue-600 hover:underline">insurance claim documentation</a> and <a href="/services/roof-replacement" className="text-blue-600 hover:underline">storm damage roof replacement</a>. Our inspections are free, no-obligation, and come with a written report you can use with your insurer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The August 2026 claim deadline for the 2025 storm is approaching.</strong> Schedule your inspection now while contractor availability is still open.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><a href="/#lead-form" className="text-blue-600 hover:underline">Schedule Your Free Roof Inspection at FreeRoofPros.com</a></strong><br />
        Call us: <strong>541-728-0266</strong><br />
        Email: <strong>info@freeroofpros.com</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>We serve homeowners throughout Bend, Redmond, La Pine, Sunriver, Tumalo, and all of Deschutes County.</em>
      </p>
    </BlogLayout>
  );
}
