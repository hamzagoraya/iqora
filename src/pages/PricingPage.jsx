import React from 'react';
import { ArrowRight, CheckCircle2, Info } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import CTABand from '../components/shared/CTABand';
import { SERVICES, SPECIALTY_SERVICES, getServicePath, getSpecialtyPath } from '../data/siteData';

export default function PricingPage({ onNavigate, onOpenQuote }) {
  return (
    <div>
      <PageHero
        badge="Transparent Pricing"
        title="Cleaning Services Pricing"
        subtitle="Real price ranges for every IQORA service. Your exact quote is confirmed on-site before any work begins — never hourly, never a surprise."
        onNavigate={onNavigate}
        crumbs={[{ label: 'Pricing' }]}
      />

      {/* Main services pricing */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-dark-bg" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge-tag mb-4">Main Services</div>
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Carpet, Upholstery &amp; Tile Pricing
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              The same transparent pricing applies in every city we serve — North Hollywood, Burbank, Glendale, and beyond.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  className="bg-white dark:bg-dark-card rounded-2xl border border-slate-100 dark:border-slate-800 shadow-card overflow-hidden flex flex-col"
                >
                  <div className="bg-secondary px-6 py-5 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-white">{s.name}</h3>
                      <p className="text-xs font-bold text-primary">{s.priceSummary}</p>
                    </div>
                  </div>
                  <ul className="divide-y divide-slate-100 dark:divide-slate-800 flex-grow">
                    {s.pricingRows.map((row) => (
                      <li key={row.item} className="px-6 py-3 flex items-center justify-between gap-4 text-sm">
                        <span className="text-slate-600 dark:text-slate-300">{row.item}</span>
                        <span className="font-bold text-slate-900 dark:text-white whitespace-nowrap">{row.price}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-6 pt-4">
                    <button
                      onClick={() => onNavigate(getServicePath(s.id))}
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
                    >
                      Full service details
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialty pricing */}
      <section className="py-16 lg:py-20 bg-white dark:bg-dark-surface" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge-tag mb-4">Specialty Services</div>
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
              Specialty Service Pricing
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIALTY_SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => onNavigate(getSpecialtyPath(s.id))}
                  className="text-left bg-slate-50 dark:bg-dark-card rounded-2xl p-6 border border-slate-100 dark:border-slate-800 hover:border-primary hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-primary-light dark:bg-primary/15 flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-extrabold text-slate-900 dark:text-white">{s.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {s.pricingRows.slice(0, 3).map((row) => (
                      <li key={row.item} className="flex items-center justify-between gap-3 text-xs">
                        <span className="text-slate-600 dark:text-slate-300">{row.item}</span>
                        <span className="font-bold text-slate-900 dark:text-white whitespace-nowrap">{row.price}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-primary mt-4 hover:gap-3 transition-all">
                    View details
                    <ArrowRight size={15} />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* What affects price */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-dark-bg" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="badge-tag mb-4">Good to Know</div>
            <h2 className="text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              What affects your final price?
            </h2>
            <ul className="space-y-4">
              {[
                { title: 'Size & room count', text: 'The biggest factor — though whole-home packages reduce the per-room rate.' },
                { title: 'Soil level & condition', text: 'Heavily soiled or long-uncleaned areas need extra pre-treatment and passes.' },
                { title: 'Pet contamination', text: 'Urine enzyme treatment is quoted separately because it requires padding-level work.' },
                { title: 'Add-on treatments', text: 'Protector, deodorizer, and grout sealing are optional and quoted upfront.' },
              ].map((item) => (
                <li key={item.title} className="flex gap-3.5">
                  <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-0.5">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-dark-card rounded-2xl border-2 border-primary/30 p-8 shadow-card">
            <div className="flex items-center gap-2.5 mb-4">
              <Info size={20} className="text-primary" />
              <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">Our pricing promise</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              We quote by the job, not by the hour. After a free on-site inspection you approve the exact price — and
              that’s what you pay. If a spot returns within 7 days, we re-treat it free.
            </p>
            <ul className="space-y-2.5 mb-8">
              {['Free on-site estimates', 'Firm quotes before work starts', 'No hidden fees or upsells', '7-day re-treat guarantee'].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  <CheckCircle2 size={17} className="text-primary shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
            <button onClick={onOpenQuote} className="btn-primary-tw w-full">
              <span>Get My Free Quote</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <CTABand onOpenQuote={onOpenQuote} />
    </div>
  );
}
