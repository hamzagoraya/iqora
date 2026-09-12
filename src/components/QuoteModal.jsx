import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { X, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { SERVICES, SPECIALTY_SERVICES } from '../data/siteData';

const SERVICE_OPTIONS = [...SERVICES, ...SPECIALTY_SERVICES];

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: SERVICES[0].id,
    date: '',
  });

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setIsSending(true);

    const selectedService = SERVICE_OPTIONS.find(
      (service) => service.id === formData.service
    );

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      service: selectedService?.name || formData.service,
      date: formData.date || 'Not specified',
    };

    try {
      await emailjs.send(
        'service_wd4koe5',
        'template_nkdqs8m',
        templateParams,
        {
          publicKey: 'XqOq23Ovq03fK3eG',
        }
      );

      setSubmitted(true);
    } catch (error) {
      console.error('Email sending failed:', error);

      setError(
        'Sorry, your request could not be sent. Please try again or contact us directly.'
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setError('');
    setIsSending(false);
    onClose();
  };

  return (
    <div
      onClick={handleClose}
      role="presentation"
      className="fixed inset-0 z-[100] bg-slate-950/65 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full max-h-[calc(100dvh-2rem)] overflow-y-auto shadow-2xl relative animate-slide-up"
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
              Thank you! We'll call{' '}
              <strong>{formData.phone}</strong> shortly to confirm your free
              quote and schedule.
            </p>

            <button
              onClick={handleClose}
              className="btn-primary-tw mt-4"
            >
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

              <h2 id="quote-modal-title" className="text-2xl font-heading font-bold text-slate-900 dark:text-white">
                Get a Free Instant Quote
              </h2>

              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Tell us about the job and we'll confirm a firm price before any
                work begins.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="quote-name" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Your Name *
                </label>

                <input
                  type="text"
                  id="quote-name"
                  required
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="quote-phone" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  id="quote-phone"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="quote-service" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Cleaning Service
                </label>

                <select
                  id="quote-service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      service: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all cursor-pointer"
                >
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="quote-date" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Preferred Date
                </label>

                <input
                  type="date"
                  id="quote-date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      date: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="btn-primary-tw w-full justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>{isSending ? 'Sending...' : 'Submit Request'}</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}