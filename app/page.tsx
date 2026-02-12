import { Suspense } from 'react';
import { Hero, TrustSignals, Testimonials, DidYouKnow, HowItWorks, TrustedByThousands, HailStatesSection, MoneyOnTableSection, FAQSection } from '@/components/sections/index';


export default function Home() {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
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
    // </Suspense>
  );
}