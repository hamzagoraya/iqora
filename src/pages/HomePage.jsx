import React from 'react';
import HomeHero from '../components/home/HomeHero';
import FeatureHighlights from '../components/home/FeatureHighlights';
import WhyChooseUs from '../components/home/WhyChooseUs';
import MarqueeBanner from '../components/home/MarqueeBanner';
import AboutSection from '../components/home/AboutSection';
import ServiceShowcase from '../components/home/ServiceShowcase';
import StatsCounter from '../components/home/StatsCounter';
import EstimateCallout from '../components/home/EstimateCallout';
import Testimonials from '../components/home/Testimonials';
import PricingPlans from '../components/home/PricingPlans';
import BlogSection from '../components/home/BlogSection';
import ClientLogos from '../components/ClientLogos';
import Newsletter from '../components/Newsletter';

export default function HomePage({ theme, onOpenQuote, onNavigate }) {
  return (
    <div className="homepage-wrapper">
      <HomeHero onOpenQuote={onOpenQuote} onNavigate={onNavigate} />
      <FeatureHighlights onOpenQuote={onOpenQuote} />
      <WhyChooseUs onOpenQuote={onOpenQuote} />
      <MarqueeBanner />
      <AboutSection onOpenQuote={onOpenQuote} />
      <ServiceShowcase onOpenQuote={onOpenQuote} onNavigate={onNavigate} />
      <StatsCounter />
      <EstimateCallout onOpenQuote={onOpenQuote} />
      <Testimonials onNavigate={onNavigate} />
      <ClientLogos theme={theme} />
      <PricingPlans onOpenQuote={onOpenQuote} onNavigate={onNavigate} />
      <BlogSection onNavigate={onNavigate} />
      <Newsletter />
    </div>
  );
}
