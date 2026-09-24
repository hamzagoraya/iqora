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
  ChevronRight,
} from 'lucide-react';

import {
  BRAND,
  SERVICES,
  SPECIALTY_SERVICES,
  CITIES,
  getServiceMainPath,
  getServicePath,
  getServiceCityPath,
  getSpecialtyPath,
  getAreaPath,
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

    case 'team':
      return currentPage === '/our-team';

    case 'services':
      return (
        currentPage === '/cleaning-services' ||
        currentPage === '/carpet-cleaning' ||
        currentPage === '/upholstery-cleaning' ||
        currentPage === '/tile-and-grout-cleaning' ||
        currentPage.includes('-cleaning-services-in-') ||
        currentPage === '/area-rug-cleaning-services' ||
        currentPage === '/mattress-cleaning-services' ||
        currentPage === '/leather-couch-cleaning-services' ||
        currentPage === '/scotchgard-protection-services' ||
        currentPage === '/curtain-cleaning-services'
      );

    case 'areas':
      return (
        currentPage === '/areas-we-serve' ||
        currentPage.startsWith('/cleaning-services-in-')
      );

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const [mobileSubSection, setMobileSubSection] = useState(null);
  const [desktopSubSection, setDesktopSubSection] = useState(null);

  const navbarRef = React.useRef(null);

  /*
  |--------------------------------------------------------------------------
  | Close menus on route change
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSection(null);
    setMobileSubSection(null);
    setDesktopSubSection(null);
  }, [currentPage]);

  /*
  |--------------------------------------------------------------------------
  | Keyboard and outside click handlers
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        setMobileSection(null);
        setMobileSubSection(null);
        setDesktopSubSection(null);
      }
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest('.group\\/sub')) {
        setDesktopSubSection(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Prevent body scrolling when mobile menu is open
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  /*
  |--------------------------------------------------------------------------
  | Navbar height offset
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const updateContentOffset = () => {
      const offset = navbarRef.current?.offsetHeight || 0;

      document.documentElement.style.setProperty(
        '--fixed-navbar-offset',
        `${offset}px`
      );
    };

    updateContentOffset();

    const resizeObserver = new ResizeObserver(updateContentOffset);

    if (navbarRef.current) {
      resizeObserver.observe(navbarRef.current);
    }

    window.addEventListener('resize', updateContentOffset);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateContentOffset);
      document.documentElement.style.removeProperty(
        '--fixed-navbar-offset'
      );
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Navigation Handler
  |--------------------------------------------------------------------------
  */

  const handleNavClick = (path, sectionId) => {
    if (!path) return;

    setMobileMenuOpen(false);
    setMobileSection(null);
    setMobileSubSection(null);
    setDesktopSubSection(null);

    let targetPath = path;

    if (!targetPath.startsWith('/')) {
      targetPath = `/${targetPath}`;
    }

    if (targetPath !== '/' && targetPath.endsWith('/')) {
      targetPath = targetPath.slice(0, -1);
    }

    if (currentPage === targetPath && sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 50);

      return;
    }

    onNavigate(targetPath);

    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);

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
      id: 'contact',
      label: 'Contact Us',
      path: '/contact-us',
    },
    {
      id: 'team',
      label: 'Our Team',
      path: '/our-team',
    },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-[10000] isolate w-full bg-white dark:bg-dark-surface">
      {/* ================================================================
          TOP BAR
      ================================================================= */}

      <div className="hidden lg:block bg-secondary text-slate-300 text-xs py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            {/* Phone */}
            <a
              href={BRAND.phoneHref}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Phone size={14} className="text-primary" />

              <span>{BRAND.phone}</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${BRAND.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Mail size={14} className="text-primary" />

              <span>{BRAND.email}</span>
            </a>

            {/* Address */}
            <div className="hidden md:flex items-center gap-1.5 text-slate-400">
              <MapPin size={14} className="text-primary" />

              <span>{BRAND.address}</span>
            </div>

            {/* Hours */}
            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock size={14} className="text-primary" />

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
        ref={navbarRef}
        className="
          relative
          z-[100]
          w-full
          bg-navy
          border-b
          border-white/10
          shadow-lg
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-3">
            {/* LOGO */}
            <button
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-2 text-left shrink-0"
              aria-label="Go to homepage"
            >
              <img
                src="/assets/iqora logo.png"
                alt="IQORA Cleaning Services"
                className="h-10 w-auto max-w-[190px] object-contain brightness-0 invert"
              />
            </button>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden xl:flex items-center space-x-5">
              {NAV_ITEMS.map((item) => {
                /*
                ============================================================
                CLEANING SERVICES DESKTOP DROPDOWN
                ============================================================
                */

                if (item.id === 'services') {
                  return (
                    <div
                      key={item.id}
                      className="relative group"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          handleNavClick('/cleaning-services')
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
                            isActive(item.id, currentPage)
                              ? 'text-primary font-bold'
                              : 'text-slate-200 hover:text-primary'
                          }
                        `}
                      >
                        {item.label}

                        <ChevronDown
                          size={14}
                          className="transition-transform duration-200 group-hover:rotate-180"
                        />
                      </button>

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
                          group-focus-within:opacity-100
                          group-focus-within:visible
                          group-focus-within:translate-y-0
                          transition-all
                          duration-200
                        "
                      >
                        <div className="bg-white dark:bg-dark-card rounded-2xl border border-slate-100 dark:border-slate-800 shadow-2xl p-3">
                          {/* Main Services */}
                          {SERVICES.map((service) => {
                            const Icon = service.icon;

                            const hasSubmenu = [
                              'carpet-cleaning',
                              'upholstery-cleaning',
                              'tile-and-grout-cleaning',
                            ].includes(service.id);

                            const isSubVisible =
                              desktopSubSection === service.id;

                            const ServiceItem = (
                              <a
                                key={service.id}
                                href={
                                  hasSubmenu
                                    ? getServiceMainPath(service.id)
                                    : getServicePath(service.id)
                                }
                                onClick={(event) => {
                                  event.preventDefault();
                                  handleNavClick(
                                    hasSubmenu
                                      ? getServiceMainPath(service.id)
                                      : getServicePath(service.id)
                                  );
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

                                {hasSubmenu ? (
                                  <ChevronRight size={14} />
                                ) : (
                                  <ArrowRight size={14} />
                                )}
                              </a>
                            );

                            if (!hasSubmenu) {
                              return ServiceItem;
                            }

                            return (
                              <div
                                key={service.id}
                                className="relative group/sub"
                                onMouseEnter={() =>
                                  setDesktopSubSection(null)
                                }
                              >
                                {ServiceItem}

                                <div
                                  className={`
                                    absolute
                                    left-full
                                    top-0
                                    ml-2
                                    z-50
                                    w-64
                                    ${
                                      isSubVisible
                                        ? 'opacity-100 visible translate-x-0'
                                        : 'opacity-0 invisible translate-x-2 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-0 group-focus-within/sub:opacity-100 group-focus-within/sub:visible group-focus-within/sub:translate-x-0'
                                    }
                                    transition-all
                                    duration-200
                                  `}
                                >
                                  <div className="bg-white dark:bg-dark-card rounded-2xl border border-slate-100 dark:border-slate-800 shadow-2xl p-3 max-h-[70vh] overflow-y-auto">
                                    {CITIES.map((city) => (
                                      <button
                                        key={city.slug}
                                        type="button"
                                        onClick={(event) => {
                                          event.stopPropagation();

                                          handleNavClick(
                                            getServiceCityPath(
                                              service.id,
                                              city.slug
                                            )
                                          );
                                        }}
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
                                          {service.name} in {city.name}
                                        </span>

                                        <ArrowRight size={13} />
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            );
                          })}

                          {/* Specialty Services */}
                          {SPECIALTY_SERVICES.map((service) => {
                            const Icon = service.icon;

                            return (
                              <button
                                key={service.id}
                                type="button"
                                onClick={() => {
                                  const path = getSpecialtyPath(service.id);

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

                                <ArrowRight size={14} />
                              </button>
                            );
                          })}

                        </div>
                      </div>
                    </div>
                  );
                }

                /*
                ============================================================
                AREAS WE SERVE DESKTOP DROPDOWN
                ============================================================
                */

                if (item.id === 'areas') {
                  return (
                    <div
                      key={item.id}
                      className="relative group"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          handleNavClick('/areas-we-serve')
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
                            isActive(item.id, currentPage)
                              ? 'text-primary font-bold'
                              : 'text-slate-200 hover:text-primary'
                          }
                        `}
                      >
                        {item.label}

                        <ChevronDown
                          size={14}
                          className="transition-transform duration-200 group-hover:rotate-180"
                        />
                      </button>

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
                          group-focus-within:opacity-100
                          group-focus-within:visible
                          group-focus-within:translate-y-0
                          transition-all
                          duration-200
                        "
                      >
                        <div className="bg-white dark:bg-dark-card rounded-2xl border border-slate-100 dark:border-slate-800 shadow-2xl p-3 max-h-[calc(100vh-180px)] flex flex-col">
                          {/* Cities */}
                          <div className="overflow-y-auto min-h-0 areas-dropdown-scroll">
                            {CITIES.map((city) => (
                              <button
                                key={city.slug}
                                type="button"
                                onClick={() =>
                                  handleNavClick(getAreaPath(city.slug))
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

                                <ArrowRight size={13} />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                /*
                ============================================================
                NORMAL NAVIGATION ITEMS
                ============================================================
                */

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.path)}
                    className={`
                      font-semibold
                      text-[13px]
                      transition-colors
                      whitespace-nowrap
                      ${
                        isActive(item.id, currentPage)
                          ? 'text-primary font-bold'
                          : 'text-slate-200 hover:text-primary'
                      }
                    `}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* CTA + MOBILE BUTTON */}
            <div className="flex items-center gap-4 shrink-0">
              {/* Quote Button */}
              <button
                onClick={onOpenQuote}
                className="hidden md:inline-flex btn-primary-tw !px-5 !py-2.5"
              >
                <span>Get a Quote</span>

                <ArrowRight size={16} />
              </button>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 text-slate-200 hover:text-primary transition-colors"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
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
      </div>

      {/* ================================================================
          MOBILE MENU
      ================================================================= */}

      {mobileMenuOpen && (
        <>
          <button
            type="button"
            aria-label="Close mobile menu"
            onClick={() => {
              setMobileMenuOpen(false);
              setMobileSection(null);
              setMobileSubSection(null);
            }}
            className="xl:hidden fixed inset-x-0 top-[76px] bottom-0 z-[9997] bg-black/40"
          />

          <div
            id="mobile-navigation"
            className="
              xl:hidden
              fixed
              inset-x-0
              top-[76px]
              z-[9998]
              w-full
              max-h-[calc(100dvh-76px)]
              overflow-y-auto
              overscroll-contain
              bg-navy
              border-b
              border-white/10
              px-4
              py-6
              shadow-2xl
              space-y-4
            "
          >
            <nav className="flex flex-col space-y-1 font-semibold text-white">
              {/* HOME */}
              <button
                onClick={() => handleNavClick('/')}
                className="text-left py-2 hover:text-primary"
              >
                Home
              </button>

              {/* ABOUT */}
              <button
                onClick={() => handleNavClick('/about-us')}
                className="text-left py-2 hover:text-primary"
              >
                About Us
              </button>

              {/* CLEANING SERVICES */}
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
                  aria-controls="mobile-services-submenu"
                >
                  <span>Cleaning Services</span>

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
                  <div
                    id="mobile-services-submenu"
                    className="pl-4 border-l-2 border-primary/30 space-y-1.5 py-1 animate-fade-in"
                  >
                    {/* Main Services */}
                    {SERVICES.map((service) => {
                      const Icon = service.icon;

                      const hasSubmenu = [
                        'carpet-cleaning',
                        'upholstery-cleaning',
                        'tile-and-grout-cleaning',
                      ].includes(service.id);

                      if (!hasSubmenu) {
                        return (
                          <button
                            key={service.id}
                            onClick={() => {
                              const path = getServicePath(service.id);

                              if (path) {
                                handleNavClick(path);
                              }
                            }}
                            className="w-full flex items-center gap-2 text-left text-sm py-1.5 text-slate-200 hover:text-primary"
                          >
                            <Icon
                              size={15}
                              className="text-primary"
                            />

                            {service.name}
                          </button>
                        );
                      }

                      return (
                        <div
                          key={service.id}
                          className="w-full"
                        >
                          <div className="w-full flex items-center justify-between py-1.5 text-sm text-slate-200 hover:text-primary">
                            <a
                              href={getServiceMainPath(service.id)}
                              onClick={(event) => {
                                event.preventDefault();
                                handleNavClick(getServiceMainPath(service.id));
                              }}
                              className="flex items-center gap-2"
                            >
                              <Icon
                                size={15}
                                className="text-primary"
                              />

                              {service.name}
                            </a>

                            <button
                              type="button"
                              onClick={() =>
                                setMobileSubSection(
                                  mobileSubSection === service.id
                                    ? null
                                    : service.id
                                )
                              }
                              aria-expanded={mobileSubSection === service.id}
                              aria-controls={`mobile-${service.id}-submenu`}
                              className="p-1"
                            >
                              <ChevronDown
                                size={14}
                                className={`
                                  transition-transform
                                  duration-300
                                  ${
                                    mobileSubSection === service.id
                                      ? 'rotate-180'
                                      : ''
                                  }
                                `}
                              />
                            </button>
                          </div>

                          {mobileSubSection === service.id && (
                            <div
                              id={`mobile-${service.id}-submenu`}
                              className="pl-6 border-l-2 border-primary/20 space-y-1 py-1 mt-1 animate-fade-in"
                            >
                              {CITIES.map((city) => (
                                <button
                                  key={city.slug}
                                  onClick={() =>
                                    handleNavClick(
                                      getServiceCityPath(
                                        service.id,
                                        city.slug
                                      )
                                    )
                                  }
                                  className="w-full flex items-center gap-2 text-left text-sm py-1.5 text-slate-300 hover:text-primary"
                                >
                                  <MapPin
                                    size={13}
                                    className="text-primary/70"
                                  />

                                  {service.name} in {city.name}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}

                    {/* Specialty Services */}
                    {SPECIALTY_SERVICES.map((service) => {
                      const Icon = service.icon;

                      return (
                        <button
                          key={service.id}
                          onClick={() => {
                            const path = getSpecialtyPath(service.id);

                            if (path) {
                              handleNavClick(path);
                            }
                          }}
                          className="w-full flex items-center gap-2 text-left text-sm py-1.5 text-slate-200 hover:text-primary"
                        >
                          <Icon
                            size={15}
                            className="text-primary"
                          />

                          {service.name}
                        </button>
                      );
                    })}

                  </div>
                )}
              </div>

              {/* AREAS WE SERVE */}
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
                  aria-controls="mobile-areas-submenu"
                >
                  <span>Areas We Serve</span>

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
                  <div
                    id="mobile-areas-submenu"
                    className="pl-4 border-l-2 border-primary/30 space-y-1.5 py-1"
                  >
                    {/* Cities */}
                    {CITIES.map((city) => (
                      <button
                        key={city.slug}
                        onClick={() =>
                          handleNavClick(getAreaPath(city.slug))
                        }
                        className="w-full flex items-center gap-2 text-left text-sm py-1.5 text-slate-200 hover:text-primary"
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

              {/* OTHER PAGES */}
              <button
                onClick={() =>
                  handleNavClick('/cleaning-services-pricing')
                }
                className="text-left py-2 hover:text-primary"
              >
                Pricing
              </button>

              <button
                onClick={() => handleNavClick('/our-reviews')}
                className="text-left py-2 hover:text-primary"
              >
                Reviews
              </button>

              <button
                onClick={() => handleNavClick('/portfolio')}
                className="text-left py-2 hover:text-primary"
              >
                Portfolio
              </button>

              <button
                onClick={() => handleNavClick('/faq')}
                className="text-left py-2 hover:text-primary"
              >
                FAQ
              </button>

              <button
                onClick={() => handleNavClick('/contact-us')}
                className="text-left py-2 text-primary"
              >
                Contact Us
              </button>

              <button
                onClick={() => handleNavClick('/our-team')}
                className="text-left py-2 hover:text-primary"
              >
                Our Team
              </button>
            </nav>

            {/* MOBILE QUOTE */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileSection(null);
                setMobileSubSection(null);
                onOpenQuote();
              }}
              className="btn-primary-tw w-full justify-center mt-2"
            >
              <span>Get a Free Quote</span>

              <ArrowRight size={16} />
            </button>
          </div>
        </>
      )}
    </header>
  );
}