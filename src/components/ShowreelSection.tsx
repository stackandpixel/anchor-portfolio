import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  Clock,
  Radio,
  Share2,
  Check,
} from 'lucide-react';
import { SHOWREELS } from '../data/config';
import { ShowreelItem } from '../types';

export const ShowreelSection: React.FC = () => {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(24);
  const [copiedLink, setCopiedLink] = useState(false);

  const activeReel: ShowreelItem = SHOWREELS[activeReelIndex];

  // Simulated video playback timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 98) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="showreel" className="py-24 bg-[#101014] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase font-mono tracking-widest text-[#D6B36A] font-semibold mb-3">
            04. Showreel & Live Stage Footage
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
            Feel the Energy.{' '}
            <span className="text-[#FF7043]">Hear the Difference.</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            An anchor’s personality, vocal projection, and audience chemistry can only truly be felt in
            live motion. Experience key highlights from corporate keynotes to high-voltage wedding celebrations.
          </p>
        </div>

        {/* Master Showreel Player Container */}
        <div className="rounded-2xl bg-[#161622] border border-[#2A2A3D] overflow-hidden shadow-2xl">
          
          {/* Main Visual Display */}
          <div className="relative aspect-video max-h-[580px] w-full bg-[#0A0A0F] overflow-hidden flex items-center justify-center select-none">
            
            {/* Dynamic Stage Lighting Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-[#12121A] to-[#0A0A0E]" />

            {/* Sweeping Spotlight Animation Beams */}
            <div
              className={`absolute -top-20 left-1/4 w-48 h-[140%] bg-gradient-to-b from-amber-300/30 via-amber-400/5 to-transparent blur-3xl transform -rotate-15 transition-transform duration-1000 ${
                isPlaying ? 'rotate-[-5deg] scale-105' : 'rotate-[-15deg]'
              }`}
            />
            <div
              className={`absolute -top-20 right-1/4 w-48 h-[140%] bg-gradient-to-b from-orange-400/25 via-orange-300/5 to-transparent blur-3xl transform rotate-15 transition-transform duration-1000 ${
                isPlaying ? 'rotate-[5deg] scale-105' : 'rotate-[15deg]'
              }`}
            />

            {/* Stage Silhouette Canvas Graphic */}
            <svg
              viewBox="0 0 1000 562"
              className="w-full h-full object-cover relative z-10 opacity-90"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <linearGradient id="reelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#D6B36A" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#101014" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Stage Floor and Glow */}
              <ellipse cx="500" cy="500" rx="450" ry="100" fill="url(#reelGrad)" />

              {/* Host Figure in motion with mic */}
              <g transform="translate(500, 290)">
                {/* Body & Tuxedo */}
                <path d="M-55,200 L-40,70 C-30,40 0,30 0,30 C0,30 30,40 40,70 L55,200 Z" fill="#171722" />
                <polygon points="0,45 -18,90 0,115 18,90" fill="#F8F6F0" opacity="0.9" />
                <circle cx="0" cy="95" r="3" fill="#D6B36A" />
                {/* Neck & Head */}
                <rect x="-12" y="5" width="24" height="28" rx="4" fill="#B87B52" />
                <ellipse cx="0" cy="-15" rx="26" ry="32" fill="#B87B52" />
                <path d="M-28,-20 C-26,-45 -10,-55 0,-55 C10,-55 26,-45 28,-20 C22,-30 10,-32 0,-32 C-10,-32 -22,-30 -28,-20 Z" fill="#0C0C10" />
                {/* Raised Left Hand with Mic */}
                <path d="M25,75 C45,60 55,40 60,10 L45,15 C40,40 30,55 15,65 Z" fill="#171722" />
                <g transform="translate(62, 5) rotate(25)">
                  <rect x="-5" y="-18" width="10" height="18" rx="5" fill="#E2E8F0" />
                  <rect x="-5" y="-2" width="10" height="2.5" fill="#D6B36A" />
                  <rect x="-4" y="2" width="8" height="28" rx="2" fill="#1E293B" />
                </g>
              </g>

              {/* Stadium crowd silhouettes */}
              <g fill="#07070A">
                <circle cx="100" cy="540" r="45" />
                <circle cx="240" cy="530" r="50" />
                <circle cx="380" cy="550" r="45" />
                <circle cx="620" cy="550" r="45" />
                <circle cx="760" cy="530" r="50" />
                <circle cx="900" cy="540" r="45" />
              </g>

              {/* Pulsing sound waves when playing */}
              {isPlaying && (
                <g stroke="#D6B36A" strokeWidth="1.5" fill="none" opacity="0.4">
                  <circle cx="562" cy="295" r="40">
                    <animate attributeName="r" from="20" to="80" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.7" to="0" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="562" cy="295" r="60">
                    <animate attributeName="r" from="40" to="110" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                </g>
              )}
            </svg>

            {/* Play / Pause Big Center Button Overlay */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`absolute z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
                isPlaying
                  ? 'bg-black/40 text-white opacity-0 hover:opacity-100 backdrop-blur-sm'
                  : 'bg-[#D6B36A] text-[#101014] shadow-2xl shadow-[#D6B36A]/40 scale-100 hover:scale-110'
              }`}
              aria-label={isPlaying ? 'Pause Showreel' : 'Play Showreel'}
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 fill-current" />
              ) : (
                <Play className="w-9 h-9 fill-current ml-1" />
              )}
            </button>

            {/* Top Bar on Video Player */}
            <div className="absolute top-4 inset-x-4 flex items-center justify-between z-20">
              <div className="flex items-center gap-2 bg-[#101014]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs">
                <Radio className={`w-3.5 h-3.5 ${isPlaying ? 'text-red-500 animate-pulse' : 'text-slate-400'}`} />
                <span className="font-mono text-slate-200">
                  {isPlaying ? 'NOW PLAYING STREAM' : 'SHOWREEL PREVIEW'}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-[#D6B36A] font-semibold">{activeReel.category}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="bg-[#101014]/85 backdrop-blur-md p-2 rounded-lg border border-white/10 text-slate-300 hover:text-white transition-colors"
                  title="Share video link"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Bottom Bar: Timeline & Controls */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 sm:p-6 z-20 space-y-3">
              {/* Scrub timeline bar */}
              <div
                className="w-full h-1.5 bg-slate-700/80 rounded-full cursor-pointer relative overflow-hidden"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const newProgress = Math.min(100, Math.max(0, (clickX / rect.width) * 100));
                  setProgress(newProgress);
                }}
              >
                <div
                  className="h-full bg-[#D6B36A] rounded-full transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Player control buttons & time */}
              <div className="flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-white hover:text-[#D6B36A] transition-colors"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-white hover:text-[#D6B36A] transition-colors"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <span className="font-mono text-slate-400">
                    {Math.floor((progress * 2.2) / 60)}:
                    {String(Math.floor((progress * 2.2) % 60)).padStart(2, '0')} / {activeReel.duration}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-block font-mono text-[11px] text-[#D6B36A]">
                    4K UltraHD / 60fps
                  </span>
                  <button
                    onClick={() => {
                      // Toggle full-screen demonstration
                      const elem = document.getElementById('showreel');
                      elem?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-slate-300 hover:text-white"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Under-Player Breakdown: Chapters, Stage Quote & Selector */}
          <div className="p-6 sm:p-8 bg-[#14141E] border-t border-[#252538] space-y-6">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {activeReel.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {activeReel.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#D6B36A] bg-[#1B1B29] px-3 py-1.5 rounded-lg border border-[#2D2D42] shrink-0">
                <Clock className="w-3.5 h-3.5" />
                <span>Runtime: {activeReel.duration}</span>
              </div>
            </div>

            {/* Chapters Jumper */}
            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Jump to Chapter Highlights:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {activeReel.chapters.map((chap, cIdx) => (
                  <button
                    key={cIdx}
                    onClick={() => {
                      const perc = (cIdx / activeReel.chapters.length) * 80 + 10;
                      setProgress(perc);
                      setIsPlaying(true);
                    }}
                    className="text-left p-3 rounded-lg bg-[#181826] hover:bg-[#202032] border border-[#262638] hover:border-[#D6B36A]/50 transition-colors group"
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className="text-[#D6B36A] font-semibold">{chap.time}</span>
                      <Play className="w-3 h-3 text-slate-500 group-hover:text-[#D6B36A] transition-colors" />
                    </div>
                    <p className="text-xs font-semibold text-white line-clamp-1">{chap.title}</p>
                    <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{chap.note}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Stage Quote */}
            <div className="p-4 rounded-xl bg-[#101014] border border-[#272738] flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#D6B36A] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-300 italic">
                {activeReel.stageQuote}
              </p>
            </div>

          </div>

        </div>

        {/* 4 Companion Category Showreel Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SHOWREELS.map((reel, rIdx) => (
            <div
              key={reel.id}
              onClick={() => {
                setActiveReelIndex(rIdx);
                setIsPlaying(true);
                setProgress(15);
              }}
              className={`p-4 rounded-xl cursor-pointer transition-all border ${
                activeReelIndex === rIdx
                  ? 'bg-[#1C1C2A] border-[#D6B36A] shadow-lg shadow-[#D6B36A]/10'
                  : 'bg-[#14141E] border-[#252538] hover:border-[#383850]'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
                <span className="text-[#D6B36A] font-semibold">{reel.category}</span>
                <span>{reel.duration}</span>
              </div>
              <h4 className="text-sm font-bold text-white line-clamp-1 font-display">
                {reel.title}
              </h4>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                {reel.previewVibe}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
