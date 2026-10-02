import React from 'react';
import { MessageSquare } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    const text = encodeURIComponent(
      `Hello Fitness Matters Gym! I'm interested in gym membership & batch timings. Please share details.`
    );
    window.open(`https://wa.me/${GYM_DETAILS.contacts.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleClick}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_4px_20px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400"
        aria-label="Direct WhatsApp Inquiry"
      >
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />

        {/* Tooltip on hover */}
        <span className="hidden sm:block absolute right-16 bg-[#121418] border border-emerald-500/40 text-white text-xs font-heading uppercase tracking-wider py-1.5 px-3 rounded-sm whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp Desk
        </span>
      </button>
    </div>
  );
};
