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
  Home,
  TreePine,
} from 'lucide-react';
import { LeadForm } from '@/components/sections/LeadForm';

export const metadata: Metadata = {
  title: 'Roof Repair La Pine OR | Free Hail Damage Inspection | FreeRoofPros',
  description:
    'Roof repair La Pine OR. Free hail damage inspection for the August 2025 storm. File your insurance claim before the August 2026 deadline. 99.7% approval rate. Call 541-337-5734.',
  alternates: { canonical: 'https://www.freeroofpros.com/la-pine-or' },
  openGraph: {
    title: 'Roof Repair La Pine OR | Free Hail Damage Inspection | FreeRoofPros',
    description: 'Roof repair La Pine OR. Free hail damage inspection for the August 2025 storm. File your insurance claim before the August 2026 deadline. 99.7% approval rate. Call 541-337-5734.',
    url: 'https://www.freeroofpros.com/la-pine-or',
    images: [{ url: 'https://www.freeroofpros.com/og-image.png', width: 1200, height: 630, alt: 'Free Roof Pros - Roof Repair La Pine Oregon' }],
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Free Roof Pros',
  url: 'https://www.freeroofpros.com',
  telephone: '541-337-5734',
  email: 'info@freeroofpros.com',
  address: { '@type': 'PostalAddress', streetAddress: '10801 NW 43rd Street', addressLocality: 'Terrebonne', addressRegion: 'OR', postalCode: '97760', addressCountry: 'US' },
  areaServed: [
    { '@type': 'City', name: 'La Pine', addressRegion: 'OR' },
    { '@type': 'City', name: 'Sunriver', addressRegion: 'OR' },
    { '@type': 'City', name: 'Gilchrist', addressRegion: 'OR' },
    { '@type': 'City', name: 'Chemult', addressRegion: 'OR' },
    { '@type': 'City', name: 'Crescent', addressRegion: 'OR' },
    { '@type': 'City', name: 'Bend', addressRegion: 'OR' },
    { '@type': 'City', name: 'Redmond', addressRegion: 'OR' },
  ],
  description: 'Free Roof Pros provides free hail damage inspections and insurance claim assistance for La Pine, Oregon homeowners. Serving all of southern Deschutes County.',
  sameAs: ['https://www.freeroofpros.com'],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Was La Pine Oregon affected by the August 2025 hailstorm?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The August 3, 2025 hailstorm moved through southern Deschutes County and caused widespread roof damage in La Pine, Sunriver, Three Rivers, Wickiup Junction, and surrounding rural areas.' } },
    { '@type': 'Question', name: 'What is the insurance claim deadline for La Pine hail damage?', acceptedAnswer: { '@type': 'Answer', text: 'Most homeowners insurance policies allow one year from the date of loss to file a claim. For the August 2025 hailstorm, that deadline is August 2026.' } },
    { '@type': 'Question', name: 'Do you inspect manufactured homes and cabins in La Pine?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We inspect all residential property types common in the La Pine area, including manufactured homes, modular homes, log cabins, vacation properties, and standard site-built homes.' } },
    { '@type': 'Question', name: 'How does heavy snowload affect hail damage claims in La Pine?', acceptedAnswer: { '@type': 'Answer', text: 'La Pine sits at roughly 4,300 feet elevation and receives significant annual snowfall. Hail damage weakens shingle integrity, making roofs more vulnerable to ice and snow infiltration.' } },
    { '@type': 'Question', name: 'Will pine trees near my home affect my La Pine insurance claim?', acceptedAnswer: { '@type': 'Answer', text: 'Dense ponderosa pine canopy can make hail damage harder to spot from the ground, but our certified inspectors assess the roof surface directly. Tree debris and needle accumulation are noted separately from storm impact damage.' } },
    { '@type': 'Question', name: 'How far does Free Roof Pros travel from Terrebonne to serve La Pine?', acceptedAnswer: { '@type': 'Answer', text: 'Our Terrebonne office is approximately 65 miles from La Pine, and we actively serve the entire southern Deschutes County area. There is no travel fee for inspections in La Pine, Sunriver, Gilchrist, Chemult, Crescent, or surrounding communities.' } },
  ],
};

