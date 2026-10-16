import React, { useState } from 'react';
import { ChevronDown, MessageSquare, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/config';
import { AnchorProfile } from '../types';

interface FaqSectionProps {
  profile: AnchorProfile;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ profile }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Booking & Fees', 'Event Types', 'Logistics & Tech', 'Scripting'];

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS.filter(
    (faq) => activeCategory === 'All' || faq.category === activeCategory
  );

  return (
    <section id="faqs" className="py-24 bg-[#101014] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase font-mono tracking-widest text-[#D6B36A] font-semibold mb-3">
            10. Clarity & Event Planning
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Everything you need to know about booking, outstation logistics, script personalization,
            and stage coordination.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-6 scrollbar-none mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#D6B36A] text-[#101014]'
                  : 'bg-[#181826] text-slate-300 hover:text-white border border-[#27273C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#181826] border-[#D6B36A]/50'
                    : 'bg-[#14141E] border-[#252538] hover:border-[#333348]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-[#202030] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#D6B36A]' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#232334]">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-white/5">
                      <span>Category: {faq.category}</span>
                      <span>Configurable Policy</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Unanswered question box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#161622] border border-[#27273C] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#101014] text-[#D6B36A] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-display">
                Have a specific question about your venue or dates?
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Drop a quick note directly on WhatsApp for an immediate answer.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(
              `Hi ${profile.name}! I have a question regarding event hosting.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-[#1D3B2B] hover:bg-[#234A36] text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center gap-2 whitespace-nowrap transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Ask via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
