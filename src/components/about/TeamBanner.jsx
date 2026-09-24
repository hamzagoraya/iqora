import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

export default function TeamBanner() {
  return (
    <section className="py-12" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[380px] sm:h-[460px] border border-slate-200 dark:border-slate-800 group">
          <img 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1400&auto=format&fit=crop" 
            alt="IQORA Cleaning Services Team"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent"></div>

          <div className="absolute inset-0 p-8 sm:p-14 flex flex-col justify-end max-w-xl text-white space-y-3">
            <div className="badge-tag ">
              <Award size={14} />
              <span>Certified Standards</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-white leading-tight">
              Pristine cleanliness powered by professional dedication.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Every cleaning job is supervised by a certified team lead to ensure strict quality compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
