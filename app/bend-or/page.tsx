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
  Calendar,
  CloudLightning,
} from 'lucide-react';
import { LeadForm } from '@/components/sections/LeadForm';

// --- Metadata (server component, no 'use client') --------------------------

export const metadata: Metadata = {
  title: 'Roof Repair Bend OR | Free Hail Damage Inspection | FreeRoofPros',
  description:
    'Roof repair in Bend, Oregon. The August 2025 hailstorm left widespread damage across Deschutes County. File your insurance claim before the August 2026 deadline. Free inspection, 99.7% approval rate. Call 541-337-5734.',
  alternates: {
    canonical: 'https://www.freeroofpros.com/bend-or',
  },
  openGraph: {
    title: 'Roof Repair Bend OR | Free Hail Damage Inspection | FreeRoofPros',
    description:
      'Roof repair in Bend, Oregon. The August 2025 hailstorm left widespread damage across Deschutes County. File your insurance claim before the August 2026 deadline. Free inspection, 99.7% approval rate. Call 541-337-5734.',
    url: 'https://www.freeroofpros.com/bend-or',
    images: [
      {
        url: 'https://www.freeroofpros.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Free Roof Pros, Roof Repair in Bend, Oregon',
      },
    ],
  },
};

// --- JSON-LD schemas -------------------------------------------------------

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Free Roof Pros',
  url: 'https://www.freeroofpros.com',
  telephone: '541-337-5734',
  email: 'info@freeroofpros.com',
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
    'Storm damage roofing contractor serving Bend, Oregon and Central Oregon. Free hail damage inspections, insurance claim management, and roof replacement. Office in Terrebonne, OR.',
  sameAs: ['https://www.freeroofpros.com'],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was my Bend home damaged by the August 2025 hailstorm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The August 3, 2025 hailstorm tracked directly through Deschutes County, dropping hail across Bend, Redmond, Terrebonne, and surrounding communities. Hail damage is often invisible from the ground. Granule loss, dented flashing, and cracked shingles require a close-up rooftop inspection to detect. Our free inspection will tell you definitively whether your roof sustained insurable damage.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the August 2026 insurance deadline for Bend homeowners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Oregon homeowners insurance policies allow one year from the date of loss to file a claim. Since the Central Oregon hailstorm struck in August 2025, the filing deadline is August 2026. Once that date passes, your insurer can legally deny any claim tied to that storm event. Scheduling a free inspection now is the first step to protecting your right to file.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does my homeowners insurance cover hail damage to my Bend roof?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, standard homeowners insurance policies in Oregon cover sudden storm damage including hail. The damage does not need to cause an active leak to qualify. Granule loss, bruised shingles, and dented metal components are all legitimate covered losses. Free Roof Pros has a 99.7% claim approval rate across Central Oregon.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much will a new roof cost me in Bend, Oregon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With insurance coverage, most Bend homeowners pay only their deductible, typically $1,000 to $2,500. The insurance company covers the full cost of materials and labor for a replacement roof of like kind and quality. Without insurance, a full roof replacement in Central Oregon typically ranges from $10,000 to $22,000 depending on roof size, pitch, and materials.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Bend neighborhoods were most affected by the hailstorm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The August 2025 storm affected neighborhoods across Bend including Summit West, Awbrey Butte, NorthWest Crossing, Old Mill District, Mountain View, Pilot Butte, and Southeast Bend. Properties in higher-elevation areas and those with older asphalt shingle roofs tend to show the most significant hail impact marks.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to complete a roof replacement in Bend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The inspection and insurance claim process typically takes one to two weeks. Once your claim is approved, we schedule installation. Most residential roof replacements in Bend are completed in one to three days. Our Terrebonne office is approximately 20 minutes from downtown Bend, allowing us to respond quickly and stay on schedule throughout your project.',
      },
    },
  ],
};

// --- Page component --------------------------------------------------------

