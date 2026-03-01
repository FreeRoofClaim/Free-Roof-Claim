import Link from 'next/link';

interface RelatedArticle {
  title: string;
  slug: string;
  description: string;
  city: string;
}

interface BlogLayoutProps {
  title: string;
  description: string;
  publishedDate: string;
  publishedDateISO: string;
  modifiedDateISO?: string;
  readingTimeMinutes: number;
  slug: string;
  city: string;
  children: React.ReactNode;
  relatedArticles?: RelatedArticle[];
}

const ALL_ARTICLES: RelatedArticle[] = [
  {
    title: 'Central Oregon Hailstorm August 2025: Your Insurance Claim Deadline Is August 3, 2026',
    slug: 'central-oregon-hailstorm-2025',
    description: 'Everything Central Oregon homeowners need to know about filing an insurance claim before the August 2026 deadline.',
    city: 'Central Oregon',
  },
  {
    title: 'After the June 2025 DFW Hailstorm: How to File Your Insurance Claim and Avoid Storm-Chaser Scams',
    slug: 'dfw-hailstorm-insurance-claim',
    description: 'A step-by-step guide for DFW homeowners navigating the insurance claim process after the June 2025 hailstorm.',
    city: 'Dallas\u2013Fort Worth',
  },
  {
    title: 'St. Louis May 2025 Tornado and Hail Damage: Filing Your Insurance Claim and Understanding Missouri\'s Matching Law',
    slug: 'st-louis-tornado-insurance-claim',
    description: 'How St. Louis homeowners can file storm damage claims and leverage Missouri\'s unique matching law for a full roof replacement.',
    city: 'St. Louis',
  },
  {
    title: 'Indianapolis Was Hit 4 Times in Spring 2025: How to File Your Hail Damage Claim Before Indiana\'s Deadline',
    slug: 'indianapolis-hail-damage-claim',
    description: 'Indianapolis homeowners faced repeated hail in 2025. Here\'s how to document multiple events and file before Indiana\'s deadline.',
    city: 'Indianapolis',
  },
  {
    title: 'Kansas City Hail Damage: MO vs. KS Insurance Rules and What the 2024 Gorilla Hail Means for Your Claim',
    slug: 'kansas-city-hail-insurance-claim',
    description: 'Kansas City straddles two states with different insurance laws. Learn which rules apply to you and how to maximize your claim.',
    city: 'Kansas City',
  },
  {
    title: 'New to Nashville? What Every Homeowner Must Know About Storm Damage Claims Before Tennessee\'s 1-Year Deadline',
    slug: 'nashville-storm-damage-claim',
    description: 'Nashville\'s rapid growth means many homeowners are navigating storm damage claims for the first time. Here\'s your complete guide.',
    city: 'Nashville',
  },
];

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogLayout({
  title,
  description,
  publishedDate,
  publishedDateISO,
  modifiedDateISO,
  readingTimeMinutes,
  slug,
  city,
  children,
  relatedArticles,
}: BlogLayoutProps) {
  const articleUrl = `https://freeroofpros.com/blog/${slug}`;
  const related = relatedArticles ?? ALL_ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Organization',
      name: 'FreeRoofPros Team',
      url: 'https://freeroofpros.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FreeRoofPros',
      url: 'https://freeroofpros.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://freeroofpros.com/logo.png',
      },
    },
    datePublished: publishedDateISO,
    dateModified: modifiedDateISO ?? publishedDateISO,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    url: articleUrl,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://freeroofpros.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://freeroofpros.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: articleUrl,
      },
    ],
  };

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(articleUrl)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`;

  return (
    <>
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-white min-h-screen">
        {/* Breadcrumb Nav */}
        <nav
          aria-label="Breadcrumb"
          className="bg-gray-50 border-b border-gray-200"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
              <li>
                <Link href="/" className="hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-300">/</li>
              <li>
                <Link href="/blog" className="hover:text-blue-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-300">/</li>
              <li className="text-gray-900 font-medium truncate max-w-xs sm:max-w-sm md:max-w-lg">
                {title}
              </li>
            </ol>
          </div>
        </nav>

        {/* Article Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <article className="flex-1 min-w-0">
              {/* City Tag */}
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
                  {city}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                {title}
              </h1>

              {/* Author / Meta Row */}
              <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-gray-200 mb-8 text-sm text-gray-500">
                {/* Author */}
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    FRP
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 leading-none">FreeRoofPros Team</p>
                    <p className="text-xs text-gray-400 mt-0.5">Storm Damage Experts</p>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-5 bg-gray-300" />

                {/* Published date */}
                <time dateTime={publishedDateISO} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {publishedDate}
                </time>

                <div className="hidden sm:block w-px h-5 bg-gray-300" />

                {/* Reading time */}
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {readingTimeMinutes} min read
                </span>
              </div>

              {/* Article Body */}
              <div className="prose prose-lg prose-gray max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900
                prose-ul:list-disc prose-ul:pl-6
                prose-ol:list-decimal prose-ol:pl-6
                prose-li:text-gray-700 prose-li:mb-1
                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:rounded-r-md
                prose-table:text-sm prose-th:bg-blue-600 prose-th:text-white prose-th:px-4 prose-th:py-2 prose-td:px-4 prose-td:py-2 prose-td:border prose-td:border-gray-200">
                {children}
              </div>

              {/* Social Share */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-3">Share this article:</p>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href={twitterShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    X (Twitter)
                  </a>
                  <a
                    href={facebookShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </a>
                  <a
                    href={linkedinShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 text-white text-sm font-medium hover:bg-blue-800 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* CTA Banner */}
              <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white text-center shadow-lg">
                <h2 className="text-2xl font-bold mb-2">Get Your Free Roof Inspection</h2>
                <p className="text-blue-100 mb-6 max-w-md mx-auto text-sm leading-relaxed">
                  Our certified inspectors will assess your storm damage, work directly with your insurance company, and help you get the roof replacement you deserve \u2014 at no out-of-pocket cost beyond your deductible.
                </p>
                <a
                  href="/#contact"
                  className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow"
                >
                  Schedule My Free Inspection \u2192
                </a>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="sticky top-6 space-y-6">
                {/* Quick CTA */}
                <div className="rounded-xl border-2 border-blue-600 p-5 text-center">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Storm damage on your roof?</p>
                  <p className="text-xs text-gray-500 mb-4">Get a free inspection \u2014 we handle everything with your insurer.</p>
                  <a
                    href="/#contact"
                    className="block w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Free Inspection \u2192
                  </a>
                </div>

                {/* Related Articles */}
                {related.length > 0 && (
                  <div className="rounded-xl bg-gray-50 border border-gray-200 p-5">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
                      Related Articles
                    </h3>
                    <ul className="space-y-4">
                      {related.map((article) => (
                        <li key={article.slug}>
                          <Link
                            href={`/blog/${article.slug}`}
                            className="block group"
                          >
                            <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                              {article.city}
                            </span>
                            <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors leading-snug mt-0.5">
                              {article.title}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/blog"
                      className="block text-center mt-4 text-sm text-blue-600 font-medium hover:underline"
                    >
                      View all articles \u2192
                    </Link>
                  </div>
                )}

                {/* FAQ Link */}
                <div className="rounded-xl bg-yellow-50 border border-yellow-200 p-5">
                  <h3 className="text-sm font-bold text-gray-900 mb-2">Have questions?</h3>
                  <p className="text-xs text-gray-600 mb-3">See our complete FAQ on storm damage claims, insurance coverage, and the claims process.</p>
                  <Link
                    href="/faq"
                    className="text-sm text-blue-600 font-medium hover:underline"
                  >
                    Read the FAQ \u2192
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Articles (Mobile / Bottom) */}
          {related.length > 0 && (
            <section className="mt-14 pt-10 border-t border-gray-200 lg:hidden">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group block rounded-xl border border-gray-200 p-5 hover:border-blue-300 hover:shadow-sm transition-all"
                  >
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                      {article.city}
                    </span>
                    <h3 className="mt-1 text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-xs text-gray-500 line-clamp-2">{article.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
