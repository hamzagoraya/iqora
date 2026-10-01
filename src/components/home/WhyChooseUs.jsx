import React from 'react';
import { Droplets, Leaf, BadgeDollarSign, MapPin, ArrowRight } from 'lucide-react';

export default function WhyChooseUs({ onOpenQuote }) {
  const fields = [
    {
      id: 1,
      icon: <Droplets className="text-primary" size={28} />,
      title: 'Deep Extraction That Reaches Any Home',
      desc: 'Our professional hot water extraction equipment is portable, so it comes right up to your door instead of relying on hoses run from a truck on the street. That\'s a real advantage for carpet cleaning in Santa Monica condos and upholstery cleaning in West Hollywood apartments, where upper floors and tight street parking make truck setups hard to use.',
      link: '#estimate',
    },
    {
      id: 2,
      icon: <Leaf className="text-primary" size={28} />,
      title: 'Pet Stain and Odor Treatment',
      desc: 'Pet accidents, spilled drinks, and everyday traffic marks get targeted treatment before the main cleaning. Fresh stains usually come out completely, while older ones often fade far more than people expect, as our before-and-after carpet and upholstery results show.',
      link: '#estimate',
    },
    {
      id: 3,
      icon: <BadgeDollarSign className="text-primary" size={28} />,
      title: 'Bundle Pricing That Saves You More',
      desc: 'Book three or more rooms and every room is $40. Add a rug for just $60 or a recliner for $80 when you pair them with carpet or couch cleaning.',
      link: '#estimate',
    },
    {
      id: 4,
      icon: <MapPin className="text-primary" size={28} />,
      title: 'Based in North Hollywood',
      desc: 'Our home base keeps nearby cities close, so booking carpet cleaning in Burbank or tile and grout cleaning in Glendale rarely means a long wait. Visits to cities farther out are scheduled ahead, so you know when to expect us.',
      link: '#estimate',
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 lg:py-24" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="badge-tag">Why choose us</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
            Why Los Angeles Homeowners Choose IQORA
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Families from the San Fernando Valley to Orange County want the same things from a cleaning company: work that actually lifts the dirt, a price they can trust, and someone who shows up when they said they would. That's what we've built IQORA around.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal-stagger>
          {fields.map((field) => (
            <div key={field.id} className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary-light dark:bg-primary/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {field.icon}
                </div>

                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3">{field.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{field.desc}</p>
              </div>

              <button type="button" onClick={onOpenQuote} className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:gap-2.5 transition-all duration-300 pt-4 border-t border-slate-100 dark:border-slate-800/80">
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
