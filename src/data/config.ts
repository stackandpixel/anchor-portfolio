import {
  AnchorProfile,
  ServiceItem,
  PortfolioItem,
  ShowreelItem,
  WhyChooseItem,
  BookingStepItem,
  TestimonialItem,
  FaqItem,
  SocialPostItem,
} from '../types';

export const INITIAL_PROFILE: AnchorProfile = {
  name: 'Aarav Mehta',
  title: 'Anchor | Emcee | Event Host',
  tagline: 'Every Event Deserves a Great Host.',
  altTaglines: [
    'Your Event. Your Energy. My Mic.',
    'Turning Moments Into Memories.',
    'The Voice Behind Unforgettable Events.',
    'From Grand Celebrations to Extraordinary Experiences.',
    'The Right Energy for Every Occasion.',
  ],
  primaryCities: ['Pune', 'Mumbai'],
  availabilityNotice: 'Based in Pune & Mumbai · Available for Events Across India',
  phone: '+91 98200 87654',
  email: 'bookings@aaravmehta.com',
  whatsappNumber: '919820087654', // Country code without '+' for wa.me links
  instagramHandle: '@aarav.onmic',
  instagramUrl: 'https://instagram.com',
  youtubeUrl: 'https://youtube.com',
  linkedinUrl: 'https://linkedin.com',
  languages: ['English', 'Hindi', 'Marathi', 'Gujarati'],
  hostingStyles: [
    'Charismatic & High-Energy',
    'Warm, Dignified & Cultured',
    'Spontaneous Wit & Improv',
    'Bilingual Crowd Engagement',
  ],
  bioLead:
    'Every event has a story, an audience, and an energy of its own. My role is to bring them together.',
  bioStory: [
    'From keeping a 2,000-person corporate summit dialed into keynotes to orchestrating emotional, laughter-filled wedding sangeets, I believe great anchoring is not about stealing the spotlight—it is about illuminating everyone else on stage.',
    'With a background rooted in theatre improvisation, live public speaking, and large-format event production, my delivery bridges generational gaps effortlessly. Whether switching from crisp business English to heartfelt Hindi or witty Marathi banter, every transition feels organic and unhurried.',
    'I collaborate closely with event directors, wedding choreographers, audio engineers, and backstage crews well before showtime to ensure not a single beat drops. When unexpected schedule slips happen, the mic remains steady, composed, and entertaining.',
  ],
  approachPoints: [
    {
      title: 'Precision Timing & Rundown Discipline',
      desc: 'Seamless coordination with show directors, stage managers, and console teams.',
    },
    {
      title: 'Culturally Nuanced Spontaneity',
      desc: 'Respectful, engaging humour that delights elders, colleagues, and youngsters alike.',
    },
    {
      title: 'Audience-Centric Stage Presence',
      desc: 'Zero ego on the mic; spotlighting chief guests, couples, or award winners with warmth.',
    },
    {
      title: 'Crisis-Proof Composure',
      desc: 'Effortless banter to bridge AV glitches, delayed speakers, or sudden schedule changes.',
    },
  ],
  stats: [
    {
      label: 'Stage Appearances',
      value: '350',
      unit: '+',
      context: 'Weddings, corporate galas, and live fests',
    },
    {
      label: 'Multilingual Fluency',
      value: '4',
      unit: ' Lang',
      context: 'English, Hindi, Marathi & Gujarati',
    },
    {
      label: 'Cities Hosted',
      value: '18',
      unit: '+',
      context: 'Pune, Mumbai, Goa, Jaipur, Bengaluru, Delhi',
    },
    {
      label: 'Audience Engaged',
      value: '250',
      unit: 'k+',
      context: 'Cumulative live attendees on mic',
    },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'weddings',
    categoryKey: 'Weddings',
    title: 'Wedding Anchoring',
    tagline: 'Warmth, humour, and unforgettable family celebrations',
    description:
      'From regal Sangeet face-offs and intimate ringside vows to high-voltage reception entries, I craft bespoke storylines that celebrate the couple while drawing every uncle, aunt, and college friend onto the dance floor.',
    bulletPoints: [
      'High-energy Sangeet night hosting & game orchestration',
      'Warm, sophisticated reception & ring ceremony emceeing',
      'Lively Haldi, Mehendi & pool-side sundowner games',
      'Destination wedding multi-day coordination across India',
      'Custom couple trivia, family roast-and-toast segments',
    ],
    toneOfVoice: 'Warm, joyous, culturally rich & spontaneous',
    typicalDuration: '3 – 6 hours per celebration',
    audienceRange: '80 to 1,500+ guests',
    themeTone: 'gold',
  },
  {
    id: 'corporate',
    categoryKey: 'Corporate',
    title: 'Corporate Events & Galas',
    tagline: 'Polished executive presence and sharp stage discipline',
    description:
      'Elevate leadership summits, annual day festivities, and marquee awards nights. I uphold executive protocol, ensure seamless speaker transitions, and bring infectious energy to employee recognition ceremonies.',
    bulletPoints: [
      'Annual town halls, leadership offsites & award ceremonies',
      'Technology conferences, panel moderation & speaker intros',
      'High-spirit employee appreciation nights & gala dinners',
      'Strict rundown compliance with console & AV teams',
      'Sophisticated stage banter that honors brand ethos',
    ],
    toneOfVoice: 'Sharp, dignified, articulate & engaging',
    typicalDuration: '4 – 8 hours',
    audienceRange: '150 to 3,000+ delegates',
    themeTone: 'orange',
  },
  {
    id: 'college-fests',
    categoryKey: 'College Festivals',
    title: 'College Festivals & Cultural Nights',
    tagline: 'Electric crowd control and peak youth energy',
    description:
      'Command massive student amphitheatres with razor-sharp pop culture banter, beat drops, interactive chant-offs, and rock-solid momentum that keeps the arena cheering from opening act to celebrity finale.',
    bulletPoints: [
      'Inter-college cultural fest inaugurations & fashion shows',
      'Battle of the Bands, celebrity night & DJ warmup intros',
      'Freshers’ welcome carnivals & memorable graduation farewells',
      'Spontaneous crowd dance battles & viral on-stage moments',
      'High safety awareness & respectful crowd management',
    ],
    toneOfVoice: 'Electrifying, witty, relatable & dynamic',
    typicalDuration: '4 – 7 hours',
    audienceRange: '500 to 5,000+ students',
    themeTone: 'purple',
  },
  {
    id: 'brand-launches',
    categoryKey: 'Brand Activations',
    title: 'Brand Launches & Activations',
    tagline: 'Amplifying brand narratives with punchy press-ready poise',
    description:
      'Captivate media, influencers, VIP buyers, and retail footfall during flagship store unveilings, experiential mall tours, and high-stakes product reveal moments.',
    bulletPoints: [
      'Automotive, tech, and retail flagship unveilings',
      'Creator and influencer meet-and-greets & product demos',
      'Experiential mall pop-ups & live consumer engagement',
      'Key message dissemination with zero script stumbles',
      'Photo-op and press interaction coordination',
    ],
    toneOfVoice: 'Trend-aware, persuasive, sleek & charismatic',
    typicalDuration: '2 – 5 hours',
    audienceRange: '100 to 2,000+ attendees',
    themeTone: 'cyan',
  },
  {
    id: 'private-parties',
    categoryKey: 'Private Celebrations',
    title: 'Private Parties & Milestones',
    tagline: 'Intimate, personalized hosting where every guest feels seen',
    description:
      'Whether a landmark 50th birthday, a silver wedding anniversary, or a curated themed villa weekend, I bring an easy-going warmth that dissolves awkwardness and sparks genuine camaraderie.',
    bulletPoints: [
      'Milestone 40th, 50th, and 60th birthday galas',
      'Silver and Golden anniversary celebrations',
      'Curated trivia nights, retro music quizzes & karaoke games',
      'Personalized family storytelling & retrospective video intros',
      'Relaxed, friendly atmosphere that honors elders',
    ],
    toneOfVoice: 'Intimate, warm, witty & heartfelt',
    typicalDuration: '3 – 5 hours',
    audienceRange: '40 to 250 guests',
    themeTone: 'gold',
  },
  {
    id: 'concerts',
    categoryKey: 'Live Shows',
    title: 'Concerts & Live Stage Shows',
    tagline: 'Bridging the artist, the console, and thousands of fans',
    description:
      'Seamless festival hosting that primes the crowd, introduces headlining musicians or comedians with authority, bridges technical line checks, and leaves the audience buzzing with excitement.',
    bulletPoints: [
      'Live music festivals, Bollywood nights & tribute tours',
      'Stand-up comedy specials & talent hunt judging rounds',
      'Audience warm-up games during technical instrument swaps',
      'Sponsor acknowledgment without diluting musical tempo',
      'Instant crowd response coordination & countdown drops',
    ],
    toneOfVoice: 'Booming, authoritative, rhythmic & exhilarating',
    typicalDuration: '3 – 6 hours',
    audienceRange: '1,000 to 10,000+ fans',
    themeTone: 'orange',
  },
];

