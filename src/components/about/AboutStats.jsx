import React from 'react';

export default function AboutStats() {
  const stats = [
    { id: 1, value: "2,500+", label: "Happy Homes & Businesses in the Valley" },
    { id: 2, value: "14m", label: "Sq. Ft. of Carpet, Upholstery & Tile Restored" },
    { id: 3, value: "460+", label: "5-Star Reviews on Google & Yelp" },
    { id: 4, value: "30k", label: "Hours Dedicated to Pristine Care" }
  ];

  return (
    <section className="py-16 bg-white dark:bg-dark-surface border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="space-y-2 text-center sm:text-left">
              <div className="text-4xl sm:text-5xl font-heading font-extrabold text-primary tracking-tight">
                {stat.value}
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
