import React, { useState, useEffect } from 'react';

import {
  Phone,
  Mail,
  MapPin,
  Sun,
  Moon,
  Menu,
  X,
  ArrowRight,
  Clock,
  ChevronDown,
  Sparkles,
} from 'lucide-react';

import {
  BRAND,
  SERVICES,
  SPECIALTY_SERVICES,
  CITIES,
} from '../data/siteData';

/*
|--------------------------------------------------------------------------
| Active Navigation
|--------------------------------------------------------------------------
*/

const isActive = (navId, currentPage) => {
  switch (navId) {
    case 'home':
      return currentPage === '/';

    case 'about':
      return currentPage === '/about-us';

    case 'services':
      return (
        currentPage === '/cleaning-services' ||
        currentPage.includes('-cleaning-services-in-') ||
        currentPage === '/area-rug-cleaning-services' ||
        currentPage === '/mattress-cleaning-services' ||
        currentPage === '/leather-couch-cleaning-services' ||
        currentPage === '/scotchgard-protection-services' ||
        currentPage === '/curtain-cleaning-services'
      );

    case 'areas':
      return currentPage === '/areas-we-serve';

    case 'pricing':
      return currentPage === '/cleaning-services-pricing';

    case 'reviews':
      return currentPage === '/our-reviews';

    case 'portfolio':
      return currentPage === '/portfolio';

    case 'faq':
      return currentPage === '/faq';

    case 'contact':
      return currentPage === '/contact-us';

    default:
      return false;
  }
};

/*
|--------------------------------------------------------------------------
| Service URL Map
|--------------------------------------------------------------------------
*/

const SERVICE_PATHS = {
  'carpet-cleaning':
    '/carpet-cleaning-services-in-north-hollywood',

  'upholstery-cleaning':
    '/upholstery-cleaning-services-in-north-hollywood',

  'tile-and-grout-cleaning':
    '/tile-and-grout-cleaning-services-in-north-hollywood',

  'area-rug-cleaning':
    '/area-rug-cleaning-services',

  'mattress-cleaning':
    '/mattress-cleaning-services',

  'leather-couch-cleaning':
    '/leather-couch-cleaning-services',

  'scotchgard-protection':
    '/scotchgard-protection-services',

  'curtain-cleaning':
    '/curtain-cleaning-services',
};

/*
|--------------------------------------------------------------------------
| Main Header
|--------------------------------------------------------------------------
*/

