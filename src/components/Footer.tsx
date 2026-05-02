/**
 * Footer.tsx
 * Three-column footer with brand identity, quick links, and contact details.
 * Server component — no interactivity needed.
 */

import Image from 'next/image';
import { Phone, MessageCircle, Mail } from 'lucide-react';

// Quick links mirror the navbar structure
const QUICK_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0D] border-t border-white/5" role="contentinfo">
      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">

          {/* ── Column 1 — Brand ──────────────────────────────────────────── */}
          <div>
            {/* Real EMC logo — displayed in a cream badge for visibility on dark bg */}
            <div className="mb-4 inline-block bg-mining-cream rounded-xl px-3 py-2">
              <Image
                src="/images/emc-logo.jpg"
                alt="Emperor Mining Consultancy Limited logo"
                width={160}
                height={54}
                className="object-contain h-12 w-auto"
              />
            </div>

            {/* Motto */}
            <p className="text-mining-orange/80 text-sm italic mb-3">
              &ldquo;Unlocking Value Beneath the Surface&rdquo;
            </p>

            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Full-spectrum mining and geological consultancy — delivering
              accurate data and practical solutions across Nigeria and Africa.
            </p>
          </div>

          {/* ── Column 2 — Quick Links ────────────────────────────────────── */}
          <nav aria-label="Footer navigation">
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/55 text-sm hover:text-mining-orange transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Column 3 — Contact ────────────────────────────────────────── */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {/* Phone */}
              <li>
                <a
                  href="tel:+2348144912861"
                  className="flex items-center gap-3 group"
                  aria-label="Call us at +234 814 491 2861"
                >
                  <Phone
                    size={15}
                    className="text-mining-orange flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-white/55 text-sm group-hover:text-white transition-colors">
                    +234 814 491 2861
                  </span>
                </a>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/2348144912861"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle
                    size={15}
                    className="text-[#25D366] flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-white/55 text-sm group-hover:text-white transition-colors">
                    WhatsApp Us
                  </span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:Emperorminingconsult@gmail.com"
                  className="flex items-center gap-3 group"
                  aria-label="Email us at Emperorminingconsult@gmail.com"
                >
                  <Mail
                    size={15}
                    className="text-mining-orange flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-white/55 text-sm group-hover:text-white transition-colors break-all">
                    Emperorminingconsult@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ────────────────────────────────────────────────────── */}
      <div className="border-t border-white/5">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs text-center sm:text-left">
            &copy; {currentYear} Emperor Mining Consultancy Limited. All Rights Reserved.
          </p>
          <p className="text-white/20 text-xs">
            Mining &amp; Geological Consultancy — Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
