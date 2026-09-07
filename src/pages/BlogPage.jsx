import React from 'react';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import CTABand from '../components/shared/CTABand';
import { BLOG_POSTS } from '../data/siteData';

export default function BlogPage({ onNavigate, onOpenQuote }) {
  return (
    <div>
      <PageHero
        badge="IQORA Blog"
        title="Cleaning Tips &amp; Local Price Guides"
        subtitle="Practical answers from the field: what services really cost in the Valley, how often to clean what, and how to keep your home healthier between visits."
        onNavigate={onNavigate}
        crumbs={[{ label: 'Blog' }]}
      />

      {/* Posts grid */}
      <section className="py-16 lg:py-20 bg-slate-50 dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {BLOG_POSTS.length === 0 && (
            <p className="text-center text-slate-500 dark:text-slate-400 text-sm">
              New articles are on the way — check back soon.
            </p>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <button
                key={post.slug}
                onClick={() => onNavigate(`blog/${post.slug}`)}
                className="group text-left bg-white dark:bg-dark-card rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-semibold mb-3">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={13} className="text-primary" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} className="text-primary" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 flex-grow">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight size={15} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <CTABand onOpenQuote={onOpenQuote} />
    </div>
  );
}
