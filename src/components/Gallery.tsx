'use client';

/**
 * Gallery.tsx
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * IMAGE REFERENCE GUIDE — Full project image handoff document
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * LAYOUT / HERO
 *   hero-bg.jpg
 *     Dramatic wide-angle panorama of open-pit or quarry mining operations.
 *     Landscape orientation. Best at golden hour or with equipment visible.
 *
 * WHO WE ARE
 *   about-operations.jpg
 *     Close-up of field geologist holding mineral sample, inspecting rock
 *     face, or reviewing field data. Portrait or square orientation.
 *
 * GALLERY (9 images — replace in order)
 *   gallery-open-pit-panoramic.jpg
 *     Wide aerial or ground-level panoramic shot of open-pit mine.
 *
 *   gallery-drill-rig-operations.jpg
 *     Drill rig in action at an exploration site; workers present for scale.
 *
 *   gallery-mineral-sample-inspection.jpg
 *     Close-up of geologist examining ore or mineral core samples.
 *
 *   gallery-geological-mapping-field.jpg
 *     Field team conducting geological mapping on rock outcrop or terrain.
 *
 *   gallery-excavator-quarry.jpg
 *     Heavy excavator or bulldozer working inside a quarry/mine pit.
 *
 *   gallery-core-samples-tray.jpg
 *     Rows of labelled drill core samples laid out in trays for logging.
 *
 *   gallery-geochemical-survey.jpg
 *     Field crew collecting soil/rock samples during geochemical survey.
 *
 *   gallery-trenching-pitting.jpg
 *     Exposed trench or test pit showing layered soil and rock profile.
 *
 *   gallery-aerial-mine-site.jpg
 *     Aerial drone photograph of an active mine or exploration camp.
 *
 * SEO
 *   og-image.jpg
 *     1200×630 px Open Graph image. Use hero-bg with the EMC logo overlaid.
 *
 * ═══════════════════════════════════════════════════════════════════════════
 */

import Image from 'next/image';
import { motion } from 'framer-motion';

// ── Gallery image definitions ──────────────────────────────────────────────
const GALLERY_IMAGES = [
  {
    // Wide panoramic view of open-pit quarry showing scale — no equipment, raw terrain
    src: '/images/gallery-open-pit-panoramic.jpg',
    alt: 'Wide panoramic view of EMC-managed open-pit quarry showing full extent of excavation',
    caption: 'Open-Pit Operations',
  },
  {
    // Orange drill rig in active operation, raising dust on a cleared exploration site
    src: '/images/gallery-drill-rig-operations.jpg',
    alt: 'Exploration drill rig in active operation raising dust at an EMC mineral survey site',
    caption: 'Drill Rig Exploration',
  },
  {
    // Hand holding white mineral/quartz sample, field worker with rock pile in background
    src: '/images/gallery-mineral-sample-inspection.jpg',
    alt: 'EMC field consultant holding a white quartz mineral sample during on-site inspection',
    caption: 'Mineral Sample Analysis',
  },
  {
    // Panoramic quarry pit with SANY excavators and field worker providing scale
    src: '/images/gallery-geological-mapping-field.jpg',
    alt: 'EMC field team conducting geological assessment inside active quarry pit with excavators',
    caption: 'Site Geological Assessment',
  },
  {
    // SANY excavator working deep inside a quarry/pit, atmospheric haze
    src: '/images/gallery-excavator-quarry.jpg',
    alt: 'SANY excavator operating in active quarry pit during mineral extraction operations',
    caption: 'Quarry Excavation',
  },
  {
    // Multiple SANY excavators and dump trucks in a wide open-cast operation
    src: '/images/gallery-geochemical-survey.jpg',
    alt: 'Multiple excavators and dump trucks in coordinated large-scale mining operation',
    caption: 'Large-Scale Operations',
  },
  {
    // Quarry pit with two excavators, workers observing from the rock ridge above
    src: '/images/gallery-trenching-pitting.jpg',
    alt: 'EMC site supervisors observing excavation progress from quarry ridge above active pit',
    caption: 'Site Supervision',
  },
  {
    // Dramatic overhead/steep-angle shot of SANY excavator working on near-vertical rock face
    src: '/images/gallery-core-samples-tray.jpg',
    alt: 'SANY excavator working on steep quarry rock face during precision excavation operations',
    caption: 'Rock Face Excavation',
  },
  {
    // High-angle aerial view of two excavators on rocky quarry floor from above
    src: '/images/gallery-aerial-mine-site.jpg',
    alt: 'High-angle aerial view of two excavators working in active quarry floor below',
    caption: 'Aerial Site View',
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="section-padding bg-mining-cream"
      aria-labelledby="gallery-heading"
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
          <span className="section-label text-mining-black/60">Our Work</span>
          <h2
            id="gallery-heading"
            className="font-heading text-4xl md:text-6xl text-mining-black mb-4"
          >
            Field Operations
          </h2>
          <p className="text-mining-black/60 text-base md:text-lg max-w-2xl mx-auto">
            A look at our active mining and exploration projects across Nigeria.
          </p>
        </motion.div>

        {/* ── Image Grid ─────────────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          role="list"
          aria-label="Gallery of EMC field operations and exploration projects"
        >
          {GALLERY_IMAGES.map((image) => (
            <motion.figure
              key={image.src}
              variants={itemVariants}
              role="listitem"
              className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-md cursor-pointer"
            >
              {/* Image with zoom hover effect */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Caption overlay on hover */}
              <figcaption
                className="
                  absolute inset-0 flex items-end p-4
                  bg-gradient-to-t from-mining-black/80 via-transparent to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                "
              >
                <span className="text-white font-semibold text-sm tracking-wide">
                  {image.caption}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
