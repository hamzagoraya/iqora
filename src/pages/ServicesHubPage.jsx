import React, { useEffect } from 'react';
import { ArrowRight, MapPin, Phone, Sparkles } from 'lucide-react';
import { BRAND, SERVICES, SPECIALTY_SERVICES, getParentCity, getServiceCityPath, getSpecialtyPath } from '../data/siteData';

const PAGE_TITLE = 'Carpet, Upholstery & Specialty Cleaning Services | IQORA';
const PAGE_DESCRIPTION = "Compare IQORA's 8 cleaning services, from carpet and upholstery to rugs, mattresses, leather, and tile, with real prices across Greater LA and Orange County.";
const WHATSAPP_HREF = 'https://wa.me/13239168039?text=Hello%20IQORA%20Cleaning%20Services%2C%20I%20would%20like%20to%20get%20a%20cleaning%20quote.';

const CITY_LINKS = [
  { name: 'Burbank', slug: 'burbank' },
  { name: 'Glendale', slug: 'glendale' },
  { name: 'Pasadena', slug: 'pasadena' },
  { name: 'West Hollywood', slug: 'west-hollywood' },
  { name: 'Beverly Hills', slug: 'beverly-hills' },
  { name: 'Santa Monica', slug: 'santa-monica' },
  { name: 'Culver City', slug: 'culver-city' },
  { name: 'Torrance', slug: 'torrance' },
  { name: 'Long Beach', slug: 'long-beach' },
  { name: 'Santa Clarita', slug: 'santa-clarita' },
  { name: 'Thousand Oaks', slug: 'thousand-oaks' },
  { name: 'Anaheim', slug: 'anaheim' },
  { name: 'Santa Ana', slug: 'santa-ana' },
  { name: 'Irvine', slug: 'irvine' },
  { name: 'Huntington Beach', slug: 'huntington-beach' },
  { name: 'Riverside', slug: 'riverside' },
  { name: 'San Bernardino', slug: 'san-bernardino' },
  { name: 'Ontario', slug: 'ontario' },
  { name: 'Pomona', slug: 'pomona' },
];

const CORE_CONTENT = [
  {
    id: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    badge: 'Most popular',
    price: '$40 per room · $120 minimum',
    description: 'Deep hot water extraction that lifts embedded dirt, allergens, and pet odors, with hallways and stairs priced separately.',
  },
  {
    id: 'upholstery-cleaning',
    name: 'Upholstery Cleaning',
    badge: 'Fabric-safe deep clean',
    price: 'From $29 per seat',
    description: "Gentle cleaning matched to each fabric's cleaning code, for sofas, sectionals, recliners, ottomans, and dining chairs.",
  },
  {
    id: 'tile-and-grout-cleaning',
    name: 'Tile & Grout Cleaning',
    badge: "Restore, don't replace",
    price: '[CONFIRM price and unit]',
    description: 'Deep cleaning that lifts the grime settled in grout lines and brings kitchen, bathroom, and entryway floors back to their original color.',
  },
];

const SPECIALTY_CONTENT = [
  {
    id: 'area-rug-cleaning',
    name: 'Area Rug Cleaning',
    price: 'From $100 · $60 with carpet or couch cleaning',
    description: 'Fiber-specific care for wool and synthetic rugs, so colors stay bright and fibers stay soft.',
    feature: 'Fiber-specific care',
  },
  {
    id: 'mattress-cleaning',
    name: 'Mattress Cleaning',
    price: 'From $89 per mattress',
    description: 'In-home mattress cleaning that lifts dust mites, sweat, body oils, and surface stains.',
    feature: 'Dust mite and allergen removal',
  },
  {
    id: 'leather-couch-cleaning',
    name: 'Leather Couch Cleaning',
    price: '$40 per seat',
    description: 'Gentle, leather-safe cleaning that removes body oils and everyday grime without drying out the surface.',
    feature: 'Leather-safe products',
  },
  {
    id: 'scotchgard-protection',
    name: 'Scotchgard Protection',
    price: '$30 per seat',
    description: 'A protective fabric treatment that slows spills from soaking in, giving you time to blot them before they stain.',
    feature: 'Resists future spills',
  },
  {
    id: 'curtain-cleaning',
    name: 'Curtain Cleaning',
    price: 'From $80 per curtain',
    description: 'Curtains cleaned right in your home, removing dust and cooking odors without taking them down.',
    feature: 'Cleaned in place',
  },
];

