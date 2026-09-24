import React, { useEffect } from 'react';
import { Clock3, HeartHandshake, ScanSearch, ShieldCheck, UsersRound } from 'lucide-react';
import PageHero from '../components/shared/PageHero';
import CTABand from '../components/shared/CTABand';
import TeamMemberCard from '../components/shared/TeamMemberCard';
import { TEAM_MEMBERS } from '../data/teamData';

const TEAM_VALUES = [
  {
    icon: ShieldCheck,
    title: 'Professional & Trained',
    text: 'Every team member is trained in safe, effective methods and the standards behind a consistently excellent clean.',
  },
  {
    icon: Clock3,
    title: 'Reliable & Punctual',
    text: 'We respect your schedule with clear arrival windows, prepared crews, and dependable communication from start to finish.',
  },
  {
    icon: ScanSearch,
    title: 'Detail-Oriented',
    text: 'We look beyond the obvious, treating high-traffic areas, delicate materials, and the small details that change a room.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer-Focused',
    text: 'Your priorities guide the work, and our satisfaction guarantee gives you confidence in the finished result.',
  },
];

export default function OurTeamPage({ onOpenQuote, onNavigate }) {
  useEffect(() => {
    document.title = 'Our Team | IQORA Cleaning Services';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Meet the professional cleaning team behind IQORA Cleaning Services.';
  }, []);

  return (
    <div>
      <PageHero
        badge="The IQORA Team"
        title="Our Team"
        subtitle="IQORA is supported by a professional, reliable, and trained cleaning team dedicated to making every space feel its best."
        currentPage="Our Team"
        onOpenQuote={onOpenQuote}
        onNavigate={onNavigate}
        crumbs={[{ label: 'Our Team' }]}
      />

      <section className="bg-slate-50 py-16 dark:bg-dark-bg lg:py-24" data-reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="badge-tag mb-4">
              <UsersRound size={14} />
              <span>People You Can Trust</span>
            </div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              The people behind the clean
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              Our team combines technical know-how with genuine care for your home, workplace, and the people who use it every day.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
            {TEAM_MEMBERS.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-dark-surface lg:py-24" data-reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <div className="badge-tag mb-4">Why Our Team</div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              A better clean starts with the right people.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
            {TEAM_VALUES.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-dark-bg"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={21} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand
        title="Ready for a Cleaner Space?"
        text="Meet the team that brings professional care, reliable service, and a sharper standard to every appointment."
        buttonLabel="Get a Free Quote"
        onOpenQuote={onOpenQuote}
      />
    </div>
  );
}
