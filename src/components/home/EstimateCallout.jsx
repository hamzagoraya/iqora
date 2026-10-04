import React, { useState } from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

import { SERVICES, SPECIALTY_SERVICES } from '../../data/siteData';
import WhatsAppIcon from '../shared/WhatsAppIcon';

const SERVICE_OPTIONS = [...SERVICES, ...SPECIALTY_SERVICES];

const API_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function EstimateCallout() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES[0]?.id || '',
    details: '',
    city: '',
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ==========================================
  // UPDATE FIELD
  // ==========================================
  const updateField = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: '',
    }));

    setServerError('');
  };

  // ==========================================
  // FORM VALIDATION
  // ==========================================
  const validateForm = () => {
    const newErrors = {};

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const details = formData.details.trim();
    const city = formData.city.trim();

    // Name
    if (!name) {
      newErrors.name = 'Please enter your full name.';
    } else if (name.length < 2) {
      newErrors.name =
        'Name must be at least 2 characters.';
    } else if (!/^[a-zA-ZÀ-ÿ\s.'-]+$/.test(name)) {
      newErrors.name =
        'Please enter a valid name.';
    }

    // Phone
    if (!phone) {
      newErrors.phone =
        'Please enter your phone number.';
    } else {
      const phoneDigits = phone.replace(/\D/g, '');

      if (phoneDigits.length < 10) {
        newErrors.phone =
          'Please enter a valid phone number.';
      } else if (phoneDigits.length > 15) {
        newErrors.phone =
          'Please enter a valid phone number.';
      }
    }

    // Rooms / Items
    if (!details) {
      newErrors.details =
        'Please tell us what needs to be cleaned.';
    } else if (details.length < 2) {
      newErrors.details =
        'Please provide a little more information.';
    }

    // City
    if (!city) {
      newErrors.city =
        'Please enter your city.';
    } else if (city.length < 2) {
      newErrors.city =
        'Please enter a valid city.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ==========================================
  // SUBMIT ESTIMATE
  // ==========================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setServerError('');

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setIsSubmitting(true);

    const selectedService = SERVICE_OPTIONS.find(
      (service) => service.id === formData.service
    );

    const serviceName =
      selectedService?.name || formData.service;

    try {
      const response = await fetch(`${API_URL}/api/quotes`, {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          customer: formData.name.trim(),

          phone: formData.phone.trim(),

          email: null,

          area: formData.city.trim(),

          service: serviceName,

          services: [serviceName],

          rooms: formData.details.trim(),

          message: formData.details.trim(),

          special_instructions: '',

          preferred_date: null,

          images: [],

          source: 'hero-estimate',
        }),
      });

      let data = {};

      try {
        data = await response.json();
      } catch {
        throw new Error(
          'Unable to connect with the server. Please try again.'
        );
      }

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            'We could not submit your request. Please try again.'
        );
      }

      // SUCCESS
      setSubmitted(true);
      setErrors({});
      setServerError('');
    } catch (error) {
      console.error(
        'Estimate submission failed:',
        error
      );

      setServerError(
        error.message ||
          'Something went wrong. Please try again or contact us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ==========================================
  // WHATSAPP
  // ==========================================
  const handleWhatsAppSubmit = () => {
    const newErrors = {};

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const details = formData.details.trim();
    const city = formData.city.trim();

    if (!name) {
      newErrors.name = 'Please enter your full name.';
    }

    if (!phone) {
      newErrors.phone =
        'Please enter your phone number.';
    }

    if (!details) {
      newErrors.details =
        'Please tell us what needs to be cleaned.';
    }

    if (!city) {
      newErrors.city =
        'Please enter your city.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const message = [
      'Hello IQORA Cleaning Services, I would like an estimate.',
      '',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `City: ${city}`,
      `Rooms or Items: ${details}`,
    ].join('\n');

    const encodedMessage =
      encodeURIComponent(message);

    const whatsappNumber = '15598240198';

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer'
    );
  };

  // ==========================================
  // SUCCESS SCREEN
  // ==========================================
  if (submitted) {
    return (
      <section
        id="estimate"
        className="py-16 lg:py-24"
        data-reveal
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-secondary rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-12 lg:p-16 text-white border border-slate-800">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop')",
              }}
            />

            <div className="relative z-10 max-w-2xl mx-auto text-center py-8">
              <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2
                  size={40}
                  className="text-primary"
                />
              </div>

              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
                Thank You for Contacting IQORA!
              </h2>

              <p className="mt-5 text-base text-slate-300 leading-7">
                Your free estimate request has been
                successfully received.
              </p>

              <p className="mt-2 text-base text-slate-300 leading-7">
                Our team will review your request and
                contact you shortly to confirm the details
                and discuss your cleaning service needs.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-300">
                <CheckCircle2
                  size={17}
                  className="text-primary"
                />

                <span>
                  We appreciate your interest in IQORA
                  Cleaning Services.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="estimate"
      className="py-16 lg:py-24"
      data-reveal
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-secondary rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-12 lg:p-16 text-white border border-slate-800">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop')",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-5 space-y-4">
              <div className="badge-tag">
                <Sparkles size={14} />
                <span>Free estimate</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight">
                Get Your Free Cleaning Estimate
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Tell us what needs cleaning and we'll
                send a clear price breakdown with no
                obligation. Because we're open 24 hours,
                IQORA's phone, WhatsApp, and email
                details work just as well at midnight as
                at noon.
              </p>

              <div className="space-y-2 pt-2 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-primary"
                  />

                  <span>
                    Prices confirmed before we start
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-primary"
                  />

                  <span>
                    No hidden fees or contracts
                  </span>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-7 bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-4"
              >
                {/* NAME + PHONE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* NAME */}
                  <div className="space-y-1">
                    <label
                      htmlFor="estimate-name"
                      className="text-xs font-bold text-slate-300"
                    >
                      Full Name *
                    </label>

                    <input
                      id="estimate-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        updateField(
                          'name',
                          e.target.value
                        )
                      }
                      placeholder="Enter full name"
                      className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                        errors.name
                          ? 'border-red-400'
                          : 'border-white/15'
                      } text-white placeholder-slate-400 text-sm focus:outline-none focus:border-primary transition-all`}
                    />

                    {errors.name && (
                      <p className="text-xs text-red-300">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* PHONE */}
                  <div className="space-y-1">
                    <label
                      htmlFor="estimate-phone"
                      className="text-xs font-bold text-slate-300"
                    >
                      Phone Number *
                    </label>

                    <input
                      id="estimate-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        updateField(
                          'phone',
                          e.target.value
                        )
                      }
                      placeholder="+1 (555) 000-0000"
                      className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                        errors.phone
                          ? 'border-red-400'
                          : 'border-white/15'
                      } text-white placeholder-slate-400 text-sm focus:outline-none focus:border-primary transition-all`}
                    />

                    {errors.phone && (
                      <p className="text-xs text-red-300">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* ROOMS / ITEMS */}
                <div className="space-y-1">
                  <label
                    htmlFor="estimate-details"
                    className="text-xs font-bold text-slate-300"
                  >
                    Rooms or Items *
                  </label>

                  <input
                    id="estimate-details"
                    type="text"
                    value={formData.details}
                    onChange={(e) =>
                      updateField(
                        'details',
                        e.target.value
                      )
                    }
                    placeholder="3 rooms + 1 sofa"
                    className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                      errors.details
                        ? 'border-red-400'
                        : 'border-white/15'
                    } text-white placeholder-slate-400 text-sm focus:outline-none focus:border-primary transition-all`}
                  />

                  {errors.details && (
                    <p className="text-xs text-red-300">
                      {errors.details}
                    </p>
                  )}
                </div>

                {/* CITY */}
                <div className="space-y-1">
                  <label
                    htmlFor="estimate-city"
                    className="text-xs font-bold text-slate-300"
                  >
                    City *
                  </label>

                  <input
                    id="estimate-city"
                    type="text"
                    value={formData.city}
                    onChange={(e) =>
                      updateField(
                        'city',
                        e.target.value
                      )
                    }
                    placeholder="Los Angeles"
                    className={`w-full px-4 py-3 rounded-xl bg-white/10 border ${
                      errors.city
                        ? 'border-red-400'
                        : 'border-white/15'
                    } text-white placeholder-slate-400 text-sm focus:outline-none focus:border-primary transition-all`}
                  />

                  {errors.city && (
                    <p className="text-xs text-red-300">
                      {errors.city}
                    </p>
                  )}
                </div>

                {/* SERVER ERROR */}
                {serverError && (
                  <div className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3">
                    <p className="text-sm text-red-200">
                      {serverError}
                    </p>
                  </div>
                )}

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