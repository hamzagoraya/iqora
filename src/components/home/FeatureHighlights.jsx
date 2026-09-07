import React from 'react';
import { ArrowUpRight, Award, Sparkles, ShieldCheck } from 'lucide-react';

export default function FeatureHighlights({ onOpenQuote }) {
  return (
    <section className="relative z-20 -mt-10 lg:-mt-16 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Top Image Feature Banner */}
          <div className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
            <div className="relative h-44 rounded-2xl overflow-hidden mb-5">
              <img 
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800&auto=format&fit=crop" 
                alt="Expert Cleaners" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-xs font-bold text-white flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                <ShieldCheck size={14} className="text-primary" />
                <span>Certified Teams</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-2">
                Expert & Insured Cleaners
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                Our staff undergoes rigorous background checks and continuous training to ensure maximum quality.
              </p>
            </div>

            <button 
              onClick={onOpenQuote}
              className="inline-flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors pt-2 border-t border-slate-100 dark:border-slate-800"
            >
              <span>100% Satisfaction Guarantee</span>
              <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-dark-bg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <ArrowUpRight size={14} />
              </div>
            </button>
          </div>

          {/* Card 2: Main Yellow Highlight Box (925+) */}
          <div className="bg-primary text-slate-950 rounded-3xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute -right-8 -bottom-8 opacity-15 text-slate-950 pointer-events-none">
              <Award size={180} />
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/10 text-xs font-extrabold uppercase tracking-wider">
                <Sparkles size={13} />
                <span>Proven Record</span>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-6xl sm:text-7xl font-heading font-extrabold tracking-tight">925</span>
                <span className="text-4xl font-extrabold">+</span>
              </div>

              <p className="text-base font-bold text-slate-900 leading-snug">
                Projects completed with 100% success rate across residential and commercial sectors.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-950/15 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider">Certified Excellence</span>
              <Award size={20} />
            </div>
          </div>

          {/* Card 3: Eco Equipment Feature */}
          <div className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-3xl p-7 shadow-xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-dark-bg text-primary flex items-center justify-center">
                <Sparkles size={24} />
              </div>

              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                Eco-Friendly Equipment & Products
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                We utilize non-toxic, pet-safe, and biodegradable cleaning agents paired with HEPA-filter vacuums for optimal indoor air quality.
              </p>
            </div>

            <button 
              onClick={onOpenQuote}
              className="inline-flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors pt-6 mt-4 border-t border-slate-100 dark:border-slate-800"
            >
              <span>Learn About Our Process</span>
              <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-dark-bg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <ArrowUpRight size={14} />
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
