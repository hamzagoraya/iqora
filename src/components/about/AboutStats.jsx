import React from 'react';
import { STATS } from '../../data/siteData';
import AnimatedStatValue from '../shared/AnimatedStatValue';

export default function AboutStats() {
  const stats = [
    { id: 1, value: STATS.projectsCompleted, label: 'Projects Completed' },
    { id: 2, value: STATS.squareFeetCleaned, label: 'Sq. Ft. Cleaned' },
    { id: 3, value: STATS.customerSatisfaction, label: 'Customer Satisfaction' },
    { id: 4, value: STATS.hoursSpentCleaning, label: 'Hours Spent Cleaning' }
  ];

  return (
    <section className="py-16 bg-white dark:bg-dark-surface border-y border-slate-200 dark:border-slate-800" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8" data-reveal-stagger>
          {stats.map((stat) => (
            <div key={stat.id} className="space-y-2 text-center sm:text-left">
              <div className="text-4xl sm:text-5xl font-heading font-extrabold text-primary tracking-tight">
                <AnimatedStatValue value={stat.value} />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                {stat.label}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
