import React from 'react';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import CompanyStory from '../components/about/CompanyStory';
import MarqueeBanner from '../components/home/MarqueeBanner';
import CleaningProcess from '../components/about/CleaningProcess';
import AboutStats from '../components/about/AboutStats';
import TeamBanner from '../components/about/TeamBanner';
import Testimonials from '../components/home/Testimonials';
import ClientLogos from '../components/ClientLogos';
import Newsletter from '../components/Newsletter';

export default function AboutPage({ theme, onOpenQuote, onNavigate }) {
  return (
    <div className="aboutpage-wrapper">
      <Hero
        badge="Our Heritage"
        title="About Us"
        currentPage="About Us"
        onOpenQuote={onOpenQuote}
        onNavigate={onNavigate}
      />
      <div className="relative z-10 bg-white">
        <CompanyStory onOpenQuote={onOpenQuote} />
        <section className="bg-slate-50 py-10 dark:bg-dark-bg/60" data-reveal>
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                The people behind the clean
              </p>
              <h2 className="mt-2 font-heading text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
                Meet Our Team
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/our-team')}
              className="btn-primary-tw w-full sm:w-auto"
            >
              <span>Meet Our Team</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </section>
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
