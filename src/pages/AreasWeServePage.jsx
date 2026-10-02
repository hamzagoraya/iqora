import React from 'react';
import { MapPin, ArrowRight, Phone, Star } from 'lucide-react';
import Hero from '../components/Hero';
import CTABand from '../components/shared/CTABand';
import { SERVICES, CITIES, BRAND, getServiceCityPath, getAreaPath } from '../data/siteData';
import { BASE_URL } from '../config';

const areaSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${BASE_URL}/areas-we-serve/#webpage`,
      url: `${BASE_URL}/areas-we-serve/`,
      name: 'Areas We Serve | IQORA Cleaning Services',
      description: 'IQORA Cleaning Services provides carpet, upholstery, and tile cleaning in Los Angeles, Orange County, the Inland Empire, and nearby communities.',
      isPartOf: { '@id': `${BASE_URL}/#website` },
      about: { '@id': `${BASE_URL}/#organization` },
      breadcrumb: { '@id': `${BASE_URL}/areas-we-serve/#breadcrumb` },
      inLanguage: 'en-US',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: CITIES.map((city, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Place',
            name: city.name,
            address: {
              '@type': 'PostalAddress',
              addressLocality: city.name,
              addressRegion: 'CA',
              addressCountry: 'US',
            },
            description: city.note,
          },
        })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${BASE_URL}/areas-we-serve/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Areas We Serve', item: `${BASE_URL}/areas-we-serve/` },
      ],
    },
    {
      '@type': ['LocalBusiness', 'Organization'],
      '@id': `${BASE_URL}/#organization`,
      name: 'IQORA Cleaning Services',
      legalName: 'IQORA Cleaning Services LLC',
      url: `${BASE_URL}/`,
      telephone: '+1-323-916-8039',
      email: 'iqoracleaningservices@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'North Hollywood',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
      areaServed: CITIES.map((city) => city.name),
      makesOffer: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
        },
      })),
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: `${BASE_URL}/`,
      name: 'IQORA Cleaning Services',
      publisher: { '@id': `${BASE_URL}/#organization` },
    },
  ],
};

export default function AreasWeServePage({ onNavigate, onOpenQuote }) {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }} />
      <Hero
        badge="Service Area"
        title="Areas We Serve"
        currentPage="Areas We Serve"
        subtitle={`IQORA Cleaning Services serves ${CITIES.length} areas across greater Los Angeles, Orange County, and the Inland Empire with carpet, upholstery, and tile & grout cleaning.`}
        onOpenQuote={onOpenQuote}
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
              Our {CITIES.length} service areas
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Every area has its own guide page plus a dedicated page for
              each of our three main services. Pick your area for local
              details and pricing.
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
                        <button
                          type="button"
                          onClick={() => onNavigate(getAreaPath(city.slug))}
                          className="text-left hover:text-primary transition-colors"
                          aria-label={`View the ${city.name} area page`}
                        >
                          {city.name}
                        </button>
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

                    const servicePath = getServiceCityPath(
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
            {BRAND.rating} stars from {BRAND.reviewCount}+ neighbors across Southern California
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