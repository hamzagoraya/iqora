import React from 'react';
import { MapPin, TrendingUp, ArrowRight } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import CTABand from '../components/shared/CTABand';
import { PORTFOLIO } from '../data/siteData';

export default function PortfolioPage({ onNavigate, onOpenQuote }) {
  return (
    <div>
      <PageHero
        badge="Our Work"
        title="Portfolio"
        subtitle="Real results from real homes and businesses across North Hollywood and the Valley — rescued rugs, revived carpets, and grout that looks brand new."
        onNavigate={onNavigate}
        crumbs={[{ label: 'Portfolio' }]}
      />

      {/* Projects grid */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO.map((item, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-secondary/90 text-white text-[11px] font-bold uppercase tracking-wide">
                    {item.service}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1 mb-3">
                    <MapPin size={12} className="text-primary" />
                    {item.city}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 flex-grow">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-primary-light dark:bg-primary/10 self-start">
                    <TrendingUp size={15} className="text-primary shrink-0" />
                    <span className="text-xs font-bold text-primary-hover dark:text-primary">{item.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-14 bg-white dark:bg-dark-surface border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white mb-3">
            Your home could be next
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
            Every project starts with a free on-site estimate and a firm quote before we begin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onOpenQuote} className="btn-primary-tw w-full sm:w-auto">
              <span>Start My Project</span>
              <ArrowRight size={16} />
            </button>
            <button onClick={() => onNavigate('reviews')} className="btn-outline-tw w-full sm:w-auto">
              <span>Read Customer Reviews</span>
            </button>
          </div>
        </div>
      </section>

      <CTABand onOpenQuote={onOpenQuote} />
    </div>
  );
}
