import type { Metadata } from 'next';
import Link from 'next/link';
import BlogLayout from '@/components/blog/BlogLayout';

const SLUG = 'kansas-city-hail-insurance-claim';
const TITLE =
  "Kansas City Hail Damage: MO vs. KS Insurance Rules and What the 2024 Gorilla Hail Means for Your Claim";
const DESCRIPTION =
  "Kansas City straddles Missouri and Kansas — two states with very different insurance laws. Learn which rules apply to your home and how the 2024 'gorilla hail' event still affects open claims today.";
const PUBLISHED_DATE = 'March 1, 2026';
const PUBLISHED_DATE_ISO = '2026-03-01';
const CITY = 'Kansas City';

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
    tags: ['hail damage', 'Kansas City', 'Missouri', 'Kansas', 'gorilla hail', 'insurance claim', 'state insurance laws', 'roof replacement'],
  },
};

export default function KansasCityHailInsuranceClaimPage() {
  return (
    <BlogLayout
      title={TITLE}
      description={DESCRIPTION}
      publishedDate={PUBLISHED_DATE}
      publishedDateISO={PUBLISHED_DATE_ISO}
      readingTimeMinutes={13}
      slug={SLUG}
      city={CITY}
    >
      <p className="text-gray-700 leading-relaxed mb-4">Most cities have one set of insurance rules. Kansas City has two.</p>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your home sits in Overland Park, Lenexa, or Shawnee, you&apos;re in Kansas. If you live in Lee&apos;s Summit, Liberty, or Independence, you&apos;re in Missouri. These are different legal frameworks for how your <Link href="/services/insurance-claims" className="text-blue-600 hover:underline">insurance claim</Link> works.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The 2024 &quot;Gorilla Hail&quot; Event: What Happened and Why It Still Matters</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        On March 12–13, 2024, a storm carrying &quot;gorilla hail&quot; swept through the Kansas City region. Near Alma, Kansas, hailstones reached <strong>4 inches in diameter (softball-sized)</strong>. <a href="https://hailtrace.com/hail-maps/03-13-2024/ks/kansas-city" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">HailTrace data</a> shows more than <strong>46,401 properties</strong> were impacted by 1-inch-or-larger hail.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        On <strong>May 19, 2025</strong>, another severe system moved through with hail up to 2.5 inches near Carney, 1.8-inch ping-pong-sized hail in Lenexa, and 70 to 80 mph wind gusts.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Missouri Side: What You Need to Know</h2>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Missouri&apos;s Matching Law</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Missouri courts have established a judicially recognized matching requirement under the <em>Alessi v. Mid-Century Insurance Company</em> decision. If hail damages part of your roof or siding and matching replacement materials are no longer available, your insurer may be required to replace the <em>entire</em> affected surface, per <a href="https://www.propertyinsurancecoveragelaw.com/blog/is-matching-required-in-missouri/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Property Insurance Coverage Law Blog</a>.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Kansas Side: Different Rules Apply</h2>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Kansas Insurers Must Acknowledge Within 10 Days</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        State regulations require your insurer to <strong>acknowledge your claim within 10 days</strong> of notification, per <a href="https://claimspot.com/insurance-claims/kansas-guide-insurance-claim-deadlines-faqs/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ClaimSpot&apos;s Kansas insurance guide</a>. Once you submit a completed proof of loss, the insurer must <strong>accept or deny within 15 working days</strong>.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">No Matching Statute in Kansas</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Kansas does not have a codified or judicially established matching requirement. Homeowners on the Kansas side are more dependent on their specific policy language.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Cross-Border Problem: Which Rules Apply to You?</h2>
      <p className="text-gray-700 leading-relaxed mb-4"><strong>Your home&apos;s physical location determines which state&apos;s insurance law applies to your policy.</strong></p>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-200 text-sm">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-2 text-left font-semibold border border-blue-500">Location</th>
              <th className="px-4 py-2 text-left font-semibold border border-blue-500">State Law</th>
              <th className="px-4 py-2 text-left font-semibold border border-blue-500">Matching Law?</th>
              <th className="px-4 py-2 text-left font-semibold border border-blue-500">Insurer Acknowledgment Rule</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2 border border-gray-200">Overland Park, Olathe, Lenexa, Shawnee</td>
              <td className="px-4 py-2 border border-gray-200"><strong>Kansas</strong></td>
              <td className="px-4 py-2 border border-gray-200">No</td>
              <td className="px-4 py-2 border border-gray-200">10 days to acknowledge</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2 border border-gray-200">Kansas City MO, Lee&apos;s Summit, Liberty, Independence</td>
              <td className="px-4 py-2 border border-gray-200"><strong>Missouri</strong></td>
              <td className="px-4 py-2 border border-gray-200"><strong>Yes</strong> (Alessi case)</td>
              <td className="px-4 py-2 border border-gray-200">No specific deadline</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-200">Raytown, Blue Springs</td>
              <td className="px-4 py-2 border border-gray-200"><strong>Missouri</strong></td>
              <td className="px-4 py-2 border border-gray-200"><strong>Yes</strong></td>
              <td className="px-4 py-2 border border-gray-200">No specific deadline</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Schedule Your Free Roof Inspection Today</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you&apos;re in Lee&apos;s Summit or Lenexa, FreeRoofPros.com can help. We know the Kansas City storm history and understand the cross-border insurance complexity. Not sure if you have hail damage? Read our guide to <Link href="/blog/signs-of-hail-damage-on-roof" className="text-blue-600 hover:underline">signs of hail damage on your roof</Link> before your free inspection.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Our <Link href="/services/storm-damage-repair" className="text-blue-600 hover:underline">storm damage repair specialists</Link> serve both the Missouri and Kansas sides of the metro.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/" className="text-blue-600 hover:underline font-semibold">Get Your Free Roof Inspection &rarr;</Link><br />
        Call us: <strong>541-728-0266</strong><br />
        Email: <strong>info@freeroofpros.com</strong>
      </p>
    </BlogLayout>
  );
}
