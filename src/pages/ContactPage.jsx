import React from 'react';
import Hero from '../components/Hero';
import ContactCards from '../components/ContactCards';
import ContactSection from '../components/ContactSection';
import LocationMap from '../components/LocationMap';
import ClientLogos from '../components/ClientLogos';
import Newsletter from '../components/Newsletter';

export default function ContactPage({ theme, onOpenQuote, onNavigate }) {
  return (
    <div className="contactpage-wrapper">
      <Hero
        badge="North Hollywood, CA"
        title="Contact Us"
        currentPage="Contact Us"
        onOpenQuote={onOpenQuote}
        onNavigate={onNavigate}
      />
      <div className="relative z-10 bg-white">
        <ContactCards />
        <ContactSection onOpenQuote={onOpenQuote} />
        <LocationMap />
        <ClientLogos theme={theme} />
        <Newsletter />
      </div>
    </div>
  );
}
