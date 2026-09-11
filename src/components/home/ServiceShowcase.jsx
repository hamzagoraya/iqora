import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES, getServicePath } from '../../data/siteData';

export default function ServiceShowcase({ onOpenQuote, onNavigate }) {
  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50 dark:bg-dark-bg" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="badge-tag">Our Services</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
              Specialist cleaning for carpets, upholstery & tile
            </h2>
          </div>

          <button
            onClick={() => onNavigate('/cleaning-services')}
            className="btn-secondary-tw self-start md:self-auto shrink-0"
          >
            <span>View All Services</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal-stagger>
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="relative h-56 sm:h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                  <span className="absolute top-4 left-4 bg-primary text-slate-950 text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    {service.badge}
                  </span>

                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                </div>

                <div className="p-7 space-y-4 flex flex-col flex-1">
                  <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                    {service.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                    {service.tagline}
                  </p>

                  <p className="text-sm font-extrabold text-primary">
                    {service.priceSummary}
                  </p>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onNavigate(getServicePath(service.id))}
                      className="inline-flex items-center gap-2 text-xs font-extrabold text-slate-900 dark:text-white hover:text-primary transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight size={14} />
                    </button>
                    <button
                      onClick={onOpenQuote}
                      className="inline-flex items-center gap-2 text-xs font-extrabold text-primary group-hover:gap-3 transition-all"
                    >
                      <span>Get a Quote</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
