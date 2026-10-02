import React, { useState } from 'react';
import { Dumbbell, Flame, User, Heart, ArrowUpRight, CheckCircle, Sparkles } from 'lucide-react';
import { ProgramCardVisual } from './GymGraphics';
import { FACILITY_ZONES } from '../data/gymData';

interface FacilitiesProps {
  onSelectProgram: (programName: string) => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onSelectProgram }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'dumbbell':
        return <Dumbbell className="w-5 h-5 text-white" />;
      case 'flame':
        return <Flame className="w-5 h-5 text-white" />;
      case 'user':
        return <User className="w-5 h-5 text-white" />;
      case 'heart':
      default:
        return <Heart className="w-5 h-5 text-white" />;
    }
  };

  const getVisualType = (id: string): 'strength' | 'conditioning' | 'personal' => {
    if (id === 'strength') return 'strength';
    if (id === 'conditioning') return 'conditioning';
    return 'personal';
  };

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-[#121418] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header styled like the reference design */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <span className="eyebrow mb-3">TRAINING & FACILITIES</span>
            <h2 className="font-display uppercase text-4xl sm:text-6xl text-white font-black leading-none">
              STRONGER <br className="sm:hidden" />
              <span className="text-white">EVERYDAY.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#9ba1b0] max-w-xl mt-3 font-sans">
              Calibrated heavy iron, dedicated conditioning turf, and certified coaches pushing your limits every single rep.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#plans"
              className="btn-ghost text-xs sm:text-sm py-2.5 px-5 flex items-center gap-1.5"
            >
              <span>Explore All Plans</span>
              <ArrowUpRight className="w-4 h-4 text-[#e52538]" />
            </a>
          </div>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITY_ZONES.map((zone) => (
            <div
              key={zone.id}
              className="group bg-[#181b22] border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between hover:border-[#e52538] hover:shadow-[0_8px_30px_rgba(229,37,56,0.25)] transition-all duration-300"
            >
              <div>
                {/* Visual Top Preview */}
                <div className="relative overflow-hidden">
                  <ProgramCardVisual
                    type={getVisualType(zone.id)}
                    className="group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Red Icon Badge in Corner */}
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-sm bg-[#e52538] flex items-center justify-center shadow-glow-sm">
                    {getIcon(zone.iconName)}
                  </div>

                  {/* Tag */}
                  <div className="absolute top-3 right-3 bg-[#0b0c0e]/80 backdrop-blur-sm border border-white/10 px-2 py-0.5 rounded-sm text-[10px] font-heading uppercase tracking-wider text-white">
                    {zone.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-heading uppercase text-xl font-black text-white tracking-wide mb-2 group-hover:text-[#e52538] transition-colors">
                    {zone.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9ba1b0] font-sans leading-relaxed mb-4">
                    {zone.description}
                  </p>

                  {/* Specs checklist */}
                  <div className="space-y-1.5 border-t border-white/10 pt-4">
                    {zone.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-white/80">
                        <CheckCircle className="w-3.5 h-3.5 text-[#e52538] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-5 sm:p-6 pt-0">
                <button
                  onClick={() => onSelectProgram(zone.title)}
                  className="w-full py-2 bg-white/5 group-hover:bg-[#e52538] border border-white/10 group-hover:border-[#e52538] text-xs font-heading uppercase tracking-wider font-bold text-white group-hover:text-white transition-all rounded-sm flex items-center justify-center gap-1.5"
                >
                  <span>Enquire For {zone.tag}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Motivational Callout Banner matching the bottom of reference screenshot! */}
        <div className="mt-16 bg-[#0b0c0e] border border-white/10 rounded-sm p-8 sm:p-12 relative overflow-hidden">
          {/* Subtle neon rim glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e52538]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="eyebrow mb-2">AMBEJOGAI STANDARD</span>
            <h3 className="font-display uppercase text-3xl sm:text-5xl text-white font-black leading-tight mb-4">
              YOUR STRONGEST VERSION <br />
              <span className="text-gradient-brand brush-underline">STARTS HERE.</span>
            </h3>
            <p className="text-sm sm:text-base text-[#9ba1b0] mb-6">
              Stop postponing your health and discipline. Walk into Fitness Matters today, get your baseline assessment, and experience the energy of Ambejogai’s most dedicated lifters.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#plans"
                className="btn-primary text-sm shadow-glow-sm"
              >
                Choose Membership Plan
              </a>
              <a
                href="#calculator"
                className="btn-ghost text-sm flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#e52538]" />
                <span>Calculate My BMI & Target</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
