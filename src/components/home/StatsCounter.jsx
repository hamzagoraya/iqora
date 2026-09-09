import React from 'react';
import { BRAND, STATS } from '../../data/siteData';
import AnimatedStatValue from '../shared/AnimatedStatValue';

export default function StatsCounter() {
  const stats = [
    { id: 1, value: STATS.projectsCompleted, label: 'Projects Completed', desc: 'Across homes & businesses in the Valley' },
    { id: 2, value: STATS.squareFeetCleaned, label: 'Sq. Ft. Cleaned', desc: 'Carpet, upholstery & tile restored' },
    { id: 3, value: STATS.customerSatisfaction, label: 'Customer Satisfaction', desc: `From ${BRAND.reviewCount}+ Google & Yelp reviews` },
    { id: 4, value: STATS.hoursSpentCleaning, label: 'Hours Spent Cleaning', desc: 'By our certified local crew' }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white border-y border-slate-800" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-800" data-reveal-stagger>
          {stats.map((stat, idx) => (
            <div key={stat.id} className={`space-y-2 ${idx !== 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''}`}>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-primary tracking-tight">
                <AnimatedStatValue value={stat.value} />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white leading-snug">
                {stat.label}
              </h4>
              <p className="text-xs text-slate-400">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
