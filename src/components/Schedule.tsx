import React from 'react';
import { Clock, Calendar, Check, Users } from 'lucide-react';
import { SCHEDULE_DATA } from '../data/gymData';

export const Schedule: React.FC = () => {
  return (
    <section className="py-20 bg-[#121418] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="eyebrow mb-3">TRAINING SCHEDULE</span>
            <h2 className="font-display uppercase text-4xl sm:text-6xl text-white font-black leading-none">
              BATCH <span className="text-gradient-brand">TIMINGS</span>
            </h2>
            <p className="text-sm sm:text-base text-[#9ba1b0] max-w-xl mt-3 font-sans">
              Choose the batch that suits your daily rhythm. Including our popular dedicated afternoon ladies batch.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#181b22] border border-white/10 px-4 py-2 rounded-sm text-xs font-heading uppercase tracking-wider text-white">
            <Clock className="w-4 h-4 text-[#e52538]" />
            <span>Open 5:30 AM to 10:00 PM Daily</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCHEDULE_DATA.map((item, index) => (
            <div
              key={index}
              className="bg-[#181b22] border border-white/10 rounded-sm p-6 flex flex-col justify-between hover:border-[#e52538] transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-[#e52538] font-bold">
                    BATCH 0{index + 1}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] font-heading font-black tracking-widest uppercase bg-[#e52538]/20 text-[#ff4d5e] border border-[#e52538]/30 px-2 py-0.5 rounded-sm">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-heading uppercase text-xl font-bold text-white tracking-wide mb-1 group-hover:text-[#e52538] transition-colors">
                  {item.batchName}
                </h3>

                <div className="flex items-center gap-2 font-display text-2xl text-white font-black tracking-wide my-3 text-gradient-brand">
                  <Clock className="w-4 h-4 text-[#e52538] shrink-0" />
                  <span>{item.timeRange}</span>
                </div>

                <p className="text-xs text-[#9ba1b0] font-sans mb-4">
                  {item.focus}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60 font-sans">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#e52538]" />
                  <span>{item.days}</span>
                </span>
                <span className="text-[#e52538] font-mono font-semibold">Active Slot</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
