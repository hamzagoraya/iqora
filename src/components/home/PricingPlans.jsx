import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { SERVICES } from '../../data/siteData';

export default function PricingPlans({ onOpenQuote, onNavigate }) {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="badge-tag mx-auto">Transparent Pricing</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
            Honest prices, quoted before we start
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Per-job pricing with no hidden fees. We inspect, quote a firm price, and honor it — for homes and businesses alike.
          </p>
        </div>

        {/* 3 Service Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SERVICES.map((service, idx) => {
            const featured = idx === 0;
            return (
              <div
                key={service.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  featured
                    ? 'bg-secondary text-white shadow-2xl border-2 border-primary md:-translate-y-2'
                    : 'bg-white dark:bg-dark-surface text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-xl'
                }`}
              >
                {featured && (
                  <span className="absolute -top-4 right-8 bg-primary text-slate-950 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <Sparkles size={13} />
                    Most Popular
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">
                      {service.name}
                    </h3>

                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-heading font-extrabold tracking-tight">
                        {service.priceSummary}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm pt-4 border-t border-slate-200/20">
                    {service.benefits.slice(0, 4).map((benefit) => (
                      <li key={benefit.title} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          featured ? 'bg-primary text-slate-950' : 'bg-primary-light text-primary dark:bg-primary/20'
                        }`}>
                          <Check size={13} strokeWidth={3} />
                        </div>
                        <span className={featured ? 'text-slate-200' : 'text-slate-600 dark:text-slate-300'}>
                          {benefit.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 space-y-3">
                  <button
                    onClick={onOpenQuote}
                    className={`w-full justify-center ${
                      featured ? 'btn-primary-tw' : 'btn-secondary-tw dark:bg-slate-800 dark:hover:bg-slate-700'
                    }`}
                  >
                    <span>Get a Free Quote</span>
                    <ArrowRight size={16} />
                  </button>

                  <button
                    onClick={() => onNavigate && onNavigate(`service/${service.id}`)}
                    className={`w-full justify-center text-xs font-extrabold py-2 transition-colors ${
                      featured ? 'text-primary hover:text-primary-hover' : 'text-primary hover:text-primary-hover'
                    }`}
                  >
                    <span>View Full Price List</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => onNavigate && onNavigate('pricing')}
            className="inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:text-primary-hover transition-colors"
          >
            <span>Compare all services & specialty pricing</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
