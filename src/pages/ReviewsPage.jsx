import React, { useEffect } from 'react';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { BRAND, CITIES, REVIEWS, getMainPagePath, getServiceMainPath, getSpecialtyPath } from '../data/siteData';

const PAGE_TITLE = 'IQORA Reviews | Carpet & Upholstery Cleaning Los Angeles';
const PAGE_DESCRIPTION = 'Read customer reviews of IQORA Cleaning Services for carpet, upholstery, tile, rug, and mattress cleaning across Los Angeles, Orange County, and Inland Empire.';
const WHATSAPP_HREF = 'https://wa.me/13239168039?text=Hello%20IQORA%20Cleaning%20Services%2C%20I%20would%20like%20to%20get%20a%20cleaning%20quote.';

const REVIEW_FAQS = [
  { question: 'Are these reviews from real customers?', answer: 'Every review on this page comes from a real IQORA customer and is shown with their first name, city, and the service they booked. We copy reviews from Google and direct customer feedback without rewriting them, so what you read is what they said.' },
  { question: 'How can I leave a review?', answer: "After your cleaning, you can leave a star rating and a few words on our Google Business Profile, and we're happy to text you the direct link. Mentioning the service you booked and your city helps other homeowners find reviews relevant to them." },
  { question: 'Do you offer anything in exchange for reviews?', answer: "No. We never offer discounts, gifts, or free services in exchange for reviews, and we don't ask only happy customers to post. Paying for reviews goes against Google's rules and federal law, and it would make every review here less useful to you." },
  { question: 'Do you edit or remove reviews?', answer: "No. Reviews are shown exactly as customers wrote them, apart from removing personal details such as full last names, phone numbers, or street addresses. We don't correct wording, trim criticism, or combine several reviews into one." },
  { question: 'Do you respond to negative reviews?', answer: "Yes. We read every review, including critical ones, and reply on Google when there's something to address. If a customer points out a problem, we contact them directly to understand what happened and see what we can do to put it right." },
  { question: "What should I do if I'm not happy with my cleaning?", answer: "Contact us as soon as possible, ideally within a day or two, and tell us what isn't right. Some issues, like a spot that resurfaces as carpet dries, are easier to address quickly. We'd much rather fix a problem than have you live with it." },
  { question: 'Can I find reviews from my city?', answer: "Yes. Each review shows the customer's city, so you can look for feedback from homeowners near you. We serve 20 cities across Los Angeles County, Orange County, the Inland Empire, and Thousand Oaks, and new reviews are added as jobs are completed." },
  { question: 'Can I see photos of your work?', answer: "Yes. Before-and-after photos from real jobs show what carpet, upholstery, and tile cleaning can realistically achieve, including how much older stains can fade. They're a useful companion to written reviews when you're deciding whether to book." },
  { question: 'How do you use customer feedback?', answer: 'Customer feedback shapes how we work. Comments about arrival times, communication, drying, and results help us adjust how we schedule, explain the process, and prepare each visit, so the next customer gets a smoother experience than the last.' },
  { question: 'What should I look for when reading cleaning reviews?', answer: "The most useful reviews mention the service, the condition of the item before cleaning, and how it looked afterward. Look for details over star counts alone, and pay attention to how a company responds when something didn't go perfectly." },
];

const reviewSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://iqoracleaningservices.com/our-reviews/#webpage',
      url: 'https://iqoracleaningservices.com/our-reviews/',
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      isPartOf: { '@id': 'https://iqoracleaningservices.com/#website' },
      about: { '@id': 'https://iqoracleaningservices.com/#organization' },
      breadcrumb: { '@id': 'https://iqoracleaningservices.com/our-reviews/#breadcrumb' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://iqoracleaningservices.com/our-reviews/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://iqoracleaningservices.com/' },
        { '@type': 'ListItem', position: 2, name: 'Our Reviews', item: 'https://iqoracleaningservices.com/our-reviews/' },
      ],
    },
    {
      '@type': ['LocalBusiness', 'Organization'],
      '@id': 'https://iqoracleaningservices.com/#organization',
      name: 'IQORA Cleaning Services',
      legalName: 'IQORA Cleaning Services LLC',
      url: 'https://iqoracleaningservices.com/',
      logo: 'https://iqoracleaningservices.com/images/iqora-logo.png',
      telephone: '+1-323-916-8039',
      email: 'iqoracleaningservices@gmail.com',
      priceRange: '$$',
      address: { '@type': 'PostalAddress', addressLocality: 'North Hollywood', addressRegion: 'CA', addressCountry: 'US' },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://iqoracleaningservices.com/#website',
      url: 'https://iqoracleaningservices.com/',
      name: 'IQORA Cleaning Services',
      publisher: { '@id': 'https://iqoracleaningservices.com/#organization' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://iqoracleaningservices.com/our-reviews/#faq',
      isPartOf: { '@id': 'https://iqoracleaningservices.com/our-reviews/#webpage' },
      mainEntity: REVIEW_FAQS.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

const reviewServicePaths = {
  'Carpet Cleaning': () => getServiceMainPath('carpet-cleaning'),
  'Upholstery Cleaning': () => getServiceMainPath('upholstery-cleaning'),
  'Tile & Grout Cleaning': () => getServiceMainPath('tile-and-grout-cleaning'),
  'Area Rug Cleaning': () => getSpecialtyPath('area-rug-cleaning'),
  'Mattress Cleaning': () => getSpecialtyPath('mattress-cleaning'),
  'Leather Couch Cleaning': () => getSpecialtyPath('leather-couch-cleaning'),
  'Scotchgard Protection': () => getSpecialtyPath('scotchgard-protection'),
  'Curtain Cleaning': () => getSpecialtyPath('curtain-cleaning'),
};

function goTo(event, path, onNavigate) {
  if (onNavigate) {
    event.preventDefault();
    onNavigate(path);
  }
}

function WhatsAppButton() {
  return (
    <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-green-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-green-500 sm:w-auto">
      Get a Quote on WhatsApp
    </a>
  );
}

export default function ReviewsPage({ onNavigate, onOpenQuote }) {
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

  const serviceCities = new Set(CITIES.map(({ name }) => name));
  const eligibleReviews = REVIEWS.filter(
    (review) => serviceCities.has(review.city) && reviewServicePaths[review.service]
  );

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <section className="relative overflow-hidden bg-navy py-20 text-center text-white lg:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-20" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="badge-tag mx-auto mb-4">Our reviews</div>
          <h1 className="mb-4 text-3xl font-heading font-extrabold text-white sm:text-4xl lg:text-5xl">IQORA Cleaning Services Reviews</h1>
          <p className="mx-auto mb-6 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Read what homeowners across Los Angeles, Orange County, and the Inland Empire say about their carpet, upholstery, and tile cleaning with IQORA. Each review shows the customer's city and the service they booked, so you can find feedback from people with homes and cleaning needs like yours.
          </p>
          <nav aria-label="Breadcrumb" className="mb-7 flex items-center justify-center gap-2 text-sm text-slate-300">
            <a href="/" onClick={(event) => goTo(event, getMainPagePath('home'), onNavigate)} className="hover:text-white">Home</a>
            <span aria-hidden="true">→</span>
            <span aria-current="page" className="font-semibold text-white">Our Reviews</span>
          </nav>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button type="button" onClick={onOpenQuote} className="btn-primary-tw w-full sm:w-auto"><span>Get a Free Quote</span><ArrowRight size={16} /></button>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-12 dark:border-slate-800 dark:bg-dark-surface" aria-label="Review and service statistics" data-reveal>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 text-center sm:grid-cols-4 sm:px-6 lg:px-8" data-reveal-stagger>
          <div><p className="font-heading text-4xl font-extrabold text-slate-900 dark:text-white">{BRAND.rating}</p><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Average Google rating</p></div>
          <div><p className="font-heading text-4xl font-extrabold text-slate-900 dark:text-white">{BRAND.reviewCount}</p><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Customer reviews</p></div>
          <div><p className="font-heading text-4xl font-extrabold text-slate-900 dark:text-white">8</p><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Cleaning services</p></div>
          <div><p className="font-heading text-4xl font-extrabold text-slate-900 dark:text-white">20</p><p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Cities served</p></div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-dark-bg lg:py-20" data-reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl space-y-3">
            <div className="badge-tag">Customer reviews</div>
            <h2 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white sm:text-4xl">What Customers Say About Our Cleaning</h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              These reviews come from customers who booked carpet, upholstery, tile and grout, and specialty cleaning with us. Many mention the same things we care about most: prices confirmed before the work starts, careful handling of their furniture, and clear answers about what cleaning can and can't fix. Each review links back to the service it describes across our carpet, upholstery, and specialty cleaning services.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {eligibleReviews.map((review) => {
              const servicePath = reviewServicePaths[review.service]?.() || '/cleaning-services';
              return (
                <article key={`${review.name}-${review.city}-${review.service}`} className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-dark-card">
                  <p className="text-xl tracking-normal text-amber-500" aria-label={`${review.rating} out of 5 stars`}>{'★'.repeat(review.rating)}</p>
                  <p className="my-4 flex-grow text-sm leading-relaxed text-slate-600 dark:text-slate-300">{review.text}</p>
                  <div className="border-t border-slate-100 pt-4 dark:border-slate-800">
                    <p className="font-bold text-slate-900 dark:text-white">{review.name}</p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400"><MapPin size={12} className="text-primary" />{review.city} · {review.date}</p>
                    <a href={servicePath} onClick={(event) => goTo(event, servicePath, onNavigate)} className="mt-4 inline-flex rounded-md bg-primary-light px-2.5 py-1 text-xs font-bold text-primary-hover dark:bg-primary/10 dark:text-primary">{review.service}</a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white py-16 dark:border-slate-800 dark:bg-dark-surface" data-reveal>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-heading font-extrabold text-slate-900 dark:text-white sm:text-4xl">See the Work Behind the Reviews</h2>
          <p className="mb-7 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            Reviews tell you how customers felt about their cleaning. Photos show you what actually changed. Our before-and-after gallery covers carpet, upholstery, and tile jobs, including stains that came out completely and older ones that faded but didn't disappear.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <button type="button" onClick={onOpenQuote} className="btn-primary-tw w-full sm:w-auto">Get My Free Quote</button>
            <a href="https://iqoracleaningservices.com/portfolio/" className="btn-outline-tw w-full sm:w-auto">View Before-and-After Photos</a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-dark-bg lg:py-20" data-reveal>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8"><div className="badge-tag">Reviews FAQ</div></div>
          <div className="space-y-7">
            {REVIEW_FAQS.map(({ question, answer }) => (
              <div key={question} className="space-y-2">
                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">{question}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary py-16 lg:py-20" data-reveal>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-heading font-extrabold text-white sm:text-4xl">Ready for Cleaner Carpets and Furniture?</h2>
          <p className="mb-8 text-sm leading-relaxed text-slate-300 sm:text-base">
            Tell us what needs cleaning and we'll confirm your exact price before any work begins, with no hidden fees. You can also reach us directly through IQORA's phone, WhatsApp, and email contact options.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button type="button" onClick={onOpenQuote} className="btn-primary-tw w-full sm:w-auto">Get My Free Quote</button>
            <WhatsAppButton />
            <a href={BRAND.phoneHref} className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/15 sm:w-auto"><Phone size={16} />+1 (323) 916-8039</a>
          </div>
          <p className="mt-8 text-sm font-semibold text-slate-300">Upfront, posted prices · No hidden fees · 20 cities served</p>
        </div>
      </section>
    </div>
  );
}
