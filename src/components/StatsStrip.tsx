import React from 'react';
import { GYM_DETAILS } from '../data/gymData';

export const StatsStrip: React.FC = () => {
  const stats = [
    {
      value: GYM_DETAILS.metrics.members,
      label: 'Active Members',
      sublabel: 'Fitness Community · Location',
    },
    {
      value: GYM_DETAILS.metrics.coaches,
      label: 'Expert Trainers',
      sublabel: 'K11 & ACE Certified Specialists',
    },
    {
      value: '5:30 AM–10 PM',
      label: 'Open Daily',
      sublabel: 'Dedicated Ladies & Men Batches',
    },
    {
      value: GYM_DETAILS.metrics.floorSize,
      label: 'Floor Space',
      sublabel: 'Heavy Iron, Racks & Cardio Deck',
    },
  ];

  return (
    <section className="bg-[#121418] border-y border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`py-8 px-4 sm:px-6 flex flex-col justify-center ${
                index % 2 === 0 ? 'pr-4 sm:pr-8' : 'pl-4 sm:pl-8'
              } lg:px-8`}
            >
              <div className="font-display text-4xl sm:text-5xl xl:text-6xl font-black text-gradient-brand tracking-tight tabular-nums">
                {stat.value}
              </div>
              <div className="font-heading uppercase text-sm sm:text-base font-bold text-white tracking-wider mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-[#9ba1b0] mt-0.5 font-sans">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
