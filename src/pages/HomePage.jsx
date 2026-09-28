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
import { HOME_FAQS, HOME_PAGE_META } from '../data/siteData';
import homeSchema from '../data/homeSchema.json';

export default function HomePage({ onOpenQuote, onNavigate }) {
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
      <HomeHero onOpenQuote={onOpenQuote} onNavigate={onNavigate} />
      <FeatureHighlights onOpenQuote={onOpenQuote} />
      <WhyChooseUs onOpenQuote={onOpenQuote} />
      <MarqueeBanner />
      <AboutSection onOpenQuote={onOpenQuote} />
      <ServiceShowcase onOpenQuote={onOpenQuote} onNavigate={onNavigate} />
      <StatsCounter />
      <PricingPlans onOpenQuote={onOpenQuote} onNavigate={onNavigate} />
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
      <EstimateCallout onOpenQuote={onOpenQuote} />
    </div>
  );
}
