import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  Phone,
  Camera,
  ClipboardList,
  Home,
  ThumbsUp,
  ChevronRight,
  Star,
  CalendarDays,
  HelpCircle,
} from 'lucide-react';
import { LeadForm } from '@/components/sections/LeadForm';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: 'How to File a Roof Insurance Claim | Free Inspection | FreeRoofPros',
  description:
    'We handle your entire roof insurance claim from inspection to approval. 99.7% success rate. Free roof inspection & claim assistance. Call 541-728-0266.',
  alternates: {
    canonical: 'https://www.freeroofpros.com/services/insurance-claims',
  },
  openGraph: {
    title: 'How to File a Roof Insurance Claim | Free Inspection | FreeRoofPros',
    description:
      'We handle your entire roof insurance claim from inspection to approval. 99.7% success rate. Free roof inspection & claim assistance. Call 541-728-0266.',
    url: 'https://www.freeroofpros.com/services/insurance-claims',
    images: [
      {
        url: 'https://www.freeroofpros.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FreeRoofPros – Roof Insurance Claim Assistance',
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------
export default function InsuranceClaims() {
  // --- JSON-LD: Service Schema ---
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Roof Insurance Claim Assistance',
    serviceType: 'Insurance Claim Filing',
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
      'Full-service roof insurance claim assistance. We handle documentation, filing, adjuster meetings, and appeals. 99.7% approval rate.',
    url: 'https://www.freeroofpros.com/services/insurance-claims',
  };

  // --- JSON-LD: FAQPage Schema ---
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I file a roof insurance claim?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Start with a free professional roof inspection to document all storm damage with photos and measurements. Then file a claim with your insurance company — or let FreeRoofPros handle the entire filing on your behalf. We prepare the documentation, submit the claim, and meet the adjuster on your roof to ensure nothing is missed.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a roof insurance claim take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most claims resolve in 4–8 weeks from initial inspection to roof installation. Inspection and documentation takes 1–2 weeks; adjuster scheduling typically takes 2–4 weeks; approval and scope-of-work review takes 1–2 weeks; and installation is usually completed in 1–2 days.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if my roof insurance claim is denied?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A denial is not the end of the road. FreeRoofPros will request a re-inspection, gather supplemental documentation, and file a formal appeal with your insurer. If necessary, we can recommend a licensed public adjuster who works on your behalf to negotiate a fair settlement.',
        },
      },
      {
        '@type': 'Question',
        name: "What is the difference between RCV and ACV on my insurance policy?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "RCV (Replacement Cost Value) pays to replace your roof at today's material and labor prices, minus your deductible. ACV (Actual Cash Value) pays RCV minus depreciation — meaning older roofs may receive significantly less. RCV policies are strongly preferred because they leave you with little or no out-of-pocket cost beyond the deductible.",
        },
      },
      {
        '@type': 'Question',
        name: 'What is the deadline to file a hail damage claim in Oregon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oregon generally allows two years from the date of loss to file a property insurance claim, though your specific policy may set a shorter window. For the August 2025 Central Oregon hailstorm, the filing deadline is approximately August 2026. Do not wait — insurers scrutinize late claims and damage can worsen over time.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will filing a roof insurance claim raise my premiums?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Filing a single weather-related claim — hail, wind, or storm damage — rarely causes a significant premium increase because these are considered catastrophic events outside the homeowner's control. Frequency of claims matters more than a single event. We encourage you to use your coverage for what it was designed for.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to get multiple contractor bids for my insurance claim?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Most policies do not require multiple bids. Your insurer will issue a scope of work and a settlement figure. FreeRoofPros reviews that estimate to make sure it covers all warranted repairs. If the insurer's figure is too low, we negotiate a supplement on your behalf before any work begins.",
        },
      },
      {
        '@type': 'Question',
        name: 'What types of roof damage are covered by homeowners insurance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Standard homeowners policies cover sudden, accidental damage from named perils including hail, wind, fire, and falling objects. They typically exclude gradual deterioration, wear and tear, and pre-existing damage. A thorough professional inspection is the best way to identify covered damage and distinguish it from normal aging.',
        },
      },
    ],
  };

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Structured Data */}
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
      {/* HERO */}
      {/* ================================================================== */}
      <section className="bg-gradient-to-br from-[#122E5F] to-[#2563eb] py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm font-medium rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4" />
              99.7% Claim Approval Rate
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
              We Handle Your Entire Roof Insurance Claim
            </h1>
            <p className="text-lg sm:text-xl text-white/85 mb-8 leading-relaxed">
              From the first inspection to the final shingle, FreeRoofPros manages every step of
              your roof insurance claim — documentation, filing, adjuster meetings, and appeals.
              Most homeowners pay nothing out of pocket beyond their deductible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#122E5F] font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-50 transition-colors duration-180"
              >
                <ClipboardList className="w-5 h-5" />
                Get Your Free Inspection
              </a>
              <a
                href="tel:541-728-0266"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors duration-180"
              >
                <Phone className="w-5 h-5" />
                541-728-0266
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* DEADLINE ALERT BANNER */}
      {/* ================================================================== */}
      <section className="bg-amber-50 border-y border-amber-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex-shrink-0">
            <AlertCircle className="w-6 h-6 text-amber-600" />
          </div>
          <p className="text-amber-900 font-medium">
            <span className="font-bold">Central Oregon Hailstorm — Filing Deadline Approaching:</span>{' '}
            The August 2025 hailstorm that struck Bend, Redmond, Terrebonne, Sisters, and
            surrounding communities triggered thousands of roof damage claims. Oregon&apos;s two-year
            filing window means the deadline is{' '}
            <span className="font-bold">August 2026</span>. If you haven&apos;t had your roof
            inspected yet, act now.
          </p>
          <a
            href="tel:541-728-0266"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-amber-700 font-bold hover:text-amber-900 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </section>

      {/* ================================================================== */}
      {/* WHY HOMEOWNERS NEED HELP */}
      {/* ================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#122E5F] mb-6">
              Why Homeowners Need Help With Roof Insurance Claims
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Filing a roof insurance claim sounds straightforward — you call your insurer, they
              send an adjuster, and you get a check. In reality, the process is layered with
              complexity that consistently leaves homeowners with underpaid settlements or outright
              denials.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Insurance adjusters work for your insurance company, not for you. Their job is to
              assess the minimum scope of covered damage. Without a professional advocate on the
              roof with them, it is common for adjusters to miss secondary damage, miscalculate
              material quantities, or classify storm damage as pre-existing wear and tear. The
              difference between a thorough and a cursory inspection can mean tens of thousands of
              dollars in your settlement.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Documentation is equally critical. Insurers require specific types of evidence: dated
              storm reports corroborating the event, photographic proof showing damage patterns
              consistent with hail or wind, measurements confirming the affected area, and line-item
              material estimates using industry-standard pricing software. DIY claims that lack this
              documentation are frequently denied or dramatically reduced.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Not sure what your policy covers? Read our guide on{' '}
              <Link href="/blog/does-homeowners-insurance-cover-roof-replacement" className="text-[#2563eb] hover:underline">
                whether homeowners insurance covers roof replacement
              </Link>{' '}
              before you file.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              FreeRoofPros exists to level the playing field. Our licensed inspectors know exactly
              what evidence insurers require, how adjusters evaluate claims, and where most
              homeowners lose money in the process. With a 99.7% claim approval rate across
              thousands of projects in Oregon, Texas, Tennessee, Missouri, and Indiana, we have
              refined a process that consistently delivers full settlements.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: <Camera className="w-7 h-7 text-[#2563eb]" />,
                  title: 'Professional Documentation',
                  body: 'Adjuster-grade photos, measurements, and storm data that insurers cannot dispute.',
                },
                {
                  icon: <Shield className="w-7 h-7 text-[#2563eb]" />,
                  title: 'Adjuster Advocacy',
                  body: "We meet the adjuster on your roof so every damaged section is documented in the official scope.",
                },
                {
                  icon: <FileText className="w-7 h-7 text-[#2563eb]" />,
                  title: 'Supplement Filing',
                  body: 'If the insurer misses items, we file supplements to recover the full cost of restoration.',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-blue-50 rounded-xl p-6 border border-blue-100"
                >
                  <div className="mb-3">{card.icon}</div>
                  <h3 className="font-bold text-[#122E5F] text-lg mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5-STEP PROCESS */}
      {/* ================================================================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#122E5F] mb-4">
              Our 99.7% Claim Approval Process
            </h2>
            <p className="text-gray-600 text-lg">
              Five clearly defined steps from your first call to a finished roof — and we handle
              most of it for you.
            </p>
          </div>
          <div className="relative">
            {/* Connecting line — desktop only */}
            <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-blue-200 -translate-x-1/2" />
            <div className="space-y-10">
              {[
                {
                  step: '01',
                  icon: <Home className="w-6 h-6 text-white" />,
                  title: 'Free Roof Inspection & Damage Assessment',
                  body: "A licensed FreeRoofPros inspector visits your property at no charge. We walk the entire roof, document every hail strike, wind-lifted shingle, compromised flashing, and gutter dent. We also pull historical storm data to establish the date of loss — a critical element insurers require to validate the claim. You receive a detailed written assessment before we file anything.",
                },
                {
                  step: '02',
                  icon: <Camera className="w-6 h-6 text-white" />,
                  title: 'Professional Documentation with Photos & Measurements',
                  body: "We produce an adjuster-grade documentation package: high-resolution photographs with GPS coordinates and timestamps, a complete property diagram with precise square footage, material specifications, and a line-item estimate generated using Xactimate — the same software insurance companies use internally. This eliminates the most common reason claims are reduced: inadequate documentation.",
                },
                {
                  step: '03',
                  icon: <FileText className="w-6 h-6 text-white" />,
                  title: 'Claim Filing with Your Insurance Company',
                  body: 'We help you initiate the claim or, with your authorization, manage the filing process entirely. We know the specific language, forms, and evidence submission procedures for major insurers including State Farm, Allstate, Farmers, USAA, Liberty Mutual, and regional carriers. Proper filing prevents the technical errors that trigger automatic denials.',
                },
                {
                  step: '04',
                  icon: <Shield className="w-6 h-6 text-white" />,
                  title: 'Adjuster Meeting — We Meet Them on Your Roof',
                  body: "When the insurance adjuster schedules their inspection, our field representative is present on the roof with them. This is the single most important step most homeowners skip. Our rep walks every section alongside the adjuster, points out documented damage, and ensures the official scope of loss reflects the complete picture. Unaccompanied adjuster visits routinely miss 20–40% of covered damage.",
                },
                {
                  step: '05',
                  icon: <ThumbsUp className="w-6 h-6 text-white" />,
                  title: 'Approval & Roof Installation',
                  body: "Once the insurer approves the claim and issues the settlement, we schedule your installation at your convenience. Our crews are licensed, insured, and trained on the specific systems approved in your scope. We handle the final sign-off paperwork with your insurer and ensure the certificate of completion is filed so your policy remains active.",
                },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className={`flex flex-col lg:flex-row items-start gap-6 lg:gap-10 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-shrink-0 flex items-start gap-4 lg:w-1/2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2563eb] flex items-center justify-center shadow-lg z-10">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#2563eb] uppercase tracking-widest mb-1">
                        Step {item.step}
                      </div>
                      <h3 className="text-xl font-bold text-[#122E5F] mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-14">
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 bg-[#2563eb] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-[#1d4ed8] transition-colors duration-180"
            >
              Start My Free Claim Review
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* TIMELINE */}
      {/* ================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#122E5F] mb-4">
              Insurance Claim Timeline: What to Expect
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Most homeowners are surprised by how fast the process moves when a professional
              manages it. Here is a realistic week-by-week breakdown.
            </p>
            <div className="space-y-6">
              {[
                {
                  phase: 'Weeks 1–2',
                  title: 'Inspection & Documentation',
                  color: 'bg-blue-100 text-blue-800',
                  body: 'We schedule and complete your free roof inspection, compile the full documentation package, pull storm data, and file or assist you in filing the claim with your insurer. Most claims are submitted within 5–7 business days of the inspection.',
                },
                {
                  phase: 'Weeks 2–5',
                  title: 'Adjuster Scheduling & On-Site Meeting',
                  color: 'bg-indigo-100 text-indigo-800',
                  body: "The insurer assigns an adjuster and schedules a property inspection — this typically takes 2–4 weeks depending on storm volume in your area. We coordinate the appointment and are on-site with the adjuster. After the meeting, we review the scope of loss the adjuster submits and file supplements for any missed items.",
                },
                {
                  phase: 'Weeks 5–7',
                  title: 'Approval & Settlement',
                  color: 'bg-emerald-100 text-emerald-800',
                  body: 'The insurer reviews the adjuster report and issues an approval letter with a settlement amount. We review the settlement to ensure it is accurate and complete. If the figure is low, we negotiate a supplement before you sign anything. Once everything is confirmed, you authorize us to proceed.',
                },
                {
                  phase: 'Day 1–2 of Installation',
                  title: 'Roof Installation',
                  color: 'bg-amber-100 text-amber-800',
                  body: 'Most residential re-roofs are completed in a single day. Our crew arrives early, removes and disposes of the old system, installs the new roof, and cleans the property. We conduct a final inspection, photograph the completed work, and submit the certificate of completion to your insurer.',
                },
              ].map((item) => (
                <div
                  key={item.phase}
                  className="flex gap-5 p-6 rounded-xl bg-gray-50 border border-gray-100 shadow-sm"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <Clock className="w-6 h-6 text-[#2563eb]" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.color}`}>
                        {item.phase}
                      </span>
                      <h3 className="font-bold text-[#122E5F] text-lg">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* WHAT IF DENIED */}
      {/* ================================================================== */}
      <section className="py-20 bg-[#122E5F]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              What If Your Claim Is Denied?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-5">
              A denied claim is not a final answer. Insurers deny or underpay claims for several
              reasons — many of which are correctable with additional documentation, a formal
              appeal, or a re-inspection. FreeRoofPros has successfully overturned denials on
              behalf of hundreds of homeowners.
            </p>
            <div className="space-y-5 mb-8">
              {[
                {
                  title: 'Request a Re-Inspection',
                  body: "If an adjuster missed damage or misclassified storm damage as wear and tear, you have the right to request a second inspection. We accompany the re-inspection with fresh evidence and a written rebuttal addressing the specific grounds for denial.",
                },
                {
                  title: 'File a Formal Supplement',
                  body: 'Many initial settlements are simply incomplete — not wrong, just missing line items. We prepare a detailed supplement package identifying every missed item, calculate the cost impact, and submit it directly to the insurer\'s claims department.',
                },
                {
                  title: 'Invoke the Appraisal Clause',
                  body: 'Most homeowners policies include an appraisal clause that allows both parties to hire independent appraisers to resolve valuation disputes. If your insurer refuses to negotiate in good faith, invoking this clause often produces significantly higher settlements without litigation.',
                },
                {
                  title: 'Work with a Public Adjuster',
                  body: 'For complex or high-value denials, we can refer you to a licensed public adjuster — a claims professional who works exclusively for policyholders. Public adjusters typically charge 5–15% of the final settlement, which is often far less than the difference they recover.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="tel:541-728-0266"
              className="inline-flex items-center gap-2 bg-white text-[#122E5F] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors duration-180"
            >
              <Phone className="w-5 h-5" />
              Talk to a Claims Specialist
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* UNDERSTANDING YOUR POLICY */}
      {/* ================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#122E5F] mb-6">
              Understanding Your Homeowners Insurance Policy
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Before you file a claim — or evaluate a settlement — it helps to understand the key
              terms that determine how much your insurer will pay. Here are the concepts that matter
              most for roof insurance claims.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: 'RCV — Replacement Cost Value',
                  body: "RCV policies pay to replace your damaged roof at today's full cost of materials and labor, minus only your deductible. This is the preferred coverage because you receive a genuinely new roof with minimal out-of-pocket expense. Most modern homeowners policies default to RCV.",
                },
                {
                  title: 'ACV — Actual Cash Value',
                  body: 'ACV policies deduct depreciation based on the age and condition of your existing roof before paying out. A 15-year-old roof on a 20-year material can be depreciated by 60–80%, leaving you responsible for a substantial portion of replacement cost. Review your policy before assuming you have RCV coverage.',
                },
                {
                  title: 'Deductible',
                  body: 'Your deductible is the portion of any claim you pay out of pocket before insurance covers the rest. Deductibles may be a flat dollar amount or a percentage of your home\'s insured value (common for wind/hail). Some policies have a separate, higher deductible specifically for named windstorm or hail events.',
                },
                {
                  title: 'Covered Perils',
                  body: 'Standard homeowners policies cover sudden, accidental damage from named perils: hail, wind, falling objects, fire, and others. Gradual deterioration, wear and tear, and damage resulting from neglect are consistently excluded. The key phrase insurers look for is "sudden and accidental."',
                },
                {
                  title: 'Filing Deadline',
                  body: 'Most policies require you to notify your insurer within a "reasonable" time after a loss — typically 30–90 days. Oregon allows up to two years to file a lawsuit against an insurer, but waiting that long to file the claim itself is almost always a mistake. The sooner you report damage, the stronger your claim.',
                },
                {
                  title: 'Proof of Loss',
                  body: 'After you file a claim, your insurer may ask you to sign a Sworn Statement in Proof of Loss — a formal document itemizing the damage, the cost of repairs, and the date of loss. We help you prepare this document accurately to prevent disputes over coverage.',
                },
              ].map((card) => (
                <div key={card.title} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-[#122E5F] mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-6">
              Want to understand your policy better? Read our guide on{' '}
              <Link href="/blog/rcv-vs-acv-roof-insurance" className="text-[#2563eb] hover:underline">RCV vs. ACV roof insurance</Link>
              {' '}or follow our{' '}
              <Link href="/blog/roof-insurance-claim-process-step-by-step" className="text-[#2563eb] hover:underline">step-by-step claim filing guide</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* TESTIMONIALS */}
      {/* ================================================================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#122E5F] mb-2 text-center">
            What Homeowners Say
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Over 10,000 successful claims processed across 50 states.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "I had no idea what I was doing with the insurance company. FreeRoofPros handled everything from the inspection to the final paperwork. I didn't even have to call State Farm myself.",
                author: 'Kevin T.',
                location: 'Bend, OR',
                rating: 5,
              },
              {
                quote:
                  "My claim was initially denied. FreeRoofPros filed a supplement with their own documentation and got the whole thing overturned. Full replacement, I paid my deductible.",
                author: 'Sandra L.',
                location: 'Fort Worth, TX',
                rating: 5,
              },
              {
                quote:
                  "After the May hailstorm I wasn't sure my roof even had damage. The free inspection found hail hits on every slope. Insurance covered the full replacement.",
                author: 'Marcus R.',
                location: 'Indianapolis, IN',
                rating: 5,
              },
              {
                quote:
                  "The adjuster initially wrote up a partial repair. The FreeRoofPros rep walked the adjuster through every damage point and the scope was upgraded to a full tear-off and replacement.",
                author: 'Jennifer W.',
                location: 'Nashville, TN',
                rating: 5,
              },
              {
                quote:
                  "I've had two roofs replaced through FreeRoofPros over the years after back-to-back hail seasons in Kansas City. Process is always smooth.",
                author: 'Tom A.',
                location: 'Kansas City, MO',
                rating: 5,
              },
              {
                quote:
                  "Free inspection. Handled all the paperwork. New roof installed in two days. I can't recommend them highly enough.",
                author: 'Carla M.',
                location: 'Redmond, OR',
                rating: 5,
              },
            ].map((t) => (
              <div
                key={t.author}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
                <p className="text-sm font-semibold text-[#122E5F]">
                  – {t.author}, <span className="font-normal text-gray-500">{t.location}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FAQ */}
      {/* ================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <HelpCircle className="w-7 h-7 text-[#2563eb]" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#122E5F]">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-10">
              The most common questions homeowners ask before starting the claim process.
            </p>
            <div className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
              {[
                {
                  q: 'How do I know if I have hail or wind damage?',
                  a: 'The most reliable method is a professional inspection. Common visible signs include granule loss on shingles (dark spots or bare patches), dented gutters or downspouts, and cracked caulk around flashing. However, much hail damage is invisible from the ground and requires a hands-on inspection to document accurately.',
                },
                {
                  q: 'Do I have to use FreeRoofPros as my contractor if I use them for the claim?',
                  a: 'We are primarily a roofing contractor who assists with the claims process as part of our full-service offering. In most cases, we handle both the claim and the installation. If you prefer to use a different contractor, we can still provide a free inspection and help document your claim.',
                },
                {
                  q: 'What if I already filed my claim and the insurer offered less than expected?',
                  a: 'That is exactly the situation we handle frequently. We review the insurer\'s scope of loss, identify items that are missing or undervalued, and file a formal supplement on your behalf. Many homeowners find they are owed significantly more than the initial offer.',
                },
                {
                  q: 'Can I file a claim for storm damage that happened more than a year ago?',
                  a: 'It depends on your policy and your state. Oregon allows two years from the date of loss to file suit, but your policy may set a shorter notification window. We recommend contacting us immediately if you believe you have undiscovered or unreported storm damage — the sooner we inspect, the stronger your case.',
                },
                {
                  q: 'Does my deductible affect how much I pay?',
                  a: 'Yes. Your deductible is your out-of-pocket contribution. For most homeowners with RCV (Replacement Cost Value) policies, the deductible is the only cost you pay. For ACV policies, there may be additional out-of-pocket exposure related to depreciation. We help you understand your specific coverage before any work begins.',
                },
                {
                  q: 'What is a supplement and why might I need one?',
                  a: 'A supplement is an amended claim that adds items the insurer missed or undervalued in the original scope of loss. Supplements are extremely common — insurance adjusters are busy and initial scopes frequently exclude secondary damage, permit costs, code upgrades, or material price increases. FreeRoofPros files supplements routinely and they are rarely disputed.',
                },
                {
                  q: 'What information do I need to provide to start the process?',
                  a: 'Very little. We just need your property address, the approximate storm date, and your contact information. From there, we schedule the free inspection and handle everything else.',
                },
                {
                  q: 'How much does it cost to use FreeRoofPros for my claim?',
                  a: 'The inspection, claim assistance, adjuster meeting attendance, and supplement filing are all included when FreeRoofPros performs the roof installation. There is no separate charge for our claims management services.',
                },
              ].map((faq) => (
                <details key={faq.q} className="group">
                  <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-semibold text-[#122E5F] hover:bg-gray-50 transition-colors">
                    <span>{faq.q}</span>
                    <ChevronRight className="w-5 h-5 text-[#2563eb] shrink-0 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-5 pt-1 text-gray-700 leading-relaxed text-sm">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* LEAD FORM */}
      {/* ================================================================== */}
      <section id="lead-form" className="py-20 bg-[#122E5F] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-sm rounded-full px-4 py-1.5 mb-4">
              <CalendarDays className="w-4 h-4" />
              Schedule in 60 seconds
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Your Free Roof Inspection
            </h2>
            <p className="text-white/80 text-lg">
              No cost, no obligation. Find out if your roof qualifies for full insurance-covered
              replacement.
            </p>
          </div>
          <LeadForm />
          <p className="text-center text-blue-300 text-sm mt-6">
            Prefer to call?{' '}
            <a href="tel:541-728-0266" className="text-white font-semibold hover:underline">
              541-728-0266
            </a>{' '}
            &nbsp;|&nbsp; Email:{' '}
            <a
              href="mailto:info@freeroofpros.com"
              className="text-white font-semibold hover:underline"
            >
              info@freeroofpros.com
            </a>
          </p>
        </div>
      </section>

      {/* ================================================================== */}
      {/* BOTTOM NAV */}
      {/* ================================================================== */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
            <Link
              href="/services/roof-replacement"
              className="flex items-center gap-3 border border-gray-200 rounded-xl p-5 hover:border-[#2563eb] hover:bg-blue-50 transition-colors group"
            >
              <Home className="w-6 h-6 text-[#2563eb] shrink-0" />
              <div>
                <p className="font-semibold text-[#122E5F] group-hover:text-[#2563eb] transition-colors">
                  Roof Replacement
                </p>
                <p className="text-sm text-gray-500">Insurance-covered replacement process</p>
              </div>
            </Link>
            <Link
              href="/services/storm-damage-repair"
              className="flex items-center gap-3 border border-gray-200 rounded-xl p-5 hover:border-[#2563eb] hover:bg-blue-50 transition-colors group"
            >
              <Shield className="w-6 h-6 text-[#2563eb] shrink-0" />
              <div>
                <p className="font-semibold text-[#122E5F] group-hover:text-[#2563eb] transition-colors">
                  Storm Damage Repair
                </p>
                <p className="text-sm text-gray-500">Emergency and hail damage repair</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

