import React, { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, Clock3, ShieldCheck } from 'lucide-react';
import { BRAND } from '../../data/siteData';
import WhatsAppIcon from '../shared/WhatsAppIcon';

const WHATSAPP_HREF = 'https://wa.me/13239168039?text=Hello%20IQORA%20Cleaning%20Services%2C%20I%20would%20like%20to%20get%20a%20cleaning%20quote.';

export default function HomeHero({ onOpenQuote, onNavigate }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const slides = [
    {
      id: 'hero-main',
      badge: 'Los Angeles · Orange County · Inland Empire',
      heading: 'Carpet & Upholstery Cleaning Across Greater Los Angeles',
      copy: 'IQORA Cleaning Services deep-cleans the carpets, furniture, and floors in homes across Los Angeles, Orange County, and the Inland Empire, from sofas and area rugs to mattresses, leather couches, curtains, and tile and grout. Based in North Hollywood, we use hot water extraction to pull out the dirt, allergens, and pet odors your vacuum leaves behind. Prices are posted before you book, and we\'re open 24 hours.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1920&auto=format&fit=crop',
    },
    {
      id: 'hero-upholstery',
      heading: 'Couches and sectionals, fresh and clean again',
      copy: 'Fabric-safe upholstery cleaning from $29 per seat, with every fabric\'s cleaning code checked before we start.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'hero-tile',
      heading: 'Tile and grout that looks new, not just clean',
      copy: 'We lift the grime that settles deep in grout lines and bring back the original color of your floors.',
      image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const goToSlide = (slideIndex) => {
    setActiveSlide((slideIndex + slides.length) % slides.length);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener('change', updateMotionPreference);

    return () => mediaQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion, slides.length]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      goToSlide(activeSlide + 1);
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      goToSlide(activeSlide - 1);
    }
    if (event.key === 'Home') {
      event.preventDefault();
      goToSlide(0);
    }
    if (event.key === 'End') {
      event.preventDefault();
      goToSlide(slides.length - 1);
    }
  };

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    if (onNavigate) onNavigate('/cleaning-services-pricing');
  };

  const slide = slides[activeSlide];
  const isPrimarySlide = activeSlide === 0;
  const HeadingTag = isPrimarySlide ? 'h1' : 'div';

  return (
    <section
      className="relative bg-navy text-white min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
      onKeyDown={handleKeyDown}
      tabIndex="0"
      aria-roledescription="carousel"
      aria-label="IQORA cleaning services"
    >
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transition-transform duration-1000">
        {slides.map((currentSlide, index) => (
          <img
            key={currentSlide.id}
            src={currentSlide.image}
            alt=""
            aria-hidden="true"
            fetchpriority={index === 0 ? 'high' : 'auto'}
            loading={index === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity ${prefersReducedMotion ? 'duration-0' : 'duration-700'} ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div key={slide.id} className="max-w-2xl space-y-6 hero-content-stagger" aria-live="polite">
          {slide.badge && (
            <div className="badge-tag">
              <Sparkles size={14} />
              <span>{slide.badge}</span>
            </div>
          )}

          <HeadingTag className={`font-heading font-extrabold text-white tracking-tight leading-[1.1] ${isPrimarySlide ? 'text-4xl sm:text-6xl lg:text-7xl' : 'text-4xl sm:text-5xl lg:text-6xl'}`}>
            {slide.heading}
          </HeadingTag>

          <p className="text-base sm:text-lg text-slate-300 max-w-lg leading-relaxed">
            {slide.copy}
          </p>

          {isPrimarySlide && (
            <>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button type="button" onClick={onOpenQuote} className="btn-primary-tw text-base px-8 py-4">
                  <span>Get a Free Quote</span>
                  <ArrowRight size={18} />
                </button>
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold text-base rounded-xl transition-all duration-300" aria-label="Get a Quote on WhatsApp">
                  <WhatsAppIcon size={18} />
                  <span>Get a Quote on WhatsApp</span>
                </a>
                <button type="button" onClick={scrollToPricing} className="btn-outline-tw text-white border-white/20 hover:border-primary hover:text-primary px-7 py-4">
                  <span>See Our Prices</span>
                </button>
              </div>
              <div className="pt-6 flex items-center gap-6 text-xs sm:text-sm text-slate-400 border-t border-white/10 mt-8">
                <div className="flex items-center gap-2">
                  <Clock3 size={18} className="text-primary" />
                  <span>Open 24 hours · Upfront, posted prices</span>
                </div>
              </div>
            </>
          )}

          <div className="flex items-center gap-2 pt-2" role="group" aria-label="Choose hero slide">
            {slides.map((currentSlide, index) => (
              <button
                key={currentSlide.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === activeSlide ? 'true' : undefined}
                className={`h-2 rounded-full transition-all ${index === activeSlide ? 'w-8 bg-primary' : 'w-2 bg-white/40 hover:bg-white/70'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
