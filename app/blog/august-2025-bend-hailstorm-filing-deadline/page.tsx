import type { Metadata } from 'next';
import Link from 'next/link';
import BlogLayout from '@/components/blog/BlogLayout';

const SLUG = 'august-2025-bend-hailstorm-filing-deadline';
const TITLE = 'August 2025 Bend Hailstorm: Filing Deadline Approaching for Homeowners';
const DESCRIPTION =
  'The August 5, 2025 hailstorm hit Bend with 1.5-inch hailstones and 50+ mph winds. Oregon\'s 2-year statute of limitations means your deadline to act is August 5, 2027 — but your insurance policy\'s 1-year window closes August 5, 2026. Here\'s exactly what to do now.';
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
    tags: ['hail damage', 'Bend Oregon', 'insurance claim deadline', 'August 2025 hailstorm', 'roof replacement'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: PUBLISHED_DATE_ISO,
  dateModified: PUBLISHED_DATE_ISO,
  author: {
    '@type': 'Organization',
    name: 'FreeRoofPros',
    url: 'https://www.freeroofpros.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'FreeRoofPros',
    url: 'https://www.freeroofpros.com',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://www.freeroofpros.com/blog/${SLUG}`,
  },
  keywords: 'August 2025 Bend hailstorm, Oregon roof insurance claim deadline, hail damage roof repair Bend',
};

