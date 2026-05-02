import type { Metadata } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import './globals.css';
import { businessSchema } from '@/lib/schema';

// ─── Font Configuration ────────────────────────────────────────────────────
// Bebas Neue: display/heading font for the EMC brand identity
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
});

// Inter: clean, highly-readable body font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// ─── SEO Metadata ──────────────────────────────────────────────────────────
// TODO: Replace all placeholder URLs with the production domain before launch
export const metadata: Metadata = {
  // Title template applies to all child pages; default is the homepage title
  title: {
    template: '%s | Emperor Mining Consultancy Limited',
    default:
      'Emperor Mining Consultancy Limited | Mining & Geological Consultancy Nigeria',
  },
  description:
    'Emperor Mining Consultancy Limited (EMC) offers full-spectrum mining and geological consultancy services in Nigeria — from mineral license acquisition to exploration and resource evaluation.',
  keywords: [
    'mining consultancy Nigeria',
    'geological services Nigeria',
    'mineral license Nigeria',
    'exploration services Nigeria',
    'EMC mining',
    'mineral license acquisition Nigeria',
    'exploration services Africa',
    'JORC reporting Nigeria',
    'mining consultant Africa',
  ],
  // Canonical URL prevents duplicate content issues
  alternates: {
    canonical: 'https://emperormining.com',
  },
  // Allow all crawlers to index and follow
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Open Graph — controls how the link appears when shared on social media
  openGraph: {
    type: 'website',
    url: 'https://emperormining.com',
    siteName: 'Emperor Mining Consultancy Limited',
    title:
      'Emperor Mining Consultancy Limited | Mining & Geological Consultancy Nigeria',
    description:
      'EMC offers full-spectrum mining and geological consultancy services in Nigeria — from mineral license acquisition to exploration and resource evaluation.',
    // TODO: Create a 1200x630px OG image and save to /public/images/og-image.jpg
    images: [
      {
        url: 'https://emperormining.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Emperor Mining Consultancy Limited — Mining & Geological Services Nigeria',
      },
    ],
  },
  // Twitter Card — controls how the link appears when shared on Twitter/X
  twitter: {
    card: 'summary_large_image',
    title:
      'Emperor Mining Consultancy Limited | Mining & Geological Consultancy Nigeria',
    description:
      'EMC offers full-spectrum mining and geological consultancy services in Nigeria.',
    // TODO: Create a 1200x630px Twitter card image
    images: ['https://emperormining.com/images/og-image.jpg'],
  },
};

// ─── Root Layout ───────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <head>
        {/* JSON-LD Structured Data — injected directly for SSR/SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="font-body bg-mining-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
