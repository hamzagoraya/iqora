import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import {
  BRAND,
  SERVICES,
  SPECIALTY_SERVICES,
  CITIES,
  getServicePath,
  getServiceCityPath,
  getSpecialtyPath,
} from '../data/siteData';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const go = (page) => () => onNavigate && onNavigate(page);

  return (
    <footer className="bg-navy text-slate-400 text-sm" data-reveal>
      <div className="py-16 lg:py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Col 1: Bio */}
            <div className="space-y-5">
              <button onClick={go('home')} className="inline-block">
                <img
                  src="/assets/footer-logo.svg"
                  alt="IQORA Cleaning Services Logo"
                  className="h-10 w-auto"
                  onError={(e) => { e.target.src = "/assets/logo-white.svg"; }}
                />
              </button>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {BRAND.footerBlurb}
              </p>
              <div className="flex space-x-3 pt-1">
                <a href="https://www.facebook.com/share/1DnvDuNRMU/?mibextid=wwXIfr" className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary text-white flex items-center justify-center transition-all duration-300" aria-label="Facebook"><Facebook size={16} /></a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary text-white flex items-center justify-center transition-all duration-300" aria-label="Twitter"><Twitter size={16} /></a>
                <a href="https://www.instagram.com/iqoracleaningservices?igsi=bGVhamZoM20yZ3R5&utm_source=qr" className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary text-white flex items-center justify-center transition-all duration-300" aria-label="Instagram"><Instagram size={16} /></a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary text-white flex items-center justify-center transition-all duration-300" aria-label="LinkedIn"><Linkedin size={16} /></a>
              </div>
            </div>

            {/* Col 2: Our Services */}
            <div className="space-y-4">
              <h4 className="text-white text-base font-heading font-bold">Our Services</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <button onClick={() => onNavigate(getServicePath(s.id))} className="hover:text-primary transition-colors text-left">
                      {s.name}
                    </button>
                  </li>
                ))}
                {SPECIALTY_SERVICES.map((s) => (
                  <li key={s.id}>
                    <button onClick={() => onNavigate(getSpecialtyPath(s.id))} className="hover:text-primary transition-colors text-left">
                      {s.name}
                    </button>
                  </li>
                ))}
                <li>
                  <button onClick={go('/cleaning-services')} className="text-primary font-semibold hover:text-primary-hover transition-colors">
                    View All Services
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Areas We Serve */}
            <div className="space-y-4">
              <h4 className="text-white text-base font-heading font-bold">Areas We Serve</h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs sm:text-sm">
                {CITIES.map((c) => (
                  <li key={c.slug}>
                    <button onClick={() => onNavigate(getServiceCityPath('carpet-cleaning', c.slug))} className="hover:text-primary transition-colors text-left">
                      {c.name}
                    </button>
                  </li>
                ))}
              </ul>
              <button onClick={go('/areas-we-serve')} className="text-primary font-semibold hover:text-primary-hover transition-colors text-xs sm:text-sm">
                View All Areas
              </button>
            </div>

            {/* Col 4: Contact & Hours */}
            <div className="space-y-4">
              <h4 className="text-white text-base font-heading font-bold">Say Hello</h4>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                  <span>{BRAND.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={16} className="text-primary shrink-0" />
                  <a href={BRAND.phoneHref} className="hover:text-primary transition-colors">{BRAND.phone}</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={16} className="text-primary shrink-0" />
                  <a href={`mailto:${BRAND.email}`} className="hover:text-primary transition-colors">{BRAND.email}</a>
                </div>
              </div>
              <div className="pt-2 space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between pb-2 border-b border-dashed border-slate-800">
                  <span>Mon - Sat:</span>
                  <strong className="text-white">{BRAND.hours.weekdays}</strong>
                </div>
                <div className="flex justify-between pb-2 border-b border-dashed border-slate-800">
                  <span>Sunday:</span>
                  <strong className="text-primary font-bold">Closed</strong>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Quick Links Row */}
      <div className="py-5 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
          <button onClick={go('home')} className="hover:text-primary transition-colors">Home</button>
          <button onClick={go('/about-us')} className="hover:text-primary transition-colors">About Us</button>
          <button onClick={go('/cleaning-services-pricing')} className="hover:text-primary transition-colors">Pricing</button>
          <button onClick={go('/our-reviews')} className="hover:text-primary transition-colors">Reviews</button>
          <button onClick={go('/portfolio')} className="hover:text-primary transition-colors">Portfolio</button>
          <button onClick={go('/faq')} className="hover:text-primary transition-colors">FAQ</button>
          <button onClick={go('/blog')} className="hover:text-primary transition-colors">Blog</button>
          <button onClick={go('/contact-us')} className="hover:text-primary transition-colors">Contact Us</button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 bg-[#070a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-slate-500">
            © {new Date().getFullYear()} <strong className="text-white">{BRAND.legalName}</strong>. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-primary text-white font-semibold text-xs transition-all duration-300"
            aria-label="Back to Top"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
