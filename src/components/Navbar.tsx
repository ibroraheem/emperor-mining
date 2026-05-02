'use client';

/**
 * Navbar.tsx
 * Fixed navigation bar with:
 * - EMC brand logo (text-based)
 * - Smooth-scroll nav links
 * - Active section tracking via IntersectionObserver
 * - Mobile hamburger menu
 * - "Contact Us" styled as orange pill button
 */

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Navigation links — href values match section id anchors in page.tsx
const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#contact', isPill: true },
];

// Section ids to observe for active-link highlighting
const SECTION_IDS = ['hero', 'who-we-are', 'services', 'gallery', 'contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  // ── Shadow on scroll ──────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Active section tracking via IntersectionObserver ─────────────────────
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // ── Smooth scroll handler ─────────────────────────────────────────────────
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setIsOpen(false);
    },
    []
  );

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-mining-black/95 backdrop-blur-md shadow-lg shadow-black/30'
          : 'bg-mining-black/80 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ── Brand Logo ─────────────────────────────────────────────────── */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center group"
            aria-label="Emperor Mining Consultancy Limited — Home"
          >
            {/* Real EMC logo image — cream background badge on dark navbar */}
            <div className="bg-mining-cream rounded-lg px-2 py-1 group-hover:opacity-90 transition-opacity">
              <Image
                src="/images/emc-logo.jpg"
                alt="Emperor Mining Consultancy Limited logo"
                width={140}
                height={47}
                className="object-contain h-10 w-auto"
                priority
              />
            </div>
          </a>

          {/* ── Desktop Navigation ─────────────────────────────────────────── */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              if (link.isPill) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="btn-primary text-sm py-2 px-6"
                    aria-label="Contact Emperor Mining Consultancy"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-mining-orange'
                      : 'text-white/80 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {/* Active underline indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-mining-orange"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ── Mobile Hamburger ───────────────────────────────────────────── */}
          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown Menu ─────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-mining-black border-t border-white/10 overflow-hidden"
            aria-label="Mobile navigation"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      link.isPill
                        ? 'bg-mining-orange text-white mt-2 text-center'
                        : isActive
                        ? 'text-mining-orange bg-white/5'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                    aria-current={isActive && !link.isPill ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
