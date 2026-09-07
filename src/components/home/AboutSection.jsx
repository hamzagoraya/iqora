import React from 'react';
import { ShieldCheck, CheckCircle2, Award } from 'lucide-react';

export default function AboutSection({ onOpenQuote }) {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white dark:bg-dark-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Stack with Badges */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 group">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop" 
                alt="Cleaning Experts at work" 
                className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-right-6 bg-primary text-slate-950 p-6 rounded-3xl shadow-2xl max-w-xs space-y-1">
              <div className="flex items-center gap-2">
                <Award size={22} className="text-slate-950" />
                <span className="text-2xl font-heading font-extrabold">Family-Run</span>
              </div>
              <p className="text-xs font-bold text-slate-900 leading-snug">
                A local, family-run cleaning crew serving North Hollywood & the San Fernando Valley.
              </p>
            </div>
          </div>

          {/* Right Column: Bio Content & Progress Circles */}
          <div className="space-y-6">
            <div className="badge-tag">About Us</div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
              A family-run cleaning crew the Valley trusts.
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              IQORA was built on referrals — we carefully screen every technician and quote a firm price before we start, so your home gets honest, careful work every single visit.
            </p>

            {/* Circular Progress Indicators Grid */}
            <div className="grid grid-cols-2 gap-6 pt-2">
              <div className="flex items-center gap-4 bg-slate-50 dark:bg-dark-bg p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center font-heading font-extrabold text-xl text-slate-900 dark:text-white shrink-0">
                  97%
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Satisfaction</h4>
                  <p className="text-xs text-slate-500">Client Approval Rate</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-50 dark:bg-dark-bg p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center font-heading font-extrabold text-xl text-slate-900 dark:text-white shrink-0">
                  95%
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Retention</h4>
                  <p className="text-xs text-slate-500">Repeat Customers</p>
                </div>
              </div>
            </div>

            {/* Vetted Staffing Guarantee Card */}
            <div className="bg-slate-100 dark:bg-dark-bg/80 rounded-2xl p-5 border-l-4 border-primary space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                <ShieldCheck size={18} className="text-primary" />
                <span>Fully Vetted & Insured Staffing</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                All personnel undergo strict background validation, drug screening, and comprehensive safety procedure training before entering any client facility.
              </p>
            </div>

            <div className="pt-2">
              <button onClick={onOpenQuote} className="btn-primary-tw">
                <span>Get a Free Quote</span>
                <CheckCircle2 size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
