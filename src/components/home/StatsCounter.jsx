import React from 'react';

export default function StatsCounter() {
  const stats = [
    { value: '24/7', label: 'Open around the clock' },
    { value: '20', label: 'Cities served' },
    { value: '$40', label: 'Per room carpet cleaning' },
    { value: '6–12 hrs', label: 'Typical carpet drying time' },
  ];

  return (
    <section className="py-16 bg-white dark:bg-navy text-slate-900 dark:text-white border-y border-slate-100 dark:border-white/10" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-white/10" data-reveal-stagger>
          {stats.map((stat, idx) => (
            <div key={idx} className={`space-y-2 ${idx !== 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''}`}>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-primary tracking-tight">
                {stat.value}
              </div>
              <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
