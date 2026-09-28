import React, { useState } from 'react';
import { Phone, MessageCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { BRAND } from '../data/siteData';
import WhatsAppIcon from './shared/WhatsAppIcon';

const CITY_OPTIONS = [
  'Los Angeles', 'Burbank', 'Glendale', 'Pasadena', 'West Hollywood', 'Beverly Hills', 'Santa Monica', 'Culver City', 'Torrance', 'Long Beach', 'Santa Clarita', 'Pomona', 'Thousand Oaks', 'Anaheim', 'Santa Ana', 'Irvine', 'Huntington Beach', 'Riverside', 'San Bernardino', 'Ontario', 'Other',
];

const SERVICE_OPTIONS = [
  'Carpet', 'Upholstery', 'Tile & Grout', 'Area Rug', 'Mattress', 'Leather Couch', 'Scotchgard', 'Curtains',
];

export default function ContactSection({ onOpenQuote }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Los Angeles',
    service: [],
    details: '',
    photos: null,
    instructions: '',
  });

  const handleCheckboxChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      service: prev.service.includes(value)
        ? prev.service.filter((item) => item !== value)
        : [...prev.service, value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onOpenQuote?.();
  };

  return (
    <section className="py-16 lg:py-24" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
            <div className="badge-tag">
              <Sparkles size={14} />
              <span>Contact us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
              Happy to Answer Your Cleaning Questions
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              Questions about carpet, upholstery, or tile cleaning? You'll talk directly with IQORA, not a call center, and get straight answers about your job with no pressure to book. If you're still comparing options, our carpet, upholstery, and specialty cleaning services are explained in detail, with each service's process and what it's best for.
            </p>

            <div className="bg-slate-100 dark:bg-dark-surface border-l-4 border-primary rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-13 h-13 rounded-full bg-primary text-white flex items-center justify-center p-3.5 shrink-0 shadow-md">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Call or WhatsApp</span>
                  <a href={BRAND.phoneHref} className="text-xl font-extrabold text-slate-900 dark:text-white hover:text-primary transition-colors">
                    {BRAND.phone}
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-2 shrink-0 w-full sm:w-auto">
                <button type="button" onClick={onOpenQuote} className="btn-secondary-tw w-full sm:w-auto">
                  Get a Free Quote
                </button>
                <a
                  href={BRAND.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-500 text-white font-bold text-sm rounded-xl transition-all duration-300"
                  aria-label="Get a Quote on WhatsApp"
                >
                  <WhatsAppIcon size={16} />
                  <span>Get a Quote on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 size={20} className="text-primary shrink-0" />
                <span>Price confirmed before any work starts</span>
              </div>
              <div className="flex items-center gap-3 font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 size={20} className="text-primary shrink-0" />
                <span>Eco-friendly cleaning products</span>
              </div>
              <div className="flex items-center gap-3 font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2 size={20} className="text-primary shrink-0" />
                <span>Serving 20 Southern California cities</span>
              </div>
            </div>
          </div>

          <div id="quote" className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="mb-6">
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight mb-2">
                Get a Free Cleaning Quote
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Tell us what needs cleaning and we'll send a price based on our posted rates, usually by phone or WhatsApp. We confirm that total again before any work begins, and you can see every rate on our carpet and upholstery cleaning price list.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Email Address (optional)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">City *</label>
                <select
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
                >
                  {CITY_OPTIONS.map((city) => (
                    <option key={city} value={city} className="bg-white text-[#021E3B]">{city}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Services Needed *</label>
                <div className="grid grid-cols-2 gap-2">
                  {SERVICE_OPTIONS.map((service) => (
                    <label key={service} className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg px-3 py-2 text-sm text-slate-700 dark:text-slate-200">
                      <input
                        type="checkbox"
                        checked={formData.service.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                        className="accent-primary w-4 h-4"
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">What needs cleaning?</label>
                <textarea
                  rows="3"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="e.g. 3 bedrooms + hallway, 3-seat sofa, 1 queen mattress"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Upload Photos (optional)</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFormData({ ...formData, photos: e.target.files })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Special Instructions</label>
                <textarea
                  rows="3"
                  value={formData.instructions}
                  onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                  placeholder="Pets, stains, stairs, parking, gate codes, preferred dates…"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <button type="submit" className="btn-primary-tw w-full justify-center text-sm py-4 mt-2">
                <span>Request My Free Quote</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-slate-50 dark:bg-dark-bg rounded-3xl p-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">What\'s the fastest way to reach IQORA?</h3>
              <p className="text-slate-600 dark:text-slate-400">Calling +1 (323) 916-8039 or sending a WhatsApp message to the same number is the quickest way to reach us. Email and the quote form work well too, especially if you want to include several photos or describe a larger job in more detail.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">What should I include in a quote request?</h3>
              <p className="text-slate-600 dark:text-slate-400">Tell us your city, which items need cleaning, and how many rooms, seats, or pieces are involved. Mention pets, stains, stairs, or anything unusual. The more detail you share upfront, the more accurate your quote will be from the very first reply.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">Can I send photos for a quote?</h3>
              <p className="text-slate-600 dark:text-slate-400">Yes, and it helps a lot. A clear photo of a stained carpet, a sofa, a rug, or discolored grout lets us see the fabric, the damage, and the size of the job. Photos sent by WhatsApp or text usually get you a more accurate price and a realistic idea of results.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">Do you need to visit my home before giving a price?</h3>
              <p className="text-slate-600 dark:text-slate-400">No. Our prices are based on rooms, seats, and item sizes, so most quotes can be given by phone, WhatsApp, or email without a visit. When we arrive, we check the job and confirm the total with you again before any cleaning begins in your home.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">Is the quote free?</h3>
              <p className="text-slate-600 dark:text-slate-400">Yes. Quotes are free and come with no obligation to book. Ask as many questions as you need about the process, drying time, or what cleaning can realistically fix, and decide once you have all the information you need to feel comfortable.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">Which areas can I book service in?</h3>
              <p className="text-slate-600 dark:text-slate-400">We serve 20 cities across Los Angeles County, Orange County, the Inland Empire, and Thousand Oaks, including Los Angeles, Burbank, Pasadena, Long Beach, Anaheim, Irvine, and Riverside. If your city isn't on the list, contact us and we'll check your address.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">Can I book a cleaning for a rental property or someone else's home?</h3>
              <p className="text-slate-600 dark:text-slate-400">Yes. Landlords, property managers, and family members often book cleanings for homes they don't live in. We just need someone to provide access and approve the confirmed price before we start, whether that's in person, by phone, or by message.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">Do I need to be home during the cleaning?</h3>
              <p className="text-slate-600 dark:text-slate-400">Someone should be there when we arrive to let us in, point out problem areas, and approve the confirmed price. After that, you don't need to stay in the room while we work, though you're always welcome to ask questions or watch how we clean.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">How should I prepare after booking?</h3>
              <p className="text-slate-600 dark:text-slate-400">Clear small items, breakables, and anything sitting on the floor from the areas being cleaned. Let us know about pets, parking, gate codes, or elevator access in advance, so the visit starts on time and nothing holds up the cleaning once we arrive.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">What if I need to reschedule?</h3>
              <p className="text-slate-600 dark:text-slate-400">Let us know as early as possible by phone or WhatsApp, and we'll find a new time that works for you. Early notice makes it much easier to offer you a good replacement slot and to give your original time to another customer who's waiting for one.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
