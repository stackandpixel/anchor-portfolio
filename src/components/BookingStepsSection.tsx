import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { BOOKING_STEPS } from '../data/config';

interface BookingStepsSectionProps {
  onCheckAvailability: () => void;
}

export const BookingStepsSection: React.FC<BookingStepsSectionProps> = ({
  onCheckAvailability,
}) => {
  return (
    <section className="py-24 bg-[#101014] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase font-mono tracking-widest text-[#D6B36A] font-semibold mb-3">
              06. Transparent Booking Roadmap
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
              How Booking Works
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              A frictionless four-step collaboration designed to respect your schedule, clarify all
              inclusions upfront, and guarantee stage readiness well before showtime.
            </p>
          </div>

          <button
            onClick={onCheckAvailability}
            className="px-6 py-3 text-xs sm:text-sm font-bold text-[#101014] bg-[#D6B36A] hover:bg-[#E5C77E] rounded-xl transition-all duration-150 flex items-center gap-2 shrink-0 self-start md:self-auto shadow-md shadow-[#D6B36A]/10"
          >
            <span>Check Availability Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {BOOKING_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-[#161622] border border-[#262638] flex flex-col justify-between space-y-4 hover:border-[#D6B36A]/40 transition-colors"
            >
              <div className="space-y-3">
                {/* Step indicator */}
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-full bg-[#1F1F2E] border border-[#2E2E42] text-[#D6B36A] font-display font-extrabold text-base flex items-center justify-center">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{step.turnaroundTime}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-display">
                  {step.title}
                </h3>
                
                <p className="text-xs font-medium text-[#D6B36A]">
                  {step.subtitle}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#20202E] text-[11px] font-mono text-slate-500">
                Phase 0{step.step} of 04
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
