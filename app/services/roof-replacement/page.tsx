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
  Star,
} from 'lucide-react';
import { LeadForm } from '@/components/sections/LeadForm';

// ─── Metadata (server component — no 'use client') ───────────────────────────

export const metadata: Metadata = {
  title: 'Insurance-Covered Roof Replacement | Free Inspection | FreeRoofPros',
  description:
    'Need a roof replacement? Most storm-damaged roofs qualify for full insurance coverage. Free inspection, 99.7% claim approval rate. Call 541-337-5734.',
  alternates: {
    canonical: 'https://www.freeroofpros.com/services/roof-replacement',
  },
  openGraph: {
    title: 'Insurance-Covered Roof Replacement | Free Inspection | FreeRoofPros',
    description:
      'Need a roof replacement? Most storm-damaged roofs qualify for full insurance coverage. Free inspection, 99.7% claim approval rate. Call 541-337-5734.',
    url: 'https://www.freeroofpros.com/services/roof-replacement',
    images: [
      {
        url: 'https://www.freeroofpros.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Free Roof Pros — Insurance-Covered Roof Replacement',
      },
    ],
  },
};

// ─── JSON-LD schemas ──────────────────────────────────────────────────────────

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Insurance-Covered Roof Replacement',
  serviceType: 'Roof Replacement',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Free Roof Pros',
    url: 'https://www.freeroofpros.com',
    telephone: '541-337-5734',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '10801 NW 43rd Street',
      addressLocality: 'Terrebonne',
      addressRegion: 'OR',
      postalCode: '97760',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Bend', addressRegion: 'OR' },
    { '@type': 'City', name: 'Redmond', addressRegion: 'OR' },
    { '@type': 'City', name: 'La Pine', addressRegion: 'OR' },
    { '@type': 'City', name: 'Dallas', addressRegion: 'TX' },
    { '@type': 'City', name: 'Fort Worth', addressRegion: 'TX' },
  ],
  description:
    'Full roof replacement covered by your homeowners insurance. Free inspection, 99.7% claim approval rate.',
  url: 'https://www.freeroofpros.com/services/roof-replacement',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Will my homeowners insurance cover a full roof replacement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most standard homeowners insurance policies cover roof replacement when damage is caused by a sudden, unexpected event such as a hailstorm, high winds, or a falling tree. Damage from normal wear and tear or neglect is typically excluded. Our free inspection determines whether your roof qualifies — we have a 99.7% claim approval rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a roof replacement cost without insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The national average for a full roof replacement ranges from $8,000 to $20,000 depending on roof size, pitch, materials, and region. With insurance, most homeowners pay only their deductible — often $1,000–$2,500 — while the insurance company covers the rest.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between RCV and ACV in a roof insurance claim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RCV (Replacement Cost Value) pays for a brand-new roof of like kind and quality, while ACV (Actual Cash Value) subtracts depreciation from that amount. Most policies default to ACV on the initial payout and release the depreciation holdback once replacement is complete. We help you navigate both policy types.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a roof replacement take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most residential roof replacements are completed in one to three days. Larger homes, complex roof lines, or specialty materials like metal roofing may take slightly longer. We handle all coordination so you experience minimal disruption.',
      },
    },
    {
      '@type': 'Question',
      name: 'What roofing materials do you install?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We install asphalt 3-tab shingles, architectural (dimensional) shingles, Class 4 impact-resistant shingles, metal roofing (standing seam and corrugated), and synthetic slate. Our team recommends the best option for your climate, insurance coverage, and budget.',
      },
    },
    {
      '@type': 'Question',
      name: 'What warranty comes with a new roof from Free Roof Pros?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You receive two layers of protection: the manufacturer warranty (25–50 years depending on the shingle line) covers material defects, and our workmanship warranty covers installation quality. Exact terms are provided in writing before any work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the August 2026 insurance deadline for Central Oregon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The major hailstorm that struck Central Oregon in August 2025 created a one-year window to file an insurance claim. That deadline is August 2026. Homeowners in Bend, Redmond, La Pine, Terrebonne, Sisters, Prineville, and the surrounding area should schedule a free inspection now to avoid missing the filing cutoff.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to be home during the roof inspection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Our inspector only needs access to your roof exterior and, optionally, your attic. Many homeowners leave a gate unlocked and receive a full photo report by email the same day. If you prefer to be present, we are happy to schedule around your availability.',
      },
    },
  ],
};

