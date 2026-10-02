import React from 'react';
import { X, Play, Dumbbell, Flame, Volume2, ShieldCheck } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartTraining: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onStartTraining }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-[#121418] border border-white/20 rounded-sm overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#0b0c0e]">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 bg-[#e52538] rounded-full animate-pulse" />
            <h3 className="font-heading uppercase text-sm sm:text-base font-bold text-white tracking-wider">
              Fitness Matters Gym Floor Experience · Ambejogai
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-white/60 hover:text-white rounded-sm hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-video bg-[#08090b] flex flex-col items-center justify-center overflow-hidden p-6 text-center">
          {/* Animated Atmospheric Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(229,37,56,0.3)_0%,transparent_70%)]" />

          {/* Barbell & Chalk Dust Visual */}
          <div className="relative z-10 max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#e52538] text-white flex items-center justify-center mx-auto mb-4 shadow-glow">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>

            <div className="font-display uppercase text-3xl sm:text-4xl font-black text-white tracking-wide mb-2">
              DISCIPLINE IN MOTION
            </div>

            <p className="text-xs sm:text-sm text-[#9ba1b0] mb-6">
              "When you step inside Fitness Matters Ambejogai, excuses stay outside. 5,000 square feet of heavy steel, calibrated bumper plates, and a relentless training brotherhood."
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-white/80 font-heading uppercase tracking-wider">
              <span className="flex items-center gap-1.5 bg-[#181b22] px-3 py-1 border border-white/10 rounded-sm">
                <Dumbbell className="w-3.5 h-3.5 text-[#e52538]" />
                <span>Heavy Iron Deck</span>
              </span>
              <span className="flex items-center gap-1.5 bg-[#181b22] px-3 py-1 border border-white/10 rounded-sm">
                <Flame className="w-3.5 h-3.5 text-[#e52538]" />
                <span>Metabolic Turf</span>
              </span>
              <span className="flex items-center gap-1.5 bg-[#181b22] px-3 py-1 border border-white/10 rounded-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#e52538]" />
                <span>Certified Coaches</span>
              </span>
            </div>
          </div>

          <div className="absolute bottom-3 left-4 text-[10px] font-mono text-white/50">
            CINEMATIC PREVIEW · FITNESS MATTERS AMBEJOGAI
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#0b0c0e] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#9ba1b0]">
            Ready to experience the floor in person?
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="btn-ghost text-xs py-2 px-4"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onStartTraining();
              }}
              className="btn-primary text-xs py-2 px-5"
            >
              Start Training Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
