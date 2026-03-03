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
    'We handle your entire roof insurance claim from inspection to approval. 99.7% success rate. Free roof inspection & claim assistance. Call 541-337-5734.',
  alternates: {
    canonical: 'https://www.freeroofpros.com/services/insurance-claims',
  },
  openGraph: {
    title: 'How to File a Roof Insurance Claim | Free Inspection | FreeRoofPros',
    description:
      'We handle your entire roof insurance claim from inspection to approval. 99.7% success rate. Free roof inspection & claim assistance. Call 541-337-5734.',
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
                href="tel:541-337-5734"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors duration-180"
              >
                <Phone className="w-5 h-5" />
                541-337-5734
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
            href="tel:541-337-5734"
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
              href="tel:541-337-5734"
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
                  body: 'Standard homeowners policies cover sudden, accidental damage from named perils: hail, wind, fire, lightning, falling objects, and similar events. Damage from flooding requires a separate flood policy. Gradual deterioration, maintenance neglect, and manufacturer defects are typically excluded.',
                },
                {
                  title: 'Exclusions',
                  body: 'Every policy has exclusions — conditions or causes of damage that are explicitly not covered. Common roof-related exclusions include pre-existing damage, damage from tree roots or moss growth, and cosmetic damage that does not affect functionality. Knowing your exclusions prevents surprises during the claims process.',
                },
                {
                  title: 'The 80% Co-Insurance Rule',
                  body: 'Many policies require you to insure your home for at least 80% of its replacement cost to collect full claim payments. If your coverage is below that threshold at the time of a claim, the insurer may only pay a proportional share of the loss — even on a fully legitimate claim. Review your dwelling coverage annually.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-[#122E5F] text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed">
              Not sure what your policy covers? Our claims specialists will review your declarations
              page with you at no cost and explain exactly what you can expect from your specific
              coverage before you file a single form.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* STATE FILING DEADLINES */}
      {/* ================================================================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-3 mb-6">
              <CalendarDays className="w-8 h-8 text-[#2563eb] flex-shrink-0 mt-1" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#122E5F]">
                State Filing Deadlines You Need to Know
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Every homeowners policy and state has its own deadline for filing a property insurance
              claim. Missing the deadline almost always results in a permanent denial — regardless
              of how legitimate your damage is. These are the deadlines that apply to the markets
              FreeRoofPros serves.
            </p>
            <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-100 mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#122E5F] text-white">
                    <th className="text-left px-5 py-3 font-semibold">State</th>
                    <th className="text-left px-5 py-3 font-semibold">Typical Filing Window</th>
                    <th className="text-left px-5 py-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {[
                    {
                      state: 'Oregon',
                      window: '2 years from date of loss',
                      note: 'Aug 2025 hailstorm → deadline Aug 2026',
                    },
                    {
                      state: 'Texas',
                      window: '1–2 years (policy-specific)',
                      note: 'Check your declarations page; some policies allow 1 year only',
                    },
                    {
                      state: 'Tennessee',
                      window: '1 year from date of loss',
                      note: 'Some policies allow 2 years — review your contract',
                    },
                    {
                      state: 'Missouri',
                      window: '2 years from date of loss',
                      note: 'Kansas City metro; verify individual policy terms',
                    },
                    {
                      state: 'Indiana',
                      window: '2 years from date of loss',
                      note: 'Indianapolis area; earlier is always better',
                    },
                  ].map((row, i) => (
                    <tr key={row.state} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                      <td className="px-5 py-4 font-semibold text-[#122E5F]">{row.state}</td>
                      <td className="px-5 py-4 text-gray-700">{row.window}</td>
                      <td className="px-5 py-4 text-gray-500">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-amber-900 mb-2">
                    Don&apos;t Wait Until the Deadline
                  </h3>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    Filing close to a deadline gives the insurer more grounds to dispute your claim:
                    storm data gets harder to pull, damage is harder to distinguish from subsequent
                    weathering, and adjusters scrutinize late claims more aggressively. File as soon
                    as damage is suspected — even if you are not sure whether the damage is covered.
                    A free inspection costs you nothing and gives you the information you need to
                    decide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* TESTIMONIALS */}
      {/* ================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#122E5F] text-center mb-12">
            Homeowners We&apos;ve Helped
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "I had no idea where to start after the August hailstorm. FreeRoofPros handled everything — inspection, filing, meeting the adjuster, all of it. My claim was approved in full and I had a new roof before winter. I paid nothing beyond my deductible.",
                author: 'Sarah T.',
                location: 'Redmond, OR',
              },
              {
                quote:
                  "My original claim was denied because the adjuster said it was 'normal aging.' FreeRoofPros did a second inspection, documented the hail strikes the adjuster missed, and filed an appeal. The denial was reversed and I got a full replacement. Incredible service.",
                author: 'Michael R.',
                location: 'Fort Worth, TX',
              },
              {
                quote:
                  "The whole process took about six weeks from the first call to a finished roof. The crew was professional, the communication was excellent, and the claims team knew exactly what they were doing. I have already referred two neighbors.",
                author: 'Jennifer L.',
                location: 'Nashville, TN',
              },
            ].map((t) => (
              <div
                key={t.author}
                className="bg-blue-50 rounded-xl p-7 border border-blue-100 shadow-sm flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-5 flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-bold text-[#122E5F]">— {t.author}</div>
                  <div className="text-sm text-gray-500">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FAQ */}
      {/* ================================================================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <HelpCircle className="w-8 h-8 text-[#2563eb] flex-shrink-0" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#122E5F]">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-3">
              {[
                {
                  q: 'How do I file a roof insurance claim?',
                  a: 'Start with a free professional roof inspection to document all storm damage with photos and measurements. Then file a claim with your insurance company — or let FreeRoofPros handle the entire filing on your behalf. We prepare the documentation, submit the claim, and meet the adjuster on your roof to ensure nothing is missed.',
                },
                {
                  q: 'How long does the entire process take?',
                  a: 'Most claims resolve in 4–8 weeks from initial inspection to roof installation. Inspection and documentation: 1–2 weeks. Adjuster scheduling and on-site meeting: 2–4 weeks. Claim approval and settlement review: 1–2 weeks. Installation: 1–2 days.',
                },
                {
                  q: 'What if my claim is denied?',
                  a: "A denial is not final. FreeRoofPros will request a re-inspection, prepare supplemental documentation addressing the specific denial reason, and file a formal appeal. If needed, we can refer you to a licensed public adjuster who works exclusively on your behalf to negotiate a fair settlement.",
                },
                {
                  q: "What is the difference between RCV and ACV coverage?",
                  a: "RCV (Replacement Cost Value) pays to replace your roof at today's material and labor prices, minus your deductible. ACV (Actual Cash Value) subtracts depreciation based on your roof's age — potentially leaving you with thousands of dollars in out-of-pocket costs. Check your declarations page to confirm which coverage you have.",
                },
                {
                  q: 'What is the deadline to file a hail damage claim in Oregon?',
                  a: "Oregon generally allows two years from the date of loss to file a property insurance claim, though your specific policy may set a shorter window. For the August 2025 Central Oregon hailstorm, the deadline is approximately August 2026. Don't wait — late claims face heightened scrutiny.",
                },
                {
                  q: 'Will filing a claim raise my homeowners insurance premiums?',
                  a: "Filing a single weather-related claim — hail, wind, or storm damage — rarely causes a significant premium increase because these are classified as catastrophic events outside your control. Frequency of claims matters more than a single event. We encourage you to use your coverage for what it was designed to do.",
                },
                {
                  q: 'Do I need multiple contractor bids for the insurance claim?',
                  a: "Most policies do not require multiple bids. Your insurer issues a scope of work and a settlement figure. FreeRoofPros reviews that estimate and negotiates any supplements before work begins to ensure the approved amount covers all warranted repairs.",
                },
                {
                  q: 'What types of roof damage does homeowners insurance cover?',
                  a: 'Standard homeowners policies cover sudden, accidental damage from named perils: hail, wind, fire, lightning, and falling objects. Gradual deterioration, wear and tear, and pre-existing damage are typically excluded. A professional inspection helps distinguish covered storm damage from normal aging.',
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-[#122E5F] hover:bg-blue-50 transition-colors duration-150">
                    <span>{item.q}</span>
                    <ChevronRight className="w-5 h-5 text-[#2563eb] flex-shrink-0 transition-transform duration-200 group-open:rotate-90" />
                  </summary>
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* INTERNAL LINKS */}
      {/* ================================================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#122E5F] mb-8 text-center">
            Related Services
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              {
                href: '/services/roof-replacement',
                title: 'Complete Roof Replacement',
                body: 'When your claim is approved, our crews deliver a full roof replacement — usually in a single day.',
                icon: <Home className="w-6 h-6 text-[#2563eb]" />,
              },
              {
                href: '/services/storm-damage-repair',
                title: 'Storm Damage Repair',
                body: 'Localized hail or wind damage? We handle targeted repairs alongside or in lieu of a full replacement claim.',
                icon: <AlertCircle className="w-6 h-6 text-[#2563eb]" />,
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-start gap-4 p-6 rounded-xl border border-gray-100 shadow-sm hover:border-[#2563eb] hover:shadow-md transition-all duration-180 group"
              >
                <div className="flex-shrink-0 mt-0.5">{link.icon}</div>
                <div>
                  <div className="font-bold text-[#122E5F] mb-1 group-hover:text-[#2563eb] transition-colors">
                    {link.title}
                    <ChevronRight className="inline w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{link.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* LEAD FORM */}
      {/* ================================================================== */}
      <section id="lead-form" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#122E5F] mb-4">
              Get Your Free Roof Inspection
            </h2>
            <p className="text-gray-600 text-lg">
              No cost, no obligation. We inspect your roof, assess your damage, and tell you exactly
              what your insurance should cover — before you file a single form.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 text-sm text-gray-500">
              {[
                '✓ Licensed in all 50 states',
                '✓ 99.7% claim approval rate',
                '✓ No out-of-pocket cost beyond deductible',
              ].map((item) => (
                <span key={item} className="font-medium text-gray-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <LeadForm />
          <p className="text-center text-gray-400 text-sm mt-6">
            Prefer to call?{' '}
            <a
              href="tel:541-337-5734"
              className="text-[#2563eb] font-semibold hover:underline"
            >
              541-337-5734
            </a>{' '}
            &nbsp;|&nbsp;{' '}
            <a
              href="mailto:info@freeroofpros.com"
              className="text-[#2563eb] font-semibold hover:underline"
            >
              info@freeroofpros.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
