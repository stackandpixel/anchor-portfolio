import React, { useState } from 'react';
import { Star, Quote, Sparkles, Building2 } from 'lucide-react';
import { TESTIMONIALS, COLLABORATOR_BRANDS } from '../data/config';

export const TestimonialsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Weddings', 'Corporate', 'College Festivals', 'Brand Activations'];

  const filtered = TESTIMONIALS.filter(
    (t) => activeCategory === 'All' || t.category === activeCategory
  );

  return (
    <section className="py-24 bg-[#14141E] border-t border-b border-[#252535] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase font-mono tracking-widest text-[#D6B36A] font-semibold mb-3">
              07. Event Partner Feedback
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
              Words From Past Stages
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Read feedback from wedding planners, corporate HR leads, cultural committee heads, and
              brand marketing directors.
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#D6B36A] text-[#101014]'
                    : 'bg-[#1C1C2A] text-slate-300 hover:text-white border border-[#2B2B3E]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mb-8 p-3 rounded-xl bg-[#101014] border border-[#252538] flex items-center gap-2 text-xs text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-[#D6B36A] shrink-0" />
          <span>
            <strong>Demo Endorsements:</strong> Testimonial cards are demo placeholders structured to show formatting. Real client reviews can be plugged directly into the configuration.
          </span>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#181826] border border-[#27273C] hover:border-[#D6B36A]/40 transition-all duration-200 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Rating stars & Category */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D6B36A] text-[#D6B36A]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {item.category}
                  </span>
                </div>

                <div className="relative">
                  <Quote className="w-6 h-6 text-[#D6B36A]/20 absolute -top-2 -left-2 -z-0" />
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic relative z-10">
                    “{item.quote}”
                  </p>
                </div>
              </div>

              {/* Author Attribution */}
              <div className="pt-4 border-t border-[#232334] space-y-1">
                <p className="text-sm font-bold text-white font-display">
                  {item.clientName}
                </p>
                <p className="text-xs text-[#D6B36A] font-medium">
                  {item.designation}
                </p>
                <p className="text-[11px] text-slate-400 font-mono">
                  {item.companyOrEvent} · {item.city}
                </p>
                <p className="text-[10px] text-slate-500 font-mono pt-1">
                  {item.verifiedLabel}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Collaborator / Staged Venues & Brands Logo Strip */}
        <div className="mt-16 pt-12 border-t border-[#222230] space-y-6">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400">
            <Building2 className="w-3.5 h-3.5 text-[#D6B36A]" />
            <span>Notable Venues, Campuses & Brand Collaborations (Demo List)</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {COLLABORATOR_BRANDS.map((brand, bIdx) => (
              <div
                key={bIdx}
                className="px-4 py-2 rounded-lg bg-[#111118] border border-[#242436] text-xs font-semibold text-slate-300 font-display hover:text-[#D6B36A] transition-colors"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
