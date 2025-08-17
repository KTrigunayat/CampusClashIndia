
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import EventCategories from '@/components/EventCategories';
import Timeline from '@/components/Timeline';
import FAQSection from '@/components/FAQSection';
import VenueLocation from '@/components/VenueLocation';
import ContactSection from '@/components/ContactSection';
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal';
import TermsOfServiceModal from '@/components/TermsOfServiceModal';
import ComingSoon from '@/components/ComingSoon';
import Footer from '@/components/Footer';
import TicketingSection from '@/components/TicketingSection';
import Partners from '@/components/Partners';
import RulesAndFormat from '@/components/RulesAndFormat';
import RegistrationForm from '@/components/RegistrationForm';
import CountdownTimer from '@/components/CountdownTimer';

const Index = () => {
  const [mounted, setMounted] = useState(true);
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  const [termsOfServiceOpen, setTermsOfServiceOpen] = useState(false);

  useEffect(() => {}, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#111112]">
      <Navigation />
      <main className="overflow-hidden">
        <section id="hero">
          <Hero />
        </section>
        <section id="countdown" className="mb-20">
          <CountdownTimer />
        </section>
        <section id="tournament" className="mb-20">
          <EventCategories />
        </section>
        <section id="stages" className="mb-20">
          <TicketingSection />
        </section>
        <section id="registration" className="mb-20">
          <RegistrationForm />
        </section>
        <section id="timeline" className="mb-20">
          <Timeline />
        </section>
        <section id="faq" className="mb-20">
          <FAQSection />
        </section>
        <section id="colleges" className="mb-20">
          <Partners />
        </section>
        {/* Add Gallery section here if you want to show highlights */}
        {/* <section id="gallery" className="mb-20">
          <Gallery />
        </section> */}
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
