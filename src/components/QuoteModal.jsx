import React, { useEffect, useState } from 'react';

import {
  X,
  Sparkles,
  Send,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';

import { SERVICES, SPECIALTY_SERVICES } from '../data/siteData';

const SERVICE_OPTIONS = [...SERVICES, ...SPECIALTY_SERVICES];

const WHATSAPP_NUMBER = '15598240198';

const WHATSAPP_MESSAGE =
  'Hello IQORA Cleaning Services, I would like to get a quote for your cleaning services. Please share your availability and pricing.';

const API_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES[0].id,
    date: '',
    areaSize: '',
    details: '',
  });

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // ==========================================
  // UPDATE FIELD
  // ==========================================
  const updateField = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    // Remove field error while user corrects it
    setErrors((previous) => ({
      ...previous,
      [field]: '',
    }));

    setError('');
  };

  // ==========================================
  // VALIDATE FORM
  // ==========================================
  const validateForm = () => {
    const newErrors = {};

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const areaSize = formData.areaSize.trim();

    // -----------------------------
    // NAME
    // -----------------------------
    if (!name) {
      newErrors.name = 'Please enter your full name.';
    } else if (name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    } else if (!/^[a-zA-ZÀ-ÿ\s.'-]+$/.test(name)) {
      newErrors.name =
        'Please enter a valid name.';
    }

    // -----------------------------
    // PHONE
    // -----------------------------
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

    // -----------------------------
    // SERVICE
    // -----------------------------
    if (!formData.service) {
      newErrors.service =
        'Please select a cleaning service.';
    }

    // -----------------------------
    // AREA
    // -----------------------------
    if (!areaSize) {
      newErrors.areaSize =
        'Please tell us how much area you want cleaned.';
    } else if (areaSize.length < 2) {
      newErrors.areaSize =
        'Please provide a little more information.';
    }

    // -----------------------------
    // DATE
    // -----------------------------
    if (formData.date) {
      const selectedDate = new Date(
        `${formData.date}T00:00:00`
      );

      const today = new Date();

      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.date =
          'Please select today or a future date.';
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ==========================================
  // SUBMIT QUOTE
  // ==========================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    // Validate before API request
    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setIsSending(true);

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

          // This form does not collect email
          email: null,

          // This form does not collect city
          area: null,

          service: serviceName,

          services: [serviceName],

          rooms: formData.areaSize.trim(),

          message: formData.details.trim(),

          special_instructions: '',

          preferred_date: formData.date || null,

          images: [],

          source: 'instant-quote',
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

      // ========================================
      // SUCCESS
      // ========================================
      setSubmitted(true);
      setErrors({});
      setError('');
    } catch (error) {
      console.error(
        'Quote submission failed:',
        error
      );

      setError(
        error.message ||
          'Something went wrong. Please try again or contact us directly.'
      );
    } finally {
      setIsSending(false);
    }
  };

  // ==========================================
  // WHATSAPP QUOTE
  // ==========================================
  const handleWhatsAppQuote = () => {
    const selectedService = SERVICE_OPTIONS.find(
      (service) => service.id === formData.service
    );

    const message = [
      WHATSAPP_MESSAGE,
      '',
      `Name: ${formData.name || 'Not specified'}`,
      `Phone: ${formData.phone || 'Not specified'}`,
      `Service: ${
        selectedService?.name || formData.service
      }`,
      `Area Size: ${
        formData.areaSize || 'Not specified'
      }`,
      `Preferred Date: ${
        formData.date || 'Not specified'
      }`,
      `Additional Details: ${
        formData.details || 'None'
      }`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer'
    );
  };

  // ==========================================
  // CLOSE AND RESET
  // ==========================================
  const handleClose = () => {
    setSubmitted(false);
    setError('');
    setErrors({});
    setIsSending(false);

    setFormData({
      name: '',
      phone: '',
      service: SERVICES[0].id,
      date: '',
      areaSize: '',
      details: '',
    });

    onClose();
  };

  return (
    <div
      onClick={handleClose}
      role="presentation"
      className="fixed inset-0 z-[100] bg-navy/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full max-h-[calc(100dvh-2rem)] overflow-y-auto shadow-2xl relative animate-slide-up"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 dark:bg-dark-bg text-slate-600 dark:text-slate-300 hover:text-primary flex items-center justify-center transition-colors"
          aria-label="Close Modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          // ========================================
          // PROFESSIONAL SUCCESS MESSAGE
          // ========================================
          <div className="text-center py-8 px-2">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2
                size={38}
                className="text-primary"
              />
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 dark:text-white">
              Thank You for Contacting IQORA!
            </h3>

            <p className="text-sm sm:text-base leading-6 text-slate-600 dark:text-slate-400 mt-4 max-w-md mx-auto">
              Your quote request has been successfully
              received.
            </p>

            <p className="text-sm sm:text-base leading-6 text-slate-600 dark:text-slate-400 mt-2 max-w-md mx-auto">
              Our team will review your request and
              contact you shortly to confirm the details
              and discuss your cleaning service needs.
            </p>

            <div className="mt-6 text-left bg-slate-50 dark:bg-dark-bg rounded-2xl p-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <span className="font-bold text-slate-900 dark:text-white">
                  Service:
                </span>{' '}
                {SERVICE_OPTIONS.find(
                  (service) =>
                    service.id === formData.service
                )?.name || formData.service}
              </div>

              <div>
                <span className="font-bold text-slate-900 dark:text-white">
                  Area:
                </span>{' '}
                {formData.areaSize}
              </div>

              {formData.date && (
                <div>
                  <span className="font-bold text-slate-900 dark:text-white">
                    Preferred Date:
                  </span>{' '}
                  {formData.date}
                </div>
              )}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-500 mt-5">
              We appreciate your interest in IQORA
              Cleaning Services.
            </p>

            <button
              onClick={handleClose}
              className="btn-primary-tw mt-6 px-8"
            >
              Done
            </button>
          </div>
        ) : (
          // ========================================
          // FORM
          // ========================================
          <div className="space-y-5">
            <div>
              <div className="badge-tag mb-2">
                <Sparkles size={14} />
                <span>Free Quote</span>
              </div>

              <h2
                id="quote-modal-title"
                className="text-2xl font-heading font-bold text-slate-900 dark:text-white"
              >
                Get a Free Instant Quote
              </h2>

              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Tell us about the job and we'll confirm a
                firm price before any work begins.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-4"
            >
              {/* NAME */}
              <div className="space-y-1">
                <label
                  htmlFor="quote-name"
                  className="text-xs font-bold text-slate-700 dark:text-slate-300"
                >
                  Your Name *
                </label>

                <input
                  type="text"
                  id="quote-name"
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={(e) =>
                    updateField(
                      'name',
                      e.target.value
                    )
                  }
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-200 dark:border-slate-700 focus:ring-primary'
                  } dark:bg-dark-bg bg-slate-50 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                />

                {errors.name && (
                  <p className="text-xs text-red-600 dark:text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* PHONE */}
              <div className="space-y-1">
                <label
                  htmlFor="quote-phone"
                  className="text-xs font-bold text-slate-700 dark:text-slate-300"
                >
                  Phone Number *
                </label>

                <input
                  type="tel"
                  id="quote-phone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) =>
                    updateField(
                      'phone',
                      e.target.value
                    )
                  }
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.phone
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-200 dark:border-slate-700 focus:ring-primary'
                  } dark:bg-dark-bg bg-slate-50 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                />

                {errors.phone && (
                  <p className="text-xs text-red-600 dark:text-red-400">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* SERVICE */}
              <div className="space-y-1">
                <label
                  htmlFor="quote-service"
                  className="text-xs font-bold text-slate-700 dark:text-slate-300"
                >
                  Cleaning Service *
                </label>

                <select
                  id="quote-service"
                  value={formData.service}
                  onChange={(e) =>
                    updateField(
                      'service',
                      e.target.value
                    )
                  }
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.service
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-200 dark:border-slate-700 focus:ring-primary'
                  } dark:bg-dark-bg bg-slate-50 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all cursor-pointer`}
                >
                  {SERVICE_OPTIONS.map((s) => (
                    <option
                      key={s.id}
                      value={s.id}
                      className="bg-white text-[#021E3B]"
                    >
                      {s.name}
                    </option>
                  ))}
                </select>

                {errors.service && (
                  <p className="text-xs text-red-600 dark:text-red-400">
                    {errors.service}
                  </p>
                )}
              </div>

              {/* AREA SIZE */}
              <div className="space-y-1">
                <label
                  htmlFor="quote-area-size"
                  className="text-xs font-bold text-slate-700 dark:text-slate-300"
                >
                  How Much Area Do You Want to Clean? *
                </label>

                <input
                  type="text"
                  id="quote-area-size"
                  placeholder="e.g. 500 sq ft, 2 rooms, 1 sofa"
                  value={formData.areaSize}
                  onChange={(e) =>
                    updateField(
                      'areaSize',
                      e.target.value
                    )
                  }
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.areaSize
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-200 dark:border-slate-700 focus:ring-primary'
                  } dark:bg-dark-bg bg-slate-50 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                />

                {errors.areaSize && (
                  <p className="text-xs text-red-600 dark:text-red-400">
                    {errors.areaSize}
                  </p>
                )}
              </div>

              {/* DATE */}
              <div className="space-y-1">
                <label
                  htmlFor="quote-date"
                  className="text-xs font-bold text-slate-700 dark:text-slate-300"
                >
                  Preferred Date
                </label>

                <input
                  type="date"
                  id="quote-date"
                  min={
                    new Date()
                      .toISOString()
                      .split('T')[0]
                  }
                  value={formData.date}
                  onChange={(e) =>
                    updateField(
                      'date',
                      e.target.value
                    )
                  }
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.date
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-200 dark:border-slate-700 focus:ring-primary'
                  } dark:bg-dark-bg bg-slate-50 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                />

                {errors.date && (
                  <p className="text-xs text-red-600 dark:text-red-400">
                    {errors.date}
                  </p>
                )}
              </div>

              {/* DETAILS */}
              <div className="space-y-1">
                <label
                  htmlFor="quote-details"
                  className="text-xs font-bold text-slate-700 dark:text-slate-300"
                >
                  Additional Details
                </label>

                <textarea
                  id="quote-details"
                  rows={3}
                  placeholder="Tell us about the cleaning area, stains, furniture, or any special requirements..."
                  value={formData.details}
                  onChange={(e) =>
                    updateField(
                      'details',
                      e.target.value
                    )
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-y"
                />
              </div>

              {/* SERVER ERROR */}
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                  <p className="text-sm text-red-600">
                    {error}
                  </p>
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSending}
                className="btn-primary-tw w-full justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>
                  {isSending
                    ? 'Submitting Request...'
                    : 'Submit Request'}
                </span>

                <Send size={16} />
              </button>

              {/* WHATSAPP */}
              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="w-full justify-center inline-flex items-center gap-2 rounded-xl border border-green-500 text-green-600 hover:bg-green-500 hover:text-white py-3 font-bold text-sm transition-colors"
              >
                <MessageCircle size={17} />

                <span>Get a Quote on WhatsApp</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}