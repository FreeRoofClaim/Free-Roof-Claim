import type { Metadata } from 'next';
import BlogLayout from '@/components/blog/BlogLayout';

const SLUG = 'signs-of-hail-damage-on-roof';
const TITLE = 'Signs of Hail Damage on Your Roof: A Complete Visual Guide';
const DESCRIPTION =
  'Learn how to identify hail damage on asphalt, metal, tile, and wood roofs. Covers granule loss, bruising, cracked tiles, dented metal, and the ground-level checklist approach.';
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
    tags: ['hail damage', 'roof inspection', 'hail damage signs', 'storm damage', 'roof shingles'],
  },
};

export default function HailDamageSignsPage() {
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
        A hailstorm can cause thousands of dollars in roof damage that is completely invisible from your driveway. By the time leaks appear inside your home, the underlying damage has often been in place for 12-18 months, creating compounding problems with decking, insulation, and interior finishes. Knowing how to identify hail damage early - and understanding the difference between functional damage and cosmetic damage - is essential for getting a valid insurance claim processed before your window closes.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Hail Size Causes What Level of Damage?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hail damage severity correlates directly with stone size. Adjusters and roofing contractors use standardized size references to document and verify storm reports:
      </p>

      <table className="w-full border-collapse mb-6">
        <thead>
          <tr>
            <th className="bg-blue-600 text-white px-4 py-2 text-left">Hail Size</th>
            <th className="bg-blue-600 text-white px-4 py-2 text-left">Common Reference</th>
            <th className="bg-blue-600 text-white px-4 py-2 text-left">Typical Roof Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-200">0.75 inch</td>
            <td className="px-4 py-2 border border-gray-200">Penny</td>
            <td className="px-4 py-2 border border-gray-200">Granule loss on soft asphalt; minor denting on aluminum</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">1.00 inch</td>
            <td className="px-4 py-2 border border-gray-200">Quarter</td>
            <td className="px-4 py-2 border border-gray-200">Functional damage to standard asphalt shingles; denting on gutters and vents</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">1.25 inch</td>
            <td className="px-4 py-2 border border-gray-200">Half dollar</td>
            <td className="px-4 py-2 border border-gray-200">Significant granule loss, mat exposure, bruising on architectural shingles</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">1.75 inch</td>
            <td className="px-4 py-2 border border-gray-200">Golf ball</td>
            <td className="px-4 py-2 border border-gray-200">Heavy functional damage; cracked tiles, punctures on thin metal, wood shake splitting</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-200">2.00+ inch</td>
            <td className="px-4 py-2 border border-gray-200">Baseball or larger</td>
            <td className="px-4 py-2 border border-gray-200">Severe structural damage; punctures through multiple shingle layers, decking exposure</td>
          </tr>
        </tbody>
      </table>

      <p className="text-gray-700 leading-relaxed mb-4">
        Even 1-inch hail - common in spring and summer storm systems across the Central Plains and Midwest - is large enough to cause functional damage to standard 3-tab and architectural asphalt shingles. Wind speed compounds the effect: 60 mph winds combined with 1-inch hail can cause damage comparable to larger hail at slower wind speeds.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Signs of Hail Damage on Asphalt Shingles</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Asphalt shingles are the most common roofing material in North America, covering over 80% of U.S. homes. They are also among the most straightforward to assess for hail damage when you know what to look for.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Granule Loss</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The protective granule layer on asphalt shingles serves as UV protection and fire resistance. Hail impacts dislodge granules in a circular or irregular pattern, exposing the dark asphalt mat beneath. Fresh hail impacts appear as bright, clean spots - the exposed mat has not yet oxidized or darkened from UV exposure. This contrast is one of the clearest visual indicators of recent storm damage versus old wear.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        After a hailstorm, check your gutters and downspout splash blocks for an unusual concentration of granules. A large accumulation of granules in gutters is one of the most reliable ground-level indicators of significant shingle damage above.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Bruising and Soft Spots</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Larger hail impacts can &quot;bruise&quot; the asphalt mat beneath the granule layer, creating a soft, spongy area when pressed. Bruising is a form of functional damage because it compromises the shingle&apos;s structural integrity and accelerates cracking. To identify bruising, gently press on areas where granule loss is visible - a bruised area will feel softer and may have a slight depression. This is best done by a professional due to roof safety considerations.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Cracking and Fractures</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        In cold weather or with large hail (1.75 inch and above), asphalt shingles can crack directly on impact. These cracks create immediate water infiltration pathways. Cracks that radiate from a central impact point are characteristic of hail damage, as opposed to the straight-line cracking pattern associated with thermal cycling and age.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Signs of Hail Damage on Metal Roofs</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Metal roofing is significantly more impact-resistant than asphalt, but it is not immune to hail damage. The key indicators on metal roofs are:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>Circular dents or dimples:</strong> Hail impacts create round depressions in the metal surface. On painted panels, look for paint cracking or chipping at the center of impact points, which accelerates rust and corrosion.</li>
        <li><strong>Dented ridgecap and valleys:</strong> The thinner metal at ridges, hips, and valley flashings is more susceptible to deformation than field panels.</li>
        <li><strong>Damaged sealant at fasteners:</strong> Impact near fastener heads can crack the rubber sealant washer, creating a slow leak point even without visible denting on the panel itself.</li>
        <li><strong>Cosmetic vs. functional distinction:</strong> On thicker standing-seam metal (24-gauge or heavier), hail damage may be cosmetic only - dents without waterproofing compromise. Insurance coverage for cosmetic-only metal roof damage depends entirely on your policy endorsements.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Signs of Hail Damage on Tile Roofs</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Concrete and clay tile roofs are durable, but large hail (1.5 inch and above) can crack or shatter individual tiles. Key indicators include:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>Visible cracks or chips:</strong> Cracks may radiate from an impact point or appear as clean breaks through the tile body. Even hairline cracks compromise waterproofing over time.</li>
        <li><strong>Broken tile pieces in gutters:</strong> Fragments in gutters or on the ground after a storm indicate broken tiles above.</li>
        <li><strong>Displaced tiles:</strong> High-wind combined with hail can dislodge tiles that have been impact-weakened.</li>
        <li><strong>Underlayment exposure:</strong> Where tiles are cracked or missing, the felt or synthetic underlayment beneath is visible. While the underlayment provides temporary protection, it is not a long-term waterproofing solution.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Signs of Hail Damage on Wood Shake Roofs</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Wood shake and shingle roofs show hail damage in distinct ways. Look for:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>Splits with sharp edges:</strong> Hail-induced splits in wood shakes have sharp, clean edges with no weathering or staining. Age-related splits tend to have gray, weathered surfaces at the split faces.</li>
        <li><strong>Impact marks with wood fiber raised:</strong> Fresh hail impacts often show raised wood fibers at the center of the impact point, surrounded by a bruised or discolored area.</li>
        <li><strong>Diagonal splits:</strong> Hail typically causes splits along the wood grain, often at an angle consistent with the storm&apos;s direction of travel.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Collateral Damage Indicators You Can See From the Ground</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        You do not have to get on your roof to find strong evidence of a hail event. The following ground-level and exterior indicators are highly reliable - and are routinely used by adjusters and contractors to corroborate roof damage claims:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>Gutters and downspouts:</strong> Dents, dings, and paint chips on aluminum gutters are one of the clearest hail indicators. The soft aluminum records every impact. Check the back side of downspouts facing the prevailing storm direction.</li>
        <li><strong>Window screens:</strong> Small circular holes or tears in window screens correlate precisely with hail size and density. Screens are often the best &quot;test square&quot; available at ground level.</li>
        <li><strong>Windowsills and wood trim:</strong> Painted wood windowsills show fresh circular impact marks and paint chips from hail. These are dated by the paint oxidation around the fresh impact.</li>
        <li><strong>AC condenser fins:</strong> The aluminum fins on exterior air conditioning units dent easily. Heavy denting on an AC unit after a storm is a near-universal indicator of roof-level hail damage.</li>
        <li><strong>Siding:</strong> Vinyl siding shows round cracks or holes; aluminum siding shows dents. Impact patterns on siding can also confirm storm direction and intensity.</li>
        <li><strong>Soft metal flashing:</strong> Check the step flashing around chimneys, skylights, and vent pipes. Dents or deformation in this thin metal confirms hail reached roof level.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Test Square Method: How Adjusters Evaluate Damage</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Professional roof inspectors use a standardized method called &quot;test squares&quot; to quantify hail damage density. A test square is a 10-foot by 10-foot (100 square foot) section of roof surface, typically marked with chalk lines. The inspector counts and marks each verifiable hail hit within the test square.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Industry guidelines (used by major insurers and organizations like the Insurance Institute for Business and Home Safety) generally define functional damage thresholds at 6-8 or more verifiable hits per test square for standard 3-tab shingles, and 8-10 or more per square for heavier architectural shingles. When your contractor or public adjuster conducts an inspection, ask how many hits per test square they documented and on which roof planes. This data belongs in your insurance claim documentation.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Functional Damage vs. Cosmetic Damage: Why It Matters</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The distinction between functional and cosmetic damage is critical for insurance purposes. Functional damage affects the roof&apos;s ability to perform its primary protective role - keeping water out. Cosmetic damage affects appearance only.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurers increasingly apply cosmetic damage exclusions that exclude coverage for damage that does not impair waterproofing, even if it affects appearance and accelerates long-term deterioration. To establish functional damage, your inspection report should document: exposed mat on asphalt shingles (waterproofing layer compromised), cracks or fractures in any material (water infiltration pathway created), or denting that has broken sealant integrity on metal roofing.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        For more guidance on evaluating your specific situation, visit our <a href="/faq" className="text-blue-600 hover:underline">FreeRoofPros FAQ</a>. For a real-world example of how hail damage plays out in a claim scenario, read our report on the <a href="/blog/central-oregon-hailstorm-2025" className="text-blue-600 hover:underline">Central Oregon Hailstorm 2025</a>, where 1.75-inch hail caused widespread functional damage to both asphalt and metal roofing across a three-county area.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Post-Storm Inspection Action List</h2>
      <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
        <li>Within 24 hours of a hailstorm, do a ground-level walkround: check gutters, AC condenser, window screens, siding, and window trim for impact marks. Photograph everything with a timestamp.</li>
        <li>Check your gutters for granule accumulation - scoop a sample and photograph it next to a ruler if the volume is significant.</li>
        <li>Look up the storm event on weather.gov or spotter network reports to confirm reported hail size at your specific location. Save or screenshot the record.</li>
        <li>Do not attempt to inspect your own roof - hire a licensed roofing contractor for a safety-compliant professional inspection within 5-10 days of the storm.</li>
        <li>Ask your contractor to document test squares on at least 3 roof planes and provide a written count of hail hits per test square.</li>
        <li>Request that your contractor&apos;s report specifically distinguish functional damage from cosmetic damage using industry-standard criteria.</li>
        <li>File your insurance claim promptly after the professional inspection is complete - do not delay beyond 30 days of the storm event.</li>
      </ol>
    </BlogLayout>
  );
}
