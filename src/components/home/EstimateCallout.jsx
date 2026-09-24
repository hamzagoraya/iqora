import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, Calculator } from 'lucide-react';
import { SERVICES, SPECIALTY_SERVICES } from '../../data/siteData';

const SERVICE_OPTIONS = [...SERVICES, ...SPECIALTY_SERVICES];

export default function EstimateCallout({ onOpenQuote }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES[0].id,
    sqft: '1500'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 lg:py-24" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-secondary rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-12 lg:p-16 text-white border border-slate-800">
          
          {/* Background image overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop')` }}
          ></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="badge-tag ">
                <Sparkles size={14} />
                <span>Free Estimate</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight">
                Get your free <br />
                <span className="text-primary">cost estimate!</span>
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Take the first step towards a pristine home or office. Receive a customized instant price breakdown with zero obligation.
              </p>

              <div className="space-y-2 pt-2 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>Instant Transparent Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>No Hidden Fees or Long-term Contracts</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <CheckCircle2 size={48} className="text-primary mx-auto" />
                  <h3 className="text-2xl font-bold text-white">Estimate Request Received!</h3>
                  <p className="text-sm text-slate-300">Our team will call <strong>{formData.phone}</strong> shortly with your detailed quote.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline-tw text-white border-white/20 hover:border-primary mt-2">
                    Request Another Quote
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-300">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Smith" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-primary transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-300">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+1 (555) 000-0000" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-300">Service Required</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white text-sm focus:outline-none focus:border-primary transition-all cursor-pointer"
                      >
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s.id} value={s.id} className="bg-white text-[#021E3B]">{s.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-300">Est. Area (sq.ft)</label>
                      <input 
                        type="number" 
                        placeholder="e.g. 1800" 
                        value={formData.sqft}
                        onChange={(e) => setFormData({...formData, sqft: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary-tw w-full justify-center text-sm py-4 mt-2">
                    <Calculator size={18} />
                    <span>Calculate Cost & Request Quote</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
