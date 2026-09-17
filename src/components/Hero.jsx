import React from 'react';
import { ArrowRight, ChevronRight, Home, MessageCircle, Sparkles } from 'lucide-react';

const WHATSAPP_HREF = 'https://wa.me/13239168039?text=Hello%20IQORA%20Cleaning%20Services%2C%20I%20would%20like%20to%20get%20a%20cleaning%20quote.';

export default function Hero({
  title,
  badge,
  currentPage,
  onOpenQuote,
  onNavigate,
  subtitle,
  image,
  crumbs = [],
}) {
  const bg = image || 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1920&auto=format&fit=crop';

  return (
    <section className="relative bg-navy bg-center bg-cover bg-no-repeat py-20 lg:py-24 text-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:bg-fixed"
        style={{ backgroundImage: `url('${bg}')` }}
        aria-hidden="true"
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/85 to-navy/95 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hero-content-stagger">
        <div className="flex flex-col items-center">
          <div className="badge-tag mb-4">
            <Sparkles size={14} />
            <span>{badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mb-4 max-w-4xl">
            {title}
          </h1>

          {subtitle && (
            <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center space-x-2 text-sm text-slate-300">
            <button
              type="button"
              onClick={() => onNavigate && onNavigate('/')}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Home size={15} />
              <span>Home</span>
            </button>
            {(crumbs.length ? crumbs : [{ label: currentPage }]).map((crumb, i) => (
              <React.Fragment key={i}>
                <ChevronRight size={14} className="text-slate-500" />
                {crumb.onClick ? (
                  <button type="button" onClick={crumb.onClick} className="hover:text-primary transition-colors">
                    {crumb.label}
                  </button>
                ) : (
                  <span className="text-primary font-semibold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <button type="button" onClick={onOpenQuote} className="btn-primary-tw">
              <span>Get a Free Quote</span>
              <ArrowRight size={18} />
            </button>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-green-600 hover:bg-green-500 text-white font-bold text-sm rounded-xl transition-all duration-300"
            >
              <MessageCircle size={18} />
              <span>Get a Quote on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
