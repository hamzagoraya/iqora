import { BASE_URL } from '../config';

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Organization"],
      "@id": `${BASE_URL}/#organization`,
      "name": "IQORA Cleaning Services",
      "legalName": "IQORA Cleaning Services LLC",
      "alternateName": "IQORA",
      "additionalType": "https://en.wikipedia.org/wiki/Carpet_cleaning",
      "slogan": "Because clean isn't just visible — it's felt.",
      "description": "IQORA Cleaning Services is a locally owned carpet, upholstery, and tile and grout cleaning company based in North Hollywood, California, serving 20 cities across Los Angeles County, Orange County, the Inland Empire, and Thousand Oaks. Services include area rug, mattress, leather couch, and curtain cleaning plus Scotchgard protection, using professional hot water extraction with upfront, posted prices.",
      "url": `${BASE_URL}/`,
      "logo": {
        "@type": "ImageObject",
        "@id": `${BASE_URL}/#logo`,
        "url": `${BASE_URL}/images/iqora-logo.png`
      },
      "image": { "@id": `${BASE_URL}/#logo` },
      "telephone": "+1-323-916-8039",
      "email": "iqoracleaningservices@gmail.com",
      "priceRange": "$$",
      "currenciesAccepted": "USD",
      "foundingDate": "2025-11-12",
      "founder": {
        "@type": "Person",
        "@id": `${BASE_URL}/#founder`,
        "name": "Gurbaj Singh",
        "jobTitle": "Founder & Owner",
        "description": "Gurbaj brings 5 years of hands-on cleaning experience to every job.",
        "worksFor": { "@id": `${BASE_URL}/#organization` }
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "North Hollywood",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "@id": `${BASE_URL}/#service-area`,
        "name": "Greater Los Angeles, Orange County, and the Inland Empire",
        "containsPlace": [
          { "@type": "City", "name": "Los Angeles, CA" },
          { "@type": "City", "name": "Santa Ana, CA" },
          { "@type": "City", "name": "Irvine, CA" },
          { "@type": "City", "name": "Riverside, CA" },
          { "@type": "City", "name": "San Bernardino, CA" },
          { "@type": "City", "name": "Ontario, CA" },
          { "@type": "City", "name": "Pomona, CA" },
          { "@type": "City", "name": "Anaheim, CA" },
          { "@type": "City", "name": "Huntington Beach, CA" },
          { "@type": "City", "name": "Long Beach, CA" },
          { "@type": "City", "name": "Torrance, CA" },
          { "@type": "City", "name": "Santa Monica, CA" },
          { "@type": "City", "name": "Pasadena, CA" },
          { "@type": "City", "name": "Santa Clarita, CA" },
          { "@type": "City", "name": "Thousand Oaks, CA" },
          { "@type": "City", "name": "Beverly Hills, CA" },
          { "@type": "City", "name": "West Hollywood, CA" },
          { "@type": "City", "name": "Culver City, CA" },
          { "@type": "City", "name": "Glendale, CA" },
          { "@type": "City", "name": "Burbank, CA" }
        ]
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-323-916-8039",
        "email": "iqoracleaningservices@gmail.com",
        "contactType": "customer service",
        "availableLanguage": ["English"],
        "areaServed": "US"
      },
      "knowsAbout": [
        "Carpet cleaning",
        "Hot water extraction",
        "Upholstery cleaning",
        "Tile and grout cleaning",
        "Area rug cleaning",
        "Mattress cleaning",
        "Leather cleaning",
        "Pet stain and odor removal",
        "Scotchgard fabric protection",
        "Curtain cleaning"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IQORA Cleaning Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": `${BASE_URL}/carpet-cleaning-services-in-north-hollywood/#service`,
              "name": "Carpet Cleaning",
              "url": `${BASE_URL}/carpet-cleaning-services-in-north-hollywood/`,
              "description": "Deep hot water extraction carpet cleaning that lifts embedded dirt, allergens, and pet odors. $40 per room with a $120 minimum visit.",
              "serviceType": "Carpet Cleaning",
              "provider": { "@id": `${BASE_URL}/#organization` },
              "areaServed": { "@id": `${BASE_URL}/#service-area` },
              "offers": [
                {
                  "@type": "Offer",
                  "priceSpecification": { "@type": "UnitPriceSpecification", "price": 40, "priceCurrency": "USD", "unitText": "per room" },
                  "name": "Carpet cleaning per room"
                },
                { "@type": "Offer", "name": "Minimum carpet cleaning visit", "price": 120, "priceCurrency": "USD" },
                {
                  "@type": "Offer",
                  "priceSpecification": { "@type": "UnitPriceSpecification", "price": 5, "priceCurrency": "USD", "unitText": "per step" },
                  "name": "Stair cleaning"
                },
                {
                  "@type": "Offer",
                  "name": "Hallway cleaning",
                  "priceSpecification": { "@type": "PriceSpecification", "minPrice": 30, "maxPrice": 40, "priceCurrency": "USD" }
                }
              ]
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": `${BASE_URL}/upholstery-cleaning-services-in-north-hollywood/#service`,
              "name": "Upholstery Cleaning",
              "url": `${BASE_URL}/upholstery-cleaning-services-in-north-hollywood/`,
              "description": "Fabric-safe cleaning for sofas, sectionals, recliners, ottomans, and dining chairs, matched to each fabric's cleaning code.",
              "serviceType": "Upholstery Cleaning",
              "provider": { "@id": `${BASE_URL}/#organization` },
              "areaServed": { "@id": `${BASE_URL}/#service-area` },
              "offers": [
                {
                  "@type": "Offer",
                  "priceSpecification": { "@type": "UnitPriceSpecification", "price": 29, "priceCurrency": "USD", "unitText": "per seat" },
                  "name": "Sofa cleaning per seat"
                },
                { "@type": "Offer", "name": "Loveseat cleaning", "price": 149, "priceCurrency": "USD" },
                { "@type": "Offer", "name": "U-shaped sectional cleaning", "price": 200, "priceCurrency": "USD" },
                { "@type": "Offer", "name": "Ottoman cleaning", "price": 30, "priceCurrency": "USD" },
                { "@type": "Offer", "name": "Recliner cleaning (single service)", "price": 120, "priceCurrency": "USD" },
                { "@type": "Offer", "name": "Recliner cleaning (with other services)", "price": 80, "priceCurrency": "USD" },
                {
                  "@type": "Offer",
                  "priceSpecification": { "@type": "UnitPriceSpecification", "price": 25, "priceCurrency": "USD", "unitText": "per chair" },
                  "name": "Dining chair cleaning"
                }
              ]
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": `${BASE_URL}/tile-and-grout-cleaning-services-in-north-hollywood/#service`,
              "name": "Tile & Grout Cleaning",
              "url": `${BASE_URL}/tile-and-grout-cleaning-services-in-north-hollywood/`,
              "description": "Deep tile and grout cleaning that lifts the grime settled in grout lines and restores the floor's original color. $20 per room.",
                "serviceType": "Tile & Grout Cleaning",
              "provider": { "@id": `${BASE_URL}/#organization` },
              "areaServed": { "@id": `${BASE_URL}/#service-area` },
              "offers": [
                {
                  "@type": "Offer",
                  "priceSpecification": { "@type": "UnitPriceSpecification", "price": 20, "priceCurrency": "USD", "unitText": "per room" },
                  "name": "Tile and grout cleaning per room"
                }
              ]
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": `${BASE_URL}/area-rug-cleaning-services/#service`,
              "name": "Area Rug Cleaning",
              "url": `${BASE_URL}/area-rug-cleaning-services/`,
              "description": "Fiber-specific cleaning for wool and synthetic area rugs.",
              "serviceType": "Area Rug Cleaning",
              "provider": { "@id": `${BASE_URL}/#organization` },
              "areaServed": { "@id": `${BASE_URL}/#service-area` },
              "offers": [
                { "@type": "Offer", "name": "Medium area rug", "price": 100, "priceCurrency": "USD" },
                { "@type": "Offer", "name": "Large area rug", "price": 120, "priceCurrency": "USD" },
                { "@type": "Offer", "name": "Area rug added to carpet or couch cleaning", "price": 60, "priceCurrency": "USD" }
              ]
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": `${BASE_URL}/mattress-cleaning-services/#service`,
              "name": "Mattress Cleaning",
              "url": `${BASE_URL}/mattress-cleaning-services/`,
              "description": "Mattress cleaning that removes dust mites, sweat, body oils, and stains.",
              "serviceType": "Mattress Cleaning",
              "provider": { "@id": `${BASE_URL}/#organization` },
              "areaServed": { "@id": `${BASE_URL}/#service-area` },
              "offers": [
                { "@type": "Offer", "name": "Single mattress", "price": 89, "priceCurrency": "USD" },
                { "@type": "Offer", "name": "Queen mattress", "price": 99, "priceCurrency": "USD" },
                { "@type": "Offer", "name": "King mattress", "price": 119, "priceCurrency": "USD" }
              ]
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": `${BASE_URL}/leather-couch-cleaning-services/#service`,
              "name": "Leather Couch Cleaning",
              "url": `${BASE_URL}/leather-couch-cleaning-services/`,
              "description": "Gentle, leather-safe cleaning for leather sofas and couches.",
              "serviceType": "Leather Couch Cleaning",
              "provider": { "@id": `${BASE_URL}/#organization` },
              "areaServed": { "@id": `${BASE_URL}/#service-area` },
              "offers": [
                {
                  "@type": "Offer",
                  "priceSpecification": { "@type": "UnitPriceSpecification", "price": 40, "priceCurrency": "USD", "unitText": "per seat" },
                  "name": "Leather couch cleaning per seat"
                }
              ]
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": `${BASE_URL}/scotchgard-protection-services/#service`,
              "name": "Scotchgard Protection",
              "url": `${BASE_URL}/scotchgard-protection-services/`,
              "description": "Scotchgard fabric protection that helps sofas and chairs resist future spills and stains.",
              "serviceType": "Scotchgard Protection",
              "provider": { "@id": `${BASE_URL}/#organization` },
              "areaServed": { "@id": `${BASE_URL}/#service-area` },
              "offers": [
                {
                  "@type": "Offer",
                  "priceSpecification": { "@type": "UnitPriceSpecification", "price": 30, "priceCurrency": "USD", "unitText": "per seat" },
                  "name": "Scotchgard protection per seat"
                }
              ]
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": `${BASE_URL}/curtain-cleaning-services/#service`,
              "name": "Curtain Cleaning",
              "url": `${BASE_URL}/curtain-cleaning-services/`,
              "description": "In-home curtain cleaning that removes dust and odors without taking curtains down.",
              "serviceType": "Curtain Cleaning",
              "provider": { "@id": `${BASE_URL}/#organization` },
              "areaServed": { "@id": `${BASE_URL}/#service-area` },
              "offers": [
                { "@type": "Offer", "name": "Small curtain", "price": 80, "priceCurrency": "USD" },
                { "@type": "Offer", "name": "Standard or large curtain", "price": 120, "priceCurrency": "USD" }
              ]
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": `${BASE_URL}/`,
      "name": "IQORA Cleaning Services",
      "alternateName": "IQORA",
      "publisher": { "@id": `${BASE_URL}/#organization` },
      "inLanguage": "en-US"
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      "url": `${BASE_URL}/`,
      "name": "Carpet & Upholstery Cleaning in Greater Los Angeles | IQORA",
      "description": "IQORA cleans carpets, sofas, rugs, mattresses, and tile across Los Angeles, Orange County, and the Inland Empire. Upfront prices and open 24/7 for bookings.",
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${BASE_URL}/#organization` },
      "mainEntity": { "@id": `${BASE_URL}/#organization` },
      "inLanguage": "en-US"
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      "isPartOf": { "@id": `${BASE_URL}/#webpage` },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does carpet cleaning cost in Los Angeles?",
          "acceptedAnswer": { "@type": "Answer", "text": "Carpet cleaning with IQORA costs $40 per room, with a $120 minimum per visit. Hallways run $30 to $40 and stairs are $5 per step. Your price is confirmed before any work starts, so the amount you agree to is exactly the amount you pay at the end." }
        },
        {
          "@type": "Question",
          "name": "How long does carpet take to dry after cleaning?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most carpets dry in about 6 to 12 hours after hot water extraction. Thick carpet, humid weather, and closed-up rooms can stretch that time. Running fans, opening a few windows, or turning on the AC helps your carpet dry faster and smell fresh sooner." }
        },
        {
          "@type": "Question",
          "name": "What cleaning method does IQORA use?",
          "acceptedAnswer": { "@type": "Answer", "text": "We use professional hot water extraction, often called steam cleaning. A cleaning solution loosens soil deep in the carpet fibers, then strong suction pulls the dirt and moisture back out, leaving far less sticky residue behind than rental machines do." }
        },
        {
          "@type": "Question",
          "name": "Can you remove pet stains and odors?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. We treat pet stains and odors in carpet, rugs, and upholstery. Fresh accidents usually come out completely, while older urine that has soaked into the padding can fade a lot but may not always disappear, and we'll tell you that before we start." }
        },
        {
          "@type": "Question",
          "name": "Are your cleaning products safe for kids and pets?",
          "acceptedAnswer": { "@type": "Answer", "text": "We choose eco-friendly cleaning products with kids and pets in mind, and extraction rinses most of the solution back out of the fibers. We suggest keeping everyone off damp carpet until it dries, mainly so fresh dirt isn't tracked onto clean floors." }
        },
        {
          "@type": "Question",
          "name": "Which areas does IQORA serve?",
          "acceptedAnswer": { "@type": "Answer", "text": "We're based in North Hollywood and serve 20 cities across Los Angeles County, Orange County, the Inland Empire, and Thousand Oaks, including Long Beach, Pasadena, Anaheim, Irvine, Riverside, and Santa Clarita. Call us to confirm your city." }
        },
        {
          "@type": "Question",
          "name": "Do I need to move furniture before you arrive?",
          "acceptedAnswer": { "@type": "Answer", "text": "Please clear small items, breakables, and anything sitting on the floor before we arrive. Tell us about beds, dressers, or other heavy pieces when you book, and we'll explain how we'll clean around them so no part of the room gets left out." }
        },
        {
          "@type": "Question",
          "name": "Can you clean couches and sectionals?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fabric sofas are $29 per seat, loveseats are $149, and U-shaped sectionals are $200. We check each fabric's cleaning code before we start so the method suits the material. Leather couches get a separate leather-safe cleaning at $40 per seat." }
        },
        {
          "@type": "Question",
          "name": "When can I book a cleaning?",
          "acceptedAnswer": { "@type": "Answer", "text": "IQORA is open 24 hours, so you can reach us for a quote or booking whenever it suits you. That makes a real difference for urgent spills, tight move-out deadlines, and busy households that can't fit a cleaning into regular business hours." }
        },
        {
          "@type": "Question",
          "name": "How often should carpets be professionally cleaned?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most homes do well with professional carpet cleaning every 12 to 18 months. Homes with pets, young kids, allergies, or heavy foot traffic benefit from cleaning every 6 to 12 months, with regular vacuuming in between visits to keep fibers in good shape." }
        }
      ]
    }
  ]
};

export default homeSchema;