export default function AugustBendHailstormDeadlinePage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* BLUF — Answer First */}
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Bottom line:</strong> If your home in <Link href="/bend-or" className="text-blue-600 hover:underline">Bend</Link>, <Link href="/redmond-or" className="text-blue-600 hover:underline">Redmond</Link>, Sunriver, or <Link href="/la-pine-or" className="text-blue-600 hover:underline">La Pine</Link> was in the path of the August 5, 2025 hailstorm, your practical insurance claim deadline is <strong>August 5, 2026</strong> — less than five months away. Oregon&apos;s 2-year statute of limitations (ORS 742.240) gives you until August 5, 2027 to file a lawsuit, but your policy&apos;s one-year claims window closes a full year earlier. Missing that window almost certainly means leaving a full roof replacement on the table.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This article covers what the storm actually did, what Oregon law says about your deadline, and the exact steps you need to take right now.
      </p>

      <hr className="my-8 border-gray-200" />

      {/* Section 1: Storm Facts */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Happened on August 5, 2025?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The August 5, 2025 storm was not a routine summer thunderstorm. The National Weather Service office in Pendleton issued <strong>four severe thunderstorm warnings</strong> across Deschutes and Grant counties as the system developed. Here is what the data shows:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>Hail size:</strong> Up to <strong>1.5 inches in diameter</strong> (ping-pong ball size) — large enough to crack asphalt shingles, strip granules, and permanently compromise a roof&apos;s protective layer</li>
        <li><strong>Wind gusts:</strong> Sustained gusts above <strong>50 mph</strong>, crossing the NWS threshold for a severe thunderstorm designation, with peak gusts recorded at 63 mph at an ODOT mesonet station south of Bend</li>
        <li><strong>Power outages:</strong> More than <strong>11,000 households</strong> across Deschutes County lost power, according to reporting from the Bend Bulletin</li>
        <li><strong>NWS warnings:</strong> <strong>Four severe thunderstorm warnings</strong> — two for Deschutes County, two for neighboring Grant County — issued between 2:50 PM and 4:00 PM PDT</li>
        <li><strong>Wildfire ignitions:</strong> <strong>39 new wildfires</strong> sparked across Central Oregon from the storm&apos;s 69 lightning strikes between 1:00 PM and 4:00 PM</li>
        <li><strong>Urban flooding:</strong> The Franklin Underpass near downtown Bend flooded for nearly two hours as hailstones clogged storm drains</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The storm&apos;s footprint covered most of Deschutes County. Neighborhoods across northeast, east, southeast, and northwest Bend took direct hits. Redmond fell within the northward storm trajectory. A separate warning targeted the Sunriver and La Pine corridor in southwest Deschutes County.
      </p>

      <hr className="my-8 border-gray-200" />

      {/* Section 2: Deadline */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Is My Filing Deadline and Why Does It Matter?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        There are two separate deadlines that affect your rights as an Oregon homeowner. Most people confuse them — and that confusion is costly.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">The Policy Deadline: August 5, 2026</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Your homeowners insurance policy — not Oregon law — sets your claim filing deadline. That deadline is found in the &quot;Duties After Loss&quot; section of your policy, and for most Oregon homeowners, it reads as one year from the date of loss. For the August 5, 2025 storm, that means <strong>August 5, 2026</strong>.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Waiting past this date gives your insurer strong grounds to deny the claim outright. They will argue — often successfully — that they cannot independently verify whether the damage was caused by the storm or by subsequent neglect. Even if the hail damage is obvious, a late filing is a weak filing.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">The Legal Backstop: ORS 742.240 (August 5, 2027)</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Oregon Revised Statute 742.240 gives homeowners <strong>24 months from the date of loss</strong> to file a lawsuit against an insurer who denies or underpays a claim. For the August 5 storm, that hard deadline is August 5, 2027.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This two-year window is the legal backstop — the last resort. Relying on it means you&apos;ve already missed your policy&apos;s one-year claim filing window and are now in litigation territory. That is a far more expensive, time-consuming path than simply filing your claim properly before August 5, 2026.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>The insurer is also on a deadline.</strong> Under Oregon DFR rules, once you file a claim your insurer must acknowledge it within <strong>30 days</strong>, complete their investigation within <strong>45 days</strong>, and accept or deny within <strong>30 days</strong> of receiving a completed proof of loss.
      </p>

      <hr className="my-8 border-gray-200" />

      {/* Section 3: Why act now */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Haven&apos;t I Noticed Damage Yet?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the most common reason Central Oregon homeowners miss their deadline: their roof isn&apos;t actively leaking, so they assume there&apos;s nothing to claim. That assumption is wrong.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Hailstones in the 1–1.5 inch range create &quot;bruising&quot; on asphalt shingles — granule loss and subsurface fractures that are invisible from the ground but dramatically shorten a roof&apos;s remaining lifespan. A shingle that looks intact from your backyard may have lost 40% of its remaining protective life. The damage typically manifests as leaks 12–36 months after the storm event, long after you&apos;ve missed your filing window.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Insurance adjusters know this. That&apos;s exactly why many homeowners discover the damage precisely when they can no longer do anything about it.
      </p>

      <hr className="my-8 border-gray-200" />

      {/* Section 4: Step-by-step */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Should I Do Right Now? Step-by-Step</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is the exact sequence of actions to protect your claim before the August 5, 2026 deadline:
      </p>
      <ol className="list-decimal pl-6 mb-4 space-y-3 text-gray-700">
        <li>
          <strong>Schedule a free professional roof inspection immediately.</strong> Do not attempt to assess damage yourself. Hail damage on asphalt shingles requires a trained eye at close range. FreeRoofPros provides free inspections for Bend-area homeowners with no obligation — call <strong>(541) 728-0266</strong>.
        </li>
        <li>
          <strong>Document all visible damage with date-stamped photos.</strong> Walk your property and photograph dented gutters, cracked vent caps, damaged siding, and any visible roof issues. Store these in cloud storage so they can&apos;t be disputed later.
        </li>
        <li>
          <strong>Pull out your homeowners insurance policy and read the &quot;Duties After Loss&quot; section.</strong> Confirm your exact deadline and what documentation your insurer requires. Look for any roof-specific endorsements that might limit your coverage.
        </li>
        <li>
          <strong>Notify your insurer promptly — even if you&apos;re not yet sure you have a claim.</strong> A preliminary notification preserves your rights without committing you to a formal claim. You can always withdraw if the inspection shows no damage.
        </li>
        <li>
          <strong>Get a written inspection report from a licensed Oregon contractor before your adjuster visits.</strong> Your insurer&apos;s adjuster works for the insurance company. Having an independent professional assessment in hand gives you a documented baseline to reference during the adjuster&apos;s visit.
        </li>
        <li>
          <strong>Do not make permanent repairs before the adjuster has inspected the damage.</strong> Temporary emergency tarping to stop an active leak is acceptable. Permanent repairs before documentation can reduce or void your claim.
        </li>
        <li>
          <strong>Verify any contractor you hire is licensed with Oregon&apos;s Construction Contractors Board.</strong> After every major hail event, out-of-state crews arrive door-to-door. Call the CCB at 503-378-4621 to verify licensing before signing anything.
        </li>
      </ol>

      <hr className="my-8 border-gray-200" />

      {/* Section 5: What insurers are required to do */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Is My Insurance Company Required to Do in Oregon?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Oregon insurance regulations impose specific timelines on your insurer once you file. These are your rights, not suggestions:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>Acknowledge your claim within <strong>30 days</strong> of notification</li>
        <li>Complete their investigation within <strong>45 days</strong> of receiving your notification</li>
        <li>Accept or deny your claim within <strong>30 days</strong> of receiving a completed proof of loss</li>
        <li>Provide written updates every <strong>45 days</strong> if they need additional time</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        If your insurer misses any of these deadlines or denies your claim without adequate justification, contact the <strong>Oregon Division of Financial Regulation (DFR)</strong> at their free consumer helpline: <strong>888-877-4894</strong>. In 2020, the DFR helped more than 13,600 Oregon policyholders recover $2.8 million from insurers.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A denial is also not final. Oregon homeowners can submit additional documentation, request a re-inspection, hire a licensed public adjuster, or — within the ORS 742.240 window — file suit. Our guide to <Link href="/services/insurance-claims" className="text-blue-600 hover:underline">filing a roof insurance claim in Oregon</Link> covers each step of the appeals process.
      </p>

      <hr className="my-8 border-gray-200" />

      {/* CTA */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Clock Is Running — Get Your Free Inspection Today</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        FreeRoofPros specializes in <Link href="/services/storm-damage-repair" className="text-blue-600 hover:underline">storm damage roof replacement</Link> and <Link href="/services/insurance-claims" className="text-blue-600 hover:underline">insurance claim assistance</Link> for Central Oregon homeowners. We know the August 5 storm. We know Oregon insurance law. We know how to document hail damage so your claim receives the full payout you&apos;re owed.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Don&apos;t leave money on the table. Don&apos;t miss your deadline.</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/" className="text-blue-600 hover:underline font-semibold">Get Your Free Roof Inspection &rarr;</Link><br />
        Call: <strong>(541) 728-0266</strong><br />
        Email: <strong>info@freeroofpros.com</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>The inspection is completely free. There is no obligation. We serve homeowners throughout Bend, Redmond, La Pine, Sunriver, Tumalo, and all of Deschutes County.</em>
      </p>
    </BlogLayout>
  );
}
