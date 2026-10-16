import React, { useState } from 'react';
import {
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Copy,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { AnchorProfile, BookingFormData } from '../types';

interface EnquirySectionProps {
  profile: AnchorProfile;
  preselectedEventType?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  profile,
  preselectedEventType = '',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    eventType: preselectedEventType || 'Wedding Sangeet & Reception',
    eventDate: '',
    city: 'Pune',
    venueName: '',
    audienceSize: '100 – 300 Guests',
    preferredLanguage: 'Bilingual (Hindi & English)',
    additionalRequirements: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Sync if preselectedEventType changes
  React.useEffect(() => {
    if (preselectedEventType) {
      setFormData((prev) => ({ ...prev, eventType: preselectedEventType }));
    }
  }, [preselectedEventType]);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide your full name or company name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for date confirmation.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required for sending the proposal.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.eventDate) {
      errs.eventDate = 'Please select your target event date.';
    }
    if (!formData.city.trim()) {
      errs.city = 'Please specify the event host city.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateWhatsAppMessage = () => {
    const lines = [
      `Hi ${profile.name}! I'm looking for an anchor for an upcoming celebration.`,
      `• Name: ${formData.fullName || 'Organiser'}`,
      `• Event Type: ${formData.eventType}`,
      `• Proposed Date: ${formData.eventDate || '[Date TBD]'}`,
      `• City & Venue: ${formData.city}${formData.venueName ? ` (${formData.venueName})` : ''}`,
      `• Audience Size: ${formData.audienceSize}`,
      `• Preferred Language: ${formData.preferredLanguage}`,
    ];

    if (formData.additionalRequirements) {
      lines.push(`• Notes: ${formData.additionalRequirements}`);
    }

    lines.push('Please share your schedule availability and commercial booking details.');

    return lines.join('\n');
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = generateWhatsAppMessage();
    const url = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const handleStandardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitted(true);
  };

  const handleCopySummary = () => {
    const msg = generateWhatsAppMessage();
    navigator.clipboard?.writeText(msg);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <section id="enquiry" className="py-24 bg-[#101014] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs uppercase font-mono tracking-widest text-[#D6B36A] font-semibold mb-3">
            08. Secure Your Date
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
            Let's Talk About Your Event.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Share your celebration vision below. We will review date availability, schedule a 15-minute
            alignment call, and provide an itemized commercial proposal within 24 hours.
          </p>
        </div>

        {/* Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form inputs */}
          <div className="lg:col-span-8 bg-[#161622] border border-[#27273C] rounded-2xl p-6 sm:p-10 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white font-display">
                    Enquiry Drafted Successfully!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your enquiry details
                    have been prepared. In this demo environment, submissions are formatted client-side.
                  </p>
                </div>

                {/* Prepared enquiry summary preview */}
                <div className="p-5 rounded-xl bg-[#101014] border border-[#262638] text-left text-xs font-mono text-slate-300 max-w-lg mx-auto whitespace-pre-line space-y-1">
                  {generateWhatsAppMessage()}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <a
                    href={`https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
                      generateWhatsAppMessage()
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-[#101014] font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/20"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Send via WhatsApp Instantly</span>
                  </a>

                  <button
                    onClick={handleCopySummary}
                    className="px-5 py-3 bg-[#222232] hover:bg-[#2A2A3C] text-slate-200 font-semibold rounded-xl text-xs sm:text-sm flex items-center gap-2 border border-[#35354A]"
                  >
                    <Copy className="w-4 h-4" />
                    <span>{copiedSummary ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                  </button>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        eventType: 'Wedding Sangeet & Reception',
                        eventDate: '',
                        city: 'Pune',
                        venueName: '',
                        audienceSize: '100 – 300 Guests',
                        preferredLanguage: 'Bilingual (Hindi & English)',
                        additionalRequirements: '',
                      });
                    }}
                    className="text-xs text-slate-400 hover:text-white underline underline-offset-4"
                  >
                    Submit Another Event Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleStandardSubmit} className="space-y-6">
                
                {/* Row 1: Full Name & Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                      Full Name / Organiser Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="e.g. Priya Sharma or Apex Tech Events"
                      className={`w-full bg-[#1A1A28] border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-500' : 'border-[#2D2D40] focus:border-[#D6B36A]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="e.g. +91 98200 12345"
                      className={`w-full bg-[#1A1A28] border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-[#2D2D40] focus:border-[#D6B36A]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Email & Event Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. priya@gmail.com"
                      className={`w-full bg-[#1A1A28] border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-[#2D2D40] focus:border-[#D6B36A]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                      Event Category
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-[#1A1A28] border border-[#2D2D40] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D6B36A]"
                    >
                      <option value="Wedding Sangeet & Reception">Wedding Sangeet & Reception</option>
                      <option value="Destination Wedding (Multi-Day)">Destination Wedding (Multi-Day)</option>
                      <option value="Corporate Summit & Annual Gala">Corporate Summit & Annual Gala</option>
                      <option value="Corporate Awards & Town Hall">Corporate Awards & Town Hall</option>
                      <option value="College Cultural Fest & Concert">College Cultural Fest & Concert</option>
                      <option value="Brand Launch & Press Activation">Brand Launch & Press Activation</option>
                      <option value="Private Milestone Birthday / Anniversary">Private Milestone Party</option>
                      <option value="Live Music & Celebrity Stage Show">Concert & Live Stage Show</option>
                      <option value="Other Custom Format">Other Custom Format</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Event Date & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                      Target Event Date *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => {
                          setFormData({ ...formData, eventDate: e.target.value });
                          if (errors.eventDate) setErrors({ ...errors, eventDate: undefined });
                        }}
                        className={`w-full bg-[#1A1A28] border rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors ${
                          errors.eventDate ? 'border-red-500' : 'border-[#2D2D40] focus:border-[#D6B36A]'
                        }`}
                      />
                    </div>
                    {errors.eventDate && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.eventDate}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                      Event City *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => {
                        setFormData({ ...formData, city: e.target.value });
                        if (errors.city) setErrors({ ...errors, city: undefined });
                      }}
                      className="w-full bg-[#1A1A28] border border-[#2D2D40] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D6B36A]"
                    >
                      <option value="Pune">Pune (Primary Base)</option>
                      <option value="Mumbai">Mumbai (Primary Base)</option>
                      <option value="Goa">Goa</option>
                      <option value="Jaipur">Jaipur</option>
                      <option value="Udaipur">Udaipur</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Other City (Pan-India)">Other City (Pan-India)</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Venue & Audience Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                      Venue Name or Area (If Finalized)
                    </label>
                    <input
                      type="text"
                      value={formData.venueName}
                      onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                      placeholder="e.g. JW Marriott / Turf Club / In Discussion"
                      className="w-full bg-[#1A1A28] border border-[#2D2D40] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D6B36A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                      Expected Audience Scale
                    </label>
                    <select
                      value={formData.audienceSize}
                      onChange={(e) => setFormData({ ...formData, audienceSize: e.target.value })}
                      className="w-full bg-[#1A1A28] border border-[#2D2D40] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D6B36A]"
                    >
                      <option value="Under 100 Guests">Intimate (Under 100 Guests)</option>
                      <option value="100 – 300 Guests">100 – 300 Guests</option>
                      <option value="300 – 800 Guests">300 – 800 Guests (Grand Ballroom)</option>
                      <option value="800 – 2,000 Guests">800 – 2,000 Delegates / Attendees</option>
                      <option value="2,000+ Stadium / Arena">2,000+ Mega Stadium / Campus</option>
                    </select>
                  </div>
                </div>

                {/* Row 5: Preferred Language Mix */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                    Preferred Hosting Languages
                  </label>
                  <select
                    value={formData.preferredLanguage}
                    onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                    className="w-full bg-[#1A1A28] border border-[#2D2D40] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D6B36A]"
                  >
                    <option value="Bilingual (Hindi & English)">Bilingual (Hindi & English)</option>
                    <option value="Trilingual (Marathi, Hindi & English)">Trilingual (Marathi, Hindi & English)</option>
                    <option value="English Corporate Standard">English Corporate Standard</option>
                    <option value="Gujarati & Hindi Blend">Gujarati & Hindi Blend</option>
                    <option value="High-Energy Hindi & English">High-Energy Hindi & English Pop</option>
                  </select>
                </div>

                {/* Row 6: Additional Requirements */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-2">
                    Event Vision, Specific Games or Special Requests
                  </label>
                  <textarea
                    rows={3}
                    value={formData.additionalRequirements}
                    onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                    placeholder="Share family backgrounds, surprise flash mobs, key VIP speakers, rehearsal timeline or any questions..."
                    className="w-full bg-[#1A1A28] border border-[#2D2D40] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D6B36A]"
                  />
                </div>

                {/* Submission CTA Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-6 font-bold text-sm text-[#101014] bg-[#D6B36A] hover:bg-[#E5C77E] active:scale-98 rounded-xl transition-all duration-150 flex items-center justify-center gap-2 shadow-lg shadow-[#D6B36A]/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Booking Enquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="flex-1 py-3.5 px-6 font-semibold text-sm text-white bg-[#1D3B2B] hover:bg-[#234A36] border border-emerald-500/40 rounded-xl transition-all duration-150 flex items-center justify-center gap-2 text-emerald-300"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 text-center leading-normal">
                  No payment required to enquire. We check calendar availability and provide an itemized commercial proposal.
                </p>

              </form>
            )}
          </div>

          {/* Right sidebar: Direct contacts & Guarantees */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick response card */}
            <div className="p-6 rounded-2xl bg-[#161622] border border-[#27273C] space-y-4">
              <div className="flex items-center gap-2 text-[#D6B36A] font-mono text-xs uppercase font-semibold">
                <Calendar className="w-4 h-4" />
                <span>Response Guarantee</span>
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                Prompt Availability Confirmation
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Event dates are held on a first-come, first-confirmed basis. Enquiries sent before 8 PM
                receive date confirmation within two hours.
              </p>
              
              <div className="pt-3 border-t border-[#232334] space-y-2 text-xs font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>Pune & Mumbai:</span>
                  <span className="text-white font-semibold">Immediate Local Base</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Outstation Dates:</span>
                  <span className="text-white font-semibold">Travel Surcharges In Proposal</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-[#161622] border border-[#27273C] space-y-4">
              <div className="flex items-center gap-2 text-[#FF7043] font-mono text-xs uppercase font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Direct Coordination</span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <p className="text-slate-400 font-mono">DIRECT CALL / SMS</p>
                  <a href={`tel:${profile.phone}`} className="text-sm font-semibold text-white font-mono hover:text-[#D6B36A]">
                    {profile.phone}
                  </a>
                </div>

                <div>
                  <p className="text-slate-400 font-mono">BOOKING DESK EMAIL</p>
                  <a href={`mailto:${profile.email}`} className="text-sm font-semibold text-white font-mono hover:text-[#D6B36A]">
                    {profile.email}
                  </a>
                </div>

                <div>
                  <p className="text-slate-400 font-mono">PRIMARY BASES</p>
                  <p className="text-sm font-semibold text-slate-200">
                    {profile.primaryCities.join(' & ')} · Available Nationwide
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#232334]">
                <a
                  href={`https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
                    `Hi ${profile.name}! I'm checking availability for an upcoming event.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Stack & Pixel Demo Badge */}
            <div className="p-4 rounded-xl bg-[#121218] border border-[#232332] text-[11px] text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300">Stack & Pixel Web Studio Notice</p>
              <p>
                This form demonstrates live client-side validation and automated WhatsApp pre-fill. A backend webhook or CRM can be plugged in during client deployment.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
