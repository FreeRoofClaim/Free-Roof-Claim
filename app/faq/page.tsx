import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions About Storm Damage Roof Claims | FreeRoofPros',
  description:
    'Get answers to the most common questions about storm damage insurance claims, roof repair and replacement, costs, coverage, and how FreeRoofPros can help you get a free roof through your homeowners insurance.',
  alternates: {
    canonical: 'https://freeroofpros.com/faq',
  },
  openGraph: {
    title: 'FAQ: Storm Damage Roof Insurance Claims | FreeRoofPros',
    description:
      'Answers to the most common questions about storm damage insurance claims, roof repair, costs, and coverage.',
    url: 'https://freeroofpros.com/faq',
    siteName: 'FreeRoofPros',
    type: 'website',
  },
};

const FAQ_SECTIONS = [
  {
    id: 'insurance-claims',
    heading: 'Insurance Claims',
    faqs: [
      {
        q: 'Do you handle insurance claims for roof damage?',
        a: 'Yes. We specialize in working directly with insurance companies on behalf of homeowners. Our team documents the damage, prepares the claim, and communicates with your adjuster so you don\'t have to navigate the process alone.',
      },
      {
        q: 'How long do I have to file a roof insurance claim after a storm?',
        a: 'Every state and insurance policy has different deadlines. Most policies require you to file within 1–2 years of the storm event, but some states like Tennessee enforce a strict 1-year deadline. Oregon has a 2-year window. We strongly recommend filing as soon as possible — delays can result in denied claims.',
      },
      {
        q: 'Does homeowners insurance cover roof replacement?',
        a: 'In most cases, yes — if the damage was caused by a covered peril such as hail, wind, or a fallen tree. Standard homeowners policies (HO-3) typically cover sudden storm damage. However, damage from neglect or normal wear and tear is generally not covered.',
      },
      {
        q: 'What is the difference between actual cash value and replacement cost value for roofs?',
        a: 'Replacement Cost Value (RCV) pays to replace your roof at today\'s prices with a comparable new roof. Actual Cash Value (ACV) pays the depreciated value of your old roof. RCV policies typically result in a higher payout. Check your declarations page to see which coverage type you have.',
      },
      {
        q: 'What happens if my roof insurance claim is denied?',
        a: 'A denied claim is not necessarily final. You have the right to appeal the decision by requesting a re-inspection, providing additional documentation, or hiring a licensed public adjuster.',
      },
      {
        q: 'Can I choose my own roofing contractor for an insurance claim?',
        a: 'Absolutely. You are not required to use a contractor recommended or preferred by your insurance company. You have the legal right to select any licensed, insured contractor you choose.',
      },
      {
        q: 'Is it worth filing an insurance claim for roof damage?',
        a: 'Yes, if the damage was caused by a covered event like hail or wind. Storm damage claims are often the most valuable insurance claims a homeowner can file — in many cases resulting in a full roof replacement at little or no out-of-pocket cost beyond your deductible.',
      },
      {
        q: 'Do I need to get multiple roof estimates for insurance?',
        a: 'You are not required to obtain multiple estimates, though your insurer may request a second opinion. Our inspectors use the same Xactimate estimating software that insurance adjusters use, which typically results in fair, accepted estimates.',
      },
    ],
  },
  {
    id: 'roof-damage-repair',
    heading: 'Roof Damage & Repair',
    faqs: [
      {
        q: 'How fast can you repair storm-damaged roofs?',
        a: 'We typically schedule inspections within 24–48 hours of your request. Once your insurance claim is approved, most roof replacements are completed in one to two days.',
      },
      {
        q: 'What types of roofs do you repair or replace?',
        a: 'We work with all common residential roofing materials including asphalt shingles, architectural shingles, metal roofing, tile, and flat roof systems.',
      },
      {
        q: 'Can you repair hail damage on my roof?',
        a: 'Yes. Hail damage is one of the most common types of storm damage we assess and repair. Hail can fracture asphalt shingles, crack tile, dent metal, and compromise the waterproof membrane.',
      },
      {
        q: 'How do I know if my roof has storm damage?',
        a: 'Signs of hail or wind damage include missing, cracked, or curling shingles; dented gutters and downspouts; granules accumulating in your gutters; and dents on metal vents, flashing, or your AC condenser unit.',
      },
      {
        q: 'How do I know if hail damaged my roof?',
        a: 'Start at ground level: check your gutters for excessive granule loss, look at your AC condenser unit for dents, and inspect aluminum downspouts for dings. If those show impact damage, your roof almost certainly does too.',
      },
      {
        q: 'What should I do immediately after a hailstorm?',
        a: 'First, stay safe. Then: (1) Document — photograph any exterior damage you can see safely from the ground. (2) Do not attempt DIY repairs yet. (3) Call us to schedule a free inspection. (4) Review your insurance policy and locate your policy number.',
      },
      {
        q: 'What is the best roofing material for storm-prone areas?',
        a: 'For hail-prone regions, Class 4 impact-resistant asphalt shingles are the gold standard — they can also earn you a premium discount from your insurer. Standing seam metal roofing offers excellent wind resistance.',
      },
    ],
  },
  {
    id: 'costs-coverage',
    heading: 'Costs & Coverage',
    faqs: [
      {
        q: 'How much does a roof replacement cost?',
        a: 'The national average ranges from $8,000 to $20,000 depending on the size of your roof, materials used, and your region. When your claim is approved, your insurance company pays the replacement cost value minus your deductible.',
      },
      {
        q: 'How much does a free roof inspection cost and what does it include?',
        a: 'Our roof inspection is 100% free and carries no obligation. It includes a thorough visual inspection of all roof surfaces, flashings, gutters, vents, and the attic if accessible.',
      },
      {
        q: 'Do you offer warranties on your work?',
        a: 'Yes. All of our roof replacements come with the manufacturer\'s product warranty on materials (typically 25–50 years) plus our workmanship warranty.',
      },
      {
        q: 'Can I get a new roof for free through insurance?',
        a: 'In many cases, yes — minus your deductible. If a covered storm event damaged your roof and you have a Replacement Cost Value (RCV) policy, your insurer is responsible for paying to replace your roof.',
      },
      {
        q: 'Will my insurance rates go up if I file a roof claim?',
        a: 'Filing a storm damage claim generally has less impact on your rates than filing a liability or water damage claim. Hail and wind events are classified as catastrophic weather events by most insurers.',
      },
      {
        q: 'What if my roof is too old for insurance to cover?',
        a: 'Age alone does not disqualify a roof from coverage. However, if you have an Actual Cash Value (ACV) policy, an older roof will be heavily depreciated. If you have RCV coverage, your insurer must pay for a full replacement regardless of roof age.',
      },
    ],
  },
  {
    id: 'about-freeroofpros',
    heading: 'About FreeRoofPros',
    faqs: [
      {
        q: 'Are your roofing services available in my city?',
        a: 'We currently serve homeowners across Texas (Dallas, Houston, Austin, San Antonio), the Midwest (Indianapolis, Kansas City, St. Louis, Columbus), the South (Nashville, Atlanta, Charlotte), and the Pacific Northwest (Portland, Central Oregon).',
      },
      {
        q: 'Is your team licensed and insured?',
        a: 'Yes. FreeRoofPros only works with licensed, bonded, and insured roofing contractors in each market we serve. We carry full general liability insurance and workers\' compensation coverage.',
      },
      {
        q: 'Do you offer emergency roof repair services?',
        a: 'Yes. If your roof is actively leaking or has suffered significant structural damage from a storm, contact us immediately. We offer emergency tarping and temporary repairs.',
      },
      {
        q: 'How do I get a free roof replacement quote?',
        a: 'Simply click the "Get My Free Inspection" button on our homepage or call us directly. We will schedule a free, no-obligation inspection with a certified roofing specialist.',
      },
      {
        q: 'How can I tell if a roofing contractor is legitimate?',
        a: 'Verify their state roofing license, ask for their general liability and workers\' comp certificates, check their BBB rating and online reviews, confirm they have a local office, and ask for references. Be wary of contractors who promise to waive your deductible — that is insurance fraud.',
      },
    ],
  },
];

