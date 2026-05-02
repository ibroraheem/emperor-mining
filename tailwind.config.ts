import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // EMC brand palette
        'mining-orange': '#E87722',
        'mining-black': '#1A1A1A',
        'mining-cream': '#F5F0EB',
        'mining-deep': '#0D0D0D',
      },
      fontFamily: {
        // Bebas Neue loaded via next/font/google in layout.tsx
        heading: ['var(--font-bebas-neue)', 'sans-serif'],
        // Inter loaded via next/font/google in layout.tsx
        body: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-ring': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.15)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
