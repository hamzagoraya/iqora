import React, { useEffect, useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import FaqAccordion from '../components/shared/FaqAccordion';
import { BRAND } from '../data/siteData';
import { BASE_URL } from '../config';

const PAGE_TITLE = 'Carpet & Upholstery Cleaning FAQs | IQORA Cleaning Services';
const PAGE_DESCRIPTION = "Answers about IQORA's carpet, upholstery, and tile cleaning: pricing, payment, scheduling, what to expect on service day, and caring for carpet afterward.";
const FAQ_SECTIONS = [
  {
    group: 'General',
    items: [
      { q: 'What does IQORA Cleaning Services do?', a: 'IQORA Cleaning Services cleans carpets, upholstery, and tile and grout in homes across Los Angeles, Orange County, the Inland Empire, and Thousand Oaks. We also clean area rugs, mattresses, leather couches, and curtains, and apply Scotchgard fabric protection.' },
      { q: 'Who owns IQORA Cleaning Services?', a: 'IQORA Cleaning Services LLC was founded in 2025 by Gurbaj Singh and is locally owned and based in Los Angeles. As an owner-led business, the same person who sets our prices and standards is responsible for how every cleaning is carried out.' },
      { q: 'What makes IQORA different from other carpet cleaners?', a: 'Our prices are posted publicly and confirmed before any work starts, so there are no surprise add-ons at the door. We use portable extraction that reaches upper-floor units, and we tell you honestly which stains will come out and which will only fade.' },
      { q: 'Is IQORA licensed and insured?', a: 'IQORA Cleaning Services LLC is a registered California limited liability company. [CONFIRM: add insurance details once the client confirms coverage, e.g. "We carry general liability insurance."]' },
      { q: 'Is steam cleaning the same as hot water extraction?', a: 'Yes, in everyday use. "Steam cleaning" is the common name for hot water extraction, where heated water and cleaning solution are sprayed into the carpet and then pulled back out with strong suction. No actual steam is used on your carpet.' },
      { q: 'Why hire a professional instead of renting a machine?', a: 'Rental machines usually have weaker suction, so they leave more water and soap behind. That residue attracts new dirt and slows drying. Professional equipment rinses more thoroughly, and our before-and-after cleaning results show the difference.' },
    ],
  },
  {
    group: 'Pricing & Payment',
    items: [
      { q: 'Do you charge by the hour or by the job?', a: 'Never by the hour. Carpet is priced per room, sofas per seat, and mattresses, rugs, and curtains by size, so the time a job takes never changes your bill. You know the total before we start, whether the cleaning takes one hour or three.' },
      { q: 'What payment methods do you accept?', a: '[CONFIRM: list the payment methods the client accepts, e.g. cash, card, Zelle, Venmo, and when payment is due, e.g. after the cleaning is finished.]' },
      { q: 'Can the price change after you arrive?', a: 'Only if the job is different from what was described, such as an extra room or a second sofa, and never without your approval. We confirm the total with you before any cleaning starts, and that confirmed price is the amount you pay at the end.' },
      { q: 'Is carpet cleaning cheaper than replacing carpet?', a: 'By a wide margin. Replacing carpet in a single room often costs several hundred dollars or more, while cleaning costs $40 per room with a $120 minimum. Our guide to the cost of carpet cleaning in Los Angeles compares the options in more detail.' },
    ],
  },
  {
    group: 'Scheduling & Service Day',
    items: [
      { q: 'How soon can I get an appointment?', a: 'It depends on your city and how busy the schedule is. Homes close to our Los Angeles base are usually easier to fit in quickly, while other cities in our service area are scheduled in advance. Call or WhatsApp +1 (323) 916-8039 for the next open time.' },
      { q: 'How long does a cleaning appointment take?', a: "Carpet in two or three rooms usually takes about one to two hours. A full home with stairs, a sofa, and a rug can take three hours or more. We'll give you a time estimate when we confirm your booking, so you can plan your day. [CONFIRM these time ranges with the client.]" },
      { q: 'Do you need water or electricity from my home?', a: "Yes. Our portable extraction machines plug into standard household outlets and are filled with water from a nearby tap. We'll ask where the closest outlet and sink are when we arrive, and we protect floors and walls as we set up." },
      { q: 'Can I walk on my carpet right after cleaning?', a: "Yes, but carefully. Walk in clean socks rather than bare feet or outdoor shoes while it's damp, since shoes can transfer dirt and bare feet leave oils behind. Damp carpet can also be slippery where it meets tile or hardwood floors." },
      { q: 'Should pets and kids stay away during the cleaning?', a: "It's safest to keep them in another room while we work. Hoses, cords, and damp floors are easy to trip over, and curious pets tend to walk through freshly treated areas. Once we're finished, keep them off wet carpet until it has mostly dried." },
      { q: 'Will my home smell like chemicals after cleaning?', a: 'No. We use low-residue, eco-friendly products and rinse them out during extraction. You may notice a slight damp smell while carpet dries, which fades as the fibers dry. Good airflow from fans, open windows, or AC helps it clear faster.' },
    ],
  },
  {
    group: 'Guarantees & After-Care',
    items: [
      { q: 'Do you offer a satisfaction guarantee?', a: '[CONFIRM: describe the client\'s actual policy, e.g. "If a treated spot returns within 7 days, we\'ll come back and re-treat it free." Remove this question if there\'s no formal guarantee.]' },
      { q: 'How can I keep my carpets cleaner between visits?', a: 'Vacuum high-traffic areas at least twice a week, use doormats at every entrance, and ask family and guests to take shoes off indoors. Blot spills immediately instead of rubbing them. These habits keep dirt from grinding into fibers and wearing them down.' },
      { q: 'What should I do if I spill on freshly cleaned carpet?', a: "Blot it right away with a clean white cloth, working from the outside in, and don't rub. Dab a little cold water on the spot and blot again. Avoid store-bought spot sprays, which can leave residue, and send us a photo on WhatsApp if it won't lift." },
      { q: 'Why does carpet feel stiff or sticky after DIY cleaning?', a: 'That feeling comes from leftover soap. Most home and rental machines put down more shampoo than they can pull back out, and the residue dries stiff and sticky, attracting dirt faster. Professional extraction rinses out old residue along with the soil.' },
      { q: 'How should I care for upholstery after cleaning?', a: "Let cushions and seats dry fully before sitting on them, usually a few hours with good airflow. Don't flip or rearrange cushions while damp, and keep pets off until it's dry. Rotating cushions every few weeks afterward helps them wear evenly." },
      { q: 'When can I put furniture back on cleaned carpet?', a: 'Wait until the carpet is fully dry, usually 6 to 12 hours. If you need to move furniture back sooner, place plastic tabs or foil squares under the legs, since wood stains and metal rust can transfer onto damp carpet and leave marks.' },
    ],
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/faq/#webpage`,
      url: `${BASE_URL}/faq/`,
      name: 'Carpet & Upholstery Cleaning FAQs | IQORA Cleaning Services',
      description: 'Answers about IQORA\'s carpet, upholstery, and tile cleaning: pricing, payment, scheduling, what to expect on service day, and caring for carpet afterward.',
      isPartOf: { '@id': `${BASE_URL}/#website` },
      about: { '@id': `${BASE_URL}/#organization` },
      breadcrumb: { '@id': `${BASE_URL}/faq/#breadcrumb` },
      inLanguage: 'en-US',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does IQORA Cleaning Services do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'IQORA Cleaning Services cleans carpets, upholstery, and tile and grout in homes across Los Angeles, Orange County, the Inland Empire, and Thousand Oaks. We also clean area rugs, mattresses, leather couches, and curtains, and apply Scotchgard fabric protection.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who owns IQORA Cleaning Services?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'IQORA Cleaning Services LLC was founded in 2025 by Gurbaj Singh and is locally owned and based in Los Angeles. As an owner-led business, the same person who sets our prices and standards is responsible for how every cleaning is carried out.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes IQORA different from other carpet cleaners?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our prices are posted publicly and confirmed before any work starts, so there are no surprise add-ons at the door. We use portable extraction that reaches upper-floor units, and we tell you honestly which stains will come out and which will only fade.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is steam cleaning the same as hot water extraction?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, in everyday use. "Steam cleaning" is the common name for hot water extraction, where heated water and cleaning solution are sprayed into the carpet and then pulled back out with strong suction. No actual steam is used on your carpet.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why hire a professional instead of renting a machine?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rental machines usually have weaker suction, so they leave more water and soap behind. That residue attracts new dirt and slows drying. Professional equipment rinses more thoroughly, and our before-and-after cleaning results show the difference.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you charge by the hour or by the job?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Never by the hour. Carpet is priced per room, sofas per seat, and mattresses, rugs, and curtains by size, so the time a job takes never changes your bill. You know the total before we start, whether the cleaning takes one hour or three.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can the price change after you arrive?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Only if the job is different from what was described, such as an extra room or a second sofa, and never without your approval. We confirm the total with you before any cleaning starts, and that confirmed price is the amount you pay at the end.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is carpet cleaning cheaper than replacing carpet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'By a wide margin. Replacing carpet in a single room often costs several hundred dollars or more, while cleaning costs $40 per room with a $120 minimum. Our guide to the cost of carpet cleaning in Los Angeles compares the options in more detail.',
          },
        },
        {
          '@type': 'Question',
          name: 'How soon can I get an appointment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It depends on your city and how busy the schedule is. Homes close to our Los Angeles base are usually easier to fit in quickly, while other cities in our service area are scheduled in advance. Call or WhatsApp +1 (323) 916-8039 for the next open time.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you need water or electricity from my home?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Our portable extraction machines plug into standard household outlets and are filled with water from a nearby tap. We\'ll ask where the closest outlet and sink are when we arrive, and we protect floors and walls as we set up.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I walk on my carpet right after cleaning?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, but carefully. Walk in clean socks rather than bare feet or outdoor shoes while it\'s damp, since shoes can transfer dirt and bare feet leave oils behind. Damp carpet can also be slippery where it meets tile or hardwood floors.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should pets and kids stay away during the cleaning?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It\'s safest to keep them in another room while we work. Hoses, cords, and damp floors are easy to trip over, and curious pets tend to walk through freshly treated areas. Once we\'re finished, keep them off wet carpet until it has mostly dried.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will my home smell like chemicals after cleaning?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. We use low-residue, eco-friendly products and rinse them out during extraction. You may notice a slight damp smell while carpet dries, which fades as the fibers dry. Good airflow from fans, open windows, or AC helps it clear faster.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I keep my carpets cleaner between visits?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vacuum high-traffic areas at least twice a week, use doormats at every entrance, and ask family and guests to take shoes off indoors. Blot spills immediately instead of rubbing them. These habits keep dirt from grinding into fibers and wearing them down.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I do if I spill on freshly cleaned carpet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Blot it right away with a clean white cloth, working from the outside in, and don\'t rub. Dab a little cold water on the spot and blot again. Avoid store-bought spot sprays, which can leave residue, and send us a photo on WhatsApp if it won\'t lift.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does carpet feel stiff or sticky after DIY cleaning?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'That feeling comes from leftover soap. Most home and rental machines put down more shampoo than they can pull back out, and the residue dries stiff and sticky, attracting dirt faster. Professional extraction rinses out old residue along with the soil.',
          },
        },
        {
          '@type': 'Question',
          name: 'How should I care for upholstery after cleaning?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Let cushions and seats dry fully before sitting on them, usually a few hours with good airflow. Don\'t flip or rearrange cushions while damp, and keep pets off until it\'s dry. Rotating cushions every few weeks afterward helps them wear evenly.',
          },
        },
        {
          '@type': 'Question',
          name: 'When can I put furniture back on cleaned carpet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wait until the carpet is fully dry, usually 6 to 12 hours. If you need to move furniture back sooner, place plastic tabs or foil squares under the legs, since wood stains and metal rust can transfer onto damp carpet and leave marks.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${BASE_URL}/faq/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${BASE_URL}/faq/` },
      ],
    },
    {
      '@type': ['LocalBusiness', 'Organization'],
      '@id': `${BASE_URL}/#organization`,
      name: 'IQORA Cleaning Services',
      legalName: 'IQORA Cleaning Services LLC',
      url: `${BASE_URL}/`,
      logo: `${BASE_URL}/images/iqora-logo.png`,
      telephone: '+1-323-916-8039',
      email: 'iqoracleaningservices@gmail.com',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'North Hollywood',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: `${BASE_URL}/`,
      name: 'IQORA Cleaning Services',
      publisher: { '@id': `${BASE_URL}/#organization` },
    },
  ],
};

