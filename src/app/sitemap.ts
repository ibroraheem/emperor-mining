import { MetadataRoute } from 'next';

/**
 * sitemap.ts — Generates the XML sitemap for search engines.
 * All section anchors are listed as distinct URLs for better indexing.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: Replace base URL with production domain
  const baseUrl = 'https://emperormining.com';
  const lastModified = new Date('2026-05-02');

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#who-we-are`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#gallery`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
