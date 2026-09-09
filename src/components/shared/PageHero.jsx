import React from 'react';
import { ChevronRight, Home, Sparkles } from 'lucide-react';

export default function PageHero({ badge, title, subtitle, image, onNavigate, crumbs = [] }) {
  const bg = image || 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1920&auto=format&fit=crop';

  return (
    <section
      className="relative bg-[#101720] bg-center bg-cover bg-no-repeat py-20 lg:py-24 text-center text-white overflow-hidden"
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/85 to-slate-950/95 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hero-content-stagger">
        <div className="flex flex-col items-center">
          <div className="badge-tag mb-4 bg-primary/20 text-primary border-primary/30">
            <Sparkles size={14} />
            <span>{badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight mb-4 max-w-4xl">
            {title}
          </h1>

          {subtitle && (
            <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center space-x-2 text-sm text-slate-300">
            <button
              onClick={() => onNavigate && onNavigate('/')}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Home size={15} />
              <span>Home</span>
            </button>
            {crumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                <ChevronRight size={14} className="text-slate-500" />
                {crumb.onClick ? (
                  <button onClick={crumb.onClick} className="hover:text-primary transition-colors">
                    {crumb.label}
                  </button>
                ) : (
                  <span className="text-primary font-semibold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