const SERVICE_GUIDE = [
  {
    question: 'Pet Accidents and Lingering Odors',
    answer: "Pet urine rarely stays in one place. It soaks into carpet, spreads to nearby rugs, and often ends up on the sofa your dog or cat sleeps on. Carpet and upholstery cleaning with targeted pet treatment handles most homes, and loose rugs can be added at a lower price. Fresh accidents usually come out fully, and our before-and-after pet stain results show how far older stains can fade. We'll also tell you when urine has reached the carpet pad, because cleaning alone can't always fix that.",
  },
  {
    question: 'Moving Out of a Rental',
    answer: "Landlords check carpets closely at move-out, and dirty carpet is one of the most common reasons for deposit deductions. Carpet cleaning priced per room makes the cost easy to plan, and our carpet cleaning cost guide breaks down what affects the final price. Since we're open 24 hours, a cleaning can usually fit before your key handover date.",
  },
  {
    question: 'Allergies and Dust Buildup',
    answer: 'Allergens collect in the soft surfaces you touch every day. Carpet holds dust and pet dander, mattresses collect dust mites and skin cells, and curtains trap the dust that drifts through open windows. If allergies are the concern, cleaning all three in one visit makes a bigger difference than cleaning one on its own.',
  },
  {
    question: 'Protecting New or Freshly Cleaned Furniture',
    answer: "A new sofa, or one that was just professionally cleaned, is the best candidate for Scotchgard protection. The treatment works best on clean fibers and gives you time to blot spills before they set. Leather furniture is a separate case, because leather needs its own cleaning products rather than a fabric treatment.",
  },
  {
    question: 'Dingy Kitchen, Bathroom, and Entryway Floors',
    answer: "When tile floors still look dull after mopping, the problem is usually the grout. Mops push dirty water into grout lines, where it dries and darkens over time. Tile and grout cleaning pulls that buildup out and often brings grout much closer to its original color, at a fraction of what regrouting costs.",
  },
  {
    question: 'Booking Several Services at Once',
    answer: 'Combining services in one visit lowers the cost of the added items. Three or more carpeted rooms are $40 each, a rug added to carpet or couch cleaning is $60, and recliners drop to $80 when paired with another service. Every item and bundle rate is listed on the IQORA cleaning price list, and we confirm your total before any work begins.',
  },
];

const VISIT_FEATURES = [
  { title: 'Upfront, Posted Prices', text: 'Every price is published and confirmed before we start, so the amount you agree to is the amount you pay.' },
  { title: 'Eco-Friendly Products', text: 'Low-residue products chosen with kids and pets in mind, rinsed out thoroughly during extraction.' },
  { title: 'Open 24 Hours', text: 'Quotes and bookings any time of day, for urgent spills, move-out deadlines, and busy schedules.' },
];