export default function BendOrPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="bg-[#122E5F] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#2563eb] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              Bend homeowners: August 2026 insurance deadline approaching
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              Free Roof Inspection &amp; Storm Damage Repair in Bend, Oregon
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              The August 2025 hailstorm left roof damage across Deschutes County that most homeowners
              still haven&apos;t discovered. Your insurance claim window closes in August 2026. Our
              Central Oregon team provides free inspections, handles the full insurance claim, and
              installs your new roof. You pay only your deductible.
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

      {/* TRUST BAR */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Claim Approval Rate', value: '99.7%' },
              { label: 'Office Location', value: 'Terrebonne, OR' },
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

      {/* THE AUGUST 2025 HAILSTORM */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">
              The August 2025 Hailstorm: What Bend Homeowners Need to Know
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              On August 3, 2025, a severe hailstorm tracked through Central Oregon, dropping
              significant hail across Deschutes County. The storm affected communities from Terrebonne
              and Redmond in the north through Bend and down toward La Pine and Sunriver. Deschutes
              County was among the hardest-hit areas in the state.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hail damage is deceptive. Unlike a fallen tree or missing shingles you can see from the
              street, hail impact leaves bruises, cracks, and granule loss that are only visible from
              directly above. Many Bend homeowners whose roofs sustained significant damage have no
              idea, because nothing has leaked yet.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              A roof can lose years of useful life from hail impact without causing a visible leak for
              18 to 24 months. By the time the water intrusion begins, the insurance filing window
              has already closed. This is why a professional inspection now is critical.
            </p>
            <div className="space-y-3">
              {[
                'Deschutes County was among the hardest-hit counties in the state',
                'Hail reached 1 to 2 inches in diameter across parts of Bend',
                'Asphalt shingles, metal flashings, and gutters all show impact damage',
                'Most damage requires rooftop inspection to detect',
                'High-elevation neighborhoods saw concentrated storm intensity',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-gray-700">
                  <CloudLightning className="w-5 h-5 text-[#2563eb] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Urgency card */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 lg:sticky lg:top-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-amber-600 shrink-0" />
              <h3 className="text-lg font-bold text-amber-800">August 2026 Filing Deadline</h3>
            </div>
            <p className="text-amber-900 leading-relaxed mb-4">
              Oregon homeowners insurance policies allow one year from the date of loss to file a
              claim. The August 2025 hailstorm created a hard deadline of <strong>August 2026</strong>.
            </p>
            <p className="text-amber-900 leading-relaxed mb-4">
              Once that deadline passes, your insurer can legally deny any claim tied to this storm
              event, regardless of the condition of your roof. There is no extension, no exception,
              and no appeals process after the filing window closes.
            </p>
            <p className="text-amber-900 leading-relaxed mb-5">
              A free inspection costs you nothing. Missing the deadline costs you a new roof.
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

      {/* WHY HOMEOWNERS ARE FILING NOW */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">
            Why Bend Homeowners Are Filing Insurance Claims Now
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mb-8">
            The one-year filing window after a storm event is the most misunderstood aspect of
            homeowners insurance in Central Oregon. Many residents assume they have time, or assume
            their roof is fine because it isn&apos;t leaking. Both assumptions result in missed claims.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'The 1-Year Deadline Is Real',
                body: "Oregon insurance law allows carriers to deny claims filed after the policy's loss reporting period, typically one year from the storm date. August 2026 is not a soft target, it is a hard legal cutoff.",
              },
              {
                title: 'Damage Hides Itself',
                body: 'Granule loss, cracked mat layers, and bruised impact points do not produce immediate leaks. Most hail-damaged roofs continue to shed water for 12 to 24 months before visible water intrusion begins, by which point the filing window is closed.',
              },
              {
                title: 'Adjuster Backlogs Are Growing',
                body: 'As the August 2026 deadline approaches, insurance adjuster schedules fill up. Homeowners who wait until summer 2026 may struggle to get an adjuster appointment in time to complete the claims process before the deadline.',
              },
              {
                title: 'You Pay Only Your Deductible',
                body: 'With an approved claim, your insurer covers the full cost of a new roof minus your deductible, typically $1,000 to $2,500. Waiting and missing the deadline means paying $10,000 to $22,000 out of pocket for the same repair.',
              },
              {
                title: 'We Handle Everything',
                body: 'Filing a storm damage claim involves documentation, photo reports, weather data, adjuster coordination, and scope reviews. Free Roof Pros manages the entire process so you never have to navigate the insurer directly.',
              },
              {
                title: '99.7% Approval Rate',
                body: 'We only recommend filing a claim when our inspection confirms legitimate storm damage. If we tell you that you have a claim, our track record shows it will be approved. That certainty saves you time and protects your claims history.',
              },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-xl p-5 border border-gray-200">
                <CheckCircle className="w-6 h-6 text-[#2563eb] mb-3" />
                <h3 className="font-semibold text-[#122E5F] mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE ROOF INSPECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">
          Free Roof Inspection for Bend Homes
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mb-8">
          Our certified inspectors serve all of Bend and the surrounding Deschutes County area. There
          is no charge for the inspection, no obligation to proceed, and no pressure. We provide a
          complete written report with timestamped photographs within 24 hours.
        </p>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-semibold text-[#122E5F] mb-4">What the Inspection Covers</h3>
            <ul className="space-y-3 mb-8">
              {[
                'Full rooftop walk, every field section and ridge line',
                'Hail impact mapping with measurements and counts per square',
                'Flashing inspection at chimneys, skylights, and valleys',
                'Gutter and downspout assessment for hail denting',
                'Soffit and fascia review for wind and water damage',
                'Underlayment and decking condition where accessible',
                'Attic moisture check for signs of existing water intrusion',
                'Timestamped photo documentation of every damage point',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-[#2563eb] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-[#122E5F] mb-3">Areas of Bend We Serve</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'NE Bend', 'NW Bend', 'SW Bend', 'SE Bend', 'Old Mill District',
                'Summit West', 'Awbrey Butte', 'NorthWest Crossing', 'Mountain View',
                'Pilot Butte', 'Brookswood', 'River West',
              ].map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1 bg-blue-50 text-[#122E5F] text-xs font-medium px-3 py-1.5 rounded-full border border-blue-100"
                >
                  <MapPin className="w-3 h-3 text-[#2563eb]" />
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#122E5F] mb-4">How to Schedule</h3>
            <div className="space-y-5">
              {[
                {
                  step: '01',
                  title: 'Call or submit the form below',
                  detail: 'Reach us at 541-337-5734 or use the inspection request form at the bottom of this page. We typically schedule within 24 to 48 hours.',
                },
                {
                  step: '02',
                  title: 'Inspector visits your property',
                  detail: 'You do not need to be home. Leave a gate unlocked if needed and we handle the rest. The inspection takes 45 to 90 minutes depending on roof complexity.',
                },
                {
                  step: '03',
                  title: 'Receive your photo report',
                  detail: 'Within 24 hours you receive a complete written inspection report with photographs. If damage is found, we walk you through the insurance filing process at no cost.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="bg-[#2563eb] text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#122E5F] mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors mt-8"
            >
              <ClipboardList className="w-5 h-5" />
              Schedule My Free Inspection
            </a>
          </div>
        </div>
      </section>

      {/* HOW WE HANDLE YOUR CLAIM */}
      <section className="bg-[#122E5F] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">How We Handle Your Insurance Claim</h2>
          <p className="text-blue-200 mb-10 max-w-2xl">
            A 99.7% claim approval rate is not luck. It is the result of thorough documentation,
            precise damage coding, and experienced adjuster coordination on every single file.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: '01', icon: Search, title: 'Free Roof Inspection', description: 'Our certified inspector documents every impact point with measurements and timestamped photos. We correlate your roof condition with National Weather Service storm data for your address.' },
              { step: '02', icon: FileText, title: 'Damage Report', description: 'We compile a professional damage report using the same format insurance adjusters expect, including hail count per square, impact size, and functional damage assessment.' },
              { step: '03', icon: ClipboardList, title: 'Claim Filing', description: 'Our specialists file your claim with the correct damage codes and storm documentation. We handle all communication with your carrier from the first notice of loss forward.' },
              { step: '04', icon: Users, title: 'Adjuster Meeting', description: 'We attend the adjuster inspection in person, walk the roof together, and ensure every covered item is included in the scope of loss. Partial scopes get reviewed and escalated.' },
              { step: '05', icon: Hammer, title: 'Installation', description: 'Our licensed Oregon crews install your new roof, typically in one to two days for most Bend homes. Full cleanup and a final walkthrough are included before we leave.' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-[#2563eb] text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center mb-4">{item.step}</div>
                <item.icon className="w-6 h-6 text-blue-300 mb-3" />
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-blue-100 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/services/insurance-claims" className="inline-flex items-center gap-2 bg-white text-[#122E5F] hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors">
              <FileText className="w-5 h-5" />Full Insurance Claims Guide
            </Link>
            <Link href="/services/storm-damage-repair" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20">
              <Hammer className="w-5 h-5" />Storm Damage Repair
            </Link>
          </div>
        </div>
      </section>

      {/* HAIL DAMAGE SIGNS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">Common Hail Damage Signs on Bend Roofs</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mb-8">
          Central Oregon&apos;s climate creates specific conditions that affect how hail damage presents on local roofing materials. Wide temperature swings between summer and winter, low humidity, and intense UV exposure from high-altitude sun all accelerate the degradation that hail begins.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Granule Loss on Asphalt Shingles', body: "Hail knocks protective granules off asphalt shingles, exposing the underlying fiberglass mat to UV radiation. In Central Oregon's high-altitude sun, a granule-bare shingle degrades two to three times faster than in lower-elevation climates." },
            { title: 'Soft-Metal Denting', body: 'Aluminum gutters, downspouts, vent caps, and flashing are easy diagnostic indicators. If soft metals around your home show circular dent patterns from August 2025, your shingles almost certainly absorbed the same impact.' },
            { title: 'Circular Bruising on Shingles', body: "A hail impact creates a circular bruise on an asphalt shingle that feels soft when pressed, similar to a bruise on fruit. In Central Oregon's dry climate, these bruises harden and crack more quickly than in humid climates." },
            { title: 'Cracked Ridge Cap Shingles', body: "Ridge cap shingles run along the highest point of your roof and are fully exposed to hail impacts from directly above. Cracking, splitting, and lifted tabs are common findings on Bend roofs after the August 2025 event." },
            { title: 'Damaged Roof Vents and Skylights', body: 'Plastic and aluminum roof vents frequently crack or dent under hail impact. Skylight frames and seals are also vulnerable. These components are typically covered in a storm damage claim.' },
            { title: 'Lifted or Missing Shingles', body: 'High-velocity hail is often accompanied by strong winds. Wind events in Central Oregon regularly reach 40 to 60 mph during severe storms, which can lift shingle tabs and break the factory seal strip.' },
          ].map((card) => (
            <div key={card.title} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-[#122E5F] mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-5">
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong className="text-[#122E5F]">Do not attempt a rooftop inspection yourself.</strong>{' '}
            Hail-damaged shingles can be slippery, and determining insurable damage requires trained eyes and calibrated measurement tools.{' '}
            <a href="tel:541-337-5734" className="text-[#2563eb] hover:underline font-medium">Call 541-337-5734</a>.
          </p>
        </div>
      </section>

      {/* BEND NEIGHBORHOODS WE SERVE */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-3">Bend Neighborhoods We Serve</h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl mb-8">
            We inspect and restore roofs across all of Bend and the greater Deschutes County area. Our Terrebonne office puts us approximately 20 minutes from downtown Bend.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3"><MapPin className="w-5 h-5 text-[#2563eb]" /><h3 className="font-semibold text-[#122E5F]">West Bend</h3></div>
              <ul className="space-y-1.5 text-gray-700 text-sm">
                {['Summit West','Awbrey Butte','NorthWest Crossing','River West','Newport Ave Corridor','Drake Park Area'].map((n) => (
                  <li key={n} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#2563eb] shrink-0" />{n}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3"><MapPin className="w-5 h-5 text-[#2563eb]" /><h3 className="font-semibold text-[#122E5F]">Central and East Bend</h3></div>
              <ul className="space-y-1.5 text-gray-700 text-sm">
                {['Old Mill District','Pilot Butte','Mountain View','Bear Creek','Southeast Bend','Brookswood'].map((n) => (
                  <li key={n} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#2563eb] shrink-0" />{n}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3"><MapPin className="w-5 h-5 text-[#2563eb]" /><h3 className="font-semibold text-[#122E5F]">North Bend and Surrounding Cities</h3></div>
              <ul className="space-y-1.5 text-gray-700 text-sm">
                {['Bend North End','Redmond (20 min north)','Terrebonne','Sisters','Sunriver','La Pine (45 min south)'].map((n) => (
                  <li key={n} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#2563eb] shrink-0" />{n}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/redmond-or" className="inline-flex items-center gap-2 border border-gray-200 hover:border-[#2563eb] hover:bg-blue-50 text-[#122E5F] font-medium px-5 py-2.5 rounded-lg transition-colors text-sm">
              <MapPin className="w-4 h-4 text-[#2563eb]" />Serving Redmond, OR
            </Link>
            <Link href="/la-pine-or" className="inline-flex items-center gap-2 border border-gray-200 hover:border-[#2563eb] hover:bg-blue-50 text-[#122E5F] font-medium px-5 py-2.5 rounded-lg transition-colors text-sm">
              <MapPin className="w-4 h-4 text-[#2563eb]" />Serving La Pine, OR
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE FREEROOFPROS IN BEND */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">Why Choose FreeRoofPros in Bend</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Central Oregon is our home market. Our office in Terrebonne is approximately 20 minutes from downtown Bend, which means we can schedule inspections quickly and stay closely involved through every stage of your project.
            </p>
            <div className="space-y-5">
              {[
                { icon: MapPin, title: 'Local Office, 20 Minutes from Bend', body: 'Our Terrebonne office at 10801 NW 43rd Street serves the entire Deschutes County market. We know Central Oregon roads, climates, and roofing conditions.' },
                { icon: ShieldCheck, title: 'Licensed Roofing Contractor in Oregon', body: "We hold an active Oregon contractor license, carry general liability insurance, and maintain workers' compensation coverage on every crew member." },
                { icon: CloudLightning, title: 'Central Oregon Climate Expertise', body: "We understand how Bend's high-altitude UV exposure, wide temperature swings, and heavy snow loads affect roofing systems. We recommend Class 4 impact-resistant shingles that may qualify for an insurance premium discount." },
                { icon: FileText, title: '99.7% Claim Approval Rate', body: 'We have successfully navigated hundreds of Oregon insurance claims. Our track record in Deschutes County speaks for itself.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <item.icon className="w-6 h-6 text-[#2563eb] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#122E5F] mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#122E5F] mb-2">What Bend Homeowners Say</h3>
            {[
              { quote: 'After the August storm I figured the roof was fine since nothing was leaking. Free Roof Pros came out, found significant hail damage on every section, and had my claim approved in less than two weeks. New roof installed, total out of pocket was my deductible.', author: 'Kevin T.', location: 'Summit West, Bend OR' },
              { quote: 'I was nervous about dealing with my insurance company. The Free Roof Pros team attended the adjuster meeting for me, walked the roof with the adjuster, and got the scope upgraded from a partial repair to a full replacement.', author: 'Linda M.', location: 'NorthWest Crossing, Bend OR' },
              { quote: 'Their inspector was at my house the day after I called. The photo report was in my inbox that evening. The claim was filed the next morning. The crew was professional, fast, and left the property spotless.', author: 'Robert A.', location: 'Awbrey Butte, Bend OR' },
            ].map((t) => (
              <div key={t.author} className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="flex gap-1 mb-3">{[1,2,3,4,5].map((s) => (<Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />))}</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">&quot;{t.quote}&quot;</p>
                <p className="text-sm font-semibold text-[#122E5F]">{t.author},{' '}<span className="font-normal text-gray-500">{t.location}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-2">Frequently Asked Questions for Bend Homeowners</h2>
          <p className="text-gray-600 mb-8">Specific answers to the most common questions from Bend and Deschutes County residents after the August 2025 hailstorm.</p>
          <div className="max-w-3xl divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
            {[
              { q: 'Was my Bend home damaged by the August 2025 hailstorm?', a: 'The storm tracked directly through Deschutes County on August 3, 2025, dropping hail across Bend, Redmond, Terrebonne, and surrounding communities. Hail damage is typically invisible from the ground. Our free inspection will give you a definitive answer within 24 hours.' },
              { q: 'What is the August 2026 deadline and what happens if I miss it?', a: 'Most Oregon homeowners insurance policies allow one year from the date of loss to file a claim. The August 2025 storm creates a hard deadline of August 2026. If you miss it, your insurer can legally deny your claim. There is no grace period and no appeals process.' },
              { q: 'Does my homeowners insurance cover hail damage to my Bend roof?', a: 'Yes. Standard Oregon homeowners insurance policies cover sudden storm damage, including hail. Your roof does not need to be actively leaking to qualify. We have a 99.7% claim approval rate across Central Oregon.' },
              { q: 'How much will a new roof cost me in Bend?', a: 'With an approved insurance claim, most Bend homeowners pay only their deductible, typically $1,000 to $2,500. Without insurance, a full roof replacement in Bend currently costs between $10,000 and $22,000.' },
              { q: 'Which Bend neighborhoods were most affected by the August 2025 storm?', a: 'The storm affected neighborhoods across Bend, including Summit West, Awbrey Butte, NorthWest Crossing, Old Mill District, Mountain View, Pilot Butte, and Southeast Bend.' },
              { q: 'How long does a roof replacement in Bend take from start to finish?', a: 'The inspection and insurance filing process typically takes one to two weeks. Once your claim is approved, most Bend residential roofs are replaced in one to two days.' },
            ].map((faq) => (
              <details key={faq.q} className="group bg-white">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-semibold text-[#122E5F] hover:bg-gray-50 transition-colors">
                  <span>{faq.q}</span>
                  <span className="shrink-0 w-5 h-5 rounded-full border-2 border-[#2563eb] text-[#2563eb] flex items-center justify-center text-sm font-bold select-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-5 pt-1 text-gray-700 leading-relaxed text-sm">{faq.a}</div>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500">
            More questions?{' '}
            <Link href="/blog/central-oregon-hailstorm-2025" className="text-[#2563eb] hover:underline">Read our Central Oregon hailstorm guide</Link>{' '}or call{' '}
            <a href="tel:541-337-5734" className="text-[#2563eb] hover:underline">541-337-5734</a>.
          </p>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Related Pages</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/services/roof-replacement', icon: Hammer, title: 'Roof Replacement', sub: 'Insurance-covered full replacement' },
            { href: '/services/insurance-claims', icon: FileText, title: 'Insurance Claims', sub: 'Step-by-step claim filing guide' },
            { href: '/services/storm-damage-repair', icon: CloudLightning, title: 'Storm Damage Repair', sub: 'Hail, wind, and emergency repairs' },
            { href: '/blog/central-oregon-hailstorm-2025', icon: AlertTriangle, title: 'Central Oregon Storm Guide', sub: 'August 2025 hailstorm overview' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="flex items-center gap-3 border border-gray-200 rounded-xl p-4 hover:border-[#2563eb] hover:bg-blue-50 transition-colors group">
              <link.icon className="w-5 h-5 text-[#2563eb] shrink-0" />
              <div>
                <p className="font-semibold text-[#122E5F] text-sm group-hover:text-[#2563eb] transition-colors">{link.title}</p>
                <p className="text-xs text-gray-500">{link.sub}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="lead-form" className="bg-[#122E5F] text-white py-14 sm:py-16 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#2563eb] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <AlertTriangle className="w-4 h-4 shrink-0" />August 2026 deadline approaching
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Schedule Your Free Bend Roof Inspection</h2>
            <p className="text-blue-200 leading-relaxed">
              No cost, no obligation. Find out within 24 hours whether your Bend home qualifies for insurance-covered roof replacement.
            </p>
          </div>
          <LeadForm />
          <p className="text-center text-blue-300 text-sm mt-6">
            Prefer to call?{' '}
            <a href="tel:541-337-5734" className="text-white font-semibold hover:underline">541-337-5734</a>
            &nbsp;|&nbsp; Email:{' '}
            <a href="mailto:info@freeroofpros.com" className="text-white font-semibold hover:underline">info@freeroofpros.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