export default function Header({
  theme,
  toggleTheme,
  onOpenQuote,
  currentPage,
  onNavigate,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);

  /*
  |--------------------------------------------------------------------------
  | Scroll Listener
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Navigation Handler
  |--------------------------------------------------------------------------
  */

  const handleNavClick = (path, sectionId) => {
    if (!path) return;

    /*
     * Close mobile menu
     */
    setMobileMenuOpen(false);
    setMobileSection(null);

    /*
     * Make sure path starts with /
     */
    let targetPath = path;

    if (!targetPath.startsWith('/')) {
      targetPath = `/${targetPath}`;
    }

    /*
     * Remove trailing slash except homepage
     */
    if (
      targetPath !== '/' &&
      targetPath.endsWith('/')
    ) {
      targetPath = targetPath.slice(0, -1);
    }

    /*
     * If already on this page and there is a section,
     * just scroll to that section.
     */
    if (
      currentPage === targetPath &&
      sectionId
    ) {
      setTimeout(() => {
        const element =
          document.getElementById(sectionId);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 50);

      return;
    }

    /*
     * Navigate through App.jsx
     */
    onNavigate(targetPath);

    /*
     * Scroll to section after navigation
     */
    if (sectionId) {
      setTimeout(() => {
        const element =
          document.getElementById(sectionId);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 150);
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Main Navigation
  |--------------------------------------------------------------------------
  */

  const NAV_ITEMS = [
    {
      id: 'home',
      label: 'Home',
      path: '/',
    },
    {
      id: 'about',
      label: 'About Us',
      path: '/about-us',
    },
    {
      id: 'services',
      label: 'Cleaning Services',
      path: '/cleaning-services',
    },
    {
      id: 'areas',
      label: 'Areas We Serve',
      path: '/areas-we-serve',
    },
    {
      id: 'pricing',
      label: 'Pricing',
      path: '/cleaning-services-pricing',
    },
    {
      id: 'reviews',
      label: 'Reviews',
      path: '/our-reviews',
    },
    {
      id: 'portfolio',
      label: 'Portfolio',
      path: '/portfolio',
    },
    {
      id: 'faq',
      label: 'FAQ',
      path: '/faq',
    },
    {
      id: 'contact',
      label: 'Contact Us',
      path: '/contact-us',
    },
  ];

  /*
  |--------------------------------------------------------------------------
  | Render
  |--------------------------------------------------------------------------
  */

  return (
    <header className="relative z-50 w-full">

      {/* ================================================================
          TOP BAR
      ================================================================= */}

      <div className="bg-secondary text-slate-300 text-xs py-2 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

          <div className="flex items-center space-x-6">

            {/* Phone */}

            <a
              href={BRAND.phoneHref}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Phone
                size={14}
                className="text-primary"
              />

              <span>
                {BRAND.phone}
              </span>
            </a>

            {/* Email */}

            <a
              href={`mailto:${BRAND.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Mail
                size={14}
                className="text-primary"
              />

              <span>
                {BRAND.email}
              </span>
            </a>

            {/* Address */}

            <div className="hidden md:flex items-center gap-1.5 text-slate-400">

              <MapPin
                size={14}
                className="text-primary"
              />

              <span>
                {BRAND.address}
              </span>

            </div>

            {/* Hours */}

            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">

              <Clock
                size={14}
                className="text-primary"
              />

              <span>
                Mon – Sat: {BRAND.hours.weekdays}
              </span>

            </div>

          </div>

          {/* Theme Toggle */}

          <div className="flex items-center">

            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary text-white transition-all duration-300 flex items-center justify-center hover:rotate-12"
              aria-label="Toggle Theme"
              title={
                theme === 'dark'
                  ? 'Switch to Light Mode'
                  : 'Switch to Dark Mode'
              }
            >
              {theme === 'dark' ? (
                <Sun size={15} />
              ) : (
                <Moon size={15} />
              )}
            </button>

          </div>

        </div>

      </div>

      {/* ================================================================
          MAIN NAVBAR
      ================================================================= */}

      <div
        className={`
          bg-white
          dark:bg-dark-surface
          border-b
          border-slate-100
          dark:border-slate-800
          transition-all
          duration-300
          ${
            isScrolled
              ? 'fixed top-0 left-0 right-0 shadow-lg py-3 z-50 animate-slide-down'
              : 'py-4 shadow-sm'
          }
        `}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

          {/* ============================================================
              LOGO
          ============================================================= */}

          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2 text-left shrink-0"
            aria-label="Go to homepage"
          >

            <img
              src="/assets/iqora%20logo.png"
              alt="IQORA Cleaning Services"
              className="h-9 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />

          </button>

          {/* ============================================================
              DESKTOP NAVIGATION
          ============================================================= */}

          <nav className="hidden xl:flex items-center space-x-5">

            {NAV_ITEMS.map((item) => {

              /* ========================================================
                 CLEANING SERVICES DESKTOP DROPDOWN
              ======================================================== */

              if (item.id === 'services') {
                return (
                  <div
                    key={item.id}
                    className="relative group"
                  >

                    {/* Main Button */}

                    <button
                      type="button"
                      onClick={() =>
                        handleNavClick(
                          '/cleaning-services'
                        )
                      }
                      className={`
                        flex
                        items-center
                        gap-1
                        font-semibold
                        text-[13px]
                        transition-colors
                        whitespace-nowrap

                        ${
                          isActive(
                            item.id,
                            currentPage
                          )
                            ? 'text-primary font-bold'
                            : 'text-slate-700 dark:text-slate-200 hover:text-primary'
                        }
                      `}
                    >
                      {item.label}

                      <ChevronDown
                        size={14}
                        className="
                          transition-transform
                          duration-200
                          group-hover:rotate-180
                        "
                      />
                    </button>

                    {/* Dropdown */}

                    <div
                      className="
                        absolute
                        left-1/2
                        top-full
                        z-50
                        w-80
                        -translate-x-1/2
                        pt-3

                        opacity-0
                        invisible
                        translate-y-2

                        group-hover:opacity-100
                        group-hover:visible
                        group-hover:translate-y-0

                        transition-all
                        duration-200
                      "
                    >

                      <div
                        className="
                          bg-white
                          dark:bg-dark-card
                          rounded-2xl
                          border
                          border-slate-100
                          dark:border-slate-800
                          shadow-2xl
                          p-3
                        "
                      >

                        {/* Main Services */}

                        {SERVICES.map((service) => {

                          const Icon = service.icon;

                          return (
                            <button
                              key={service.id}
                              type="button"
                              onClick={() => {

                                const path =
                                  SERVICE_PATHS[
                                    service.id
                                  ];

                                if (path) {
                                  handleNavClick(path);
                                }

                              }}
                              className="
                                w-full
                                flex
                                items-center
                                gap-3
                                px-4
                                py-3
                                rounded-xl
                                text-left
                                text-sm
                                font-bold
                                text-slate-700
                                dark:text-slate-200
                                hover:text-primary
                                hover:bg-primary-light
                                dark:hover:bg-primary/10
                                transition-all
                              "
                            >

                              <Icon
                                size={17}
                                className="text-primary shrink-0"
                              />

                              <span className="flex-1">
                                {service.name}
                              </span>

                              <ArrowRight
                                size={14}
                              />

                            </button>
                          );

                        })}

                        {/* Specialty Services */}

                        {SPECIALTY_SERVICES.map(
                          (service) => {

                            const Icon = service.icon;

                            return (
                              <button
                                key={service.id}
                                type="button"
                                onClick={() => {

                                  const path =
                                    SERVICE_PATHS[
                                      service.id
                                    ];

                                  if (path) {
                                    handleNavClick(path);
                                  }

                                }}
                                className="
                                  w-full
                                  flex
                                  items-center
                                  gap-3
                                  px-4
                                  py-3
                                  rounded-xl
                                  text-left
                                  text-sm
                                  font-bold
                                  text-slate-700
                                  dark:text-slate-200
                                  hover:text-primary
                                  hover:bg-primary-light
                                  dark:hover:bg-primary/10
                                  transition-all
                                "
                              >

                                <Icon
                                  size={17}
                                  className="text-primary shrink-0"
                                />

                                <span className="flex-1">
                                  {service.name}
                                </span>

                                <ArrowRight
                                  size={14}
                                />

                              </button>
                            );

                          }
                        )}

                        {/* Divider */}

                        <div className="my-2 border-t border-slate-100 dark:border-slate-800" />

                        {/* View All */}

                        <button
                          type="button"
                          onClick={() =>
                            handleNavClick(
                              '/cleaning-services'
                            )
                          }
                          className="
                            w-full
                            flex
                            items-center
                            gap-3
                            px-4
                            py-3
                            rounded-xl
                            text-left
                            text-sm
                            font-extrabold
                            text-primary
                            hover:bg-primary-light
                            dark:hover:bg-primary/10
                            transition-all
                          "
                        >

                          <Sparkles size={17} />

                          <span className="flex-1">
                            View All Services
                          </span>

                          <ArrowRight size={14} />

                        </button>

                      </div>

                    </div>

                  </div>
                );
              }

              /* ========================================================
                 AREAS WE SERVE DESKTOP DROPDOWN
              ======================================================== */

              if (item.id === 'areas') {
                return (
                  <div
                    key={item.id}
                    className="relative group"
                  >

                    {/* Main Button */}

                    <button
                      type="button"
                      onClick={() =>
                        handleNavClick(
                          '/areas-we-serve'
                        )
                      }
                      className={`
                        flex
                        items-center
                        gap-1
                        font-semibold
                        text-[13px]
                        transition-colors
                        whitespace-nowrap

                        ${
                          isActive(
                            item.id,
                            currentPage
                          )
                            ? 'text-primary font-bold'
                            : 'text-slate-700 dark:text-slate-200 hover:text-primary'
                        }
                      `}
                    >
                      {item.label}

                      <ChevronDown
                        size={14}
                        className="
                          transition-transform
                          duration-200
                          group-hover:rotate-180
                        "
                      />
                    </button>

                    {/* Areas Dropdown */}

                    <div
                      className="
                        absolute
                        left-1/2
                        top-full
                        z-50
                        w-72
                        -translate-x-1/2
                        pt-3

                        opacity-0
                        invisible
                        translate-y-2

                        group-hover:opacity-100
                        group-hover:visible
                        group-hover:translate-y-0

                        transition-all
                        duration-200
                      "
                    >

                      <div
                        className="
                          bg-white
                          dark:bg-dark-card
                          rounded-2xl
                          border
                          border-slate-100
                          dark:border-slate-800
                          shadow-2xl
                          p-3
                        "
                      >

                        {/* All Areas */}

                        <button
                          type="button"
                          onClick={() =>
                            handleNavClick(
                              '/areas-we-serve'
                            )
                          }
                          className="
                            w-full
                            flex
                            items-center
                            gap-3
                            px-4
                            py-3
                            rounded-xl
                            text-left
                            text-sm
                            font-extrabold
                            text-primary
                            hover:bg-primary-light
                            dark:hover:bg-primary/10
                            transition-all
                          "
                        >

                          <MapPin size={17} />

                          <span className="flex-1">
                            All Areas We Serve
                          </span>

                          <ArrowRight size={14} />

                        </button>

                        {/* Divider */}

                        <div className="my-2 border-t border-slate-100 dark:border-slate-800" />

                        {/* Cities */}

                        {CITIES.map((city) => (

                          <button
                            key={city.slug}
                            type="button"
                            onClick={() =>
                              handleNavClick(
                                '/areas-we-serve',
                                `city-${city.slug}`
                              )
                            }
                            className="
                              w-full
                              flex
                              items-center
                              gap-3
                              px-4
                              py-2.5
                              rounded-xl
                              text-left
                              text-sm
                              font-bold
                              text-slate-700
                              dark:text-slate-200
                              hover:text-primary
                              hover:bg-primary-light
                              dark:hover:bg-primary/10
                              transition-all
                            "
                          >

                            <MapPin
                              size={15}
                              className="text-primary shrink-0"
                            />

                            <span className="flex-1">
                              {city.name}
                            </span>

                            <ArrowRight
                              size={13}
                            />

                          </button>

                        ))}

                      </div>

                    </div>

                  </div>
                );
              }

              /* ========================================================
                 NORMAL NAVIGATION ITEMS
              ======================================================== */

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    handleNavClick(item.path)
                  }
                  className={`
                    font-semibold
                    text-[13px]
                    transition-colors
                    whitespace-nowrap

                    ${
                      isActive(
                        item.id,
                        currentPage
                      )
                        ? 'text-primary font-bold'
                        : 'text-slate-700 dark:text-slate-200 hover:text-primary'
                    }
                  `}
                >
                  {item.label}
                </button>
              );

            })}

          </nav>

          {/* ============================================================
              CTA + MOBILE BUTTON
          ============================================================= */}

          <div className="flex items-center gap-4 shrink-0">

            {/* Quote Button */}

            <button
              onClick={onOpenQuote}
              className="hidden md:inline-flex btn-primary-tw !px-5 !py-2.5"
            >
              <span>
                Get a Quote
              </span>

              <ArrowRight size={16} />
            </button>

            {/* Mobile Hamburger */}

            <button
              onClick={() =>
                setMobileMenuOpen(
                  !mobileMenuOpen
                )
              }
              className="xl:hidden p-2 text-slate-700 dark:text-slate-200 hover:text-primary transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={26} />
              ) : (
                <Menu size={26} />
              )}
            </button>

          </div>

        </div>

      </div>

      {/* ================================================================
          MOBILE MENU
      ================================================================= */}

      {mobileMenuOpen && (

        <div className="xl:hidden bg-white dark:bg-dark-surface border-b border-slate-200 dark:border-slate-800 px-4 py-6 shadow-xl space-y-4 max-h-[80vh] overflow-y-auto animate-slide-down">

          <nav className="flex flex-col space-y-1 font-semibold text-slate-800 dark:text-slate-200">

            {/* HOME */}

            <button
              onClick={() =>
                handleNavClick('/')
              }
              className="text-left py-2 hover:text-primary"
            >
              Home
            </button>

            {/* ABOUT */}

            <button
              onClick={() =>
                handleNavClick('/about-us')
              }
              className="text-left py-2 hover:text-primary"
            >
              About Us
            </button>

            {/* ==========================================================
                CLEANING SERVICES
            =========================================================== */}

            <div>

              <button
                onClick={() =>
                  setMobileSection(
                    mobileSection === 'services'
                      ? null
                      : 'services'
                  )
                }
                className="w-full flex items-center justify-between py-2 hover:text-primary"
                aria-expanded={mobileSection === 'services'}
              >

                <span>
                  Cleaning Services
                </span>

                <ChevronDown
                  size={16}
                  className={`
                    transition-transform
                    duration-300

                    ${
                      mobileSection === 'services'
                        ? 'rotate-180'
                        : ''
                    }
                  `}
                />

              </button>

              {mobileSection === 'services' && (

                <div className="pl-4 border-l-2 border-primary/30 space-y-1.5 py-1 animate-fade-in">

                  {/* Main Services */}

                  {SERVICES.map((service) => {

                    const Icon = service.icon;

                    return (
                      <button
                        key={service.id}
                        onClick={() => {

                          const path =
                            SERVICE_PATHS[
                              service.id
                            ];

                          if (path) {
                            handleNavClick(path);
                          }

                        }}
                        className="w-full flex items-center gap-2 text-left text-sm py-1.5 text-slate-600 dark:text-slate-300 hover:text-primary"
                      >

                        <Icon
                          size={15}
                          className="text-primary"
                        />

                        {service.name}

                      </button>
                    );

                  })}

                  {/* Specialty Services */}

                  {SPECIALTY_SERVICES.map(
                    (service) => {

                      const Icon = service.icon;

                      return (
                        <button
                          key={service.id}
                          onClick={() => {

                            const path =
                              SERVICE_PATHS[
                                service.id
                              ];

                            if (path) {
                              handleNavClick(path);
                            }

                          }}
                          className="w-full flex items-center gap-2 text-left text-sm py-1.5 text-slate-600 dark:text-slate-300 hover:text-primary"
                        >

                          <Icon
                            size={15}
                            className="text-primary"
                          />

                          {service.name}

                        </button>
                      );

                    }
                  )}

                  {/* View All */}

                  <button
                    onClick={() =>
                      handleNavClick(
                        '/cleaning-services'
                      )
                    }
                    className="w-full flex items-center gap-2 text-left text-sm py-1.5 font-bold text-primary"
                  >

                    <Sparkles size={15} />

                    View All Services

                  </button>

                </div>

              )}

            </div>

            {/* ==========================================================
                AREAS WE SERVE
            =========================================================== */}

            <div>

              <button
                onClick={() =>
                  setMobileSection(
                    mobileSection === 'areas'
                      ? null
                      : 'areas'
                  )
                }
                className="w-full flex items-center justify-between py-2 hover:text-primary"
                aria-expanded={mobileSection === 'areas'}
              >

                <span>
                  Areas We Serve
                </span>

                <ChevronDown
                  size={16}
                  className={`
                    transition-transform
                    duration-300

                    ${
                      mobileSection === 'areas'
                        ? 'rotate-180'
                        : ''
                    }
                  `}
                />

              </button>

              {mobileSection === 'areas' && (

                <div className="pl-4 border-l-2 border-primary/30 space-y-1.5 py-1">

                  {/* All Areas */}

                  <button
                    onClick={() =>
                      handleNavClick(
                        '/areas-we-serve'
                      )
                    }
                    className="w-full flex items-center gap-2 text-left text-sm py-1.5 font-bold text-primary"
                  >

                    <MapPin size={15} />

                    All Areas We Serve

                  </button>

                  {/* Cities */}

                  {CITIES.map((city) => (

                    <button
                      key={city.slug}
                      onClick={() =>
                        handleNavClick(
                          '/areas-we-serve',
                          `city-${city.slug}`
                        )
                      }
                      className="w-full flex items-center gap-2 text-left text-sm py-1.5 text-slate-600 dark:text-slate-300 hover:text-primary"
                    >

                      <MapPin
                        size={14}
                        className="text-primary"
                      />

                      {city.name}

                    </button>

                  ))}

                </div>

              )}

            </div>

            {/* ==========================================================
                OTHER PAGES
            =========================================================== */}

            <button
              onClick={() =>
                handleNavClick(
                  '/cleaning-services-pricing'
                )
              }
              className="text-left py-2 hover:text-primary"
            >
              Pricing
            </button>

            <button
              onClick={() =>
                handleNavClick(
                  '/our-reviews'
                )
              }
              className="text-left py-2 hover:text-primary"
            >
              Reviews
            </button>

            <button
              onClick={() =>
                handleNavClick(
                  '/portfolio'
                )
              }
              className="text-left py-2 hover:text-primary"
            >
              Portfolio
            </button>

            <button
              onClick={() =>
                handleNavClick('/faq')
              }
              className="text-left py-2 hover:text-primary"
            >
              FAQ
            </button>

            <button
              onClick={() =>
                handleNavClick('/contact-us')
              }
              className="text-left py-2 text-primary"
            >
              Contact Us
            </button>

          </nav>

          {/* MOBILE QUOTE */}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setMobileSection(null);
              onOpenQuote();
            }}
            className="btn-primary-tw w-full justify-center mt-2"
          >

            <span>
              Get a Free Quote
            </span>

            <ArrowRight size={16} />

          </button>

        </div>

      )}

    </header>
  );
}