const SERVICE_FAQS = [
  { q: "What's the difference between carpet cleaning and area rug cleaning?", a: 'Carpet cleaning covers wall-to-wall carpet priced per room, cleaned in place. Area rug cleaning is for loose rugs, which often need fiber-specific care, especially wool. Add a rug to a carpet or couch cleaning and it drops from $100 or more to just $60.' },
  { q: 'How do I know which cleaning method my sofa needs?', a: 'Most fabric furniture carries a code on its tag: W means water-based cleaning is safe, S means solvent only, WS allows either, and X means vacuum only. We check that code before cleaning, so the method always matches what your fabric can handle safely.' },
  { q: 'Can you clean leather and fabric furniture in the same visit?', a: "Yes. Fabric and leather furniture are cleaned with different products, but both can be done in the same visit. Fabric seats are $29 each and leather seats are $40 each, and we'll confirm the total for everything before any cleaning begins in your home." },
  { q: 'When should I add Scotchgard protection?', a: "The best time is right after a professional cleaning, when the fibers are free of soil. Scotchgard doesn't make fabric stain-proof, but it slows spills from soaking in, giving you time to blot them up. It costs $30 per seat and suits new or high-use sofas." },
  { q: 'Which service is best for pet odors?', a: 'Pet urine usually affects more than one surface, so we treat carpet, rugs, and upholstery wherever the accident happened. Fresh spots often come out fully. Older urine that reached the carpet pad may fade a lot without disappearing, and we say so upfront.' },
  { q: 'Do you clean mattresses at my home?', a: "Yes. We clean mattresses right in your bedroom, so there's nothing to haul anywhere. The process lifts dust mites, sweat, body oils, and surface stains. Prices are $89 for a single, $99 for a queen, and $119 for a king, confirmed before we start." },
  { q: 'Can I book several services in one visit?', a: 'Yes, and it usually saves money. A rug added to carpet or couch cleaning is $60 instead of $100 or more, and recliners drop from $120 to $80 each. Three or more carpeted rooms are $40 each, so one combined visit costs less than separate ones.' },
  { q: 'Do you offer move-out carpet cleaning?', a: "Yes. Move-out carpet cleaning is booked the same way as any other visit and priced per room, which makes it easy to budget before a final inspection. Because we're open 24 hours, we can often fit around tight lease deadlines and key handover dates." },
  { q: 'Is tile and grout cleaning worth it instead of regrouting?', a: "Often, yes. Grout that looks dark or stained is usually just dirty, not damaged. A deep clean can bring it much closer to its original color for far less than regrouting. Cracked or crumbling grout is different, and we'll tell you if cleaning won't fix it." },
  { q: 'Can you clean curtains without taking them down?', a: "Yes. Curtains are cleaned in your home, so you don't have to take them down, pack them up, or wait days for a dry cleaner. Small curtains are $80 each and standard or larger curtains are $120 each, with the final price confirmed before we begin." },
];

const serviceOffers = [
  {
    name: 'Carpet Cleaning',
    id: 'carpet-cleaning-services-in-los-angeles',
    description: 'Deep hot water extraction that lifts embedded dirt, allergens, and pet odors, with hallways and stairs priced separately.',
    offers: [
      { name: 'Carpet cleaning per room', unitPrice: 40, unitText: 'per room' },
      { name: 'Minimum carpet cleaning visit', price: 120 },
      { name: 'Stair cleaning', unitPrice: 5, unitText: 'per step' },
      { name: 'Hallway cleaning', minPrice: 30, maxPrice: 40 },
    ],
  },
  {
    name: 'Upholstery Cleaning',
    id: 'upholstery-cleaning-services-in-los-angeles',
    description: "Gentle cleaning matched to each fabric's cleaning code, for sofas, sectionals, recliners, ottomans, and dining chairs.",
    offers: [
      { name: 'Sofa cleaning per seat', unitPrice: 29, unitText: 'per seat' },
      { name: 'Loveseat cleaning', price: 149 },
      { name: 'U-shaped sectional cleaning', price: 200 },
      { name: 'Ottoman cleaning', price: 30 },
      { name: 'Recliner cleaning (single service)', price: 120 },
      { name: 'Recliner cleaning (with other services)', price: 80 },
      { name: 'Dining chair cleaning', unitPrice: 25, unitText: 'per chair' },
    ],
  },
  {
    name: 'Tile & Grout Cleaning',
    id: 'tile-and-grout-cleaning-services-in-los-angeles',
    description: 'Deep cleaning that lifts the grime settled in grout lines and brings kitchen, bathroom, and entryway floors back to their original color.',
  },
  {
    name: 'Area Rug Cleaning',
    id: 'area-rug-cleaning-services',
    description: 'Fiber-specific care for wool and synthetic rugs, so colors stay bright and fibers stay soft.',
    offers: [
      { name: 'Medium area rug', price: 100 },
      { name: 'Large area rug', price: 120 },
      { name: 'Area rug added to carpet or couch cleaning', price: 60 },
    ],
  },
  {
    name: 'Mattress Cleaning',
    id: 'mattress-cleaning-services',
    description: 'In-home mattress cleaning that lifts dust mites, sweat, body oils, and surface stains.',
    offers: [
      { name: 'Single mattress', price: 89 },
      { name: 'Queen mattress', price: 99 },
      { name: 'King mattress', price: 119 },
    ],
  },
  {
    name: 'Leather Couch Cleaning',
    id: 'leather-couch-cleaning-services',
    description: 'Gentle, leather-safe cleaning that removes body oils and everyday grime without drying out the surface.',
    offers: [{ name: 'Leather couch cleaning per seat', unitPrice: 40, unitText: 'per seat' }],
  },
  {
    name: 'Scotchgard Protection',
    id: 'scotchgard-protection-services',
    description: 'A protective fabric treatment that slows spills from soaking in, giving you time to blot them before they stain.',
    offers: [{ name: 'Scotchgard protection per seat', unitPrice: 30, unitText: 'per seat' }],
  },
  {
    name: 'Curtain Cleaning',
    id: 'curtain-cleaning-services',
    description: 'Curtains cleaned right in your home, removing dust and cooking odors without taking them down.',
    offers: [
      { name: 'Small curtain', price: 80 },
      { name: 'Standard or large curtain', price: 120 },
    ],
  },
];