export default function FAQPage({ onNavigate, onOpenQuote }) {
  const [activeGroup, setActiveGroup] = useState('All');

  useEffect(() => {
    document.title = PAGE_TITLE;
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.name = 'description';
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.content = PAGE_DESCRIPTION;
  }, []);

  const groups = ['All', ...FAQ_SECTIONS.map(({ group }) => group)];
  const visibleSections = activeGroup === 'All'
    ? FAQ_SECTIONS
    : FAQ_SECTIONS.filter(({ group }) => group === activeGroup);

  const navigate = (event, path) => {
    if (onNavigate) {
      event.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden bg-navy py-20 text-center text-white lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="badge-tag mx-auto mb-4">Help center</div>
          <h1 className="mb-4 text-3xl font-heading font-extrabold text-white sm:text-4xl lg:text-5xl">Carpet &amp; Upholstery Cleaning FAQs</h1>
          <p className="mx-auto mb-6 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Straight answers about how IQORA works, from pricing and payment to what happens on the day of your cleaning and how to care for carpet and furniture afterward. Can't find your question? Call or send us a WhatsApp message and we'll answer it directly.
          </p>
          <nav aria-label="Breadcrumb" className="mb-7 flex items-center justify-center gap-2 text-sm text-slate-300">
            <a href="/" onClick={(event) => navigate(event, '/')} className="hover:text-white">Home</a>
            <span aria-hidden="true">→</span>
            <span aria-current="page" className="font-semibold text-white">FAQ</span>
          </nav>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button type="button" onClick={onOpenQuote} className="btn-primary-tw w-full sm:w-auto"><span>Get a Free Quote</span><ArrowRight size={16} /></button>
            <a href={BRAND.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-green-600 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-green-500 sm:w-auto">Get a Quote on WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-dark-bg lg:py-20" data-reveal>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap justify-center gap-2.5" role="group" aria-label="Filter FAQs by topic">
            {groups.map((group) => (
              <button
                key={group}
                type="button"
                aria-pressed={activeGroup === group}
                onClick={() => setActiveGroup(group)}
                className={`rounded-full border px-4 py-2 text-xs font-bold transition-colors ${activeGroup === group
                  ? 'border-primary bg-primary text-slate-950'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-primary hover:text-primary dark:border-slate-800 dark:bg-dark-card dark:text-slate-300'
                }`}
              >
                {group}
              </button>
            ))}
          </div>

          <div className="space-y-12">
            {visibleSections.map((section) => (
              <section key={section.group} aria-labelledby={`faq-${section.group.replaceAll(' ', '-').replaceAll('&', 'and')}`}>
                <h2 id={`faq-${section.group.replaceAll(' ', '-').replaceAll('&', 'and')}`} className="mb-4 text-2xl font-heading font-extrabold text-slate-900 dark:text-white">{section.group === 'General' ? 'General Questions' : section.group}</h2>
                <FaqAccordion faqs={section.items} />
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white py-14 text-center dark:border-slate-800 dark:bg-dark-surface" data-reveal>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-heading font-extrabold text-slate-900 dark:text-white">Still Have a Question?</h2>
          <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Call or send a WhatsApp message with anything this page doesn't cover, from a specific stain to a tricky piece of furniture. Photos help us give you a faster, more accurate answer.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="tel:+13239168039" className="btn-primary-tw w-full sm:w-auto"><Phone size={16} /><span>+1 (323) 916-8039</span></a>
            <a href={`${BASE_URL}/our-reviews/`} onClick={(event) => navigate(event, '/our-reviews')} className="btn-outline-tw w-full sm:w-auto">Read Customer Reviews</a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary py-16 lg:py-20" data-reveal>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-heading font-extrabold text-white sm:text-4xl">Ready for Cleaner Carpets and Furniture?</h2>
          <p className="mb-8 text-sm leading-relaxed text-slate-300 sm:text-base">Tell us what needs cleaning and we'll confirm your exact price before any work begins, with no hidden fees or hourly charges.</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button type="button" onClick={onOpenQuote} className="btn-primary-tw w-full sm:w-auto">Get My Free Quote</button>
            <a href={BRAND.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-green-600 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-green-500 sm:w-auto">Get a Quote on WhatsApp</a>
            <a href="tel:+13239168039" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/15 sm:w-auto"><Phone size={16} />+1 (323) 916-8039</a>
          </div>
          <p className="mt-8 text-sm font-semibold text-slate-300">Upfront, posted prices · No hidden fees · 20 cities served</p>
        </div>
      </section>
    </div>
  );
}
