import React, { useState } from 'react';
import { X, Play, Dumbbell, Flame, Volume2, ShieldCheck, ArrowRight, Eye } from 'lucide-react';
import { GymImage } from './GymImage';
import { GYM_PHOTOS } from '../data/gymImages';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartTraining: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onStartTraining }) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  if (!isOpen) return null;

  const slides = [
    {
      title: 'Discipline Today · Strength Tomorrow',
      tag: 'MAIN TRAINING FLOOR',
      subtitle: '5,000 sq. ft. precision training floor with dumbbell bays, selectorized machines, and dark mood lighting.',
      photo: GYM_PHOTOS.facilityInterior,
    },
    {
      title: 'High-Velocity Battle Ropes Arena',
      tag: 'METABOLIC CONDITIONING',
      subtitle: 'Explosive core conditioning, dual 50-ft heavy battle ropes, and power cage training.',
      photo: GYM_PHOTOS.battleRopesAthlete,
    },
    {
      title: 'Olympic Heavy Iron & Power Racks',
      tag: 'FREE WEIGHTS & BARBELLS',
      subtitle: 'Competition-grade Olympic bars, calibrated bumper plates, and deadlift platforms.',
      photo: GYM_PHOTOS.heavyStrengthBarbell,
    },
    {
      title: 'Calibrated Dumbbell Deck (2.5KG – 50KG)',
      tag: 'DUMBBELL BAY',
      subtitle: 'Precision knurled urethane dumbbells on three tiered shock-absorbing rubber bays.',
      photo: GYM_PHOTOS.dumbbellBay,
    },
  ];

  const current = slides[activeSlide];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#121418] border border-white/20 rounded-sm overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#0b0c0e]">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 bg-[#e52538] rounded-full animate-pulse" />
            <h3 className="font-heading uppercase text-sm sm:text-base font-bold text-white tracking-wider">
              Fitness Matters Gym Floor Experience · Virtual Tour
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-white/60 hover:text-white rounded-sm hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Photo Visual Stage */}
        <div className="relative aspect-[16/9] bg-[#08090b] overflow-hidden">
          <GymImage
            src={current.photo.url}
            alt={current.photo.alt}
            className="w-full h-full object-cover"
          />

          {/* Top Tag */}
          <div className="absolute top-4 left-4 bg-[#0b0c0e]/85 backdrop-blur-sm border border-white/15 px-3 py-1 rounded-sm text-[11px] font-heading uppercase tracking-widest text-[#e52538] font-bold z-10">
            {current.tag}
          </div>

          {/* Caption Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-black/30 to-transparent flex flex-col justify-end p-6 z-10">
            <h4 className="font-display uppercase text-2xl sm:text-4xl font-black text-white tracking-wide mb-1">
              {current.title}
            </h4>
            <p className="text-xs sm:text-sm text-[#9ba1b0] max-w-2xl font-sans">
              {current.subtitle}
            </p>
          </div>
        </div>

        {/* Thumbnail Selector Bar */}
        <div className="p-3 bg-[#0f1115] border-t border-white/10 grid grid-cols-4 gap-2">
          {slides.map((slide, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveSlide(idx)}
              className={`p-2 rounded-sm text-left transition-all cursor-pointer border ${
                activeSlide === idx
                  ? 'bg-[#1a1d24] border-[#e52538] shadow-glow-sm'
                  : 'bg-[#14161c] border-white/5 hover:border-white/20 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="text-[10px] font-mono text-[#e52538] uppercase font-bold">
                VIEW 0{idx + 1}
              </div>
              <div className="text-xs font-heading uppercase tracking-wider font-bold text-white truncate">
                {slide.tag}
              </div>
            </button>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#0b0c0e] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#9ba1b0]">
            Experience the floor in person. Book your free baseline assessment session.
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="btn-ghost text-xs py-2 px-4 cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onStartTraining();
              }}
              className="btn-primary text-xs py-2 px-5 cursor-pointer shadow-glow-sm"
            >
              Start Training Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
