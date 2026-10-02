import React, { useState } from 'react';
import { Award, CheckCircle, ArrowUpRight, ShieldCheck, Dumbbell } from 'lucide-react';
import { CoachingVisual } from './GymGraphics';
import { GymImage } from './GymImage';
import { GYM_PHOTOS } from '../data/gymImages';
import { COACHES_DATA } from '../data/gymData';

interface TeamProps {
  onBookSession: (coachName: string) => void;
}

export const Team: React.FC<TeamProps> = ({ onBookSession }) => {
  const [selectedCoachIndex, setSelectedCoachIndex] = useState(0);
  const activeCoach = COACHES_DATA[selectedCoachIndex];

  const getCoachPhoto = (id: string) => {
    if (id === 'coach-1') return GYM_PHOTOS.coaches.rohit;
    if (id === 'coach-2') return GYM_PHOTOS.coaches.snehal;
    return GYM_PHOTOS.coaches.ajay;
  };

  return (
    <section id="team" className="py-20 lg:py-28 bg-[#121418] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-column layout requested by prompt */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="eyebrow mb-3">COACHING TEAM</span>
            <h2 className="font-display uppercase text-4xl sm:text-6xl text-white font-black leading-none mb-6">
              COACHES WHO PUSH <br />
              <span className="text-gradient-brand">YOU FURTHER.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#9ba1b0] leading-relaxed mb-6 font-sans">
              Our training cadre doesn't sit behind a counter looking at phones. Every coach at Fitness Matters 
              is internationally certified, actively supervises floor biomechanics, and is obsessed with helping 
              you lift heavier, move pain-free, and transform your body with measurable scientific progress.
            </p>

            {/* Quick Experience Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              <div className="bg-[#181b22] border border-white/10 p-3 rounded-sm">
                <div className="font-display text-2xl font-black text-white leading-none">
                  8+ YEARS
                </div>
                <div className="text-[10px] font-heading uppercase tracking-wider text-[#9ba1b0] font-semibold mt-1">
                  Floor Experience
                </div>
              </div>

              <div className="bg-[#181b22] border border-white/10 p-3 rounded-sm">
                <div className="font-display text-2xl font-black text-[#e52538] leading-none">
                  100%
                </div>
                <div className="text-[10px] font-heading uppercase tracking-wider text-[#9ba1b0] font-semibold mt-1">
                  Certified Specialists
                </div>
              </div>

              <div className="bg-[#181b22] border border-white/10 p-3 rounded-sm col-span-2 sm:col-span-1">
                <div className="font-display text-2xl font-black text-white leading-none">
                  1,200+
                </div>
                <div className="text-[10px] font-heading uppercase tracking-wider text-[#9ba1b0] font-semibold mt-1">
                  Dedicated Lifters
                </div>
              </div>
            </div>

            {/* Action Button: Book Free Session */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => onBookSession(activeCoach.name)}
                className="btn-primary text-sm shadow-glow-sm flex items-center gap-2 cursor-pointer"
              >
                <span>Book a Free Session with {activeCoach.name.split(' ')[0]}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 1024x768 Team / Specialist Visual with real photography */}
          <div className="lg:col-span-6">
            <div className="relative rounded-sm overflow-hidden aspect-[4/3] shadow-[0_0_35px_rgba(229,37,56,0.18)] border border-white/10 group">
              <GymImage
                src={GYM_PHOTOS.personalTrainingCoach.url}
                alt={GYM_PHOTOS.personalTrainingCoach.alt}
                fallbackComponent={<CoachingVisual className="group-hover:scale-105 transition-transform duration-700 ease-out" />}
                className="group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute top-3 left-3 bg-[#0b0c0e]/90 backdrop-blur-sm border border-[#e52538]/50 px-3 py-1.5 rounded-sm flex items-center gap-2 z-10">
                <ShieldCheck className="w-4 h-4 text-[#e52538]" />
                <span className="font-heading text-xs uppercase tracking-wider text-white font-bold">
                  Active Floor Mentorship
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 bg-[#0b0c0e]/85 backdrop-blur-sm border border-white/10 p-3 rounded-sm flex items-center justify-between text-xs z-10">
                <div>
                  <span className="font-heading font-bold uppercase text-white tracking-wide block">
                    1-on-1 Form & Biomechanics Review
                  </span>
                  <span className="text-[11px] text-[#9ba1b0]">
                    Personalized progressive overload calibration
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#e52538] uppercase">
                  ACTIVE FLOOR
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Individual Coach Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {COACHES_DATA.map((coach, idx) => {
            const isSelected = selectedCoachIndex === idx;
            const photoUrl = getCoachPhoto(coach.id);

            return (
              <div
                key={coach.id}
                onClick={() => setSelectedCoachIndex(idx)}
                className={`bg-[#181b22] border rounded-sm p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#e52538] shadow-[0_0_25px_rgba(229,37,56,0.25)] bg-[#1c202a]'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Coach Photo Avatar */}
                    <div className="relative w-14 h-14 rounded-sm overflow-hidden border-2 border-[#e52538] bg-[#121418] shadow-glow-sm shrink-0">
                      <GymImage
                        src={photoUrl}
                        alt={coach.name}
                        fallbackComponent={
                          <div className="w-full h-full flex items-center justify-center font-display text-xl font-black text-white bg-[#121418]">
                            {coach.name.split(' ').map((n) => n[0]).join('')}
                          </div>
                        }
                      />
                    </div>

                    <span className="text-[10px] font-mono uppercase bg-white/5 border border-white/10 px-2 py-0.5 rounded-sm text-[#e52538]">
                      {coach.experience} Exp
                    </span>
                  </div>

                  <h3 className="font-heading uppercase text-xl font-bold text-white tracking-wide">
                    {coach.name}
                  </h3>
                  <div className="text-xs font-heading uppercase tracking-wider text-[#e52538] font-semibold mb-3">
                    {coach.role}
                  </div>

                  <p className="text-xs text-[#9ba1b0] leading-relaxed mb-4">
                    {coach.bio}
                  </p>

                  {/* Certifications list */}
                  <div className="space-y-1 mb-4 border-t border-white/10 pt-3">
                    {coach.certifications.map((cert, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-1.5 text-[11px] text-white/80">
                        <CheckCircle className="w-3 h-3 text-[#e52538] shrink-0" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-heading uppercase tracking-wider text-[#9ba1b0]">
                    {coach.specialty}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onBookSession(coach.name);
                    }}
                    className="text-xs font-heading uppercase tracking-wider font-bold text-[#e52538] hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <span>Consult</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
