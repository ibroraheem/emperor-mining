'use client';

/**
 * Hero.tsx
 * Full-viewport hero section with:
 * - Dark overlay over background mining photo
 * - Framer Motion staggered fade-up entrance
 * - Headline, subheadline, dual CTAs
 * - Three bottom stat blocks
 */

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

// Stat blocks displayed at the bottom of the hero
const STATS = [
  { value: 'Full Spectrum', label: 'Services Offered' },
  { value: 'JORC Aligned', label: 'Reporting Standard' },
  { value: 'End-to-End', label: 'Client Support' },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Background Image ────────────────────────────────────────────────
          HERO BACKGROUND: Replace with your most dramatic wide-angle quarry
          or mining operations photo. Landscape orientation preferred.
          Filename: hero-bg.jpg
          Path: /public/images/hero-bg.jpg
          Ideal: aerial or ground-level panorama showing scale of pit,
          excavators, or open-cast mining operation at golden hour.
      ────────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Emperor Mining Consultancy active quarry site showing multiple SANY excavators and dump trucks in coordinated large-scale mining operation"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        {/* Dark overlay — 70% opacity #1A1A1A for readability */}
        <div
          className="absolute inset-0 bg-mining-black/70"
          aria-hidden="true"
        />
        {/* Subtle gradient fade at bottom to blend into next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-mining-black to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* ── Hero Content ─────────────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 section-container flex flex-col items-center text-center pt-28 pb-40 md:pt-36 md:pb-48"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Orange badge pill */}
        <motion.span
          variants={itemVariants}
          className="inline-block bg-mining-orange/20 border border-mining-orange/50 text-mining-orange
                     text-xs md:text-sm font-semibold tracking-[0.15em] uppercase px-5 py-2 rounded-full mb-6"
        >
          Mining &amp; Geological Consultancy
        </motion.span>

        {/* H1 — only one per page */}
        <motion.h1
          id="hero-heading"
          variants={itemVariants}
          className="font-heading text-6xl md:text-8xl lg:text-9xl text-white leading-none mb-6 max-w-5xl"
        >
          Unlocking Value{' '}
          <span className="text-mining-orange">Beneath</span> the Surface
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-white/75 text-base md:text-lg max-w-2xl leading-relaxed mb-10"
        >
          Full-spectrum mining consultancy — from licensing and exploration to
          resource evaluation and geological analysis across Nigeria and Africa.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <button
            onClick={() => handleScroll('#services')}
            className="btn-primary text-base"
            aria-label="View our mining consultancy services"
          >
            Our Services
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="btn-outline text-base"
            aria-label="Contact Emperor Mining Consultancy"
          >
            Contact Us
          </button>
        </motion.div>

        {/* Stat Blocks */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 w-full max-w-2xl"
          role="list"
          aria-label="Key service highlights"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.value}
              role="listitem"
              className={`flex flex-col items-center px-6 ${
                i < STATS.length - 1
                  ? 'sm:border-r sm:border-white/20'
                  : ''
              }`}
            >
              <span className="font-heading text-3xl md:text-4xl text-mining-orange mb-1">
                {stat.value}
              </span>
              <span className="text-white/60 text-xs tracking-widest uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ─────────────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
