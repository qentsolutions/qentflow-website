"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";
import { motion } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

interface FAQSectionDictionary {
  title: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export function FAQSection({ dictionary }: { dictionary: FAQSectionDictionary }) {
  const faqList: FAQItemProps[] = dictionary.questions.map((item) => ({
    question: item.question,
    answer: (
      <div dangerouslySetInnerHTML={{ __html: item.answer }} />
    ),
  }));

  const FaqItem = ({ item }: { item: FAQItemProps }) => {
    const accordion = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
      <motion.li
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <button
          className="relative flex w-full items-center justify-between gap-2 rounded-lg bg-white px-5 py-4 text-left text-base font-medium shadow-sm border border-gray-200 hover:border-blue-100 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          aria-expanded={isOpen}
        >
          <span className={`flex-1 ${isOpen ? "text-blue-600" : "text-gray-700"}`}>
            {item?.question}
          </span>
          <div className={`flex h-8 w-8 items-center justify-center rounded-full ${isOpen ? "bg-blue-100" : "bg-gray-50"}`}>
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180 text-blue-600" : "text-gray-500"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        <div
          ref={accordion}
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={
            isOpen
              ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
              : { maxHeight: 0, opacity: 0 }
          }
        >
          <div className="p-5 text-gray-600 bg-gray-50 rounded-b-lg">
            {item?.answer}
          </div>
        </div>
      </motion.li>
    );
  };

  return (
    <section className="py-20" id="faq">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-blue-600 font-semibold mb-2">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold">{dictionary.title}</h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <ul className="space-y-4">
            {faqList.map((item, index) => (
              <FaqItem key={index} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
