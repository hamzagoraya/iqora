import React, { useState } from 'react';
import { Phone, Send, CheckCircle2, Calculator, Sparkles } from 'lucide-react';
import { BRAND, SERVICES, SPECIALTY_SERVICES } from '../data/siteData';

const SERVICE_OPTIONS = [...SERVICES, ...SPECIALTY_SERVICES];

export default function ContactSection({ onOpenQuote }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: SERVICES[0].id,
    sqft: 1500,
    condition: 'light',
    message: '',
    saveInfo: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const baseRates = {
    'carpet-cleaning': 0.45,
    'upholstery-cleaning': 0.35,
    'tile-and-grout-cleaning': 0.75,
    'area-rug-cleaning': 0.60,
    'mattress-cleaning': 0.40,
    'leather-couch-cleaning': 0.50,
    'scotchgard-protection': 0.25,
    'curtain-cleaning': 0.30
  };
  const conditionMultipliers = {
    light: 1.0,
    moderate: 1.15,
    heavy: 1.35
  };

  const estimatedPrice = Math.round(
    formData.sqft * (baseRates[formData.service] || 0.45) * (conditionMultipliers[formData.condition] || 1.0)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Info & Call Banner */}
          <div className="space-y-6">
            <div className="badge-tag">
              <Sparkles size={14} />
              <span>Contact Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
              Happy to Answer All Your Questions
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              Questions about carpet, upholstery, or tile cleaning? Our North Hollywood team answers every call personally — no call centers, no pressure, just straight answers about your job.
            </p>

            {/* Quick Call Banner */}
            <div className="bg-slate-100 dark:bg-dark-surface border-l-4 border-primary rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-13 h-13 rounded-full bg-primary text-white flex items-center justify-center p-3.5 shrink-0 shadow-md">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Call Us Anytime</span>
                  <a href={BRAND.phoneHref} className="text-xl font-extrabold text-slate-900 dark:text-white hover:text-primary transition-colors">
                    {BRAND.phone}
                  </a>
                </div>
              </div>
              <button onClick={onOpenQuote} className="btn-secondary-tw w-full sm:w-auto shrink-0">
                Get a Free Quote
              </button>
            </div>

            {/* Trust Features */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 size={20} className="text-primary shrink-0" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-3 font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 size={20} className="text-primary shrink-0" />
                <span>Vetted & Insured Cleaning Teams</span>
              </div>
              <div className="flex items-center gap-3 font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 size={20} className="text-primary shrink-0" />
                <span>Eco-Friendly Cleaning Products</span>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Form & Live Estimator */}
          <div className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-1">
                Get a Quick Cost Estimate
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Fill out the form below and receive an instant estimate for your space.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 size={54} className="text-emerald-500 mx-auto" />
                <h4 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">Thank You!</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto">
                  Your request has been received. Our team will contact you at <strong>{formData.email || 'your email'}</strong> within 30 minutes.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-outline-tw mt-4">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-slate-700 dark:text-slate-300">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-slate-700 dark:text-slate-300">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-700 dark:text-slate-300">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required 
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-xs font-bold text-slate-700 dark:text-slate-300">Service Needed</label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
                    >
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Interactive Estimator Slider */}
                <div className="bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-slate-700/60 rounded-2xl p-5 space-y-4">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700 dark:text-slate-300">
                    <span className="flex items-center gap-1.5"><Calculator size={15} className="text-primary" /> Area Size</span>
                    <span className="text-primary font-extrabold text-sm">{formData.sqft.toLocaleString()} sq. ft.</span>
                  </div>

                  <input 
                    type="range" 
                    min="500" 
                    max="10000" 
                    step="250"
                    value={formData.sqft}
                    onChange={(e) => setFormData({...formData, sqft: Number(e.target.value)})}
                    className="w-full accent-primary cursor-pointer"
                  />

                  <div className="grid grid-cols-3 gap-1.5">
                    {[['light', 'Light'], ['moderate', 'Moderate'], ['heavy', 'Heavy Soil']].map(([f, label]) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setFormData({...formData, condition: f})}
                        className={`py-1.5 px-1 text-[11px] font-bold rounded-lg border transition-all ${
                          formData.condition === f
                            ? 'bg-primary text-white border-primary shadow-sm'
                            : 'bg-white dark:bg-dark-surface text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-primary'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-dashed border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-400">
                    <span>Estimated Price:</span>
                    <strong className="text-2xl font-extrabold text-primary">${estimatedPrice.toLocaleString()}</strong>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Estimate only — we confirm a firm price on-site before any work begins.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-700 dark:text-slate-300">Requirements / Special Instructions</label>
                  <textarea 
                    id="message" 
                    rows="3" 
                    placeholder="Tell us about rooms, pets, preferred dates..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400">
                  <input 
                    type="checkbox" 
                    id="saveInfo"
                    checked={formData.saveInfo}
                    onChange={(e) => setFormData({...formData, saveInfo: e.target.checked})}
                    className="accent-primary w-4 h-4 rounded cursor-pointer"
                  />
                  <label htmlFor="saveInfo" className="cursor-pointer">Save my details in this browser for future bookings.</label>
                </div>

                <button type="submit" className="btn-primary-tw w-full justify-center" disabled={loading}>
                  {loading ? 'Processing...' : 'Get Cost Estimate'}
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