const ALL_FAQ_SCHEMA_ITEMS = FAQ_SECTIONS.flatMap((section) =>
  section.faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  }))
);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: ALL_FAQ_SCHEMA_ITEMS,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://freeroofpros.com' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://freeroofpros.com/faq' },
  ],
};

export default function FAQPage() {
  return (
    <>
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-sm text-blue-200 flex-wrap">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true" className="text-blue-400">/</li>
                <li className="text-white font-medium">FAQ</li>
              </ol>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
              Frequently Asked Questions About Storm Damage Roof Claims
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
              Everything homeowners need to know about storm damage roof insurance claims —
              from filing deadlines to contractor selection to what your policy actually covers.
            </p>
          </div>
        </section>

        {/* Jump Links */}
        <div className="border-b border-gray-200 bg-gray-50 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex gap-4 overflow-x-auto text-sm font-medium text-gray-600 flex-nowrap whitespace-nowrap">
            {FAQ_SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="hover:text-blue-600 transition-colors flex-shrink-0"
              >
                {section.heading}
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">
          {FAQ_SECTIONS.map((section) => (
            <section key={section.id} id={section.id}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-1 bg-blue-600 rounded-full flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{section.heading}</h2>
              </div>
              <div className="space-y-3">
                {section.faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-blue-200 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer select-none list-none">
                      <span className="text-base font-semibold text-gray-900 group-open:text-blue-700 transition-colors leading-snug">
                        {faq.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className="flex-shrink-0 w-5 h-5 text-gray-400 group-open:text-blue-600 transition-transform duration-200 group-open:rotate-180"
                      >
                        <svg viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-5 pb-5 pt-1 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-14 px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Still have questions? We&apos;re happy to help.
          </h2>
          <p className="text-blue-100 mb-7 max-w-xl mx-auto leading-relaxed">
            Schedule a free, no-obligation roof inspection and speak directly with one of our storm damage specialists.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#contact"
              className="inline-block bg-white text-blue-700 font-bold px-10 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-md text-sm sm:text-base"
            >
              Get My Free Roof Inspection →
            </a>
            <Link
              href="/blog"
              className="inline-block border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Read Our Storm Damage Blog
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
