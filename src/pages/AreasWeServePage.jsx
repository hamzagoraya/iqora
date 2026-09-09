import React from 'react';
import { MapPin, ArrowRight, Phone, Star } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import CTABand from '../components/shared/CTABand';
import { SERVICES, CITIES, BRAND } from '../data/siteData';

export default function AreasWeServePage({ onNavigate, onOpenQuote }) {
  // Convert service ID + city slug into the new SEO-friendly URL
  const getServicePath = (serviceId, citySlug) => {
    const servicePaths = {
      'carpet-cleaning': `/carpet-cleaning-services-in-${citySlug}`,
      'upholstery-cleaning': `/upholstery-cleaning-services-in-${citySlug}`,
      'tile-and-grout-cleaning': `/tile-and-grout-cleaning-services-in-${citySlug}`,
    };

    return servicePaths[serviceId] || '/cleaning-services';
  };

  return (
    <div>
      <PageHero
        badge="Service Area"
        title="Areas We Serve"
        subtitle="IQORA Cleaning Services is based in North Hollywood and serves 10 cities across the San Fernando Valley and Pasadena with carpet, upholstery, and tile & grout cleaning."
        onNavigate={onNavigate}
        crumbs={[{ label: 'Areas We Serve' }]}
      />

      {/* City Cards */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-dark-bg" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge-tag mb-4">
              Find Your City
            </div>

            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Our 10 service cities
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Every city has a dedicated page for each of our three main
              services. Pick your city and service for local details and
              pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {CITIES.map((city) => (
              <div
                key={city.slug}
                id={`city-${city.slug}`}
                className="bg-white dark:bg-dark-card rounded-2xl border border-slate-100 dark:border-slate-800 shadow-card p-6 sm:p-8 scroll-mt-32"
              >

                {/* City Header */}
                <div className="flex items-start justify-between gap-4 mb-3">

                  <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-xl bg-primary-light dark:bg-primary/15 flex items-center justify-center shrink-0">
                      <MapPin
                        size={22}
                        className="text-primary"
                      />
                    </div>

                    <div>
                      <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white">
                        {city.name}
                      </h3>

                      {city.isParent && (
                        <span className="text-[11px] font-bold text-primary uppercase tracking-wide">
                          Home Base
                        </span>
                      )}
                    </div>

                  </div>

                </div>

                {/* City Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {city.note}
                </p>

                {/* Service Links */}
                <div className="flex flex-wrap gap-2.5">

                  {SERVICES.map((service) => {
                    const Icon = service.icon;

                    const servicePath = getServicePath(
                      service.id,
                      city.slug
                    );

                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => onNavigate(servicePath)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-primary hover:text-primary transition-all duration-300"
                      >
                        <Icon
                          size={14}
                          className="text-primary"
                        />

                        {service.name}

                        <ArrowRight size={13} />
                      </button>
                    );
                  })}

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-14 bg-white dark:bg-dark-surface border-y border-slate-100 dark:border-slate-800" data-reveal>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Stars */}
          <div className="flex items-center justify-center gap-2 mb-3">

            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className="text-primary fill-primary"
              />
            ))}

          </div>

          <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white mb-3">
            {BRAND.rating} stars from {BRAND.reviewCount}+ neighbors across the Valley
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
            Right on the edge of our area? Give us a call — we can often
            accommodate nearby addresses.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* Phone */}
            <a
              href={BRAND.phoneHref}
              className="btn-primary-tw w-full sm:w-auto"
            >
              <Phone size={16} />
              <span>{BRAND.phone}</span>
            </a>

            {/* Reviews */}
            <button
              type="button"
              onClick={() => onNavigate('/our-reviews')}
              className="btn-outline-tw w-full sm:w-auto"
            >
              <span>Read Our Reviews</span>
            </button>

          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand onOpenQuote={onOpenQuote} />

    </div>
  );
}