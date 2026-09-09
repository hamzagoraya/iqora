import React, { useEffect, useRef, useState } from 'react';

const parseValue = (value) => {
  const match = String(value).match(/^([\d.]+)([MK]?)(.*)$/i);
  if (!match) return null;

  const [, amount, unit, suffix] = match;
  const multiplier = unit.toUpperCase() === 'M' ? 1000000 : unit.toUpperCase() === 'K' ? 1000 : 1;

  return {
    amount: Number(amount),
    unit,
    suffix,
    multiplier,
  };
};

const formatValue = (parsed, amount) => {
  if (!parsed) return String(amount);
  const scaledAmount = amount / parsed.multiplier;
  const formattedAmount = parsed.unit ? scaledAmount.toFixed(parsed.amount % 1 ? 1 : 0) : Math.round(scaledAmount);
  return `${formattedAmount}${parsed.unit}${parsed.suffix}`;
};

export default function AnimatedStatValue({ value }) {
  const statRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const parsedValue = parseValue(value);
    if (!statRef.current || !parsedValue || !('IntersectionObserver' in window)) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    let frameId;
    let started = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      observer.disconnect();
      const startTime = performance.now();

      const animate = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / 900, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(formatValue(parsedValue, parsedValue.amount * parsedValue.multiplier * easedProgress));
        if (progress < 1) frameId = requestAnimationFrame(animate);
      };

      frameId = requestAnimationFrame(animate);
    }, { threshold: 0.35 });

    observer.observe(statRef.current);
    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [value]);

  return <span ref={statRef}>{displayValue}</span>;
}