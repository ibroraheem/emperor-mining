/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow images from common stock/CDN domains for development placeholders
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    // Recommended formats for performance
    formats: ['image/avif', 'image/webp'],
  },
  // Strict mode for catching potential issues early
  reactStrictMode: true,
};

module.exports = nextConfig;
