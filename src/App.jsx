import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OurTeamPage from './pages/OurTeamPage';
import ContactPage from './pages/ContactPage';
import ServicesHubPage from './pages/ServicesHubPage';
import AreasWeServePage from './pages/AreasWeServePage';
import AreaPage from './pages/AreaPage';
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
  getServiceMainPath,
  getSpecialty,
  getCity,
  getBlogPost,
  SERVICES,
  getServicePath,
  getServiceCityPath,
  getSpecialtyPath,
  AREA_ROUTE_PREFIX,
  MAIN_PAGE_ROUTES,
} from './data/siteData';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('iqora-theme') || 'light';
  });

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const getCurrentPath = () => {
    let path = window.location.pathname;

    if (path !== '/' && path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    return path;
  };

  const [currentPage, setCurrentPage] = useState(getCurrentPath());

  useRevealAnimations(currentPage);

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

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const normalizeRoute = (path) => {
    if (!path) return path;

    let normalized = String(path).trim();

    if (normalized in MAIN_PAGE_ROUTES) {
      return MAIN_PAGE_ROUTES[normalized];
    }

    if (!normalized.startsWith('/')) {
      if (normalized === 'home') normalized = '/';
      else if (normalized === 'about') normalized = '/about-us';
      else if (normalized === 'services') normalized = '/cleaning-services';
      else if (normalized === 'areas') normalized = '/areas-we-serve';
      else if (normalized === 'pricing') {
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

  const pageProps = {
    theme,
    onOpenQuote: () => setQuoteModalOpen(true),
    onNavigate: handleNavigate,
  };

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

  const specialtyRoutes = {
    '/area-rug-cleaning-services': 'area-rug-cleaning',
    '/mattress-cleaning-services': 'mattress-cleaning',
    '/leather-couch-cleaning-services': 'leather-couch-cleaning',
    '/scotchgard-protection-services': 'scotchgard-protection',
    '/curtain-cleaning-services': 'curtain-cleaning',
  };

  const mainServiceRoutes = Object.fromEntries(
    SERVICES.map((service) => [getServiceMainPath(service.id), service.id])
  );

  const renderPage = () => {
    if (currentPage === '/') {
      return <HomePage {...pageProps} />;
    }

    if (currentPage === '/about-us') {
      return <AboutPage {...pageProps} />;
    }

    if (currentPage === '/our-team') {
      return <OurTeamPage {...pageProps} />;
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

    if (currentPage === '/blog') {
      return <BlogPage {...pageProps} />;
    }

    if (mainServiceRoutes[currentPage]) {
      const service = getService(mainServiceRoutes[currentPage]);
      const city = getCity('los-angeles');

      if (service && city) {
        return <ServicePage service={service} city={city} {...pageProps} />;
      }
    }

    if (currentPage.startsWith('/blog/')) {
      const slug = currentPage.replace('/blog/', '');
      const post = getBlogPost(slug);

      if (!post) {
        return <HomePage {...pageProps} />;
      }

      return <BlogPostPage post={post} {...pageProps} />;
    }

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

    if (currentPage.startsWith(AREA_ROUTE_PREFIX)) {
      const citySlug = currentPage.replace(AREA_ROUTE_PREFIX, '');
      const city = getCity(citySlug);

      if (city) {
        return <AreaPage city={city} {...pageProps} />;
      }
    }

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

    return <HomePage {...pageProps} />;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 flex flex-col justify-between">
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenQuote={() => setQuoteModalOpen(true)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <div className="h-[76px] lg:h-[116px]" aria-hidden="true" />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}