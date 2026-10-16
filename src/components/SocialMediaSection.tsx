import React from 'react';
import {
  Instagram,
  Heart,
  MessageCircle,
  ExternalLink,
  Youtube,
  Linkedin,
  MapPin,
} from 'lucide-react';
import { AnchorProfile } from '../types';
import { SOCIAL_POSTS } from '../data/config';
import { VisualStageArt } from './VisualStageArt';

interface SocialMediaSectionProps {
  profile: AnchorProfile;
}

export const SocialMediaSection: React.FC<SocialMediaSectionProps> = ({ profile }) => {
  return (
    <section className="py-24 bg-[#14141E] border-t border-b border-[#252535] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase font-mono tracking-widest text-[#D6B36A] font-semibold mb-3">
              09. Social Feed & BTS Highlights
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
              Life Behind the Mic.
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Stage setups, unscripted moments, green-room soundchecks, and the energy that keeps the room buzzing.
            </p>
          </div>

          {/* Social CTA Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={profile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-pink-500/20 transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow {profile.instagramHandle}</span>
            </a>

            <a
              href={profile.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#1C1C2A] hover:bg-[#252538] text-slate-300 hover:text-red-400 border border-[#2B2B3E] transition-colors"
              title="YouTube Showreels"
            >
              <Youtube className="w-4 h-4" />
            </a>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#1C1C2A] hover:bg-[#252538] text-slate-300 hover:text-sky-400 border border-[#2B2B3E] transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 6 Instagram Style Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOCIAL_POSTS.map((post, index) => {
            const visuals: Array<'wedding' | 'corporate' | 'festival' | 'brand' | 'party' | 'concert'> = [
              'wedding',
              'corporate',
              'festival',
              'brand',
              'wedding',
              'corporate',
            ];
            const visual = visuals[index % visuals.length];

            return (
              <div
                key={post.id}
                className="group rounded-2xl bg-[#181826] border border-[#27273C] hover:border-[#D6B36A]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Post visual header with location bar */}
                  <div className="p-3 border-b border-[#232334] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#D6B36A] text-[#101014] font-bold text-[11px] flex items-center justify-center font-display">
                        AM
                      </div>
                      <div>
                        <p className="font-semibold text-white leading-none">
                          {profile.instagramHandle.replace('@', '')}
                        </p>
                        <p className="text-[10px] text-slate-400 flex items-center gap-0.5 mt-0.5 font-mono">
                          <MapPin className="w-2.5 h-2.5 text-[#D6B36A]" />
                          <span>{post.city}</span>
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">{post.timestamp}</span>
                  </div>

                  {/* Stage Image Visual */}
                  <div className="h-52 w-full relative overflow-hidden">
                    <VisualStageArt type={visual} className="w-full h-full group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute bottom-2 left-2 bg-[#101014]/85 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 border border-white/10">
                      {post.eventType}
                    </div>
                  </div>

                  {/* Post Actions & Caption */}
                  <div className="p-4 space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 text-pink-400 font-mono font-medium">
                          <Heart className="w-4 h-4 fill-current" />
                          <span>{post.likes}</span>
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-400 font-mono font-medium">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#D6B36A]">
                        {post.stageNote}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      <strong className="text-white mr-1.5">{profile.instagramHandle.replace('@', '')}</strong>
                      {post.caption}
                    </p>
                  </div>
                </div>

                {/* External link CTA */}
                <div className="p-4 pt-0">
                  <a
                    href={profile.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-lg bg-[#1D1D2C] hover:bg-[#252538] text-[11px] font-medium text-slate-300 hover:text-white flex items-center justify-center gap-1.5 border border-[#2B2B3E] transition-colors"
                  >
                    <span>View Post on Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Follow CTA Strip */}
        <div className="mt-12 text-center">
          <a
            href={profile.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#D6B36A] hover:text-[#E5C77E] transition-colors"
          >
            <span>Follow the Journey on Instagram (@aarav.onmic)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
