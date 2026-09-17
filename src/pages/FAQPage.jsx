import React, { useState } from 'react';
import { Phone, MessageCircleQuestion } from 'lucide-react';
import Hero from '../components/Hero';
import CTABand from '../components/shared/CTABand';
import FaqAccordion from '../components/shared/FaqAccordion';
import { FAQ_GROUPS, BRAND } from '../data/siteData';

export default function FAQPage({ onNavigate, onOpenQuote }) {
  const [activeGroup, setActiveGroup] = useState('All');

  const groups = ['All', ...FAQ_GROUPS.map((g) => g.group)];
  const visible = activeGroup === 'All' ? FAQ_GROUPS : FAQ_GROUPS.filter((g) => g.group === activeGroup);

  return (
    <div>
      <Hero
        badge="Help Center"
        title="Frequently Asked Questions"
        currentPage="FAQ"
        subtitle="Answers to the questions we hear most — pricing, scheduling, safety, and our guarantees. Can't find yours? Call us anytime."
        onOpenQuote={onOpenQuote}
        onNavigate={onNavigate}
        crumbs={[{ label: 'FAQ' }]}
      />

      {/* Filter + FAQs */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-dark-bg" data-reveal>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {groups.map((g) => (
              <button
                key={g}
                onClick={() => setActiveGroup(g)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
                  activeGroup === g
                    ? 'bg-primary text-slate-950 shadow-primary'
                    : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800 hover:border-primary hover:text-primary'
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          <div className="space-y-12">
            {visible.map((group) => (
              <div key={group.group}>
                {activeGroup === 'All' && (
                  <h2 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
                    <MessageCircleQuestion size={20} className="text-primary" />
                    {group.group}
                  </h2>
                )}
                <FaqAccordion faqs={group.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-14 bg-white dark:bg-dark-surface border-y border-slate-100 dark:border-slate-800" data-reveal>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white mb-3">
            Still have a question?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
            Our team answers calls Monday through Saturday — or send us a message and we’ll reply the same day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BRAND.phoneHref} className="btn-primary-tw w-full sm:w-auto">
              <Phone size={16} />
              <span>{BRAND.phone}</span>
            </a>
            <button onClick={() => onNavigate('/contact-us')} className="btn-outline-tw w-full sm:w-auto">
              <span>Contact Us Online</span>
            </button>
          </div>
        </div>
      </section>

      <CTABand onOpenQuote={onOpenQuote} />
    </div>
  );
}
