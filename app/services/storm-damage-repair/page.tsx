import type { Metadata } from 'next';
import Link from 'next/link';
import { LeadForm } from '@/components/sections/LeadForm';
import {
  AlertCircle,
  CloudRain,
  Wind,
  Shield,
  Clock,
  CheckCircle,
  Phone,
  MapPin,
  Hammer,
  FileText,
  Home,
  ThumbsUp,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Storm Damage Roof Repair | 24-Hour Response | FreeRoofPros',
  description:
    'Hail, wind, or storm damage? Get emergency roof repair with 24-hour response. Free inspection, insurance claim help, 99.7% approval rate. Call 541-728-0266.',
  alternates: {
    canonical: 'https://www.freeroofpros.com/services/storm-damage-repair',
  },
  openGraph: {
    title: 'Storm Damage Roof Repair | 24-Hour Response | FreeRoofPros',
    description:
      'Hail, wind, or storm damage? Get emergency roof repair with 24-hour response. Free inspection, insurance claim help, 99.7% approval rate. Call 541-728-0266.',
    url: 'https://www.freeroofpros.com/services/storm-damage-repair',
    images: [
      {
        url: 'https://www.freeroofpros.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FreeRoofPros Storm Damage Roof Repair',
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function StormDamageRepair() {
  // -------------------------------------------------------------------------
  // JSON-LD: Service schema
  // -------------------------------------------------------------------------
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Storm Damage Roof Repair',
    serviceType: 'Emergency Roof Repair',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Free Roof Pros',
      url: 'https://www.freeroofpros.com',
      telephone: '541-728-0266',
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
      '24-hour emergency storm damage roof repair. Hail, wind, and fallen tree damage. Free inspection and insurance claim assistance.',
    url: 'https://www.freeroofpros.com/services/storm-damage-repair',
  };

  // -------------------------------------------------------------------------
  // JSON-LD: FAQPage schema
  // -------------------------------------------------------------------------
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I know if my roof has hail damage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Common signs of hail damage include dented or cracked shingles, granule loss (look for granules accumulating in gutters or downspouts), dented metal flashing or vents, and visible bruising or soft spots on shingles. You may also notice dents on your AC unit, gutters, or siding. Because many types of hail damage are not visible from the ground, a professional inspection is strongly recommended after any significant storm.',
        },
      },
      {
        '@type': 'Question',
        name: 'How soon do I need to file a storm damage insurance claim?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most insurance policies require you to file a claim within one to two years of the storm event. For the August 2025 Central Oregon hailstorm, homeowners have until approximately August 2026 to file a claim. However, waiting too long can complicate your claim — delay allows secondary damage to worsen, and insurers may argue that later damage was due to neglect rather than the storm. We recommend scheduling a free inspection and starting your claim as soon as possible.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does emergency roof tarping involve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Emergency roof tarping is a temporary waterproofing measure applied immediately after storm damage to prevent water from entering your home while permanent repairs are arranged. Our crew installs heavy-duty tarps secured over damaged areas, protecting your interior from further water intrusion, mold growth, and structural damage. We are available 24/7 for emergency tarp installation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will my homeowner\'s insurance cover storm damage roof repair?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In most cases, yes. Hail damage, wind damage, and damage from fallen trees or debris are typically covered perils under standard homeowner\'s insurance policies. Our team has a 99.7% claim approval rate. We assist you through every step — damage documentation, claim filing, and meeting with your insurance adjuster — to maximize your approved claim amount.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of storm damage does Free Roof Pros repair?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We repair all types of storm-related roof damage including: hail damage (dented shingles, cracked tiles, granule loss), wind damage (lifted or missing shingles, exposed underlayment, damaged ridge caps), fallen tree and debris damage (punctures, structural deck damage), and ice dam damage (water infiltration under shingles from ice buildup at the eaves). We handle both partial repairs and full roof replacements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it safe for me to inspect my own roof after a storm?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We strongly advise against walking on your roof after a storm — damaged shingles and wet surfaces create serious fall hazards. Instead, do a safe ground-level inspection: check your gutters for accumulated granules, look for missing or visibly damaged shingles with binoculars, inspect metal surfaces like vents and AC units for dents, and check your attic for water stains or daylight. Then call us for a professional inspection to identify hidden damage that could become a much bigger problem.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does storm damage roof repair take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Emergency temporary repairs (tarping, board-up) can be completed within hours of your call. Full repair or replacement timelines depend on the scope of damage, material availability, and insurance processing. Most insurance-approved repairs are completed within one to three weeks of claim approval. We keep you updated at every stage so you\'re never left wondering about your project status.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you charge for storm damage inspections?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No — our storm damage roof inspections are completely free and come with no obligation. Our certified inspectors document all damage with photos and a detailed report you can use for your insurance claim. There is no cost to you unless we perform repair work.',
        },
      },
    ],
  };

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* JSON-LD structured data                                             */}
      {/* ------------------------------------------------------------------ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ================================================================== */}
      {/* HERO                                                                */}
      {/* ================================================================== */}
      <section className="bg-gradient-to-br from-[#122E5F] to-[#2563eb] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 text-center lg:text-left">
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <Clock className="h-4 w-4 text-yellow-300" />
                <span>24-Hour Emergency Response</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                Storm Damage Roof Repair —<br className="hidden sm:block" /> 24-Hour Response
              </h1>

              <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mb-8">
                Hail, wind, or fallen trees can destroy your roof in minutes. Our certified crews
                respond around the clock — free inspection, full insurance claim support, and a{' '}
                <span className="text-white font-semibold">99.7% claim approval rate</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:541-728-0266"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#122E5F] font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-blue-50 transition-colors duration-180"
                >
                  <Phone className="h-5 w-5" />
                  541-728-0266
                </a>
                <a
                  href="#lead-form"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white/10 transition-colors duration-180"
                >
                  Get Free Inspection
                </a>
              </div>
            </div>

            {/* Stats column */}
            <div className="flex-shrink-0 grid grid-cols-2 gap-4 w-full max-w-xs">
              {[
                { value: '99.7%', label: 'Claim Approval Rate' },
                { value: '24 hr', label: 'Emergency Response' },
                { value: '50', label: 'States Licensed' },
                { value: '$0', label: 'Inspection Cost' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 border border-white/20 rounded-xl p-4 text-center"
                >
                  <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-sm text-blue-200 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* TYPES OF STORM DAMAGE                                               */}
      {/* ================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#122E5F] mb-4 text-center">
            Types of Storm Damage We Repair
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Every storm is different. Our crews are trained to identify and repair the full spectrum
            of weather-related roof damage — from minor granule loss to complete structural failure.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Hail */}
            <div className="bg-slate-50 rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-[#122E5F]/10 rounded-xl flex items-center justify-center mb-4">
                <CloudRain className="h-6 w-6 text-[#122E5F]" />
              </div>
              <h3 className="text-lg font-bold text-[#122E5F] mb-2">Hail Damage</h3>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                  Dented or cracked shingles
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                  Granule loss and bald spots
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                  Bruised asphalt shingles
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                  Cracked clay or concrete tile
                </li>
              </ul>
            </div>

            {/* Wind */}
            <div className="bg-slate-50 rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-[#122E5F]/10 rounded-xl flex items-center justify-center mb-4">
                <Wind className="h-6 w-6 text-[#122E5F]" />
              </div>
              <h3 className="text-lg font-bold text-[#122E5F] mb-2">Wind Damage</h3>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                  Lifted or missing shingles
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                  Exposed underlayment
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                  Damaged ridge caps
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                  Torn flashing and drip edge
                </li>
              </ul>
            </div>

            {/* Tree / Debris */}
            <div className="bg-slate-50 rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-[#122E5F]/10 rounded-xl flex items-center justify-center mb-4">
                <AlertCircle className="h-6 w-6 text-[#122E5F]" />
              </div>
              <h3 className="text-lg font-bold text-[#122E5F] mb-2">Fallen Tree / Debris</h3>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                  Punctures and cave-ins
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                  Structural deck damage
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                  Gutter and fascia damage
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                  Emergency board-up &amp; tarping
                </li>
              </ul>
            </div>

            {/* Ice Dam */}
            <div className="bg-slate-50 rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-[#122E5F]/10 rounded-xl flex items-center justify-center mb-4">
                <Home className="h-6 w-6 text-[#122E5F]" />
              </div>
              <h3 className="text-lg font-bold text-[#122E5F] mb-2">Ice Dam Damage</h3>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                  Water infiltration under shingles
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                  Damaged eaves and gutters
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                  Attic and insulation damage
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#2563eb] mt-0.5 flex-shrink-0" />
                  Interior water staining
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* WHY IMMEDIATE ACTION MATTERS                                        */}
      {/* ================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#122E5F] mb-4">
                Why Storm Damage Needs Immediate Attention
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A damaged roof is not just a cosmetic problem — it's an active threat to your home's
                structure and your family's safety. Even a small breach in your roof system can allow
                water to penetrate, leading to a cascade of secondary damage that multiplies repair
                costs and complicates your insurance claim.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Delaying repairs after storm damage can also void portions of your homeowner's
                insurance coverage. Most policies require &quot;prompt&quot; action to mitigate further damage
                — failure to do so gives insurers grounds to deny or reduce your claim. Don't let a
                fixable problem become a financial disaster.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />,
                    title: 'Water Intrusion',
                    desc: 'A single missing shingle can allow hundreds of gallons of water into your attic and walls during a single rainstorm.',
                  },
                  {
                    icon: <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />,
                    title: 'Mold &amp; Mildew',
                    desc: 'Mold can begin colonizing damp wood and insulation within 24–48 hours of water exposure, requiring costly remediation.',
                  },
                  {
                    icon: <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />,
                    title: 'Structural Rot',
                    desc: 'Prolonged moisture exposure weakens roof decking, rafters, and wall sheathing — turning a roof repair into a major structural project.',
                  },
                  {
                    icon: <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />,
                    title: 'Voided Insurance Coverage',
                    desc: 'Insurers can deny claims when homeowners fail to take reasonable steps to prevent additional damage after a storm.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                    {item.icon}
                    <div>
                      <div className="font-semibold text-[#122E5F] text-sm" dangerouslySetInnerHTML={{ __html: item.title }} />
                      <p className="text-sm text-gray-600 mt-0.5" dangerouslySetInnerHTML={{ __html: item.desc }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-[#122E5F] rounded-2xl p-8 text-white text-center shadow-xl">
              <Clock className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Don't Wait — Act Now</h3>
              <p className="text-blue-200 mb-6 leading-relaxed">
                Every hour counts after a major storm. Our emergency response team is standing by
                24/7 to protect your home. Call now for immediate assistance or schedule your free
                inspection.
              </p>
              <a
                href="tel:541-728-0266"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#122E5F] font-bold text-lg px-8 py-4 rounded-xl w-full hover:bg-blue-50 transition-colors duration-180 mb-4"
              >
                <Phone className="h-5 w-5" />
                541-728-0266
              </a>
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded-xl w-full hover:bg-white/10 transition-colors duration-180"
              >
                Schedule Free Inspection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* EMERGENCY SERVICES                                                  */}
      {/* ================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#122E5F] mb-4 text-center">
            Emergency Roof Repair Services
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            When disaster strikes, we're ready. Our emergency response crews deploy around the clock
            to protect your home from further damage while permanent repairs are planned.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="h-8 w-8 text-[#2563eb]" />,
                title: 'Emergency Tarping',
                desc: 'Heavy-duty tarps installed within hours to stop water infiltration at the point of damage.',
              },
              {
                icon: <Hammer className="h-8 w-8 text-[#2563eb]" />,
                title: 'Temporary Waterproofing',
                desc: 'Professional-grade waterproofing membranes applied over compromised areas to prevent leaks.',
              },
              {
                icon: <Home className="h-8 w-8 text-[#2563eb]" />,
                title: 'Board-Up Services',
                desc: 'Structural openings caused by fallen trees or severe wind damage secured and boarded up fast.',
              },
              {
                icon: <Clock className="h-8 w-8 text-[#2563eb]" />,
                title: '24/7 Availability',
                desc: 'Storm damage doesn\'t keep business hours. Neither do we. Call any time — day or night.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 rounded-xl p-6 text-center shadow-sm border border-slate-100"
              >
                <div className="w-16 h-16 bg-[#2563eb]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#122E5F] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* HOW TO INSPECT YOUR ROOF                                            */}
      {/* ================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#122E5F] mb-4 text-center">
            How to Check Your Roof for Storm Damage
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            You don't need to climb on your roof — and you shouldn't. Here's how to safely assess
            potential damage from the ground before your professional inspection. Our detailed guide to{' '}
            <Link href="/blog/signs-of-hail-damage-on-roof" className="text-[#2563eb] hover:underline">signs of hail damage on your roof</Link>
            {' '}covers every material type.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Ground-level tips */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-[#122E5F] mb-5 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#2563eb]" />
                Safe Ground-Level Checks
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#2563eb] text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">1</span>
                  <div>
                    <strong className="text-[#122E5F]">Check your gutters and downspouts.</strong>
                    {' '}Hail knocks granules loose from asphalt shingles. A large accumulation of
                    dark, sandpaper-like granules in your gutters is a strong indicator of hail
                    damage — even if your shingles look intact from the ground.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#2563eb] text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">2</span>
                  <div>
                    <strong className="text-[#122E5F]">Look for dented metal surfaces.</strong>
                    {' '}Walk the perimeter of your home and inspect your AC unit, aluminum gutters,
                    downspouts, metal flashing, and vents. Hail dents on these surfaces are a
                    reliable proxy for roof damage that may not be visible otherwise.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#2563eb] text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">3</span>
                  <div>
                    <strong className="text-[#122E5F]">Inspect your attic after the storm.</strong>
                    {' '}Check for daylight coming through the roof boards, fresh water stains on
                    rafters or sheathing, and musty odors that may indicate new moisture. Bring a
                    flashlight and look carefully in corners and along the ridge line.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#2563eb] text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">4</span>
                  <div>
                    <strong className="text-[#122E5F]">Use binoculars for a roof scan.</strong>
                    {' '}From ground level, use binoculars to look for missing shingles, lifted
                    edges, exposed underlayment, or obvious punctures. Pay extra attention to the
                    ridge, hips, and valleys where damage is most common.
                  </div>
                </li>
              </ul>
            </div>

            {/* Why professional inspection */}
            <div className="bg-[#122E5F] rounded-2xl p-8 text-white shadow-sm">
              <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-300" />
                Why You Still Need a Professional Inspection
              </h3>
              <p className="text-blue-100 leading-relaxed mb-4">
                Ground-level inspections reveal obvious damage, but the most costly storm damage is
                often invisible from below. Hail impacts that look like surface bruising can
                compromise the structural bond of shingles, allowing water to creep under them over
                time — leading to major leaks months later.
              </p>
              <p className="text-blue-100 leading-relaxed mb-4">
                Insurance adjusters are trained to minimize claim payouts. Having a professional
                damage report from a licensed roofing contractor — not just your own observations —
                gives you documented evidence of the full extent of damage and significantly
                strengthens your claim.
              </p>
              <p className="text-blue-100 leading-relaxed mb-6">
                Our inspections are thorough, photo-documented, and completely free. There is no
                obligation to proceed with repairs.
              </p>
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#122E5F] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-180 w-full"
              >
                Schedule My Free Inspection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 4-STEP PROCESS                                                      */}
      {/* ================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#122E5F] mb-4 text-center">
            Our 4-Step Storm Damage Process
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            From the moment you call to the final inspection — we handle every step. No surprises,
            no runaround, no out-of-pocket surprises.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                icon: <Clock className="h-7 w-7 text-white" />,
                title: 'Emergency Response & Temporary Repairs',
                desc: 'We respond within 24 hours — often the same day. Emergency tarps, board-ups, and temporary waterproofing protect your home immediately while we plan the full repair.',
              },
              {
                step: '02',
                icon: <FileText className="h-7 w-7 text-white" />,
                title: 'Full Damage Assessment & Documentation',
                desc: 'Our certified inspector conducts a comprehensive roof evaluation with detailed photographs, measurements, and a written damage report suitable for your insurance claim.',
              },
              {
                step: '03',
                icon: <Shield className="h-7 w-7 text-white" />,
                title: 'Insurance Claim Filing & Adjuster Meeting',
                desc: 'We file your claim, prepare supporting documentation, and meet with your insurance adjuster on-site to advocate for the full scope of covered damage.',
              },
              {
                step: '04',
                icon: <Hammer className="h-7 w-7 text-white" />,
                title: 'Complete Roof Repair or Replacement',
                desc: 'Once the claim is approved, we complete all repairs or a full replacement using premium materials. Your project is backed by our workmanship warranty.',
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-[#122E5F] rounded-2xl p-6 text-white h-full shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#2563eb] rounded-xl flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-3xl font-extrabold text-white/20">{item.step}</span>
                  </div>
                  <h3 className="text-base font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-blue-200 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Ready to get started?{' '}
              <Link href="/services/insurance-claims" className="text-[#2563eb] font-semibold hover:underline">
                Learn more about our insurance claim process
              </Link>{' '}
              or{' '}
              <Link href="/services/roof-replacement" className="text-[#2563eb] font-semibold hover:underline">
                explore full roof replacement options
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CENTRAL OREGON HAILSTORM SECTION                                   */}
      {/* ================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50 border-y border-amber-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-800 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
                <AlertCircle className="h-4 w-4" />
                Important Deadline — Central Oregon Homeowners
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#122E5F] mb-4">
                Central Oregon Storm Damage — August 2025 Hailstorm
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                The August 2025 hailstorm was one of the most destructive weather events in Central
                Oregon's recent history. Hailstones up to the size of golf balls struck communities
                across the region — Bend, Redmond, La Pine, Terrebonne, Sisters, Prineville, Madras,
                and Sunriver — causing widespread damage to thousands of roofs, vehicles, and
                properties. Read our full{' '}
                <Link href="/blog/central-oregon-hailstorm-2025" className="text-[#2563eb] hover:underline">Central Oregon hailstorm guide</Link>
                {' '}including the August 2026 claim deadline.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Many homeowners don't yet know the extent of their roof damage. Hail impact damage
                can be subtle on the surface but catastrophic underneath, weakening the waterproofing
                layer of shingles without creating visible holes. In the months since the storm, many
                damaged roofs have allowed slow water infiltration that is only now beginning to
                show up as staining, mold, or structural issues indoors.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>The deadline to file an insurance claim for the August 2025 storm is
                August 2026.</strong> If you haven't had your roof professionally inspected since
                the storm — or if you've noticed any new water stains, granules in your gutters, or
                interior moisture — act now. Once the filing deadline passes, you lose your right to
                compensation for storm-related damage, regardless of its severity.
              </p>

              <div className="bg-white border border-amber-200 rounded-xl p-5">
                <p className="text-sm font-semibold text-amber-800 mb-3">
                  Communities affected by the August 2025 hailstorm:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Bend', 'Redmond', 'La Pine', 'Terrebonne', 'Sisters', 'Prineville', 'Madras', 'Sunriver'].map(
                    (city) => (
                      <span
                        key={city}
                        className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full"
                      >
                        <MapPin className="h-3.5 w-3.5" />
                        {city}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Urgency card */}
            <div className="lg:w-72 flex-shrink-0 bg-[#122E5F] rounded-2xl p-6 text-white shadow-xl">
              <AlertCircle className="h-10 w-10 text-yellow-300 mb-3" />
              <h3 className="text-lg font-bold mb-2">Claim Deadline</h3>
              <div className="text-4xl font-extrabold text-yellow-300 mb-1">Aug 2026</div>
              <p className="text-blue-200 text-sm mb-5 leading-relaxed">
                Don't miss your window to file for the August 2025 hailstorm. Free inspections
                available now for Central Oregon homeowners.
              </p>
              <a
                href="tel:541-728-0266"
                className="flex items-center justify-center gap-2 bg-white text-[#122E5F] font-bold px-5 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-180 w-full mb-3 text-sm"
              >
                <Phone className="h-4 w-4" />
                Call 541-728-0266
              </a>
              <a
                href="#lead-form"
                className="flex items-center justify-center gap-2 border border-white text-white font-semibold px-5 py-3 rounded-xl hover:bg-white/10 transition-colors duration-180 w-full text-sm"
              >
                Get Free Inspection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* TESTIMONIALS                                                        */}
      {/* ================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#122E5F] mb-10 text-center">
            What Homeowners Are Saying
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  'After the August hailstorm, I had no idea where to start. Free Roof Pros came out the next day, documented everything, and handled the entire claim process. My new roof was installed within three weeks and I paid nothing out of pocket.',
                author: 'Robert M.',
                location: 'La Pine, OR',
              },
              {
                quote:
                  'A severe thunderstorm took out two large sections of our roof in the Dallas area. Free Roof Pros had emergency tarps up the same evening and helped us navigate a complicated insurance claim. Couldn\'t be more grateful.',
                author: 'Angela W.',
                location: 'Dallas, TX',
              },
              {
                quote:
                  'I was skeptical after past bad experiences with contractors, but the team in St. Louis was incredibly professional. They found damage I didn\'t even know existed, filed the claim on my behalf, and the work was done on time and perfectly.',
                author: 'Chris P.',
                location: 'St. Louis, MO',
              },
            ].map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-slate-50 rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#2563eb]/10 rounded-full flex items-center justify-center">
                    <ThumbsUp className="h-4 w-4 text-[#2563eb]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#122E5F] text-sm">– {testimonial.author}</div>
                    <div className="text-xs text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SERVICE AREAS                                                       */}
      {/* ================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#122E5F] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <MapPin className="h-10 w-10 text-[#2563eb] mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Service Areas</h2>
          <p className="text-blue-200 max-w-2xl mx-auto mb-10">
            Free Roof Pros serves homeowners across the country. Our team is licensed in all 50
            states, with local crews ready to respond in these markets.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left max-w-4xl mx-auto">
            {[
              {
                region: 'Central Oregon (Launch Market)',
                cities: 'Bend · Redmond · La Pine · Terrebonne · Sisters · Prineville · Madras · Sunriver',
                highlight: true,
              },
              { region: 'Dallas-Fort Worth, TX', cities: 'Dallas · Fort Worth · Irving · Plano · Arlington' },
              { region: 'St. Louis, MO', cities: 'St. Louis · Clayton · Chesterfield · O\'Fallon' },
              { region: 'Indianapolis, IN', cities: 'Indianapolis · Carmel · Fishers · Noblesville' },
              { region: 'Kansas City, MO/KS', cities: 'Kansas City · Overland Park · Olathe · Lenexa' },
              { region: 'Nashville, TN', cities: 'Nashville · Brentwood · Franklin · Murfreesboro' },
            ].map((area) => (
              <div
                key={area.region}
                className={`rounded-xl p-5 ${
                  area.highlight
                    ? 'bg-[#2563eb] border border-blue-400'
                    : 'bg-white/10 border border-white/10'
                }`}
              >
                <div className="font-bold text-sm mb-1">{area.region}</div>
                <div className="text-xs text-blue-200">{area.cities}</div>
              </div>
            ))}
          </div>

          <p className="text-blue-300 text-sm mt-8">
            Don't see your city?{' '}
            <a href="tel:541-728-0266" className="text-white underline hover:no-underline">
              Call us
            </a>{' '}
            — we're licensed nationwide and can often mobilize crews to your area.
          </p>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FAQ                                                                 */}
      {/* ================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#122E5F] mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Have more questions? Call us at{' '}
            <a href="tel:541-728-0266" className="text-[#2563eb] font-semibold hover:underline">
              541-728-0266
            </a>{' '}
            or email{' '}
            <a href="mailto:info@freeroofpros.com" className="text-[#2563eb] font-semibold hover:underline">
              info@freeroofpros.com
            </a>
            .
          </p>

          <div className="space-y-3">
            {[
              {
                q: 'How do I know if my roof has hail damage?',
                a: 'Common signs include granules collecting in gutters, dented metal surfaces (AC unit, vents, gutters), cracked or bruised shingles, and water stains inside your attic. Many types of hail damage are only visible from the roof itself, which is why a professional inspection is essential after any significant storm.',
              },
              {
                q: 'How soon do I need to file a storm damage insurance claim?',
                a: 'For the August 2025 Central Oregon hailstorm, the deadline is approximately August 2026. In general, most policies require claims to be filed within one to two years of the storm. Waiting too long risks claim denial — contact us for a free inspection and we\'ll help you file on time.',
              },
              {
                q: 'What does emergency roof tarping involve?',
                a: 'Emergency tarping uses heavy-duty polyethylene tarps secured over damaged roof areas to prevent water from entering your home. It\'s a temporary solution deployed within hours of your call while we arrange permanent repairs. We\'re available 24/7 for emergency tarp installation.',
              },
              {
                q: 'Will my homeowner\'s insurance cover storm damage roof repair?',
                a: 'In most cases, yes. Hail, wind, and fallen tree damage are typically covered perils. Our 99.7% claim approval rate reflects our ability to document and present damage thoroughly. We handle the entire claim process at no additional cost to you.',
              },
              {
                q: 'Is it safe for me to inspect my own roof?',
                a: 'We strongly advise against walking on your roof — wet or damaged surfaces are extremely hazardous. Conduct a safe ground-level check (gutters, metal surfaces, interior attic), then let our inspectors handle the roof itself. Our inspections are free with no obligation.',
              },
              {
                q: 'How long does a storm damage repair take?',
                a: 'Emergency temporary repairs are completed within hours. Full repairs typically take one to three weeks after insurance approval, depending on the scope. We provide a project timeline before work begins so you always know what to expect.',
              },
              {
                q: 'Do you charge for storm damage inspections?',
                a: 'No — our inspections are always free and come with no obligation. We provide a full photo-documented damage report you can use for your insurance claim at no charge.',
              },
              {
                q: 'What if my claim is denied?',
                a: 'Claim denials are rare with our documentation process — we maintain a 99.7% approval rate. In the uncommon event of a denial, we assist with the appeals process and work with your adjuster to reconsider. We don\'t give up on your claim.',
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-[#122E5F] select-none list-none">
                  <span>{faq.q}</span>
                  <span className="ml-4 flex-shrink-0 w-6 h-6 rounded-full bg-[#122E5F]/10 flex items-center justify-center text-[#122E5F] text-lg font-bold group-open:rotate-45 transition-transform duration-180">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-slate-200 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* LEAD FORM                                                           */}
      {/* ================================================================== */}
      <section id="lead-form" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#122E5F] mb-3">
              Get Your Free Storm Damage Inspection
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              No cost. No obligation. Fill out the form below and a certified inspector will contact
              you within 24 hours — often the same day.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
            <LeadForm />
          </div>

          {/* Contact alternatives */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-600">
            <a
              href="tel:541-728-0266"
              className="inline-flex items-center gap-2 justify-center text-[#2563eb] font-semibold hover:underline"
            >
              <Phone className="h-4 w-4" />
              541-728-0266
            </a>
            <span className="hidden sm:block text-gray-300">|</span>
            <a
              href="mailto:info@freeroofpros.com"
              className="inline-flex items-center gap-2 justify-center text-[#2563eb] font-semibold hover:underline"
            >
              info@freeroofpros.com
            </a>
            <span className="hidden sm:block text-gray-300">|</span>
            <span className="inline-flex items-center gap-2 justify-center">
              <MapPin className="h-4 w-4 text-gray-400" />
              10801 NW 43rd St, Terrebonne, OR 97760
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