export const PORTFOLIO_EVENTS: PortfolioItem[] = [
  {
    id: 'sangeet-royal-pune',
    title: 'The Royal Heritage Sangeet Gala',
    category: 'Weddings',
    city: 'Pune',
    venue: 'JW Marriott Grand Ballroom, Senapati Bapat Rd',
    audienceSize: '650 Guests',
    description:
      'Choreographed family dance battle hosting, retro Bollywood face-off, and sentimental storytelling segment celebrating three generations under royal chandelier lighting.',
    momentHighlight:
      'Orchestrated an unscripted 15-minute impromptu dance-off featuring both grandmothers that brought down the house.',
    tags: ['Sangeet', 'Grand Entry', 'Bilingual Banter', 'Royal Decor'],
    visualVibe: {
      accent: '#D6B36A',
      stageType: 'Luxury Floral Chandelier Ballroom',
      ambientGradient: 'from-amber-950/60 via-[#1D1D24] to-[#101014]',
    },
  },
  {
    id: 'corp-tech-summit',
    title: 'Horizon Global Tech Leadership Summit',
    category: 'Corporate',
    city: 'Mumbai',
    venue: 'Jio World Convention Centre, BKC',
    audienceSize: '1,400 Delegates',
    description:
      'Full-day executive conference featuring 8 keynote panels, hybrid CXO fireside discussions, and an evening recognition awards banquet.',
    momentHighlight:
      'Maintained millisecond-precise speaker clock across 14 VIP transitions with crisp contextual intros for overseas directors.',
    tags: ['Keynote Hosting', 'CXO Summit', 'Award Gala', 'Hybrid Broadcast'],
    visualVibe: {
      accent: '#38BDF8',
      stageType: 'Panoramic LED Curved Stage',
      ambientGradient: 'from-blue-950/60 via-[#1D1D24] to-[#101014]',
    },
  },
  {
    id: 'fest-pulse-pune',
    title: 'Verve Youth Cultural Festival',
    category: 'College Festivals',
    city: 'Pune',
    venue: 'COEP Open Amphitheatre',
    audienceSize: '4,500 Students',
    description:
      'High-octane headline evening emceeing featuring battle of the beats, national fashion showcase, and an electrifying Bollywood DJ night handover.',
    momentHighlight:
      'Led a viral 4,000-student synchronized smartphone lightwave countdown before the headline EDM artist took over.',
    tags: ['Crowd Wave', 'Youth Energy', 'Fashion Show', 'EDM Handover'],
    visualVibe: {
      accent: '#A855F7',
      stageType: 'Open Arena Truss Rig',
      ambientGradient: 'from-purple-950/60 via-[#1D1D24] to-[#101014]',
    },
  },
  {
    id: 'auto-launch-ev',
    title: 'Aura Motors Flagship EV Unveil',
    category: 'Brand Activations',
    city: 'Mumbai',
    venue: 'St. Regis Grand Astor Ballroom, Lower Parel',
    audienceSize: '400 Press & VIPs',
    description:
      'Dramatic launch ceremony featuring 3D holographic projection sequence, automotive journalist Q&A session, and dealer leadership felicitation.',
    momentHighlight:
      'Flawlessly anchored the simultaneous 3-second curtain drop and vehicle spotlight cue with exact brand narrative cadence.',
    tags: ['Automotive Launch', 'Press Q&A', 'Luxury Presentation', 'Hologram Cue'],
    visualVibe: {
      accent: '#FF7043',
      stageType: 'Sleek Minimalist Travertine Deck',
      ambientGradient: 'from-orange-950/60 via-[#1D1D24] to-[#101014]',
    },
  },
  {
    id: 'dest-wedding-goa',
    title: 'Sunset Beachfront Wedding & Reception',
    category: 'Weddings',
    city: 'Goa',
    venue: 'Taj Exotica Seaside Lawns, Benaulim',
    audienceSize: '320 Guests',
    description:
      '3-day destination celebration anchoring covering a lively beer-olympics sundowner, intimate pheras narrative, and an all-night outdoor acoustic reception.',
    momentHighlight:
      'Engaged international cross-cultural families in a hilarious Hindi-English vow translation quiz that had everyone in stitches.',
    tags: ['Destination Wedding', 'Sundowner', 'Cross-Cultural', 'Seaside Stage'],
    visualVibe: {
      accent: '#E5C77E',
      stageType: 'Coastal Boho Canopy Stage',
      ambientGradient: 'from-amber-950/50 via-[#1D1D24] to-[#101014]',
    },
  },
  {
    id: 'corp-annual-awards',
    title: 'FinEdge Excellence Awards & Star Night',
    category: 'Corporate',
    city: 'Pune',
    venue: 'The Westin Lawn & Ballroom, Koregaon Park',
    audienceSize: '900 Employees',
    description:
      'Glitz-and-glamour annual party with themed red-carpet interviews, executive recognition trophies, and celebrity performer introduction.',
    momentHighlight:
      'Smoothly bridged an unexpected 10-minute console audio reset with an acoustic team quiz that earned an executive standing ovation.',
    tags: ['Annual Day', 'Employee Felicitation', 'Red Carpet', 'Crisis Improv'],
    visualVibe: {
      accent: '#F59E0B',
      stageType: 'Golden Mirror Runway Stage',
      ambientGradient: 'from-yellow-950/60 via-[#1D1D24] to-[#101014]',
    },
  },
  {
    id: 'fest-symbiosis',
    title: 'Sympulse Intercollegiate Mega Carnivale',
    category: 'College Festivals',
    city: 'Pune',
    venue: 'Viman Nagar Central Ground',
    audienceSize: '3,800 Students',
    description:
      'Flagship talent finale hosting, celebrity judge coordination, sponsor giveaway frenzy, and evening band showcase.',
    momentHighlight:
      'Turned a sudden drizzle break into an epic acapella stadium chant contest with over 3,000 cheering voices.',
    tags: ['Campus Fest', 'Talent Finale', 'Sponsor Spotlights', 'Acapella Chant'],
    visualVibe: {
      accent: '#EC4899',
      stageType: 'Multi-Tier Stadium Rig',
      ambientGradient: 'from-pink-950/60 via-[#1D1D24] to-[#101014]',
    },
  },
  {
    id: 'brand-lifestyle-sobo',
    title: 'Verve Atelier Luxury Store Launch',
    category: 'Brand Activations',
    city: 'Mumbai',
    venue: 'Palladium Mall High Street Phoenix',
    audienceSize: '250 Fashion Influencers & Press',
    description:
      'High-fashion ribbon cutting, designer masterclass introduction, and curated VIP client champagne evening.',
    momentHighlight:
      'Live microphone moderation of an interactive style Q&A between Bollywood stylist guest of honour and attending creators.',
    tags: ['Retail Launch', 'Fashion Influencers', 'Press Walkthrough', 'VIP Reception'],
    visualVibe: {
      accent: '#2DD4BF',
      stageType: 'Haute Couture Display Gallery',
      ambientGradient: 'from-teal-950/60 via-[#1D1D24] to-[#101014]',
    },
  },
  {
    id: 'pvt-anniversary-50th',
    title: 'Golden Jubilee: The Kulkarni Legacy Evening',
    category: 'Private Celebrations',
    city: 'Pune',
    venue: 'The Conrad Heritage Hall, Mangaldas Rd',
    audienceSize: '180 Family & Friends',
    description:
      'Curated retrospective celebration of 50 years of marriage, including emotional documentary video intros and vintage music quizzes.',
    momentHighlight:
      'Read bespoke poetic couplets written for each decade of the couple’s journey, moving guests to tears and laughter.',
    tags: ['50th Anniversary', 'Family Storytelling', 'Heritage Theme', 'Bespoke Poetry'],
    visualVibe: {
      accent: '#D6B36A',
      stageType: 'Intimate Candlelit Salon Stage',
      ambientGradient: 'from-amber-950/60 via-[#1D1D24] to-[#101014]',
    },
  },
  {
    id: 'live-sufi-night',
    title: 'Ishq Sufi Mehfil & Acoustic Festival',
    category: 'Live Shows',
    city: 'Mumbai',
    venue: 'NCPA Experimental Theatre, Nariman Point',
    audienceSize: '850 Music Enthusiasts',
    description:
      'Prestigious concert hosting for a celebrated Sufi ensemble, providing contextual shayari between ragas and guiding audience immersion.',
    momentHighlight:
      'Eloquently wove poetic context between traditional verses, receiving deep appreciation from both the maestro and the crowd.',
    tags: ['Classical Sufi', 'Concert Emcee', 'Urdu Poetry', 'Audience Reverence'],
    visualVibe: {
      accent: '#F97316',
      stageType: 'Acoustic Wood & Lantern Stage',
      ambientGradient: 'from-amber-950/70 via-[#1D1D24] to-[#101014]',
    },
  },
  {
    id: 'sangeet-jaipur-palace',
    title: 'The Marwar Royal Destination Sangeet',
    category: 'Weddings',
    city: 'Jaipur',
    venue: 'Fairmont Palace Courtyard',
    audienceSize: '500 Guests',
    description:
      'Magnificent palace courtyard celebration blending royal Rajasthani welcome traditions with modern Punjabi dhol face-offs.',
    momentHighlight:
      'Anchored a 40-person flash mob surprise executed seamlessly across royal staircases without the bride or groom suspecting a thing.',
    tags: ['Palace Wedding', 'Flash Mob', 'Punjabi Dhol', 'Grand Production'],
    visualVibe: {
      accent: '#D6B36A',
      stageType: 'Palace Archway Illuminated Stage',
      ambientGradient: 'from-amber-900/60 via-[#1D1D24] to-[#101014]',
    },
  },
  {
    id: 'corp-sales-kickoff',
    title: 'Accelerate 2026: National Sales Kickoff',
    category: 'Corporate',
    city: 'Mumbai',
    venue: 'Grand Hyatt Convention Center, Santacruz',
    audienceSize: '1,100 Sales Leaders',
    description:
      'High-voltage corporate momentum rally featuring competitive team war-cries, leadership strategy reveals, and an awards party.',
    momentHighlight:
      'Galvanized 6 regional teams in a live decibel meter cheer battle that had CEOs and junior reps dancing on chairs.',
    tags: ['Sales Kickoff', 'Decibel Challenge', 'Motivation Rally', 'Leadership Keynote'],
    visualVibe: {
      accent: '#38BDF8',
      stageType: 'Futuristic Neon Blue Auditorium',
      ambientGradient: 'from-cyan-950/60 via-[#1D1D24] to-[#101014]',
    },
  },
];

