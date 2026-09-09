import { useEffect } from 'react';

export default function useRevealAnimations(pageKey) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('motion-ready');
    const revealItems = document.querySelectorAll('[data-reveal]');
    const staggerGroups = document.querySelectorAll('[data-reveal-stagger]');

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      staggerGroups.forEach((group) => group.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    [...revealItems, ...staggerGroups].forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [pageKey]);
}