
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import EventCategories from '@/components/EventCategories';
import Timeline from '@/components/Timeline';
import Gallery from '@/components/Gallery';
import FAQSection from '@/components/FAQSection';
import VenueLocation from '@/components/VenueLocation';
import ContactSection from '@/components/ContactSection';
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal';
import TermsOfServiceModal from '@/components/TermsOfServiceModal';
import ComingSoon from '@/components/ComingSoon';
import Footer from '@/components/Footer';
import TicketingSection from '@/components/TicketingSection';

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  const [termsOfServiceOpen, setTermsOfServiceOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-carnival-cream via-white to-carnival-cream/50">
      <Navigation />
      
      <main className="overflow-hidden">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="events" className="mb-20">
          <EventCategories />
        </section>

        <section id="tickets" className="mb-20">
          <TicketingSection />
        </section>
        
        <section id="timeline" className="mb-20">
          <Timeline />
        </section>
        
        <section id="gallery" className="mb-20">
          <Gallery />
        </section>

        <section id="artists" className="mb-20">
          <ComingSoon title="Featured Artists" />
        </section>
        
        <section id="sponsors" className="mb-20">
          <ComingSoon title="Our Sponsors" />
        </section>
        
        <section id="venue" className="mb-20">
          <VenueLocation />
        </section>
        
        <section id="faq" className="mb-20">
          <FAQSection />
        </section>

        <section id="contact" className="mb-20">
          <ContactSection />
        </section>
      </main>

      <Footer 
        onPrivacyPolicyOpen={() => setPrivacyPolicyOpen(true)}
        onTermsOfServiceOpen={() => setTermsOfServiceOpen(true)}
        onScrollToTop={scrollToTop}
      />

      <PrivacyPolicyModal 
        open={privacyPolicyOpen} 
        onOpenChange={setPrivacyPolicyOpen} 
      />
      
      <TermsOfServiceModal 
        open={termsOfServiceOpen} 
        onOpenChange={setTermsOfServiceOpen} 
      />
    </div>
  );
};

export default Index;
