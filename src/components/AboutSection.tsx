import React, { useState } from 'react';
import { Mic, Globe2, Sparkles, Volume2, CheckCircle2, ArrowRight } from 'lucide-react';
import { AnchorProfile } from '../types';
import { VisualStageArt } from './VisualStageArt';

interface AboutSectionProps {
  profile: AnchorProfile;
  onBookClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, onBookClick }) => {
  const [activeCadence, setActiveCadence] = useState<'sangeet' | 'corporate' | 'campus'>('sangeet');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const cadences = {
    sangeet: {
      title: 'Wedding Sangeet & Reception',
      tone: 'Warm, Celebratory & Heartfelt',
      sampleQuote:
        '“Namaskar, Sasriyakal, and the warmest welcome to every single family member! Tonight isn’t about sitting quietly—tonight is about celebrating two souls with the loudest cheer in Pune!”',
      language: 'Bilingual Hindi & English with regional wit',
      bpm: '120 BPM upbeat',
    },
    corporate: {
      title: 'CXO Leadership Summit & Awards',
      tone: 'Authoritative, Articulate & Precise',
      sampleQuote:
        '“Good evening distinguished board members, global partners, and our exceptional innovators. It is a privilege to welcome you to the Annual Excellence Gala as we recognize groundbreaking impact.”',
      language: 'Crisp International English & Formal Hindi',
      bpm: '90 BPM measured',
    },
    campus: {
      title: 'College Fest & Concert Arena',
      tone: 'Electrifying, Spontaneous & High-Voltage',
      sampleQuote:
        '“COEP, Pune make some noooise! Right side let me hear you! Left side are you ready?! On the count of three, let’s bring the whole amphitheatre down!”',
      language: 'High-energy youth slang, chant calls & drops',
      bpm: '140 BPM explosive',
    },
  };

  const currentCadence = cadences[activeCadence];

  return (
    <section id="about" className="py-24 bg-[#14141E] border-t border-b border-[#252535] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase font-mono tracking-widest text-[#D6B36A] font-semibold mb-3">
            01. Personal Introduction & Philosophy
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
            More Than a Mic.{' '}
            <span className="text-[#D6B36A]">It's About the Moment.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {profile.bioLead}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait & Live Presence Box */}
          <div className="lg:col-span-5 space-y-6">
              <VisualStageArt
                type="portrait"
                className="w-full h-[460px] sm:h-[520px]"
                imageSrc={profile.customPortraitImage}
                alt={`${profile.name} - Portrait`}
              />

            {/* Verified Demo Content Badge */}
            <div className="p-4 rounded-xl bg-[#101014] border border-[#272738] text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-[#D6B36A] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Demo Portfolio Notice</span>
              </div>
              <p>
                This profile is built as a live demo showcase by <strong className="text-slate-200">Stack & Pixel</strong>.
                All stats and history are configurable for real anchor onboarding.
              </p>
            </div>
          </div>

          {/* Right Column: Bio Narrative, Approach, & Tone Simulator */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Bio Paragraphs */}
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              {profile.bioStory.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Hosting Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#191926] border border-[#2D2D40]">
                <div className="flex items-center gap-2 text-[#D6B36A] text-xs uppercase font-mono font-semibold mb-2">
                  <Globe2 className="w-4 h-4" />
                  <span>Languages Spoken</span>
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-200">
                  {profile.languages.map((lang, idx) => (
                    <span key={idx} className="bg-[#101014] px-2.5 py-1 rounded text-slate-300 border border-[#262636]">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#191926] border border-[#2D2D40]">
                <div className="flex items-center gap-2 text-[#FF7043] text-xs uppercase font-mono font-semibold mb-2">
                  <Mic className="w-4 h-4" />
                  <span>Hosting Styles</span>
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs text-slate-200">
                  {profile.hostingStyles.map((style, idx) => (
                    <span key={idx} className="bg-[#101014] px-2.5 py-1 rounded text-slate-300 border border-[#262636]">
                      {style}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional Approach Pillars */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono">
                The Professional Approach
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profile.approachPoints.map((pt, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-lg bg-[#101014]/70 border border-[#252538] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D6B36A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">{pt.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-snug">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Voice Cadence Preview Player */}
            <div className="p-5 rounded-xl bg-[#101014] border border-[#2B2B3C] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-[#D6B36A]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-mono">
                    Cadence & Vocal Delivery Preview
                  </span>
                </div>
                
                {/* Cadence switchers */}
                <div className="flex items-center gap-1 p-1 bg-[#191926] rounded-lg border border-[#28283A]">
                  {(['sangeet', 'corporate', 'campus'] as const).map((key) => (
                    <button
                      key={key}
                      onClick={() => {
                        setActiveCadence(key);
                        setIsPlayingAudio(false);
                      }}
                      className={`px-2.5 py-1 text-xs font-medium rounded transition-colors capitalize ${
                        activeCadence === key
                          ? 'bg-[#D6B36A] text-[#101014] font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sample Quote Display */}
              <div className="p-4 rounded-lg bg-[#181824] border border-[#2A2A3A] relative">
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  {currentCadence.sampleQuote}
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 border-t border-[#252535] pt-2">
                  <span>Tone: <strong className="text-slate-300 font-medium">{currentCadence.tone}</strong></span>
                  <span>Dialect: <strong className="text-slate-300 font-medium">{currentCadence.language}</strong></span>
                </div>
              </div>

              {/* Simulated Audio Playback Control */}
              <div className="flex items-center justify-between gap-4 pt-1">
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-2 transition-all ${
                    isPlayingAudio
                      ? 'bg-amber-500/20 text-[#D6B36A] border border-[#D6B36A]'
                      : 'bg-[#222232] text-slate-200 hover:bg-[#2A2A3C] border border-[#35354A]'
                  }`}
                >
                  <Volume2 className={`w-3.5 h-3.5 ${isPlayingAudio ? 'animate-pulse' : ''}`} />
                  <span>{isPlayingAudio ? 'Simulating Stage Cadence...' : 'Preview Voice Delivery'}</span>
                </button>

                {/* Animated soundwave bars */}
                <div className="flex items-center gap-1 h-6">
                  {[40, 70, 30, 90, 50, 80, 60, 100, 45, 85, 35, 75].map((h, i) => (
                    <div
                      key={i}
                      className={`w-1 rounded-full transition-all duration-300 ${
                        isPlayingAudio ? 'bg-[#D6B36A]' : 'bg-slate-700'
                      }`}
                      style={{
                        height: isPlayingAudio ? `${Math.max(20, (h * ((i % 3) + 1)) % 100)}%` : '20%',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Section CTA */}
            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="group px-7 py-3 text-sm font-bold text-[#101014] bg-[#D6B36A] hover:bg-[#E5C77E] active:scale-98 rounded-xl transition-all duration-150 flex items-center gap-2 shadow-lg shadow-[#D6B36A]/10"
              >
                <span>Let's Create Something Memorable</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
