import React from 'react';

interface FitnessMattersLogoProps {
  variant?: 'full' | 'mark' | 'horizontal-compact' | 'footer';
  className?: string;
  size?: number | string;
}

export const FitnessMattersLogo: React.FC<FitnessMattersLogoProps> = ({
  variant = 'full',
  className = '',
}) => {
  if (variant === 'mark') {
    return (
      <div className={`relative flex items-center justify-center font-heading font-black select-none ${className}`}>
        {/* Compact Square Badge for Navbar / Favicon / Avatars */}
        <div className="relative w-11 h-11 sm:w-12 sm:h-12 bg-[#121418] border-2 border-[#e52538] rounded-sm flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(229,37,56,0.35)] group-hover:border-[#ff4d5e] transition-colors">
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#e52538_1px,transparent_1px)] [background-size:6px_6px] opacity-15" />
          
          {/* Muscular athlete silhouette watermark */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full text-[#e52538]/20 fill-current"
            aria-hidden="true"
          >
            <path d="M50 15 C45 15 42 20 42 26 C42 28 44 32 46 34 C36 36 28 45 25 56 C24 60 27 65 31 66 C35 67 38 64 39 60 C41 52 44 48 50 48 C56 48 59 52 61 60 C62 64 65 67 69 66 C73 65 76 60 75 56 C72 45 64 36 54 34 C56 32 58 28 58 26 C58 20 55 15 50 15 Z" />
          </svg>

          {/* FM Monogram */}
          <div className="relative z-10 flex items-baseline tracking-tighter">
            <span className="text-[#e52538] text-xl sm:text-2xl font-black drop-shadow-[0_0_8px_rgba(229,37,56,0.8)]">
              F
            </span>
            <span className="text-[#ffffff] text-xl sm:text-2xl font-black drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] ml-[-1px]">
              M
            </span>
          </div>

          {/* Accent red corner highlight */}
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#e52538]" />
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        {/* Large 80px Square Logo Mark for Footer */}
        <div className="relative w-20 h-20 bg-[#121418] border-2 border-[#e52538] rounded-sm flex items-center justify-center shadow-[0_0_25px_rgba(229,37,56,0.45)] mb-3 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e52538_1.5px,transparent_1.5px)] [background-size:8px_8px] opacity-20" />
          
          {/* Athlete SVG Graphic */}
          <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none">
            <defs>
              <linearGradient id="footerRedGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e52538" />
                <stop offset="100%" stopColor="#ff4d5e" />
              </linearGradient>
            </defs>
            {/* Muscular stylized torso */}
            <path
              d="M50 14 C44 14 41 19 41 24 C41 28 43 31 46 33 C37 35 28 42 24 53 C22 58 26 63 30 63 C33 63 36 60 37 57 C39 49 43 45 50 45 C57 45 61 49 63 57 C64 60 67 63 70 63 C74 63 78 58 76 53 C72 42 63 35 54 33 C57 31 59 28 59 24 C59 19 56 14 50 14 Z"
              fill="url(#footerRedGlow)"
            />
            {/* Core abs line highlights */}
            <path d="M50 46 L50 68 M44 54 L56 54 M45 61 L55 61" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
          </svg>
          
          <div className="absolute bottom-1 font-heading text-[10px] tracking-widest text-[#e52538] font-bold">
            FITNESS MATTERS
          </div>
        </div>

        <div className="flex items-center gap-1 font-heading font-black text-2xl tracking-wider text-white">
          <span className="text-[#e52538]">FITNESS</span>
          <span>MATTERS</span>
        </div>
        <span className="text-xs uppercase tracking-[0.25em] text-[#9ba1b0] mt-0.5">
          Location · Est. 2018
        </span>
      </div>
    );
  }

  // Horizontal full brand mark matching the actual gym neon acrylic signboard
  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3.5 select-none ${className}`}>
      {/* Muscular Athlete Mascot Icon from the real sign */}
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-[#121418] border border-[#e52538]/80 rounded-sm flex items-center justify-center shadow-[0_0_12px_rgba(229,37,56,0.35)] overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none">
          <defs>
            <linearGradient id="bodyNeon" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>
            <filter id="neonGlowRed" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#e52538" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* Stylized hair / head */}
          <path
            d="M48 10 C43 11 39 15 41 20 C42 22 45 23 48 24 C45 25 43 27 44 31 C46 34 50 35 52 35 C55 35 58 33 58 30 C58 25 54 22 55 18 C56 14 52 10 48 10 Z"
            fill="#e52538"
          />

          {/* Muscular torso and arms */}
          <path
            d="M44 34 C38 36 30 42 26 50 C23 55 25 61 29 62 C33 63 36 60 38 56 C40 48 44 44 51 44 C58 44 61 48 63 56 C65 60 68 63 72 62 C76 61 78 55 75 50 C71 42 63 36 57 34 Z"
            fill="url(#bodyNeon)"
          />

          {/* Chest & Abdominals lines */}
          <path
            d="M51 44 L51 72 M44 52 C48 55 54 55 58 52 M45 60 C48 62 53 62 56 60 M46 67 C48 69 53 69 55 67"
            stroke="#0b0c0e"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Biceps bulge detail */}
          <circle cx="28" cy="53" r="3.5" fill="#e52538" opacity="0.8" />
          <circle cx="73" cy="53" r="3.5" fill="#e52538" opacity="0.8" />
        </svg>

        {/* Small corner neon pip */}
        <div className="absolute top-0 right-0 w-2 h-2 bg-[#e52538]" />
      </div>

      {/* Typography: "FITNESS MATTERS" with Red F & M and Chrome White Body */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center text-lg sm:text-2xl font-black font-heading tracking-wide uppercase">
          {/* Word 1: FITNESS */}
          <span className="flex items-baseline">
            <span className="text-[#e52538] text-xl sm:text-2xl font-black drop-shadow-[0_0_10px_rgba(229,37,56,0.9)]">
              F
            </span>
            <span className="text-white text-base sm:text-xl font-bold tracking-wider drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
              ITNESS
            </span>
          </span>

          <span className="mx-1.5 text-xs text-[#e52538]/70 select-none">·</span>

          {/* Word 2: MATTERS */}
          <span className="flex items-baseline">
            <span className="text-[#e52538] text-xl sm:text-2xl font-black drop-shadow-[0_0_10px_rgba(229,37,56,0.9)]">
              M
            </span>
            <span className="text-white text-base sm:text-xl font-bold tracking-wider drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
              ATTERS
            </span>
          </span>
        </div>

        {/* Location & Trust Subtitle */}
        <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-[#9ba1b0] font-sans font-semibold mt-0.5">
          <span className="text-[#e52538] font-bold">GYM</span>
          <span>·</span>
          <span>LOCATION</span>
        </div>
      </div>
    </div>
  );
};
