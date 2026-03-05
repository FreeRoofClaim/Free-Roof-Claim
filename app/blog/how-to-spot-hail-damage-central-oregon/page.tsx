import type { Metadata } from 'next';
import BlogLayout from '@/components/blog/BlogLayout';

const SLUG = 'how-to-spot-hail-damage-central-oregon';
const TITLE = 'How to Spot Hail Damage on Your Roof in Central Oregon';
const DESCRIPTION =
  'A practical guide for Bend, Redmond, and La Pine homeowners on identifying hail damage after a storm, when to schedule a professional inspection, and how to document damage for your insurance claim.';
const PUBLISHED_DATE = 'March 5, 2026';
const PUBLISHED_DATE_ISO = '2026-03-05';
const MODIFIED_DATE_ISO = '2026-03-05';
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
    modifiedTime: MODIFIED_DATE_ISO,
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
      {/* BLUF: Lead with the complete answer */}
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The eight signs of hail damage on a Central Oregon roof are: circular bruise marks on shingles, granule loss in gutters, dents on metal surfaces, cracked or missing shingles, exposed black asphalt substrate, damaged ridge cap shingles, cracked pipe boots and vent covers, and interior water stains.</strong> Most hail damage is invisible from ground level — it only becomes obvious as leaks or accelerated shingle failure 12 to 36 months after the storm. For homeowners in <a href="/bend-or" className="text-blue-600 hover:underline">Bend</a>, <a href="/redmond-or" className="text-blue-600 hover:underline">Redmond</a>, and <a href="/la-pine-or" className="text-blue-600 hover:underline">La Pine</a> affected by the August 5, 2025 hailstorm, the <strong>August 2026 claim filing deadline</strong> is approaching — do not wait for a leak to confirm damage.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This guide explains what hail damage looks like on each surface, how to photograph it for your insurance claim, and when to call a professional.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Is Hail Damage So Hard to See from the Ground?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Hail damage is invisible from ground level because the impact removes granules and creates subsurface fractures that are only visible from five feet away on the roof surface itself.</strong> When hail strikes an asphalt shingle, it dislodges the protective granule layer — the sand-like particles that shield the asphalt mat from UV radiation. The impact leaves a soft, bruised depression that looks like nothing from twenty feet below. Insurance adjusters are trained to walk a roof and count impact marks per 10-square-foot test square. If they find enough impacts, they approve the claim.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Your job before the adjuster arrives is to know what&apos;s on your roof.</strong> A professional inspection creates the written record with counted impact marks that makes your claim credible. Without it, you are dependent on whatever the insurer&apos;s adjuster finds — and potentially misses.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Are the 8 Signs of Hail Damage on an Asphalt Shingle Roof?</h2>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Random Circular Bruise Marks on Shingles</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The definitive sign of hail damage is a soft, circular depression where granules have been knocked loose — press your thumb into it and if it feels softer than surrounding shingle material, the asphalt mat has been compromised.</strong> These marks appear randomly across the roof surface, distinguishing them from foot-traffic damage (which is linear and concentrated). The soft bruised area indicates the protective granule layer has been displaced and the asphalt mat beneath is now exposed to UV radiation. Impact marks on Central Oregon&apos;s August 2025 storm ranged from nickel- to golf ball-sized depending on hailstone trajectory.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Granule Loss in Gutters and Downspouts</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>A significant accumulation of dark, sand-like granules in your gutters — beyond normal seasonal buildup — is strong evidence that hail dislodged them from your shingles.</strong> Check your gutters and downspout splash blocks within days after a storm. Normal granule shedding occurs gradually over years; post-hail accumulation is concentrated and noticeable. Photograph the granule deposits in context — wide shots showing the gutter and close-ups of the granule pile. Downspout splash blocks often show the most concentrated deposits because they collect drainage from the entire roof slope.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. Dents on Metal Surfaces: Gutters, AC Units, and Flashing</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Fresh dents in a scattered pattern on metal gutters, downspouts, AC condenser units, chimney caps, and flashing are among the most reliable and easily photographed indicators of hail impact — and among the hardest for insurers to dispute.</strong> Check these surfaces before climbing onto the roof. A pattern of dents where the paint or coating has cracked confirms the impacts are recent (not old weathering). Metal surfaces receive the same hailstones as your roof but show the damage much more clearly. These photographs are powerful claim evidence because they document the storm&apos;s intensity independent of the roof itself.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. Cracked or Missing Shingles</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Hailstones larger than one inch can crack asphalt shingles outright or split them along impact lines — Central Oregon&apos;s August 2025 storm produced hail up to 1.5 inches, sufficient to cause direct shingle fractures.</strong> Look for shingles with split lines running through or adjacent to impact marks. Also check the perimeter of your roof from the ground for any shingles that were dislodged entirely. Cracked shingles allow immediate water infiltration and should be photographed and documented before any temporary repairs.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Exposed Black Asphalt Substrate (Mat)</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Where granules have been fully removed, the dark asphalt mat beneath is exposed to UV radiation — this is serious structural damage that accelerates deterioration dramatically and constitutes clear, highly visible evidence of impact.</strong> Exposed substrate patches appear as darker, shinier areas on the shingle surface compared to the granule-covered areas. UV exposure on bare asphalt accelerates roof aging — an exposed mat that might otherwise last 10 more years may fail in 2 to 3 years. These patches photograph clearly and are difficult for adjusters to dispute.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. Damaged Ridge Cap Shingles</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Ridge cap shingles — which run along the roof&apos;s peak — are particularly vulnerable to hail because they receive impacts from two angles, making cracking, splitting, and granule loss visible even from the ground with binoculars.</strong> The ridge is the highest-exposure point of the roof. Damage here is often visible without climbing: walk around the house and look at the ridge line from multiple angles. Binoculars make this easier. Ridge cap damage is commonly found even when slope shingles show only minor impact marks.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7. Cracked Pipe Boots and Vent Covers</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Rubber pipe boots around plumbing vents and plastic attic vent covers are commonly cracked by hail — a cracked pipe boot is an active water entry point and constitutes documented hail impact evidence.</strong> These components are relatively small and easy to inspect from the ground or a ladder. Any cracking, splitting, or impact marks on rubber or plastic roof penetrations should be photographed immediately. A cracked pipe boot that allows water infiltration is also an emergency that your policy&apos;s Duties After Loss section requires you to mitigate with temporary tarping.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">8. Interior Water Stains or Attic Moisture</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Brown water stains on interior ceilings, wet attic insulation, or dark wood staining on attic decking are late-stage signs of hail damage — if you see them, water infiltration has been occurring for months and the damage is already more extensive than what caused the original leak.</strong> Interior staining typically appears after the first significant rainfall following a hail event that compromised the roof membrane. Check your attic for wet insulation, black staining on wood sheathing, or visible daylight through the roof decking. These signs indicate the claim is urgent.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How Do I Photograph Hail Damage for My Insurance Claim?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Good hail damage documentation requires date-stamped photos taken in a specific sequence: wide roof elevation shots first, then close-ups of every impact mark with a coin for scale, then all metal surfaces, then interior damage — this sequence creates a complete record insurers cannot easily dismiss.</strong> Follow these steps before and during a professional inspection:
      </p>
      <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>Enable date/time stamps</strong> on your phone camera before taking any photos — timestamps link the damage to the storm date.</li>
        <li><strong>Take wide shots first</strong> — full roof elevation photos from each side of the house, plus photos of gutters and downspouts.</li>
        <li><strong>Get close-up shots</strong> of every impact mark you can identify. Place a coin or ruler next to each mark for scale.</li>
        <li><strong>Photograph all metal damage</strong> — gutters, AC condenser, chimney cap, flashing, satellite dish mounts.</li>
        <li><strong>Check multiple roof surfaces</strong> — south- and west-facing slopes show granule loss most clearly; north-facing slopes show impacts most distinctly because they&apos;re less weathered.</li>
        <li><strong>Photograph the interior</strong> — any water stains, wet insulation, or attic deck staining.</li>
        <li><strong>Save weather records</strong> — download the NWS storm report or a HailTrace report for your specific address confirming hail date and size. This is available for the August 5, 2025 Deschutes County event.</li>
      </ol>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">When Should I Get a Professional Hail Damage Inspection?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Get a professional inspection immediately — before contacting your insurer — because a licensed contractor&apos;s written report with impact counts is the most credible form of documentation in any insurance claim dispute.</strong> The short answer is: if your home was in the August 2025 storm&apos;s footprint, do not wait for a leak to confirm damage. A professional <a href="/services/storm-damage-repair" className="text-blue-600 hover:underline">storm damage inspection</a> from a licensed Oregon roofing contractor serves three specific purposes: confirming or ruling out damage, creating a written record that predates the adjuster visit, and establishing scope before the insurer&apos;s estimate.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>Confirms or rules out damage</strong> — so you&apos;re not filing a claim on an undamaged roof, or missing damage that&apos;s already compromising your shingles.</li>
        <li><strong>Creates a written record</strong> — a professional report with impact counts per test square is far more credible than homeowner photos alone when dealing with insurance adjusters.</li>
        <li><strong>Establishes scope before the adjuster visits</strong> — if your contractor&apos;s assessment and the insurer&apos;s estimate disagree significantly, you have documented grounds to dispute the lower number.</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        For Central Oregon homeowners affected by the August 2025 storm, the <strong>practical claim deadline is August 2026</strong>. Don&apos;t wait until summer — contractor schedules fill up quickly as deadlines approach. Learn more about the <a href="/blog/oregon-roof-insurance-claim-deadline" className="text-blue-600 hover:underline">Oregon insurance claim deadline and what it means for your roof</a>.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Safety Warning: Do Not Inspect Your Own Roof</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Do not climb onto your roof yourself — falls from roofs are one of the leading causes of fatal home accidents, and a licensed contractor can complete a full inspection in 30-45 minutes at no cost to you.</strong> Everything described in this guide can be observed and documented by a professional. A free inspection protects you physically, gives you certified written evidence, and costs nothing.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Is Central Oregon Hail Damage More Serious Than in Other Regions?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Central Oregon&apos;s high-elevation UV radiation and freeze-thaw cycles amplify hail damage significantly — a storm that causes moderate damage on the Oregon coast can cause serious structural failure in Deschutes County within one to two winters.</strong> Bend&apos;s elevation and high-desert climate mean shingles experience more intense UV exposure than coastal regions. When hail removes granules, the unprotected asphalt mat oxidizes dramatically faster. A roof that might last 10 more years after a coastal hailstorm may fail in 2 to 3 years in Central Oregon conditions.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The freeze-thaw cycles common in <a href="/la-pine-or" className="text-blue-600 hover:underline">La Pine</a> and higher-elevation parts of Deschutes County compound this effect. Any crack introduced by hail becomes a water entry point. Water that infiltrates a micro-fracture in August and freezes in November expands that damage dramatically. What appears as a minor surface impact in summer can become a structural problem requiring full decking replacement by spring.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Get a Free Hail Damage Inspection Before the August 2026 Deadline</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>FreeRoofPros connects Bend, Redmond, and La Pine homeowners with vetted, licensed Oregon contractors who specialize in insurance claim documentation — inspections are free, no-obligation, and include a written report you can use directly with your insurer.</strong> Our network of licensed Oregon contractors understands both the physical signs of hail damage in Central Oregon&apos;s climate and the documentation standards required by insurance adjusters. Every inspection includes a written report with photographs and impact counts.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The August 2026 claim deadline for the 2025 storm is approaching.</strong> Schedule your inspection now while contractor availability is still open.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong><a href="/#lead-form" className="text-blue-600 hover:underline">Schedule Your Free Roof Inspection at FreeRoofPros.com</a></strong><br />
        Call us: <strong>(541) 728-0266</strong><br />
        Email: <strong>info@freeroofpros.com</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>We serve homeowners throughout Bend, Redmond, La Pine, Sunriver, Tumalo, and all of Deschutes County.</em>
      </p>
    </BlogLayout>
  );
}
