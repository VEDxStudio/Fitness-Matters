import React from 'react';
import { Check, ShieldCheck, MapPin, Award, Eye } from 'lucide-react';
import { FacilityVisual } from './GymGraphics';
import { GymImage } from './GymImage';
import { GYM_PHOTOS } from '../data/gymImages';
import { GYM_DETAILS } from '../data/gymData';

interface AboutProps {
  onLearnMore?: () => void;
}

export const About: React.FC<AboutProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0b0c0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 1024x768 Facility Visual with subtle corner glow */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden aspect-[4/3] shadow-[0_0_35px_rgba(229,37,56,0.18)] border border-white/10 group">
              {/* High-Resolution Modern Gym Floor Photo matching user's reference */}
              <GymImage
                src={GYM_PHOTOS.facilityInterior.url}
                alt={GYM_PHOTOS.facilityInterior.alt}
                fallbackComponent={<FacilityVisual className="group-hover:scale-105 transition-transform duration-700 ease-out" />}
                className="group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Accent Corner Badges */}
              <div className="absolute top-3 left-3 bg-[#0b0c0e]/90 backdrop-blur-sm border border-[#e52538]/50 px-3 py-1.5 rounded-sm flex items-center gap-2 z-10">
                <ShieldCheck className="w-4 h-4 text-[#e52538]" />
                <span className="font-heading text-xs uppercase tracking-wider text-white font-bold">
                  Verified Training Floor
                </span>
              </div>

              {/* Wall Motto Watermark Badge directly referencing the user's uploaded photo */}
              <div className="absolute top-3 right-3 bg-[#0b0c0e]/85 backdrop-blur-sm border border-white/15 px-2.5 py-1 rounded-sm text-[10px] font-heading uppercase tracking-widest text-[#e52538] font-bold z-10">
                DISCIPLINE TODAY · STRENGTH TOMORROW
              </div>

              <div className="absolute bottom-3 right-3 bg-[#0b0c0e]/90 backdrop-blur-sm border border-white/15 px-3 py-1 rounded-sm flex items-center gap-1.5 text-xs text-[#9ba1b0] z-10">
                <MapPin className="w-3.5 h-3.5 text-[#e52538]" />
                <span>5,000 Sq. Ft. Facility</span>
              </div>
            </div>

            {/* Floating Experience Box */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-[#121418] border-2 border-[#e52538] p-4 rounded-sm shadow-2xl items-center gap-3 z-20">
              <div className="w-12 h-12 bg-[#e52538] flex items-center justify-center rounded-sm text-white">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="font-display text-2xl font-black text-white leading-none">
                  8+ YEARS
                </div>
                <div className="text-[11px] font-heading uppercase tracking-wider text-[#9ba1b0] font-semibold">
                  Forging Strength at Our Location
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="mb-3">
              <span className="eyebrow">ABOUT US</span>
            </div>

            {/* Heading */}
            <h2 className="font-display uppercase text-4xl sm:text-5xl lg:text-6xl text-white font-black leading-none mb-6">
              WHERE LOCAL STRENGTH <br />
              <span className="text-gradient-brand">IS FORGED.</span>
            </h2>

            {/* 2 Concise Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#9ba1b0] leading-relaxed font-sans mb-8">
              <p>
                Founded on the unshakeable belief that physical discipline builds mental fortitude, 
                <strong className="text-white font-semibold"> {GYM_DETAILS.name}</strong> has grown from an authentic 
                local strength club into a premier, respected training environment. We reject quick-fix fads in favor 
                of calibrated progressive overload, proper biomechanics, and consistent daily sweat.
              </p>
              <p>
                Whether you are stepping into a weight room for the very first time, preparing for athletic competitions, 
                or rebuilding core vitality, our coaches guide every rep with zero intimidation. We pride ourselves on a clean, 
                welcoming sanctuary where men and women train side-by-side with mutual respect.
              </p>
            </div>

            {/* 3-item checklist with primary check icons */}
            <div className="space-y-3.5 mb-8">
              {[
                {
                  title: 'Certified, friendly trainers',
                  desc: 'K11 & ACE certified coaches active on the gym floor ensuring safe form and steady progression.',
                },
                {
                  title: 'Clean, well-maintained equipment',
                  desc: 'Imported heavy power racks, calibrated rubber bumper plates, and sterilized daily.',
                },
                {
                  title: 'Dedicated programs for men and women',
                  desc: 'Morning power hours, dedicated midday ladies batch with female trainers, and high-energy evening sessions.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-sm bg-[#e52538] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_8px_rgba(229,37,56,0.6)]">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="font-heading uppercase text-sm sm:text-base font-bold text-white tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9ba1b0] font-sans mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="#facilities"
                className="btn-primary text-sm shadow-glow-sm"
              >
                Explore Training Zones
              </a>
              <a
                href="#contact"
                className="btn-ghost text-sm"
              >
                Visit Gym Floor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
