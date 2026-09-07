import React from 'react';
import { Phone, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { BRAND } from '../../data/siteData';

export default function CTABand({ onOpenQuote, title, text }) {
  return (
    <section className="py-16 lg:py-20 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1920&auto=format&fit=crop')] bg-center bg-cover opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight mb-4">
            {title || 'Ready for a fresher, healthier home?'}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            {text || 'Book a free on-site estimate. We confirm your exact price before any work begins — no hourly surprises, no hidden fees.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onOpenQuote} className="btn-primary-tw w-full sm:w-auto">
              <span>Get My Free Quote</span>
              <ArrowRight size={16} />
            </button>
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white font-bold text-sm rounded-xl border border-white/20 transition-all duration-300 w-full sm:w-auto"
            >
              <Phone size={16} className="text-primary" />
              <span>{BRAND.phone}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 text-xs text-slate-400 font-semibold">
            <span className="flex items-center gap-2">
              <Clock size={15} className="text-primary" />
              Same-week appointments
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-primary" />
              100% satisfaction guarantee
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-primary" />
              Licensed &amp; insured
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
