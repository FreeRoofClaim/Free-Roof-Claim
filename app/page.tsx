import { Suspense } from 'react';
import { Hero, TrustSignals, Testimonials, DidYouKnow, HowItWorks, TrustedByThousands, HailStatesSection, MoneyOnTableSection, FAQSection } from '@/components/sections/index';

const speakableJsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebPage',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.faq-section'],
  },
  url: 'https://www.freeroofpros.com/',
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <div className="min-h-screen">
        <Hero />
        <TrustSignals />
        <DidYouKnow />
        <HowItWorks />
        <TrustedByThousands />
        <HailStatesSection />
        <Testimonials />
        <MoneyOnTableSection />
        <FAQSection />
      </div>
      {/* </Suspense> */}
    </>
  );
}
