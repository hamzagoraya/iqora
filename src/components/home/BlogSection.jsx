import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../../data/siteData';

export default function BlogSection({ onNavigate }) {
  const posts = BLOG_POSTS.map((p) => ({
    id: p.slug,
    slug: p.slug,
    title: p.title,
    date: p.date,
    readTime: p.readTime,
    category: p.category || 'Cleaning Guide',
    image: p.image,
    snippet: p.excerpt
  }));

  return (
    <section className="py-16 lg:py-24 bg-slate-50 dark:bg-dark-bg/60" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="badge-tag">Our Blog</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
              Our most recent posts
            </h2>
          </div>

          <button 
            onClick={() => onNavigate && onNavigate('/blog')}
            className="btn-primary-tw self-start md:self-auto shrink-0"
          >
            <span>View All Posts</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-reveal-stagger>
          {posts.map((post) => (
            <button
              key={post.id}
              onClick={() => onNavigate && onNavigate(`/blog/${post.slug}`)}
              className="text-left bg-white dark:bg-dark-surface border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                <span className="absolute top-4 left-4 bg-primary text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              <div className="p-7 space-y-3">
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} className="text-primary" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {post.snippet}
                </p>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-primary group-hover:gap-2.5 transition-all">
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
