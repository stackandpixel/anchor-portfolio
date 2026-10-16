import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ShowreelSection } from './components/ShowreelSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { BookingStepsSection } from './components/BookingStepsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { EnquirySection } from './components/EnquirySection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ConfigDrawer } from './components/ConfigDrawer';
import { LegalModals } from './components/LegalModals';
import { INITIAL_PROFILE } from './data/config';
import { AnchorProfile } from './types';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [profile, setProfile] = useState<AnchorProfile>(() => {
    try {
      const saved = localStorage.getItem('aarav_mehta_profile_demo');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return INITIAL_PROFILE;
  });

  const [isConfigDrawerOpen, setIsConfigDrawerOpen] = useState(false);
  const [preselectedEventType, setPreselectedEventType] = useState('');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleSaveProfile = (newProfile: AnchorProfile) => {
    setProfile(newProfile);
    try {
      localStorage.setItem('aarav_mehta_profile_demo', JSON.stringify(newProfile));
    } catch {
      // storage unavailable
    }
  };

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireService = (serviceName: string) => {
    setPreselectedEventType(serviceName);
    scrollToEnquiry();
  };

  return (
    <div className="min-h-screen bg-[#101014] text-[#F8F6F0] selection:bg-[#D6B36A] selection:text-[#101014] flex flex-col font-sans">
      
      {/* Top Bar Navigation */}
      <Navbar
        profile={profile}
        onOpenBooking={scrollToEnquiry}
        onOpenSettings={() => setIsConfigDrawerOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          profile={profile}
          onBookClick={scrollToEnquiry}
          onWatchShowreel={() => scrollToSection('showreel')}
        />

        {/* 2. About the Anchor Section */}
        <AboutSection
          profile={profile}
          onBookClick={scrollToEnquiry}
        />

        {/* 3. Event Hosting Services */}
        <ServicesSection
          onEnquireService={handleEnquireService}
        />

        {/* 4. Portfolio & Past Events */}
        <PortfolioSection
          onBookEvent={handleEnquireService}
        />

        {/* 5. Showreel & Video Section */}
        <ShowreelSection />

        {/* 6. Why Choose Me */}
        <WhyChooseSection />

        {/* 7. How Booking Works */}
        <BookingStepsSection
          onCheckAvailability={scrollToEnquiry}
        />

        {/* 8. Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* 9. Booking Enquiry Form */}
        <EnquirySection
          profile={profile}
          preselectedEventType={preselectedEventType}
        />

        {/* 10. Social Media & Instagram Highlights */}
        <SocialMediaSection
          profile={profile}
        />

        {/* 11. FAQ Accordion */}
        <FaqSection
          profile={profile}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        onPlanEventClick={scrollToEnquiry}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Floating WhatsApp Quick Action Button for Instant Event Queries */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <a
          href={`https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
            `Hi ${profile.name}! I would like to check your availability for an upcoming event.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs sm:text-sm rounded-full shadow-2xl shadow-[#25D366]/30 transition-all duration-200 transform hover:scale-105 active:scale-95"
          aria-label="Direct WhatsApp Booking Chat"
        >
          <MessageSquare className="w-4 h-4 fill-current text-[#0A2012]" />
          <span className="hidden sm:inline font-semibold">WhatsApp Booking</span>
        </a>
      </div>

      {/* Stack & Pixel Interactive Demo Customizer Drawer */}
      <ConfigDrawer
        isOpen={isConfigDrawerOpen}
        onClose={() => setIsConfigDrawerOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
      />

      {/* Privacy Policy & Terms Modals */}
      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
        profile={profile}
      />

    </div>
  );
}
