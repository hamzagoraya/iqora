import React, { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { BRAND, SERVICES, getParentCity } from '../../data/siteData';

export default function HomeHero({ onOpenQuote, onNavigate }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const parentCity = getParentCity();
  const carpetService = SERVICES.find((service) => service.id === 'carpet-cleaning');
  const upholsteryService = SERVICES.find((service) => service.id === 'upholstery-cleaning');
  const tileService = SERVICES.find((service) => service.id === 'tile-and-grout-cleaning');

  const slides = [
    {
      id: 'all-services',
      badge: [carpetService.name, upholsteryService.name, tileService.name].join(' • '),
      heading: <>Carpets, upholstery & tile <br /><span className="text-primary">cleaned like new again</span></>,
      copy: BRAND.tagline,
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1920&auto=format&fit=crop',
    },
    {
      id: carpetService.id,
      badge: carpetService.badge,
      heading: carpetService.tagline,
      copy: carpetService.intro.replace('{city}', parentCity.name),
      image: carpetService.image,
    },
    {
      id: 'upholstery-and-tile',
      badge: `${upholsteryService.shortName} & ${tileService.shortName}`,
      heading: `${upholsteryService.name} & ${tileService.name}`,
      copy: `${upholsteryService.tagline}. ${tileService.tagline}.`,
      image: upholsteryService.image,
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

  const slide = slides[activeSlide];

  return (
    <section
      className="relative bg-slate-950 text-white min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden"
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
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transition-transform duration-1000">
        {slides.map((currentSlide, index) => (
          <img
            key={currentSlide.id}
            src={currentSlide.image}
            alt=""
            aria-hidden="true"
            fetchPriority={index === 0 ? 'high' : 'auto'}
            loading={index === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity ${prefersReducedMotion ? 'duration-0' : 'duration-700'} ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div key={slide.id} className="max-w-2xl space-y-6 hero-content-stagger" aria-live="polite">
          <div className="badge-tag bg-primary/20 text-primary border-primary/30">
            <Sparkles size={14} />
            <span>{slide.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
            {slide.heading}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-lg leading-relaxed">
            {slide.copy}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button onClick={onOpenQuote} className="btn-primary-tw text-base px-8 py-4">
              <span>Get a Free Quote</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-outline-tw text-white border-white/20 hover:border-primary hover:text-primary px-7 py-4"
            >
              Explore Services
            </button>
          </div>

          {/* Quick Stats Pill */}
          <div className="pt-6 flex items-center gap-6 text-xs sm:text-sm text-slate-400 border-t border-white/10 mt-8">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-primary" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Same-week appointments</span>
            </div>
          </div>

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
