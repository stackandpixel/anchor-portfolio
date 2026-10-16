import React, { useState } from 'react';

interface VisualStageArtProps {
  type: 'hero' | 'portrait' | 'wedding' | 'corporate' | 'festival' | 'brand' | 'party' | 'concert';
  className?: string;
  imageSrc?: string;
  alt?: string;
}

export const VisualStageArt: React.FC<VisualStageArtProps> = ({
  type,
  className = '',
  imageSrc,
  alt = 'Stage and emcee visual',
}) => {
  const [imageError, setImageError] = useState(false);

  // If a custom or AI image URL is passed and hasn't errored out, render it with cinema scrims
  if (imageSrc && !imageError) {
    return (
      <div className={`relative overflow-hidden bg-[#0A0A0F] rounded-2xl ${className}`}>
        <img
          src={imageSrc}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-top"
        />
        {/* Measured contrast scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-[#101014]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
      </div>
    );
  }
  if (type === 'hero') {
    return (
      <div className={`relative overflow-hidden bg-[#0A0A0F] rounded-2xl select-none ${className}`}>
        {/* Background stage lighting atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/20 via-[#14141E] to-[#0A0A0E]" />
        
        {/* Stage lighting beams */}
        <div className="absolute -top-10 left-1/4 w-40 h-[120%] bg-gradient-to-b from-amber-400/25 via-amber-200/5 to-transparent blur-2xl transform -rotate-12 pointer-events-none" />
        <div className="absolute -top-10 right-1/4 w-40 h-[120%] bg-gradient-to-b from-orange-400/20 via-orange-200/5 to-transparent blur-2xl transform rotate-12 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

        {/* Stage truss and spotlights */}
        <svg
          viewBox="0 0 800 600"
          className="w-full h-full object-cover relative z-10"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="goldBeam" x1="0%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#D6B36A" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#D6B36A" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#D6B36A" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="orangeBeam" x1="100%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#FF7043" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#FF7043" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#FF7043" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="tuxedoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#252532" />
              <stop offset="50%" stopColor="#14141B" />
              <stop offset="100%" stopColor="#0B0B10" />
            </linearGradient>
            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C98B62" />
              <stop offset="100%" stopColor="#985E3B" />
            </linearGradient>
            <linearGradient id="micGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="40%" stopColor="#64748B" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
          </defs>

          {/* Overhead Stage Rigging */}
          <g opacity="0.35" stroke="#4B4B60" strokeWidth="1.5">
            <line x1="100" y1="30" x2="700" y2="30" />
            <line x1="80" y1="50" x2="720" y2="50" />
            <line x1="120" y1="30" x2="140" y2="50" />
            <line x1="200" y1="30" x2="220" y2="50" />
            <line x1="280" y1="30" x2="300" y2="50" />
            <line x1="360" y1="30" x2="380" y2="50" />
            <line x1="440" y1="30" x2="460" y2="50" />
            <line x1="520" y1="30" x2="540" y2="50" />
            <line x1="600" y1="30" x2="620" y2="50" />
            <line x1="680" y1="30" x2="700" y2="50" />
            {/* Spot fixtures */}
            <circle cx="200" cy="54" r="6" fill="#D6B36A" />
            <circle cx="340" cy="54" r="7" fill="#FF7043" />
            <circle cx="460" cy="54" r="7" fill="#D6B36A" />
            <circle cx="600" cy="54" r="6" fill="#38BDF8" />
          </g>

          {/* Light cones hitting stage */}
          <polygon points="200,56 50,580 450,580" fill="url(#goldBeam)" />
          <polygon points="600,56 350,580 750,580" fill="url(#orangeBeam)" />

          {/* Stage floor reflective glow */}
          <ellipse cx="400" cy="530" rx="360" ry="70" fill="#1C1C28" opacity="0.8" />
          <ellipse cx="400" cy="530" rx="200" ry="35" fill="#D6B36A" opacity="0.12" />

          {/* Host Silhouette & Figure */}
          <g id="host-figure">
            {/* Ambient backlight halo */}
            <ellipse cx="400" cy="240" rx="110" ry="140" fill="#D6B36A" opacity="0.15" />
            
            {/* Shoulders & Tuxedo Body */}
            <path
              d="M290,540 L310,360 C320,330 350,305 400,305 C450,305 480,330 490,360 L510,540 Z"
              fill="url(#tuxedoGrad)"
            />
            
            {/* Crisp white dress shirt collar */}
            <polygon points="400,310 380,360 400,390 420,360" fill="#F8F6F0" opacity="0.9" />
            {/* Midnight silk bow-tie with gold knot */}
            <polygon points="380,345 420,345 410,355 420,365 380,365 390,355" fill="#181822" />
            <circle cx="400" cy="355" r="3.5" fill="#D6B36A" />
            
            {/* Satin Tuxedo Lapels */}
            <path d="M360,310 L370,430 L395,440 L375,320 Z" fill="#2E2E3E" />
            <path d="M440,310 L430,430 L405,440 L425,320 Z" fill="#2E2E3E" />
            
            {/* Gold Lapel Boutonniere / Pin */}
            <circle cx="365" cy="350" r="3" fill="#D6B36A" />
            <line x1="365" y1="353" x2="368" y2="365" stroke="#D6B36A" strokeWidth="1.5" />

            {/* Neck */}
            <rect x="386" y="275" width="28" height="40" rx="6" fill="url(#skinGrad)" />

            {/* Head & Strong Profile */}
            <ellipse cx="400" cy="240" rx="34" ry="44" fill="url(#skinGrad)" />

            {/* Facial Shadow & Contours */}
            <path d="M372,240 C376,268 395,280 400,280 C405,280 424,268 428,240 Z" fill="#753C1A" opacity="0.35" />

            {/* Eyes & Brows */}
            <path d="M380,222 Q387,218 394,223" fill="none" stroke="#16161E" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M406,223 Q413,218 420,222" fill="none" stroke="#16161E" strokeWidth="2.2" strokeLinecap="round" />
            <ellipse cx="387" cy="229" rx="4.5" ry="3" fill="#FFFFFF" opacity="0.9" />
            <circle cx="387" cy="229" r="2" fill="#20140D" />
            <ellipse cx="413" cy="229" rx="4.5" ry="3" fill="#FFFFFF" opacity="0.9" />
            <circle cx="413" cy="229" r="2" fill="#20140D" />

            {/* Nose Contour */}
            <path d="M399,228 L399,245 Q396,248 393,247" fill="none" stroke="#753C1A" strokeWidth="1.5" strokeLinecap="round" />

            {/* Confident Smile */}
            <path d="M388,258 Q400,266 412,258" fill="none" stroke="#602910" strokeWidth="2" strokeLinecap="round" />
            <path d="M389,258 Q400,264 411,258" fill="#FFFFFF" opacity="0.8" />

            {/* Styled modern hair */}
            <path
              d="M362,240 C360,195 375,178 400,176 C425,178 440,195 438,235 C430,215 420,208 400,209 C380,210 370,218 362,240 Z"
              fill="#121216"
            />
            {/* Golden Rim Light on Hair */}
            <path
              d="M370,200 C382,182 400,180 422,185"
              fill="none"
              stroke="#D6B36A"
              strokeWidth="2.5"
              opacity="0.8"
              strokeLinecap="round"
            />

            {/* Groomed beard & jawline shadow */}
            <path
              d="M374,250 C380,282 420,282 426,250 C424,272 376,272 374,250 Z"
              fill="#16161E"
              opacity="0.9"
            />
            
            {/* Raised arm holding stage mic */}
            <path
              d="M480,370 C475,395 460,425 435,420 C420,418 418,405 422,385 L445,340 Z"
              fill="url(#tuxedoGrad)"
            />
            {/* Hand gripping mic */}
            <ellipse cx="424" cy="378" rx="10" ry="12" fill="url(#skinGrad)" transform="rotate(-15, 424, 378)" />
            
            {/* Wireless Stage Microphone */}
            <g transform="translate(422, 335) rotate(-20)">
              {/* Mic mesh capsule with glowing amber ring */}
              <rect x="-7" y="-22" width="14" height="22" rx="7" fill="url(#micGrad)" stroke="#475569" strokeWidth="1" />
              <rect x="-7" y="-2" width="14" height="3" fill="#D6B36A" />
              {/* Mic handle body */}
              <rect x="-5" y="1" width="10" height="36" rx="2" fill="#0F172A" stroke="#334155" strokeWidth="0.8" />
              {/* Transmitter base cap */}
              <rect x="-4" y="37" width="8" height="6" rx="1.5" fill="#1E293B" />
              {/* Subtle RF transmission signal wave */}
              <path d="M-15,-28 C-10,-35 10,-35 15,-28" fill="none" stroke="#D6B36A" strokeWidth="1.2" opacity="0.6" strokeDasharray="2,2" />
            </g>
          </g>

          {/* Cheering Live Audience Silhouette in Foreground */}
          <g id="audience-silhouette" fill="#07070A">
            <ellipse cx="80" cy="590" rx="35" ry="40" />
            <path d="M70,570 L60,510 C60,500 70,500 75,510 L85,570 Z" />
            
            <ellipse cx="180" cy="580" rx="40" ry="45" />
            <path d="M190,560 L210,490 C212,480 225,485 220,495 L200,560 Z" />

            <ellipse cx="290" cy="590" rx="38" ry="42" />
            
            <ellipse cx="510" cy="590" rx="38" ry="42" />
            <path d="M520,560 L540,505 C545,495 555,500 550,512 L530,560 Z" />

            <ellipse cx="620" cy="585" rx="42" ry="45" />
            <path d="M605,560 L590,495 C588,485 575,488 580,500 L600,560 Z" />

            <ellipse cx="720" cy="590" rx="36" ry="40" />
          </g>

          {/* Glowing crowd smartphone camera points */}
          <circle cx="62" cy="505" r="2.5" fill="#F8F6F0" opacity="0.85" />
          <circle cx="218" cy="488" r="3" fill="#D6B36A" opacity="0.9" />
          <circle cx="545" cy="500" r="2.5" fill="#38BDF8" opacity="0.85" />
          <circle cx="585" cy="492" r="3" fill="#F8F6F0" opacity="0.9" />
          <circle cx="340" cy="570" r="2" fill="#FF7043" opacity="0.7" />
          <circle cx="470" cy="565" r="2.5" fill="#D6B36A" opacity="0.8" />
        </svg>

        {/* Cinematic gradient overlay across bottom */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#101014] via-[#101014]/70 to-transparent pointer-events-none" />
      </div>
    );
  }

  if (type === 'portrait') {
    return (
      <div className={`relative overflow-hidden bg-[#14141E] rounded-2xl select-none border border-[#2D2D3E] ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/15 via-[#161622] to-[#0E0E14]" />
        
        <svg
          viewBox="0 0 500 660"
          className="w-full h-full object-cover relative z-10"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="pSkin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D49970" />
              <stop offset="100%" stopColor="#9B613D" />
            </linearGradient>
            <linearGradient id="pSuit" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E1E2C" />
              <stop offset="60%" stopColor="#12121A" />
              <stop offset="100%" stopColor="#0A0A0F" />
            </linearGradient>
            <radialGradient id="stageGlow" cx="50%" cy="30%" r="50%">
              <stop offset="0%" stopColor="#D6B36A" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#14141E" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Warm background studio rim */}
          <circle cx="250" cy="220" r="180" fill="url(#stageGlow)" />
          
          {/* Studio architectural background lines */}
          <line x1="80" y1="0" x2="80" y2="660" stroke="#252538" strokeWidth="1" strokeDasharray="4,6" opacity="0.4" />
          <line x1="420" y1="0" x2="420" y2="660" stroke="#252538" strokeWidth="1" strokeDasharray="4,6" opacity="0.4" />

          {/* Tuxedo Shoulders */}
          <path
            d="M100,660 L140,410 C160,370 200,340 250,340 C300,340 340,370 360,410 L400,660 Z"
            fill="url(#pSuit)"
          />
          {/* Silk lapels */}
          <path d="M190,350 L210,530 L250,545 L225,360 Z" fill="#28283C" />
          <path d="M310,350 L290,530 L250,545 L275,360 Z" fill="#28283C" />
          <polygon points="250,350 230,420 250,470 270,420" fill="#F8F6F0" opacity="0.95" />
          <polygon points="230,395 270,395 260,410 270,425 230,425 240,410" fill="#151520" />
          <circle cx="250" cy="410" r="4" fill="#D6B36A" />

          {/* Gold pocket square accent */}
          <polygon points="175,445 195,440 188,425" fill="#D6B36A" />

          {/* Neck & Jaw */}
          <rect x="232" y="290" width="36" height="60" rx="8" fill="url(#pSkin)" />
          <ellipse cx="250" cy="240" rx="55" ry="70" fill="url(#pSkin)" />

          {/* Facial Shadow & Contours */}
          <path d="M205,240 C210,285 240,305 250,305 C260,305 290,285 295,240 Z" fill="#905532" opacity="0.4" />

          {/* Eyes & Eyebrows */}
          {/* Left Eyebrow */}
          <path d="M218,212 Q230,206 242,213" fill="none" stroke="#16161E" strokeWidth="3" strokeLinecap="round" />
          {/* Right Eyebrow */}
          <path d="M258,213 Q270,206 282,212" fill="none" stroke="#16161E" strokeWidth="3" strokeLinecap="round" />
          {/* Left Eye */}
          <ellipse cx="230" cy="222" rx="7" ry="4.5" fill="#FFFFFF" opacity="0.9" />
          <circle cx="230" cy="222" r="3" fill="#2E1D14" />
          <circle cx="229" cy="221" r="1" fill="#FFFFFF" />
          {/* Right Eye */}
          <ellipse cx="270" cy="222" rx="7" ry="4.5" fill="#FFFFFF" opacity="0.9" />
          <circle cx="270" cy="222" r="3" fill="#2E1D14" />
          <circle cx="269" cy="221" r="1" fill="#FFFFFF" />

          {/* Nose Contour */}
          <path d="M248,222 L248,245 Q245,250 240,248" fill="none" stroke="#874C2B" strokeWidth="2" strokeLinecap="round" />
          <path d="M248,248 Q252,251 258,248" fill="none" stroke="#874C2B" strokeWidth="1.8" strokeLinecap="round" />

          {/* Warm Confident Smile */}
          <path d="M232,264 Q250,276 268,264" fill="none" stroke="#70361C" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M234,264 Q250,273 266,264" fill="#FFFFFF" opacity="0.8" />

          {/* Hair & Groomed Beard */}
          <path
            d="M190,230 C185,160 210,135 250,134 C290,135 315,160 310,230 C300,200 285,188 250,189 C215,190 200,205 190,230 Z"
            fill="#121218"
          />
          {/* Hair Texture Lines */}
          <path d="M210,175 Q240,150 270,165" fill="none" stroke="#252535" strokeWidth="2" />
          <path d="M225,160 Q255,145 285,160" fill="none" stroke="#252535" strokeWidth="2" />

          {/* Warm Golden Studio Rim Light on Hair */}
          <path
            d="M200,185 C215,145 250,138 285,144"
            fill="none"
            stroke="#D6B36A"
            strokeWidth="3.5"
            opacity="0.85"
            strokeLinecap="round"
          />

          {/* Well-groomed designer stubble / beard */}
          <path
            d="M205,255 C215,302 285,302 295,255 C290,286 210,286 205,255 Z"
            fill="#14141A"
            opacity="0.9"
          />

          {/* Microphone in Hand */}
          <g transform="translate(290, 420) rotate(-18)">
            <ellipse cx="0" cy="45" rx="14" ry="16" fill="url(#pSkin)" />
            {/* Mic grill */}
            <rect x="-8" y="-30" width="16" height="30" rx="8" fill="#E2E8F0" stroke="#475569" strokeWidth="1" />
            <line x1="-7" y1="-22" x2="7" y2="-22" stroke="#94A3B8" strokeWidth="0.8" />
            <line x1="-7" y1="-14" x2="7" y2="-14" stroke="#94A3B8" strokeWidth="0.8" />
            <rect x="-8" y="-3" width="16" height="4" fill="#D6B36A" />
            <rect x="-6" y="2" width="12" height="65" rx="3" fill="#0F172A" />
            {/* Audio transmission pulse */}
            <path d="M-15,-35 C-5,-42 5,-42 15,-35" fill="none" stroke="#D6B36A" strokeWidth="1" opacity="0.6" strokeDasharray="2,2" />
          </g>
        </svg>

        {/* Editorial overlay badge */}
        <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#101014]/90 backdrop-blur-md border border-[#2D2D3E] flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#D6B36A] font-semibold">Stage Poise & Persona</p>
            <p className="text-sm font-medium text-white">Camera-Ready Elegance</p>
          </div>
          <span className="text-xs text-slate-400 font-mono">LIVE / UNFILTERED</span>
        </div>
      </div>
    );
  }

  // Service & Category themed art
  const themes = {
    wedding: {
      from: 'from-amber-600/30',
      to: 'to-rose-950/40',
      accent: '#D6B36A',
      title: 'Luxury Sangeet & Mandap Decor',
      icon: (
        <svg viewBox="0 0 200 200" className="w-24 h-24 text-[#D6B36A] opacity-75" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="100" cy="100" r="75" strokeDasharray="3,3" />
          <path d="M100,40 L100,160 M40,100 L160,100 M60,60 L140,140 M60,140 L140,60" />
          <circle cx="100" cy="100" r="28" fill="#D6B36A" fillOpacity="0.2" />
        </svg>
      ),
    },
    corporate: {
      from: 'from-blue-600/25',
      to: 'to-slate-950/50',
      accent: '#38BDF8',
      title: 'Keynote LED Projection Stage',
      icon: (
        <svg viewBox="0 0 200 200" className="w-24 h-24 text-sky-400 opacity-75" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="35" y="45" width="130" height="85" rx="8" />
          <line x1="100" y1="130" x2="100" y2="160" />
          <line x1="70" y1="160" x2="130" y2="160" />
          <polyline points="60,95 90,75 115,100 140,70" stroke="#38BDF8" strokeWidth="2" />
        </svg>
      ),
    },
    festival: {
      from: 'from-purple-600/30',
      to: 'to-indigo-950/50',
      accent: '#A855F7',
      title: 'Arena Concert Truss & Lighting',
      icon: (
        <svg viewBox="0 0 200 200" className="w-24 h-24 text-purple-400 opacity-75" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="100,35 170,165 30,165" />
          <circle cx="100" cy="110" r="30" strokeDasharray="2,3" />
          <line x1="100" y1="35" x2="100" y2="165" />
        </svg>
      ),
    },
    brand: {
      from: 'from-orange-600/25',
      to: 'to-neutral-950/50',
      accent: '#FF7043',
      title: 'Curtain Drop & Product Reveal',
      icon: (
        <svg viewBox="0 0 200 200" className="w-24 h-24 text-orange-400 opacity-75" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="100" cy="100" r="60" />
          <polygon points="100,50 140,130 60,130" stroke="#FF7043" />
          <circle cx="100" cy="100" r="10" fill="#FF7043" />
        </svg>
      ),
    },
    party: {
      from: 'from-amber-600/25',
      to: 'to-amber-950/40',
      accent: '#E5C77E',
      title: 'Candlelit Intimate Milestone Salon',
      icon: (
        <svg viewBox="0 0 200 200" className="w-24 h-24 text-amber-300 opacity-75" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M100,45 C90,75 70,85 70,115 C70,135 83,155 100,155 C117,155 130,135 130,115 C130,85 110,75 100,45 Z" />
          <line x1="60" y1="165" x2="140" y2="165" strokeWidth="2" />
        </svg>
      ),
    },
    concert: {
      from: 'from-rose-600/25',
      to: 'to-purple-950/50',
      accent: '#F43F5E',
      title: 'Live Stadium Acoustics & Decibel Rig',
      icon: (
        <svg viewBox="0 0 200 200" className="w-24 h-24 text-rose-400 opacity-75" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M50,140 L70,140 L110,170 L110,30 L70,60 L50,60 Z" />
          <path d="M130,80 C140,90 140,110 130,120" strokeWidth="2" />
          <path d="M145,65 C165,85 165,115 145,135" strokeWidth="2" />
        </svg>
      ),
    },
  }[type] || {
    from: 'from-amber-600/20',
    to: 'to-neutral-950/40',
    accent: '#D6B36A',
    title: 'Stage Production Rig',
    icon: null,
  };

  return (
    <div className={`relative overflow-hidden bg-[#151520] rounded-xl flex items-center justify-center p-6 border border-white/5 ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${themes.from} via-[#181824] ${themes.to} opacity-90`} />
      
      {/* Decorative hairline grid */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ambient center spotlight */}
      <div
        className="absolute w-40 h-40 rounded-full blur-2xl pointer-events-none"
        style={{ backgroundColor: `${themes.accent}20` }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {themes.icon}
        <span
          className="mt-3 text-xs tracking-wider uppercase font-mono font-medium"
          style={{ color: themes.accent }}
        >
          {themes.title}
        </span>
      </div>
    </div>
  );
};
