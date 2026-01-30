"use client";
import { useState } from "react";
import { faqs } from '@/data/sectionsData';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="grid gap-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="faq-item bg-gray-50 rounded-lg shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="text-xl font-semibold">{faq.question}</span>
              <span className="text-2xl transition-transform duration-300">
                {openIndex === i ? "-" : "+"}
              </span>
            </button>
            <div
              className={`px-6 pb-4 text-gray-700 transition-all duration-300 ${
                openIndex === i ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
