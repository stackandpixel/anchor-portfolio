import React from 'react';
import {
  Users,
  Sliders,
  Workflow,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/config';

export const WhyChooseSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'audience-connection': <Users className="w-5 h-5 text-[#D6B36A]" />,
    'adaptable-hosting': <Sliders className="w-5 h-5 text-[#FF7043]" />,
    'smooth-flow': <Workflow className="w-5 h-5 text-sky-400" />,
    'memorable-moments': <Sparkles className="w-5 h-5 text-amber-400" />,
    'professional-coordination': <ShieldCheck className="w-5 h-5 text-emerald-400" />,
  };

  return (
    <section id="why-choose" className="py-24 bg-[#14141E] border-t border-b border-[#252535] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase font-mono tracking-widest text-[#D6B36A] font-semibold mb-3">
            05. Core Strengths & Value
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
            Why Event Organisers Trust Aarav
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            The success of an event hinges on the bridge between the program and the people.
            Here is how Aarav brings stage command, sensitivity, and reliability to your production.
          </p>
        </div>

        {/* 5 Distinct Cards in an asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={item.id}
                className={`p-7 rounded-2xl bg-[#181826] border border-[#27273C] hover:border-[#D6B36A]/50 transition-all duration-300 flex flex-col justify-between space-y-5 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1 border-t-2 border-t-[#D6B36A]' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Card Icon and Index */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#101014] border border-[#2D2D42] flex items-center justify-center">
                      {iconMap[item.id] || <Sparkles className="w-5 h-5 text-[#D6B36A]" />}
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-semibold">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white font-display">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-[#D6B36A] mt-1">
                      {item.headline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Organizer Benefit Callout */}
                <div className="pt-4 border-t border-[#232334] flex items-start gap-2.5 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-200">Organizer Impact:</strong> {item.organizerBenefit}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
