import React from 'react';
import { Share2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function TeamShowcase() {
  const team = [
    {
      id: 1,
      name: "Henry Donald",
      role: "Senior Cleaner",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Brielle Milla",
      role: "Cleaning Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Jayden Lawrence",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50 dark:bg-dark-bg/60" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="badge-tag">Our Team</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
              We have an expert team to serve you.
            </h2>
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-reveal-stagger>
          {team.map((member) => (
            <div 
              key={member.id}
              className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              </div>

              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>

                <div className="relative group/share">
                  <button 
                    className="w-9 h-9 rounded-full bg-slate-100 dark:bg-dark-bg text-slate-700 dark:text-slate-200 hover:bg-primary hover:text-slate-950 flex items-center justify-center transition-all"
                    aria-label="Share profile"
                  >
                    <Share2 size={16} />
                  </button>

                  <div className="absolute right-0 bottom-12 hidden group-hover/share:flex bg-slate-900 text-white p-2 rounded-xl space-x-2 shadow-xl border border-white/10 z-20">
                    <a href="#" className="p-1.5 hover:text-primary"><Facebook size={14} /></a>
                    <a href="#" className="p-1.5 hover:text-primary"><Twitter size={14} /></a>
                    <a href="#" className="p-1.5 hover:text-primary"><Linkedin size={14} /></a>
                    <a href="#" className="p-1.5 hover:text-primary"><Instagram size={14} /></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
