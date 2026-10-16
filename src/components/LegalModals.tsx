import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { AnchorProfile } from '../types';

interface LegalModalsProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
  profile: AnchorProfile;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ type, onClose, profile }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#161622] border border-[#2D2D42] rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#252538] pb-4">
          <div className="flex items-center gap-2">
            {type === 'privacy' ? (
              <Shield className="w-5 h-5 text-[#D6B36A]" />
            ) : (
              <FileText className="w-5 h-5 text-[#D6B36A]" />
            )}
            <h3 className="text-xl font-bold text-white font-display">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Engagement'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#202030] text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed pr-2">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Last Updated: October 2026</strong>
              </p>
              <p>
                This Privacy Policy outlines how {profile.name} and the official booking management
                desk collect and handle event enquiry details submitted through this website.
              </p>
              <h4 className="text-white font-bold font-display text-sm pt-2">
                1. Information We Collect
              </h4>
              <p>
                When you submit an event enquiry via our web form or WhatsApp link, we collect contact
                information (name, email, phone number) and event details (date, city, venue, and audience
                scale) solely for assessing calendar availability and preparing commercial proposals.
              </p>
              <h4 className="text-white font-bold font-display text-sm pt-2">
                2. Use of Information
              </h4>
              <p>
                Your contact details are strictly used for scheduling discovery calls, dispatching
                quotes, and coordinating event production. We never sell, rent, or distribute client
                details to third-party marketing brokers.
              </p>
              <h4 className="text-white font-bold font-display text-sm pt-2">
                3. Demo Environment Notice
              </h4>
              <p>
                This website is presented as a demonstration template designed by{' '}
                <strong className="text-[#D6B36A]">Stack & Pixel</strong>. Form interactions are
                formatted directly on your client device.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Last Updated: October 2026</strong>
              </p>
              <h4 className="text-white font-bold font-display text-sm">
                1. Booking Confirmation & Holds
              </h4>
              <p>
                Dates are held tentatively following initial enquiry discussion. Official reservation of
                calendar dates requires written commercial agreement and deposit token receipt.
              </p>
              <h4 className="text-white font-bold font-display text-sm pt-2">
                2. Travel & Outstation Logistics
              </h4>
              <p>
                For assignments outside Pune and Mumbai, reasonable travel logistics (economy/business
                flight, airport transfers, and 4/5-star accommodation aligned with the wedding or
                conference hotel) are organized or reimbursed by the event host.
              </p>
              <h4 className="text-white font-bold font-display text-sm pt-2">
                3. Technical & AV Readiness
              </h4>
              <p>
                To deliver optimal stage performance, event organisers provide professional-grade
                wireless handheld microphones (Sennheiser/Shure standard) with fresh batteries and
                soundcheck access at least 60 minutes prior to audience entry.
              </p>
              <h4 className="text-white font-bold font-display text-sm pt-2">
                4. Cancellation & Rescheduling
              </h4>
              <p>
                Should unforeseen circumstances require date rescheduling, deposits may be transferred
                to alternative open dates within 6 months, subject to calendar availability.
              </p>
            </>
          )}
        </div>

        <div className="pt-2 border-t border-[#252538] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#D6B36A] text-[#101014] font-bold text-xs hover:bg-[#E5C77E]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
