import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, MessageSquare, Instagram, MapPin, ChevronDown, Sparkles } from 'lucide-react';
import { AnchorProfile } from '../types';
import { VisualStageArt } from './VisualStageArt';

interface HeroProps {
  profile: AnchorProfile;
  onBookClick: () => void;
  onWatchShowreel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onBookClick, onWatchShowreel }) => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % profile.altTaglines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [profile.altTaglines.length]);

  const whatsappDirectUrl = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
    `Hi ${profile.name}! I would like to check your availability for an upcoming event.`
  )}`;

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-8 pb-12 overflow-hidden bg-[#101014]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Split-screen layout (Left: Typographic hierarchy; Right: Visual container) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Headline & Action Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 z-10">
            {/* Location & Title Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-1.5 text-[#D6B36A] font-medium">
                <MapPin className="w-3.5 h-3.5" />
                <span>{profile.availabilityNotice}</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300 font-medium">{profile.title}</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] font-display text-balance">
              I Bring the Energy.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B36A] via-[#F8F6F0] to-[#FF7043]">
                You Make the Memories.
              </span>
            </h1>

            {/* Dynamic Rotating Tagline */}
            <div className="h-7 overflow-hidden flex items-center">
              <div
                key={taglineIndex}
                className="text-sm sm:text-base font-medium text-[#D6B36A] flex items-center gap-2 transition-all duration-500 transform translate-y-0 opacity-100"
              >
                <Sparkles className="w-4 h-4 text-[#FF7043] shrink-0" />
                <span className="italic tracking-wide">“{profile.altTaglines[taglineIndex]}”</span>
              </div>
            </div>

            {/* Supporting Pitch */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Professional anchoring and emcee services for weddings, corporate gatherings, college
              festivals, brand launches, and celebrations that deserve to be remembered.
            </p>

            {/* Action Buttons Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookClick}
                className="group px-7 py-3.5 text-sm sm:text-base font-bold text-[#101014] bg-[#D6B36A] hover:bg-[#E5C77E] active:scale-98 rounded-xl transition-all duration-200 shadow-lg shadow-[#D6B36A]/20 flex items-center gap-2.5 whitespace-nowrap"
              >
                <span>Book Me for Your Event</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onWatchShowreel}
                className="group px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#1D1D28] hover:bg-[#272736] border border-[#353548] rounded-xl transition-all duration-200 flex items-center gap-2.5 whitespace-nowrap"
              >
                <div className="w-6 h-6 rounded-full bg-[#FF7043]/20 flex items-center justify-center text-[#FF7043] group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Showreel</span>
              </button>
            </div>

            {/* Quick Contact & Social Channels */}
            <div className="pt-4 border-t border-[#222230] flex flex-wrap items-center gap-5 text-xs text-slate-400">
              <span className="font-semibold text-slate-300 uppercase tracking-wider text-[11px]">Direct Enquiries:</span>
              
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Instant</span>
              </a>

              <span aria-hidden="true" className="text-slate-700">·</span>

              <a
                href={profile.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>{profile.instagramHandle}</span>
              </a>

              <span aria-hidden="true" className="text-slate-700">·</span>

              <span className="text-slate-400">
                Call: <span className="text-slate-200 font-mono">{profile.phone}</span>
              </span>
            </div>
          </div>

          {/* Right Column: Hero Stage Visual Container */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full h-full min-h-[420px] sm:min-h-[500px] relative rounded-2xl overflow-hidden border border-[#2A2A3C] shadow-2xl shadow-black/80">
              <VisualStageArt
                type="hero"
                className="w-full h-full"
                imageSrc={profile.customHeroImage}
                alt={`${profile.name} - Professional Event Host on Stage`}
              />
              
              {/* Floating Stage Presence Card */}
              <div className="absolute top-4 right-4 bg-[#101014]/85 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-lg text-right z-20">
                <p className="text-[10px] uppercase font-mono tracking-wider text-[#D6B36A]">Calendar Status</p>
                <p className="text-xs font-semibold text-emerald-400 flex items-center justify-end gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Booking 2026 – 2027
                </p>
              </div>

              {/* Bottom Quote Banner */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#151520]/90 backdrop-blur-md border border-[#2D2D3E] p-4 rounded-xl z-20">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-[#D6B36A] font-semibold tracking-wide uppercase text-[11px]">Signature Host</span>
                  <span className="text-slate-400">Pune · Mumbai · Pan-India</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-medium italic">
                  “The mic doesn’t just amplify the voice—it unites the room.”
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width metrics strip below the hero split (Mandatory per domain reference) */}
        <div className="mt-14 pt-8 border-t border-[#222230] grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {profile.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display flex items-baseline">
                <span className="tabular-nums tracking-tight">{stat.value}</span>
                <span className="text-[#D6B36A] text-xl ml-0.5">{stat.unit}</span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">{stat.label}</p>
              <p className="text-[12px] text-slate-400 leading-tight">{stat.context}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="hidden sm:flex justify-center mt-6">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-[#D6B36A] transition-colors text-xs font-medium"
        >
          <span>Discover Aarav's Approach</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
