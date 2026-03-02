import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Storm Damage & Insurance Claims Blog | FreeRoofPros',
  description:
    'Expert guides on filing storm damage roof insurance claims, avoiding scams, and getting your free roof replacement. Coverage for Dallas, St. Louis, Indianapolis, Kansas City, Nashville, and beyond.',
  alternates: {
    canonical: 'https://freeroofpros.com/blog',
  },
  openGraph: {
    title: 'Storm Damage & Insurance Claims Blog | FreeRoofPros',
    description:
      'Expert guides on filing storm damage roof insurance claims, avoiding scams, and getting your free roof replacement.',
    url: 'https://freeroofpros.com/blog',
    siteName: 'FreeRoofPros',
    type: 'website',
  },
};

const articles = [
  {
    slug: 'central-oregon-hailstorm-2025',
    title: 'Central Oregon Hailstorm August 2025: Your Insurance Claim Deadline Is August 3, 2026',
    description:
      'Everything Central Oregon homeowners need to know about filing an insurance claim for roof damage before the August 2026 deadline, including documentation tips and how to spot illegitimate contractors.',
    publishedDate: 'September 4, 2025',
    publishedDateISO: '2025-09-04',
    city: 'Central Oregon',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    slug: 'dfw-hailstorm-insurance-claim',
    title: 'After the June 2025 DFW Hailstorm: How to File Your Insurance Claim and Avoid Storm-Chaser Scams',
    description:
      'A step-by-step guide for Dallas-Fort Worth homeowners navigating the insurance claim process after the June 2025 hailstorm and how to protect yourself from predatory contractors.',
    publishedDate: 'July 15, 2025',
    publishedDateISO: '2025-07-15',
    city: 'Dallas-Fort Worth',
    gradient: 'from-blue-600 to-indigo-700',
  },
  {
    slug: 'st-louis-tornado-insurance-claim',
    title: "St. Louis May 2025 Tornado and Hail Damage: Filing Your Claim and Understanding Missouri&apos;s Matching Law",
    description:
      "How St. Louis homeowners can file storm damage insurance claims and leverage Missouri&apos;s unique matching law to get a full roof replacement, not just a partial repair.",
    publishedDate: 'June 10, 2025',
    publishedDateISO: '2025-06-10',
    city: 'St. Louis',
    gradient: 'from-red-500 to-rose-700',
  },
  {
    slug: 'indianapolis-hail-damage-claim',
    title: "Indianapolis Was Hit 4 Times in Spring 2025: How to File Your Hail Damage Claim Before Indiana&apos;s Deadline",
    description:
      "Indianapolis homeowners faced four separate hail events in spring 2025. Here&apos;s how to document multiple storm events and file your insurance claim before Indiana&apos;s statute of limitations expires.",
    publishedDate: 'August 1, 2025',
    publishedDateISO: '2025-08-01',
    city: 'Indianapolis',
    gradient: 'from-emerald-500 to-teal-700',
  },
  {
    slug: 'kansas-city-hail-insurance-claim',
    title: "Kansas City Hail Damage: MO vs. KS Insurance Rules and What the 2024 Gorilla Hail Means for Your Claim",
    description:
      "Kansas City straddles two states with very different insurance laws. Learn which rules apply to your home and how the 2024 gorilla hail event still affects open claims today.",
    publishedDate: 'March 20, 2025',
    publishedDateISO: '2025-03-20',
    city: 'Kansas City',
    gradient: 'from-violet-500 to-purple-700',
  },
  {
    slug: 'nashville-storm-damage-claim',
    title: "New to Nashville? What Every Homeowner Must Know About Storm Damage Claims Before Tennessee&apos;s 1-Year Deadline",
    description:
      "Nashville&apos;s rapid growth means thousands of new homeowners are navigating storm damage claims for the first time. This is your complete guide to Tennessee&apos;s rules, deadlines, and your rights.",
    publishedDate: 'February 12, 2025',
    publishedDateISO: '2025-02-12',
    city: 'Nashville',
    gradient: 'from-sky-500 to-blue-700',
  },
  {
    slug: 'rcv-vs-acv-roof-insurance',
    title: 'RCV vs. ACV Roof Insurance: What It Means for Your Claim Payout',
    description:
      'Understand the difference between Replacement Cost Value (RCV) and Actual Cash Value (ACV) roof insurance policies and how it affects your real payout when you file a claim.',
    publishedDate: 'March 1, 2026',
    publishedDateISO: '2026-03-01',
    city: 'Nationwide',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    slug: 'roof-insurance-claim-denied',
    title: 'Roof Insurance Claim Denied? 7 Steps to Fight Back and Win',
    description:
      'Your roof insurance claim was denied. Learn the top reasons claims get denied and 7 proven steps to appeal, supplement, and overturn a denial.',
    publishedDate: 'March 1, 2026',
    publishedDateISO: '2026-03-01',
    city: 'Nationwide',
    gradient: 'from-red-600 to-red-800',
  },
  {
    slug: 'signs-of-hail-damage-on-roof',
    title: 'Signs of Hail Damage on Your Roof: A Complete Visual Guide',
    description:
      'Learn how to identify hail damage on asphalt, metal, tile, and wood roofs. Covers granule loss, bruising, cracked tiles, dented metal, and the ground-level checklist approach.',
    publishedDate: 'March 1, 2026',
    publishedDateISO: '2026-03-01',
    city: 'Nationwide',
    gradient: 'from-amber-500 to-orange-700',
  },
  {
    slug: 'how-to-negotiate-roof-insurance-claim',
    title: 'How to Negotiate Your Roof Insurance Claim for a Full Replacement',
    description:
      'When your insurance adjuster offers too little, here is how to negotiate your roof insurance claim, covering supplements, Xactimate, the 30% rule, appraisal clauses, and public adjusters.',
    publishedDate: 'March 1, 2026',
    publishedDateISO: '2026-03-01',
    city: 'Nationwide',
    gradient: 'from-teal-500 to-cyan-700',
  },
  {
    slug: 'storm-chaser-roofer-scams',
    title: 'Storm Chaser Roofers: 10 Warning Signs and How to Protect Yourself',
    description:
      'Storm chaser roofers follow disaster events to exploit homeowners. Learn the 10 warning signs of contractor fraud, why deductible waivers are illegal, and how to verify a legitimate roofer.',
    publishedDate: 'March 1, 2026',
    publishedDateISO: '2026-03-01',
    city: 'Nationwide',
    gradient: 'from-yellow-500 to-amber-700',
  },
  {
    slug: 'how-long-to-file-roof-insurance-claim',
    title: 'How Long Do You Have to File a Roof Insurance Claim? Deadlines by State',
    description:
      'State-by-state deadlines for filing a roof insurance claim after storm damage. Learn the difference between policy deadlines and statutes of limitations, plus what happens if you miss the window.',
    publishedDate: 'March 1, 2026',
    publishedDateISO: '2026-03-01',
    city: 'Nationwide',
    gradient: 'from-indigo-500 to-indigo-800',
  },
  {
    slug: 'does-homeowners-insurance-cover-roof-replacement',
    title: 'Does Homeowners Insurance Cover Roof Replacement? What You Need to Know',
    description:
      'Find out what your homeowners insurance actually covers when it comes to roof replacement, including what events are covered, what is excluded, and how roof age and deductibles affect your payout.',
    publishedDate: 'March 1, 2026',
    publishedDateISO: '2026-03-01',
    city: 'Nationwide',
    gradient: 'from-blue-500 to-blue-800',
  },
  {
    slug: 'roof-insurance-claim-process-step-by-step',
    title: 'The Roof Insurance Claim Process: A Step-by-Step Guide for Homeowners',
    description:
      'A complete walkthrough of the roof insurance claim process, from documenting damage to collecting your final payment. Learn what to say, what to avoid, and how the two-payment RCV system works.',
    publishedDate: 'March 1, 2026',
    publishedDateISO: '2026-03-01',
    city: 'Nationwide',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    slug: 'roof-replacement-cost-by-state',
    title: 'How Much Does a Roof Replacement Cost in 2026? Average Prices by State',
    description:
      'State-by-state average roof replacement costs for 2026. Covers materials, labor, and the factors that affect what you actually pay, plus how insurance claims and Xactimate pricing factor in.',
    publishedDate: 'March 1, 2026',
    publishedDateISO: '2026-03-01',
    city: 'Nationwide',
    gradient: 'from-pink-500 to-rose-700',
  },
  {
    slug: 'what-to-expect-insurance-adjuster-roof-inspection',
    title: 'What to Expect When the Insurance Adjuster Inspects Your Roof',
    description:
      'A complete guide to the insurance adjuster roof inspection process, what they look for, how long it takes, what to have ready, and what to do if they miss damage or offer too little.',
    publishedDate: 'March 1, 2026',
    publishedDateISO: '2026-03-01',
    city: 'Nationwide',
    gradient: 'from-gray-500 to-gray-700',
  },
];