export const SHOWREELS: ShowreelItem[] = [
  {
    id: 'main-reel',
    title: 'The Signature Showreel · Live Stage Moments',
    category: 'Master Reel',
    duration: '03:42',
    previewVibe: 'Cinematic High-Energy Master Showcase',
    description:
      'A seamless retrospective through roaring stadium concerts, emotion-filled wedding sangeet moments, and Fortune 500 corporate conferences.',
    chapters: [
      {
        time: '00:00',
        title: 'Grand Sangeet Entry & Crowd Ignition',
        note: 'Warm Bollywood entrance in Pune with 600+ guests',
      },
      {
        time: '00:58',
        title: 'Tech Summit Keynote & CXO Panel',
        note: 'Dignified corporate moderation at BKC Mumbai',
      },
      {
        time: '01:52',
        title: 'Campus Fest 4,000-Student Arena Wave',
        note: 'Live decibel war and phone flashlight countdown',
      },
      {
        time: '02:45',
        title: 'Luxury Automotive Dramatic Reveal',
        note: 'Precision countdown with holographic countdown cue',
      },
    ],
    stageQuote:
      '“A great host never tries to be the story; a great host makes sure every guest feels they are the hero of the night.”',
  },
  {
    id: 'wedding-reel',
    title: 'The Royal Wedding & Sangeet Moments',
    category: 'Weddings',
    duration: '02:18',
    previewVibe: 'Joyful, Emotional & Family-Centric',
    description:
      'Witness how genuine connection, family banter, and spontaneous uncle-aunt dance battles turn a formal banquet into the happiest night of their lives.',
    chapters: [
      {
        time: '00:00',
        title: 'Couple Love Story Prologue',
        note: 'Heartfelt storytelling before the bridal walk',
      },
      {
        time: '00:45',
        title: 'Groom vs Bride Family Dance War',
        note: 'Bilingual banter in Hindi & Marathi',
      },
      {
        time: '01:30',
        title: 'The Grand Finale Dhol Circle',
        note: 'Bringing all generations together on the floor',
      },
    ],
    stageQuote:
      '“Weddings are not about rehearsed scripts; they are about genuine laughter and honoring the parents.”',
  },
  {
    id: 'corporate-reel',
    title: 'Corporate Precision & Awards Host',
    category: 'Corporate',
    duration: '02:35',
    previewVibe: 'Crisp, Authoritative & Executive',
    description:
      'Flawless executive cadence, rundown discipline, teleprompter mastery, and award felicitation that maintains momentum throughout a 4-hour gala.',
    chapters: [
      {
        time: '00:00',
        title: 'Summit Inaugural & VIP Protocols',
        note: 'Welcoming board members and international delegates',
      },
      {
        time: '01:10',
        title: 'Annual Excellence Awards Ceremony',
        note: 'Fast-paced trophy transitions with personalized citations',
      },
      {
        time: '02:00',
        title: 'Gala Evening Celebration Kickoff',
        note: 'Shifting the room from business formality to party mood',
      },
    ],
    stageQuote:
      '“Executive hosting requires respect for time, clarity in pronunciation, and poise under live pressure.”',
  },
  {
    id: 'campus-reel',
    title: 'Campus Euphoria & Live Concerts',
    category: 'Festivals & Concerts',
    duration: '01:55',
    previewVibe: 'Roaring, Rhythmic & Relentless Energy',
    description:
      'Watch 5,000 students follow every cue, chant in unison, and erupt into cheers as Aarav commands the festival stage.',
    chapters: [
      {
        time: '00:00',
        title: 'Arena Warmup & Decibel Challenge',
        note: 'Engaging both ends of the stadium before the headliner',
      },
      {
        time: '00:55',
        title: 'Beat Drop & Headliner Introduction',
        note: 'Building intense musical suspense and artist hype',
      },
      {
        time: '01:35',
        title: 'Audience Singalong Coordination',
        note: 'Uniting 5,000 voices in an iconic anthem chorus',
      },
    ],
    stageQuote:
      '“When thousands of students are waiting, you can’t fake energy—you have to feel it in your bones.”',
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'audience-connection',
    title: 'Audience Connection',
    headline: 'Keeping Every Guest Engaged & Involved',
    description:
      'No cold corporate monologues or detached teleprompter readings. Aarav reads the body language of the room constantly, making introverts feel welcome and high-energy guests feel celebrated.',
    organizerBenefit:
      'Zero dead silence or awkward lulls between program transitions.',
  },
  {
    id: 'adaptable-hosting',
    title: 'Adaptable Hosting',
    headline: 'Fluidly Matching the Tone of Every Occasion',
    description:
      'From regal, respectful etiquette at a traditional wedding reception to sharp, fast-paced articulation at an investor summit, the vocal tone, pace, and body language effortlessly morph to suit the room.',
    organizerBenefit:
      'One host versatile enough for your afternoon conference and evening party.',
  },
  {
    id: 'smooth-flow',
    title: 'Smooth Event Flow',
    headline: 'Guarding the Schedule Without Feeling Rushed',
    description:
      'An event rundown is a living organism. When a chief guest is stuck in traffic or a choreographer needs three more minutes, Aarav bridges the gap with spontaneous crowd trivia or musical interplay.',
    organizerBenefit:
      'AV glitches and backstage delays are neutralized before guests notice.',
  },
  {
    id: 'memorable-moments',
    title: 'Memorable Moments',
    headline: 'Creating Authentic Sparks That Go Viral',
    description:
      'The magic lives in unscripted candor: getting the shy bridegroom to reveal his first crush, prompting the managing director to bust a signature dance move, or a 3,000-person phone flashlight wave.',
    organizerBenefit:
      'Guests talk about your celebration for months and share clips organically.',
  },
  {
    id: 'professional-coordination',
    title: 'Professional Coordination',
    headline: 'A Reliable Partner to Event Planners & Crew',
    description:
      'Arriving early for soundchecks, reviewing stage mic polar patterns with the sound engineer, coordinating cue sheets with lighting directors, and respecting backstage protocols with quiet discipline.',
    organizerBenefit:
      'Event planners get peace of mind and an emcee who works as part of their team.',
  },
];

