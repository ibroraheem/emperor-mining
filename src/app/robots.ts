import { MetadataRoute } from 'next';

/**
 * robots.ts — Controls how search engine crawlers index the site.
 * Allow all legitimate crawlers; block API routes.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    // TODO: Update with production domain
    sitemap: 'https://emperormining.com/sitemap.xml',
  };
}
