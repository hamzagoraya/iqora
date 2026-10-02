import React, { useState } from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const regionTabs = [
  {
    id: 'los-angeles',
    label: 'Los Angeles County',
    cities: 'Los Angeles, Burbank, Glendale, Pasadena, West Hollywood, Beverly Hills, Santa Monica, Culver City, Torrance, Long Beach, Santa Clarita, Pomona',
  },
  {
    id: 'orange-county',
    label: 'Orange County',
    cities: 'Anaheim, Santa Ana, Irvine, Huntington Beach',
  },
  {
    id: 'inland-empire',
    label: 'Inland Empire',
    cities: 'Riverside, San Bernardino, Ontario',
  },
  {
    id: 'ventura-county',
    label: 'Ventura County',
    cities: 'Thousand Oaks',
  },
];

export default function LocationMap() {
  const [activeTab, setActiveTab] = useState(regionTabs[0]);

  return (
    <section id="location" className="py-16 lg:py-24 bg-slate-100 dark:bg-dark-surface/50" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="badge-tag mx-auto">Our service area</div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
            Where We Work Across Southern California
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            IQORA is based in Los Angeles and cleans homes in 20 cities across four counties. Select a region to see the cities we cover, or browse the full list of Southern California cities IQORA serves.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {regionTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab.id === tab.id
                  ? 'bg-primary text-white shadow-primary'
                  : 'bg-white dark:bg-dark-surface text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-primary'
              }`}
            >
              <MapPin size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-surface">
          <div className="lg:absolute lg:top-6 lg:left-6 z-10 p-6 bg-white dark:bg-dark-surface lg:max-w-sm w-full shadow-lg rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-primary">IQORA Cleaning Services</div>
            <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">Based in North Hollywood, Los Angeles, CA 91605</h3>

            <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:+13239168039" className="hover:text-primary">+1 (323) 916-8039</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-primary shrink-0" />
                <a href="mailto:iqoracleaningservices@gmail.com" className="hover:text-primary">iqoracleaningservices@gmail.com</a>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=IQORA+Cleaning+Services+North+Hollywood+CA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-tw w-full justify-center mt-2 text-xs py-3"
            >
              <span>View Us on Google</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="w-full h-[420px] lg:h-[500px] bg-slate-200 dark:bg-slate-800 flex items-center justify-center p-6">
            <div className="w-full h-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-bg p-6 flex flex-col justify-center">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">{activeTab.label}</div>
              <div className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">{activeTab.cities}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
