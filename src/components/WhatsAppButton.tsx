'use client';

/**
 * WhatsAppButton.tsx
 * Fixed bottom-right floating WhatsApp CTA with:
 * - Green circle (#25D366)
 * - Animated pulse ring
 * - Hover tooltip
 * - Always visible (z-50)
 */

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
      role="complementary"
      aria-label="WhatsApp contact"
    >
      {/* Tooltip — visible on hover */}
      <motion.span
        initial={{ opacity: 0, x: 8 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="
          hidden sm:block bg-mining-black text-white text-xs font-medium
          px-3 py-1.5 rounded-full border border-white/10 whitespace-nowrap
          pointer-events-none
        "
        aria-hidden="true"
      >
        Chat with us on WhatsApp
      </motion.span>

      {/* Button with pulse ring */}
      <a
        href="https://wa.me/2348144912861"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 flex items-center justify-center group"
        aria-label="Chat with Emperor Mining Consultancy on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        {/* Pulse ring animation */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40"
          aria-hidden="true"
        />
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 animation-delay-500"
          aria-hidden="true"
          style={{ animationDelay: '0.5s' }}
        />

        {/* Button circle */}
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="
            relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center
            shadow-lg shadow-[#25D366]/40 transition-shadow duration-300
            group-hover:shadow-[#25D366]/60
          "
        >
          <MessageCircle
            size={26}
            className="text-white fill-white/10"
            aria-hidden="true"
          />
        </motion.span>
      </a>
    </div>
  );
}
