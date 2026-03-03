import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GTM from '@/components/layout/GTM';
import { Header, Footer } from '@/components/sections/index';

const inter = localFont({
  src: [
    {
      path: '../public/fonts/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Free Roof Inspection | Storm Damage Claims | FreeRoofPros',
  description: 'Get a FREE roof inspection & see if insurance covers 100% of your replacement. 99.7% claim success rate. Licensed in all 50 states. Call 541-337-5734.',
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.freeroofpros.com/',
  },

  openGraph: {
    title: 'Free Roof Inspection | FreeRoofPros',
    description:
      'Get a FREE roof inspection & see if insurance covers 100% of your replacement.',
    url: 'https://www.freeroofpros.com/',
    siteName: 'Free Roof Pros',
    images: [
      {
        url: 'https://www.freeroofpros.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Free Roof Pros - Roofing Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Free Roof Inspection | FreeRoofPros',
    description:
      'Get a FREE roof inspection & see if insurance covers 100% of your replacement.',
    images: ['https://www.freeroofpros.com/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Free Roof Pros",
    "image": "https://www.freeroofpros.com/roofing-logo.png",
    "url": "https://www.freeroofpros.com/",
    "telephone": "541-337-5734",
    "priceRange": "$$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120"
    },
    "service": [
      { "@type": "Service", "name": "Roof Replacement" },
      { "@type": "Service", "name": "Storm Damage Roof Repair" }
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.freeroofpros.com/#service",
    "name": "Roof Replacement & Storm Damage Repair",
    "serviceType": "Roof Replacement & Storm Damage Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Free Roof Pros",
      "url": "https://www.freeroofpros.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  };

  const faqPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How fast can you repair storm-damaged roofs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We typically schedule inspections within 24\u201348 hours of your request. Once your insurance claim is approved, most roof replacements are completed in one to two days depending on the size and complexity of your roof."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle insurance claims for roof damage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialize in working directly with insurance companies on behalf of homeowners. Our team documents the damage, prepares the claim, and communicates with your adjuster so you don't have to navigate the process alone."
        }
      },
      {
        "@type": "Question",
        "name": "What types of roofs do you repair or replace?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with all common residential roofing materials including asphalt shingles, architectural shingles, metal roofing, tile, and flat roof systems. If you have a specialty roof, let us know and we will confirm our capability in your area."
        }
      },
      {
        "@type": "Question",
        "name": "Are your roofing services available in my city?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We currently serve homeowners across Texas (Dallas, Houston, Austin, San Antonio), the Midwest (Indianapolis, Kansas City, St. Louis, Columbus), the South (Nashville, Atlanta, Charlotte), and the Pacific Northwest (Portland, Central Oregon). Contact us to confirm availability in your specific area."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a roof replacement cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The national average for a residential roof replacement ranges from $8,000 to $20,000 depending on the size of your roof, the materials used, and your region. When your claim is approved, your insurance company pays the replacement cost value minus your deductible. In most storm damage cases, your only out-of-pocket expense is your deductible."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer warranties on your work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All of our roof replacements come with the manufacturer's product warranty on materials (typically 25\u201350 years depending on the shingle line) plus our workmanship warranty. Warranty terms vary by market \u2014 ask your local representative for specific details."
        }
      },
      {
        "@type": "Question",
        "name": "Can you repair hail damage on my roof?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Hail damage is one of the most common types of storm damage we assess and repair. Hail can fracture asphalt shingles, crack tile, dent metal, and compromise the waterproof membrane \u2014 damage that may not be visible from the ground but can lead to leaks and structural issues over time."
        }
      },
      {
        "@type": "Question",
        "name": "Is your team licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. FreeRoofPros only works with licensed, bonded, and insured roofing contractors in each market we serve. We carry full general liability insurance and workers' compensation coverage. We are happy to provide proof of insurance and licensing upon request."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer emergency roof repair services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. If your roof is actively leaking or has suffered significant structural damage from a storm, contact us immediately. We offer emergency tarping and temporary repairs to prevent further water intrusion while your insurance claim is being processed."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get a free roof replacement quote?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply click the 'Get My Free Inspection' button on our homepage or call us directly. We will schedule a free, no-obligation inspection with a certified roofing specialist. After the inspection, we provide a detailed report and advise you on whether to file an insurance claim."
        }
      },
      {
        "@type": "Question",
        "name": "Does homeowners insurance cover roof replacement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In most cases, yes \u2014 if the damage was caused by a covered peril such as hail, wind, or a fallen tree. Standard homeowners policies (HO-3) typically cover sudden storm damage. However, damage from neglect or normal wear and tear is generally not covered. The type of coverage you have (replacement cost value vs. actual cash value) also determines how much your insurer will pay."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if my roof has storm damage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Signs of hail or wind damage include missing, cracked, or curling shingles; dented gutters and downspouts; granules accumulating in your gutters or on the ground; dents on metal vents, flashing, or your AC condenser unit; and visible bruising or fractures on shingles. Because some damage is only visible from the roof itself, we always recommend a professional inspection after any significant storm."
        }
      },
      {
        "@type": "Question",
        "name": "How long do I have to file a roof insurance claim after a storm?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every state and insurance policy has different deadlines. Most policies require you to file within 1\u20132 years of the storm event, but some states like Tennessee enforce a strict 1-year deadline. Oregon has a 2-year window. We strongly recommend filing as soon as possible \u2014 delays can result in denied claims."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between actual cash value and replacement cost value for roofs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Replacement Cost Value (RCV) pays to replace your roof at today's prices with a comparable new roof. Actual Cash Value (ACV) pays the depreciated value of your old roof \u2014 meaning an older roof may only receive a fraction of the replacement cost. RCV policies typically result in a higher payout. Check your declarations page to see which coverage type you have."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if my roof insurance claim is denied?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A denied claim is not necessarily final. You have the right to appeal the decision by requesting a re-inspection, providing additional documentation, or hiring a licensed public adjuster. We can help you understand the denial reason and determine whether an appeal is likely to succeed."
        }
      },
      {
        "@type": "Question",
        "name": "Can I choose my own roofing contractor for an insurance claim?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. You are not required to use a contractor recommended or preferred by your insurance company. You have the legal right to select any licensed, insured contractor you choose. We work with your insurer directly on pricing and scope to make the process seamless."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a free roof inspection cost and what does it include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our roof inspection is 100% free and carries no obligation. It includes a thorough visual inspection of all roof surfaces, flashings, gutters, vents, and the attic if accessible. We document all findings with photos, provide you with a written report, and advise you on whether the damage is likely to meet your insurance policy's threshold for a claim."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best roofing material for storm-prone areas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For hail-prone regions, Class 4 impact-resistant asphalt shingles are the gold standard \u2014 they can also earn you a premium discount from your insurer. Standing seam metal roofing offers excellent wind resistance. For high-wind areas, metal or properly sealed architectural shingles rated for 130+ mph winds are recommended."
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1500669871629313');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Google Ads (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17983730943"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17983730943');
          `}
        </Script>

        <GTM gtmId="GTM-KN4P5NHD" />
        <link rel="canonical" href="https://www.freeroofpros.com/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {/* Meta Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1500669871629313&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Header />
        {children}
        <Footer />
      </body>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </html>
  );
}