const cityNamesInSchema = [
  'Los Angeles, CA', 'Burbank, CA', 'Glendale, CA', 'Pasadena, CA', 'West Hollywood, CA',
  'Beverly Hills, CA', 'Santa Monica, CA', 'Culver City, CA', 'Torrance, CA', 'Long Beach, CA',
  'Santa Clarita, CA', 'Thousand Oaks, CA', 'Anaheim, CA', 'Santa Ana, CA', 'Irvine, CA',
  'Huntington Beach, CA', 'Riverside, CA', 'San Bernardino, CA', 'Ontario, CA', 'Pomona, CA',
];

function makeOffer(offer) {
  const item = { '@type': 'Offer', name: offer.name };
  if (offer.unitPrice !== undefined) {
    item.priceSpecification = {
      '@type': 'UnitPriceSpecification',
      price: offer.unitPrice,
      priceCurrency: 'USD',
      unitText: offer.unitText,
    };
  } else if (offer.minPrice !== undefined) {
    item.priceSpecification = {
      '@type': 'PriceSpecification',
      minPrice: offer.minPrice,
      maxPrice: offer.maxPrice,
      priceCurrency: 'USD',
    };
  } else {
    item.price = offer.price;
    item.priceCurrency = 'USD';
  }
  return item;
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://iqoracleaningservices.com/cleaning-services/#webpage',
      url: 'https://iqoracleaningservices.com/cleaning-services/',
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      isPartOf: { '@id': 'https://iqoracleaningservices.com/#website' },
      about: { '@id': 'https://iqoracleaningservices.com/#organization' },
      breadcrumb: { '@id': 'https://iqoracleaningservices.com/cleaning-services/#breadcrumb' },
      mainEntity: { '@id': 'https://iqoracleaningservices.com/cleaning-services/#service-list' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://iqoracleaningservices.com/cleaning-services/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://iqoracleaningservices.com/' },
        { '@type': 'ListItem', position: 2, name: 'Cleaning Services', item: 'https://iqoracleaningservices.com/cleaning-services/' },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://iqoracleaningservices.com/cleaning-services/#service-list',
      name: 'IQORA Cleaning Services',
      numberOfItems: 8,
      itemListOrder: 'https://schema.org/ItemListUnordered',
      itemListElement: serviceOffers.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          '@id': `https://iqoracleaningservices.com/${service.id}/#service`,
          name: service.name,
          serviceType: service.name,
          url: `https://iqoracleaningservices.com/${service.id}/`,
          description: service.description,
          provider: { '@id': 'https://iqoracleaningservices.com/#organization' },
          areaServed: { '@id': 'https://iqoracleaningservices.com/#service-area' },
          ...(service.offers ? { offers: service.offers.map(makeOffer) } : {}),
        },
      })),
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
      address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA', addressCountry: 'US' },
      areaServed: {
        '@type': 'AdministrativeArea',
        '@id': 'https://iqoracleaningservices.com/#service-area',
        name: 'Greater Los Angeles, Orange County, and the Inland Empire',
        containsPlace: cityNamesInSchema.map((name) => ({ '@type': 'City', name })),
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
      '@id': 'https://iqoracleaningservices.com/#website',
      url: 'https://iqoracleaningservices.com/',
      name: 'IQORA Cleaning Services',
      publisher: { '@id': 'https://iqoracleaningservices.com/#organization' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://iqoracleaningservices.com/cleaning-services/#faq',
      isPartOf: { '@id': 'https://iqoracleaningservices.com/cleaning-services/#webpage' },
      mainEntity: SERVICE_FAQS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};

function navigate(event, path, onNavigate) {
  if (onNavigate) {
    event.preventDefault();
    onNavigate(path);
  }
}

function WhatsAppButton() {
  return (
    <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-green-600 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-green-500 sm:w-auto">
      Get a Quote on WhatsApp
    </a>
  );
}

export default function ServicesHubPage({ onNavigate, onOpenQuote }) {
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

  const parentCity = getParentCity();
  const coreServices = CORE_CONTENT.map((content) => ({ ...content, service: SERVICES.find(({ id }) => id === content.id) }));
  const specialtyServices = SPECIALTY_CONTENT.map((content) => ({ ...content, service: SPECIALTY_SERVICES.find(({ id }) => id === content.id) }));

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />

      <section className="relative overflow-hidden bg-navy py-20 text-center text-white lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="badge-tag mx-auto mb-4">Our services</div>
          <h1 className="mb-4 text-3xl font-heading font-extrabold text-white sm:text-4xl lg:text-5xl">Carpet, Upholstery &amp; Specialty Cleaning Services</h1>
          <p className="mx-auto mb-6 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            IQORA Cleaning Services offers eight home cleaning services under one roof, from carpet, upholstery, and tile and grout cleaning to area rugs, mattresses, leather couches, curtains, and Scotchgard protection. Every service comes with a posted price and is available across Los Angeles, Orange County, the Inland Empire, and Thousand Oaks.
          </p>
          <nav aria-label="Breadcrumb" className="mb-7 flex items-center justify-center gap-2 text-sm text-slate-300">
            <a href="/" onClick={(event) => navigate(event, '/', onNavigate)} className="hover:text-white">Home</a>
            <span aria-hidden="true">→</span>
            <span aria-current="page" className="font-semibold text-white">Cleaning Services</span>
          </nav>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button type="button" onClick={onOpenQuote} className="btn-primary-tw w-full sm:w-auto"><span>Get a Free Quote</span><ArrowRight size={16} /></button>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-dark-bg lg:py-20" data-reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="badge-tag mb-4">Most requested</div>
            <h2 className="mb-4 text-3xl font-heading font-extrabold text-slate-900 dark:text-white sm:text-4xl">Our Core Cleaning Services</h2>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">Carpet, upholstery, and tile and grout cleaning are the three services homeowners book with us most. Each one has its own page with full details, and a local page for every city we serve.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {coreServices.map(({ id, name, badge, price, description, service }) => {
              const Icon = service.icon;
              const mainPath = getServiceCityPath(id, parentCity.slug);
              return (
                <article key={id} className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-slate-800 dark:bg-dark-card">
                  <div className="relative h-44 overflow-hidden">
                    <img src={service.image} alt={name} className="h-full w-full object-cover" />
                    <span className="absolute left-4 top-4 rounded-md bg-secondary/90 px-3 py-1.5 text-xs font-bold text-white">{badge}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-light dark:bg-primary/15"><Icon size={22} className="text-primary" /></div>
                      <div>
                        <h3 className="font-heading text-xl font-extrabold text-slate-900 dark:text-white">{name}</h3>
                        <p className="text-sm font-bold text-primary">{price}</p>
                      </div>
                    </div>
                    <p className="mb-5 flex-grow text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
                    <a href={`https://iqoracleaningservices.com${mainPath}/`} onClick={(event) => navigate(event, mainPath, onNavigate)} className="btn-primary-tw mb-5 w-full justify-center text-center">{name} in Los Angeles <ArrowRight size={15} /></a>
                    <div className="border-t border-slate-100 pt-4 dark:border-slate-800">
                      <p className="mb-2.5 text-xs font-bold text-slate-500 dark:text-slate-400">Also available in:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {CITY_LINKS.map((city) => {
                          const path = getServiceCityPath(id, city.slug);
                          return (
                            <a key={city.slug} href={`https://iqoracleaningservices.com${path}/`} onClick={(event) => navigate(event, path, onNavigate)} className="rounded-md border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-600 transition-colors hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-300">
                              {city.name}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-dark-surface lg:py-20" data-reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="badge-tag mb-4">Specialty services</div>
            <h2 className="mb-4 text-3xl font-heading font-extrabold text-slate-900 dark:text-white sm:text-4xl">Specialty Cleaning for Rugs, Mattresses, Leather, and More</h2>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">Some items need their own products and methods. These five services cover the things regular carpet and upholstery cleaning can't, and most can be added to a core service in the same visit.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialtyServices.map(({ id, name, price, description, feature, service }) => {
              const Icon = service.icon;
              const path = getSpecialtyPath(id);
              return (
                <article key={id} className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50 p-6 dark:border-slate-800 dark:bg-dark-card">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light dark:bg-primary/15"><Icon size={23} className="text-primary" /></div>
                    <p className="text-right text-sm font-bold text-primary">{price}</p>
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-extrabold text-slate-900 dark:text-white">{name}</h3>
                  <p className="mb-4 flex-grow text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
                  <p className="mb-4 inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400"><Sparkles size={13} className="text-primary" />{feature}</p>
                  <a href={`https://iqoracleaningservices.com${path}/`} onClick={(event) => navigate(event, path, onNavigate)} className="btn-outline-tw w-full justify-center text-center">{name} Details <ArrowRight size={15} /></a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 dark:bg-dark-bg lg:py-20" data-reveal>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 space-y-3">
            <div className="badge-tag">Service guide</div>
            <h2 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white sm:text-4xl">Which Cleaning Service Do You Need?</h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">Most people call us with a problem, not a service name in mind. Here's how the most common situations match up with what we offer.</p>
          </div>
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            {SERVICE_GUIDE.map(({ question, answer }) => (
              <div key={question} className="space-y-2">
                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">{question}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-dark-surface" data-reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-heading font-extrabold text-slate-900 dark:text-white sm:text-4xl">What Comes With Every IQORA Visit</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {VISIT_FEATURES.map(({ title, text }) => (
              <div key={title} className="border-t-2 border-primary pt-5">
                <h3 className="mb-2 text-xl font-heading font-bold text-slate-900 dark:text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-14 text-center dark:border-slate-800 dark:bg-dark-bg" data-reveal>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-3xl font-heading font-extrabold text-slate-900 dark:text-white sm:text-4xl">Every Service, in 20 Cities Across Southern California</h2>
          <p className="mx-auto mb-6 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">IQORA is based in Los Angeles and serves 20 cities across Los Angeles County, Orange County, the Inland Empire, and Thousand Oaks. Every service on this page is available in all 20 cities, with the same posted prices.</p>
          <a href="https://iqoracleaningservices.com/areas-we-serve/" onClick={(event) => navigate(event, '/areas-we-serve', onNavigate)} className="btn-secondary-tw"><MapPin size={16} /><span>View All Service Areas</span></a>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-dark-surface lg:py-20" data-reveal>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-heading font-extrabold text-slate-900 dark:text-white sm:text-4xl">Cleaning Services FAQ</h2>
          <div className="space-y-7">
            {SERVICE_FAQS.map(({ q, a }) => (
              <div key={q} className="space-y-2">
                <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">{q}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary py-16 lg:py-20" data-reveal>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-heading font-extrabold text-white sm:text-4xl">Ready for Cleaner Carpets and Furniture?</h2>
          <p className="mb-8 text-sm leading-relaxed text-slate-300 sm:text-base">Tell us what needs cleaning and we'll confirm your exact price before any work begins, with no hidden fees. You can also reach us around the clock through IQORA's phone, WhatsApp, and email contact options.</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button type="button" onClick={onOpenQuote} className="btn-primary-tw w-full sm:w-auto">Get My Free Quote</button>
            <WhatsAppButton />
            <a href={BRAND.phoneHref} className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/15 sm:w-auto"><Phone size={16} />+1 (323) 916-8039</a>
          </div>
          <p className="mt-8 text-sm font-semibold text-slate-300">Open 24 hours · Upfront, posted prices · No hidden fees</p>
        </div>
      </section>
    </div>
  );
}