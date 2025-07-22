'use client';

import React, { useState } from 'react'

const Faq = () => {
    const faqs = [
    {
      question: "What Services Does Vlead Marketing Agency Provide?",
      answer: "We offer a full range of services, including Digital Marketing, Web Development, Graphic Design, and SEO, to help your business thrive online.",
      isOpen: false,
    },
    {
      question: "Who Are Your Clients?",
      answer: "",
      isOpen: false,
    },
    {
      question: "How Do I Get Started with Vlead Marketing Agency?",
      answer: "",
      isOpen: false,
    },
    {
      question: "How Can Vlead Marketing Agency Help My Business?",
      answer: "",
      isOpen: false,
    },
    {
      question: "How Long Does It Take to See Results?",
      answer: "",
      isOpen: false,
    },
  ];

  const [faqList, setFaqList] = useState(faqs);

  const toggleFAQ = (index: number) => {
    setFaqList((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : { ...faq, isOpen: false }
      )
    );
  };

  return (
     <div className="bg-white py-12">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-700 mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-500 mb-8">Use customer data to build great and solid product experiences that convert.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqList.map((faq: { isOpen: any; question: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; answer: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, index: React.Key | null | undefined) => (
            <div
              key={index}
              className={`bg-gray-50 p-4 rounded-lg shadow ${faq.isOpen ? 'bg-black text-white' : ''}`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <p className={`text-lg ${faq.isOpen ? 'text-white' : 'text-gray-700'}`}>
                  {faq.question}
                </p>
                <span className={`text-2xl ${faq.isOpen ? 'text-white' : 'text-orange-500'}`}>+</span>
              </div>
              {faq.isOpen && <p className="mt-2 text-sm">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq