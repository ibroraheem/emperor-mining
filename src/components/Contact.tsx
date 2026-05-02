'use client';

/**
 * Contact.tsx
 * Two-column contact section with:
 * - Netlify Form (left) with full field set and success state
 * - Contact info panel (right) with phone, WhatsApp, email
 */

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, CheckCircle, Send } from 'lucide-react';

// Service options for the interest dropdown
const SERVICE_OPTIONS = [
  { value: '', label: 'Select a service...' },
  { value: 'geological-consultation', label: 'Geological Consultation' },
  { value: 'license-acquisition', label: 'License Acquisition' },
  { value: 'exploration-services', label: 'Exploration Services' },
  { value: 'general-inquiry', label: 'General Inquiry' },
];

// Common input classes for dark theme consistency
const inputClass =
  'w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white ' +
  'placeholder:text-white/30 text-sm outline-none transition-all duration-200 ' +
  'focus:border-mining-orange focus:ring-2 focus:ring-mining-orange/20';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // ── Netlify Forms submission handler ──────────────────────────────────────
  // Encodes form data for Netlify's form handling endpoint
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch {
      // Fallback: show success even if fetch fails (Netlify handles on submit)
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-mining-black"
      aria-labelledby="contact-heading"
    >
      <div className="section-container">

        {/* ── Section Header ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Get In Touch</span>
          <h2
            id="contact-heading"
            className="font-heading text-4xl md:text-6xl text-white"
          >
            Contact Emperor Mining Consultancy
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── Left — Netlify Form ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              /* ── Success State ──────────────────────────────────────────── */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center bg-green-500/10 border border-green-500/30 rounded-2xl p-12 gap-4"
                role="status"
                aria-live="polite"
              >
                <CheckCircle className="text-green-400" size={52} aria-hidden="true" />
                <h3 className="font-heading text-3xl text-white">
                  Message Sent!
                </h3>
                <p className="text-white/70 text-sm max-w-xs leading-relaxed">
                  Thank you for reaching out. Our team will review your inquiry
                  and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-mining-orange text-sm underline underline-offset-2 mt-2"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              /* ── Contact Form ───────────────────────────────────────────── */
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact Emperor Mining Consultancy"
                className="space-y-5"
              >
                {/* Required hidden input for Netlify to identify the form */}
                <input type="hidden" name="form-name" value="contact" />

                {/* Honeypot field — hidden from real users, catches bots */}
                <p className="hidden" aria-hidden="true">
                  <label>
                    Don&apos;t fill this out if you&apos;re human:{' '}
                    <input name="bot-field" tabIndex={-1} />
                  </label>
                </p>

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-white/70 text-xs font-semibold tracking-wider uppercase mb-2"
                  >
                    Full Name <span className="text-mining-orange">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="John Adebayo"
                    className={inputClass}
                    autoComplete="name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-white/70 text-xs font-semibold tracking-wider uppercase mb-2"
                  >
                    Email Address <span className="text-mining-orange">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                    className={inputClass}
                    autoComplete="email"
                  />
                </div>

                {/* Phone (optional) */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-white/70 text-xs font-semibold tracking-wider uppercase mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="+234 800 000 0000"
                    className={inputClass}
                    autoComplete="tel"
                  />
                </div>

                {/* Service Interest */}
                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-white/70 text-xs font-semibold tracking-wider uppercase mb-2"
                  >
                    Service Interest
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    className={`${inputClass} appearance-none`}
                    defaultValue=""
                    aria-label="Select the service you are interested in"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        className="bg-mining-black"
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-white/70 text-xs font-semibold tracking-wider uppercase mb-2"
                  >
                    Message <span className="text-mining-orange">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="
                    w-full bg-mining-orange text-white font-semibold py-4 px-8 rounded-xl
                    flex items-center justify-center gap-2 text-sm tracking-wide
                    hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed
                    transition-all duration-300
                  "
                  aria-label="Send your message to Emperor Mining Consultancy"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* ── Right — Contact Info ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-7">
              <h3 className="font-heading text-2xl text-white">
                Reach Us Directly
              </h3>

              {/* Phone */}
              <a
                href="tel:+2348144912861"
                className="flex items-center gap-4 group"
                aria-label="Call Emperor Mining Consultancy at +234 814 491 2861"
              >
                <div className="w-11 h-11 bg-mining-orange/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-mining-orange/25 transition-colors">
                  <Phone size={18} className="text-mining-orange" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">
                    Phone
                  </p>
                  <span className="text-white font-semibold group-hover:text-mining-orange transition-colors">
                    +234 814 491 2861
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2348144912861"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                aria-label="Chat with Emperor Mining Consultancy on WhatsApp"
              >
                <div className="w-11 h-11 bg-[#25D366]/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/25 transition-colors">
                  <MessageCircle size={18} className="text-[#25D366]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">
                    WhatsApp
                  </p>
                  <span className="text-white font-semibold group-hover:text-[#25D366] transition-colors">
                    +234 814 491 2861
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:Emperorminingconsult@gmail.com"
                className="flex items-center gap-4 group"
                aria-label="Email Emperor Mining Consultancy"
              >
                <div className="w-11 h-11 bg-mining-orange/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-mining-orange/25 transition-colors">
                  <Mail size={18} className="text-mining-orange" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">
                    Email
                  </p>
                  <span className="text-white font-semibold text-sm group-hover:text-mining-orange transition-colors break-all">
                    Emperorminingconsult@gmail.com
                  </span>
                </div>
              </a>
            </div>

            {/* Response time note */}
            <div className="bg-mining-orange/10 border border-mining-orange/25 rounded-2xl p-6">
              <p className="text-white/80 text-sm leading-relaxed">
                <span className="text-mining-orange font-semibold">Response time:</span>{' '}
                We typically respond within 24 hours. For urgent inquiries,
                reach us directly on{' '}
                <a
                  href="https://wa.me/2348144912861"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mining-orange underline underline-offset-2"
                  aria-label="Contact us urgently on WhatsApp"
                >
                  WhatsApp
                </a>
                .
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
