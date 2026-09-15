import React from 'react';
import { ChevronRight, Home, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-navy bg-[url('/assets/titlebar-bg-img-01.jpg')] bg-center bg-cover bg-no-repeat py-20 lg:py-24 text-center text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/85 to-navy/95 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="badge-tag mb-4">
            <Sparkles size={14} />
            <span>North Hollywood, CA</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight mb-4">
            Contact Us
          </h1>

          <div className="flex items-center space-x-2 text-sm text-slate-300">
            <a href="#" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Home size={15} />
              <span>Home</span>
            </a>
            <ChevronRight size={14} className="text-slate-500" />
            <span className="text-primary font-semibold">Contact Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}
