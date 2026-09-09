import React from 'react';
import { Phone, ArrowUpRight, Award, ShieldCheck } from 'lucide-react';
import { BRAND } from '../../data/siteData';

export default function CompanyStory({ onOpenQuote }) {
  const cards = [
    {
      id: 1,
      title: "Certified Technicians",
      desc: "Background-checked, insured & IICRC-trained specialists.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Natural Products",
      desc: "Non-toxic, pet-friendly & eco-certified cleaning solutions.",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Fast-Drying Process",
      desc: "Truck-mounted extraction — most carpets dry in 4–6 hours.",
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16 lg:py-24" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Story Block */}
        <div className="max-w-3xl space-y-6">
          <div className="badge-tag">About Our Company</div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
            A Valley family business built on referrals.
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            IQORA started in North Hollywood with one truck, one technician, and a simple promise: treat every carpet, couch, and tile floor like it's our own. Today our crews serve homes and businesses across the San Fernando Valley, and most of our work still comes from neighbors telling neighbors.
          </p>

          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            We specialize in three crafts — carpet, upholstery, and tile & grout cleaning — rather than trying to do everything. That focus means certified technicians, commercial-grade truck-mounted equipment, and eco-friendly products on every single job.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary text-slate-950 flex items-center justify-center font-bold">
                <Phone size={22} />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Talk to Our Team</span>
                <a href={BRAND.phoneHref} className="text-lg font-extrabold text-slate-900 dark:text-white hover:text-primary transition-colors">
                  {BRAND.phone}
                </a>
              </div>
            </div>

            <button onClick={onOpenQuote} className="btn-outline-tw">
              <span>Get a Free Quote</span>
              <ShieldCheck size={16} />
            </button>
          </div>
        </div>

        {/* 3 Feature Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4" data-reveal-stagger>
          {cards.map((card) => (
            <div 
              key={card.id}
              className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative h-44 rounded-2xl overflow-hidden mb-4">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
              </div>

              <div>
                <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                  {card.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {card.title}
                </span>
                <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-dark-bg flex items-center justify-center group-hover:bg-primary group-hover:text-slate-950 transition-all">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
