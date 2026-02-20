import { faqs } from '@/data/sectionsData';
import Script from "next/script";

const FAQSection = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="faq-section bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find clear answers about our roofing process, timelines, insurance claims,
              and emergency services.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {faq.question}
                </h3>

                <p className="text-gray-700 leading-relaxed text-[15px]">
                  {faq.answer}
                </p>

                <div className="mt-6 h-1 w-12 bg-blue-600 rounded-full group-hover:w-20 transition-all duration-300"></div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default FAQSection;
