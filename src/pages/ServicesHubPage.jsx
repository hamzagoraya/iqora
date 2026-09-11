import React from 'react';
import { MapPin, ArrowRight, CheckCircle2, Building2, Sparkles } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import CTABand from '../components/shared/CTABand';
import {
  SERVICES,
  SPECIALTY_SERVICES,
  CITIES,
  getServicePath,
  getServiceCityPath,
  getSpecialtyPath,
} from '../data/siteData';

export default function ServicesHubPage({ onNavigate, onOpenQuote }) {
  return (
    <div>
      <PageHero
        badge="Our Services"
        title="Cleaning Services"
        subtitle="Restorative cleaning for carpets, upholstery, tile, and fine furnishings — delivered by certified technicians across North Hollywood and the San Fernando Valley."
        onNavigate={onNavigate}
        crumbs={[{ label: 'Cleaning Services' }]}
      />

      {/* Main services */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-dark-bg" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge-tag mb-4">Most Popular</div>
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Our three most in-demand services
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Each service has a dedicated page for every city we serve — pick your city for local pricing and details.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  className="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-secondary/90 text-white text-[11px] font-bold uppercase tracking-wide">
                      {s.badge}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-xl bg-primary-light dark:bg-primary/15 flex items-center justify-center shrink-0">
                        <Icon size={22} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-extrabold text-slate-900 dark:text-white">{s.name}</h3>
                        <p className="text-xs font-bold text-primary">{s.priceSummary}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 flex-grow">
                      {s.tagline.replace('{city}', 'North Hollywood')}
                    </p>
                    <button
                      onClick={() => onNavigate(getServicePath(s.id))}
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all mb-4"
                    >
                      {s.name} in North Hollywood
                      <ArrowRight size={15} />
                    </button>
                    <div className="border-t border-slate-100 dark:border-slate-800 pt-4">
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2.5 uppercase tracking-wide">
                        Also serving:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {CITIES.filter((c) => !c.isParent).map((c) => (
                          <button
                            key={c.slug}
                            onClick={() => onNavigate(getServiceCityPath(s.id, c.slug))}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 dark:bg-dark-bg border border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary transition-all duration-300"
                          >
                            <MapPin size={10} className="text-primary" />
                            {c.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialty services */}
      <section className="py-16 lg:py-20 bg-white dark:bg-dark-surface" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge-tag mb-4">Specialty Services</div>
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Specialty cleaning for the finer things
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Rugs, mattresses, leather, protection treatments, and drapery — handled with fiber-specific methods and
              care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIALTY_SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => onNavigate(getSpecialtyPath(s.id))}
                  className="group text-left bg-slate-50 dark:bg-dark-card rounded-2xl p-6 border border-slate-100 dark:border-slate-800 hover:border-primary hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-light dark:bg-primary/15 flex items-center justify-center">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <span className="text-xs font-bold text-primary">{s.priceSummary}</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    {s.name}
                    <ArrowRight size={15} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    {s.tagline.replace('{city}', 'North Hollywood')}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    <Sparkles size={12} className="text-primary" />
                    {s.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why us strip */}
      <section className="py-14 bg-slate-50 dark:bg-dark-bg border-y border-slate-100 dark:border-slate-800" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-8 text-center">
          {[
            { title: 'Certified Technicians', text: 'Every technician is trained and certified on fabric-safe, restorative methods.' },
            { title: 'Eco-Certified Products', text: 'Fragrance-free, kid- and pet-safe solutions on every job by default.' },
            { title: 'Satisfaction Guaranteed', text: 'If a spot returns in 7 days, we come back and re-treat it free.' },
          ].map((f) => (
            <div key={f.title} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary-light dark:bg-primary/15 flex items-center justify-center mb-3">
                {f.title === 'Certified Technicians' ? (
                  <Building2 size={22} className="text-primary" />
                ) : (
                  <CheckCircle2 size={22} className="text-primary" />
                )}
              </div>
              <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-1.5">{f.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xs">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Areas strip */}
      <section className="py-14 bg-white dark:bg-dark-surface" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white mb-3">
            Every service, in 10 cities
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 max-w-xl mx-auto">
            See our full services-and-cities grid on the Areas We Serve page.
          </p>
          <button onClick={() => onNavigate('/areas-we-serve')} className="btn-secondary-tw">
            <MapPin size={16} />
            <span>View Areas We Serve</span>
          </button>
        </div>
      </section>

      <CTABand onOpenQuote={onOpenQuote} />
    </div>
  );
}
