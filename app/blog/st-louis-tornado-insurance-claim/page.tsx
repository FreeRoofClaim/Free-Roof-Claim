import type { Metadata } from 'next';
import Link from 'next/link';
import BlogLayout from '@/components/blog/BlogLayout';

const SLUG = 'st-louis-tornado-insurance-claim';
const TITLE =
  "St. Louis May 2025 Tornado and Hail Damage: Filing Your Insurance Claim and Understanding Missouri's Matching Law";
const DESCRIPTION =
  "How St. Louis homeowners can file storm damage insurance claims and leverage Missouri's unique matching law to get a full roof replacement — not just a partial repair — after the May 2025 tornado and hail outbreak.";
const PUBLISHED_DATE = 'March 1, 2026';
const PUBLISHED_DATE_ISO = '2026-03-01';
const CITY = 'St. Louis';

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
    tags: ['tornado damage', 'hail damage', 'St. Louis', 'Missouri', 'insurance claim', 'matching law', 'roof replacement'],
  },
};

export default function StLouisTornadoInsuranceClaimPage() {
  return (
    <BlogLayout
      title={TITLE}
      description={DESCRIPTION}
      publishedDate={PUBLISHED_DATE}
      publishedDateISO={PUBLISHED_DATE_ISO}
      readingTimeMinutes={12}
      slug={SLUG}
      city={CITY}
    >
      <p className="text-gray-700 leading-relaxed mb-4">
        On May 16, 2025, a violent EF3 tornado carved through the St. Louis area, killing five people, injuring dozens more, and leaving a trail of destruction that Mayor Cara Spencer estimated at <strong>more than $1 billion in property damage</strong>.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Happened: The May 16, 2025 St. Louis Tornado</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The EF3 tornado touched down on May 16, 2025, causing catastrophic damage across <a href="https://www.stlpr.org/health-science-environment/2025-05-16/st-louis-storms-tornado-cause-injuries-widespread-damage-trees-buildings-roads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Clayton, University City, the Central West End, and north St. Louis neighborhoods</a>. More than <strong>5,000 homes</strong> were damaged or destroyed. Over <strong>115,000 Ameren customers</strong> lost power.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Missouri ranked <strong>#1 in the nation</strong> for the sharpest increase in major hail events between 2022 and 2024: a <strong>182% surge</strong>, from 152 events to 437, per <a href="https://insurify.com/car-insurance/insights/states-with-highest-increase-in-hail/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Insurify analysis of NOAA data</a>.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Missouri&apos;s Matching Law: The Homeowner Right Nobody Talks About</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>If the hail or tornado damaged part of your roof or siding, and matching replacement materials are no longer available, your insurer may owe you a full replacement — not just a patch job.</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This comes from the <em>Alessi v. Mid-Century Insurance Company</em> case. According to analysis by <a href="https://www.propertyinsurancecoveragelaw.com/blog/is-matching-required-in-missouri/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Property Insurance Coverage Law Blog</a>, Missouri courts have recognized that if damaged materials are discontinued or no longer match the undamaged portions, an insurer may be required to replace the entire surface.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">What This Means Practically</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Under Missouri&apos;s judicially recognized matching requirement, if matching materials are unavailable, <strong>the insurer may owe you full replacement of the entire affected surface</strong> — not just the damaged section.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4"><strong>This rule applies to siding, gutters, and other components as well — not just shingles.</strong></p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Missouri Insurance Claim Deadlines</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Most Missouri homeowners policies require <strong>notice of damage within 60 days</strong>. Some allow up to 12 months. <strong>Best practice:</strong> Report your damage within 30 to 60 days of discovering it.
      </p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to File Your St. Louis Storm Damage Claim</h2>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 1: Inspect Your Entire Property</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Document roof shingles, gutters, siding, windows, HVAC units, fencing, and outbuildings with date-stamped photos and video. Our guide to <Link href="/blog/signs-of-hail-damage-on-roof" className="text-blue-600 hover:underline">signs of hail damage on your roof</Link> explains what to look for at ground level.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 2: Call Your Insurer and Open a Claim</h3>
      <p className="text-gray-700 leading-relaxed mb-4">Notify your insurance company promptly. Be specific about the storm date — May 16, 2025 for the tornado.</p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 3: Get an Independent Inspection Before the Adjuster Arrives</h3>
      <p className="text-gray-700 leading-relaxed mb-4">Schedule a free professional roof inspection with a licensed Missouri contractor before the insurance adjuster arrives.</p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 4: Be Present When the Adjuster Comes</h3>
      <p className="text-gray-700 leading-relaxed mb-4">You are entitled to have your contractor present during the adjuster&apos;s inspection.</p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 5: Invoke the Matching Law If Applicable</h3>
      <p className="text-gray-700 leading-relaxed mb-4">If your contractor determines matching materials are unavailable, put this in writing to your insurer.</p>

      <hr className="my-8 border-gray-200" />

      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Free Roof Inspection for St. Louis Homeowners</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        FreeRoofPros.com specializes in <Link href="/services/storm-damage-repair" className="text-blue-600 hover:underline">storm damage roof replacement</Link> and <Link href="/services/insurance-claims" className="text-blue-600 hover:underline">insurance claim assistance</Link>. We understand Missouri&apos;s matching law and our inspections are completely free.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/" className="text-blue-600 hover:underline font-semibold">Get Your Free Roof Inspection &rarr;</Link><br />
        Call us: <strong>541-728-0266</strong><br />
        Email: <strong>info@freeroofpros.com</strong>
      </p>
    </BlogLayout>
  );
}
