import React from 'react';
import { MapPin, ArrowRight, CheckCircle2, BadgeCheck, Sparkles } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import CTABand from '../components/shared/CTABand';
import FaqAccordion from '../components/shared/FaqAccordion';
import { SERVICES, CITIES, getServicePath, getServiceCityPath } from '../data/siteData';

const fill = (text, city) => (text ? text.replace(/\{city\}/g, city) : text);

export default function SpecialtyServicePage({ service, onNavigate, onOpenQuote }) {
  const Icon = service.icon;
  const baseCity = 'North Hollywood';

  return (
    <div>
      <PageHero
        badge={service.badge}
        title={`${service.name} Services`}
        subtitle={fill(service.tagline, baseCity)}
        image={service.image}
        onNavigate={onNavigate}
        crumbs={[
          { label: 'Cleaning Services', onClick: () => onNavigate('/cleaning-services') },
          { label: service.name },
        ]}
      />

      {/* Chips */}
      <div className="bg-white dark:bg-dark-surface border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-center gap-2">
          {service.chips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary-light dark:bg-primary/10 text-primary-hover dark:text-primary text-xs font-bold"
            >
              <BadgeCheck size={14} />
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-dark-bg" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="badge-tag mb-5">
              <Sparkles size={14} />
              <span>Specialty Service</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              Expert {service.name.toLowerCase()} for North Hollywood &amp; the Valley
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {fill(service.intro, baseCity)}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button onClick={onOpenQuote} className="btn-primary-tw">
                <span>Get a Free Quote</span>
                <ArrowRight size={16} />
              </button>
              <button onClick={() => onNavigate('pricing')} className="btn-outline-tw">
                <span>View Pricing</span>
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={service.image}
              alt={service.name}
              className="rounded-2xl shadow-card w-full h-72 sm:h-96 object-cover"
            />
            <div className="absolute -bottom-5 -left-5 bg-white dark:bg-dark-card rounded-xl shadow-card px-5 py-4 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-primary-light dark:bg-primary/15 flex items-center justify-center">
                  <Icon size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">Starting at</p>
                  <p className="font-heading font-extrabold text-slate-900 dark:text-white">{service.priceSummary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-white dark:bg-dark-surface" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge-tag mb-4">Why It Matters</div>
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
              What’s included in every {service.name.toLowerCase()} job
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((b) => (
              <div
                key={b.title}
                className="bg-slate-50 dark:bg-dark-card rounded-2xl p-6 border border-slate-100 dark:border-slate-800 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-light dark:bg-primary/15 flex items-center justify-center mb-4">
                  <CheckCircle2 size={22} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-2">{b.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-dark-bg" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="badge-tag mb-4">Transparent Pricing</div>
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              {service.name} pricing
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Typical ranges below. For delicate, oversized, or heavily soiled pieces we confirm the exact price after
              a quick inspection — always before any work begins.
            </p>
            <ul className="space-y-2.5 mb-8">
              {['Firm price before we start', 'No hidden fees or hourly upsells', 'Free on-site estimates'].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  <CheckCircle2 size={17} className="text-primary shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
            <button onClick={onOpenQuote} className="btn-primary-tw">
              <span>Request My Exact Price</span>
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="bg-white dark:bg-dark-card rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-card">
            <div className="bg-secondary px-6 py-4 flex items-center justify-between">
              <span className="font-heading font-bold text-white text-sm">{service.name}</span>
              <span className="text-primary font-heading font-extrabold text-sm">{service.priceSummary}</span>
            </div>
            <ul className="divide-y divide-slate-100 dark:divide-slate-800">
              {service.pricingRows.map((row) => (
                <li key={row.item} className="px-6 py-3.5 flex items-center justify-between gap-4 text-sm">
                  <span className="min-w-0 flex-1 text-slate-600 dark:text-slate-300 leading-snug">{row.item}</span>
                  <span className="font-bold text-slate-900 dark:text-white whitespace-nowrap">{row.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 lg:py-20 bg-white dark:bg-dark-surface" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge-tag mb-4">Areas We Serve</div>
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              {service.name} available across 10 Valley cities
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              We’re based in North Hollywood and serve the entire area. Our most in-demand services — carpet,
              upholstery, and tile &amp; grout cleaning — are available in every city below:
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {SERVICES.map((main) => {
              const MainIcon = main.icon;
              return (
                <div key={main.id} className="bg-slate-50 dark:bg-dark-card rounded-2xl border border-slate-100 dark:border-slate-800 p-6">
                  <button
                    onClick={() => onNavigate(getServicePath(main.id))}
                    className="flex items-center gap-2.5 font-heading font-bold text-slate-900 dark:text-white hover:text-primary transition-colors mb-4"
                  >
                    <MainIcon size={18} className="text-primary" />
                    {main.name} by City
                    <ArrowRight size={15} className="text-primary" />
                  </button>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5" data-reveal-stagger>
                    {CITIES.map((c) => (
                      <button
                        key={c.slug}
                        onClick={() => onNavigate(getServiceCityPath(main.id, c.slug))}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white dark:bg-dark-bg border border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary transition-all duration-300"
                      >
                        <MapPin size={12} className="text-primary shrink-0" />
                        {c.name}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-dark-bg" data-reveal>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge-tag mb-4">Common Questions</div>
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
              {service.name} FAQs
            </h2>
          </div>
          <FaqAccordion faqs={service.faqs} />
        </div>
      </section>

      <CTABand
        onOpenQuote={onOpenQuote}
        title={`Book ${service.name.toLowerCase()} with IQORA`}
        text="Free on-site estimates in North Hollywood and every city we serve. Most customers are scheduled within the same week."
      />
    </div>
  );
}
