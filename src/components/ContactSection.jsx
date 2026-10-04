import React, { useState } from 'react';

import {
  Phone,
  MessageCircle,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

import { BRAND } from '../data/siteData';

import WhatsAppIcon from './shared/WhatsAppIcon';

const API_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000';

const CITY_OPTIONS = [
  'Los Angeles',
  'Burbank',
  'Glendale',
  'Pasadena',
  'West Hollywood',
  'Beverly Hills',
  'Santa Monica',
  'Culver City',
  'Torrance',
  'Long Beach',
  'Santa Clarita',
  'Pomona',
  'Thousand Oaks',
  'Anaheim',
  'Santa Ana',
  'Irvine',
  'Huntington Beach',
  'Riverside',
  'San Bernardino',
  'Ontario',
  'Other',
];

const SERVICE_OPTIONS = [
  'Carpet',
  'Upholstery',
  'Tile & Grout',
  'Area Rug',
  'Mattress',
  'Leather Couch',
  'Scotchgard',
  'Curtains',
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // ==========================================
  // SERVICE CHECKBOX
  // ==========================================

  const handleCheckboxChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      service: prev.service.includes(value)
        ? prev.service.filter((item) => item !== value)
        : [...prev.service, value],
    }));

    setSubmitError('');
    setSubmitSuccess(false);
  };

  // ==========================================
  // FORM SUBMIT
  // ==========================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitError('');
    setSubmitSuccess(false);

    // ------------------------------------------
    // VALIDATION
    // ------------------------------------------

    if (!formData.name.trim()) {
      setSubmitError('Please enter your full name.');
      return;
    }

    if (!formData.phone.trim()) {
      setSubmitError('Please enter your phone number.');
      return;
    }

    if (!formData.city.trim()) {
      setSubmitError('Please select your city.');
      return;
    }

    if (formData.service.length === 0) {
      setSubmitError(
        'Please select at least one cleaning service.'
      );
      return;
    }

    // ------------------------------------------
    // IMAGE VALIDATION
    // ------------------------------------------

    const selectedFiles = formData.photos
      ? Array.from(formData.photos)
      : [];

    if (selectedFiles.length > 5) {
      setSubmitError(
        'You can upload a maximum of 5 photos.'
      );
      return;
    }

    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/heic',
    ];

    for (const file of selectedFiles) {
      if (!allowedTypes.includes(file.type)) {
        setSubmitError(
          `The file "${file.name}" is not a supported image format. Please use JPG, PNG, WEBP or HEIC.`
        );
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        setSubmitError(
          `The image "${file.name}" is larger than 10 MB.`
        );
        return;
      }
    }

    try {
      setIsSubmitting(true);

      // ========================================
      // 1. CREATE QUOTE
      // ========================================

      const quoteResponse = await fetch(
        `${API_URL}/api/quotes`,
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            customer: formData.name.trim(),

            phone: formData.phone.trim(),

            email: formData.email.trim()
              ? formData.email.trim()
              : null,

            area: formData.city.trim(),

            service: formData.service[0],

            services: formData.service,

            rooms: formData.details.trim(),

            message: formData.details.trim(),

            special_instructions:
              formData.instructions.trim(),

            preferred_date: null,

            images: [],

            source: 'main-quote',
          }),
        }
      );

      const quoteData = await quoteResponse.json();

      if (!quoteResponse.ok || !quoteData.success) {
        throw new Error(
          quoteData.message ||
            'Failed to submit your quote request.'
        );
      }

      const quoteId = quoteData.quote?.id;

      if (!quoteId) {
        throw new Error(
          'Quote was created but no quote ID was returned.'
        );
      }

      // ========================================
      // 2. UPLOAD PHOTOS
      // ========================================

      if (selectedFiles.length > 0) {
        const imageFormData = new FormData();

        selectedFiles.forEach((file) => {
          imageFormData.append('images', file);
        });

        const imageResponse = await fetch(
          `${API_URL}/api/quotes/${quoteId}/images`,
          {
            method: 'POST',
            body: imageFormData,
          }
        );

        const imageData = await imageResponse.json();

        if (!imageResponse.ok || !imageData.success) {
          throw new Error(
            'Your quote was received, but the photos could not be uploaded. Please contact us on WhatsApp if you would like to send the photos separately.'
          );
        }
      }

      // ========================================
      // 3. SUCCESS
      // ========================================

      setSubmitSuccess(true);

      setFormData({
        name: '',
        phone: '',
        email: '',
        city: 'Los Angeles',
        service: [],
        details: '',
        photos: null,
        instructions: '',
      });

      // Reset file input
      const fileInput =
        document.getElementById('quote-photo-upload');

      if (fileInput) {
        fileInput.value = '';
      }

    } catch (error) {
      console.error(
        'Quote submission error:',
        error
      );

      setSubmitError(
        error.message ||
          'Something went wrong while submitting your quote. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ==========================================
  // WHATSAPP
  // ==========================================

  const handleWhatsAppSubmit = () => {
    let message =
      `Hello IQORA Cleaning Services, I would like a quote.\n\n`;

    message += `*Name:* ${
      formData.name || 'Not provided'
    }\n`;

    message += `*Phone:* ${
      formData.phone || 'Not provided'
    }\n`;

    if (formData.email) {
      message += `*Email:* ${formData.email}\n`;
    }

    message += `*City:* ${
      formData.city || 'Not provided'
    }\n`;

    if (formData.service.length > 0) {
      message += `*Services Needed:* ${formData.service.join(
        ', '
      )}\n`;
    }

    if (formData.details) {
      message += `*What needs cleaning:*\n${formData.details}\n`;
    }

    if (formData.instructions) {
      message += `*Special Instructions:*\n${formData.instructions}\n`;
    }

    if (formData.photos && formData.photos.length > 0) {
      message += `\n_(I have photos to share)_`;
    }

    const encodedMessage =
      encodeURIComponent(message);

    const whatsappNumber = '15598240198';

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      className="py-16 lg:py-24"
      data-reveal
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* =====================================
              LEFT SIDE
          ====================================== */}

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
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Call or WhatsApp
                  </span>

                  <a
                    href={BRAND.phoneHref}
                    className="text-xl font-extrabold text-slate-900 dark:text-white hover:text-primary transition-colors"
                  >
                    {BRAND.phone}
                  </a>
                </div>

              </div>

              <div className="flex flex-col gap-2 shrink-0 w-full sm:w-auto">

                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="btn-secondary-tw w-full sm:w-auto"
                >
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
                <CheckCircle2
                  size={20}
                  className="text-primary shrink-0"
                />
                <span>
                  Price confirmed before any work starts
                </span>
              </div>

              <div className="flex items-center gap-3 font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2
                  size={20}
                  className="text-primary shrink-0"
                />
                <span>
                  Eco-friendly cleaning products
                </span>
              </div>

              <div className="flex items-center gap-3 font-semibold text-slate-800 dark:text-slate-200">
                <CheckCircle2
                  size={20}
                  className="text-primary shrink-0"
                />
                <span>
                  Serving 20 Southern California cities
                </span>
              </div>

            </div>

            <div className="mt-8 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">

              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000"
                alt="Cleaning Service"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />

            </div>

          </div>

          {/* =====================================
              QUOTE FORM
          ====================================== */}

          <div
            id="quote"
            className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl"
          >

            <div className="mb-6">

              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight mb-2">
                Get a Free Cleaning Quote
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                Tell us what needs cleaning and we'll send a price based on our posted rates, usually by phone or WhatsApp. We confirm that total again before any work begins, and you can see every rate on our carpet and upholstery cleaning price list.
              </p>

            </div>

            {/* =================================
                SUCCESS MESSAGE
            ================================== */}

            {submitSuccess && (
              <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-5 dark:border-green-900/50 dark:bg-green-950/30">

                <div className="flex items-start gap-3">

                  <CheckCircle2
                    size={26}
                    className="mt-0.5 shrink-0 text-green-600"
                  />

                  <div>

                    <h3 className="text-lg font-extrabold text-green-800 dark:text-green-300">
                      Thank You for Contacting IQORA!
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-green-700 dark:text-green-400">
                      Your quote request has been successfully received. Our team will review your request and contact you shortly to confirm the details and discuss your cleaning service needs.
                    </p>

                  </div>

                </div>

              </div>
            )}

            {/* =================================
                ERROR MESSAGE
            ================================== */}

            {submitError && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-300">
                {submitError}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* NAME + PHONE */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="space-y-1.5">

                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    required
                    value={formData.name}
                    disabled={isSubmitting}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      });

                      setSubmitError('');
                      setSubmitSuccess(false);
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-60"
                  />

                </div>

                <div className="space-y-1.5">

                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    disabled={isSubmitting}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      });

                      setSubmitError('');
                      setSubmitSuccess(false);
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-60"
                  />

                </div>

              </div>

              {/* EMAIL */}

              <div className="space-y-1.5">

                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Email Address (optional)
                </label>

                <input
                  type="email"
                  value={formData.email}
                  disabled={isSubmitting}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    });

                    setSubmitError('');
                    setSubmitSuccess(false);
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-60"
                />

              </div>

              {/* CITY */}

              <div className="space-y-1.5">

                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  City *
                </label>

                <select
                  required
                  value={formData.city}
                  disabled={isSubmitting}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      city: e.target.value,
                    });

                    setSubmitError('');
                    setSubmitSuccess(false);
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer disabled:opacity-60"
                >
                  {CITY_OPTIONS.map((city) => (
                    <option
                      key={city}
                      value={city}
                      className="bg-white text-[#021E3B]"
                    >
                      {city}
                    </option>
                  ))}
                </select>

              </div>

              {/* SERVICES */}

              <div className="space-y-2">

                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Services Needed *
                </label>

                <div className="grid grid-cols-2 gap-2">

                  {SERVICE_OPTIONS.map((service) => (
                    <label
                      key={service}
                      className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg px-3 py-2 text-sm text-slate-700 dark:text-slate-200"
                    >

                      <input
                        type="checkbox"
                        checked={formData.service.includes(
                          service
                        )}
                        disabled={isSubmitting}
                        onChange={() =>
                          handleCheckboxChange(service)
                        }
                        className="accent-primary w-4 h-4"
                      />

                      <span>{service}</span>

                    </label>
                  ))}

                </div>

              </div>

              {/* DETAILS */}

              <div className="space-y-1.5">

                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  What needs cleaning?
                </label>

                <textarea
                  rows="3"
                  value={formData.details}
                  disabled={isSubmitting}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      details: e.target.value,
                    });

                    setSubmitError('');
                  }}
                  placeholder="e.g. 3 bedrooms + hallway, 3-seat sofa, 1 queen mattress"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-60"
                />

              </div>

              {/* PHOTOS */}

              <div className="space-y-1.5">

                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Upload Photos (optional)
                </label>

                <input
                  id="quote-photo-upload"
                  type="file"
                  multiple
                  accept="image/jpeg,image/png,image/webp,image/heic"
                  disabled={isSubmitting}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      photos: e.target.files,
                    });

                    setSubmitError('');
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-60"
                />

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Maximum 5 photos, up to 10 MB each. JPG,
                  PNG, WEBP or HEIC.
                </p>

              </div>

              {/* SPECIAL INSTRUCTIONS */}

              <div className="space-y-1.5">

                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Special Instructions
                </label>

                <textarea
                  rows="3"
                  value={formData.instructions}
                  disabled={isSubmitting}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      instructions: e.target.value,
                    });

                    setSubmitError('');
                  }}
                  placeholder="Pets, stains, stairs, parking, gate codes, preferred dates…"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-60"
                />

              </div>

              {/* BUTTONS */}

              <div className="flex flex-col sm:flex-row gap-3 pt-2 mt-2">

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary-tw flex-1 justify-center text-sm py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span>
                    {isSubmitting
                      ? 'Submitting Request...'
                      : 'Request My Free Quote'}
                  </span>
                </button>

                {/* WHATSAPP IS NOT DISABLED */}

                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-green-500 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                >
                  <WhatsAppIcon size={18} />
                  <span>Get Quote on WhatsApp</span>
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

      {/* =====================================
          FAQ SECTION
      ====================================== */}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

        <div className="grid gap-6">

          <div className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">

            <h3 className="text-xl font-heading font-extrabold text-slate-900 dark:text-white">
              What's the fastest way to reach IQORA?
            </h3>

            <p className="text-slate-600 dark:text-slate-400">
              Calling +1 (323) 916-8039 or sending a WhatsApp message to the same number is the quickest way to reach us. Email and the quote form work well too, especially if you want to include several photos or describe a larger job in more detail.
            </p>

          </div>

          <div className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">

            <h3 className="text-xl font-heading font-extrabold text-slate-900 dark:text-white">
              What should I include in a quote request?
            </h3>

            <p className="text-slate-600 dark:text-slate-400">
              Tell us your city, which items need cleaning, and how many rooms, seats, or pieces are involved. Mention pets, stains, stairs, or anything unusual. The more detail you share upfront, the more accurate your quote will be from the very first reply.
            </p>

          </div>

          <div className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">

            <h3 className="text-xl font-heading font-extrabold text-slate-900 dark:text-white">
              Can I send photos for a quote?
            </h3>

            <p className="text-slate-600 dark:text-slate-400">
              Yes, and it helps a lot. A clear photo of a stained carpet, a sofa, a rug, or discolored grout lets us see the fabric, the damage, and the size of the job. Photos sent by WhatsApp or text usually get you a more accurate price and a realistic idea of results.
            </p>

          </div>

          <div className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">

            <h3 className="text-xl font-heading font-extrabold text-slate-900 dark:text-white">
              Do you need to visit my home before giving a price?
            </h3>

            <p className="text-slate-600 dark:text-slate-400">
              No. Our prices are based on rooms, seats, and item sizes, so most quotes can be given by phone, WhatsApp, or email without a visit. When we arrive, we check the job and confirm the total with you again before any cleaning begins in your home.
            </p>

          </div>

          <div className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">

            <h3 className="text-xl font-heading font-extrabold text-slate-900 dark:text-white">
              Is the quote free?
            </h3>

            <p className="text-slate-600 dark:text-slate-400">
              Yes. Quotes are free and come with no obligation to book. Ask as many questions as you need about the process, drying time, or what cleaning can realistically fix, and decide once you have all the information you need to feel comfortable.
            </p>

          </div>

          <div className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">

            <h3 className="text-xl font-heading font-extrabold text-slate-900 dark:text-white">
              Which areas can I book service in?
            </h3>

            <p className="text-slate-600 dark:text-slate-400">
              We serve 20 cities across Los Angeles County, Orange County, the Inland Empire, and Thousand Oaks, including Los Angeles, Burbank, Pasadena, Long Beach, Anaheim, Irvine, and Riverside. If your city isn't on the list, contact us and we'll check your address.
            </p>

          </div>

          <div className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">

            <h3 className="text-xl font-heading font-extrabold text-slate-900 dark:text-white">
              Can I book a cleaning for a rental property or someone else's home?
            </h3>

            <p className="text-slate-600 dark:text-slate-400">
              Yes. Landlords, property managers, and family members often book cleanings for homes they don't live in. We just need someone to provide access and approve the confirmed price before we start, whether that's in person, by phone, or by message.
            </p>

          </div>

          <div className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">

            <h3 className="text-xl font-heading font-extrabold text-slate-900 dark:text-white">
              Do I need to be home during the cleaning?
            </h3>

            <p className="text-slate-600 dark:text-slate-400">
              Someone should be there when we arrive to let us in, point out problem areas, and approve the confirmed price. After that, you don't need to stay in the room while we work, though you're always welcome to ask questions or watch how we clean.
            </p>

          </div>

          <div className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">

            <h3 className="text-xl font-heading font-extrabold text-slate-900 dark:text-white">
              How should I prepare after booking?
            </h3>

            <p className="text-slate-600 dark:text-slate-400">
              Clear small items, breakables, and anything sitting on the floor from the areas being cleaned. Let us know about pets, parking, gate codes, or elevator access in advance, so the visit starts on time and nothing holds up the cleaning once we arrive.
            </p>

          </div>

          <div className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">

            <h3 className="text-xl font-heading font-extrabold text-slate-900 dark:text-white">
              What if I need to reschedule?
            </h3>

            <p className="text-slate-600 dark:text-slate-400">
              Let us know as early as possible by phone or WhatsApp, and we'll find a new time that works for you. Early notice makes it much easier to offer you a good replacement slot and to give your original time to another customer who's waiting for one.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}