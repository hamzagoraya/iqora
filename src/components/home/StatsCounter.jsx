import React from 'react';

export default function StatsCounter() {
  const stats = [
    { id: 1, value: "990+", label: "Jobs Completed", desc: "Across homes & businesses in the Valley" },
    { id: 2, value: "14m", label: "Sq. Ft. Cleaned", desc: "Carpet, upholstery & tile restored" },
    { id: 3, value: "97%", label: "Customer Satisfaction", desc: "From 460+ Google & Yelp reviews" },
    { id: 4, value: "24k", label: "Hours Spent Cleaning", desc: "By our certified local crew" }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
          {stats.map((stat, idx) => (
            <div key={stat.id} className={`space-y-2 ${idx !== 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''}`}>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-primary tracking-tight">
                {stat.value}
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
