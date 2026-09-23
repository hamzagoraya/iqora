import React from 'react';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

const LINK_ICONS = {
  email: Mail,
  phone: Phone,
};

export default function TeamMemberCard({ member }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl dark:border-slate-800 dark:bg-dark-surface">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-dark-bg">
        <img
          src={member.image}
          alt={`${member.name}, ${member.role}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
          {member.role}
        </p>
        <h3 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white">
          {member.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {member.description}
        </p>

        {member.links?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-5 dark:border-slate-800">
            {member.links.map((link) => {
              const Icon = LINK_ICONS[link.type] || ArrowUpRight;

              return (
                <a
                  key={`${member.id}-${link.type}`}
                  href={link.href}
                  aria-label={link.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-primary hover:text-white dark:bg-dark-bg dark:text-slate-200"
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
}
