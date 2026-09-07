import React from 'react';

export default function MarqueeBanner() {
  const words = ['Carpet Cleaning', 'Upholstery', 'Tile & Grout', 'Area Rugs', 'Eco-Friendly', 'Satisfaction Guaranteed'];

  return (
    <section className="bg-primary py-4 overflow-hidden shadow-inner select-none">
      <div className="flex space-x-8 animate-marquee whitespace-nowrap">
        {[...words, ...words, ...words, ...words].map((word, idx) => (
          <div key={idx} className="inline-flex items-center space-x-8">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold uppercase tracking-tight text-slate-950">
              {word}
            </span>
            <span className="text-slate-950/60 text-lg">◆</span>
          </div>
        ))}
      </div>
    </section>
  );
}
