import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { BASE_URL } from '../../config';

export default function PricingPlans({ onOpenQuote, onNavigate }) {
  const cards = [
    {
      title: 'Carpet Cleaning Prices',
      price: '$40 per room',
      description: '$120 minimum visit · Hallways 30–40 · Stairs $5 per step · Hot water extraction',
      featured: true,
    },
    {
      title: 'Upholstery Cleaning Prices',
      price: '$29 per seat',
      description: 'Loveseats $149 · U-shaped sectionals $200 · Recliners $80 with other services · Dining chairs $25',
      featured: false,
    },
    {
      title: 'Tile & Grout Cleaning Prices',
      price: '$20 per room',
      description: 'Deep grout-line cleaning · Restores original color · Kitchens, bathrooms, and entryways',
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="badge-tag mx-auto">Transparent pricing</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
            Honest Cleaning Prices, Confirmed Before We Start
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            The three cards below cover our core services. Stairs, hallways, recliners, rugs, mattresses, and every other item have their own rates on the <a href={`${BASE_URL}/cleaning-services-pricing`} onClick={(e) => { e.preventDefault(); onNavigate('/cleaning-services-pricing'); }} className="text-primary underline underline-offset-4">complete IQORA cleaning price list</a>, and bundling services lowers the cost of added items.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch" data-reveal-stagger>
          {cards.map((card, idx) => {
            const featured = card.featured;
            return (
              <div
                key={card.title}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  featured
                    ? 'bg-secondary text-white shadow-2xl border-2 border-primary md:-translate-y-2'
                    : 'bg-white dark:bg-dark-surface text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-xl'
                }`}
              >
                {featured && (
                  <span className="absolute -top-4 right-8 bg-primary text-slate-950 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <Sparkles size={13} />
                    Most Popular
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">{card.title}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-heading font-extrabold tracking-tight">{card.price}</span>
                    </div>
                  </div>

                  <p className={`text-xs sm:text-sm ${featured ? 'text-slate-200' : 'text-slate-600 dark:text-slate-300'}`}>{card.description}</p>
                </div>

                <div className="pt-8">
                  <button type="button" onClick={onOpenQuote} className={`w-full justify-center ${featured ? 'btn-primary-tw' : 'btn-secondary-tw'}`}>
                    <span>Get a Free Quote</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