export default function LaPineOR() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="bg-[#122E5F] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#2563eb] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <AlertTriangle className="w-4 h-4 shrink-0" />August 2026 insurance claim deadline approaching for La Pine homeowners
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">Free Roof Inspection &amp; Storm Damage Repair in La Pine, Oregon</h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              The August 2025 hailstorm left widespread damage across southern Deschutes County. Many La Pine homeowners still don&apos;t know their roofs qualify for full insurance-covered replacement. Our 99.7% claim approval rate means your project moves forward.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#lead-form" className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"><ClipboardList className="w-5 h-5" />Schedule Free Inspection</a>
              <a href="tel:541-337-5734" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20"><Phone className="w-5 h-5" />541-337-5734</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[{ label: 'Claim Approval Rate', value: '99.7%' },{ label: 'Inspection Cost', value: 'Always Free' },{ label: 'Cost to You', value: 'Deductible Only' },{ label: 'Southern Deschutes County', value: 'Fully Served' }].map((stat) => (
              <div key={stat.label}><p className="text-2xl font-bold text-[#122E5F]">{stat.value}</p><p className="text-sm text-gray-500 mt-0.5">{stat.label}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* THE STORM */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">The August 2025 Hailstorm: La Pine Was Hit Hard</h2>
            <p className="text-gray-700 leading-relaxed mb-4">On August 3, 2025, a severe hailstorm swept through central and southern Deschutes County, battering communities from Bend southward through Sunriver and into the La Pine area. Hailstones reached up to 1.5 inches in diameter.</p>
            <p className="text-gray-700 leading-relaxed mb-4">La Pine&apos;s rural setting made the storm&apos;s impact harder to detect. Properties sit on larger lots, often shaded by dense ponderosa pine. Many homeowners assumed their roofs were fine because they saw no interior leaks.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Our certified inspectors have documented significant storm damage on homes throughout the La Pine corridor. Cabins, manufactured homes, standard site-built residences, and rural outbuildings all show consistent hail impact patterns.</p>
            <div className="flex flex-col gap-3">
              {[
                'Granule loss on asphalt shingles from direct hail strikes',
                'Dented or cracked ridge caps and hip shingles',
                'Bent and punctured aluminum flashing and drip edge',
                'Hail spatter on gutters, downspouts, and soft metals',
                'Impact bruising on sheathing visible from attic side',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-gray-700"><CheckCircle className="w-5 h-5 text-[#2563eb] mt-0.5 shrink-0" />{item}</div>
              ))}
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 lg:sticky lg:top-6">
            <div className="flex items-center gap-3 mb-4"><AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" /><h3 className="text-lg font-bold text-amber-800">La Pine: Don&apos;t Miss Your Window</h3></div>
            <p className="text-amber-900 leading-relaxed mb-4">The August 2025 storm triggered a one-year insurance filing deadline. That window closes in <strong>August 2026</strong>. Thousands of La Pine area homeowners have qualifying damage but have not yet filed a claim.</p>
            <p className="text-amber-900 leading-relaxed mb-5">A free inspection costs you nothing and could save you $10,000 or more.</p>
            <a href="tel:541-337-5734" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors w-full justify-center">
              <Phone className="w-4 h-4" />Call 541-337-5734 Now
            </a>
          </div>
        </div>
      </section>

      {/* DEADLINE */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">Your Insurance Claim Deadline Is August 2026</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mb-6">Oregon homeowners insurance policies follow standard industry practice: claims must be filed within one year of the date of loss. For the August 3, 2025 storm, that means the clock runs out in August 2026.</p>
          <p className="text-gray-700 leading-relaxed max-w-3xl mb-6">La Pine&apos;s rural character means word spreads slowly. Many homeowners in this area have not received any outreach from contractors. The only way to know whether your roof qualifies is a direct, on-site inspection.</p>
          <p className="text-gray-700 leading-relaxed max-w-3xl mb-8">If your roof has qualifying damage, we file your claim immediately so you&apos;re well ahead of the deadline.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Still Qualifies', desc: 'Damage from the August 2025 storm still qualifies for a claim even if you have not yet reported it to your insurer.' },
              { title: 'No Upfront Cost', desc: 'Our inspection is free. We only get paid when your insurance company approves your claim and your new roof is installed.' },
              { title: 'Act Before August 2026', desc: 'Filing a claim takes time. Schedule your inspection now so there is no risk of missing the filing window.' },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="text-sm font-semibold text-[#2563eb] uppercase tracking-wide mb-2">{card.title}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE INSPECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">Free Roof Inspection for La Pine Properties</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mb-6">La Pine is not a typical suburban market. Properties here range from compact manufactured homes to sprawling rural parcels with multiple outbuildings, large cabins on forested acreage, and vacation rentals near Wickiup Reservoir.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Home, title: 'Standard Residential', desc: 'Site-built homes throughout La Pine, Hwy 97 corridor, and La Pine State Recreation Area neighborhoods.' },
            { icon: Home, title: 'Manufactured Homes', desc: 'HUD-code and modular homes are common in the La Pine area. We inspect all roof types, including metal panel roofs.' },
            { icon: TreePine, title: 'Cabins and Vacation Properties', desc: 'Forested properties near Wickiup Reservoir, Paulina Lake Road, and the Newberry Volcanic area inspected with full photo documentation.' },
            { icon: MapPin, title: 'Rural Acreage Properties', desc: 'Large lots, agricultural outbuildings, and shop structures all assessed as part of a comprehensive property inspection.' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-5">
              <item.icon className="w-6 h-6 text-[#2563eb] mb-3" />
              <h3 className="font-semibold text-[#122E5F] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed max-w-3xl">You do not need to be home during the inspection. Many La Pine homeowners leave a gate unlocked and receive a full photo report by email the same day.</p>
      </section>

      {/* INSURANCE CLAIM PROCESS */}
      <section className="bg-[#122E5F] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">How We Handle Your Insurance Claim</h2>
          <p className="text-blue-200 mb-10 max-w-2xl">Our 99.7% claim approval rate is built on a proven, repeatable process. We handle every step so you never have to negotiate with your insurer on your own.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: '01', icon: Search, title: 'Free Roof Inspection', description: 'A certified inspector assesses your entire roof, including field shingles, ridge, valleys, flashing, gutters, and soffits. Every impact point is photographed.' },
              { step: '02', icon: FileText, title: 'Damage Documentation', description: 'We compile a professional damage report including weather data from August 3, 2025, hail size measurements, and timestamped photographs.' },
              { step: '03', icon: ClipboardList, title: 'Claim Filing', description: 'Our claim specialists file your insurance claim with the correct damage codes and supporting evidence, giving your claim the strongest possible foundation.' },
              { step: '04', icon: Users, title: 'Adjuster Meeting', description: 'We meet your insurance adjuster on-site and walk the roof together, ensuring every covered item is captured in the scope of loss before they leave.' },
              { step: '05', icon: Hammer, title: 'Roof Installation', description: 'Once approved, our licensed crews install your new roof. Most La Pine homes are completed in one to three days, with full clean-up and a final walkthrough.' },
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
            <a href="#lead-form" className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">Start Your Free Inspection</a>
            <Link href="/services/insurance-claims" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors border border-white/20">Insurance Claims Guide</Link>
          </div>
        </div>
      </section>

      {/* HAIL DAMAGE ON LA PINE ROOFS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">Hail Damage on La Pine Roofs</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Southern Deschutes County presents unique roofing challenges. La Pine sits at approximately 4,300 feet elevation, receives 30 to 40 inches of snow annually, and experiences wide temperature swings.</p>
            <p className="text-gray-700 leading-relaxed mb-4">When hail damages the granule layer of asphalt shingles, the underlying mat is exposed to UV degradation. In La Pine&apos;s high-desert sun, that process accelerates significantly.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Heavy annual snowloads compound the issue. Compromised shingles and flashing allow ice infiltration during freeze-thaw cycles. Insurance adjusters familiar with high-elevation properties understand this risk.</p>
            <h3 className="text-lg font-semibold text-[#122E5F] mb-3">La Pine climate factors we document:</h3>
            <ul className="space-y-2">
              {[
                'Elevation-related UV acceleration of hail-damaged shingles',
                'Snowload stress on weakened flashing and ridge systems',
                'Freeze-thaw cycles that exploit compromised underlayment',
                'Pine needle and sap accumulation masking surface damage',
                'Wide thermal cycling between summer highs and winter lows',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700"><CheckCircle className="w-5 h-5 text-[#2563eb] mt-0.5 shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <div className="bg-[#122E5F] rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-3">Class 4 Shingles for La Pine</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">After an insurance-covered replacement, many La Pine homeowners upgrade to Class 4 impact-resistant shingles. These are tested to withstand 2-inch steel ball impacts.</p>
              <p className="text-blue-100 text-sm leading-relaxed">Many Oregon insurers offer a 10 to 30 percent premium discount for homes with Class 4 roofing, so the upgrade can pay for itself over time.</p>
            </div>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-[#122E5F] mb-3">Metal Roofing for High-Snowload Properties</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Standing seam metal roofing is a popular choice for La Pine properties that need superior snow shedding and long-term durability. With a lifespan of 40 to 70 years, it handles the thermal cycling and snow loads of southern Deschutes County.</p>
            </div>
            <div className="mt-4">
              <Link href="/services/roof-replacement" className="inline-flex items-center gap-2 border border-[#2563eb] text-[#2563eb] hover:bg-blue-50 font-semibold px-5 py-3 rounded-lg transition-colors"><Hammer className="w-4 h-4" />View All Roofing Materials</Link>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS WE SERVE */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-3">La Pine and Surrounding Areas We Serve</h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mb-8">Our Terrebonne office serves all of southern Deschutes County and the surrounding Klamath County communities.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3"><MapPin className="w-5 h-5 text-[#2563eb]" /><h3 className="font-semibold text-[#122E5F]">La Pine Area Communities</h3></div>
              <ul className="space-y-1.5 text-gray-700 text-sm">
                {['La Pine','Sunriver','Three Rivers','Wickiup Junction','Fall River','Spring River'].map((city) => (
                  <li key={city} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#2563eb] shrink-0" />{city}, OR</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3"><MapPin className="w-5 h-5 text-[#2563eb]" /><h3 className="font-semibold text-[#122E5F]">Southern Klamath County</h3></div>
              <ul className="space-y-1.5 text-gray-700 text-sm">
                {['Gilchrist','Chemult','Crescent','Crescent Lake','Beaver Marsh','Silver Lake area'].map((city) => (
                  <li key={city} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#2563eb] shrink-0" />{city}, OR</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3"><MapPin className="w-5 h-5 text-[#2563eb]" /><h3 className="font-semibold text-[#122E5F]">Northern Deschutes County</h3></div>
              <ul className="space-y-1.5 text-gray-700 text-sm">
                {['Bend','Redmond','Terrebonne','Sisters','Prineville','Madras'].map((city) => (
                  <li key={city} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#2563eb] shrink-0" />{city}, OR</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/bend-or" className="inline-flex items-center gap-2 border border-gray-200 hover:border-[#2563eb] hover:bg-blue-50 text-gray-700 hover:text-[#2563eb] font-medium px-4 py-2 rounded-lg transition-colors text-sm"><MapPin className="w-4 h-4" />Bend, OR Page</Link>
            <Link href="/redmond-or" className="inline-flex items-center gap-2 border border-gray-200 hover:border-[#2563eb] hover:bg-blue-50 text-gray-700 hover:text-[#2563eb] font-medium px-4 py-2 rounded-lg transition-colors text-sm"><MapPin className="w-4 h-4" />Redmond, OR Page</Link>
          </div>
        </div>
      </section>

      {/* WHY FREEROOFPROS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">Why FreeRoofPros for La Pine</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mb-8">We are not a national franchise operating from a call center in another state. Our Terrebonne office sits at the heart of Central Oregon, roughly 65 miles from La Pine.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            { title: 'Local Knowledge', desc: 'We know the difference between a roof built for La Pine snowloads and one that has been quietly failing for two winters.' },
            { title: 'Rural Property Experience', desc: 'La Pine properties are different from urban lots. We handle long driveways, forested sites, septic setbacks, and the access challenges that come with rural Oregon parcels.' },
            { title: 'Insurance Claim Specialists', desc: 'With a 99.7% claim approval rate across thousands of filed claims, our documentation process is designed to get your claim approved on the first submission.' },
            { title: 'No-Cost, No-Pressure Model', desc: 'We only get paid when your insurance company approves your claim and your roof is installed. There is no fee to inspect and no obligation if your roof does not qualify.' },
            { title: 'Licensed and Insured in Oregon', desc: "Our Oregon contractor license, general liability insurance, and workers' compensation coverage are current and on file." },
            { title: 'Adjuster Advocacy', desc: 'We attend your adjuster meeting and walk the roof alongside them. On complex La Pine properties with multiple structures, this on-site presence routinely expands the scope of approved coverage.' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-5">
              <ShieldCheck className="w-6 h-6 text-[#2563eb] mb-3" />
              <h3 className="font-semibold text-[#122E5F] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/blog/central-oregon-hailstorm-2025" className="inline-flex items-center gap-2 border border-[#2563eb] text-[#2563eb] hover:bg-blue-50 font-semibold px-5 py-3 rounded-lg transition-colors"><FileText className="w-4 h-4" />Read: Central Oregon Hailstorm 2025</Link>
          <Link href="/services/storm-damage-repair" className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 hover:border-[#2563eb] hover:text-[#2563eb] hover:bg-blue-50 font-semibold px-5 py-3 rounded-lg transition-colors">Storm Damage Repair Services</Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-2">What La Pine Area Homeowners Say</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">Real results from southern Deschutes County residents who scheduled their free inspection after the August 2025 storm.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { quote: "I thought our cabin roof was fine since we didn't see any leaks after the August storm. Free Roof Pros found serious hail damage all across the south-facing slope. Insurance covered a full replacement. I only paid my deductible.", author: 'Kevin M.', location: 'La Pine, OR' },
              { quote: "We have a manufactured home off Burgess Road and weren't sure if the company would even come out this far. They showed up right on time, did a thorough inspection, filed our claim the same week, and our new metal roof was on before the first snow.", author: 'Sandra and Tom H.', location: 'La Pine, OR' },
              { quote: 'Our insurance adjuster initially said the damage was cosmetic and denied the claim. Free Roof Pros came back with their documentation, met the adjuster on our roof, and got the denial overturned. The whole replacement was covered.', author: 'Craig D.', location: 'Sunriver, OR' },
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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-2">Frequently Asked Questions from La Pine Homeowners</h2>
        <p className="text-gray-600 mb-8">Specific questions about hail damage insurance claims in the La Pine area. Call us at{' '}<a href="tel:541-337-5734" className="text-[#2563eb] hover:underline">541-337-5734</a>{' '}if you need a faster answer.</p>
        <div className="max-w-3xl divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
          {[
            { q: 'Was La Pine affected by the August 2025 hailstorm?', a: 'Yes. The August 3, 2025 hailstorm moved through southern Deschutes County and caused widespread roof damage in La Pine, Sunriver, Three Rivers, Wickiup Junction, and surrounding rural communities.' },
            { q: 'What is the insurance claim deadline for La Pine residents?', a: 'Most homeowners insurance policies require claims to be filed within one year of the date of loss. For the August 2025 storm, the deadline is August 2026.' },
            { q: 'Do you inspect manufactured homes and rural properties in La Pine?', a: 'Yes. We inspect all property types common in the La Pine area, including manufactured homes, modular homes, log cabins, vacation properties, and standard site-built residences. There is no travel fee for properties in La Pine or anywhere else in southern Deschutes County.' },
            { q: 'Does heavy snowload affect my hail damage insurance claim?', a: 'La Pine sits at approximately 4,300 feet elevation and receives significant annual snowfall. Hail damage weakens shingle integrity, making roofs more vulnerable to ice infiltration and snow-related leaks during freeze-thaw cycles.' },
            { q: 'Will pine trees near my house affect the inspection or my claim?', a: 'Dense ponderosa pine canopy can make hail damage harder to spot from the ground, but our inspectors assess the roof surface directly. Pine needle accumulation and sap staining are documented separately from hail-related storm damage.' },
            { q: 'How far is your office from La Pine?', a: 'Our Terrebonne office is approximately 65 miles from La Pine. There is no travel surcharge for inspections in La Pine, Sunriver, Gilchrist, Chemult, Crescent, or the surrounding rural communities.' },
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
      </section>

      {/* LEAD FORM */}
      <section id="lead-form" className="bg-[#122E5F] text-white py-14 sm:py-16 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Schedule Your Free La Pine Roof Inspection</h2>
            <p className="text-blue-200 leading-relaxed">The August 2026 deadline is approaching. Schedule now, pay nothing, and find out in 24 hours whether your La Pine property qualifies for an insurance-covered replacement.</p>
          </div>
          <LeadForm />
          <p className="text-center text-blue-300 text-sm mt-6">
            Prefer to call?{' '}<a href="tel:541-337-5734" className="text-white font-semibold hover:underline">541-337-5734</a>&nbsp;|&nbsp; Email:{' '}
            <a href="mailto:info@freeroofpros.com" className="text-white font-semibold hover:underline">info@freeroofpros.com</a>
          </p>
        </div>
      </section>

      {/* BOTTOM NAV LINKS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Related Pages</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/services/roof-replacement" className="flex items-center gap-3 border border-gray-200 rounded-xl p-5 hover:border-[#2563eb] hover:bg-blue-50 transition-colors group">
            <Hammer className="w-6 h-6 text-[#2563eb] shrink-0" />
            <div><p className="font-semibold text-[#122E5F] group-hover:text-[#2563eb] transition-colors">Roof Replacement</p><p className="text-sm text-gray-500">Insurance-covered replacement</p></div>
          </Link>
          <Link href="/services/insurance-claims" className="flex items-center gap-3 border border-gray-200 rounded-xl p-5 hover:border-[#2563eb] hover:bg-blue-50 transition-colors group">
            <FileText className="w-6 h-6 text-[#2563eb] shrink-0" />
            <div><p className="font-semibold text-[#122E5F] group-hover:text-[#2563eb] transition-colors">Insurance Claims</p><p className="text-sm text-gray-500">Step-by-step claims guide</p></div>
          </Link>
          <Link href="/services/storm-damage-repair" className="flex items-center gap-3 border border-gray-200 rounded-xl p-5 hover:border-[#2563eb] hover:bg-blue-50 transition-colors group">
            <AlertTriangle className="w-6 h-6 text-[#2563eb] shrink-0" />
            <div><p className="font-semibold text-[#122E5F] group-hover:text-[#2563eb] transition-colors">Storm Damage Repair</p><p className="text-sm text-gray-500">Hail, wind, and emergency repairs</p></div>
          </Link>
          <Link href="/blog/central-oregon-hailstorm-2025" className="flex items-center gap-3 border border-gray-200 rounded-xl p-5 hover:border-[#2563eb] hover:bg-blue-50 transition-colors group">
            <FileText className="w-6 h-6 text-[#2563eb] shrink-0" />
            <div><p className="font-semibold text-[#122E5F] group-hover:text-[#2563eb] transition-colors">August 2025 Storm Report</p><p className="text-sm text-gray-500">Central Oregon hailstorm details</p></div>
          </Link>
        </div>
      </section>
    </>
  );
}