const GRADIENT_TEXT_CLASSES: Record<string, string> = {
  'from-orange-500 to-amber-600': 'text-amber-100',
  'from-blue-600 to-indigo-700': 'text-blue-100',
  'from-red-500 to-rose-700': 'text-rose-100',
  'from-emerald-500 to-teal-700': 'text-emerald-100',
  'from-violet-500 to-purple-700': 'text-violet-100',
  'from-sky-500 to-blue-700': 'text-sky-100',
  'from-green-500 to-emerald-600': 'text-emerald-100',
  'from-red-600 to-red-800': 'text-red-100',
  'from-amber-500 to-orange-700': 'text-amber-100',
  'from-teal-500 to-cyan-700': 'text-cyan-100',
  'from-yellow-500 to-amber-700': 'text-amber-100',
  'from-indigo-500 to-indigo-800': 'text-indigo-100',
  'from-blue-500 to-blue-800': 'text-blue-100',
  'from-cyan-500 to-blue-600': 'text-cyan-100',
  'from-pink-500 to-rose-700': 'text-rose-100',
  'from-gray-500 to-gray-700': 'text-gray-100',
};

export default function BlogIndexPage() {
  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://freeroofpros.com' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://freeroofpros.com/blog' },
            ],
          }),
        }}
      />

      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-blue-500/40 text-blue-100 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Storm Damage Resource Center
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
              FreeRoofPros Storm Damage &amp; Insurance Claims Blog
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
              Expert guidance on navigating roof insurance claims, understanding your policy rights,
              documenting storm damage, and getting your roof replaced at no out-of-pocket cost.
              Written by the FreeRoofPros team, storm damage specialists serving homeowners nationwide.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-900">
              Latest Articles <span className="text-gray-400 font-normal text-base ml-1">({articles.length})</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all duration-200 flex flex-col"
              >
                {/* Featured Image Placeholder */}
                <Link href={`/blog/${article.slug}`} className="block" tabIndex={-1} aria-hidden>
                  <div
                    className={`bg-gradient-to-br ${article.gradient} h-44 flex items-end p-4`}
                  >
                    <span
                      className={`text-sm font-semibold ${GRADIENT_TEXT_CLASSES[article.gradient] ?? 'text-white'} opacity-80`}
                    >
                      {article.city}
                    </span>
                  </div>
                </Link>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1">
                  {/* City Tag */}
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded-full mb-3 self-start">
                    {article.city}
                  </span>

                  {/* Title */}
                  <Link href={`/blog/${article.slug}`}>
                    <h2 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug mb-3 line-clamp-3">
                      {article.title}
                    </h2>
                  </Link>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1">
                    {article.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <time
                      dateTime={article.publishedDateISO}
                      className="text-xs text-gray-400"
                    >
                      {article.publishedDate}
                    </time>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="text-xs font-semibold text-blue-600 hover:underline"
                    >
                      Read article &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-blue-600 py-14 px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Think you have storm damage?
          </h2>
          <p className="text-blue-100 mb-7 max-w-xl mx-auto">
            Don&apos;t wait until your claim deadline passes. Our certified inspectors will assess your
            roof for free and handle everything with your insurance company.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-white text-blue-700 font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-md text-sm sm:text-base"
          >
            Get My Free Roof Inspection &rarr;
          </a>
        </section>
      </div>
    </>
  );
}
