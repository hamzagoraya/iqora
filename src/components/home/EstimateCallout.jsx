import React, { useState } from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { SERVICES, SPECIALTY_SERVICES } from '../../data/siteData';
import WhatsAppIcon from '../shared/WhatsAppIcon';

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

  const handleWhatsAppSubmit = () => {
    if (!formData.name || !formData.phone || !formData.details || !formData.city) {
      window.alert('Please fill out all fields before getting a quote on WhatsApp.');
      return;
    }

    let message = `Hello IQORA Cleaning Services, I would like an estimate.\n\n`;
    message += `*Name:* ${formData.name}\n`;
    message += `*Phone:* ${formData.phone}\n`;
    message += `*City:* ${formData.city}\n`;
    message += `*Rooms or Items:* ${formData.details}\n`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '15598240198';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
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
                Tell us what needs cleaning and we'll send a clear price breakdown with no obligation. Because we're open 24 hours, IQORA's phone, WhatsApp, and email details work just as well at midnight as at noon.
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
                    required
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
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Los Angeles"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-primary transition-all"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2 mt-2">
                  <button type="submit" className="btn-primary-tw flex-1 justify-center text-sm py-4">
                    <span>Request My Free Quote</span>
                  </button>
                  <button 
                    type="button" 
                    onClick={handleWhatsAppSubmit}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-green-500 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                  >
                    <WhatsAppIcon size={18} />
                    <span>WhatsApp Quote</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