// ─── Page component ───────────────────────────────────────────────────────────

export default function RoofReplacement() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#122E5F] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#2563eb] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              Central Oregon: August 2026 insurance deadline approaching
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              Insurance-Covered Roof Replacement
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              Storm damage turns a $15,000 roof replacement into a deductible-only expense. We handle
              the inspection, documentation, and claim filing — you just pick your shingles. Our
              99.7% claim approval rate means your project moves forward with confidence.
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
                href="tel:541-337-5734"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20"
              >
                <Phone className="w-5 h-5" />
                541-337-5734
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────────── */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Claim Approval Rate', value: '99.7%' },
              { label: 'Licensed In', value: 'All 50 States' },
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

      {/* ── WHEN DOES INSURANCE PAY? ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">
              When Does Insurance Pay for a Full Roof Replacement?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Homeowners insurance is designed to protect you from sudden, accidental damage — not
              from aging out a roof. That distinction is what determines whether your claim gets
              approved or denied.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              If a hailstorm, windstorm, tornado, or falling tree damages your roof, you almost
              certainly have a covered claim. The damage does not need to cause an immediate leak to
              qualify — granule loss, dented flashing, and cracked shingles are all legitimate
              storm-damage indicators that insurers accept.
            </p>
            <h3 className="text-lg font-semibold text-[#122E5F] mb-3">Covered perils typically include:</h3>
            <ul className="space-y-2 mb-6">
              {[
                'Hail (any size — even ½-inch hail can cause functional damage)',
                'Wind and windstorm events, including microbursts',
                'Fallen trees or branches',
                'Ice dams caused by sudden freeze events',
                'Lightning strikes and fire',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#2563eb] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-[#122E5F] mb-3">What insurance does NOT cover:</h3>
            <ul className="space-y-2">
              {[
                'Normal wear and tear or granule loss from age',
                'Pre-existing damage not reported to your insurer',
                'Neglect or lack of maintenance',
                'Cosmetic-only damage (on some policies)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <span className="w-5 h-5 rounded-full border-2 border-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="block w-2.5 h-0.5 bg-red-400 rounded" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 lg:sticky lg:top-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
              <h3 className="text-lg font-bold text-amber-800">Central Oregon: Act Before August 2026</h3>
            </div>
            <p className="text-amber-900 leading-relaxed mb-4">
              The August 2025 hailstorm that moved through Bend, Redmond, La Pine, Terrebonne,
              Sisters, Prineville, and Madras left widespread roof damage across Central Oregon. Most
              homeowners insurance policies allow one year from the date of loss to file a claim.
            </p>
            <p className="text-amber-900 leading-relaxed mb-5">
              That means the filing window closes in <strong>August 2026</strong>. If you have not
              had your roof inspected, do not wait — once the deadline passes, your insurer can
              legally deny any storm-related claim.
            </p>
            <a
              href="tel:541-337-5734"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors w-full justify-center"
            >
              <Phone className="w-4 h-4" />
              Call 541-337-5734 Now
            </a>
          </div>
        </div>
      </section>

      {/* ── COST SECTION ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">
            How Much Does a Roof Replacement Cost?
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mb-8">
            A full residential roof replacement in the United States typically costs between{' '}
            <strong>$8,000 and $20,000</strong>, with the national average around $12,000–$14,000
            for a standard 2,000-square-foot home using architectural shingles. Larger homes, steep
            pitches, and premium materials push costs higher.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: 'With Insurance (RCV Policy)',
                cost: 'Your Deductible Only',
                description:
                  'Replacement Cost Value policies pay for a brand-new roof of like kind and quality. After your deductible ($1,000–$2,500 for most homeowners), your insurer covers the full balance.',
                highlight: true,
              },
              {
                title: 'With Insurance (ACV Policy)',
                cost: 'Deductible + Depreciation',
                description:
                  'Actual Cash Value policies deduct depreciation from the payout. A 15-year-old roof may carry significant depreciation, leaving a gap between the ACV check and actual replacement cost. We help you understand your exposure before work begins.',
                highlight: false,
              },
              {
                title: 'Without Insurance',
                cost: '$8,000 – $20,000+',
                description:
                  'Out-of-pocket costs vary widely by region, material, and roof complexity. If your damage occurred in the past year, there is a strong chance insurance will cover it — even if you have not filed yet.',
                highlight: false,
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`rounded-xl p-6 border ${
                  card.highlight
                    ? 'bg-[#122E5F] text-white border-[#122E5F]'
                    : 'bg-white text-gray-700 border-gray-200'
                }`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-wide mb-2 ${
                    card.highlight ? 'text-blue-300' : 'text-[#2563eb]'
                  }`}
                >
                  {card.title}
                </p>
                <p
                  className={`text-xl font-bold mb-3 ${
                    card.highlight ? 'text-white' : 'text-[#122E5F]'
                  }`}
                >
                  {card.cost}
                </p>
                <p className={`text-sm leading-relaxed ${card.highlight ? 'text-blue-100' : ''}`}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Not sure which policy type you have?{' '}
            <Link href="/services/insurance-claims" className="text-[#2563eb] hover:underline">
              Learn how we navigate the insurance claims process
            </Link>{' '}
            and review your Declaration Page with you at no charge.
          </p>
        </div>
      </section>

      {/* ── 5-STEP PROCESS ───────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-2">
          Our 5-Step Roof Replacement Process
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl">
          From the moment you call us to the day your new roof is installed, we handle every detail.
          Most homeowners never need to call their insurer directly — we do that for you.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              step: '01',
              icon: Search,
              title: 'Free Roof Inspection',
              description:
                'A certified inspector evaluates your entire roof — field, ridge, valleys, flashing, gutters, and soffits. We document every impact point with timestamped photographs.',
            },
            {
              step: '02',
              icon: FileText,
              title: 'Damage Documentation',
              description:
                'We compile a professional damage report with weather data, impact measurements, and photographs that insurers accept without pushback.',
            },
            {
              step: '03',
              icon: ClipboardList,
              title: 'Insurance Claim Filing',
              description:
                'Our claim specialists file your insurance claim with the correct damage codes and supporting evidence, giving your claim the best possible foundation.',
            },
            {
              step: '04',
              icon: Users,
              title: 'Adjuster Meeting',
              description:
                'We meet your insurance adjuster on-site and walk the roof together, ensuring every covered item is included in the scope of loss.',
            },
            {
              step: '05',
              icon: Hammer,
              title: 'Roof Installation',
              description:
                'Our licensed installation crews complete your new roof — typically in one to three days — with full clean-up and a final walkthrough before we leave.',
            },
          ].map((item) => (
            <div key={item.step} className="relative">
              <div className="bg-[#2563eb] text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center mb-4">
                {item.step}
              </div>
              <item.icon className="w-6 h-6 text-[#122E5F] mb-3" />
              <h3 className="font-semibold text-[#122E5F] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Start Step 1 — Free Inspection
          </a>
          <Link
            href="/services/storm-damage-repair"
            className="inline-flex items-center gap-2 border border-[#2563eb] text-[#2563eb] hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Learn About Storm Damage Repair
          </Link>
        </div>
      </section>

      {/* ── MATERIALS ────────────────────────────────────────────────────── */}
      <section className="bg-[#122E5F] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Roofing Materials We Install</h2>
          <p className="text-blue-200 mb-10 max-w-2xl">
            We work with all major shingle manufacturers so you can choose materials that match your
            home, your climate, and your insurance coverage. Central Oregon's hail exposure makes
            Class 4 impact-resistant shingles a particularly smart choice.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Architectural (Dimensional) Shingles',
                detail:
                  'The most popular choice for homeowners replacing storm-damaged roofs. Multi-layer construction provides a natural shadow line and carries 30–50 year manufacturer warranties. Available from GAF, Owens Corning, CertainTeed, and others.',
              },
              {
                title: 'Class 4 Impact-Resistant Shingles',
                detail:
                  'Tested to withstand 2-inch steel ball impacts without cracking, Class 4 shingles are ideal for hail-prone regions like Central Oregon. Many insurers offer a premium discount of 10–30% for homes with Class 4 roofing.',
              },
              {
                title: 'Standing Seam Metal Roofing',
                detail:
                  'A premium option with a lifespan of 40–70 years. Standing seam panels interlock without exposed fasteners, creating a weather-tight surface that handles heavy snow loads and wide temperature swings — an ideal fit for the Central Oregon high desert.',
              },
              {
                title: '3-Tab Asphalt Shingles',
                detail:
                  'A cost-effective entry-level option suitable for lower-pitch roofs and rental properties. 3-tab shingles carry 20–25 year warranties and are widely accepted by insurance adjusters as a standard replacement material.',
              },
              {
                title: 'Corrugated Metal Panels',
                detail:
                  'A durable, low-maintenance option common on agricultural and rural properties across Central Oregon. Available in galvanized steel and Galvalume, with a wide range of rib profiles and colors.',
              },
              {
                title: 'Synthetic Shake & Slate',
                detail:
                  'Engineered polymer products that replicate the look of wood shake or slate without the weight or maintenance concerns. Many synthetic options carry Class 4 impact ratings, offering both aesthetics and durability.',
              },
            ].map((mat) => (
              <div key={mat.title} className="bg-white/10 rounded-xl p-5 border border-white/10">
                <h3 className="font-semibold text-white mb-2">{mat.title}</h3>
                <p className="text-sm text-blue-100 leading-relaxed">{mat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WARRANTIES ───────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">
              Warranties &amp; Guarantees
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Every roof we install comes with two independent layers of protection: the manufacturer
              warranty on the materials themselves, and our own workmanship warranty on the
              installation. Both are provided in writing before your project begins — no surprises.
            </p>
            <div className="space-y-5">
              <div className="flex gap-4">
                <ShieldCheck className="w-8 h-8 text-[#2563eb] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#122E5F] mb-1">Manufacturer Material Warranty</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Depending on the shingle line, manufacturer warranties range from{' '}
                    <strong>25 to 50 years</strong> and cover defects in materials including
                    premature granule loss, cracking, and manufacturing flaws. Enhanced "system"
                    warranties (e.g., GAF Golden Pledge, Owens Corning Platinum) are available when
                    all roofing components come from the same manufacturer.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <ShieldCheck className="w-8 h-8 text-[#2563eb] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#122E5F] mb-1">Workmanship Warranty</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our workmanship warranty covers installation quality — proper nailing patterns,
                    flashing integration, underlayment placement, and ridge cap installation. If a
                    leak develops due to an installation error, we come back and fix it. Details and
                    term length are specified in your project contract.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <ShieldCheck className="w-8 h-8 text-[#2563eb] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#122E5F] mb-1">Licensed &amp; Insured in All 50 States</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Free Roof Pros holds active contractor licenses and carries general liability and
                    workers' compensation insurance in every state we operate. Your homeowners
                    insurance requires this — and we are always compliant.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#122E5F] mb-2">What Homeowners Say</h3>
            {[
              {
                quote:
                  'After the August hailstorm I was dreading the whole insurance process. Free Roof Pros handled everything from start to finish — inspection, claim, adjuster meeting. My new roof was on in two days. Couldn\'t have been smoother.',
                author: 'James R.',
                location: 'Bend, OR',
              },
              {
                quote:
                  'My adjuster initially only approved a partial repair. Free Roof Pros brought their own documentation and got the scope upgraded to a full replacement. I only paid my deductible.',
                author: 'Maria S.',
                location: 'Fort Worth, TX',
              },
              {
                quote:
                  'I had no idea my 12-year-old roof qualified for full replacement until Free Roof Pros did a free inspection after a windstorm. The whole project was approved in under two weeks.',
                author: 'David K.',
                location: 'Indianapolis, IN',
              },
            ].map((t) => (
              <div key={t.author} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">"{t.quote}"</p>
                <p className="text-sm font-semibold text-[#122E5F]">
                  – {t.author},{' '}
                  <span className="font-normal text-gray-500">{t.location}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS WE SERVE ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-3">Areas We Serve</h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl mb-8">
            Free Roof Pros is headquartered in Terrebonne, Oregon, making Central Oregon our home
            market. We are also actively serving homeowners in major metro markets across the country.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-[#2563eb]" />
                <h3 className="font-semibold text-[#122E5F]">Central Oregon (Primary Market)</h3>
              </div>
              <ul className="space-y-1.5 text-gray-700 text-sm">
                {['Bend', 'Redmond', 'La Pine', 'Terrebonne', 'Sisters', 'Prineville', 'Madras', 'Sunriver'].map(
                  (city) => (
                    <li key={city} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#2563eb] shrink-0" />
                      {city}, OR
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-[#2563eb]" />
                <h3 className="font-semibold text-[#122E5F]">Texas — DFW Metro</h3>
              </div>
              <ul className="space-y-1.5 text-gray-700 text-sm">
                {['Dallas', 'Fort Worth', 'Plano', 'Arlington', 'Irving'].map((city) => (
                  <li key={city} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2563eb] shrink-0" />
                    {city}, TX
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-[#2563eb]" />
                <h3 className="font-semibold text-[#122E5F]">Additional Markets</h3>
              </div>
              <ul className="space-y-1.5 text-gray-700 text-sm">
                {[
                  { city: 'St. Louis', state: 'MO' },
                  { city: 'Indianapolis', state: 'IN' },
                  { city: 'Kansas City', state: 'MO' },
                  { city: 'Nashville', state: 'TN' },
                ].map((loc) => (
                  <li key={loc.city} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2563eb] shrink-0" />
                    {loc.city}, {loc.state}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION ────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-8">
          Questions about the insurance process, materials, or timeline? We have answers.
        </p>
        <div className="max-w-3xl divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
          {[
            {
              q: 'Will my homeowners insurance cover a full roof replacement?',
              a: 'Most standard homeowners insurance policies cover roof replacement when damage is caused by a sudden, unexpected event such as a hailstorm, high winds, or a falling tree. Normal wear and tear, neglect, and pre-existing damage are typically excluded. Our free inspection determines whether your roof qualifies — and our 99.7% claim approval rate means that if we say you have a claim, you have a claim.',
            },
            {
              q: 'How much does a roof replacement cost without insurance?',
              a: 'The national average for a full residential roof replacement ranges from $8,000 to $20,000 depending on roof size, pitch, material, and region. With insurance, most homeowners pay only their deductible — typically $1,000 to $2,500 — while the insurer covers the rest. If your damage occurred within the past year, there is a strong chance insurance will pay.',
            },
            {
              q: 'What is the difference between RCV and ACV in an insurance claim?',
              a: 'Replacement Cost Value (RCV) pays for a brand-new roof of like kind and quality with no depreciation deducted. Actual Cash Value (ACV) subtracts depreciation — so an older roof receives less money up front. Most RCV policies pay the ACV first, then release the depreciation holdback once replacement is complete. We review your policy with you before filing so there are no surprises.',
            },
            {
              q: 'How long does the roof replacement process take?',
              a: 'The inspection and claim filing typically take one to two weeks. Once your claim is approved, we schedule installation. Most residential roof replacements are complete in one to three days. Larger homes or complex roof lines may take longer. We give you a specific timeline before work begins.',
            },
            {
              q: 'What is the August 2026 deadline for Central Oregon homeowners?',
              a: 'The major hailstorm that struck Central Oregon in August 2025 triggered a one-year insurance filing window. That window closes in August 2026. If you live in or near Bend, Redmond, La Pine, Terrebonne, Sisters, Prineville, or Madras and have not had your roof inspected, schedule your free inspection now — once the deadline passes, your insurer can deny storm-related claims.',
            },
            {
              q: 'Do I need to be home for the roof inspection?',
              a: 'No. Our inspector only needs exterior access to your roof. Many homeowners simply leave a gate unlocked and receive a detailed photo report by email the same day. If you prefer to be present, we are happy to schedule around you.',
            },
            {
              q: 'What roofing materials are covered by insurance?',
              a: 'Insurance pays for replacement materials of like kind and quality — generally the same type and grade of shingle you currently have. However, if you choose to upgrade to Class 4 impact-resistant shingles, we can often apply for an extended or enhanced settlement to offset the cost difference, and many insurers offer ongoing premium discounts for Class 4 roofs.',
            },
            {
              q: 'What warranty do I get on my new roof?',
              a: 'You receive two warranties: a manufacturer material warranty (25–50 years depending on the product) covering defects in the shingles themselves, and our workmanship warranty covering installation quality. Both are provided in writing before any work begins.',
            },
          ].map((faq) => (
            <details key={faq.q} className="group bg-white">
              <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-semibold text-[#122E5F] hover:bg-gray-50 transition-colors">
                <span>{faq.q}</span>
                <span className="shrink-0 w-5 h-5 rounded-full border-2 border-[#2563eb] text-[#2563eb] flex items-center justify-center text-sm font-bold select-none group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 pt-1 text-gray-700 leading-relaxed text-sm">{faq.a}</div>
            </details>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Have a question not listed here?{' '}
          <Link href="/services/insurance-claims" className="text-[#2563eb] hover:underline">
            See our full insurance claims guide
          </Link>{' '}
          or call us at{' '}
          <a href="tel:541-337-5734" className="text-[#2563eb] hover:underline">
            541-337-5734
          </a>
          .
        </p>
      </section>

      {/* ── LEAD FORM ────────────────────────────────────────────────────── */}
      <section
        id="lead-form"
        className="bg-[#122E5F] text-white py-14 sm:py-16 scroll-mt-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Schedule Your Free Roof Inspection
            </h2>
            <p className="text-blue-200 leading-relaxed">
              No cost, no obligation. Find out in 24 hours whether your roof qualifies for
              insurance-covered replacement. We serve Central Oregon and markets across the country.
            </p>
          </div>
          <LeadForm />
          <p className="text-center text-blue-300 text-sm mt-6">
            Prefer to call?{' '}
            <a href="tel:541-337-5734" className="text-white font-semibold hover:underline">
              541-337-5734
            </a>{' '}
            &nbsp;|&nbsp; Email:{' '}
            <a href="mailto:info@freeroofpros.com" className="text-white font-semibold hover:underline">
              info@freeroofpros.com
            </a>
          </p>
        </div>
      </section>

      {/* ── BOTTOM CTA / NAV LINKS ───────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          <Link
            href="/services/insurance-claims"
            className="flex items-center gap-3 border border-gray-200 rounded-xl p-5 hover:border-[#2563eb] hover:bg-blue-50 transition-colors group"
          >
            <FileText className="w-6 h-6 text-[#2563eb] shrink-0" />
            <div>
              <p className="font-semibold text-[#122E5F] group-hover:text-[#2563eb] transition-colors">
                Insurance Claims Guide
              </p>
              <p className="text-sm text-gray-500">Step-by-step claim filing process</p>
            </div>
          </Link>
          <Link
            href="/services/storm-damage-repair"
            className="flex items-center gap-3 border border-gray-200 rounded-xl p-5 hover:border-[#2563eb] hover:bg-blue-50 transition-colors group"
          >
            <Hammer className="w-6 h-6 text-[#2563eb] shrink-0" />
            <div>
              <p className="font-semibold text-[#122E5F] group-hover:text-[#2563eb] transition-colors">
                Storm Damage Repair
              </p>
              <p className="text-sm text-gray-500">Hail, wind, and emergency repairs</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
