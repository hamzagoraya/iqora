import React from 'react';
import { ArrowUpRight, Award, Sparkles, ShieldCheck } from 'lucide-react';

export default function FeatureHighlights({ onOpenQuote }) {
  const cards = [
    {
      type: 'image',
      title: 'Upfront, Posted Prices',
      text: 'Carpet cleaning is $40 per room, upholstery starts at $29 per seat, and every price is confirmed before any work begins.',
      footer: 'No surprise charges at the door',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800&auto=format&fit=crop',
      badge: 'Trusted pricing',
    },
    {
      type: 'highlight',
      label: 'Always available',
      number: '24/7',
      text: 'Open around the clock for quotes, bookings, and spills that can\'t wait until morning.',
    },
    {
      type: 'standard',
      title: 'Eco-Friendly Products',
      text: 'We choose low-residue, eco-friendly cleaning products with kids and pets in mind, then rinse them out thoroughly during extraction.',
      footer: 'Fresh rooms, no heavy chemical smell',
    },
  ];

  return (
    <section className="relative z-20 -mt-10 lg:-mt-16 pb-16" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-reveal-stagger>
          {cards.map((card, index) => (
            <div
              key={card.title || card.number}
              className={
                card.type === 'highlight'
                  ? 'bg-primary text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all duration-300'
                  : 'bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300'
              }
            >
              {card.type === 'image' && (
                <>
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-5">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 text-xs font-bold text-white flex items-center gap-1.5 bg-navy/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                      <ShieldCheck size={14} className="text-primary" />
                      <span>{card.badge}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">{card.text}</p>
                  </div>

                  <button onClick={onOpenQuote} className="inline-flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors pt-2 border-t border-slate-100 dark:border-slate-800">
                    <span>{card.footer}</span>
                    <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-dark-bg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                      <ArrowUpRight size={14} />
                    </div>
                  </button>
                </>
              )}

              {card.type === 'highlight' && (
                <>
                  <div className="absolute -right-8 -bottom-8 opacity-15 text-white pointer-events-none">
                    <Award size={180} />
                  </div>

                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/10 text-xs font-extrabold uppercase tracking-wider">
                      <Sparkles size={13} />
                      <span>{card.label}</span>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-6xl sm:text-7xl font-heading font-extrabold tracking-tight">{card.number}</span>
                    </div>

                    <p className="text-base font-bold text-slate-900 leading-snug">{card.text}</p>
                  </div>

                  <div className="pt-6 border-t border-slate-950/15 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider">Always available</span>
                    <Award size={20} />
                  </div>
                </>
              )}

              {card.type === 'standard' && (
                <>
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-dark-bg text-primary flex items-center justify-center mb-5">
                      <Sparkles size={24} />
                    </div>

                    <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-4">{card.text}</p>
                  </div>

                  <button onClick={onOpenQuote} className="inline-flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors pt-6 mt-4 border-t border-slate-100 dark:border-slate-800">
                    <span>{card.footer}</span>
                    <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-dark-bg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                      <ArrowUpRight size={14} />
                    </div>
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