export const BOOKING_STEPS: BookingStepItem[] = [
  {
    step: 1,
    title: 'Share Your Event Details',
    subtitle: 'Occasion, Date, Venue & Scope',
    description:
      'Fill in the quick enquiry form or tap WhatsApp. Share your celebration type, proposed dates, city, venue, and estimated audience scale.',
    turnaroundTime: 'Instant / Within 2 hours',
  },
  {
    step: 2,
    title: 'Discuss Your Requirements',
    subtitle: 'Hosting Style, Language & Rundown',
    description:
      'A focused 15-minute alignment call to explore your audience profile, preferred language mix (English/Hindi/Marathi/Gujarati), key milestones, and tone.',
    turnaroundTime: 'Scheduled at your convenience',
  },
  {
    step: 3,
    title: 'Receive a Tailored Proposal',
    subtitle: 'Dates Confirmation, Fee & Inclusions',
    description:
      'A transparent, itemized proposal detailing commercial scope, travel logistics (if outside Pune/Mumbai), rehearsal availability, and cancellation terms.',
    turnaroundTime: 'Delivered in 24 hours',
  },
  {
    step: 4,
    title: "Let's Make It Memorable",
    subtitle: 'Script Polish, Tech Check & Showtime',
    description:
      'Confirmation token, pre-event rundown sync with your show director or wedding planner, stage cues finalized, and high-energy execution on game day.',
    turnaroundTime: 'Stage-ready performance',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote:
      'Aarav transformed our Sangeet into pure magic! We were nervous about how our Gujarati and Maharashtrian families would mix, but within 10 minutes Aarav had both sides laughing and hugging on the dance floor. He was punctual, poised, and utterly delightful.',
    clientName: 'Priya & Rohan Desai',
    designation: 'Bride & Groom',
    companyOrEvent: 'Destination Wedding at JW Marriott Pune',
    city: 'Pune',
    category: 'Weddings',
    rating: 5,
    verifiedLabel: 'Fictional Demo Review · Verified Event Pattern',
  },
  {
    id: 'test-2',
    quote:
      'Hosting our Global Technology Gala with 1,200 delegates from 14 countries is no easy task. Aarav handled executive speaker bios with zero mispronunciations, kept our awards moving at clockwork speed, and commanded the stage with world-class presence.',
    clientName: 'Vikramaditya Sengupta',
    designation: 'Head of Corporate Communications',
    companyOrEvent: 'Apex Global Technologies Annual Summit',
    city: 'Mumbai',
    category: 'Corporate',
    rating: 5,
    verifiedLabel: 'Fictional Demo Review · Corporate Category',
  },
  {
    id: 'test-3',
    quote:
      'Finding an emcee who can control a raucous crowd of 4,000 college students without losing cool is nearly impossible—until we booked Aarav. His energy was infectious, his crowd-waves were legendary, and he was the backbone of our campus festival!',
    clientName: 'Ananya Deshmukh',
    designation: 'General Secretary, Cultural Committee',
    companyOrEvent: 'COEP Youth Cultural Fest',
    city: 'Pune',
    category: 'College Festivals',
    rating: 5,
    verifiedLabel: 'Fictional Demo Review · Campus Fest Category',
  },
  {
    id: 'test-4',
    quote:
      'For the launch of our premium electric SUV, we required a host who possessed sophistication and could handle live media Q&As alongside automotive journalists. Aarav delivered a flawless presentation and represented our brand ethos with distinction.',
    clientName: 'Kunal Malvankar',
    designation: 'Marketing Director, Western Region',
    companyOrEvent: 'Aura EV Motors Press Unveil',
    city: 'Mumbai',
    category: 'Brand Activations',
    rating: 5,
    verifiedLabel: 'Fictional Demo Review · Brand Activation',
  },
  {
    id: 'test-5',
    quote:
      'As an event planner with 12 years in destination weddings, Aarav is the first name on my speed-dial. He coordinates with the DJ, knows sound systems inside out, and never needs hand-holding. When the groom entry was delayed by 30 minutes, he entertained the crowd effortlessly.',
    clientName: 'Simran Chawla',
    designation: 'Founder & Chief Wedding Curator',
    companyOrEvent: 'Vows & Petals Luxury Events',
    city: 'Mumbai & Goa',
    category: 'Weddings',
    rating: 5,
    verifiedLabel: 'Fictional Demo Review · Event Partner Endorsement',
  },
];

