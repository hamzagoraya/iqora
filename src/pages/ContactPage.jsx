import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import ContactCards from '../components/ContactCards';
import ContactSection from '../components/ContactSection';
import LocationMap from '../components/LocationMap';
import { BASE_URL } from '../config';

const contactSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': `${BASE_URL}/contact-us/#webpage`,
      url: `${BASE_URL}/contact-us/`,
      name: 'Contact IQORA Cleaning Services | Free Quote in Los Angeles',
      description: 'Contact IQORA Cleaning Services for a free carpet, upholstery, or tile cleaning quote. Call +1 (323) 916-8039, message us on WhatsApp, or use our quote form.',
      isPartOf: { '@id': `${BASE_URL}/#website` },
      about: { '@id': `${BASE_URL}/#organization` },
      mainEntity: { '@id': `${BASE_URL}/#organization` },
      breadcrumb: { '@id': `${BASE_URL}/contact-us/#breadcrumb` },
      inLanguage: 'en-US',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${BASE_URL}/contact-us/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `${BASE_URL}/contact-us/` },
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
      areaServed: [
        { '@type': 'City', name: 'Los Angeles, CA' },
        { '@type': 'City', name: 'Burbank, CA' },
        { '@type': 'City', name: 'Glendale, CA' },
        { '@type': 'City', name: 'Pasadena, CA' },
        { '@type': 'City', name: 'West Hollywood, CA' },
        { '@type': 'City', name: 'Beverly Hills, CA' },
        { '@type': 'City', name: 'Santa Monica, CA' },
        { '@type': 'City', name: 'Culver City, CA' },
        { '@type': 'City', name: 'Torrance, CA' },
        { '@type': 'City', name: 'Long Beach, CA' },
        { '@type': 'City', name: 'Santa Clarita, CA' },
        { '@type': 'City', name: 'Pomona, CA' },
        { '@type': 'City', name: 'Thousand Oaks, CA' },
        { '@type': 'City', name: 'Anaheim, CA' },
        { '@type': 'City', name: 'Santa Ana, CA' },
        { '@type': 'City', name: 'Irvine, CA' },
        { '@type': 'City', name: 'Huntington Beach, CA' },
        { '@type': 'City', name: 'Riverside, CA' },
        { '@type': 'City', name: 'San Bernardino, CA' },
        { '@type': 'City', name: 'Ontario, CA' },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: '+1-323-916-8039',
          email: 'iqoracleaningservices@gmail.com',
          areaServed: 'US-CA',
          availableLanguage: ['English'],
        },
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          telephone: '+1-323-916-8039',
          areaServed: 'US-CA',
          availableLanguage: ['English'],
        },
      ],
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
      '@id': `${BASE_URL}/contact-us/#faq`,
      isPartOf: { '@id': `${BASE_URL}/contact-us/#webpage` },
      mainEntity: [
        {
          '@type': 'Question',
          name: "What's the fastest way to reach IQORA?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Calling +1 (323) 916-8039 or sending a WhatsApp message to the same number is the quickest way to reach us. Email and the quote form work well too, especially if you want to include several photos or describe a larger job in more detail.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I include in a quote request?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tell us your city, which items need cleaning, and how many rooms, seats, or pieces are involved. Mention pets, stains, stairs, or anything unusual. The more detail you share upfront, the more accurate your quote will be from the very first reply.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I send photos for a quote?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, and it helps a lot. A clear photo of a stained carpet, a sofa, a rug, or discolored grout lets us see the fabric, the damage, and the size of the job. Photos sent by WhatsApp or text usually get you a more accurate price and a realistic idea of results.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you need to visit my home before giving a price?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Our prices are based on rooms, seats, and item sizes, so most quotes can be given by phone, WhatsApp, or email without a visit. When we arrive, we check the job and confirm the total with you again before any cleaning begins in your home.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the quote free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Quotes are free and come with no obligation to book. Ask as many questions as you need about the process, drying time, or what cleaning can realistically fix, and decide once you have all the information you need to feel comfortable.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which areas can I book service in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "We serve 20 cities across Los Angeles County, Orange County, the Inland Empire, and Thousand Oaks, including Los Angeles, Burbank, Pasadena, Long Beach, Anaheim, Irvine, and Riverside. If your city isn't on the list, contact us and we'll check your address.",
          },
        },
        {
          '@type': 'Question',
          name: "Can I book a cleaning for a rental property or someone else's home?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Landlords, property managers, and family members often book cleanings for homes they don't live in. We just need someone to provide access and approve the confirmed price before we start, whether that's in person, by phone, or by message.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to be home during the cleaning?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Someone should be there when we arrive to let us in, point out problem areas, and approve the confirmed price. After that, you don't need to stay in the room while we work, though you're always welcome to ask questions or watch how we clean.",
          },
        },
        {
          '@type': 'Question',
          name: 'How should I prepare after booking?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Clear small items, breakables, and anything sitting on the floor from the areas being cleaned. Let us know about pets, parking, gate codes, or elevator access in advance, so the visit starts on time and nothing holds up the cleaning once we arrive.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I need to reschedule?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Let us know as early as possible by phone or WhatsApp, and we'll find a new time that works for you. Early notice makes it much easier to offer you a good replacement slot and to give your original time to another customer who's waiting for one.",
          },
        },
      ],
    },
  ],
};

export default function ContactPage({ onOpenQuote, onNavigate }) {
  const scrollToQuote = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    if (onNavigate) onNavigate('/contact-us');
  };

  useEffect(() => {
    document.title = 'Contact IQORA Cleaning Services | Free Quote in Los Angeles';

    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }

    descriptionMeta.setAttribute('content', 'Contact IQORA Cleaning Services for a free carpet, upholstery, or tile cleaning quote. Call +1 (323) 916-8039, message us on WhatsApp, or use our quote form.');
  }, []);

  return (
    <div className="contactpage-wrapper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <Hero
        badge="Los Angeles · Orange County · Inland Empire"
        title="Contact IQORA Cleaning Services"
        currentPage="Contact Us"
        subtitle="Call, send a WhatsApp message, or fill out the quote form below for a free, no-obligation price on carpet, upholstery, tile and grout, or specialty cleaning. Photos of the job are always welcome and help us give you a more accurate quote."
        onOpenQuote={scrollToQuote}
        onNavigate={onNavigate}
        crumbs={[{ label: 'Contact Us' }]}
      />
      <div className="relative z-10 bg-white">
        <ContactCards />
        <ContactSection onOpenQuote={scrollToQuote} />
        <LocationMap />
      </div>
    </div>
  );
}
