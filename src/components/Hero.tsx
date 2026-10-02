import React from 'react';
import { ArrowUpRight, Play, CheckCircle2, Dumbbell, Flame, Crown, Zap } from 'lucide-react';
import { HeroGymVisual } from './GymGraphics';
import { GYM_DETAILS } from '../data/gymData';

interface HeroProps {
  onStartTraining: () => void;
  onOpenVideo: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartTraining,
  onOpenVideo,
}) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 lg:py-0 overflow-hidden bg-[#0b0c0e]">
      {/* Background Graphic Asset with Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <HeroGymVisual />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">
          {/* Main Hero Copy - Left Column (8 cols desktop) */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="mb-4">
              <span className="eyebrow text-xs sm:text-sm font-semibold tracking-[0.2em]">
                PREMIER STRENGTH DESTINATION · LOCATION
              </span>
            </div>

            {/* Main Headline styled like reference image */}
            <h1 className="font-display uppercase text-5xl sm:text-7xl xl:text-8xl tracking-tight text-white font-black leading-[0.92] mb-5">
              BUILT <br />
              <span className="text-gradient-brand brush-underline">DIFFERENT.</span>
            </h1>

            {/* Sub-headline slogan matching reference */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-2 text-lg sm:text-xl font-heading tracking-wide uppercase font-bold text-[#e52538]">
              <span>DISCIPLINE TODAY.</span>
              <span className="hidden sm:inline text-white/40">·</span>
              <span className="text-white">DOMINATE TOMORROW.</span>
            </div>

            {/* Supporting description */}
            <p className="max-w-2xl text-base sm:text-lg text-[#9ba1b0] leading-relaxed mb-8 font-sans">
              Train harder. Get stronger. Shatter your limits at <strong className="text-white font-semibold">{GYM_DETAILS.name}</strong>. 
              A premier 5,000 sq. ft. training ground featuring calibrated heavy iron, 
              certified coaches, high-octane conditioning turf, and an authentic brotherhood of discipline.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onStartTraining}
                className="btn-primary text-base sm:text-lg py-3.5 px-7 shadow-glow flex items-center gap-2 group"
              >
                <span>START TRAINING</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenVideo}
                className="btn-ghost text-base sm:text-lg py-3.5 px-6 flex items-center gap-2.5 group"
              >
                <div className="w-7 h-7 rounded-sm bg-[#e52538]/20 text-[#e52538] flex items-center justify-center group-hover:bg-[#e52538] group-hover:text-white transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>WATCH GYM TOUR</span>
              </button>
            </div>

            {/* Social Proof Member Avatar Stack */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex -space-x-2.5">
                {[
                  { name: 'Omkar', role: 'Powerlifter', bg: 'bg-zinc-700' },
                  { name: 'Snehal', role: 'Athlete', bg: 'bg-red-800' },
                  { name: 'Vaibhav', role: 'Physique', bg: 'bg-zinc-600' },
                  { name: 'Pooja', role: 'CrossFit', bg: 'bg-red-950' },
                ].map((user, idx) => (
                  <div
                    key={idx}
                    className={`w-9 h-9 rounded-sm ${user.bg} border-2 border-[#0b0c0e] flex items-center justify-center text-xs font-bold text-white shadow-md`}
                    title={`${user.name} (${user.role})`}
                  >
                    {user.name.charAt(0)}
                  </div>
                ))}
              </div>
              <div className="text-xs sm:text-sm text-[#9ba1b0]">
                <strong className="text-white font-semibold">JOIN 500+ ATHLETES</strong>
                <span className="block text-xs text-[#9ba1b0]/80">Transforming daily at our location</span>
              </div>
            </div>

            {/* Bottom trust bar - 3 bullet markers */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-white/80 font-heading tracking-wider uppercase">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e52538]" />
                <span>Calibrated Equipment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e52538]" />
                <span>Certified Coaches</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#e52538]" />
                <span>No Lock-in Contracts</span>
              </div>
            </div>
          </div>

          {/* Vertical Stats Column (Right side, matching the reference image layout!) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="bg-[#121418]/90 backdrop-blur-md border border-white/10 rounded-sm p-6 sm:p-7 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#e52538] rounded-full animate-pulse" />
                  <span className="text-xs uppercase tracking-widest font-heading font-bold text-white">
                    GYM HEADQUARTERS · LOCATION
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#e52538]">EST. 2018</span>
              </div>

              {/* 4 reference metrics stacked */}
              <div className="space-y-6">
                {/* Metric 1 */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-sm bg-[#1a1d24] border border-[#e52538]/30 flex items-center justify-center text-[#e52538] group-hover:border-[#e52538] transition-colors shrink-0">
                    <Dumbbell className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display text-3xl font-black text-white tracking-wide leading-none">
                      500+
                    </div>
                    <div className="text-xs uppercase tracking-wider text-[#9ba1b0] font-heading font-semibold mt-1">
                      Active Members
                    </div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-sm bg-[#1a1d24] border border-[#e52538]/30 flex items-center justify-center text-[#e52538] group-hover:border-[#e52538] transition-colors shrink-0">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display text-3xl font-black text-white tracking-wide leading-none">
                      15+
                    </div>
                    <div className="text-xs uppercase tracking-wider text-[#9ba1b0] font-heading font-semibold mt-1">
                      Expert Coaches
                    </div>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-sm bg-[#1a1d24] border border-[#e52538]/30 flex items-center justify-center text-[#e52538] group-hover:border-[#e52538] transition-colors shrink-0">
                    <Crown className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display text-3xl font-black text-white tracking-wide leading-none">
                      1,200+
                    </div>
                    <div className="text-xs uppercase tracking-wider text-[#9ba1b0] font-heading font-semibold mt-1">
                      Real Transformations
                    </div>
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-sm bg-[#1a1d24] border border-[#e52538]/30 flex items-center justify-center text-[#e52538] group-hover:border-[#e52538] transition-colors shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display text-3xl font-black text-white tracking-wide leading-none">
                      100%
                    </div>
                    <div className="text-xs uppercase tracking-wider text-[#9ba1b0] font-heading font-semibold mt-1">
                      Dedication & Results
                    </div>
                  </div>
                </div>
              </div>

              {/* Action link */}
              <div className="mt-7 pt-5 border-t border-white/10">
                <button
                  onClick={onStartTraining}
                  className="w-full py-2.5 text-center bg-white/5 hover:bg-[#e52538]/20 border border-white/10 hover:border-[#e52538] text-xs font-heading uppercase tracking-wider font-bold text-white transition-colors rounded-sm flex items-center justify-center gap-1.5"
                >
                  <span>Explore Membership Passes</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#e52538]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
