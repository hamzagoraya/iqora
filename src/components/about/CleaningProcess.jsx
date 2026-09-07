import React from 'react';
import { FileText, CalendarCheck, Clock, Sparkles, ArrowRight } from 'lucide-react';

export default function CleaningProcess({ onOpenQuote }) {
  const steps = [
    {
      step: '01',
      icon: <FileText className="text-primary" size={26} />,
      title: "Tell us about the job",
      desc: "Fill out our quick quote form or call with the basics — rooms, furniture pieces, or floor area, and how soiled things are."
    },
    {
      id: 2,
      step: '02',
      icon: <Sparkles className="text-primary" size={26} />,
      title: "Get a firm quote",
      desc: "We inspect on-site, confirm the exact price before any work begins, and honor it — no upsells, no surprises."
    },
    {
      id: 3,
      step: '03',
      icon: <CalendarCheck className="text-primary" size={26} />,
      title: "We clean on your schedule",
      desc: "Pick a date and arrival window that works for you — same-week appointments are usually available across the Valley."
    },
    {
      id: 4,
      step: '04',
      icon: <Clock className="text-primary" size={26} />,
      title: "Dry in hours, not days",
      desc: "Air movers speed up drying so carpets are ready in 4–6 hours and upholstery in 2–6 — you're back to normal by dinner."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="badge-tag bg-primary/20 text-primary border-primary/30">
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight">
            Get amazing cleaning in 4 simple steps
          </h2>
        </div>

        {/* 4 Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((item) => (
            <div 
              key={item.step}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between group hover:bg-white/10 hover:border-primary/50 transition-all duration-300 relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-13 h-13 rounded-2xl bg-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="w-9 h-9 rounded-full bg-primary text-slate-950 font-heading font-extrabold text-xs flex items-center justify-center">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Step {item.step} of 04</span>
                <ArrowRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="pt-10 text-center">
          <button onClick={onOpenQuote} className="btn-primary-tw">
            <span>Book Your 4-Step Cleaning</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