export const COLLABORATOR_BRANDS = [
  'JW Marriott Pune',
  'Jio World Centre',
  'The Westin Mumbai',
  'Fairmont Jaipur',
  'Taj Exotica Goa',
  'TechMahindra Arena',
  'Symbiosis International',
  'Aura Motors',
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What types of events do you host?',
    answer:
      'I host a diverse spectrum of live celebrations: luxury weddings and Sangeets, corporate summits, annual award galas, tech conferences, college cultural festivals, automotive and brand unveilings, concerts, and milestone private parties. Each event format receives a tailored tone of voice and hosting style.',
    category: 'Event Types',
  },
  {
    id: 'faq-2',
    question: 'Which cities do you cover, and what about outstation travel?',
    answer:
      'I am primarily based out of Pune and Mumbai, making events across Maharashtra easily accessible. I regularly travel across India for destination weddings and corporate offsites (Goa, Jaipur, Udaipur, Bengaluru, Delhi NCR, Hyderabad) subject to advance scheduling. Outstation flight travel and hotel accommodations are arranged as part of the booking agreement.',
    category: 'Logistics & Tech',
  },
  {
    id: 'faq-3',
    question: 'Can you host events in multiple languages?',
    answer:
      'Yes, absolutely. I am fluent in English, Hindi, Marathi, and conversational Gujarati. I excel at bilingual or trilingual stage hosting—effortlessly switching between crisp corporate English, heartfelt Hindi, and culturally resonant regional humor to ensure every single guest feels included.',
    category: 'Scripting',
  },
  {
    id: 'faq-4',
    question: 'How far in advance should we reserve our event date?',
    answer:
      'For wedding season dates (October through February) and popular auspicious muhurat weekends, clients typically secure bookings 3 to 6 months in advance. Corporate conferences and college fests are generally confirmed 4 to 8 weeks prior. However, last-minute enquiries are always welcome if my calendar is open on your selected date.',
    category: 'Booking & Fees',
  },
  {
    id: 'faq-5',
    question: 'How is the anchoring fee determined?',
    answer:
      'Fees are customized based on the nature of the celebration, expected duration (single evening vs. multi-day destination event), audience scale, city location, and whether advance rehearsals or script co-writing are required. Contact me via the enquiry form or WhatsApp with your event details to receive an itemized, transparent commercial proposal.',
    category: 'Booking & Fees',
  },
  {
    id: 'faq-6',
    question: 'Can you customise your script and games for our event?',
    answer:
      'Every event I anchor is 100% bespoke. I conduct pre-event discovery calls with the couple, family, or corporate organizing committee to learn about inside jokes, company achievements, family milestones, and specific VIP guests. We design custom trivia, couple face-offs, or award transitions that reflect your personal story.',
    category: 'Scripting',
  },
  {
    id: 'faq-7',
    question: 'Do you host multi-day destination weddings?',
    answer:
      'Yes! Multi-day destination weddings are among my favorite assignments. I can manage the entire weekend flow: starting with poolside sundowner games and icebreakers, anchoring the high-octane Sangeet night, delivering touching pheras narratives, and culminating in the formal reception banquet.',
    category: 'Event Types',
  },
  {
    id: 'faq-8',
    question: 'What details are required to check your availability?',
    answer:
      'Simply provide: 1) Your proposed date(s) and time, 2) Event type (e.g. Sangeet, Annual Day), 3) City & venue name, and 4) Approximate guest count. You can fill out the form on this page or tap the WhatsApp button to get an immediate availability check.',
    category: 'Booking & Fees',
  },
];

