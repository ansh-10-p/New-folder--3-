'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(0);

  const faqs = [
    {
      id: 0,
      question: 'How do I get started as a seller?',
      answer:
        'Simply create an account, set up your seller profile, and start listing your products. Our onboarding process takes just 5 minutes. You can start selling immediately with our Starter plan (free forever).',
    },
    {
      id: 1,
      question: 'What payment methods do you accept?',
      answer:
        'We support all major credit and debit cards, digital wallets (Apple Pay, Google Pay), and bank transfers. All payments are processed securely through our PCI-compliant payment gateway.',
    },
    {
      id: 2,
      question: 'How do I ensure my products reach customers?',
      answer:
        'Our platform uses smart recommendations and local search optimization to connect your products with interested customers. Professional sellers also get access to marketing tools and analytics to boost visibility.',
    },
    {
      id: 3,
      question: 'What are the fees?',
      answer:
        'Starter plan is completely free. For Professional plan at $29/month, we charge 2.5% per transaction. No hidden fees. Enterprise plans have custom pricing based on your needs.',
    },
    {
      id: 4,
      question: 'How is customer support handled?',
      answer:
        'We offer 24/7 customer support via email, chat, and phone. Professional and Enterprise sellers get priority support. We also provide comprehensive seller guides and resources.',
    },
    {
      id: 5,
      question: 'Is my data secure?',
      answer:
        'Absolutely. We use bank-level encryption, regular security audits, and comply with all data protection regulations. Your personal information and transactions are fully protected.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up-1">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up-2">
            Everything you need to know about our marketplace
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-indigo-300 transition duration-300 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${faq.id * 0.1}s` }}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-indigo-600 flex-shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>

              {/* Answer */}
              {openId === faq.id && (
                <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 animate-fade-in-down">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still need help? */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white animate-fade-in-up-4 hover-lift">
          <h3 className="text-2xl font-bold mb-2 animate-fade-in-up">Still have questions?</h3>
          <p className="mb-6 text-blue-100 animate-fade-in-up-2">
            Can't find the answer you're looking for? Our support team is ready to help.
          </p>
          <button className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 animate-bounce-in">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
