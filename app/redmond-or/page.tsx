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
  CloudRain,
} from 'lucide-react';
import { LeadForm } from '@/components/sections/LeadForm';

export const metadata: Metadata = {
  title: 'Roof Repair Redmond OR | Free Hail Damage Inspection | FreeRoofPros',
  description:
    'Roof repair Redmond OR: free hail damage inspection, insurance claim help, and storm damage repair. August 2026 deadline for the 2025 Central Oregon hailstorm. Call 541-337-5734.',
  alternates: { canonical: 'https://www.freeroofpros.com/redmond-or' },
  openGraph: {
    title: 'Roof Repair Redmond OR | Free Hail Damage Inspection | FreeRoofPros',
    description: 'Roof repair Redmond OR: free hail damage inspection, insurance claim help, and storm damage repair. August 2026 deadline for the 2025 Central Oregon hailstorm. Call 541-337-5734.',
    url: 'https://www.freeroofpros.com/redmond-or',
    images: [{ url: 'https://www.freeroofpros.com/og-image.png', width: 1200, height: 630, alt: 'Free Roof Pros: Roof Repair Redmond Oregon' }],
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
    { '@type': 'City', name: 'Redmond', addressRegion: 'OR' },
    { '@type': 'City', name: 'Bend', addressRegion: 'OR' },
    { '@type': 'City', name: 'La Pine', addressRegion: 'OR' },
    { '@type': 'City', name: 'Terrebonne', addressRegion: 'OR' },
    { '@type': 'City', name: 'Sisters', addressRegion: 'OR' },
    { '@type': 'City', name: 'Prineville', addressRegion: 'OR' },
  ],
  description: 'Free roof inspections and insurance-covered storm damage repair for Redmond, Oregon homeowners. Specializing in hail damage insurance claims with a 99.7% claim approval rate.',
  priceRange: 'Deductible Only',
  sameAs: ['https://www.freeroofpros.com'],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Was Redmond, Oregon affected by the August 2025 hailstorm?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Redmond was in the direct path of the August 3, 2025 hailstorm that swept through Central Oregon. Deschutes County, which includes Redmond, was among the hardest-hit areas. Many Redmond roofs sustained hail impact damage that may not be visible from the ground but qualifies for a full insurance-covered replacement.' } },
    { '@type': 'Question', name: 'What is the insurance claim deadline for Redmond homeowners?', acceptedAnswer: { '@type': 'Answer', text: 'Most homeowners insurance policies allow one year from the date of loss to file a storm damage claim. The August 2025 hailstorm means the filing deadline is August 2026. Redmond homeowners who have not yet scheduled a free inspection should act now to avoid missing the cutoff.' } },
    { '@type': 'Question', name: 'How close is the FreeRoofPros office to Redmond?', acceptedAnswer: { '@type': 'Answer', text: 'Our office is located at 10801 NW 43rd Street in Terrebonne, Oregon, which is approximately 10 minutes from downtown Redmond. We are a genuine Central Oregon company, not an out-of-state contractor.' } },
    { '@type': 'Question', name: 'Does the high-desert climate in Redmond make hail damage worse?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Central Oregon roofs face a combination of intense UV radiation, wide daily temperature swings, and periodic severe hail events. These conditions accelerate granule loss and shingle brittleness.' } },
    { '@type': 'Question', name: 'What does a free roof inspection in Redmond include?', acceptedAnswer: { '@type': 'Answer', text: 'Our certified inspector examines the entire roof surface including field shingles, ridge caps, valleys, flashing, gutters, soffits, and fascia. We document every impact point with timestamped photographs and provide a written damage report the same day.' } },
    { '@type': 'Question', name: 'Which Redmond neighborhoods and areas do you serve?', acceptedAnswer: { '@type': 'Answer', text: 'We serve all Redmond neighborhoods including Downtown Redmond, Dry Canyon, Obsidian, Canyon Rim, Ridgeview, Forked Horn Butte, Eagle Crest, Pumice Flats, and new developments along Highway 97 and OR-126.' } },
  ],
};

