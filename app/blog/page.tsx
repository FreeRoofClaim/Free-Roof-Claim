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
      'Everything Central Oregon homeowners need to know about filing an insurance claim for roof damage before the August 2026 deadline \u2014 including documentation tips and how to spot illegitimate contractors.',
    publishedDate: 'September 4, 2025',
    publishedDateISO: '2025-09-04',
    city: 'Central Oregon',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    slug: 'dfw-hailstorm-insurance-claim',
    title: 'After the June 2025 DFW Hailstorm: How to File Your Insurance Claim and Avoid Storm-Chaser Scams',
    description:
      'A step-by-step guide for Dallas\u2013Fort Worth homeowners navigating the insurance claim process after the June 2025 hailstorm \u2014 and how to protect yourself from predatory contractors.',
    publishedDate: 'July 15, 2025',
    publishedDateISO: '2025-07-15',
    city: 'Dallas\u2013Fort Worth',
    gradient: 'from-blue-600 to-indigo-700',
  },
  {
    slug: 'st-louis-tornado-insurance-claim',
    title: "St. Louis May 2025 Tornado and Hail Damage: Filing Your Claim and Understanding Missouri's Matching Law",
    description:
      "How St. Louis homeowners can file storm damage insurance claims and leverage Missouri's unique matching law to get a full roof replacement \u2014 not just a partial repair.",
    publishedDate: 'June 10, 2025',
    publishedDateISO: '2025-06-10',
    city: 'St. Louis',
    gradient: 'from-red-500 to-rose-700',
  },
  {
    slug: 'indianapolis-hail-damage-claim',
    title: "Indianapolis Was Hit 4 Times in Spring 2025: How to File Your Hail Damage Claim Before Indiana's Deadline",
    description:
      "Indianapolis homeowners faced four separate hail events in spring 2025. Here's how to document multiple storm events and file your insurance claim before Indiana's statute of limitations expires.",
    publishedDate: 'August 1, 2025',
    publishedDateISO: '2025-08-01',
    city: 'Indianapolis',
    gradient: 'from-emerald-500 to-teal-700',
  },
  {
    slug: 'kansas-city-hail-insurance-claim',
    title: "Kansas City Hail Damage: MO vs. KS Insurance Rules and What the 2024 Gorilla Hail Means for Your Claim",
    description:
      "Kansas City straddles two states with very different insurance laws. Learn which rules apply to your home and how the 2024 'gorilla hail' event still affects open claims today.",
    publishedDate: 'March 20, 2025',
    publishedDateISO: '2025-03-20',
    city: 'Kansas City',
    gradient: 'from-violet-500 to-purple-700',
  },
  {
    slug: 'nashville-storm-damage-claim',
    title: "New to Nashville? What Every Homeowner Must Know About Storm Damage Claims Before Tennessee's 1-Year Deadline",
    description:
      "Nashville's rapid growth means thousands of new homeowners are navigating storm damage claims for the first time. This is your complete guide to Tennessee's rules, deadlines, and your rights.",
    publishedDate: 'February 12, 2025',
    publishedDateISO: '2025-02-12',
    city: 'Nashville',
    gradient: 'from-sky-500 to-blue-700',
  },
];

const GRADIENT_TEXT_CLASSES: Record<string, string> = {
  'from-orange-500 to-amber-600': 'text-amber-100',
  'from-blue-600 to-indigo-700': 'text-blue-100',
  'from-red-500 to-rose-700': 'text-rose-100',
  'from-emerald-500 to-teal-700': 'text-emerald-100',
  'from-violet-500 to-purple-700': 'text-violet-100',
  'from-sky-500 to-blue-700': 'text-sky-100',
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
              Written by the FreeRoofPros team \u2014 storm damage specialists serving homeowners nationwide.
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
                      Read article \u2192
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
            Get My Free Roof Inspection \u2192
          </a>
        </section>
      </div>
    </>
  );
}
