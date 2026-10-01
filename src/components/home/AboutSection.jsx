import React from 'react';
import { ShieldCheck, CheckCircle2, Award } from 'lucide-react';

export default function AboutSection({ onOpenQuote }) {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white dark:bg-dark-surface/40" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 group">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop"
                alt="Cleaning Experts at work"
                className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-right-6 bg-primary text-slate-950 p-6 rounded-3xl shadow-2xl max-w-xs space-y-1">
              <div className="flex items-center gap-2">
                <Award size={22} className="text-slate-950" />
                <span className="text-2xl font-heading font-extrabold">Locally Owned</span>
              </div>
              <p className="text-xs font-bold text-slate-900 leading-snug">Based in North Hollywood, serving homes across Southern California.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="badge-tag">About us</div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
              A Local Cleaning Company Built on Honest Work
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              IQORA Cleaning Services is a <a href="https://iqoracleaningservices.com/about-us/" className="text-primary underline underline-offset-4">locally owned cleaning company in North Hollywood</a>, founded in 2025 by Gurbaj Singh. Gurbaj brings 5 years of hands-on cleaning experience to every job. The business runs on a simple idea: tell customers the price before starting, do careful work in their home, and leave every room fresher than we found it.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="flex items-center gap-4 bg-slate-50 dark:bg-dark-bg p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center font-heading font-extrabold text-xl text-slate-900 dark:text-white shrink-0">
                  2025
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Founded in North Hollywood</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-50 dark:bg-dark-bg p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center font-heading font-extrabold text-xl text-slate-900 dark:text-white shrink-0">
                  8
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Cleaning services under one roof</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 dark:bg-dark-bg/80 rounded-2xl p-5 border-l-4 border-primary space-y-2">
              <p className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                <ShieldCheck size={18} className="text-primary" />
                <span>Price Confirmed Before We Start</span>
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">We look at the job first and confirm your price before any cleaning begins, so there's never a surprise on the final bill.</p>
            </div>

            <div className="pt-2">
              <button type="button" onClick={onOpenQuote} className="btn-primary-tw">
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
