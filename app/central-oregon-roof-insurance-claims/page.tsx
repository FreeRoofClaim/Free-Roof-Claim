import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle,
  Phone,
  ClipboardList,
  Search,
  FileText,
  Users,
  Hammer,
  ShieldCheck,
  MapPin,
  AlertTriangle,
  Calendar,
  CloudLightning,
  BookOpen,
  DollarSign,
  Clock,
  HelpCircle,
  Star,
  ArrowRight,
  Wind,
  Snowflake,
  Home,
} from 'lucide-react';
import { LeadForm } from '@/components/sections/LeadForm';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title:
    'Central Oregon Roof Insurance Claims Guide | FreeRoofPros',
  description:
    'Complete guide to roof insurance claims in Central Oregon. August 2025 hailstorm deadline: August 2026. Free inspections, 99.7% claim approval rate. FreeRoofPros handles the full process — you pay only your deductible. Call (541) 728-0266.',
  alternates: {
    canonical: 'https://www.freeroofpros.com/central-oregon-roof-insurance-claims',
  },
  openGraph: {
    title: 'Central Oregon Roof Insurance Claims Guide | FreeRoofPros',
    description:
      'Central Oregon homeowners affected by the August 5, 2025 hailstorm have until approximately August 2026 to file insurance claims. FreeRoofPros provides free roof inspections and handles the entire insurance claim process at no cost to homeowners.',
    url: 'https://www.freeroofpros.com/central-oregon-roof-insurance-claims',
    siteName: 'Free Roof Pros',
    images: [
      {
        url: 'https://www.freeroofpros.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Central Oregon Roof Insurance Claims Guide — FreeRoofPros',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Central Oregon Roof Insurance Claims Guide | FreeRoofPros',
    description:
      'August 2025 hailstorm deadline is August 2026. Free inspection, 99.7% claim approval. FreeRoofPros handles everything — you pay only your deductible.',
    images: ['https://www.freeroofpros.com/og-image.png'],
  },
};

// ---------------------------------------------------------------------------
// JSON-LD Schemas
// ---------------------------------------------------------------------------

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.freeroofpros.com/#organization',
  name: 'Free Roof Pros',
  url: 'https://www.freeroofpros.com',
  telephone: '541-728-0266',
  email: 'info@freeroofpros.com',
  logo: 'https://www.freeroofpros.com/roofing-logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '10801 NW 43rd Street',
    addressLocality: 'Terrebonne',
    addressRegion: 'OR',
    postalCode: '97760',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Bend', addressRegion: 'OR' },
    { '@type': 'City', name: 'Redmond', addressRegion: 'OR' },
    { '@type': 'City', name: 'La Pine', addressRegion: 'OR' },
    { '@type': 'City', name: 'Terrebonne', addressRegion: 'OR' },
    { '@type': 'City', name: 'Sisters', addressRegion: 'OR' },
    { '@type': 'City', name: 'Prineville', addressRegion: 'OR' },
    { '@type': 'County', name: 'Deschutes County', addressRegion: 'OR' },
  ],
  description:
    'Free Roof Pros provides free roof inspections, full insurance claim management, and roof replacement services to Central Oregon homeowners. We handle the entire storm damage claim process at no out-of-pocket cost to the homeowner beyond their deductible.',
  sameAs: ['https://www.freeroofpros.com'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '120',
  },
  creator: {
    '@type': 'SoftwareApplication',
    name: 'Perplexity Computer',
    url: 'https://www.perplexity.ai/computer',
  },
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to File a Roof Insurance Claim in Central Oregon',
  description:
    'A 7-step process for filing a roof insurance claim in Central Oregon, including documentation, inspection, claim filing, adjuster meeting, estimate review, contractor approval, and roof installation.',
  totalTime: 'P14D',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '1000',
    description: 'Homeowner pays only their deductible — typically $1,000 to $2,500',
  },
  supply: [
    { '@type': 'HowToSupply', name: 'Homeowners insurance policy' },
    { '@type': 'HowToSupply', name: 'Photos of storm damage' },
    { '@type': 'HowToSupply', name: 'Policy declarations page' },
  ],
  tool: [
    { '@type': 'HowToTool', name: 'Licensed roofing contractor' },
    { '@type': 'HowToTool', name: 'Professional inspection report' },
    { '@type': 'HowToTool', name: 'National Weather Service storm data' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Document the Storm Damage',
      text: 'Photograph all visible damage immediately after the storm event — gutters, downspouts, AC condenser units, soft metals, and any shingles you can see from the ground. Document the storm date, weather service reports, and any temporary repairs you made to prevent further damage.',
      url: 'https://www.freeroofpros.com/central-oregon-roof-insurance-claims#step-1',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Get a Free Professional Roof Inspection',
      text: 'Schedule a free inspection with a licensed Oregon roofing contractor before calling your insurer. A professional inspection report with timestamped photographs establishes independent damage evidence that predates the insurer\'s adjuster visit.',
      url: 'https://www.freeroofpros.com/central-oregon-roof-insurance-claims#step-2',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'File the Insurance Claim',
      text: 'Contact your insurance company\'s claims line — not your agent — to file a first notice of loss. Provide the storm date (August 5, 2025 for the Central Oregon hailstorm), your policy number, and a summary of the damage. Note your claim number.',
      url: 'https://www.freeroofpros.com/central-oregon-roof-insurance-claims#step-3',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Meet the Insurance Adjuster',
      text: 'Your insurer will assign an adjuster to inspect your roof. Have your roofing contractor present at the adjuster meeting to walk the roof together, point out every damage item, and ensure nothing is missed in the scope of loss.',
      url: 'https://www.freeroofpros.com/central-oregon-roof-insurance-claims#step-4',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Review the Insurance Estimate',
      text: 'Your insurer will issue an estimate detailing the scope of loss and payment amount. Review it carefully against your contractor\'s independent estimate. Underpayments and partial scopes are common and can be disputed through a supplement process.',
      url: 'https://www.freeroofpros.com/central-oregon-roof-insurance-claims#step-5',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Approve Your Contractor',
      text: 'Sign a contract with your chosen licensed Oregon roofing contractor. You are legally entitled to choose any licensed, insured contractor — you are not required to use an insurer-preferred vendor. The contractor coordinates final scope and material selection.',
      url: 'https://www.freeroofpros.com/central-oregon-roof-insurance-claims#step-6',
    },
    {
      '@type': 'HowToStep',
      position: 7,
      name: 'Get Your New Roof Installed',
      text: 'The contractor schedules and completes installation, typically one to three days for most residential roofs in Central Oregon. Final cleanup, a complete walkthrough, and warranty documentation are provided before project close.',
      url: 'https://www.freeroofpros.com/central-oregon-roof-insurance-claims#step-7',
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the deadline to file a roof insurance claim in Oregon for the August 2025 hailstorm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Central Oregon homeowners affected by the August 5, 2025 hailstorm have until approximately August 2026 to file their insurance claim. Under Oregon Revised Statute ORS 742.240, insurers cannot deny claims solely based on late notice unless they can show the delay caused actual prejudice. However, most homeowners insurance policies include their own reporting requirements — typically one year from the date of loss — which are legally enforceable. Missing the August 2026 window means losing your right to an insurance-covered roof replacement.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a roof replacement cost in Central Oregon with insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With an approved insurance claim, most Central Oregon homeowners pay only their deductible — typically $1,000 to $2,500. The insurance company covers all remaining costs for a full replacement roof of like kind and quality. Without insurance, a roof replacement in Bend, Redmond, or La Pine typically costs between $10,000 and $22,000 depending on roof size, pitch, and materials.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does homeowners insurance cover hail damage in Oregon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Standard HO-3 homeowners insurance policies in Oregon cover sudden storm damage including hail. Your roof does not need to be actively leaking to qualify. Granule loss, bruised shingles, cracked ridge caps, and dented metal components are all covered losses under most Oregon policies. FreeRoofPros has a 99.7% claim approval rate across Central Oregon.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between ACV and RCV roof insurance coverage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Actual Cash Value (ACV) coverage pays the depreciated value of your old roof — meaning an older roof may only receive a fraction of the replacement cost. Replacement Cost Value (RCV) coverage pays the full cost to replace your roof with a comparable new roof at today\'s prices. RCV policies result in significantly higher payouts. Your coverage type is listed on your policy\'s declarations page under "Roof Settlement Method."',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the roof insurance claim process take in Oregon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The total timeline from inspection to new roof is typically two to four weeks. The free inspection and documentation phase takes one to two days. Insurance claim filing and adjuster scheduling typically takes five to ten business days. Under Oregon regulations, insurers must acknowledge a claim within ten days and complete their investigation within a reasonable time. Once approved, most Central Oregon roofs are replaced in one to three days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the signs of hail damage on a roof in Central Oregon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common hail damage signs on Central Oregon roofs include: circular granule loss exposing the dark fiberglass mat on asphalt shingles; soft, bruised impact points on shingles that feel like a bruise on fruit; circular dent patterns on aluminum gutters, downspouts, and AC condenser fins; cracked or split ridge cap shingles; dented or cracked roof vents and plastic components; and lifted shingle tabs from accompanying wind. Most hail damage requires a rooftop inspection to identify — it is not visible from the ground.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I miss the Oregon roof insurance claim deadline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you miss the filing deadline specified in your homeowners insurance policy — typically one year from the date of loss — your insurer can legally deny your claim with no obligation to pay. There is no grace period, no exception for claims discovered late, and no appeals process once the window closes. For the August 5, 2025 Central Oregon hailstorm, the deadline is approximately August 2026. A free inspection costs nothing. Missing the deadline means paying $10,000 to $22,000 out of pocket.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is FreeRoofPros really free for homeowners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The inspection, claim documentation, adjuster coordination, and contractor management are all provided at no cost to homeowners. FreeRoofPros is paid through the insurance claim settlement — the same funds your insurer allocates for contractor labor and materials. You pay only your deductible, which you would owe regardless of which contractor you used.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I choose my own roofing contractor for an insurance claim in Oregon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Oregon homeowners have the legal right to choose any licensed, bonded, and insured roofing contractor for their insurance claim repair. Your insurer cannot require you to use a preferred or recommended vendor. If an insurer\'s preferred contractor is suggested, you may accept or decline that recommendation freely.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the free roof inspection include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FreeRoofPros free inspections include: a full rooftop walk of every field section and ridge line; hail impact mapping with measurements and counts per square; flashing inspection at chimneys, skylights, pipes, and valleys; gutter and downspout assessment for hail denting; soffit and fascia review; attic moisture check for existing water intrusion; and complete timestamped photo documentation. A written report is delivered within 24 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is ORS 742.240 and how does it affect my insurance claim deadline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ORS 742.240 is the Oregon statute governing insurance claim limitations. It establishes that insurers cannot use late notice as the sole basis for denying a claim unless they can demonstrate actual prejudice from the delay. However, this statute does not override your specific policy\'s reporting requirements. Most homeowners policies include their own one-year filing windows that are contractually enforceable. For maximum protection, file your claim well before the August 2026 deadline.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which cities in Central Oregon does FreeRoofPros serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FreeRoofPros serves all of Central Oregon from our office in Terrebonne, OR, including Bend, Redmond, La Pine, Terrebonne, Sisters, Sunriver, Prineville, and all surrounding communities in Deschutes and Crook counties.',
      },
    },
  ],
};

