/**
 * page.tsx — Homepage (single-page layout)
 * All sections are rendered here and connected via smooth-scroll anchors.
 */
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <>
      {/* Fixed navigation bar */}
      <Navbar />

      {/* Main page content — sections use id anchors for smooth scroll */}
      <main>
        <Hero />
        <WhoWeAre />
        <Services />
        <Gallery />
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp CTA — always visible */}
      <WhatsAppButton />
    </>
  );
}
