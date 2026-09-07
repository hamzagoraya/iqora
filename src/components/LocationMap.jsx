import React, { useState } from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { BRAND } from '../data/siteData';

export default function LocationMap() {
  const locations = [
    {
      id: 'north-hollywood',
      city: 'North Hollywood (HQ)',
      address: 'North Hollywood, CA 91601, United States',
      phone: BRAND.phone,
      email: 'northhollywood@iqoracleaningservices.com',
      mapEmbed: 'https://maps.google.com/maps?q=North%20Hollywood%2C%20CA%2091601&t=&z=13&ie=UTF8&iwloc=&output=embed'
    },
    {
      id: 'burbank',
      city: 'Burbank',
      address: 'Burbank, CA 91502, United States',
      phone: BRAND.phone,
      email: 'burbank@iqoracleaningservices.com',
      mapEmbed: 'https://maps.google.com/maps?q=Burbank%2C%20CA&t=&z=13&ie=UTF8&iwloc=&output=embed'
    },
    {
      id: 'pasadena',
      city: 'Pasadena',
      address: 'Pasadena, CA 91101, United States',
      phone: BRAND.phone,
      email: 'pasadena@iqoracleaningservices.com',
      mapEmbed: 'https://maps.google.com/maps?q=Pasadena%2C%20CA&t=&z=13&ie=UTF8&iwloc=&output=embed'
    }
  ];

  const [activeLoc, setActiveLoc] = useState(locations[0]);

  return (
    <section id="location" className="py-16 lg:py-24 bg-slate-100 dark:bg-dark-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="badge-tag mx-auto">Our Service Area</div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
            Where We Work in the Valley
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Mobile crews dispatched daily across North Hollywood and neighboring cities. Select an area to view the map.
          </p>
        </div>

        {/* Location Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveLoc(loc)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeLoc.id === loc.id 
                  ? 'bg-primary text-white shadow-primary' 
                  : 'bg-white dark:bg-dark-surface text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-primary'
              }`}
            >
              <MapPin size={16} />
              <span>{loc.city}</span>
            </button>
          ))}
        </div>

        {/* Map Container & Overlay Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-surface">
          <div className="lg:absolute lg:top-6 lg:left-6 z-10 p-6 bg-white dark:bg-dark-surface lg:max-w-xs w-full shadow-lg rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              {activeLoc.city}
            </h3>
            
            <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <span>{activeLoc.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-primary shrink-0" />
                <span>{activeLoc.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-primary shrink-0" />
                <span>{activeLoc.email}</span>
              </div>
            </div>

            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeLoc.address)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary-tw w-full justify-center mt-2 text-xs py-3"
            >
              <span>Get Directions</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="w-full h-[400px] lg:h-[480px]">
            <iframe
              title={`Map for ${activeLoc.city}`}
              src={activeLoc.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
