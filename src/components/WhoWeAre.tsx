'use client';

/**
 * WhoWeAre.tsx
 * Two-column "About" section with:
 * - Company description and trust badges on the left
 * - Operations photo with orange accent border on the right
 * - Framer Motion slide-in from opposite sides on scroll
 */

import Image from 'next/image';
import { motion } from 'framer-motion';

// Trust badges shown below the body copy
const TRUST_BADGES = [
  { icon: '⛏', label: 'Field-Proven Team' },
  { icon: '📋', label: 'JORC-Aligned Reports' },
  { icon: '🔍', label: 'End-to-End Service' },
];

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="section-padding bg-mining-cream"
      aria-labelledby="who-we-are-heading"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left Column — Text ──────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Section label */}
            <span className="section-label">Who We Are</span>

            {/* H2 */}
            <h2
              id="who-we-are-heading"
              className="font-heading text-4xl md:text-5xl lg:text-6xl text-mining-black leading-tight mb-6"
            >
              Africa&apos;s Trusted Mining Consultancy Partner
            </h2>

            {/* Body copy */}
            <p className="text-mining-black/75 text-base md:text-lg leading-relaxed mb-8">
              Emperor Mining Consultancy Limited (EMC) is a mining and
              geological consultancy firm offering full-spectrum services from
              licensing to exploration to resource evaluation and mining
              consultation. We specialize in delivering accurate data, practical
              insights, and reliable solutions that support informed
              decision-making in the mining sector.
            </p>

            {/* Trust badges */}
            <ul className="flex flex-col sm:flex-row gap-4" aria-label="Our key strengths">
              {TRUST_BADGES.map((badge) => (
                <li
                  key={badge.label}
                  className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm border border-mining-orange/20"
                >
                  <span className="text-2xl" aria-hidden="true">
                    {badge.icon}
                  </span>
                  <span className="text-mining-black font-semibold text-sm">
                    {badge.label}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Right Column — Image ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative"
          >
            {/* Orange left accent border — brand identity detail */}
            <div
              className="absolute -left-4 top-6 bottom-6 w-1 bg-mining-orange rounded-full z-10"
              aria-hidden="true"
            />

            {/* Decorative offset shadow block */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full bg-mining-orange/20 rounded-2xl"
              aria-hidden="true"
            />

            {/* ── WHO WE ARE IMAGE ─────────────────────────────────────────────
                Use a close-up photo such as a mineral sample being held,
                rock face inspection, or field geologist at work.
                Portrait or square orientation preferred.
                Filename: about-operations.jpg
                Path: /public/images/about-operations.jpg
            ─────────────────────────────────────────────────────────────────── */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="/images/about-operations.jpg"
                alt="EMC field consultant holding a white quartz mineral sample at an active quarry site with rock pile in background"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
