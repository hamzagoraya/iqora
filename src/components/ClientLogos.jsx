import React from 'react';

export default function ClientLogos({ theme }) {
  const logos = [
    { id: 1, name: "Client 01", file: "client-global-01.png", darkFile: "client-black-01.png" },
    { id: 2, name: "Client 02", file: "client-global-02.png", darkFile: "client-black-02.png" },
    { id: 3, name: "Client 03", file: "client-global-03.png", darkFile: "client-black-03.png" },
    { id: 4, name: "Client 04", file: "client-global-04.png", darkFile: "client-black-04.png" },
    { id: 5, name: "Client 05", file: "client-global-05.png", darkFile: "client-black-05.png" },
    { id: 6, name: "Client 06", file: "client-global-06.png", darkFile: "client-black-06.png" },
  ];

  return (
    <section className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-8">
          Trusted by leading companies and over 10,000+ satisfied homeowners
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              className="opacity-70 hover:opacity-100 grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <img 
                src={`/assets/${theme === 'dark' ? logo.darkFile : logo.file}`} 
                alt={logo.name}
                className="max-h-10 w-auto object-contain"
                onError={(e) => { e.target.src = `/assets/${logo.file}`; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
