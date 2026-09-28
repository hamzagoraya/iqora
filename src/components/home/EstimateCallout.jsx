import React, { useState } from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { SERVICES, SPECIALTY_SERVICES } from '../../data/siteData';

const SERVICE_OPTIONS = [...SERVICES, ...SPECIALTY_SERVICES];

export default function EstimateCallout() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES[0].id,
    details: '',
    city: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert('Thank you! Your free estimate request has been received.');
  };

  return (
    <section id="estimate" className="py-16 lg:py-24" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-secondary rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-12 lg:p-16 text-white border border-slate-800">
          <div className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop')` }}></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="badge-tag">
                <Sparkles size={14} />
                <span>Free estimate</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight">
                Get Your Free Cleaning Estimate
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Tell us what needs cleaning and we\'ll send a clear price breakdown with no obligation. Because we\'re open 24 hours, IQORA\'s phone, WhatsApp, and email details work just as well at midnight as at noon.
              </p>

              <div className="space-y-2 pt-2 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>Prices confirmed before we start</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>No hidden fees or contracts</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-300">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-primary transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-300">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Rooms or Items</label>
                  <input
                    type="text"
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="3 rooms + 1 sofa"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-primary transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Los Angeles"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-primary transition-all"
                  />
                </div>

                <button type="submit" className="btn-primary-tw w-full justify-center text-sm py-4 mt-2">
                  <span>Request My Free Quote</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
