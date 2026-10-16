import React from 'react';
import { ArrowRight, Check, Users, Clock, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/config';
import { VisualStageArt } from './VisualStageArt';

interface ServicesSectionProps {
  onEnquireService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onEnquireService }) => {
  return (
    <section id="services" className="py-24 bg-[#101014] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase font-mono tracking-widest text-[#D6B36A] font-semibold mb-3">
              02. Event Hosting Services
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
              Tailored Stage Energy for Every Occasion
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              From majestic Indian wedding traditions to high-stakes corporate galas and roaring college
              arenas, explore curated hosting packages designed for maximum engagement.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FF7043]" />
            <span>CUSTOM SCRIPTS · BILINGUAL FLUENCY · ALL-INDIA AVAILABILITY</span>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const visualTypes: Array<'wedding' | 'corporate' | 'festival' | 'brand' | 'party' | 'concert'> = [
              'wedding',
              'corporate',
              'festival',
              'brand',
              'party',
              'concert',
            ];
            const visualType = visualTypes[index % visualTypes.length];

            return (
              <div
                key={service.id}
                className="group rounded-2xl bg-[#161622] border border-[#262638] hover:border-[#D6B36A]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#D6B36A]/5"
              >
                <div>
                  {/* Visual Header */}
                  <div className="h-44 w-full relative overflow-hidden">
                    <VisualStageArt type={visualType} className="w-full h-full" />
                    <div className="absolute top-3 right-3 bg-[#101014]/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono font-medium text-slate-300 border border-white/10">
                      {service.categoryKey}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white font-display group-hover:text-[#D6B36A] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#D6B36A] font-medium mt-1">
                        {service.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-2 pt-2 border-t border-[#222230]">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                        Core Inclusions:
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {service.bulletPoints.slice(0, 4).map((pt, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#D6B36A] shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Meta Specs */}
                    <div className="pt-3 border-t border-[#222230] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        <span>{service.typicalDuration}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-slate-500" />
                        <span>{service.audienceRange}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onEnquireService(service.title)}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-[#1D1D2B] hover:bg-[#D6B36A] hover:text-[#101014] border border-[#2D2D42] hover:border-transparent rounded-lg transition-all duration-150 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Enquire About This Event</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
