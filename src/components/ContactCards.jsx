import React from 'react';
import { Mail, MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { BRAND } from '../data/siteData';

export default function ContactCards() {
  const cards = [
    {
      id: 1,
      icon: <Mail className="text-primary" size={26} />,
      title: "Email Us",
      details: [BRAND.email, BRAND.supportEmail],
      linkText: "Send Email",
      href: `mailto:${BRAND.email}`
    },
    {
      id: 2,
      icon: <MapPin className="text-primary" size={26} />,
      title: "Our Location",
      details: [BRAND.address, "Serving the San Fernando Valley"],
      linkText: "Get Directions",
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.address)}`
    },
    {
      id: 3,
      icon: <Phone className="text-primary" size={26} />,
      title: "Call Us",
      details: [BRAND.phone, "Mon – Sat, same-day slots often available"],
      linkText: "Call Now",
      href: BRAND.phoneHref
    },
    {
      id: 4,
      icon: <Clock className="text-primary" size={26} />,
      title: "Working Days",
      details: [`Mon - Fri: ${BRAND.hours.weekdays}`, `Sat: ${BRAND.hours.saturday} • Sun: Closed`],
      linkText: "View Schedule",
      href: "#schedule"
    }
  ];

  return (
    <section className="pt-16 pb-10" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="bg-white dark:bg-dark-surface border border-slate-200/80 dark:border-slate-800 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-primary-light dark:bg-primary/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-3">
                  {card.title}
                </h3>
                <div className="space-y-1 mb-6 text-sm text-slate-600 dark:text-slate-400">
                  {card.details.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>

              <a 
                href={card.href} 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:gap-2.5 transition-all duration-300"
              >
                <span>{card.linkText}</span>
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
