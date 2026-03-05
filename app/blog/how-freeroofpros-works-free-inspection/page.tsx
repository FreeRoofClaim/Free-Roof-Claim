import type { Metadata } from 'next';
import Link from 'next/link';
import BlogLayout from '@/components/blog/BlogLayout';

const SLUG = 'how-freeroofpros-works-free-inspection';
const TITLE = 'How FreeRoofPros Works: Free Roof Inspections and Insurance Claim Help';
const DESCRIPTION =
  'FreeRoofPros provides free professional roof inspections and insurance claim assistance to Central Oregon homeowners. Here\'s exactly how the process works, why it\'s free to you, and what happens at every step — from first call to completed roof.';
const PUBLISHED_DATE = 'March 5, 2026';
const PUBLISHED_DATE_ISO = '2026-03-05';
const CITY = 'Central Oregon';

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
    tags: ['FreeRoofPros', 'free roof inspection', 'insurance claim help', 'how it works', 'Central Oregon roofing'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
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
      keywords: 'how FreeRoofPros works, free roof inspection Central Oregon, insurance claim help Bend Oregon',
    },
    {
      '@type': 'HowTo',
      name: 'How FreeRoofPros Helps You Get a New Roof Through Insurance',
      description: 'Step-by-step process for getting a free roof inspection and insurance claim assistance from FreeRoofPros in Central Oregon.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Schedule Your Free Inspection',
          text: 'Call (541) 728-0266 or submit a request online. A licensed FreeRoofPros inspector will contact you within 24 hours to schedule a convenient time.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Professional Roof Inspection',
          text: 'A licensed Oregon contractor inspects your roof for storm damage — hail bruising, granule loss, wind damage, and flashing issues. You receive a written inspection report at no charge.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Insurance Claim Filing Assistance',
          text: 'If damage is found, FreeRoofPros helps you notify your insurer and prepare documentation. We attend the adjuster meeting with you to make sure nothing is missed.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Claim Approval and Contractor Selection',
          text: 'Once your claim is approved, FreeRoofPros provides a detailed replacement scope and timeline. You review and approve everything before work begins.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Roof Replacement',
          text: 'Your new roof is installed by FreeRoofPros\' licensed Oregon crew using materials covered by your insurance settlement. Work is completed to manufacturer specifications.',
        },
        {
          '@type': 'HowToStep',
          position: 6,
          name: 'Recoverable Depreciation Submission',
          text: 'FreeRoofPros submits your completion documentation to the insurer to release any held depreciation (if you have RCV coverage), maximizing your total payout.',
        },
      ],
    },
  ],
};

export default function HowFreeRoofProsWorksPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* BLUF */}
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>FreeRoofPros provides free professional roof inspections to Central Oregon homeowners and gets paid by your insurance company when a covered claim is approved — not by you.</strong> There is no catch. Homeowners pay nothing out of pocket beyond their standard insurance deductible for a complete roof replacement through an approved claim. If your roof doesn&apos;t have insurable damage, the inspection is still free and there is zero obligation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        This page explains exactly how the process works, answers the most common skeptical questions, and walks through each step from the first phone call to a completed, warranted roof.
      </p>

      <hr className="my-8 border-gray-200" />

      {/* Section 1: How we make money */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How Does FreeRoofPros Make Money If the Inspection Is Free?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is the first question most homeowners ask, and it deserves a direct answer.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        FreeRoofPros is a licensed roofing contractor. When a homeowner&apos;s insurance claim is approved and we complete the roof replacement, we are paid by the insurance settlement — the same way any contractor is paid by any client. The difference is that <strong>you don&apos;t write us a personal check</strong>. Your insurer does.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        We offer free inspections because we know that most Central Oregon homeowners don&apos;t realize they have a valid insurance claim sitting unused. The August 5, 2025 hailstorm damaged an estimated 24,000+ properties in the Bend area alone. Thousands of those homeowners have never gotten a professional inspection. The free inspection is how we find homeowners who need us — and how we create relationships built on trust rather than pressure.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>If your roof has no insurable damage, we tell you that, give you our written inspection report, and that is the end of it.</strong> No follow-up calls, no sales pressure, no invoice.
      </p>

      <hr className="my-8 border-gray-200" />

      {/* Section 2: Is this a scam? */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Is This a Scam? What Are the Warning Signs I Should Look For?</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        It is a fair question. After every major hailstorm, out-of-state roofing crews appear door-to-door with offers that sound similar to ours but operate very differently. Here is how to tell the difference between a legitimate offer and a storm-chaser operation.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Red Flags From Illegitimate Storm Chasers</h3>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li><strong>Out-of-state license plates</strong> — crews who arrive after a storm and leave when the work dries up have no stake in your long-term satisfaction or warranty</li>
        <li><strong>Requests to sign an Assignment of Benefits (AOB) form</strong> — this transfers your insurance rights to the contractor, leaving you with no control over the claim or the quality of work</li>
        <li><strong>Promises to &quot;waive your deductible&quot;</strong> — this is insurance fraud in Oregon. Any contractor who promises to cover your deductible is violating state law and potentially voiding your policy</li>
        <li><strong>High-pressure same-day signing demands</strong> — legitimate contractors don&apos;t need a decision today</li>
        <li><strong>Inability to provide an Oregon CCB license number</strong> — call the Oregon Construction Contractors Board at 503-378-4621 to verify any contractor before signing anything</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">How FreeRoofPros Is Different</h3>
      <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
        <li>We are a <strong>licensed Oregon contractor</strong> with a verifiable CCB number, local offices, and a permanent presence in the Bend area</li>
        <li>We <strong>never ask you to sign an Assignment of Benefits</strong> — you remain in control of your claim at all times</li>
        <li>We <strong>never offer to waive your deductible</strong> — if a contractor makes this offer, walk away</li>
        <li>We provide <strong>written inspection reports</strong> you can keep, share with your insurer, or use to get a second opinion</li>
        <li>We give you time to think — no same-day pressure to commit</li>
        <li>Our work carries a <strong>manufacturer warranty</strong> backed by our presence as a permanent local business</li>
      </ul>

      <hr className="my-8 border-gray-200" />

      {/* Section 3: Step by step process */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The FreeRoofPros Process: Step by Step</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Here is exactly what happens from your first contact with us to a completed, warranted roof:
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 1 — Schedule Your Free Inspection</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Call <strong>(541) 728-0266</strong> or <Link href="/" className="text-blue-600 hover:underline">submit a request online</Link>. A FreeRoofPros team member will contact you within 24 hours to schedule a convenient time. Inspections typically take 45–60 minutes.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 2 — Professional Roof Inspection (Free)</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A licensed Oregon contractor climbs your roof and conducts a thorough inspection — not a walk-around from the driveway. We assess hail bruising and granule loss on all roof planes, wind damage to flashing and ridge caps, condition of pipe boots and vents, gutter damage, and any soft metal surfaces that confirm hail size and impact density.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        You receive a <strong>written inspection report</strong> documenting everything we found, with photographs. This report is yours regardless of what you decide to do next.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 3 — We Review Your Findings Together</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After the inspection, we walk through the findings with you in plain language. If there is insurable damage, we explain what we found, what the replacement scope would look like, and what the insurance process involves. <strong>If there is no insurable damage, we tell you that directly</strong> — and you&apos;re done, with a free professional inspection report in hand.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 4 — Insurance Claim Filing Assistance</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you decide to proceed with a claim, we help you prepare and submit the initial documentation to your insurer. We attend the adjuster&apos;s inspection with you, ensuring nothing is missed and that our written findings are formally incorporated into the claim record. If the adjuster&apos;s estimate comes in below the documented scope, we file a supplement on your behalf.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 5 — Claim Approval and Scope Agreement</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Once your claim is approved, we provide a detailed replacement scope — materials, timeline, and process — for your review and approval. <strong>You approve every detail before work begins.</strong> We use materials covered by your insurance settlement; you choose the color and style within those parameters.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 6 — Roof Replacement</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Our licensed Oregon crew installs your new roof to manufacturer specifications. We handle full tear-off, proper underlayment installation, and code-compliant flashing. Deschutes County prohibits wood shake roofing under its 2001 fire mitigation code, so all replacements use asphalt or metal materials. If your insurer&apos;s estimate used wood shake pricing, we flag it and fight it.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Step 7 — Final Documentation and Depreciation Recovery</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        After completion, we submit all documentation to your insurer — final invoice, completion certificate, and photos — to trigger the release of any held depreciation (if you have RCV coverage). We also handle any supplement claims if hidden damage was discovered during tear-off. Most RCV homeowners receive a second check within 15–30 days of our documentation submission.
      </p>

      <hr className="my-8 border-gray-200" />

      {/* Section 4: Common objections */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Questions Homeowners Ask Before Scheduling</h2>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Will filing a claim raise my insurance premiums?</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Possibly — but this varies by insurer, your claims history, and your policy type. Oregon insurers cannot cancel a policy solely because you filed one weather-related claim. The right answer depends on your specific situation. We recommend checking with your insurance agent about your particular policy before filing. What we can tell you is that an approved claim for a full roof replacement is typically worth far more than any premium increase over several years.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">What if my insurer denies the claim?</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A denial is not final. We have experience navigating Oregon denial appeals, and we work with public adjusters who specialize in overturning underpayments. Under <strong>ORS 742.240</strong>, you have two years from the date of loss to file a lawsuit — a legal backstop that gives you leverage even after a denial. For the August 5, 2025 storm, that deadline is August 5, 2027.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">I don&apos;t see any damage — should I bother?</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Yes. Hail damage is often invisible from the ground. Granule loss, micro-fractures, and subsurface bruising require close-range inspection on the roof surface to identify. These &quot;invisible&quot; damage types can cut a roof&apos;s remaining lifespan in half and void manufacturer warranties — but they won&apos;t show up as leaks until well after your filing deadline has passed. A free professional inspection costs you nothing and takes under an hour.
      </p>

      <hr className="my-8 border-gray-200" />

      {/* CTA */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Schedule Your Free Inspection Today</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        For Central Oregon homeowners affected by the August 5, 2025 hailstorm, the <strong>August 5, 2026 filing deadline</strong> is less than five months away. Contractor schedules fill up as deadlines approach, and every week you wait is a week closer to missing the window entirely.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <Link href="/" className="text-blue-600 hover:underline font-semibold">Get your free inspection &rarr;</Link><br />
        Call: <strong>(541) 728-0266</strong><br />
        Email: <strong>info@freeroofpros.com</strong>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        <em>Free inspection with no obligation. We serve Bend, Redmond, La Pine, Sunriver, Tumalo, and all of Deschutes County.</em>
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Want to understand more about how Oregon insurance claims work before you call? See our guides on the <Link href="/blog/august-2025-bend-hailstorm-filing-deadline" className="text-blue-600 hover:underline">August 2025 hailstorm filing deadline</Link>, <Link href="/blog/acv-vs-rcv-roof-insurance-oregon" className="text-blue-600 hover:underline">ACV vs. RCV insurance coverage</Link>, and <Link href="/blog/what-to-do-after-hailstorm-central-oregon" className="text-blue-600 hover:underline">what to do after a hailstorm</Link>.
      </p>
    </BlogLayout>
  );
}
