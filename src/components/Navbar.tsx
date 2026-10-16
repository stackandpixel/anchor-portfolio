import React, { useState } from 'react';
import { Menu, X, Settings2, Sparkles } from 'lucide-react';
import { AnchorProfile } from '../types';

interface NavbarProps {
  profile: AnchorProfile;
  onOpenBooking: () => void;
  onOpenSettings: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  onOpenBooking,
  onOpenSettings,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#101014]/90 backdrop-blur-md border-b border-[#252532]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element wordmark) */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-[#D6B36A] transition-colors whitespace-nowrap shrink-0 font-display flex items-center gap-2"
        >
          <span>{profile.name}</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#D6B36A]" />
        </a>

        {/* Zone 2: 4-5 Concise Single-Line Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a
            href="#about"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#D6B36A]"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#D6B36A]"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#D6B36A]"
          >
            Portfolio
          </a>
          <a
            href="#showreel"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#D6B36A]"
          >
            Showreel
          </a>
          <a
            href="#why-choose"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#D6B36A]"
          >
            Why Me
          </a>
          <a
            href="#faqs"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#D6B36A]"
          >
            FAQs
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action + Utility Triggers */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Quick Demo Configuration Switcher (for Stack & Pixel demos) */}
          <button
            onClick={onOpenSettings}
            title="Configure Demo Details (Name, Phone, WhatsApp, City)"
            className="p-2 text-slate-400 hover:text-[#D6B36A] hover:bg-[#1D1D28] rounded-lg transition-colors border border-transparent hover:border-[#2D2D3E]"
            aria-label="Demo Settings"
          >
            <Settings2 className="w-4 h-4" />
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#101014] bg-[#D6B36A] hover:bg-[#E5C77E] active:scale-98 rounded-lg transition-all duration-150 shadow-md shadow-[#D6B36A]/10 whitespace-nowrap shrink-0"
          >
            Book Now
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#14141D] border-b border-[#252532] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-200">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#D6B36A] transition-colors"
            >
              About Aarav
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#D6B36A] transition-colors"
            >
              Hosting Services
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#D6B36A] transition-colors"
            >
              Portfolio & Past Events
            </a>
            <a
              href="#showreel"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#D6B36A] transition-colors"
            >
              Showreel & Video
            </a>
            <a
              href="#why-choose"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#D6B36A] transition-colors"
            >
              Why Choose Me
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#D6B36A] transition-colors"
            >
              Frequently Asked Questions
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#D6B36A] transition-colors"
            >
              Contact & Enquiries
            </a>
          </nav>

          <div className="pt-4 border-t border-[#252532] flex items-center justify-between">
            <div className="text-xs text-slate-400">
              Demo by <span className="text-[#D6B36A] font-medium">Stack & Pixel</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSettings();
              }}
              className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 py-1 px-2.5 rounded bg-[#1D1D28] border border-[#2D2D3E]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D6B36A]" />
              <span>Customize Demo</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
