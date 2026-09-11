import React from 'react';
import { ChevronRight, Home, Sparkles } from 'lucide-react';

export default function AboutHero({ onNavigate }) {
  return (
    <section className="relative bg-[#101720] bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1920&auto=format&fit=crop')] bg-center bg-cover bg-no-repeat py-20 lg:py-24 text-center text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/85 to-slate-950/95 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hero-content-stagger">
        <div className="flex flex-col items-center">
          <div className="badge-tag mb-4 bg-primary/20 text-primary border-primary/30">
            <Sparkles size={14} />
            <span>Our Heritage</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight mb-4">
            About Us
          </h1>

          <div className="flex items-center space-x-2 text-sm text-slate-300">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Home size={15} />
              <span>Home</span>
            </button>
            <ChevronRight size={14} className="text-slate-500" />
            <span className="text-primary font-semibold">About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}
