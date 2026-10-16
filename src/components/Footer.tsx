import React from 'react';
import {
  ArrowRight,
  MessageSquare,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { AnchorProfile } from '../types';

interface FooterProps {
  profile: AnchorProfile;
  onPlanEventClick: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  onPlanEventClick,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  return (
    <footer id="contact" className="bg-[#0C0C10] border-t border-[#222230] relative overflow-hidden">
      
      {/* Final Prominent Call To Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#1B1B28] via-[#151520] to-[#101016] border border-[#2D2D42] p-8 sm:p-14 overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-[#D6B36A] font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FF7043]" />
              <span>Let's Make History on Stage</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display leading-tight text-balance">
              Your Event Deserves the Right Voice.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              From the opening welcoming greeting to the closing ovation, ensure your stage is in
              experienced, charismatic, and unflappable hands.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onPlanEventClick}
                className="group px-8 py-4 text-sm sm:text-base font-bold text-[#101014] bg-[#D6B36A] hover:bg-[#E5C77E] active:scale-98 rounded-xl transition-all duration-150 flex items-center gap-2.5 shadow-xl shadow-[#D6B36A]/20"
              >
                <span>Let's Plan Your Event</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={`https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
                  `Hi ${profile.name}! I would like to discuss hosting an upcoming event.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 text-sm sm:text-base font-semibold text-emerald-300 bg-[#1D3B2B] hover:bg-[#234A36] border border-emerald-500/40 rounded-xl transition-all duration-150 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Directory & Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t border-[#1C1C28]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Bio Column */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="text-2xl font-extrabold text-white font-display tracking-tight">
                {profile.name}
              </span>
              <p className="text-xs text-[#D6B36A] font-medium mt-0.5">
                {profile.title}
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Professional anchoring, stage emceeing, and keynote presentation across weddings,
              corporate celebrations, university fests, and brand launches.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#181824] hover:bg-[#222232] text-slate-300 hover:text-pink-400 flex items-center justify-center border border-[#272738] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={profile.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#181824] hover:bg-[#222232] text-slate-300 hover:text-red-400 flex items-center justify-center border border-[#272738] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#181824] hover:bg-[#222232] text-slate-300 hover:text-sky-400 flex items-center justify-center border border-[#272738] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-white font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Aarav
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Hosting Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Past Portfolio
                </a>
              </li>
              <li>
                <a href="#showreel" className="hover:text-white transition-colors">
                  Video Showreel
                </a>
              </li>
              <li>
                <a href="#why-choose" className="hover:text-white transition-colors">
                  Why Choose Me
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Event Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-white font-semibold">
              Specialisations
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Wedding Sangeet & Receptions</li>
              <li>Corporate Galas & Awards</li>
              <li>College Festivals & Concerts</li>
              <li>Brand Launches & Press Reveals</li>
              <li>Destination Wedding Hosting</li>
              <li>Milestone Private Parties</li>
            </ul>
          </div>

          {/* Direct Coordinates */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-white font-semibold">
              Booking Office
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D6B36A] shrink-0" />
                <span>Pune & Mumbai · Available Pan-India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href={`mailto:${profile.email}`} className="hover:text-[#D6B36A] transition-colors">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href={`tel:${profile.phone}`} className="hover:text-[#D6B36A] transition-colors font-mono">
                  {profile.phone}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom studio credit & legal row */}
        <div className="mt-14 pt-8 border-t border-[#1C1C28] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {profile.name}. All rights reserved. Demo Portfolio Showcase.
          </div>

          {/* Stack & Pixel Credit Tag */}
          <div className="flex items-center gap-1.5 text-slate-400 font-mono">
            <span>Designed & Built by</span>
            <span className="text-[#D6B36A] font-semibold">Stack & Pixel</span>
            <span>· Web Studio for Indian Creators & Businesses</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
            >
              Terms of Engagement
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
