import React, { useState } from 'react';
import { Calculator, ArrowUpRight, Flame, Dumbbell, Activity, Check } from 'lucide-react';

interface BmiCalculatorProps {
  onApplyGoal: (goal: string) => void;
}

export const BmiCalculator: React.FC<BmiCalculatorProps> = ({ onApplyGoal }) => {
  const [weightKg, setWeightKg] = useState<number>(72);
  const [heightCm, setHeightCm] = useState<number>(175);
  const [goal, setGoal] = useState<'fat_loss' | 'hypertrophy' | 'strength'>('hypertrophy');

  // BMI = weight(kg) / (height(m) * height(m))
  const heightM = heightCm / 100;
  const bmi = heightM > 0 ? Number((weightKg / (heightM * heightM)).toFixed(1)) : 0;

  const getBmiStatus = (val: number) => {
    if (val < 18.5) return { label: 'Underweight', color: 'text-amber-400', badge: 'Lean Bulk Protocol' };
    if (val < 25) return { label: 'Optimal Athletic Range', color: 'text-emerald-400', badge: 'Lean Hypertrophy' };
    if (val < 30) return { label: 'Overweight', color: 'text-orange-400', badge: 'Metabolic Conditioning' };
    return { label: 'Obese Range', color: 'text-red-400', badge: 'High-Deficit Recomposition' };
  };

  const status = getBmiStatus(bmi);

  // Suggested daily protein in grams
  const proteinGrams = goal === 'hypertrophy' ? Math.round(weightKg * 2.0) : Math.round(weightKg * 1.8);
  const dailyWaterLiters = (weightKg * 0.04).toFixed(1);

  const goalDescriptions = {
    fat_loss: 'Fat Loss & High-Volume Metabolic Conditioning',
    hypertrophy: 'Hypertrophy & Progressive Muscle Building',
    strength: 'Maximal Strength & Powerlifting Protocol',
  };

  return (
    <section id="calculator" className="py-20 bg-[#121418] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-6">
            <span className="eyebrow mb-3">FITNESS ASSESSMENT UTILITY</span>
            <h2 className="font-display uppercase text-4xl sm:text-5xl text-white font-black leading-none mb-4">
              CALCULATE YOUR <br />
              <span className="text-gradient-brand">STARTING METRICS</span>
            </h2>
            <p className="text-sm text-[#9ba1b0] mb-8 font-sans">
              Enter your current measurements to calculate your BMI and personalized daily macronutrient starting points.
            </p>

            <div className="bg-[#181b22] border border-white/10 rounded-sm p-6 sm:p-8 space-y-6">
              {/* Weight Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-heading uppercase tracking-wider text-white font-bold">
                    Body Weight: <span className="text-[#e52538] font-mono text-base">{weightKg} KG</span>
                  </label>
                  <span className="text-xs text-[#9ba1b0] font-mono">{(weightKg * 2.20462).toFixed(1)} LBS</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="140"
                  step="1"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="w-full accent-[#e52538] bg-[#0b0c0e] h-2 rounded-sm cursor-pointer"
                />
              </div>

              {/* Height Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-heading uppercase tracking-wider text-white font-bold">
                    Height: <span className="text-[#e52538] font-mono text-base">{heightCm} CM</span>
                  </label>
                  <span className="text-xs text-[#9ba1b0] font-mono">
                    {Math.floor(heightCm / 30.48)} ft {Math.round((heightCm % 30.48) / 2.54)} in
                  </span>
                </div>
                <input
                  type="range"
                  min="130"
                  max="210"
                  step="1"
                  value={heightCm}
                  onChange={(e) => setHeightCm(Number(e.target.value))}
                  className="w-full accent-[#e52538] bg-[#0b0c0e] h-2 rounded-sm cursor-pointer"
                />
              </div>

              {/* Fitness Goal Segmented Buttons (interactive filter buttons per anti-slop rules) */}
              <div>
                <label className="text-xs font-heading uppercase tracking-wider text-white font-bold block mb-2">
                  Primary Transformation Goal
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { key: 'fat_loss', label: 'Fat Loss', icon: Flame },
                    { key: 'hypertrophy', label: 'Build Muscle', icon: Dumbbell },
                    { key: 'strength', label: 'Max Strength', icon: Activity },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isSelected = goal === item.key;
                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setGoal(item.key as any)}
                        className={`p-2.5 rounded-sm border text-xs font-heading uppercase tracking-wider font-bold transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-[#e52538] border-[#e52538] text-white shadow-glow-sm'
                            : 'bg-[#121418] border-white/10 text-[#9ba1b0] hover:text-white hover:border-white/20'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Computed Results Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#181b22] border-2 border-white/10 rounded-sm p-6 sm:p-8 relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <Calculator className="w-5 h-5 text-[#e52538]" />
                  <span className="font-heading uppercase text-sm tracking-wider font-bold text-white">
                    Estimated Athletic Baseline
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#e52538] uppercase">
                  {status.badge}
                </span>
              </div>

              {/* Main BMI Number Display */}
              <div className="flex items-baseline gap-4 mb-2">
                <div className="font-display text-6xl sm:text-7xl font-black text-white tracking-tight tabular-nums">
                  {bmi}
                </div>
                <div>
                  <div className="text-xs font-heading uppercase tracking-wider text-[#9ba1b0]">
                    Body Mass Index
                  </div>
                  <div className={`text-sm font-heading font-bold uppercase tracking-wider ${status.color}`}>
                    {status.label}
                  </div>
                </div>
              </div>

              {/* Visual meter bar */}
              <div className="w-full bg-[#0b0c0e] h-2.5 rounded-sm overflow-hidden mb-6 flex">
                <div className="w-[18.5%] bg-amber-400" title="Underweight (< 18.5)" />
                <div className="w-[30%] bg-emerald-500" title="Healthy (18.5 - 24.9)" />
                <div className="w-[25%] bg-orange-400" title="Overweight (25 - 29.9)" />
                <div className="w-[26.5%] bg-red-600" title="Obese (30+)" />
              </div>

              {/* Targets Grid */}
              <div className="grid grid-cols-2 gap-4 py-4 mb-6 border-y border-white/10">
                <div className="bg-[#121418] p-3.5 rounded-sm border border-white/5">
                  <div className="text-[10px] uppercase font-heading tracking-wider text-[#9ba1b0]">
                    Recommended Protein Target
                  </div>
                  <div className="font-display text-2xl font-black text-white mt-0.5">
                    {proteinGrams}g <span className="text-xs text-[#e52538] font-sans font-normal">/ day</span>
                  </div>
                </div>

                <div className="bg-[#121418] p-3.5 rounded-sm border border-white/5">
                  <div className="text-[10px] uppercase font-heading tracking-wider text-[#9ba1b0]">
                    Target Hydration
                  </div>
                  <div className="font-display text-2xl font-black text-white mt-0.5">
                    {dailyWaterLiters}L <span className="text-xs text-[#e52538] font-sans font-normal">/ day</span>
                  </div>
                </div>
              </div>

              {/* Recommended Protocol at Fitness Matters */}
              <div className="mb-6">
                <div className="text-xs font-heading uppercase tracking-wider text-white font-bold mb-1">
                  Fitness Matters Prescribed Protocol:
                </div>
                <div className="text-xs text-[#9ba1b0] leading-relaxed">
                  {goalDescriptions[goal]}. Includes customized progressive overload program on our heavy iron deck.
                </div>
              </div>

              {/* Apply Goal to Enquiry Form */}
              <button
                type="button"
                onClick={() => onApplyGoal(goalDescriptions[goal])}
                className="w-full btn-primary text-xs sm:text-sm py-3 flex items-center justify-center gap-2 shadow-glow-sm"
              >
                <span>Book Free Assessment For This Goal</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
