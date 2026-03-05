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
  {
    title: 'RCV vs. ACV Roof Insurance: What It Means for Your Claim Payout',
    slug: 'rcv-vs-acv-roof-insurance',
    description: 'Understand the difference between Replacement Cost Value (RCV) and Actual Cash Value (ACV) roof insurance policies and how it affects your real payout when you file a claim.',
    city: 'Nationwide',
  },
  {
    title: 'Roof Insurance Claim Denied? 7 Steps to Fight Back and Win',
    slug: 'roof-insurance-claim-denied',
    description: 'Your roof insurance claim was denied. Learn the top reasons claims get denied and 7 proven steps to appeal, supplement, and overturn a denial.',
    city: 'Nationwide',
  },
  {
    title: 'Signs of Hail Damage on Your Roof: A Complete Visual Guide',
    slug: 'signs-of-hail-damage-on-roof',
    description: 'Learn how to identify hail damage on asphalt, metal, tile, and wood roofs. Covers granule loss, bruising, cracked tiles, dented metal, and the ground-level checklist approach.',
    city: 'Nationwide',
  },
  {
    title: 'How to Negotiate Your Roof Insurance Claim for a Full Replacement',
    slug: 'how-to-negotiate-roof-insurance-claim',
    description: 'When your insurance adjuster offers too little, here is how to negotiate your roof insurance claim, covering supplements, Xactimate, the 30% rule, appraisal clauses, and public adjusters.',
    city: 'Nationwide',
  },
  {
    title: 'Storm Chaser Roofers: 10 Warning Signs and How to Protect Yourself',
    slug: 'storm-chaser-roofer-scams',
    description: 'Storm chaser roofers follow disaster events to exploit homeowners. Learn the 10 warning signs of contractor fraud, why deductible waivers are illegal, and how to verify a legitimate roofer.',
    city: 'Nationwide',
  },
  {
    title: 'How Long Do You Have to File a Roof Insurance Claim? Deadlines by State',
    slug: 'how-long-to-file-roof-insurance-claim',
    description: 'State-by-state deadlines for filing a roof insurance claim after storm damage. Learn the difference between policy deadlines and statutes of limitations, plus what happens if you miss the window.',
    city: 'Nationwide',
  },
  {
    title: 'Does Homeowners Insurance Cover Roof Replacement? What You Need to Know',
    slug: 'does-homeowners-insurance-cover-roof-replacement',
    description: 'Find out what your homeowners insurance actually covers when it comes to roof replacement, including what events are covered, what is excluded, and how roof age and deductibles affect your payout.',
    city: 'Nationwide',
  },
  {
    title: 'The Roof Insurance Claim Process: A Step-by-Step Guide for Homeowners',
    slug: 'roof-insurance-claim-process-step-by-step',
    description: 'A complete walkthrough of the roof insurance claim process, from documenting damage to collecting your final payment. Learn what to say, what to avoid, and how the two-payment RCV system works.',
    city: 'Nationwide',
  },
  {
    title: 'How Much Does a Roof Replacement Cost in 2026? Average Prices by State',
    slug: 'roof-replacement-cost-by-state',
    description: 'State-by-state average roof replacement costs for 2026. Covers materials, labor, and the factors that affect what you actually pay, plus how insurance claims and Xactimate pricing factor in.',
    city: 'Nationwide',
  },
  {
    title: 'What to Expect When the Insurance Adjuster Inspects Your Roof',
    slug: 'what-to-expect-insurance-adjuster-roof-inspection',
    description: 'A complete guide to the insurance adjuster roof inspection process, what they look for, how long it takes, what you should have ready, and what to do if they miss damage or offer too little.',
    city: 'Nationwide',
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
  const articleUrl = `https://www.freeroofpros.com/blog/${slug}`;
  const related = relatedArticles ?? ALL_ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

  // BlogPosting JSON-LD — structured data for each blog post
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    author: {
      '@type': 'Organization',
      name: 'FreeRoofPros',
      url: 'https://www.freeroofpros.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FreeRoofPros',
      url: 'https://www.freeroofpros.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.freeroofpros.com/og-image.png',
      },
    },
    datePublished: publishedDateISO,
    dateModified: modifiedDateISO ?? publishedDateISO,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    url: articleUrl,
    image: 'https://www.freeroofpros.com/og-image.png',
  };

  // BreadcrumbList JSON-LD — Home > Blog > [Post Title]
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.freeroofpros.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.freeroofpros.com/blog',
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
      {/* BlogPosting JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
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
                <span>By FreeRoofPros Team</span>
                <span className="text-gray-300">|</span>
                <time dateTime={publishedDateISO}>{publishedDate}</time>
                <span className="text-gray-300">|</span>
                <span>{readingTimeMinutes} min read</span>
              </div>

              {/* Article Content */}
              <div className="prose prose-gray max-w-none">
                {children}
              </div>

              {/* Share Row */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-3">Share this article:</p>
                <div className="flex gap-3">
                  <a
                    href={twitterShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-black text-white text-xs font-semibold hover:bg-gray-800 transition-colors"
                  >
                    X / Twitter
                  </a>
                  <a
                    href={facebookShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href={linkedinShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-700 text-white text-xs font-semibold hover:bg-blue-800 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0">
              {/* CTA Card */}
              <div className="bg-blue-600 rounded-2xl p-6 text-white mb-6 sticky top-6">
                <h3 className="text-lg font-bold mb-2">Think you have storm damage?</h3>
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                  Get a free roof inspection from a licensed contractor in your area.
                </p>
                <a
                  href="/#contact"
                  className="block text-center bg-white text-blue-700 font-bold px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                >
                  Get Free Inspection
                </a>
              </div>

              {/* Related Articles */}
              {related.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {related.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/blog/${article.slug}`}
                        className="block group"
                      >
                        <div className="rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all">
                          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                            {article.city}
                          </span>
                          <p className="mt-1 text-sm font-semibold text-gray-900 group-hover:text-blue-600 leading-snug line-clamp-2">
                            {article.title}
                          </p>
                          <p className="mt-1 text-xs text-gray-500 line-clamp-2">{article.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