const breadcrumbJsonLd = {
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
      name: 'Central Oregon Roof Insurance Claims',
      item: 'https://www.freeroofpros.com/central-oregon-roof-insurance-claims',
    },
  ],
};

const speakableJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.freeroofpros.com/central-oregon-roof-insurance-claims',
  name: 'Central Oregon Roof Insurance Claims Guide',
  url: 'https://www.freeroofpros.com/central-oregon-roof-insurance-claims',
  description:
    'Central Oregon homeowners affected by the August 5, 2025 hailstorm have until approximately August 2026 to file insurance claims. FreeRoofPros provides free roof inspections and handles the entire insurance claim process at no cost to homeowners.',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['[data-speakable="true"]'],
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.freeroofpros.com' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Central Oregon Roof Insurance Claims',
        item: 'https://www.freeroofpros.com/central-oregon-roof-insurance-claims',
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function CentralOregonRoofInsuranceClaimsPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <ol className="flex items-center gap-1.5 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-[#2563eb] transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-700 font-medium">Central Oregon Roof Insurance Claims</li>
          </ol>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#122E5F] text-white" data-speakable="true">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#2563eb] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              August 2026 insurance deadline approaching
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              Central Oregon Roof Insurance Claims: Complete Guide
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 leading-relaxed" data-speakable="true">
              Central Oregon homeowners affected by the August 5, 2025 hailstorm have until
              approximately <strong className="text-white">August 2026</strong> to file insurance
              claims. FreeRoofPros provides free roof inspections and handles the entire insurance
              claim process at no cost to homeowners — you pay only your deductible.
            </p>
            <p className="text-blue-200 mb-8 leading-relaxed">
              This guide answers every question about the roof insurance claim process in Central
              Oregon — deadlines, damage types, policy terms, and the step-by-step process from
              inspection to new roof.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#lead-form"
                className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <ClipboardList className="w-5 h-5" />
                Schedule Free Inspection
              </a>
              <a
                href="tel:541-728-0266"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20"
              >
                <Phone className="w-5 h-5" />
                (541) 728-0266
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Claim Approval Rate', value: '99.7%' },
              { label: 'Filing Deadline', value: 'Aug 2026' },
              { label: 'Cost to You', value: 'Deductible Only' },
              { label: 'Inspection', value: 'Always Free' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-[#122E5F]">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAGE NAV */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h2 className="text-sm font-semibold text-[#122E5F] uppercase tracking-wide mb-4">On This Page</h2>
          <nav>
            <ol className="space-y-1.5 text-sm">
              {[
                { href: '#how-it-works', label: 'How the Roof Insurance Claim Process Works in Oregon' },
                { href: '#deadlines', label: 'Oregon Insurance Claim Deadlines' },
                { href: '#storm-damage-types', label: 'Common Types of Storm Damage in Central Oregon' },
                { href: '#understanding-policy', label: 'Understanding Your Insurance Policy' },
                { href: '#faq', label: 'Frequently Asked Questions' },
                { href: '#why-freeroofpros', label: 'Why FreeRoofPros?' },
                { href: '#service-areas', label: 'Service Areas' },
              ].map((item, i) => (
                <li key={item.href} className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#2563eb] w-5 shrink-0">{i + 1}.</span>
                  <a href={item.href} className="text-[#2563eb] hover:underline">{item.label}</a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* SECTION 1: HOW IT WORKS */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 scroll-mt-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">
            How Does the Roof Insurance Claim Process Work in Oregon?
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl" data-speakable="true">
            Filing a roof insurance claim in Oregon is a 7-step process that begins with documenting
            damage and ends with a new roof installed by a licensed contractor. The entire process
            typically takes two to four weeks. FreeRoofPros manages every step on your behalf — from
            the free inspection through final installation — at no out-of-pocket cost beyond your
            deductible.
          </p>
        </div>
        <div className="space-y-10">

          {/* Step 1 */}
          <div id="step-1" className="grid lg:grid-cols-[auto_1fr] gap-6 scroll-mt-8">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#2563eb] text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0">01</div>
              <div className="w-0.5 h-full bg-gray-200 hidden lg:block" />
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#122E5F] mb-3 flex items-center gap-2">
                <Search className="w-5 h-5 text-[#2563eb] shrink-0" />
                Step 1: Document the Storm Damage
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Document immediately after any storm event.</strong> Before you call your insurer,
                gather as much physical and photographic evidence as possible while the scene is fresh.
                This documentation becomes your independent record of the damage and its cause — essential
                if the insurer later disputes the storm date or extent of the loss.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                For the August 5, 2025 Central Oregon hailstorm, photograph your gutters, downspouts,
                AC condenser unit, and any visible shingles from the ground. Hail leaves distinct circular
                dent patterns on soft metals — these are easy to identify and serve as clear evidence of
                storm impact even when shingle damage is harder to see from street level.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you made any emergency repairs — tarping, sealing, temporary patches — document those
                costs with receipts and before/after photos. Emergency mitigation costs are typically
                reimbursable under your homeowners policy. Pull the National Weather Service storm report
                for your area and date; for August 5, 2025, NWS confirmed a severe hailstorm across
                Deschutes County.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-[#122E5F] font-medium mb-1">Documentation checklist:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  {[
                    'Date-stamped photos of gutters, downspouts, AC unit, and visible shingles',
                    'National Weather Service storm data for your specific address',
                    'HailTrace or similar hail path report (available free online)',
                    'Receipts for any emergency temporary repairs',
                    'Pre-storm photos if available (real estate listing, prior inspection)',
                    'Your insurance policy — especially the Duties After Loss section',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#2563eb] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div id="step-2" className="grid lg:grid-cols-[auto_1fr] gap-6 scroll-mt-8">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#2563eb] text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0">02</div>
              <div className="w-0.5 h-full bg-gray-200 hidden lg:block" />
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#122E5F] mb-3 flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-[#2563eb] shrink-0" />
                Step 2: Get a Free Professional Roof Inspection
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Schedule a professional inspection before calling your insurer.</strong> This is
                the most important step most homeowners skip. A certified roofing contractor will identify
                every damage point your insurer&apos;s adjuster might miss, and creates an independent
                damage record that predates the adjuster&apos;s visit.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                FreeRoofPros provides free inspections across Central Oregon — Bend, Redmond, La Pine,
                Terrebonne, Sisters, and surrounding communities. Our certified inspectors perform a full
                rooftop walk documenting hail impact counts per square, measurements, flashing conditions,
                gutter damage, and every component of your roofing system. A written report with
                timestamped photos is delivered within 24 hours.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The inspection determines whether your damage meets the threshold for a viable insurance
                claim. We will tell you directly whether to file. Our 99.7% claim approval rate means
                when we tell you that you have a claim, it will be approved. We do not recommend filing
                claims for marginal or cosmetic-only damage that would raise your premium without
                resulting in meaningful coverage.
              </p>
              <a href="tel:541-728-0266" className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm">
                <Phone className="w-4 h-4" />
                Schedule Free Inspection: (541) 728-0266
              </a>
            </div>
          </div>

          {/* Step 3 */}
          <div id="step-3" className="grid lg:grid-cols-[auto_1fr] gap-6 scroll-mt-8">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#2563eb] text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0">03</div>
              <div className="w-0.5 h-full bg-gray-200 hidden lg:block" />
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#122E5F] mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#2563eb] shrink-0" />
                Step 3: File the Insurance Claim
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Call your insurer&apos;s claims line — not your agent — to file.</strong> Your
                agent can provide guidance, but the claims department processes the actual first notice of
                loss (FNOL). When you call, state clearly: &quot;I am filing a claim for hail damage to my
                roof from the August 5, 2025 storm in Deschutes County, Oregon.&quot;
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Provide your policy number, property address, and a brief description of the damage. Note
                your claim number — every subsequent communication must reference it. Ask for the name and
                direct contact information of the adjuster assigned to your file. Ask what your
                policy&apos;s proof of loss deadline is.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under Oregon Administrative Rules (OAR Chapter 836), your insurer must acknowledge your
                claim within 10 days and complete its investigation and communicate a coverage decision
                within a reasonable time. Follow up your call with a written email confirming the filing
                date. FreeRoofPros handles all claim communication on your behalf, including filing
                paperwork, damage reports, and adjuster scheduling.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Read our detailed guide:{' '}
                <Link href="/blog/filing-roof-insurance-claim-oregon-guide" className="text-[#2563eb] hover:underline font-medium">
                  Complete Guide to Filing a Roof Insurance Claim in Oregon
                </Link>
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div id="step-4" className="grid lg:grid-cols-[auto_1fr] gap-6 scroll-mt-8">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#2563eb] text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0">04</div>
              <div className="w-0.5 h-full bg-gray-200 hidden lg:block" />
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#122E5F] mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#2563eb] shrink-0" />
                Step 4: Meet the Insurance Adjuster
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Have your roofing contractor present at the adjuster inspection.</strong> The
                adjuster&apos;s inspection determines your payout scope — every item missed means money
                you do not receive. Your contractor knows what to look for, how to document it in
                insurance terms, and how to escalate when items are excluded improperly.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                FreeRoofPros attends every adjuster inspection in person. Our specialists walk the roof
                alongside the adjuster, reference our independent inspection report, and ensure every
                legitimate damage item is included in the scope of loss. We challenge partial scopes
                immediately and initiate the supplement process when coverage is denied or underpaid.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Common items adjusters miss on Central Oregon roofs: pipe boot seals, ridge cap damage,
                soft metal components (gutters, drip edge, flashing), skylight frames, and the full
                extent of granule loss per square. These items are all covered under standard Oregon
                homeowners policies and should appear in any complete scope.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Learn more:{' '}
                <Link href="/blog/what-to-expect-insurance-adjuster-roof-inspection" className="text-[#2563eb] hover:underline font-medium">
                  What to Expect During an Insurance Adjuster Roof Inspection
                </Link>
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div id="step-5" className="grid lg:grid-cols-[auto_1fr] gap-6 scroll-mt-8">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#2563eb] text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0">05</div>
              <div className="w-0.5 h-full bg-gray-200 hidden lg:block" />
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#122E5F] mb-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[#2563eb] shrink-0" />
                Step 5: Review the Insurance Estimate
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Review the estimate carefully before accepting.</strong> Your insurer will issue
                an Explanation of Benefits (EOB) or claim estimate detailing the scope of loss and the
                payment amount. Compare it line-by-line against your contractor&apos;s independent
                estimate. Underpayments and partial scopes are common — not because of fraud, but because
                adjusters process hundreds of claims quickly and often miss items.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                If the insurer&apos;s estimate is lower than your contractor&apos;s estimate, do not
                accept the initial payment as final. The supplement process allows your contractor to
                provide additional documentation justifying additional covered items. FreeRoofPros
                handles the entire supplement process on your behalf.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For ACV (Actual Cash Value) policies, the insurer will issue an initial payment reflecting
                depreciated value. Once installation is complete, you are entitled to submit a proof of
                completion and receive the depreciation holdback — the difference between ACV and full RCV
                (Replacement Cost Value). Do not let this recoverable depreciation go uncollected.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Read more:{' '}
                <Link href="/blog/rcv-vs-acv-roof-insurance" className="text-[#2563eb] hover:underline font-medium">
                  RCV vs. ACV: What Oregon Homeowners Need to Know
                </Link>
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div id="step-6" className="grid lg:grid-cols-[auto_1fr] gap-6 scroll-mt-8">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#2563eb] text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0">06</div>
              <div className="w-0.5 h-full bg-gray-200 hidden lg:block" />
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#122E5F] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#2563eb] shrink-0" />
                Step 6: Approve Your Contractor
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>You have the legal right to choose any licensed Oregon contractor.</strong> Your
                insurer cannot require you to use a preferred vendor or restrict you to their network.
                Sign a contract with a licensed, bonded, and insured Oregon roofing contractor who will
                coordinate the full scope of work with your insurance company.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Review your contractor&apos;s Oregon Contractor License (CCB number), proof of general
                liability insurance, and workers&apos; compensation coverage. Ask for the
                manufacturer&apos;s warranty on materials and the contractor&apos;s workmanship warranty.
                In Central Oregon, look for contractors familiar with Class 4 impact-resistant shingles
                — a material upgrade that can qualify you for an insurance premium discount on your next
                renewal.
              </p>
              <p className="text-gray-700 leading-relaxed">
                FreeRoofPros holds an active Oregon CCB license, carries full general liability and
                workers&apos; compensation coverage, and installs manufacturer-certified shingle lines
                with matching material warranties. We handle all material selection and color coordination
                with your insurer so the approved scope matches the final installation scope.
              </p>
            </div>
          </div>

          {/* Step 7 */}
          <div id="step-7" className="grid lg:grid-cols-[auto_1fr] gap-6 scroll-mt-8">
            <div className="flex flex-col items-center">
              <div className="bg-[#2563eb] text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center shrink-0">07</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#122E5F] mb-3 flex items-center gap-2">
                <Hammer className="w-5 h-5 text-[#2563eb] shrink-0" />
                Step 7: Get Your New Roof Installed
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Most Central Oregon residential roofs are replaced in one to three days.</strong>
                Your contractor schedules installation once the approved scope is finalized and materials
                are on order. The crew completes tear-off of damaged shingles, installs ice-and-water
                shield in valleys and eave areas, installs new underlayment, lays new shingles, and
                replaces all flashing, vents, and ridge cap.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Central Oregon&apos;s climate — heavy snow loads, wide temperature swings, and high UV
                at elevation — makes proper installation critical. All FreeRoofPros installations include
                code-compliant ice-and-water shield coverage per Oregon Building Code requirements, which
                are more stringent than manufacturer minimums alone.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Before the crew leaves, walk the entire property with your project manager. Verify all
                old material has been removed from the yard, gutters have been cleared of debris, nails
                have been swept from driveways and lawn areas, and the finished roof matches the approved
                materials. You should receive warranty documents for both materials and workmanship at
                project completion.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-900 font-medium">
                  After installation: Submit your proof of completion to the insurer to release any
                  depreciation holdback (ACV policies). FreeRoofPros handles this final step for every
                  client.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: DEADLINES */}
      <section id="deadlines" className="bg-gray-50 border-y border-gray-200 scroll-mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4" data-speakable="true">
            Oregon Insurance Claim Deadlines
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mb-10" data-speakable="true">
            Understanding Oregon&apos;s insurance claim deadlines is critical. The August 5, 2025
            Central Oregon hailstorm created an approximately <strong>August 2026</strong> filing
            deadline for affected homeowners. Missing this deadline means permanently forfeiting your
            right to an insurance-covered roof replacement.
          </p>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="w-5 h-5 text-[#2563eb] shrink-0" />
                  <h3 className="font-bold text-[#122E5F]">ORS 742.240 — Oregon&apos;s Statute of Limitations</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Oregon Revised Statute 742.240 establishes a two-year statute of limitations on
                  insurance lawsuits. It also provides that late notice alone cannot be the sole basis
                  for denying a claim unless the insurer can demonstrate actual prejudice from the delay.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Important limitation:</strong> ORS 742.240 governs when you can <em>sue</em>
                  your insurer. It does not override the reporting requirements in your specific policy.
                  Most homeowners insurance policies require you to report a loss within one year of the
                  storm date. That contractual deadline is separately enforceable and is not protected
                  by ORS 742.240.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-[#2563eb] shrink-0" />
                  <h3 className="font-bold text-[#122E5F]">Your Policy&apos;s 1-Year Filing Window</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Most Oregon homeowners insurance policies require you to file a claim within one year
                  of the date of loss. For the August 5, 2025 Central Oregon hailstorm, the policy-level
                  filing deadline is approximately <strong>August 2026</strong>.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Your specific policy deadline appears in the Duties After Loss section — look for
                  language like &quot;prompt notice&quot; or &quot;notice as soon as practicable&quot;
                  combined with the policy&apos;s definition of timeliness. When in doubt, file early.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-[#2563eb] shrink-0" />
                  <h3 className="font-bold text-[#122E5F]">Oregon&apos;s 30-Day Insurer Response Rule</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Under Oregon insurance regulations, once you file a claim, your insurer must acknowledge
                  receipt within 10 working days and must complete its investigation and issue a coverage
                  decision within 30 days of receiving all required proofs of loss, or provide written
                  notice of reasons for the delay. This 30-day window protects you from insurers who
                  stall without explanation.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                  <h3 className="text-lg font-bold text-amber-800">August 2026 Deadline</h3>
                </div>
                <p className="text-amber-900 leading-relaxed mb-4 text-sm">
                  The August 5, 2025 Central Oregon hailstorm created a hard filing deadline of
                  approximately <strong>August 2026</strong> for most affected homeowners.
                </p>
                <div className="space-y-2 mb-5">
                  {[
                    'Inspection → 24 to 48 hours',
                    'Claim filing → same day as inspection report',
                    'Adjuster inspection → 5 to 10 business days',
                    'Coverage decision → within 30 days of proof of loss',
                    'Installation → 1 to 3 days after approval',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-amber-900">
                      <ArrowRight className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <a href="tel:541-728-0266" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors w-full justify-center">
                  <Phone className="w-4 h-4" />
                  Call (541) 728-0266 Now
                </a>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-bold text-red-900 mb-3">What Happens If You Miss the Deadline?</h3>
                <div className="space-y-3">
                  {[
                    { title: 'Claim is denied', body: 'Your insurer will deny the claim citing the policy\'s reporting requirement. This denial is typically final with no appeal path.' },
                    { title: 'No legal recourse', body: 'Once the policy\'s filing window closes, you lose your contractual right to coverage regardless of the roof condition.' },
                    { title: 'Full out-of-pocket cost', body: 'You pay the full $10,000 to $22,000 cost of roof replacement without any insurance contribution.' },
                    { title: 'Adjuster backlogs', body: 'As August 2026 approaches, insurer adjuster schedules fill up — delaying now makes the timeline tighter.' },
                  ].map((item) => (
                    <div key={item.title} className="text-sm">
                      <span className="font-semibold text-red-900">{item.title}: </span>
                      <span className="text-red-800">{item.body}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/blog/how-long-to-file-roof-insurance-claim" className="inline-flex items-center gap-2 text-[#2563eb] hover:underline font-medium text-sm">
              <BookOpen className="w-4 h-4" />
              Full guide: How Long Do I Have to File a Roof Insurance Claim?
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: STORM DAMAGE TYPES */}
      <section id="storm-damage-types" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 scroll-mt-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">
          Common Types of Storm Damage in Central Oregon
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mb-10">
          Central Oregon&apos;s climate produces three primary types of storm damage: hail, wind, and
          snow/ice loads. Each damages roofs in distinct ways, and each type of damage is typically
          covered under standard Oregon homeowners insurance policies as a sudden and accidental covered
          peril.
        </p>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 rounded-lg p-2"><CloudLightning className="w-6 h-6 text-[#2563eb]" /></div>
              <h3 className="text-lg font-bold text-[#122E5F]">Hail Damage</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Hail damage is the most common covered loss in Central Oregon and is typically invisible
              from ground level. The August 5, 2025 storm dropped hail up to 1.5 to 2 inches in diameter
              across Deschutes County — large enough to functionally damage asphalt shingles, metal
              components, and skylights.
            </p>
            <h4 className="font-semibold text-[#122E5F] text-sm mb-2">Signs of hail damage:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                'Circular granule loss on asphalt shingles exposing dark fiberglass mat',
                'Soft, bruised impact points on shingles (like a bruise on fruit)',
                'Circular dent patterns on aluminum gutters, downspouts, and AC fins',
                'Cracked or split ridge cap shingles',
                'Dented or cracked plastic roof vents and pipe boots',
                'Impact damage to skylight frames and seals',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2563eb] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 rounded-lg p-2"><Wind className="w-6 h-6 text-[#2563eb]" /></div>
              <h3 className="text-lg font-bold text-[#122E5F]">Wind Damage</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Central Oregon severe storms regularly include wind gusts of 40 to 70 mph. Wind damage
              often accompanies hail damage from the same storm event and is covered under the same claim.
              Wind creates mechanical damage to shingles different from hail impact — primarily lifting,
              delamination, and physical removal.
            </p>
            <h4 className="font-semibold text-[#122E5F] text-sm mb-2">Signs of wind damage:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                'Missing shingles or bare decking visible from the ground',
                'Lifted shingle tabs with broken factory sealant strip',
                'Creased or folded shingles from wind uplift forces',
                'Displaced ridge cap — the first component lost in high winds',
                'Dislodged or bent ridge vents and other protrusions',
                'Damaged or detached flashing at chimneys, skylights, or valleys',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2563eb] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 rounded-lg p-2"><Snowflake className="w-6 h-6 text-[#2563eb]" /></div>
              <h3 className="text-lg font-bold text-[#122E5F]">Snow and Ice Dam Damage</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Bend, La Pine, and higher-elevation Central Oregon communities experience heavy snow loads
              and freeze-thaw cycles that cause ice dam formation. Ice dams form when heat from the living
              space melts snow on the upper roof, which then refreezes at the cold eave overhang, trapping
              water behind the dam. This water backs up under shingles and infiltrates the decking.
            </p>
            <h4 className="font-semibold text-[#122E5F] text-sm mb-2">Signs of ice dam damage:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                'Water staining on interior ceilings near exterior walls',
                'Peeling paint or bubbling drywall at eave-area ceilings',
                'Lifted or buckled shingles along lower roof edges',
                'Rotted or delaminated roof decking at eave areas',
                'Damaged soffit or fascia from ice expansion',
                'Gutters pulled away from fascia by ice weight',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2563eb] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h3 className="font-bold text-[#122E5F] mb-4">How to Tell the Difference Between Damage Types</h3>
          <div className="grid sm:grid-cols-3 gap-6 text-sm text-gray-700">
            <div>
              <p className="font-semibold text-[#122E5F] mb-2">Hail vs. Wear and Tear</p>
              <p className="leading-relaxed">Hail damage has a definitive event date correlated with NWS storm data. Wear and tear occurs gradually with no event date. Hail leaves discrete impact points; wear produces uniform granule loss across the entire field. An inspector with calibrated measurement tools can distinguish these conclusively.</p>
            </div>
            <div>
              <p className="font-semibold text-[#122E5F] mb-2">Wind vs. Installation Defect</p>
              <p className="leading-relaxed">Wind-lifted shingles show broken sealant strips and typically cluster on windward roof faces. Installation defects — short nailing, improper overlap — appear uniformly across all faces regardless of wind direction. A storm date correlated with weather data distinguishes wind damage from pre-existing conditions.</p>
            </div>
            <div>
              <p className="font-semibold text-[#122E5F] mb-2">Ice Dam vs. Plumbing Leak</p>
              <p className="leading-relaxed">Ice dam water intrusion appears at exterior walls and ceiling intersections, tracks along roof pitch, and correlates with cold weather events. Plumbing leaks appear at consistent locations regardless of weather and are unrelated to temperature. An attic inspection and thermal imaging can distinguish the two definitively.</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Link href="/blog/how-to-spot-hail-damage-central-oregon" className="inline-flex items-center gap-2 text-[#2563eb] hover:underline font-medium text-sm">
            <BookOpen className="w-4 h-4" />
            Read: How to Spot Hail Damage in Central Oregon
          </Link>
        </div>
      </section>

      {/* SECTION 4: UNDERSTANDING YOUR POLICY */}
      <section id="understanding-policy" className="bg-gray-50 border-y border-gray-200 scroll-mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">Understanding Your Insurance Policy</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mb-10">
            Most Oregon homeowners never read their insurance policy until they need to file a claim.
            Understanding four key concepts before you file — ACV vs. RCV, covered vs. excluded perils,
            deductibles, and how to read an adjuster report — will allow you to evaluate your settlement
            accurately and challenge underpayments effectively.
          </p>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#122E5F] mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[#2563eb] shrink-0" />
                ACV vs. RCV: What Your Policy Pays
              </h3>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="font-semibold text-[#122E5F] mb-1">Actual Cash Value (ACV)</p>
                  <p>ACV pays the <em>depreciated value</em> of your old roof. If your 15-year-old roof has a $20,000 replacement cost and is depreciated by 50%, your ACV payout is $10,000 minus your deductible. Many Oregon homeowners are surprised to receive a smaller initial check than expected — this is why.</p>
                  <p className="mt-2 text-gray-600">After installation, submit your completion certificate and invoices to &quot;recover depreciation.&quot; ACV policies allow you to recover the withheld depreciation — but only after completing the repairs.</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="font-semibold text-[#122E5F] mb-1">Replacement Cost Value (RCV)</p>
                  <p>RCV pays the <em>full cost</em> to replace your roof with comparable materials at today&apos;s prices, with no depreciation deduction. RCV policies pay out more and are generally worth the higher premium, especially as your roof ages. Your coverage type is listed on your declarations page under &quot;Roof Settlement Method.&quot;</p>
                </div>
              </div>
              <p className="mt-4 text-sm">
                <Link href="/blog/rcv-vs-acv-roof-insurance" className="text-[#2563eb] hover:underline font-medium">Full guide: RCV vs. ACV Roof Insurance Explained</Link>
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#122E5F] mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#2563eb] shrink-0" />
                What&apos;s Covered vs. What&apos;s Not
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-green-700 mb-1">Typically covered:</p>
                  <ul className="space-y-1 text-gray-700">
                    {['Sudden storm damage from hail, wind, or lightning','Falling trees or debris from a covered storm event','Fire, explosion, or vandalism','Weight of ice, snow, or sleet (most policies)','Emergency repair costs to prevent further damage'].map((item) => (
                      <li key={item} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-700 mb-1">Typically not covered:</p>
                  <ul className="space-y-1 text-gray-700">
                    {['Gradual wear and tear or aging deterioration','Lack of maintenance or neglect','Cosmetic damage with no functional impact','Pre-existing damage from prior storms','Damage caused by improper installation'].map((item) => (
                      <li key={item} className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#122E5F] mb-4 flex items-center gap-2">
                <Home className="w-5 h-5 text-[#2563eb] shrink-0" />
                Understanding Your Deductible
              </h3>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>Your deductible is the amount you pay out of pocket before your insurer pays the remainder. Most Central Oregon homeowners have deductibles of $1,000 to $2,500 for a standard all-peril claim.</p>
                <p>Some policies have a separate, higher <strong>wind/hail deductible</strong> — either a flat dollar amount or a percentage of the insured value (typically 1% to 2%). A 1% wind/hail deductible on a $400,000 home is $4,000. Check your declarations page for a separate deductible line item labeled &quot;wind,&quot; &quot;hail,&quot; or &quot;named storm.&quot;</p>
                <p><strong>Note:</strong> Oregon law prohibits contractors from waiving homeowner deductibles. Any contractor who offers to &quot;cover your deductible&quot; is committing insurance fraud. With FreeRoofPros, you pay your deductible directly to the contractor — no exceptions.</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#122E5F] mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#2563eb] shrink-0" />
                How to Read Your Adjuster&apos;s Report
              </h3>
              <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>Your insurer&apos;s adjuster produces an Xactimate estimate (the industry standard software) detailing every covered line item with a unit cost and quantity. Key things to check:</p>
                <ul className="space-y-2">
                  {[
                    { label: 'RCV total', body: 'The full replacement cost — what the job costs at current market rates.' },
                    { label: 'Depreciation', body: 'Subtracted from RCV to arrive at the ACV payment (if you have ACV coverage).' },
                    { label: 'Deductible', body: 'Subtracted from the payout. Verify this matches your policy declarations page.' },
                    { label: 'Net claim payment', body: 'What your insurer will actually send you initially.' },
                    { label: 'Recoverable depreciation', body: 'Money held back that you can recover after completing repairs (ACV policies).' },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-[#2563eb] mt-0.5 shrink-0" />
                      <span><strong className="text-[#122E5F]">{item.label}:</strong> {item.body}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600">Compare the adjuster&apos;s scope against your contractor&apos;s independent estimate. Any missing line items can be supplemented — FreeRoofPros handles all supplement negotiations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 scroll-mt-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-3">Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-8 max-w-3xl">Comprehensive answers to the most common questions from Central Oregon homeowners about roof insurance claims, the August 2025 hailstorm, and the FreeRoofPros process.</p>
        <div className="max-w-4xl divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
          {[
            { q: 'What is the deadline to file a roof insurance claim in Oregon for the August 2025 hailstorm?', a: 'Central Oregon homeowners affected by the August 5, 2025 hailstorm have until approximately August 2026 to file their insurance claim. Most homeowners insurance policies require filing within one year of the date of loss. Under ORS 742.240, the state statute of limitations for insurance suits is two years — but that does not override your policy\'s contractual reporting requirement. Missing the August 2026 deadline means permanently forfeiting coverage. A free inspection today protects your right to file.' },
            { q: 'Does my homeowners insurance cover hail damage to my roof in Oregon?', a: 'Yes. Standard HO-3 homeowners insurance policies in Oregon cover sudden storm damage including hail, regardless of whether your roof is actively leaking. Hail damage — including granule loss, bruised shingles, dented metal components, and cracked ridge caps — constitutes a covered loss under virtually all Oregon homeowners policies. FreeRoofPros has a 99.7% claim approval rate across Central Oregon. If our inspection finds damage, your claim will be approved.' },
            { q: 'How much will I pay out of pocket for a new roof with insurance?', a: 'With an approved insurance claim, most Central Oregon homeowners pay only their deductible — typically $1,000 to $2,500 for a standard all-peril deductible. Your insurance company covers all remaining costs, including materials, labor, and disposal. If your policy has a wind/hail deductible (a percentage of home value rather than a flat dollar amount), verify that number on your declarations page before filing. Without insurance, a full roof replacement in Bend, Redmond, or La Pine typically costs $10,000 to $22,000.' },
            { q: 'What is the difference between ACV and RCV roof insurance coverage?', a: 'Replacement Cost Value (RCV) pays the full cost to replace your roof with comparable materials at today\'s prices, with no depreciation reduction. Actual Cash Value (ACV) pays the depreciated value of your old roof — meaning an older roof receives a smaller payout because the insurer accounts for age and wear. If you have ACV coverage, your insurer will initially pay a reduced amount and release the held depreciation after you submit proof of completed repairs. Your coverage type is listed on your policy\'s declarations page.' },
            { q: 'How long does the roof insurance claim process take in Central Oregon?', a: 'The full timeline from inspection to completed roof is typically two to four weeks. The free inspection takes one to two days to complete and produce a written report. FreeRoofPros files your claim the same day as your report. Adjuster scheduling typically takes five to ten business days. Under Oregon regulations, insurers must complete their investigation and issue a decision within 30 days of receiving proofs of loss. Once approved, most Central Oregon residential roofs are installed in one to three days.' },
            { q: 'What are the visible signs of hail damage on a roof?', a: 'Common hail damage signs include: circular areas of granule loss on asphalt shingles exposing the dark fiberglass mat beneath; soft, bruised impact points on shingles that feel like a bruise on fruit when pressed; circular dent patterns on aluminum gutters, downspouts, and AC condenser fins; cracked or split ridge cap shingles; and dented or cracked plastic roof vents. Most hail damage is only visible from the rooftop itself — it is not detectable from the ground or street level. Do not attempt your own rooftop inspection; hail-damaged shingles can be slippery and determining insurance-grade damage requires trained eyes and measurement tools.' },
            { q: 'Is FreeRoofPros actually free for homeowners?', a: 'Yes. The inspection, claim documentation, adjuster meeting attendance, supplement negotiations, and all project management are provided at no charge to the homeowner. FreeRoofPros is compensated through the insurance claim settlement — the same contractor labor and materials line items your insurer allocates in every approved claim. You pay only your deductible, which you would owe to any licensed roofing contractor regardless. There are no hidden fees, no markups beyond the insurer-approved scope, and no obligation after the free inspection.' },
            { q: 'What happens if my roof insurance claim is denied?', a: 'A denied claim is not necessarily final. You have several options: (1) Request a written explanation of the denial and review it against your policy language. (2) Provide additional documentation — supplemental inspection reports, weather data, or photo evidence. (3) Request a re-inspection with your contractor present. (4) File a complaint with the Oregon Department of Consumer and Business Services, Division of Financial Regulation, which regulates insurer claims handling. (5) Hire a licensed Oregon public adjuster to independently evaluate and re-present your claim. FreeRoofPros has experience navigating denied claims and can advise you on the appropriate next step for your specific situation.' },
            { q: 'Can I choose my own roofing contractor for an insurance claim in Oregon?', a: 'Yes — absolutely. Oregon homeowners have the legal right to select any licensed, bonded, and insured roofing contractor for their insurance claim repair work. Your insurer cannot require you to use their preferred vendor list. If your insurer\'s adjuster or representative recommends a specific contractor, you may accept or decline that recommendation freely. FreeRoofPros holds an active Oregon Construction Contractors Board (CCB) license, carries full general liability insurance, and maintains workers\' compensation coverage on every crew member.' },
            { q: 'What does the FreeRoofPros free roof inspection include?', a: 'Our free inspection includes: a complete rooftop walk of every field section, hip, valley, and ridge line; hail impact counting and measurement per roofing square (a standard 100 sq ft unit); flashing inspection at all chimneys, skylights, pipe boots, and valleys; gutter and downspout assessment for hail denting; soffit and fascia review for wind or water damage; attic moisture and ventilation check; and timestamped photo documentation of every identified damage point. A written inspection report is delivered within 24 hours of the inspection date. The inspection is 100% free with no obligation to proceed.' },
            { q: 'What is ORS 742.240 and how does it affect my Oregon roof insurance claim?', a: 'ORS 742.240 is Oregon\'s primary insurance claim statute of limitations law. It establishes that an action on an insurance policy must be commenced within two years after the insurer denies the claim, and that late notice alone cannot be used as the sole basis for denial unless the insurer can demonstrate actual prejudice from the delay. This provides some protection for homeowners who discover damage late — but it does not override the specific reporting deadlines in your policy contract. Most Oregon homeowners policies require notice within one year of the loss date, which is separately and contractually enforceable. File before August 2026 to avoid this issue entirely.' },
            { q: 'Why should I have FreeRoofPros present at the adjuster inspection?', a: 'The adjuster inspection is the single most important meeting in the claims process — it determines your payout scope and amount. Adjusters process hundreds of claims and sometimes miss covered items: soft metal components, full ridge cap replacement, skylights, drip edge, pipe boots, and the actual extent of granule loss per square. Having your contractor present ensures every covered item is documented and included in the scope of loss. FreeRoofPros attends every adjuster inspection in person, walks the roof alongside the adjuster, and immediately initiates the supplement process if any covered items are excluded.' },
          ].map((faq, i) => (
            <details key={i} className="group bg-white">
              <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-semibold text-[#122E5F] hover:bg-gray-50 transition-colors">
                <span className="flex items-start gap-3"><HelpCircle className="w-5 h-5 text-[#2563eb] shrink-0 mt-0.5" />{faq.q}</span>
                <span className="shrink-0 w-5 h-5 rounded-full border-2 border-[#2563eb] text-[#2563eb] flex items-center justify-center text-sm font-bold select-none group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-5 pt-1 text-gray-700 leading-relaxed text-sm ml-8">{faq.a}</div>
            </details>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-500">
          More questions?{' '}
          <Link href="/faq" className="text-[#2563eb] hover:underline">Visit our full FAQ page</Link>{' '}or call{' '}
          <a href="tel:541-728-0266" className="text-[#2563eb] hover:underline">(541) 728-0266</a>.
        </p>
      </section>

      {/* SECTION 6: WHY FREEROOFPROS */}
      <section id="why-freeroofpros" className="bg-[#122E5F] text-white scroll-mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Why FreeRoofPros?</h2>
          <p className="text-blue-200 max-w-2xl mb-10 leading-relaxed">
            FreeRoofPros is Central Oregon&apos;s home-market roofing and insurance claim specialist.
            Our office in Terrebonne serves Bend, Redmond, La Pine, and all surrounding communities.
            Here is how our model works — and why it works better for homeowners than managing a claim
            independently.
          </p>
          <div className="bg-white/10 border border-white/20 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-white mb-3">How the Free-to-Homeowners Model Works</h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-3">
              When your insurance claim is approved, the settlement includes a line-item allocation for
              contractor labor and materials — this is true for every approved storm damage claim,
              regardless of whether you hire FreeRoofPros or another contractor. Our compensation comes
              from that same allocation.
            </p>
            <p className="text-blue-100 text-sm leading-relaxed mb-3">
              Because we handle the documentation, claim filing, adjuster coordination, supplement
              negotiations, and installation in-house, we eliminate the fragmented process most homeowners
              experience when managing inspectors, claim consultants, and contractors separately. That
              efficiency allows us to provide the full service at no additional cost to you beyond the
              deductible you owe regardless.
            </p>
            <p className="text-blue-100 text-sm leading-relaxed">
              We never waive deductibles (which is illegal under Oregon law), never inflate claims, and
              never recommend filing for marginal damage that does not meet the threshold for a clean
              approval. Our 99.7% claim approval rate is built on honest assessments, not aggressive
              filing.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { icon: ShieldCheck, title: 'Oregon CCB Licensed', body: 'Active Oregon Construction Contractors Board (CCB) license, verified current. License number available upon request.' },
              { icon: FileText, title: 'Fully Insured', body: 'General liability insurance and workers\' compensation coverage on every crew member. Certificates provided on request.' },
              { icon: Star, title: 'Manufacturer Certified', body: 'Certified installer for major shingle manufacturers. Manufacturer warranty on materials plus our workmanship warranty.' },
              { icon: MapPin, title: 'Central Oregon Based', body: 'Our Terrebonne office at 10801 NW 43rd St puts us 20 minutes from Bend — responsive scheduling, local accountability.' },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 border border-white/20 rounded-xl p-5">
                <item.icon className="w-6 h-6 text-blue-300 mb-3" />
                <h3 className="font-semibold text-white mb-2 text-sm">{item.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <h3 className="text-lg font-bold text-white mb-6">The Process: Inspection to New Roof</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
            {[
              { step: '01', icon: Search, title: 'Free Inspection', body: 'Full rooftop inspection with timestamped photos and written report within 24 hours. No cost, no obligation.' },
              { step: '02', icon: FileText, title: 'Damage Report', body: 'Professional damage report using insurance-standard formats. Storm data correlation for your specific address.' },
              { step: '03', icon: ClipboardList, title: 'Claim Filing', body: 'We file your claim with all required documentation. All insurer communication handled by our specialists.' },
              { step: '04', icon: Users, title: 'Adjuster Meeting', body: 'We attend the adjuster inspection in person to ensure complete scope documentation and coverage.' },
              { step: '05', icon: Hammer, title: 'Installation', body: 'Licensed crew installs your new roof. Full cleanup, warranty documentation, and final walkthrough included.' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-[#2563eb] text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center mb-4">{item.step}</div>
                <item.icon className="w-6 h-6 text-blue-300 mb-3" />
                <h3 className="font-semibold text-white mb-2 text-sm">{item.title}</h3>
                <p className="text-sm text-blue-100 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { quote: 'FreeRoofPros handled everything — inspection, claim, adjuster meeting, and installation. I paid my deductible and got a brand new roof. Total time from first call to completed roof was 18 days.', author: 'Sarah K.', location: 'Bend, OR' },
              { quote: 'I was skeptical that anything could really be free, but they were completely transparent about how their model works. Outstanding communication throughout. The crew finished in one day.', author: 'Mike T.', location: 'Redmond, OR' },
              { quote: 'After the August storm I figured I had plenty of time. FreeRoofPros told me the August 2026 deadline was real and I needed to act now. Glad I did — the roof had more damage than I thought.', author: 'Patricia L.', location: 'La Pine, OR' },
            ].map((t) => (
              <div key={t.author} className="bg-white/10 border border-white/20 rounded-xl p-5">
                <div className="flex gap-1 mb-3">{[1,2,3,4,5].map((s) => (<Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />))}</div>
                <p className="text-blue-100 text-sm leading-relaxed mb-3 italic">&quot;{t.quote}&quot;</p>
                <p className="text-sm font-semibold text-white">{t.author},{' '}<span className="font-normal text-blue-300">{t.location}</span></p>
              </div>
            ))}
          </div>
          <div className="bg-[#2563eb] rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Ready to Find Out If Your Roof Qualifies?</h3>
            <p className="text-blue-100 mb-5 text-sm">Free inspection. No obligation. Written report within 24 hours. August 2026 deadline — act now.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="#lead-form" className="inline-flex items-center gap-2 bg-white text-[#122E5F] hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors">
                <ClipboardList className="w-5 h-5" />Schedule Free Inspection
              </a>
              <a href="tel:541-728-0266" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20">
                <Phone className="w-5 h-5" />Call (541) 728-0266
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: SERVICE AREAS */}
      <section id="service-areas" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 scroll-mt-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">Service Areas</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mb-10">
          FreeRoofPros serves all of Central Oregon from our Terrebonne office. Our three primary
          service cities — Bend, Redmond, and La Pine — each have dedicated pages with city-specific
          storm information, local neighborhood coverage, and claim resources.
        </p>
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {[
            { city: 'Bend', href: '/bend-or', description: 'Largest city in Deschutes County. Neighborhoods from Summit West and Awbrey Butte to SE Bend and Pilot Butte were all affected by the August 2025 hailstorm.', note: '20 minutes from our Terrebonne office' },
            { city: 'Redmond', href: '/redmond-or', description: 'Redmond sits directly in the August 2025 hailstorm track. The storm dropped significant hail across both residential and commercial areas of Redmond.', note: '15 minutes from our Terrebonne office' },
            { city: 'La Pine', href: '/la-pine-or', description: 'La Pine homeowners face both hail and heavy snow load risks. The southern Deschutes County community was within the affected storm corridor.', note: '45 minutes from our Terrebonne office' },
          ].map((area) => (
            <Link key={area.city} href={area.href} className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-[#2563eb] hover:bg-blue-50 transition-colors group">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-[#2563eb] shrink-0" />
                <h3 className="font-bold text-[#122E5F] text-lg group-hover:text-[#2563eb] transition-colors">{area.city}, OR</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{area.description}</p>
              <p className="text-xs text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3" />{area.note}</p>
              <div className="mt-4 flex items-center gap-1 text-[#2563eb] text-sm font-medium group-hover:gap-2 transition-all">View {area.city} page <ArrowRight className="w-4 h-4" /></div>
            </Link>
          ))}
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold text-[#122E5F] mb-4">Additional Service Communities</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {['Terrebonne, OR','Sisters, OR','Sunriver, OR','Prineville, OR','Tumalo, OR','Alfalfa, OR','Powell Butte, OR','Crooked River Ranch, OR','Culver, OR'].map((community) => (
              <div key={community} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-[#2563eb] shrink-0" /><span>{community}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Not sure if we serve your area?{' '}
            <a href="tel:541-728-0266" className="text-[#2563eb] hover:underline font-medium">Call (541) 728-0266</a>{' '}
            — we typically respond within a few hours.
          </p>
        </div>
      </section>

      {/* RELATED RESOURCES */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Related Resources</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/blog/central-oregon-hailstorm-2025', icon: CloudLightning, title: 'August 2025 Hailstorm Guide', sub: 'Storm overview and impact areas' },
              { href: '/blog/filing-roof-insurance-claim-oregon-guide', icon: FileText, title: 'Oregon Claims Filing Guide', sub: 'Complete step-by-step walkthrough' },
              { href: '/blog/rcv-vs-acv-roof-insurance', icon: DollarSign, title: 'RCV vs. ACV Explained', sub: 'Policy coverage types compared' },
              { href: '/blog/how-long-to-file-roof-insurance-claim', icon: Clock, title: 'Claim Deadline Guide', sub: 'Oregon filing windows by policy type' },
              { href: '/blog/signs-of-hail-damage-on-roof', icon: Search, title: 'Signs of Hail Damage', sub: 'What to look for after a storm' },
              { href: '/blog/what-to-expect-insurance-adjuster-roof-inspection', icon: Users, title: 'Adjuster Inspection Guide', sub: 'How to prepare and what happens' },
              { href: '/blog/how-to-negotiate-roof-insurance-claim', icon: Hammer, title: 'Negotiate Your Claim', sub: 'Supplement process and dispute tips' },
              { href: '/blog/roof-insurance-claim-denied', icon: AlertTriangle, title: 'Claim Denied? Next Steps', sub: 'Appeals, re-inspections, public adjusters' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-3 border border-gray-200 rounded-xl p-4 hover:border-[#2563eb] hover:bg-blue-50 transition-colors group bg-white">
                <link.icon className="w-5 h-5 text-[#2563eb] shrink-0" />
                <div>
                  <p className="font-semibold text-[#122E5F] text-sm group-hover:text-[#2563eb] transition-colors">{link.title}</p>
                  <p className="text-xs text-gray-500">{link.sub}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="lead-form" className="bg-[#122E5F] text-white py-14 sm:py-16 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#2563eb] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              August 2026 deadline — act before it closes
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Schedule Your Free Central Oregon Roof Inspection</h2>
            <p className="text-blue-200 leading-relaxed">No cost, no obligation. Find out within 24 hours whether your home qualifies for insurance-covered roof replacement. Our team serves Bend, Redmond, La Pine, and all of Central Oregon.</p>
          </div>
          <LeadForm />
          <p className="text-center text-blue-300 text-sm mt-6">
            Prefer to call?{' '}
            <a href="tel:541-728-0266" className="text-white font-semibold hover:underline">(541) 728-0266</a>
            &nbsp;|&nbsp; Email:{' '}
            <a href="mailto:info@freeroofpros.com" className="text-white font-semibold hover:underline">info@freeroofpros.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
