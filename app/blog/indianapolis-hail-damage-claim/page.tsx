import type { Metadata } from 'next';
import Link from 'next/link';
import BlogLayout from '@/components/blog/BlogLayout';

const SLUG = 'indianapolis-hail-damage-claim';
const TITLE =
  "Indianapolis Was Hit 4 Times in Spring 2025: How to File Your Hail Damage Claim Before Indiana's Deadline";
const DESCRIPTION =
  "Indianapolis homeowners faced four separate hail events in spring 2025. Here's how to document multiple storm events, determine which event damaged your roof, and file your insurance claim before Indiana's statute of limitations expires.";
const PUBLISHED_DATE = 'March 1, 2026';
const PUBLISHED_DATE_ISO = '2026-03-01';
const CITY = 'Indianapolis';

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
    tags: ['hail damage', 'Indianapolis', 'Indiana', 'insurance claim', 'multiple hail events', 'roof replacement', 'claim deadline'],
  },
};

export default function IndianapolisHailDamageClaimPage() {
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
        By the time June arrived, Indianapolis homeowners had been through four separate severe weather events in the span of just a few months. Four rounds of wind, hail, and structural stress on the same roofs.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Four Storms, One Spring: What Hit Indianapolis in 2025</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Indiana experienced a 107% increase in major hailstorms between 2022 and 2024 — ranking third nationally for the sharpest rate of acceleration, per <a href="https://insurify.com/car-insurance/insights/states-with-highest-increase-in-hail/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Insurify analysis of NOAA data</a>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>April 2–3, 2025:</strong> Severe storms with winds 50–90 mph impacting <a href="https://www.stormwarriorroof.com/blog/p.250403000/severe-weather-in-indianapolis-on-42-4325/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">more than 350,000 homes</a>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>April 29–30, 2025:</strong> Second storm line with 1.25–1.5 inch hail, per <a href="https://www.weather.gov/ind/april29and302025severe" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">NWS Indianapolis</a>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>May 16, 2025:</strong> 80 mph gusts and quarter-sized hail across Marion, Hamilton, and Hendricks counties.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>June 18, 2025:</strong> Additional 70–80 mph gusts and quarter-to-nickel-sized hail across Marion, Hamilton, Hancock, and Madison counties.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Indiana&apos;s Insurance Claim Deadline: Don&apos;t Miss It</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most Indiana homeowners insurance policies require hail damage claims within <strong>12 to 24 months</strong> of the storm date. <strong>The filing window for April 2025 events may close as early as April 2026.</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Indiana&apos;s lawsuit statute of limitations under <a href="https://indianaresidential.com/indianapolis-hail-damage-insurance-claim/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Indiana Code §34-11-2-4</a> is 2 years from the incident date.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Indiana&apos;s Two-Layer Code Rule</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Indiana building code allows a maximum of two layers of shingles on a residential roof.</strong> If your roof currently has two layers, your entire roof must be stripped to the decking before new shingles can be installed. This adds <strong>$1.00 to $3.00 per square foot</strong> in additional labor costs, per <a href="https://indyroofandrestoration.com/roof-replacement-cost-indianapolis-2026/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Indy Roof and Restoration</a>.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to File Your Indianapolis Hail Damage Claim</h2>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 1: Document All Damage Now</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Walk your property and photograph everything with date-stamped photos and video. Our guide to <Link href="/blog/signs-of-hail-damage-on-roof" className="text-blue-600 hover:underline">signs of hail damage on your roof</Link> will help you identify what to look for at ground level before calling a professional.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 2: Schedule a Free Professional Inspection</h3>
      <p className="text-gray-700 leading-relaxed mb-4">Have a licensed Indiana roofing contractor assess your roof before calling your insurer.</p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 3: Notify Your Insurer Promptly</h3>
      <p className="text-gray-700 leading-relaxed mb-4">Open a claim for each storm event that caused damage, providing specific storm dates.</p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 4: Have Your Contractor Present at the Adjuster Inspection</h3>
      <p className="text-gray-700 leading-relaxed mb-4">Your contractor can flag missed items like the two-layer strip-off cost and decking damage in real time.</p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 5: Review Before Accepting</h3>
      <p className="text-gray-700 leading-relaxed mb-4">Compare the settlement against your contractor&apos;s written estimate before signing any documents.</p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Act Before Your Deadline</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>FreeRoofPros.com</strong> serves Indianapolis homeowners with expert <Link href="/services/storm-damage-repair" className="text-blue-600 hover:underline">storm damage inspections</Link>, thorough <Link href="/services/insurance-claims" className="text-blue-600 hover:underline">insurance claim documentation</Link>, and complete roof replacement services.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/" className="text-blue-600 hover:underline font-semibold">Get Your Free Roof Inspection &rarr;</Link><br />
        Call us: <strong>541-728-0266</strong><br />
        Email: <strong>info@freeroofpros.com</strong>
      </p>
    </BlogLayout>
  );
}
