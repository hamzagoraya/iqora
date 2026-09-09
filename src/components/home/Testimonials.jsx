import React from 'react';
import { Quote, Star, ArrowRight } from 'lucide-react';
import { REVIEWS } from '../../data/siteData';

export default function Testimonials({ onNavigate }) {
  const reviews = REVIEWS.slice(0, 2).map((rev, i) => ({
    id: i,
    quote: rev.text,
    name: rev.name,
    role: `${rev.service} • ${rev.city}`,
    initials: rev.name.split(' ').map((w) => w[0]).join('').replace(/[^A-Z]/g, '').slice(0, 2),
    stars: rev.rating
  }));

  return (
    <section className="py-16 lg:py-24 bg-slate-50 dark:bg-dark-bg" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="badge-tag">Testimonials</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
              Trusted by families & businesses across the Valley
            </h2>
          </div>

          <button 
            onClick={() => onNavigate && onNavigate('/our-reviews')} 
            className="btn-secondary-tw self-start md:self-auto shrink-0"
          >
            <span>Read All Reviews</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* 2 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-reveal-stagger>
          {reviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Quote size={40} className="text-primary opacity-80" />
                  <div className="flex gap-1 text-primary">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-full bg-primary-light dark:bg-primary/15 border-2 border-primary flex items-center justify-center text-primary font-extrabold text-sm">
                  {rev.initials}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {rev.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
