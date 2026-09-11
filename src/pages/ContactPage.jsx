import React from 'react';
import Hero from '../components/Hero';
import ContactCards from '../components/ContactCards';
import ContactSection from '../components/ContactSection';
import LocationMap from '../components/LocationMap';
import ClientLogos from '../components/ClientLogos';
import Newsletter from '../components/Newsletter';

export default function ContactPage({ theme, onOpenQuote }) {
  return (
    <div className="contactpage-wrapper">
      <Hero />
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
