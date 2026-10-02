import React from 'react';
import { Check, ArrowUpRight, Zap, Shield, Sparkles } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/gymData';
import { MembershipPlan } from '../types';

interface PricingPlansProps {
  onSelectPlan: (plan: MembershipPlan) => void;
}

export const PricingPlans: React.FC<PricingPlansProps> = ({ onSelectPlan }) => {
  return (
    <section id="plans" className="py-20 lg:py-28 bg-[#0b0c0e] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow mb-3">MEMBERSHIP PLANS</span>
          <h2 className="font-display uppercase text-4xl sm:text-6xl text-white font-black leading-none mb-4">
            CHOOSE YOUR <span className="text-gradient-brand">PLAN</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9ba1b0] font-sans">
            Transparent pricing with zero hidden charges. Every pass includes full access to all training zones, locker rooms, and certified coach supervision on the floor.
          </p>
        </div>

        {/* 3 Transparent Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const isFeatured = plan.featured;

            return (
              <div
                key={plan.id}
                className={`relative rounded-sm flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#151821] border-2 border-[#e52538] shadow-[0_0_35px_rgba(229,37,56,0.35)] lg:-translate-y-3 z-10'
                    : 'bg-[#121418]/80 border border-white/10 hover:border-white/25'
                } p-6 sm:p-8`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#e52538] text-white px-3.5 py-1 rounded-sm text-[11px] font-heading font-black tracking-widest uppercase shadow-md flex items-center gap-1.5">
                    <Zap className="w-3 h-3 fill-current" />
                    <span>{plan.badge || 'MOST POPULAR'}</span>
                  </div>
                )}

                {/* Card Top */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading uppercase text-2xl font-black text-white tracking-wide">
                      {plan.name}
                    </h3>
                    {plan.savings && (
                      <span className="text-[10px] font-mono font-bold bg-[#e52538]/20 border border-[#e52538]/40 text-[#ff4d5e] px-2 py-0.5 rounded-sm">
                        {plan.savings}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#9ba1b0] font-sans min-h-[36px] mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="pb-6 mb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-5xl sm:text-6xl font-black text-white tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-sm font-heading uppercase tracking-wider text-[#9ba1b0]">
                        {plan.period}
                      </span>
                    </div>
                    {plan.originalPrice && (
                      <div className="flex items-center gap-2 mt-1 text-xs text-[#9ba1b0]">
                        <span className="line-through">{plan.originalPrice}</span>
                        <span className="text-[#e52538] font-semibold font-mono">{plan.billingText}</span>
                      </div>
                    )}
                  </div>

                  {/* Cumulative Perk Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-heading uppercase tracking-wider text-white/50 font-bold">
                      INCLUDED IN THIS PLAN:
                    </div>
                    {plan.perks.map((perk, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <div
                          className={`w-4 h-4 rounded-sm flex items-center justify-center shrink-0 mt-0.5 ${
                            isFeatured
                              ? 'bg-[#e52538] text-white'
                              : 'bg-white/10 text-white'
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm text-white/90 font-sans">
                          {perk}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Full-width action button linking directly to Contact/Enquiry */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3.5 text-center rounded-sm font-heading uppercase tracking-wider font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'btn-primary shadow-glow'
                        : 'bg-white/10 hover:bg-[#e52538] text-white hover:text-white border border-white/10 hover:border-[#e52538]'
                    }`}
                  >
                    <span>Choose {plan.name}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="mt-3 text-center text-[10px] text-[#9ba1b0] uppercase tracking-wider font-mono">
                    Instant confirmation · WhatsApp support
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Concession Note */}
        <div className="mt-12 bg-[#121418] border border-white/10 rounded-sm p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-[#e52538]/20 text-[#e52538] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading uppercase text-sm sm:text-base font-bold text-white tracking-wide">
                College Student & Annual Couple Concessions Available
              </h4>
              <p className="text-xs text-[#9ba1b0]">
                Special group rates for college students in Ambejogai and couple yearly transformation packages upon ID verification.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="btn-ghost text-xs py-2 px-4 whitespace-nowrap"
          >
            Ask Front Desk
          </a>
        </div>
      </div>
    </section>
  );
};
