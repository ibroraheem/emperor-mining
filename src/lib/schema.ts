/**
 * JSON-LD Structured Data for Emperor Mining Consultancy Limited
 * Schema type: ProfessionalService (subset of LocalBusiness)
 * Helps search engines understand the business and display rich results.
 */
export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Emperor Mining Consultancy Limited',
  alternateName: 'EMC',
  description:
    'Emperor Mining Consultancy Limited (EMC) offers full-spectrum mining and geological consultancy services in Nigeria — from mineral license acquisition to exploration and resource evaluation.',
  url: 'https://emperormining.com',
  telephone: '+2348144912861',
  email: 'Emperorminingconsult@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NG',
    addressRegion: 'Nigeria',
  },
  // TODO: Replace with actual coordinates once office location is confirmed
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '9.0820',
    longitude: '8.6753',
  },
  // TODO: Update with actual business hours
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Mining & Geological Consultancy Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Geological Consultation',
          description:
            'Expert geological consultancy combining field experience with data-driven analysis — from early reconnaissance to advanced resource evaluation.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'License Acquisition',
          description:
            'End-to-end support securing mineral titles in full compliance with the Mining Cadastre Office, covering all license types.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Exploration Services',
          description:
            'Systematic mineral exploration from reconnaissance to resource estimation, fully aligned with the JORC code for investment-ready reporting.',
        },
      },
    ],
  },
  areaServed: {
    '@type': 'Country',
    name: 'Nigeria',
  },
  sameAs: [],
};
