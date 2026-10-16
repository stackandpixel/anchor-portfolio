import React, { useState } from 'react';
import {
  MapPin,
  Users,
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Search,
  Quote,
} from 'lucide-react';
import { EventCategory, PortfolioItem } from '../types';
import { PORTFOLIO_EVENTS } from '../data/config';
import { VisualStageArt } from './VisualStageArt';

interface PortfolioSectionProps {
  onBookEvent: (eventName: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onBookEvent }) => {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories: EventCategory[] = [
    'All',
    'Weddings',
    'Corporate',
    'College Festivals',
    'Brand Activations',
    'Private Celebrations',
    'Live Shows',
  ];

  const filteredEvents = PORTFOLIO_EVENTS.filter((event) => {
    const matchesCategory =
      selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const activeLightboxItem: PortfolioItem | null =
    activeLightboxIndex !== null ? filteredEvents[activeLightboxIndex] || null : null;

  const handleNextLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredEvents.length);
    }
  };

  const handlePrevLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredEvents.length) % filteredEvents.length
      );
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#14141E] border-t border-b border-[#252535] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase font-mono tracking-widest text-[#D6B36A] font-semibold mb-3">
              03. Portfolio & Past Events
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
              Moments Behind the Mic
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Explore highlighted stage engagements across grand wedding sangeets, enterprise summits,
              campus festivals, and media reveals across India.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, venue, or tag..."
              className="w-full bg-[#1A1A28] border border-[#2D2D40] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#D6B36A]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters (Interactive Filter Buttons per design constitution) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#D6B36A] text-[#101014] shadow-md shadow-[#D6B36A]/10'
                  : 'bg-[#1A1A28] text-slate-300 hover:text-white hover:bg-[#242436] border border-[#2B2B3E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Demo Disclaimer Strip */}
        <div className="mb-8 p-3 rounded-xl bg-[#101014] border border-[#262638] flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B36A]" />
            <span>
              <strong>Fictional Demo Showcase:</strong> Event names and venues illustrate portfolio presentation formats for client demonstration.
            </span>
          </div>
          <span className="font-mono text-slate-500 hidden sm:inline-block">
            Showing {filteredEvents.length} of {PORTFOLIO_EVENTS.length} events
          </span>
        </div>

        {/* Portfolio Events Grid */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-20 bg-[#171724] rounded-2xl border border-[#262638]">
            <p className="text-base text-slate-300 font-medium">No events found matching your search.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#D6B36A] bg-[#222232] rounded-lg hover:bg-[#2A2A3C]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((item, index) => {
              const categoryVisualMap: Record<string, 'wedding' | 'corporate' | 'festival' | 'brand' | 'party' | 'concert'> = {
                Weddings: 'wedding',
                Corporate: 'corporate',
                'College Festivals': 'festival',
                'Brand Activations': 'brand',
                'Private Celebrations': 'party',
                'Live Shows': 'concert',
              };
              const visual = categoryVisualMap[item.category] || 'corporate';

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveLightboxIndex(index)}
                  className="group cursor-pointer rounded-xl bg-[#181826] border border-[#26263A] hover:border-[#D6B36A]/60 transition-all duration-200 overflow-hidden flex flex-col justify-between shadow-md hover:shadow-xl hover:shadow-[#D6B36A]/5"
                >
                  <div>
                    {/* Visual Stage Container */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <VisualStageArt type={visual} className="w-full h-full group-hover:scale-105 transition-transform duration-300" />
                      
                      {/* Category badge */}
                      <div className="absolute top-3 left-3 bg-[#101014]/90 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-slate-200 border border-white/10">
                        {item.category}
                      </div>

                      {/* Expand overlay button */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="p-2.5 rounded-full bg-[#101014]/80 text-[#D6B36A] backdrop-blur-sm border border-white/20">
                          <Maximize2 className="w-5 h-5" />
                        </span>
                      </div>
                    </div>

                    {/* Content details */}
                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                        <span className="flex items-center gap-1 text-[#D6B36A]">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{item.city}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-slate-500" />
                          <span>{item.audienceSize}</span>
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white font-display group-hover:text-[#D6B36A] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-400 line-clamp-1 font-mono">
                        {item.venue}
                      </p>

                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Tags footer */}
                  <div className="p-5 pt-0">
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#232334] text-[10px] text-slate-400 font-mono">
                      {item.tags.slice(0, 3).map((tag, tIdx) => (
                        <span key={tIdx} className="bg-[#12121A] px-2 py-0.5 rounded border border-[#272738]">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeLightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#171724] border border-[#2D2D42] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="p-4 sm:p-5 border-b border-[#252538] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-mono tracking-wider text-[#D6B36A] font-semibold">
                  {activeLightboxItem.category}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-xs text-slate-300 font-mono">{activeLightboxItem.city}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevLightbox}
                  className="p-1.5 rounded-lg bg-[#222232] text-slate-300 hover:text-white hover:bg-[#2A2A3C]"
                  aria-label="Previous event"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextLightbox}
                  className="p-1.5 rounded-lg bg-[#222232] text-slate-300 hover:text-white hover:bg-[#2A2A3C]"
                  aria-label="Next event"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveLightboxIndex(null)}
                  className="p-1.5 rounded-lg bg-[#222232] text-slate-300 hover:text-white hover:bg-[#2A2A3C] ml-2"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
              {/* Left stage art view */}
              <div className="md:col-span-5 h-64 sm:h-full rounded-xl overflow-hidden border border-white/5">
                <VisualStageArt
                  type={
                    activeLightboxItem.category === 'Weddings'
                      ? 'wedding'
                      : activeLightboxItem.category === 'Corporate'
                      ? 'corporate'
                      : activeLightboxItem.category === 'College Festivals'
                      ? 'festival'
                      : activeLightboxItem.category === 'Brand Activations'
                      ? 'brand'
                      : activeLightboxItem.category === 'Private Celebrations'
                      ? 'party'
                      : 'concert'
                  }
                  className="w-full h-full"
                />
              </div>

              {/* Right event details */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    {activeLightboxItem.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D6B36A]" />
                    <span>{activeLightboxItem.venue}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-300 py-2 border-y border-[#262638]">
                  <span>Audience: <strong>{activeLightboxItem.audienceSize}</strong></span>
                  <span>·</span>
                  <span>Category: <strong>{activeLightboxItem.category}</strong></span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold">
                    Event Overview
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeLightboxItem.description}
                  </p>
                </div>

                {/* Key Moment Quote */}
                <div className="p-4 rounded-xl bg-[#101014] border border-[#29293C] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#D6B36A]">
                    <Quote className="w-3.5 h-3.5" />
                    <span>Defining Stage Moment:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                    “{activeLightboxItem.momentHighlight}”
                  </p>
                </div>

                {/* CTA inside modal */}
                <div className="pt-2 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1 text-[11px] font-mono text-slate-400">
                    {activeLightboxItem.tags.map((t, idx) => (
                      <span key={idx} className="bg-[#202030] px-2 py-0.5 rounded">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setActiveLightboxIndex(null);
                      onBookEvent(activeLightboxItem.title);
                    }}
                    className="px-5 py-2.5 text-xs font-bold text-[#101014] bg-[#D6B36A] hover:bg-[#E5C77E] rounded-lg transition-colors"
                  >
                    Enquire Similar Event
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
