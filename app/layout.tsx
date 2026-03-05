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
  description: 'Get a FREE roof inspection & see if insurance covers 100% of your replacement. 99.7% claim success rate. Licensed in all 50 states. Call 541-728-0266.',
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

  // Organization schema — site-wide entity identity for AI engines and search
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.freeroofpros.com/#organization',
    name: 'Free Roof Pros',
    url: 'https://www.freeroofpros.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.freeroofpros.com/og-image.png',
    },
    telephone: '(541) 728-0266',
    description:
      'FreeRoofPros connects Central Oregon homeowners with licensed roofing contractors for free storm damage inspections and insurance claim assistance. Our service is free to homeowners — contractors pay to receive qualified leads.',
    areaServed: [
      { '@type': 'City', name: 'Bend', addressRegion: 'OR', addressCountry: 'US' },
      { '@type': 'City', name: 'Redmond', addressRegion: 'OR', addressCountry: 'US' },
      { '@type': 'City', name: 'La Pine', addressRegion: 'OR', addressCountry: 'US' },
      { '@type': 'AdministrativeArea', name: 'Deschutes County', addressRegion: 'OR', addressCountry: 'US' },
      { '@type': 'AdministrativeArea', name: 'Central Oregon', addressRegion: 'OR', addressCountry: 'US' },
    ],
    knowsAbout: [
      'Storm damage roof inspection',
      'Roof insurance claim assistance',
      'Hail damage assessment',
      'Insurance claim filing',
      'Roof replacement coordination',
      'Homeowners insurance claims',
      'Replacement Cost Value (RCV) policies',
      'Actual Cash Value (ACV) policies',
      'Wind damage roof repair',
      'Deschutes County roofing contractors',
    ],
    // TODO: add social profile URLs once accounts are established
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '(541) 728-0266',
      contactType: 'customer service',
      areaServed: 'Central Oregon',
      availableLanguage: 'English',
    },
  };

  // LocalBusiness schema — service-area specific entity for local search
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.freeroofpros.com/#local-business',
    name: 'Free Roof Pros',
    image: 'https://www.freeroofpros.com/roofing-logo.png',
    url: 'https://www.freeroofpros.com/',
    telephone: '(541) 728-0266',
    priceRange: 'Free (deductible only for approved claims)',
    // TODO: replace with dynamic review data once a review integration is built
    // aggregateRating: {
    //   '@type': 'AggregateRating',
    //   ratingValue: '4.9',
    //   reviewCount: '120',
    // },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '10801 NW 43rd Street',
      addressLocality: 'Terrebonne',
      addressRegion: 'OR',
      postalCode: '97760',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Bend', addressRegion: 'OR', addressCountry: 'US' },
      { '@type': 'City', name: 'Redmond', addressRegion: 'OR', addressCountry: 'US' },
      { '@type': 'City', name: 'La Pine', addressRegion: 'OR', addressCountry: 'US' },
      { '@type': 'AdministrativeArea', name: 'Deschutes County', addressRegion: 'OR', addressCountry: 'US' },
      { '@type': 'AdministrativeArea', name: 'Central Oregon', addressRegion: 'OR', addressCountry: 'US' },
    ],
    service: [
      { '@type': 'Service', name: 'Free Storm Damage Roof Inspection' },
      { '@type': 'Service', name: 'Roof Insurance Claim Assistance' },
      { '@type': 'Service', name: 'Roof Replacement Coordination' },
      { '@type': 'Service', name: 'Hail Damage Assessment' },
    ],
  };

  // Service schema — describes the core service offering
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.freeroofpros.com/#service',
    name: 'Roof Replacement & Storm Damage Repair',
    serviceType: 'Roof Replacement & Storm Damage Repair',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.freeroofpros.com/#local-business',
      name: 'Free Roof Pros',
      url: 'https://www.freeroofpros.com',
    },
    areaServed: [
      { '@type': 'City', name: 'Bend', addressRegion: 'OR', addressCountry: 'US' },
      { '@type': 'City', name: 'Redmond', addressRegion: 'OR', addressCountry: 'US' },
      { '@type': 'City', name: 'La Pine', addressRegion: 'OR', addressCountry: 'US' },
      { '@type': 'AdministrativeArea', name: 'Deschutes County', addressRegion: 'OR', addressCountry: 'US' },
      { '@type': 'AdministrativeArea', name: 'Central Oregon', addressRegion: 'OR', addressCountry: 'US' },
    ],
    description:
      'Free storm damage roof inspections and insurance claim assistance for Central Oregon homeowners. FreeRoofPros connects homeowners with licensed, insured roofing contractors. Our service is free to homeowners.',
  };

  // NOTE: FAQPage schema intentionally removed from global layout.
  // It now lives only on /faq (app/faq/page.tsx) where it is authoritative.
  // The homepage FAQ section has its own schema in components/sections/FAQs.tsx.

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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
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
