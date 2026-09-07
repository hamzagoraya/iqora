import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function HomeHero({ onOpenQuote, onNavigate }) {
  return (
    <section className="relative bg-slate-950 text-white min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1920&auto=format&fit=crop')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-2xl space-y-6">
          <div className="badge-tag bg-primary/20 text-primary border-primary/30">
            <Sparkles size={14} />
            <span>Carpet • Upholstery • Tile Cleaning</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
            Carpets, upholstery & tile <br />
            <span className="text-primary">cleaned like new again</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-lg leading-relaxed">
            IQORA brings deep-steam carpet cleaning, fabric-safe upholstery care, and tile & grout restoration to North Hollywood and the San Fernando Valley. Eco-friendly products, upfront pricing, and a satisfaction guarantee.
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
        </div>
      </div>
    </section>
  );
}
