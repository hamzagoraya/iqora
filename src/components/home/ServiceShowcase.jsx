import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getServicePath } from '../../data/siteData';

const services = [
  {
    id: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    badge: 'Most popular',
    description: 'Deep hot water extraction that lifts embedded dirt, allergens, and pet odors from every room.',
    price: '$40 per room · $120 minimum',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
    link: 'https://iqoracleaningservices.com/carpet-cleaning-services-in-north-hollywood/',
  },
  {
    id: 'upholstery-cleaning',
    name: 'Upholstery Cleaning',
    badge: 'Fabric-safe deep clean',
    description: 'Gentle, fabric-matched cleaning for sofas, sectionals, recliners, ottomans, and dining chairs.',
    price: 'From $29 per seat',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
    link: 'https://iqoracleaningservices.com/upholstery-cleaning-services-in-north-hollywood/',
  },
  {
    id: 'tile-and-grout-cleaning',
    name: 'Tile & Grout Cleaning',
    badge: 'Restore, don\'t replace',
    description: 'Deep cleaning that lifts the grime settled in grout lines and brings back your floor\'s original color.',
    price: '[CONFIRM price and unit]',
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1200&auto=format&fit=crop',
    link: 'https://iqoracleaningservices.com/tile-and-grout-cleaning-services-in-north-hollywood/',
  },
];

export default function ServiceShowcase({ onOpenQuote, onNavigate }) {
  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50 dark:bg-dark-bg" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="badge-tag">Our services</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
              Carpet, Upholstery, and Tile & Grout Cleaning for Southern California Homes
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              These are the three services homeowners ask us about most, and each one is matched to the material we\'re cleaning. Many older Pasadena homes, for example, still have their original kitchen and bathroom tile, and tile and grout cleaning in Pasadena can bring decades-old grout much closer to its original color.
            </p>
          </div>

          <button type="button" onClick={() => onNavigate('/cleaning-services')} className="btn-secondary-tw self-start md:self-auto shrink-0">
            <span>View All Cleaning Services</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal-stagger>
          {services.map((service) => (
            <div key={service.id} className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
              <div className="relative h-56 sm:h-60 overflow-hidden">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <span className="absolute top-4 left-4 bg-primary text-slate-950 text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  {service.badge}
                </span>
              </div>

              <div className="p-7 space-y-4 flex flex-col flex-1">
                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">{service.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">{service.description}</p>
                <p className="text-sm font-extrabold text-primary">{service.price}</p>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                  <a href={service.link} className="inline-flex items-center gap-2 text-xs font-extrabold text-slate-900 dark:text-white hover:text-primary transition-colors">
                    <span>{service.name} Details</span>
                    <ArrowRight size={14} />
                  </a>
                  <button type="button" onClick={onOpenQuote} className="inline-flex items-center gap-2 text-xs font-extrabold text-primary transition-all">
                    <span>Get a Quote</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
