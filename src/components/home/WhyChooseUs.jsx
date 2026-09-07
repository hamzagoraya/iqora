import React from 'react';
import { Droplets, Leaf, BadgeDollarSign, MapPin, ArrowRight } from 'lucide-react';

export default function WhyChooseUs({ onOpenQuote }) {
  const fields = [
    {
      id: 1,
      icon: <Droplets className="text-primary" size={28} />,
      title: "Truck-Mounted Steam",
      desc: "Commercial-grade hot-water extraction lifts deep soil, allergens, and odors that rental machines leave behind. Most carpets dry in 4–6 hours."
    },
    {
      id: 2,
      icon: <Leaf className="text-primary" size={28} />,
      title: "Eco-Friendly Products",
      desc: "Plant-based, pet- and child-safe cleaners that rinse clean — no harsh chemical residue, no lingering fumes, no compromises."
    },
    {
      id: 3,
      icon: <BadgeDollarSign className="text-primary" size={28} />,
      title: "Upfront Flat Pricing",
      desc: "We inspect first, quote a firm price before any work starts, and honor it. No per-room upsells, no surprise add-ons, ever."
    },
    {
      id: 4,
      icon: <MapPin className="text-primary" size={28} />,
      title: "Local Valley Crews",
      desc: "Based in North Hollywood with technicians who live in the neighborhoods we serve — punctual arrivals, same-week availability."
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="badge-tag">Why Choose Us</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
            Why the Valley trusts IQORA with their homes
          </h2>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fields.map((field) => (
            <div 
              key={field.id}
              className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary-light dark:bg-primary/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {field.icon}
                </div>

                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3">
                  {field.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {field.desc}
                </p>
              </div>

              <button 
                onClick={onOpenQuote}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:gap-2.5 transition-all duration-300 pt-4 border-t border-slate-100 dark:border-slate-800/80"
              >
                <span>Get a Free Quote</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
