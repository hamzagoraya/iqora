import React from 'react';
import AboutHero from '../components/about/AboutHero';
import CompanyStory from '../components/about/CompanyStory';
import MarqueeBanner from '../components/home/MarqueeBanner';
import CleaningProcess from '../components/about/CleaningProcess';
import TeamShowcase from '../components/about/TeamShowcase';
import AboutStats from '../components/about/AboutStats';
import TeamBanner from '../components/about/TeamBanner';
import Testimonials from '../components/home/Testimonials';
import ClientLogos from '../components/ClientLogos';
import Newsletter from '../components/Newsletter';

export default function AboutPage({ theme, onOpenQuote, onNavigate }) {
  return (
    <div className="aboutpage-wrapper">
      <AboutHero onNavigate={onNavigate} />
      <div className="relative z-10 bg-white">
        <TeamShowcase />
        <CompanyStory onOpenQuote={onOpenQuote} />
        <MarqueeBanner />
        <CleaningProcess onOpenQuote={onOpenQuote} />
        <AboutStats />
        <TeamBanner />
        <Testimonials onNavigate={onNavigate} />
        <ClientLogos theme={theme} />
        <Newsletter />
      </div>
    </div>
  );
}
