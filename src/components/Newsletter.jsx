import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-12 lg:py-16" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-secondary via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border border-slate-800">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Stay Updated</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-sm text-slate-400 max-w-lg">
              Get exclusive cleaning tips, seasonal discounts, and special offers delivered right to your inbox.
            </p>
          </div>

          <div>
            {subscribed ? (
              <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400 text-sm font-semibold">
                <CheckCircle2 size={22} className="shrink-0" />
                <span>Subscribed! Check your email for special offer details.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-primary transition-all"
                  />
                </div>
                <button type="submit" className="btn-secondary-tw bg-primary hover:bg-primary-hover text-white shrink-0">
                  <span>Subscribe</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
