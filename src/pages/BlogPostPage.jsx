import React from 'react';
import { CalendarDays, Clock, ArrowRight, User, Tag } from 'lucide-react';
import CTABand from '../components/shared/CTABand';

const fill = (text, city) => (text ? text.replace(/\{city\}/g, city) : text);

export default function BlogPostPage({ post, onNavigate, onOpenQuote }) {
  if (!post) return null;

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-navy py-20 lg:py-24 text-white overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/85 to-navy/95"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 hero-content-stagger">
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 font-semibold mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30">
              <Tag size={13} />
              Price Guide
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays size={13} className="text-primary" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-primary" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5">
              <User size={13} className="text-primary" />
              IQORA Team
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16 lg:py-20 bg-white dark:bg-dark-surface" data-reveal>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed border-l-4 border-primary pl-5 mb-10">
            {post.excerpt}
          </p>

          {post.content.map((block, i) => {
            if (block.h2) {
              return (
                <h2
                  key={i}
                  className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white tracking-tight mt-12 mb-5"
                >
                  {fill(block.h2, 'North Hollywood')}
                </h2>
              );
            }
            if (block.p) {
              return (
                <p key={i} className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {fill(block.p, 'North Hollywood')}
                </p>
              );
            }
            if (block.ul) {
              return (
                <ul key={i} className="space-y-3 mb-6">
                  {block.ul.map((item, j) => (
                    <li key={j} className="flex gap-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2.5"></span>
                      {fill(item, 'North Hollywood')}
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.table) {
              return (
                <div
                  key={i}
                  className="rounded-2xl overflow-x-auto border border-slate-100 dark:border-slate-800 shadow-card mb-8"
                >
                  <table className="w-full min-w-[32rem] text-sm">
                    <thead>
                      <tr className="bg-secondary text-white text-left">
                        {block.table.head.map((h, j) => (
                          <th key={j} className="px-5 py-3.5 font-heading font-bold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {block.table.rows.map((row, j) => (
                        <tr key={j} className="bg-white dark:bg-dark-card">
                          {row.map((cell, k) => (
                            <td
                              key={k}
                              className={`px-5 py-3.5 ${
                                k === 0
                                  ? 'text-slate-600 dark:text-slate-300'
                                  : 'font-bold text-slate-900 dark:text-white text-right'
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            return null;
          })}

          {/* Inline CTA */}
          <div className="mt-12 rounded-2xl bg-primary-light dark:bg-primary/10 border border-primary/30 p-7 sm:p-8 text-center">
            <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white mb-2">
              Want an exact price for your home?
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-5">
              Book a free on-site estimate — we confirm your firm quote before any work begins.
            </p>
            <button onClick={onOpenQuote} className="btn-primary-tw">
              <span>Get My Free Quote</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Back to blog */}
          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('/blog')}
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
            >
              ← Back to all articles
            </button>
          </div>
        </div>
      </article>

      <CTABand onOpenQuote={onOpenQuote} />
    </div>
  );
}
