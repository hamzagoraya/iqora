import React from 'react';
import { Mail, MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

const googleBusinessLink = 'https://www.google.com/maps/search/?api=1&query=IQORA+Cleaning+Services+North+Hollywood+CA';

export default function ContactCards() {
  const cards = [
    {
      id: 1,
      icon: <Phone className="text-primary" size={26} />,
      title: 'Call or WhatsApp',
      details: ['+1 (323) 916-8039', 'The fastest way to get a quote or ask a question. You can call or send photos on WhatsApp.'],
      linkText: 'Call Now',
      href: 'tel:+13239168039',
    },
    {
      id: 2,
      icon: <Mail className="text-primary" size={26} />,
      title: 'Email Us',
      details: ['iqoracleaningservices@gmail.com', 'Best for detailed requests, larger jobs, or sending several photos at once.'],
      linkText: 'Send an Email',
      href: 'mailto:iqoracleaningservices@gmail.com',
    },
    {
      id: 3,
      icon: <MapPin className="text-primary" size={26} />,
      title: 'Where We\'re Based',
      details: ['North Hollywood, Los Angeles, CA 91605', 'Serving 20 cities across Los Angeles County, Orange County, the Inland Empire, and Thousand Oaks. We come to you, so there\'s no office to visit.'],
      linkText: 'View Us on Google',
      href: googleBusinessLink,
    },
    {
      id: 4,
      icon: <Clock className="text-primary" size={26} />,
      title: 'Working Hours',
      details: ['Open 24/7 • Same day appointments available', 'Quote requests sent outside working hours are answered as soon as we\'re back. We speak English, Spanish, Hindi, and Punjabi.'],
      linkText: 'Book a Time',
      href: '#quote',
    },
  ];

  return (
    <section className="pt-16 pb-10" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
            Ways to Reach IQORA
          </h2>
        </div>
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
