import React from 'react';
import { MapPin, ArrowRight, CheckCircle2, BadgeCheck, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import CTABand from '../components/shared/CTABand';
import FaqAccordion from '../components/shared/FaqAccordion';
import { SERVICES, CITIES, getParentCity, getServicePath, getServiceCityPath, BRAND } from '../data/siteData';
import WhatsAppIcon from '../components/shared/WhatsAppIcon';

const fill = (text, city) => (text ? text.replace(/\{city\}/g, city) : text);

export default function ServicePage({ service, city, onNavigate, onOpenQuote }) {
  const isParent = !!city.isParent;
  const parentCity = getParentCity();
  const siblingCities = CITIES.filter((c) => c.slug !== city.slug);
  const otherServices = SERVICES.filter((s) => s.id !== service.id);
  const Icon = service.icon;

  const crumbs = [
    { label: 'Cleaning Services', onClick: () => onNavigate('/cleaning-services') },
    ...(isParent
      ? [{ label: `${service.name} — ${parentCity.name}` }]
      : [
          { label: `${service.name} — ${parentCity.name}`, onClick: () => onNavigate(getServicePath(service.id)) },
          { label: city.name },
        ]),
  ];

  return (
    <div>
      <Hero
        badge={service.badge}
        title={`${service.name} Services in ${city.name}`}
        currentPage={city.name}
        subtitle={fill(service.tagline, city.name)}
        image={service.image}
        onOpenQuote={onOpenQuote}
        onNavigate={onNavigate}
        crumbs={crumbs}
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
              <span>{isParent ? 'Our Home Base' : `Serving ${city.name}`}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              Professional {service.name.toLowerCase()} in {city.name}, done right the first time
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {fill(service.intro, city.name)}
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {fill(service.introSecondary, city.name)}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 italic border-l-4 border-primary pl-4 py-1">
              {city.note}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button onClick={onOpenQuote} className="btn-primary-tw">
                <span>Get a Free Quote</span>
                <ArrowRight size={16} />
              </button>
              <a
                href={BRAND.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-green-600 hover:bg-green-500 text-white font-bold text-sm rounded-xl transition-all duration-300"
                aria-label="Get a Quote on WhatsApp"
              >
                <WhatsAppIcon size={16} />
                <span>Get a Quote on WhatsApp</span>
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={service.image}
              alt={`${service.name} in ${city.name}`}
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
            <div className="badge-tag mb-4">Why {city.name} Chooses Us</div>
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
              What’s included in every {service.shortName.toLowerCase()} visit
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

      {/* Process */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-dark-bg" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge-tag mb-4">Our Process</div>
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
              How we deliver spotless results in 4 steps
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <div key={step.title} className="relative bg-white dark:bg-dark-card rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary text-slate-950 font-heading font-extrabold text-lg flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-2 text-sm">{step.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-20 bg-white dark:bg-dark-surface" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="badge-tag mb-4">Transparent Pricing</div>
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              {service.name} pricing in {city.name}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Every quote is confirmed on-site before work begins. These ranges reflect typical jobs in {city.name} —
              your exact price depends on size, condition, and any add-on treatments.
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
          <div className="bg-slate-50 dark:bg-dark-card rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-card">
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

      {/* Service Areas */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-dark-bg" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge-tag mb-4">Service Areas</div>
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              {isParent ? `We bring ${service.name.toLowerCase()} to all ${CITIES.length} areas we serve` : `Also serving ${service.shortName.toLowerCase()} customers nearby`}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {isParent
                ? `${parentCity.name} is our home base, and our ${service.name.toLowerCase()} teams serve all of these communities, usually within the same week:`
                : `Not in ${city.name}? We provide the same professional ${service.name.toLowerCase()} throughout the area:`}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4" data-reveal-stagger>
            {siblingCities.map((c) => (
              <button
                key={c.slug}
                onClick={() => onNavigate(getServiceCityPath(service.id, c.slug))}
                className="group bg-white dark:bg-dark-card rounded-xl border border-slate-100 dark:border-slate-800 px-4 py-4 text-center hover:border-primary hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
              >
                <MapPin size={18} className="mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100 block">{c.name}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {service.shortName} cleaning
                </span>
              </button>
            ))}
          </div>

          {!isParent && otherServices.length > 0 && (
            <div className="mt-12 bg-white dark:bg-dark-card rounded-2xl border border-slate-100 dark:border-slate-800 p-6 sm:p-8 max-w-3xl mx-auto">
              <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-4 text-center">
                Other services we offer in {city.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {otherServices.map((s) => {
                  const OtherIcon = s.icon;
                  return (
                    <button
                      key={s.id}
                      onClick={() => onNavigate(getServiceCityPath(s.id, city.slug))}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-100 dark:border-slate-800 text-sm font-bold text-slate-700 dark:text-slate-200 hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      <OtherIcon size={16} className="text-primary" />
                      {s.name} in {city.name}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-20 bg-white dark:bg-dark-surface" data-reveal>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="badge-tag mb-4">Common Questions</div>
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
              {service.name} FAQs
            </h2>
          </div>
          <FaqAccordion faqs={service.faqs.map((f) => ({ q: fill(f.q, city.name), a: fill(f.a, city.name) }))} />
        </div>
      </section>

      <CTABand
        onOpenQuote={onOpenQuote}
        title={`Book ${service.name.toLowerCase()} in ${city.name} today`}
        text={`Free on-site estimates across ${city.name} and all ${CITIES.length} areas we serve. Most customers are scheduled within the same week.`}
      />
    </div>
  );
}
