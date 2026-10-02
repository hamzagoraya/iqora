import React, { useEffect } from 'react';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { BRAND, CITIES, PORTFOLIO, getCity, getServiceCityPath, getSpecialtyPath } from '../data/siteData';
import { BASE_URL } from '../config';

const PAGE_TITLE = 'Before & After Carpet and Upholstery Cleaning Photos | IQORA';
const PAGE_DESCRIPTION = 'See before-and-after photos of IQORA carpet, upholstery, tile, rug, and mattress cleaning from real homes across Los Angeles, Orange County, and Inland Empire.';

const REVIEW_FAQS = [
  { question: 'Are these photos from real IQORA jobs?', answer: 'Yes. Every photo in this portfolio was taken at a real IQORA job, before we started and after we finished. We only share photos from customers who gave permission, and we never use stock images or photos from other companies to represent our work.' },
  { question: 'Are the photos edited?', answer: 'Only lightly. We may crop a photo or adjust brightness so details are visible, but any change is applied equally to the before and after shots. We never retouch stains, change colors, or edit out problems that were still there when we finished.' },
  { question: 'Will my carpet look like the photos?', answer: "Results depend on the fiber, the stain, how long it has been there, and what was used on it before. Fresh soil and most spills come out fully, while older or set-in stains often fade instead. We'll tell you what to expect after seeing your item." },
  { question: 'Can old pet stains be removed completely?', answer: "Fresh pet accidents usually come out completely. Older urine that has soaked through to the carpet pad or subfloor can leave a mark or odor that cleaning alone can't fully remove. We'll check for that before starting and explain your options honestly." },
  { question: 'Why do some stains come back after cleaning?', answer: 'Some spills soak deep into the carpet backing or pad. As the carpet dries, moisture can pull that leftover residue back up to the surface, a process called wicking. It often shows within a day or two, and a quick follow-up treatment usually resolves it.' },
  { question: 'Can cleaning fix bleach spots or faded color?', answer: "No. Bleach, some acne creams, and certain cleaners remove the carpet's dye rather than adding a stain, so there's nothing left for cleaning to lift out. Color loss needs color repair or patching, and we'll point that out before you pay for a cleaning." },
  { question: 'Can worn or matted carpet be restored?', answer: "Partly. Deep cleaning lifts the soil that makes high-traffic lanes look dark and can help fibers stand up again. If the fibers themselves are crushed or frayed from years of wear, though, cleaning improves the look but can't make them brand new." },
  { question: 'Will you share photos of my home?', answer: "Only with your permission. If your job has a result worth showing, we'll ask before taking or sharing photos, and we never include house numbers, faces, family photos, or anything that could identify your home or your family online." },
  { question: 'How can I find out what cleaning will do for my item?', answer: "Send us a clear photo of the stain, sofa, rug, or grout by WhatsApp or text, along with what caused it if you know. We'll give you an honest idea of what cleaning can achieve and a price, before you book anything or we arrive at your door." },
  { question: 'How do you choose which projects to show?', answer: 'We choose photos that show a range of real outcomes, not just the most dramatic ones. That includes stains that came out completely and ones that faded but stayed visible, so you can judge our work fairly and know what\'s realistic for your home.' },
];

const reviewSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ImageGallery',
      '@id': `${BASE_URL}/portfolio/#webpage`,
      url: `${BASE_URL}/portfolio/`,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      isPartOf: { '@id': `${BASE_URL}/#website` },
      about: { '@id': `${BASE_URL}/#organization` },
      creator: { '@id': `${BASE_URL}/#organization` },
      breadcrumb: { '@id': `${BASE_URL}/portfolio/#breadcrumb` },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${BASE_URL}/portfolio/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${BASE_URL}/portfolio/` },
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
      '@id': `${BASE_URL}/#website`,
      url: `${BASE_URL}/`,
      name: 'IQORA Cleaning Services',
      publisher: { '@id': `${BASE_URL}/#organization` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/portfolio/#faq`,
      isPartOf: { '@id': `${BASE_URL}/portfolio/#webpage` },
      mainEntity: REVIEW_FAQS.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

const serviceIds = {
  'Carpet Cleaning': 'carpet-cleaning',
  'Upholstery Cleaning': 'upholstery-cleaning',
  'Tile & Grout Cleaning': 'tile-and-grout-cleaning',
  'Area Rug Cleaning': 'area-rug-cleaning',
  'Mattress Cleaning': 'mattress-cleaning',
  'Leather Couch Cleaning': 'leather-couch-cleaning',
  'Scotchgard Protection': 'scotchgard-protection',
  'Curtain Cleaning': 'curtain-cleaning',
};

function navigate(event, path, onNavigate) {
  if (onNavigate) {
    event.preventDefault();
    onNavigate(path);
  }
}

function WhatsAppButton() {
  return (
    <a href={BRAND.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-green-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-green-500 sm:w-auto">
      Get a Quote on WhatsApp
    </a>
  );
}

export default function PortfolioPage({ onNavigate, onOpenQuote }) {
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

  const validCities = new Set(CITIES.map(({ name }) => name));
  const usedRoutes = new Set();
  const projects = PORTFOLIO.filter((project) => {
    const city = getCity(project.city);
    if (!project.beforeImage || !project.afterImage || !validCities.has(project.city) || !serviceIds[project.service] || !city) return false;
    const routeKey = `${serviceIds[project.service]}:${city.slug}`;
    if (usedRoutes.has(routeKey)) return false;
    usedRoutes.add(routeKey);
    return true;
  });

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <section className="relative overflow-hidden bg-navy py-20 text-center text-white lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="badge-tag mx-auto mb-4">Our work</div>
          <h1 className="mb-4 text-3xl font-heading font-extrabold text-white sm:text-4xl lg:text-5xl">Carpet &amp; Upholstery Cleaning Before-and-After Photos</h1>
          <p className="mx-auto mb-6 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            These before-and-after photos come from real IQORA jobs in homes across Los Angeles, Orange County, and the Inland Empire. They show what hot water extraction can do for carpet, sofas, rugs, mattresses, and tile, including honest results where older stains faded rather than disappeared.
          </p>
          <nav aria-label="Breadcrumb" className="mb-7 flex items-center justify-center gap-2 text-sm text-slate-300">
            <a href="/" onClick={(event) => navigate(event, '/', onNavigate)} className="hover:text-white">Home</a>
            <span aria-hidden="true">→</span>
            <span aria-current="page" className="font-semibold text-white">Portfolio</span>
          </nav>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button type="button" onClick={onOpenQuote} className="btn-primary-tw w-full sm:w-auto"><span>Get a Free Quote</span><ArrowRight size={16} /></button>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-dark-bg lg:py-20" data-reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl space-y-3">
            <div className="badge-tag">Recent projects</div>
            <h2 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white sm:text-4xl">Recent Cleaning Projects</h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
              Each project below shows the same item before and after cleaning, the city it was in, and what we did. Every job used the same process and posted prices behind our carpet, upholstery, and specialty cleaning services, and the results are shown as they were, not retouched.
            </p>
          </div>
          {projects.length ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => {
                const city = getCity(project.city);
                const serviceId = serviceIds[project.service];
                const servicePath = ['carpet-cleaning', 'upholstery-cleaning', 'tile-and-grout-cleaning'].includes(serviceId)
                  ? getServiceCityPath(serviceId, city.slug)
                  : getSpecialtyPath(serviceId);
                return (
                  <article key={`${project.service}-${city.slug}`} className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-slate-800 dark:bg-dark-card">
                    <span className="m-5 mb-0 self-start rounded-md bg-primary-light px-2.5 py-1 text-xs font-bold text-primary-hover dark:bg-primary/10 dark:text-primary">{project.service}</span>
                    <div className="grid grid-cols-2 gap-1 px-5 pt-4">
                      <figure>
                        <img src={project.beforeImage} alt={project.beforeAlt || `Before ${project.service.toLowerCase()} of ${project.title} in ${project.city}`} className="aspect-[4/3] w-full object-cover" />
                        <figcaption className="py-2 text-center text-xs font-bold text-slate-600 dark:text-slate-300">Before</figcaption>
                      </figure>
                      <figure>
                        <img src={project.afterImage} alt={project.afterAlt || `After ${project.service.toLowerCase()} of ${project.title} in ${project.city}`} className="aspect-[4/3] w-full object-cover" />
                        <figcaption className="py-2 text-center text-xs font-bold text-slate-600 dark:text-slate-300">After</figcaption>
                      </figure>
                    </div>
                    <div className="flex flex-1 flex-col p-6 pt-2">
                      <h3 className="mb-2 text-lg font-heading font-extrabold text-slate-900 dark:text-white">{project.title}</h3>
                      <p className="mb-3 flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400"><MapPin size={12} className="text-primary" />{project.city}</p>
                      <p className="mb-4 flex-grow text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>
                      <p className="mb-4 text-sm font-bold text-slate-900 dark:text-white">{project.result}</p>
                      <a href={servicePath} onClick={(event) => navigate(event, servicePath, onNavigate)} className="btn-outline-tw w-full justify-center text-center">{project.service} in {project.city}</a>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="border-y border-slate-200 py-8 text-center text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">
              Before-and-after project photos will appear here when permission-approved images from real IQORA jobs are available.
            </p>
          )}
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-dark-surface lg:py-20" data-reveal>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 space-y-3">
            <div className="badge-tag">Honest results</div>
            <h2 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white sm:text-4xl">What Cleaning Can and Can't Change</h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">Before-and-after photos are most useful when you know what they can realistically predict for your own home. Every item is different, but most results fall into one of three groups.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">Stains That Come Out Completely</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">Everyday soil, traffic dirt, most food and drink spills, and fresh pet accidents usually come out fully with pre-treatment and hot water extraction. The sooner a spill is cleaned, the better the odds, because stains that haven't had time to set are still sitting on the fibers rather than bonded to them.</p>
            </div>
            <div className="bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">Stains That Fade but Stay Visible</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">Older pet urine, coffee, red wine, and stains that were scrubbed with the wrong product often fade a lot without disappearing. Some of the portfolio photos show exactly this kind of result, because we think it's more useful to show real outcomes than only the most dramatic ones.</p>
            </div>
            <div className="bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">Damage Cleaning Can't Fix</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">Bleach spots, sun fading, burns, and worn or crushed fibers are damage rather than dirt, so there's nothing for cleaning to lift out. We'll point these out before you pay for a cleaning, so you can decide whether repair, patching, or replacement makes more sense.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-16 dark:border-slate-800 dark:bg-dark-bg" data-reveal>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-heading font-extrabold text-slate-900 dark:text-white sm:text-4xl">Your Home Could Be Next</h2>
          <p className="mb-7 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">Every project in this gallery started with a simple message and a photo. Send us a picture of the carpet, sofa, rug, or grout you want cleaned, and we'll tell you honestly what to expect and confirm your price before any work begins.</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <button type="button" onClick={onOpenQuote} className="btn-primary-tw w-full sm:w-auto"><span>Start My Project</span><ArrowRight size={16} /></button>
            <a href={`${BASE_URL}/our-reviews/`} onClick={(event) => navigate(event, '/our-reviews', onNavigate)} className="btn-outline-tw w-full sm:w-auto">Read Customer Reviews</a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-dark-surface lg:py-20" data-reveal>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8"><div className="badge-tag">Portfolio FAQ</div></div>
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
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-heading font-extrabold text-white sm:text-4xl">Ready for Cleaner Carpets and Furniture?</h2>
          <p className="mb-8 text-sm leading-relaxed text-slate-300 sm:text-base">Tell us what needs cleaning and we'll confirm your exact price before any work begins, with no hidden fees. You can also reach us directly through IQORA's phone, WhatsApp, and email contact options.</p>
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