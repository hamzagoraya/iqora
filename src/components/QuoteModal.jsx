import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { SERVICES, SPECIALTY_SERVICES } from '../data/siteData';

const SERVICE_OPTIONS = [...SERVICES, ...SPECIALTY_SERVICES];

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES[0].id,
    date: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
  e.preventDefault();

  // YOUR WHATSAPP NUMBER (testing)
  const clientWhatsApp = '923010041264';

  const selectedService = SERVICE_OPTIONS.find(
    (service) => service.id === formData.service
  );

  const message = `🔔 New Cleaning Quote Request

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
🧹 Service: ${selectedService?.name || formData.service}
📅 Preferred Date: ${formData.date || 'Not specified'}

Please contact the customer to confirm the quote.`;

  const whatsappUrl = `https://wa.me/${clientWhatsApp}?text=${encodeURIComponent(message)}`;

 window.location.href = whatsappUrl;

  setSubmitted(true);
};

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      onClick={handleClose}
      className="fixed inset-0 z-[100] bg-slate-950/65 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative animate-slide-up"
      >
        <button 
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 dark:bg-dark-bg text-slate-600 dark:text-slate-300 hover:text-primary flex items-center justify-center transition-colors"
          aria-label="Close Modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <CheckCircle2 size={54} className="text-primary mx-auto" />
            <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
              Quote Request Sent!
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              We'll call <strong>{formData.phone}</strong> shortly to confirm your free quote and schedule.
            </p>
            <button onClick={handleClose} className="btn-primary-tw mt-4">
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="badge-tag mb-2">
                <Sparkles size={14} />
                <span>Free Quote</span>
              </div>
              <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
                Get a Free Instant Quote
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Tell us about the job and we'll confirm a firm price before any work begins.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Your Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Phone Number *</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Cleaning Service</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
                >
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Preferred Date</label>
                <input 
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <button type="submit" className="btn-primary-tw w-full justify-center mt-2">
                <span>Submit Request</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
