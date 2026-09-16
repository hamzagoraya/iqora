import React, { useEffect } from 'react';
import { MapPin, ArrowRight, CheckCircle2, Building2, Sparkles, ShieldCheck } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import CTABand from '../components/shared/CTABand';
import {
  ALL_SERVICES,
  SPECIALTY_SERVICES,
  getServiceCityPath,
  getSpecialtyPath,
  BRAND,
} from '../data/siteData';
import WhatsAppIcon from '../components/shared/WhatsAppIcon';

export default function AreaPage({ city, onNavigate, onOpenQuote }) {
  useEffect(() => {
    if (!city) return;

    // SEO Injection
    document.title = `Professional Cleaning Services in ${city.name} | IQORA`;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = `IQORA provides top-rated carpet, upholstery, tile, and fine furnishing cleaning services in ${city.name}. Eco-certified products and local experts.`;

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = `https://iqoracleaning.com/areas-we-serve/${city.slug}`;
  }, [city]);

  if (!city) return null;

  return (
    <div>
      <PageHero
        badge="Local Service Area"
        title={`Professional Cleaning Services in ${city.name}`}
        subtitle={city.note || `Providing expert carpet, upholstery, and tile cleaning for homes and businesses in ${city.name}.`}
        onNavigate={onNavigate}
        crumbs={[
          { label: 'Areas We Serve', onClick: () => onNavigate('/areas-we-serve') },
          { label: city.name }
        ]}
      />

      {/* Services Section */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-dark-bg" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge-tag mb-4">
              <MapPin size={14} />
              <span>Available in {city.name}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Our cleaning services in {city.name}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              From everyday carpet care to restorative tile and delicate fabric cleaning, we bring our full suite of professional services to your neighborhood.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {ALL_SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  className="group bg-white dark:bg-dark-card rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-light dark:bg-primary/15 flex items-center justify-center shrink-0">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-slate-900 dark:text-white">
                        {s.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 flex-grow">
                    {s.tagline.replace(/\{city\}/g, city.name)}
                  </p>
                  <button
                    onClick={() => {
                      const isSpecialty = SPECIALTY_SERVICES.some((sp) => sp.id === s.id);
                      if (isSpecialty) {
                        onNavigate(getSpecialtyPath(s.id));
                      } else {
                        onNavigate(getServiceCityPath(s.id, city.slug));
                      }
                    }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
                  >
                    View details & pricing
                    <ArrowRight size={15} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose IQORA */}
      <section className="py-16 lg:py-20 bg-white dark:bg-dark-surface border-y border-slate-100 dark:border-slate-800" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Why {city.name} chooses IQORA
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: ShieldCheck,
                title: 'Eco-Certified Products',
                text: 'We use fragrance-free, Green Seal-certified solutions that are fully safe for kids and pets in your home.'
              },
              {
                icon: Building2,
                title: 'Local Experts',
                text: 'Our technicians are highly trained and familiar with the unique architectural styles and materials found across the Valley.'
              },
              {
                icon: CheckCircle2,
                title: '100% Guaranteed',
                text: 'If a stain returns within 7 days of service, we will come back and re-treat the area completely free of charge.'
              },
            ].map((feature) => {
              const FIcon = feature.icon;
              return (
                <div key={feature.title} className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary-light dark:bg-primary/15 flex items-center justify-center mb-4">
                    <FIcon size={26} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xs leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Area Information */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-dark-bg" data-reveal>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-6">
            <MapPin size={32} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Proudly serving {city.name}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            {city.note || `From residential neighborhoods to commercial districts, we offer flexible scheduling and tailored cleaning plans for all our clients in ${city.name}.`}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button onClick={onOpenQuote} className="btn-primary-tw">
              Get a Free Quote in {city.name}
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
      </section>

      <CTABand onOpenQuote={onOpenQuote} />
    </div>
  );
}
