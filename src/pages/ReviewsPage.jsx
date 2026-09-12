import React from 'react';
import { Star, Quote, MapPin, ArrowRight } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import CTABand from '../components/shared/CTABand';
import { REVIEWS, BRAND } from '../data/siteData';

const Stars = ({ size = 16 }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={size} className="text-primary fill-primary" />
    ))}
  </div>
);

export default function ReviewsPage({ onNavigate, onOpenQuote }) {
  return (
    <div>
      <PageHero
        badge="Our Reviews"
        title="What Your Neighbors Say"
        subtitle={`Rated ${BRAND.rating} out of 5 by ${BRAND.reviewCount}+ customers across North Hollywood and the San Fernando Valley.`}
        onNavigate={onNavigate}
        crumbs={[{ label: 'Our Reviews' }]}
      />

      {/* Rating summary */}
      <section className="py-14 bg-white dark:bg-dark-surface border-b border-slate-100 dark:border-slate-800" data-reveal>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14">
            <div className="text-center">
              <p className="font-heading font-extrabold text-6xl text-slate-900 dark:text-white">{BRAND.rating}</p>
              <Stars size={20} />
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide">
                Average Rating
              </p>
            </div>
            <div className="hidden sm:block w-px h-24 bg-slate-200 dark:bg-slate-800"></div>
            <div className="grid grid-cols-1 min-[360px]:grid-cols-3 gap-4 min-[360px]:gap-6 text-center" data-reveal-stagger>
              <div>
                <p className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">{BRAND.reviewCount}+</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Verified Reviews</p>
              </div>
              <div>
                <p className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">98%</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Would Recommend</p>
              </div>
              <div>
                <p className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">10</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Cities Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review cards */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-dark-bg" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                className="bg-white dark:bg-dark-card rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col"
              >
                <Quote size={28} className="text-primary/40 mb-3" />
                <Stars />
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed my-4 flex-grow">
                  “{review.text}”
                </p>
                <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-auto">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-bold text-sm text-slate-900 dark:text-white">{review.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                        <MapPin size={11} className="text-primary" />
                        {review.city} · {review.date}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-primary-light dark:bg-primary/10 text-[11px] font-bold text-primary-hover dark:text-primary whitespace-nowrap">
                      {review.service}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-14 bg-white dark:bg-dark-surface border-y border-slate-100 dark:border-slate-800" data-reveal>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white mb-3">
            Experience the service behind the stars
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
            Join hundreds of happy customers across the Valley — or see the results for yourself in our portfolio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onOpenQuote} className="btn-primary-tw w-full sm:w-auto">
              <span>Get My Free Quote</span>
              <ArrowRight size={16} />
            </button>
            <button onClick={() => onNavigate('portfolio')} className="btn-outline-tw w-full sm:w-auto">
              <span>View Portfolio</span>
            </button>
          </div>
        </div>
      </section>

      <CTABand onOpenQuote={onOpenQuote} />
    </div>
  );
}
