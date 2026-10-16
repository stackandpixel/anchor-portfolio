import React, { useState } from 'react';
import { X, RotateCcw, Save, Sparkles, Check, Code, UserCheck } from 'lucide-react';
import { AnchorProfile } from '../types';
import { INITIAL_PROFILE } from '../data/config';

interface ConfigDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: AnchorProfile;
  onSaveProfile: (newProfile: AnchorProfile) => void;
}

export const ConfigDrawer: React.FC<ConfigDrawerProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
}) => {
  const [activeTab, setActiveTab] = useState<'editor' | 'docs'>('editor');
  const [formData, setFormData] = useState<AnchorProfile>({ ...profile });
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleReset = () => {
    setFormData({ ...INITIAL_PROFILE });
    onSaveProfile({ ...INITIAL_PROFILE });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-lg bg-[#14141E] border-l border-[#27273C] h-full flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="p-5 border-b border-[#252538] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D6B36A]" />
            <div>
              <h3 className="text-base font-bold text-white font-display">
                Stack & Pixel · Demo Customizer
              </h3>
              <p className="text-[11px] text-slate-400">
                Configure host details live to test custom client branding
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#1C1C2A] text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-[#252538] bg-[#101016]">
          <button
            onClick={() => setActiveTab('editor')}
            className={`flex-1 py-3 text-xs font-semibold flex items-center justify-center gap-2 border-b-2 transition-colors ${
              activeTab === 'editor'
                ? 'border-[#D6B36A] text-[#D6B36A] bg-[#161624]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Live Brand Editor</span>
          </button>

          <button
            onClick={() => setActiveTab('docs')}
            className={`flex-1 py-3 text-xs font-semibold flex items-center justify-center gap-2 border-b-2 transition-colors ${
              activeTab === 'docs'
                ? 'border-[#D6B36A] text-[#D6B36A] bg-[#161624]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Developer Code Guide</span>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'editor' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {savedSuccess && (
                <div className="p-3 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Changes saved and applied across the entire site!</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  Anchor / Host Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#1A1A28] border border-[#2D2D40] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D6B36A]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  Professional Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-[#1A1A28] border border-[#2D2D40] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D6B36A]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  Primary Tagline
                </label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  className="w-full bg-[#1A1A28] border border-[#2D2D40] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D6B36A]"
                />
              </div>

              {/* Anchor Imagery & Photos Section */}
              <div className="p-4 rounded-xl bg-[#1A1A28] border border-[#2D2D42] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D6B36A] font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Anchor Photos & Stage Media</span>
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Upload an image from your device or paste an image URL to replace the default stage graphics.
                </p>

                {/* About Section Portrait */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-300">
                    Host Portrait Photo (About Section)
                  </label>
                  <div className="flex items-center gap-3">
                    {formData.customPortraitImage ? (
                      <div className="relative w-14 h-16 rounded-lg overflow-hidden border border-[#D6B36A] shrink-0">
                        <img
                          src={formData.customPortraitImage}
                          alt="Portrait preview"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, customPortraitImage: '' })}
                          className="absolute inset-0 bg-black/60 text-xs text-red-400 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                          title="Remove photo"
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <div className="w-14 h-16 rounded-lg bg-[#12121A] border border-dashed border-slate-600 flex items-center justify-center text-[10px] text-slate-500 text-center shrink-0">
                        Vector
                      </div>
                    )}
                    <div className="flex-1 space-y-1.5">
                      <input
                        type="file"
                        accept="image/*"
                        id="portrait-upload"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                              if (typeof event.target?.result === 'string') {
                                setFormData((prev) => ({
                                  ...prev,
                                  customPortraitImage: event.target!.result as string,
                                }));
                              }
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                      <label
                        htmlFor="portrait-upload"
                        className="inline-block py-1.5 px-3 rounded-lg bg-[#252538] hover:bg-[#303048] text-slate-200 text-xs font-medium cursor-pointer border border-[#3A3A52] transition-colors"
                      >
                        Upload Local Photo
                      </label>
                      <input
                        type="url"
                        placeholder="Or paste portrait image URL..."
                        value={formData.customPortraitImage || ''}
                        onChange={(e) => setFormData({ ...formData, customPortraitImage: e.target.value })}
                        className="w-full bg-[#12121A] border border-[#2D2D40] rounded px-2.5 py-1 text-[11px] text-white placeholder-slate-500 focus:outline-none focus:border-[#D6B36A]"
                      />
                    </div>
                  </div>
                </div>

                {/* Hero Stage Photo */}
                <div className="space-y-2 pt-2 border-t border-[#252538]">
                  <label className="block text-xs font-semibold text-slate-300">
                    Hero Stage Photo (Hero Section)
                  </label>
                  <div className="flex items-center gap-3">
                    {formData.customHeroImage ? (
                      <div className="relative w-16 h-12 rounded-lg overflow-hidden border border-[#D6B36A] shrink-0">
                        <img
                          src={formData.customHeroImage}
                          alt="Hero preview"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, customHeroImage: '' })}
                          className="absolute inset-0 bg-black/60 text-xs text-red-400 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                          title="Remove photo"
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <div className="w-16 h-12 rounded-lg bg-[#12121A] border border-dashed border-slate-600 flex items-center justify-center text-[10px] text-slate-500 text-center shrink-0">
                        Vector
                      </div>
                    )}
                    <div className="flex-1 space-y-1.5">
                      <input
                        type="file"
                        accept="image/*"
                        id="hero-upload"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                              if (typeof event.target?.result === 'string') {
                                setFormData((prev) => ({
                                  ...prev,
                                  customHeroImage: event.target!.result as string,
                                }));
                              }
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                      />
                      <label
                        htmlFor="hero-upload"
                        className="inline-block py-1.5 px-3 rounded-lg bg-[#252538] hover:bg-[#303048] text-slate-200 text-xs font-medium cursor-pointer border border-[#3A3A52] transition-colors"
                      >
                        Upload Local Photo
                      </label>
                      <input
                        type="url"
                        placeholder="Or paste hero stage image URL..."
                        value={formData.customHeroImage || ''}
                        onChange={(e) => setFormData({ ...formData, customHeroImage: e.target.value })}
                        className="w-full bg-[#12121A] border border-[#2D2D40] rounded px-2.5 py-1 text-[11px] text-white placeholder-slate-500 focus:outline-none focus:border-[#D6B36A]"
                      />
                    </div>
                  </div>
                </div>

                {/* AI Prompt Recipes & Guidance Box */}
                <div className="p-3 rounded-lg bg-[#14141E] border border-[#272738] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#D6B36A] font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#FF7043]" />
                      <span>Ready-to-use AI Prompts (Copy & Generate)</span>
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-tight">
                    If your project's Gemini Imagen quota is consumed, you can generate photos using Midjourney, ChatGPT/DALL-E, or Flux and upload them above:
                  </p>
                  
                  <div className="space-y-1.5 pt-1">
                    <div className="p-2 rounded bg-[#0E0E14] border border-[#222232] flex items-center justify-between gap-2">
                      <span className="text-[10px] text-slate-300 font-mono truncate">
                        Hero Stage Tuxedo (16:9 Wide)
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard?.writeText(
                            'Cinematic wide photograph of an attractive 28-year-old Indian male event host in a sharp black tuxedo holding a wireless microphone on a grand stage with champagne gold spotlights and cheering audience, photorealistic 8k commercial quality'
                          );
                          setSavedSuccess(true);
                          setTimeout(() => setSavedSuccess(false), 2000);
                        }}
                        className="text-[10px] font-semibold text-[#D6B36A] hover:text-white bg-[#1C1C2A] px-2 py-0.5 rounded border border-[#2E2E42] shrink-0"
                      >
                        Copy Prompt
                      </button>
                    </div>

                    <div className="p-2 rounded bg-[#0E0E14] border border-[#222232] flex items-center justify-between gap-2">
                      <span className="text-[10px] text-slate-300 font-mono truncate">
                        About Studio Portrait (3:4 Vertical)
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard?.writeText(
                            'Editorial studio portrait of charismatic 28-year-old Indian male emcee wearing a tailored midnight navy suit with gold lapel pin, holding wireless microphone, warm engaging smile, champagne studio rim lighting, photorealistic 8k'
                          );
                          setSavedSuccess(true);
                          setTimeout(() => setSavedSuccess(false), 2000);
                        }}
                        className="text-[10px] font-semibold text-[#D6B36A] hover:text-white bg-[#1C1C2A] px-2 py-0.5 rounded border border-[#2E2E42] shrink-0"
                      >
                        Copy Prompt
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  WhatsApp Number (with country code, no +)
                </label>
                <input
                  type="text"
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  placeholder="e.g. 919820087654"
                  className="w-full bg-[#1A1A28] border border-[#2D2D40] rounded-lg px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-[#D6B36A]"
                />
                <p className="text-[10px] text-slate-500 mt-1">Used for wa.me pre-filled message encoding.</p>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  Display Phone Number
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#1A1A28] border border-[#2D2D40] rounded-lg px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-[#D6B36A]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  Business Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#1A1A28] border border-[#2D2D40] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D6B36A]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  Instagram Handle
                </label>
                <input
                  type="text"
                  value={formData.instagramHandle}
                  onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value })}
                  className="w-full bg-[#1A1A28] border border-[#2D2D40] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D6B36A]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  Availability Region Notice
                </label>
                <input
                  type="text"
                  value={formData.availabilityNotice}
                  onChange={(e) => setFormData({ ...formData, availabilityNotice: e.target.value })}
                  className="w-full bg-[#1A1A28] border border-[#2D2D40] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D6B36A]"
                />
              </div>

              <div className="pt-4 flex items-center gap-3">
                <button
                  type="submit"
                  className="flex-1 py-2.5 px-4 bg-[#D6B36A] hover:bg-[#E5C77E] text-[#101014] font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Apply Changes Live</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="py-2.5 px-3 bg-[#1C1C28] hover:bg-[#252538] text-slate-300 text-xs rounded-lg flex items-center gap-1.5 border border-[#2A2A3C] transition-colors"
                  title="Reset to Aarav Mehta Defaults"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
              <div className="p-4 rounded-xl bg-[#101014] border border-[#262638] space-y-2">
                <h4 className="font-bold text-white font-display text-sm">
                  How to Configure for Production
                </h4>
                <p>
                  This template is designed by <strong className="text-[#D6B36A]">Stack & Pixel</strong> with clean data decoupling:
                </p>
                <ul className="list-disc pl-4 space-y-1 text-slate-400 font-mono text-[11px]">
                  <li>
                    <strong className="text-white">src/data/config.ts</strong>: Contains the primary profile, services, portfolio events, showreel chapters, FAQs, and testimonials.
                  </li>
                  <li>
                    <strong className="text-white">src/types.ts</strong>: Strict TypeScript schemas for all data models.
                  </li>
                  <li>
                    <strong className="text-white">index.html</strong>: Search engine SEO, Schema.org JSON-LD Person/Service profile.
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#101014] border border-[#262638] space-y-2">
                <h4 className="font-bold text-white font-display text-sm">
                  Replacing Media & Video Assets
                </h4>
                <p>
                  To attach real video showreels from YouTube, Vimeo, or MP4 CDNs, replace the embed URLs in <code className="text-[#D6B36A]">SHOWREELS</code> in <code className="text-slate-300">src/data/config.ts</code>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#101014] border border-[#262638] space-y-2">
                <h4 className="font-bold text-white font-display text-sm">
                  Deployment Options
                </h4>
                <p>
                  Zero server requirements! Fully static SPA compatible with:
                </p>
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-slate-300">
                  <span className="bg-[#1C1C28] px-2 py-1 rounded">Vercel</span>
                  <span className="bg-[#1C1C28] px-2 py-1 rounded">Cloudflare Pages</span>
                  <span className="bg-[#1C1C28] px-2 py-1 rounded">GitHub Pages</span>
                  <span className="bg-[#1C1C28] px-2 py-1 rounded">Netlify</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-[#252538] bg-[#101016] text-[11px] text-slate-500 text-center font-mono">
          Stack & Pixel · Client Prototype v1.0
        </div>

      </div>
    </div>
  );
};