export const SOCIAL_POSTS: SocialPostItem[] = [
  {
    id: 'post-1',
    caption:
      'When both grandmothers refuse to leave the Sangeet stage without a proper Bollywood face-off! These unscripted moments make holding the mic the best job in the world. ✨ Pune you were magic tonight.',
    eventType: 'Heritage Sangeet Night',
    city: 'Pune',
    timestamp: '2 days ago',
    likes: '1.8k',
    comments: '94',
    stageNote: 'Live crowd moment at JW Marriott',
  },
  {
    id: 'post-2',
    caption:
      'Honoured to anchor the Horizon Global Tech Summit before 1,400 technology visionaries from 14 countries. Sharp rundown, zero delay, and electrifying innovation discussions. 🎙️',
    eventType: 'Global CXO Tech Summit',
    city: 'Mumbai',
    timestamp: '5 days ago',
    likes: '2.4k',
    comments: '112',
    stageNote: 'Keynote stage at Jio World Centre',
  },
  {
    id: 'post-3',
    caption:
      '4,000 flashlights in the air and one roaring college chorus. The energy at Verve Fest was beyond words. Student energy will forever be unmatched! ⚡⚡',
    eventType: 'Youth Cultural Fest',
    city: 'Pune',
    timestamp: '1 week ago',
    likes: '4.2k',
    comments: '238',
    stageNote: 'Open air amphitheatre crowd wave',
  },
  {
    id: 'post-4',
    caption:
      'Behind the scenes 10 minutes before curtain drop for the new flagship EV launch. Double checking cues with console, lighting, and stage directors. Preparation is everything. 🚗🔌',
    eventType: 'Automotive Media Reveal',
    city: 'Mumbai',
    timestamp: '2 weeks ago',
    likes: '1.5k',
    comments: '67',
    stageNote: 'Stage console tech check',
  },
  {
    id: 'post-5',
    caption:
      'Sunset by the Arabian Sea, intimate acoustic vows, and a family that danced until 4 AM. Grateful to be part of memories that last lifetimes. Goa destination wedding season in full swing! 🌅',
    eventType: 'Beachfront Destination Wedding',
    city: 'Goa',
    timestamp: '3 weeks ago',
    likes: '3.1k',
    comments: '143',
    stageNote: 'Taj Exotica Seaside Lawns',
  },
  {
    id: 'post-6',
    caption:
      'Quick mic check before the annual awards gala. 35 awards in 60 minutes with personalized citations for every achiever. Keep the momentum high, celebrate the people! 🏆',
    eventType: 'Corporate Excellence Awards',
    city: 'Mumbai',
    timestamp: '4 weeks ago',
    likes: '1.9k',
    comments: '81',
    stageNote: 'St. Regis Ballroom stage',
  },
];
