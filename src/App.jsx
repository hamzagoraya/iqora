import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesHubPage from './pages/ServicesHubPage';
import AreasWeServePage from './pages/AreasWeServePage';
import ServicePage from './pages/ServicePage';
import SpecialtyServicePage from './pages/SpecialtyServicePage';
import PricingPage from './pages/PricingPage';
import ReviewsPage from './pages/ReviewsPage';
import PortfolioPage from './pages/PortfolioPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import useRevealAnimations from './hooks/useRevealAnimations';

import {
  getService,
  getSpecialty,
  getCity,
  getBlogPost,
  getServicePath,
  getServiceCityPath,
  getSpecialtyPath,
  MAIN_PAGE_ROUTES,
} from './data/siteData';

export default function App() {
  /* =========================================================
     THEME
  ========================================================= */

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('iqora-theme') || 'light';
  });

  /* =========================================================
     QUOTE MODAL
  ========================================================= */

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  /* =========================================================
     GET CURRENT URL
  ========================================================= */

  const getCurrentPath = () => {
    let path = window.location.pathname;

    // Remove trailing slash except homepage
    if (path !== '/' && path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    return path;
  };

  const [currentPage, setCurrentPage] = useState(getCurrentPath());

  useRevealAnimations(currentPage);

  /* =========================================================
     THEME EFFECT
  ========================================================= */

  useEffect(() => {
    const root = document.documentElement;

    root.setAttribute('data-theme', theme);

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('iqora-theme', theme);
  }, [theme]);

  /* =========================================================
     BROWSER BACK / FORWARD
  ========================================================= */

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getCurrentPath());

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  /* =========================================================
     THEME TOGGLE
  ========================================================= */

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const normalizeRoute = (path) => {
    if (!path) return path;

    let normalized = String(path).trim();

    if (normalized in MAIN_PAGE_ROUTES) {
      return MAIN_PAGE_ROUTES[normalized];
    }

    if (normalized.startsWith('/')) {
      // leave it as-is; preserve exact SEO URLs
    } else if (normalized === 'home') {
      normalized = '/';
    } else if (normalized === 'about') {
      normalized = '/about-us';
    } else if (normalized === 'services') {
      normalized = '/cleaning-services';
    } else if (normalized === 'areas') {
      normalized = '/areas-we-serve';
    } else if (normalized === 'pricing') {
      normalized = '/cleaning-services-pricing';
    } else if (normalized === 'reviews') {
      normalized = '/our-reviews';
    } else if (normalized === 'portfolio') {
      normalized = '/portfolio';
    } else if (normalized === 'faq') {
      normalized = '/faq';
    } else if (normalized === 'contact') {
      normalized = '/contact-us';
    } else if (normalized === 'blog') {
      normalized = '/blog';
    } else {
      normalized = `/${normalized}`;
    }

    if (normalized.startsWith('/service/')) {
      const servicePart = normalized.replace('/service/', '');
      const [serviceId, citySlug] = servicePart.split('/');
      if (citySlug) {
        return getServiceCityPath(serviceId, citySlug);
      }
      return getServicePath(serviceId);
    }

    if (normalized.startsWith('/specialty/')) {
      const specialtyId = normalized.replace('/specialty/', '');
      return getSpecialtyPath(specialtyId);
    }

    if (normalized !== '/' && normalized.endsWith('/')) {
      normalized = normalized.slice(0, -1);
    }

    return normalized;
  };

  const handleNavigate = (path) => {
    if (!path) return;

    const normalizedPath = normalizeRoute(path);

    if (!normalizedPath) return;

    if (normalizedPath === currentPage) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      return;
    }

    window.history.pushState({}, '', normalizedPath);

    setCurrentPage(normalizedPath);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  /* =========================================================
     COMMON PAGE PROPS
  ========================================================= */

  const pageProps = {
    theme,
    onOpenQuote: () => setQuoteModalOpen(true),
    onNavigate: handleNavigate,
  };

  /* =========================================================
     SERVICE + CITY ROUTING
     
     URL examples:

     /carpet-cleaning-services-in-burbank
     /upholstery-cleaning-services-in-glendale
     /tile-and-grout-cleaning-services-in-pasadena
  ========================================================= */

  const findServiceCityPage = (path) => {
    const serviceRoutes = [
      {
        prefix: '/carpet-cleaning-services-in-',
        serviceId: 'carpet-cleaning',
      },
      {
        prefix: '/upholstery-cleaning-services-in-',
        serviceId: 'upholstery-cleaning',
      },
      {
        prefix: '/tile-and-grout-cleaning-services-in-',
        serviceId: 'tile-and-grout-cleaning',
      },
    ];

    for (const route of serviceRoutes) {
      if (path.startsWith(route.prefix)) {
        const citySlug = path.replace(route.prefix, '');

        const service = getService(route.serviceId);
        const city = getCity(citySlug);

        if (!service || !city) {
          return null;
        }

        return {
          service,
          city,
        };
      }
    }

    return null;
  };

  /* =========================================================
     SPECIALTY ROUTING
     
     URL examples:

     /area-rug-cleaning-services
     /mattress-cleaning-services
     /leather-couch-cleaning-services
     /scotchgard-protection-services
     /curtain-cleaning-services
  ========================================================= */

  const specialtyRoutes = {
    '/area-rug-cleaning-services': 'area-rug-cleaning',
    '/mattress-cleaning-services': 'mattress-cleaning',
    '/leather-couch-cleaning-services': 'leather-couch-cleaning',
    '/scotchgard-protection-services': 'scotchgard-protection',
    '/curtain-cleaning-services': 'curtain-cleaning',
  };

  /* =========================================================
     RENDER PAGE
  ========================================================= */

  const renderPage = () => {
    /* =======================================================
       HOME
    ======================================================= */

    if (currentPage === '/') {
      return <HomePage {...pageProps} />;
    }

    /* =======================================================
       CORE PAGES
    ======================================================= */

    if (currentPage === '/about-us') {
      return <AboutPage {...pageProps} />;
    }

    if (currentPage === '/contact-us') {
      return (
        <ContactPage
          theme={theme}
          onOpenQuote={pageProps.onOpenQuote}
          onNavigate={handleNavigate}
        />
      );
    }

    if (currentPage === '/cleaning-services') {
      return <ServicesHubPage {...pageProps} />;
    }

    if (currentPage === '/areas-we-serve') {
      return <AreasWeServePage {...pageProps} />;
    }

    if (currentPage === '/cleaning-services-pricing') {
      return <PricingPage {...pageProps} />;
    }

    if (currentPage === '/our-reviews') {
      return <ReviewsPage {...pageProps} />;
    }

    if (currentPage === '/portfolio') {
      return <PortfolioPage {...pageProps} />;
    }

    if (currentPage === '/faq') {
      return <FAQPage {...pageProps} />;
    }

    /* =======================================================
       BLOG
    ======================================================= */

    if (currentPage === '/blog') {
      return <BlogPage {...pageProps} />;
    }

    if (currentPage.startsWith('/blog/')) {
      const slug = currentPage.replace('/blog/', '');

      const post = getBlogPost(slug);

      if (!post) {
        return <HomePage {...pageProps} />;
      }

      return (
        <BlogPostPage
          post={post}
          {...pageProps}
        />
      );
    }

    /* =======================================================
       SERVICE + CITY PAGES
    ======================================================= */

    const serviceCityPage = findServiceCityPage(currentPage);

    if (serviceCityPage) {
      return (
        <ServicePage
          service={serviceCityPage.service}
          city={serviceCityPage.city}
          {...pageProps}
        />
      );
    }

    /* =======================================================
       SPECIALTY SERVICE PAGES
    ======================================================= */

    if (specialtyRoutes[currentPage]) {
      const specialtyId = specialtyRoutes[currentPage];

      const specialty = getSpecialty(specialtyId);

      if (specialty) {
        return (
          <SpecialtyServicePage
            service={specialty}
            {...pageProps}
          />
        );
      }
    }

    /* =======================================================
       UNKNOWN URL
    ======================================================= */

    return <HomePage {...pageProps} />;
  };

  /* =========================================================
     APP LAYOUT
  ========================================================= */

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 flex flex-col justify-between">

      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenQuote={() => setQuoteModalOpen(true)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer
        onNavigate={handleNavigate}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />

    </div>
  );
}