export default function RedmondOrPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="bg-[#122E5F] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#2563eb] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <AlertTriangle className="w-4 h-4 shrink-0" />Redmond, OR: August 2026 insurance filing deadline is approaching
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">Free Roof Inspection &amp; Storm Damage Repair in Redmond, Oregon</h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              The August 2025 hailstorm put Redmond in its direct path, leaving thousands of homes with damage that qualifies for a full insurance-covered roof replacement. The filing window closes in August 2026. Our team is based 10 minutes away in Terrebonne.
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
            {[{ label: 'Claim Approval Rate', value: '99.7%' },{ label: 'Miles from Redmond', value: '~10 min' },{ label: 'Cost to You', value: 'Deductible Only' },{ label: 'Inspection', value: 'Always Free' }].map((stat) => (
              <div key={stat.label}><p className="text-2xl font-bold text-[#122E5F]">{stat.value}</p><p className="text-sm text-gray-500 mt-0.5">{stat.label}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* HAILSTORM IMPACT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">The August 2025 Hailstorm Impact on Redmond</h2>
            <p className="text-gray-700 leading-relaxed mb-4">On August 3, 2025, a severe hailstorm tracked directly through Central Oregon, placing Redmond in the impact zone alongside Bend, Terrebonne, Sisters, and Prineville. Deschutes County was among the hardest-hit areas in the state.</p>
            <p className="text-gray-700 leading-relaxed mb-4">Redmond sits at roughly 3,000 feet elevation in the high desert east of the Cascades. That environment creates intense ultraviolet radiation during long summer days, dramatic temperature swings, and periodic severe convective storms.</p>
            <p className="text-gray-700 leading-relaxed mb-4">What makes the August 2025 event significant is the scale of coverage. This was not a localized cell but a storm system that tracked across much of the county.</p>
            <p className="text-gray-700 leading-relaxed">Hail damage on a Central Oregon roof is often not visible from the street. Many Redmond homeowners with legitimate claims do not know they have one.</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4"><CloudRain className="w-6 h-6 text-[#2563eb] shrink-0" /><h3 className="text-lg font-bold text-[#122E5F]">Why High-Desert Roofs Are Vulnerable</h3></div>
            <ul className="space-y-3">
              {[
                'UV radiation at 3,000+ ft elevation degrades shingle granules faster than lower elevations',
                'Daily temperature swings of 40+ degrees Fahrenheit cause repeated thermal expansion and contraction',
                'Dry air accelerates brittleness in asphalt shingles, making them more susceptible to hail impact',
                'Sparse tree coverage means roofs have no shade buffer from direct sun or storm exposure',
                'High-desert hail tends to fall with high kinetic energy due to lower air density and faster terminal velocity',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm"><CheckCircle className="w-4 h-4 text-[#2563eb] mt-0.5 shrink-0" />{item}</li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-blue-200">
              <p className="text-sm text-blue-800 font-medium">These factors mean a roof that might pass a cursory glance can have significant functional damage that your insurance company is required to cover.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEADLINE URGENCY */}
      <section className="bg-amber-50 border-y border-amber-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <Calendar className="w-4 h-4 shrink-0" />Time-Sensitive: Act Before August 2026
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">Insurance Claim Deadline: August 2026</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Homeowners insurance policies contain a provision that limits how long after a covered event you can file a claim. For the August 3, 2025 hailstorm, that window is one year, placing the hard deadline in August 2026.</p>
              <p className="text-gray-700 leading-relaxed mb-4">This is not a soft guideline. Once the one-year filing window closes, your insurer is legally entitled to deny any storm-related claim linked to that event.</p>
              <p className="text-gray-700 leading-relaxed mb-6">The free inspection takes less than an hour. If your roof shows qualifying damage, we handle the entire claim process on your behalf.</p>
              <h3 className="text-lg font-semibold text-[#122E5F] mb-3">What Redmond homeowners should do now:</h3>
              <ul className="space-y-2">
                {[
                  'Schedule a free inspection before the August 2026 deadline',
                  'Locate your homeowners insurance policy and note your deductible amount',
                  'Do not attempt temporary repairs before an inspection. Document everything first.',
                  'Call 541-337-5734 or use the form below to get on our inspection schedule',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700"><CheckCircle className="w-5 h-5 text-[#2563eb] mt-0.5 shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <div className="bg-white border border-amber-300 rounded-xl p-6">
                <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />Do not miss this window</h3>
                <p className="text-amber-900 text-sm leading-relaxed">A full roof replacement typically costs $12,000 to $18,000 in Central Oregon. With a valid insurance claim, most Redmond homeowners pay only their deductible, often $1,000 to $2,500.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-[#122E5F] mb-3">Common reasons Redmond homeowners delay:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {["\"My roof isn't leaking, so it probably isn't damaged.\"","\"I don't want to deal with the insurance company.\"","\"I'll get around to it eventually.\"","\"I didn't notice any damage after the storm.\""].map((reason) => (
                    <li key={reason} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-red-400 flex items-center justify-center shrink-0 mt-0.5"><span className="block w-2 h-0.5 bg-red-400 rounded" /></span>
                      <span className="italic">{reason}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 mt-4">We handle every part of the process so none of these are valid reasons to wait.</p>
              </div>
              <a href="tel:541-337-5734" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors w-full justify-center">
                <Phone className="w-4 h-4" />Call 541-337-5734 Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FREE INSPECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">Free Roof Inspection for Redmond Homes</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mb-8">Our certified inspectors travel from our Terrebonne office, roughly 10 minutes from Redmond, to assess your roof at no charge.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Full Roof Surface Inspection', detail: 'Every field shingle, ridge cap, valley, and hip is examined for hail impact bruising, granule displacement, and cracking.' },
            { title: 'Flashing and Penetration Check', detail: 'Pipe boots, chimney flashing, skylight frames, and metal drip edge are common points of impact damage.' },
            { title: 'Gutter and Soffit Assessment', detail: 'Hail leaves distinctive dents in aluminum gutters and fascia that serve as corroborating evidence in insurance claims.' },
            { title: 'Attic Moisture Check', detail: 'When possible, we check the attic for signs of water intrusion, damaged sheathing, and inadequate ventilation.' },
            { title: 'Timestamped Photo Report', detail: 'Every damage point is documented with timestamped, geotagged photographs. You receive a complete report the same day.' },
            { title: 'Claim Feasibility Assessment', detail: 'Our inspector gives you a straight assessment of whether your roof has a viable insurance claim. We do not file marginal claims.' },
          ].map((item) => (
            <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <CheckCircle className="w-6 h-6 text-[#2563eb] mb-3" />
              <h3 className="font-semibold text-[#122E5F] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#lead-form" className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"><Search className="w-5 h-5" />Book My Free Inspection</a>
          <Link href="/services/storm-damage-repair" className="inline-flex items-center gap-2 border border-[#2563eb] text-[#2563eb] hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors">Learn About Storm Damage Repair</Link>
        </div>
      </section>

      {/* INSURANCE CLAIM PROCESS */}
      <section className="bg-[#122E5F] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Our Insurance Claim Process</h2>
          <p className="text-blue-200 mb-10 max-w-2xl">We handle every step from inspection to installation. Our 99.7% claim approval rate is the result of doing each step correctly the first time.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: '01', icon: Search, title: 'Free Inspection', description: 'A certified inspector examines your Redmond home from ridge to gutter, documenting every impact point with photographs and measurements.' },
              { step: '02', icon: FileText, title: 'Damage Report', description: 'We compile a professional report with weather data from August 3, 2025, impact measurements, and photographs that insurance adjusters accept.' },
              { step: '03', icon: ClipboardList, title: 'Claim Filing', description: 'Our claim specialists file your insurance claim using the correct damage codes and complete supporting documentation.' },
              { step: '04', icon: Users, title: 'Adjuster Meeting', description: 'We meet your insurance adjuster on your Redmond roof and walk every covered item together, ensuring nothing is missed.' },
              { step: '05', icon: Hammer, title: 'New Roof Installed', description: 'Our crews complete your roof replacement, typically in one to three days, with full cleanup and a final walkthrough.' },
            ].map((item) => (
              <div key={item.step}>
                <div className="bg-[#2563eb] text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center mb-4">{item.step}</div>
                <item.icon className="w-6 h-6 text-blue-300 mb-3" />
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-blue-100 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/services/insurance-claims" className="inline-flex items-center gap-2 bg-white text-[#122E5F] hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors"><FileText className="w-5 h-5" />Full Insurance Claims Guide</Link>
          </div>
        </div>
      </section>

      {/* HAIL DAMAGE SIGNS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">Hail Damage Signs on Central Oregon Roofs</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Identifying hail damage on a high-desert roof requires knowing what to look for in this specific climate.</p>
            <p className="text-gray-700 leading-relaxed mb-6">The combination of intense UV exposure and dry heat causes asphalt shingles to lose granules and become more brittle over time. This type of functional damage shortens the remaining life of the roof and qualifies for an insurance claim even if there is no immediate leak.</p>
            <h3 className="text-lg font-semibold text-[#122E5F] mb-3">What our inspectors look for on Redmond roofs:</h3>
            <ul className="space-y-2">
              {[
                'Circular granule displacement exposing the dark asphalt mat beneath',
                'Soft spots or bruising detectable by hand pressure on shingle surface',
                'Fractured or missing shingles, particularly on south and west exposures',
                'Dented aluminum gutters, downspouts, and drip edge',
                'Impact marks on metal pipe boots, ridge vents, and flashing',
                'Cracked or split shingles on older roofs with UV-related brittleness',
                'Damaged roof vents and HVAC condenser fins as corroborating evidence',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700"><CheckCircle className="w-5 h-5 text-[#2563eb] mt-0.5 shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-[#122E5F] mb-3">The UV Factor in Central Oregon</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">Redmond receives over 300 days of sunshine per year and sits at an elevation where UV intensity is measurably higher than at sea level.</p>
              <p className="text-gray-700 text-sm leading-relaxed">A 15-year-old Redmond roof may have the functional characteristics of a 20-year-old roof in Portland. Our inspectors document both the storm damage and the climate-related context that supports a full replacement claim.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-[#122E5F] mb-3">Temperature Swings and Roof Stress</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Redmond regularly experiences 40-degree temperature differentials between overnight lows and afternoon highs. This thermal cycling causes roofing materials to expand and contract repeatedly, opening micro-fractures in shingle surfaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-3">Redmond Neighborhoods We Serve</h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl mb-8">We serve every part of Redmond and the surrounding Deschutes County communities.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3"><MapPin className="w-5 h-5 text-[#2563eb]" /><h3 className="font-semibold text-[#122E5F]">Redmond City Neighborhoods</h3></div>
              <ul className="space-y-1.5 text-gray-700 text-sm">
                {['Downtown Redmond','Dry Canyon','Obsidian','Canyon Rim','Ridgeview','Forked Horn Butte','Pumice Flats','Eagle Crest','Sam Johnson Park area'].map((n) => (
                  <li key={n} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#2563eb] shrink-0" />{n}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3"><MapPin className="w-5 h-5 text-[#2563eb]" /><h3 className="font-semibold text-[#122E5F]">Surrounding Communities</h3></div>
              <ul className="space-y-1.5 text-gray-700 text-sm">
                {['Terrebonne','Crooked River Ranch','Cline Falls area','Highway 97 corridor','OR-126 West corridor','Rural Deschutes County','Lake Billy Chinook area'].map((n) => (
                  <li key={n} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#2563eb] shrink-0" />{n}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3"><MapPin className="w-5 h-5 text-[#2563eb]" /><h3 className="font-semibold text-[#122E5F]">Other Central Oregon Cities</h3></div>
              <ul className="space-y-1.5 text-gray-700 text-sm">
                {['Bend, OR','La Pine, OR','Sisters, OR','Prineville, OR','Madras, OR','Sunriver, OR'].map((n) => (
                  <li key={n} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#2563eb] shrink-0" />{n}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FREEROOFPROS FOR REDMOND */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-4">Why FreeRoofPros for Redmond</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mb-8">Central Oregon homeowners dealing with the aftermath of the August 2025 hailstorm deserve a contractor who knows the area, understands the climate, and has a proven record with insurance claims.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {[
            { title: 'We Are 10 Minutes Away', detail: 'Our office at 10801 NW 43rd Street in Terrebonne is approximately 10 minutes from downtown Redmond. We are not an out-of-state company chasing storm events.' },
            { title: 'We Know Central Oregon Roofs', detail: 'High-desert roofing has specific challenges that contractors from wetter climates do not fully understand. Our team accounts for UV exposure and thermal cycling in every project.' },
            { title: '99.7% Claim Approval Rate', detail: 'We do not file claims we cannot win. Our documentation standards and inspection methodology produce approvals at a rate that reflects years of refinement.' },
            { title: 'No Out-of-Pocket Cost to Inspect', detail: 'The inspection is completely free. If your roof qualifies for a claim, you pay only your deductible for the full replacement.' },
            { title: 'We Handle the Insurance Company', detail: 'We file the claim, attend the adjuster meeting, respond to requests for additional documentation, and advocate for the full scope of covered repairs.' },
            { title: 'Licensed, Insured, and Permitted', detail: 'We are licensed in Oregon and carry full general liability and workers compensation insurance. Every Redmond project is permitted through Deschutes County.' },
          ].map((item) => (
            <div key={item.title} className="border border-gray-200 rounded-xl p-5 bg-white">
              <ShieldCheck className="w-6 h-6 text-[#2563eb] mb-3" />
              <h3 className="font-semibold text-[#122E5F] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/services/roof-replacement" className="inline-flex items-center gap-2 border border-[#2563eb] text-[#2563eb] hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors">View Roof Replacement Services</Link>
          <Link href="/bend-or" className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 py-3 rounded-lg transition-colors"><MapPin className="w-4 h-4" />Bend, OR Page</Link>
          <Link href="/la-pine-or" className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 py-3 rounded-lg transition-colors"><MapPin className="w-4 h-4" />La Pine, OR Page</Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-2">What Redmond-Area Homeowners Say</h2>
          <p className="text-gray-600 mb-8">Real reviews from Central Oregon homeowners.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { quote: 'After the August storm I assumed my roof was fine because there was no leak. Free Roof Pros came out and found significant hail damage across the entire field. They filed the claim, met the adjuster, and my new roof was on three weeks later. I paid my $1,500 deductible. That was it.', author: 'Kevin M.', location: 'Redmond, OR' },
              { quote: 'I was skeptical about the whole insurance claim process. But the team was straightforward from the start. They told me exactly what to expect, handled all the paperwork, and the adjuster approved the full replacement on the first review. Our Ridgeview home looks brand new.', author: 'Sandra L.', location: 'Redmond, OR' },
              { quote: 'Having a local company matters. These guys know Deschutes County and they know how Oregon insurers operate. My claim went through without any back-and-forth. Fast, professional, and they cleaned up the property completely.', author: 'Tom B.', location: 'Redmond, OR' },
            ].map((t) => (
              <div key={t.author} className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="flex gap-1 mb-3">{[1,2,3,4,5].map((s) => (<Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />))}</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">&quot;{t.quote}&quot;</p>
                <p className="text-sm font-semibold text-[#122E5F]">&ndash; {t.author},{' '}<span className="font-normal text-gray-500">{t.location}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#122E5F] mb-2">Frequently Asked Questions: Redmond, Oregon Roof Repair</h2>
        <p className="text-gray-600 mb-8">Questions specific to roof repair, hail damage claims, and the August 2025 storm in Redmond.</p>
        <div className="max-w-3xl divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
          {[
            { q: 'Was Redmond directly affected by the August 2025 hailstorm?', a: 'Yes. Redmond was in the direct path of the August 3, 2025 storm system that swept through Central Oregon. Many Redmond homes sustained functional roof damage that qualifies for a full insurance-covered replacement, even if no leak has appeared yet.' },
            { q: 'What is the insurance deadline for the August 2025 storm?', a: 'Most homeowners insurance policies allow one year from the date of loss to file a claim. With the storm occurring on August 3, 2025, the filing deadline falls in August 2026.' },
            { q: 'How far is the FreeRoofPros office from Redmond?', a: 'Our office is at 10801 NW 43rd Street in Terrebonne, Oregon, approximately 10 minutes from downtown Redmond via Highway 97.' },
            { q: 'My roof is not leaking. Does that mean there is no claim?', a: 'No. Functional hail damage that shortens the life of your roof qualifies for an insurance claim even without an active leak. Granule loss, bruised shingles, and dented metal surfaces are all covered damage indicators.' },
            { q: 'What Redmond neighborhoods do you serve?', a: 'We serve all Redmond neighborhoods including Downtown Redmond, Dry Canyon, Obsidian, Canyon Rim, Ridgeview, Forked Horn Butte, Eagle Crest, and Pumice Flats.' },
            { q: 'How does the high-desert climate affect my roof insurance claim?', a: 'Central Oregon roofs face intense UV radiation, temperature swings of 40 degrees or more, and periodic severe hail. Our inspectors document the climate-related context alongside the storm damage.' },
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
          Have more questions?{' '}
          <Link href="/blog/central-oregon-hailstorm-2025" className="text-[#2563eb] hover:underline">Read our Central Oregon hailstorm guide</Link>{' '}or call{' '}
          <a href="tel:541-337-5734" className="text-[#2563eb] hover:underline">541-337-5734</a>.
        </p>
      </section>

      {/* LEAD FORM */}
      <section id="lead-form" className="bg-[#122E5F] text-white py-14 sm:py-16 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Schedule Your Free Roof Inspection in Redmond</h2>
            <p className="text-blue-200 leading-relaxed">No cost, no obligation. Our team is based 10 minutes away in Terrebonne. The August 2026 deadline is closer than it seems.</p>
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/services/roof-replacement" className="flex items-center gap-3 border border-gray-200 rounded-xl p-5 hover:border-[#2563eb] hover:bg-blue-50 transition-colors group">
            <Hammer className="w-6 h-6 text-[#2563eb] shrink-0" />
            <div><p className="font-semibold text-[#122E5F] group-hover:text-[#2563eb] transition-colors">Roof Replacement</p><p className="text-sm text-gray-500">Insurance-covered replacement</p></div>
          </Link>
          <Link href="/services/insurance-claims" className="flex items-center gap-3 border border-gray-200 rounded-xl p-5 hover:border-[#2563eb] hover:bg-blue-50 transition-colors group">
            <FileText className="w-6 h-6 text-[#2563eb] shrink-0" />
            <div><p className="font-semibold text-[#122E5F] group-hover:text-[#2563eb] transition-colors">Insurance Claims</p><p className="text-sm text-gray-500">Step-by-step claim process</p></div>
          </Link>
          <Link href="/services/storm-damage-repair" className="flex items-center gap-3 border border-gray-200 rounded-xl p-5 hover:border-[#2563eb] hover:bg-blue-50 transition-colors group">
            <CloudRain className="w-6 h-6 text-[#2563eb] shrink-0" />
            <div><p className="font-semibold text-[#122E5F] group-hover:text-[#2563eb] transition-colors">Storm Damage Repair</p><p className="text-sm text-gray-500">Hail, wind &amp; emergency repairs</p></div>
          </Link>
          <Link href="/blog/central-oregon-hailstorm-2025" className="flex items-center gap-3 border border-gray-200 rounded-xl p-5 hover:border-[#2563eb] hover:bg-blue-50 transition-colors group">
            <AlertTriangle className="w-6 h-6 text-[#2563eb] shrink-0" />
            <div><p className="font-semibold text-[#122E5F] group-hover:text-[#2563eb] transition-colors">2025 Hailstorm Guide</p><p className="text-sm text-gray-500">Central Oregon storm coverage</p></div>
          </Link>
        </div>
      </section>
    </>
  );
}
