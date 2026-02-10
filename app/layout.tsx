import { useEffect } from 'react';
import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '@/components/ui/Loader';
import GTM from '@/components/layout/GTM';

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
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main St",
      "addressLocality": "Your City",
      "addressRegion": "Your State",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120"
    },
    "service": [
      { "@type": "Service", "name": "Roof Replacement" },
      { "@type": "Service", "name": "Storm Damage Roof Repair" }
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does a roof replacement take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically 1-3 days depending on size and damage."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer emergency storm damage repair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 24/7 emergency services."
        }
      }
    ]
  };

  useEffect(() => {
    if (!document.querySelector('script[type="application/ld+json"][data-json="faq"]')) {
      const script = document.createElement('script');
      script.type = "application/ld+json";
      script.innerHTML = JSON.stringify(faqJsonLd);
      script.setAttribute('data-json', 'faq');
      document.head.appendChild(script);
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <GTM gtmId="GTM-KN4P5NHD" />
        <link rel="canonical" href="https://www.freeroofpros.com/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Loader />
        {children}
      </body>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </html>
  );
}
