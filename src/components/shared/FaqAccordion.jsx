import React, { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

export default function FaqAccordion({ faqs = [], dark = false }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`rounded-xl border transition-all duration-300 overflow-hidden ${
              dark
                ? 'bg-white/5 border-slate-800'
                : 'bg-white dark:bg-dark-card border-slate-100 dark:border-slate-800 shadow-sm'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
              className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
            >
              <span className="flex items-center gap-3 font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                <MessageCircleQuestion size={18} className="text-primary shrink-0" />
                {faq.q}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              id={`faq-answer-${i}`}
              aria-hidden={!isOpen}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 pl-[3.25rem] text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
