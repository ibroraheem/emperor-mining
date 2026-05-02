'use client';

/**
 * Services.tsx
 * Three-card services section with:
 * - Dark card styling (#1A1A1A) with orange top border
 * - Sub-services lists and "Why Choose Us" points
 * - Framer Motion stagger fade-up on scroll
 */

import { motion } from 'framer-motion';
import { Mountain, FileText, Search, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// ── Service Card Data ──────────────────────────────────────────────────────
interface Service {
  icon: LucideIcon;
  title: string;
  body: string;
  subServices?: string[];
  whyUs: string[];
}

const SERVICES: Service[] = [
  {
    icon: Mountain,
    title: 'Geological Consultation',
    body: 'Expert geological consultancy combining field experience with data-driven analysis — from early reconnaissance to advanced resource evaluation.',
    whyUs: [
      'Strong field experience',
      'Accurate and reliable data',
      'Practical, result-driven approach',
    ],
  },
  {
    icon: FileText,
    title: 'License Acquisition',
    body: 'End-to-end support securing mineral titles in full compliance with the Mining Cadastre Office, covering all license types.',
    subServices: [
      'License Advisory',
      'Application Processing',
      'Title Search & Verification',
      'Regulatory Compliance',
      'Follow-Up & Approval',
    ],
    whyUs: [
      'Deep knowledge of Nigerian mining regulations',
      'Smooth and stress-free process',
      'Professional handling from start to approval',
    ],
  },
  {
    icon: Search,
    title: 'Exploration Services',
    body: 'Systematic mineral exploration from reconnaissance to resource estimation, fully aligned with the JORC code for investment-ready reporting.',
    subServices: [
      'Reconnaissance Surveys',
      'Geological Mapping',
      'Geochemical Surveys',
      'Trenching & Pitting',
      'Drilling Supervision',
      'Resource Evaluation Support',
    ],
    whyUs: [
      'Structured exploration approach',
      'Experienced field team',
      'Accurate and dependable results',
    ],
  },
];

// Animation variants for stagger effect
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-mining-black"
      aria-labelledby="services-heading"
    >
      <div className="section-container">

        {/* ── Section Header ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">What We Do</span>
          <h2
            id="services-heading"
            className="font-heading text-4xl md:text-6xl text-white mb-4"
          >
            Our Services
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive mining and geological solutions tailored to your
            project needs.
          </p>
        </motion.div>

        {/* ── Service Cards ───────────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          role="list"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                role="listitem"
                className="
                  group relative bg-[#1A1A1A] rounded-2xl p-7 border-t-[3px] border-mining-orange
                  hover:-translate-y-2 hover:shadow-[0_8px_32px_-4px_rgba(232,119,34,0.25)]
                  transition-all duration-300 flex flex-col gap-5
                "
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 bg-mining-orange/10 rounded-xl flex items-center justify-center
                               group-hover:bg-mining-orange/20 transition-colors"
                  aria-hidden="true"
                >
                  <Icon className="text-mining-orange" size={24} />
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl md:text-3xl text-white">
                  {service.title}
                </h3>

                {/* Body */}
                <p className="text-white/65 text-sm leading-relaxed">
                  {service.body}
                </p>

                {/* Sub-services (optional) */}
                {service.subServices && (
                  <div>
                    <p className="text-white/40 text-xs tracking-widest uppercase font-semibold mb-2">
                      Includes
                    </p>
                    <ul className="space-y-1" aria-label={`${service.title} sub-services`}>
                      {service.subServices.map((sub) => (
                        <li
                          key={sub}
                          className="flex items-center gap-2 text-white/70 text-sm"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-mining-orange flex-shrink-0"
                            aria-hidden="true"
                          />
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Why Choose Us */}
                <div className="mt-auto pt-4 border-t border-white/10">
                  <p className="text-white/40 text-xs tracking-widest uppercase font-semibold mb-3">
                    Why Choose Us
                  </p>
                  <ul className="space-y-2" aria-label={`Why choose EMC for ${service.title}`}>
                    {service.whyUs.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-white/80 text-sm"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-mining-orange mt-0.5 flex-shrink-0"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
