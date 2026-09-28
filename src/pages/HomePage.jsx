import React, { useEffect } from 'react';
import HomeHero from '../components/home/HomeHero';
import FeatureHighlights from '../components/home/FeatureHighlights';
import WhyChooseUs from '../components/home/WhyChooseUs';
import MarqueeBanner from '../components/home/MarqueeBanner';
import AboutSection from '../components/home/AboutSection';
import ServiceShowcase from '../components/home/ServiceShowcase';
import StatsCounter from '../components/home/StatsCounter';
import PricingPlans from '../components/home/PricingPlans';
import EstimateCallout from '../components/home/EstimateCallout';
import FaqAccordion from '../components/shared/FaqAccordion';
import { ArrowRight, MapPin } from 'lucide-react';
import { getServiceCityPath, HOME_FAQS, HOME_PAGE_META } from '../data/siteData';
import homeSchema from '../data/homeSchema.json';

export default function HomePage({ onOpenQuote, onNavigate }) {
  const scrollToEstimate = () => {
    const estimateSection = document.getElementById('estimate');
    if (estimateSection) {
      estimateSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      onOpenQuote?.();
    }
  };

  const serviceAreaLink = (serviceId, citySlug, text) => {
    const path = getServiceCityPath(serviceId, citySlug);
    return (
      <a
        href={`https://iqoracleaningservices.com${path}/`}
        onClick={(event) => {
          event.preventDefault();
          onNavigate(path);
        }}
        className="text-primary underline underline-offset-4 hover:text-primary-hover"
      >
        {text}
      </a>
    );
  };

  useEffect(() => {
    document.title = HOME_PAGE_META.title;

    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }

    descriptionMeta.setAttribute('content', HOME_PAGE_META.description);
  }, []);

  return (
    <div className="homepage-wrapper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <HomeHero onOpenQuote={scrollToEstimate} onNavigate={onNavigate} />
      <FeatureHighlights />
      <WhyChooseUs onOpenQuote={scrollToEstimate} />
      <MarqueeBanner />
      <AboutSection onOpenQuote={scrollToEstimate} />
      <ServiceShowcase onOpenQuote={scrollToEstimate} onNavigate={onNavigate} />
      <section className="bg-white py-16 dark:bg-dark-surface lg:py-20" data-reveal>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-5 text-3xl font-heading font-extrabold text-slate-900 dark:text-white sm:text-4xl">Specialty Cleaning for Rugs, Mattresses, Leather, and More</h2>
          <div className="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            <p>Some items need their own approach. Wool and synthetic rugs get fiber-specific care through our area rug cleaning, which starts at $100, or just $60 when added to a carpet or couch cleaning. Beds collect dust mites, sweat, and body oils over time, and mattress cleaning clears them out starting at $89 for a single. Leather needs gentler products than fabric, so leather couch cleaning is handled as its own service at $40 per seat.</p>
            <p>Freshly cleaned fabric stays cleaner longer with Scotchgard fabric protection, which helps sofas and chairs resist future spills for $30 per seat. Curtains hold onto dust and cooking smells too, and curtain cleaning at your home starts at $80 per curtain, with no taking them down and hauling them to a dry cleaner.</p>
          </div>
        </div>
      </section>
      <StatsCounter />
      <section className="bg-slate-50 py-16 dark:bg-dark-bg lg:py-20" data-reveal>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-5 text-3xl font-heading font-extrabold text-slate-900 dark:text-white sm:text-4xl">Serving Los Angeles, Orange County, and the Inland Empire</h2>
          <div className="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            <p>Homes across Southern California come with very different cleaning needs. In Los Angeles itself, apartments and older bungalows share one thing: carpet that works hard, which is why {serviceAreaLink('carpet-cleaning', 'los-angeles', 'carpet cleaning in Los Angeles')} makes up so much of what we do. Fine fabrics and designer furniture call for extra care, and {serviceAreaLink('upholstery-cleaning', 'beverly-hills', 'upholstery cleaning in Beverly Hills')} starts with checking every cleaning code before any solution touches the fabric. Along the coast, {serviceAreaLink('carpet-cleaning', 'long-beach', 'carpet cleaning in Long Beach')} often means lifting the sand and salt air grime that settles into fibers near the beach.</p>
            <p>Newer homes in Orange County lean heavily on tile, so {serviceAreaLink('tile-and-grout-cleaning', 'irvine', 'tile and grout cleaning in Irvine')} is a common request in kitchens, bathrooms, and entryways. Further inland, larger family homes in Riverside and Santa Clarita tend to have several carpeted bedrooms, where {serviceAreaLink('carpet-cleaning', 'riverside', 'carpet cleaning in Riverside')} and {serviceAreaLink('carpet-cleaning', 'santa-clarita', 'carpet cleaning in Santa Clarita')} get the most value from per-room bundle pricing.</p>
            <p>We also serve Santa Ana, Anaheim, Huntington Beach, Torrance, Culver City, San Bernardino, Ontario, Pomona, and Thousand Oaks. Our full Southern California service area stretches from Thousand Oaks in the west to San Bernardino in the east.</p>
          </div>
          <a href="https://iqoracleaningservices.com/areas-we-serve/" onClick={(event) => { event.preventDefault(); onNavigate('/areas-we-serve'); }} className="btn-outline-tw mt-6 inline-flex items-center gap-2"><MapPin size={16} />View All Service Areas</a>
        </div>
      </section>
      <section className="border-y border-slate-100 bg-white py-14 text-center dark:border-slate-800 dark:bg-dark-surface" data-reveal>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="badge-tag mx-auto mb-3">Reviews</div>
          <h2 className="mb-5 text-3xl font-heading font-extrabold text-slate-900 dark:text-white sm:text-4xl">What Our Customers Say About IQORA</h2>
          <a href="https://iqoracleaningservices.com/our-reviews/" onClick={(event) => { event.preventDefault(); onNavigate('/our-reviews'); }} className="btn-outline-tw inline-flex items-center gap-2">Read Customer Reviews<ArrowRight size={16} /></a>
        </div>
      </section>
      <PricingPlans onOpenQuote={scrollToEstimate} />
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-dark-bg" data-reveal>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center space-y-3">
            <div className="badge-tag mx-auto">FAQ</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion faqs={HOME_FAQS} />
        </div>
      </section>
      <EstimateCallout />
    </div>
  );
}
