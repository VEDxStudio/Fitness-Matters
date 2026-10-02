import React from 'react';

/**
 * High-fidelity, self-contained SVG graphics with zero external image dependencies.
 * Styled with dramatic dark charcoal, red rim lighting, chalk particles, and atmospheric spotlights
 * directly aligned with the user's reference design ("BUILT DIFFERENT / IRON DISTRICT").
 */

export const HeroGymVisual: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full h-full overflow-hidden bg-[#0b0c0e] ${className}`}>
    <svg
      viewBox="0 0 1920 1088"
      className="w-full h-full object-cover select-none"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Spotlights and glow gradients */}
        <radialGradient id="redSpotlight" cx="68%" cy="32%" r="55%">
          <stop offset="0%" stopColor="#e52538" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#850c18" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0b0c0e" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="overheadLight" cx="62%" cy="5%" r="40%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#0b0c0e" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="floorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#14171e" />
          <stop offset="50%" stopColor="#0d0e12" />
          <stop offset="100%" stopColor="#08090a" />
        </linearGradient>
        <linearGradient id="barbellIron" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22252e" />
          <stop offset="50%" stopColor="#555a68" />
          <stop offset="100%" stopColor="#1a1c22" />
        </linearGradient>
        <filter id="chalkBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="neonRedHeroGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="14" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Dark gym background */}
      <rect width="1920" height="1088" fill="#0b0c0e" />

      {/* Ambient spotlights */}
      <rect width="1920" height="1088" fill="url(#redSpotlight)" />
      <rect width="1920" height="1088" fill="url(#overheadLight)" />

      {/* Structural ceiling beams & steel trusses */}
      <path d="M 0,90 L 1920,90 M 0,160 L 1920,160 M 300,0 L 450,160 M 700,0 L 850,160 M 1100,0 L 1250,160 M 1500,0 L 1650,160" stroke="#1d212b" strokeWidth="2" opacity="0.6" />
      
      {/* Overhead industrial gym rectangular light fixtures (like in the reference photo) */}
      <g opacity="0.85">
        <rect x="980" y="80" width="380" height="12" rx="2" fill="#ffffff" filter="url(#chalkBlur)" opacity="0.9" />
        <rect x="990" y="82" width="360" height="8" rx="2" fill="#ffffff" />
        <line x1="1040" y1="0" x2="1040" y2="80" stroke="#333846" strokeWidth="2" />
        <line x1="1300" y1="0" x2="1300" y2="80" stroke="#333846" strokeWidth="2" />
      </g>

      {/* Gym Floor rubber tiles grid */}
      <polygon points="0,720 1920,720 1920,1088 0,1088" fill="url(#floorGrad)" />
      <line x1="0" y1="720" x2="1920" y2="720" stroke="#252936" strokeWidth="2" />
      <line x1="200" y1="720" x2="0" y2="1088" stroke="#1c202a" strokeWidth="1.5" />
      <line x1="500" y1="720" x2="350" y2="1088" stroke="#1c202a" strokeWidth="1.5" />
      <line x1="800" y1="720" x2="720" y2="1088" stroke="#1c202a" strokeWidth="1.5" />
      <line x1="1100" y1="720" x2="1100" y2="1088" stroke="#1c202a" strokeWidth="1.5" />
      <line x1="1400" y1="720" x2="1480" y2="1088" stroke="#1c202a" strokeWidth="1.5" />
      <line x1="1700" y1="720" x2="1850" y2="1088" stroke="#1c202a" strokeWidth="1.5" />

      {/* Heavy power rack in background right */}
      <g opacity="0.45" stroke="#282d3b" strokeWidth="8">
        <line x1="1520" y1="280" x2="1520" y2="760" />
        <line x1="1720" y1="280" x2="1720" y2="760" />
        <line x1="1520" y1="300" x2="1720" y2="300" strokeWidth="10" />
        <line x1="1520" y1="460" x2="1720" y2="460" stroke="#e52538" strokeWidth="5" />
        <circle cx="1620" cy="560" r="80" stroke="#181a22" strokeWidth="20" fill="none" />
      </g>

      {/* Neon sign on gym back wall: "BE YOUR OWN STANDARD." like in the reference image! */}
      <g transform="translate(1320, 360)">
        <text
          x="0"
          y="0"
          fontFamily="'Bebas Neue', sans-serif"
          fontSize="48"
          letterSpacing="4"
          fill="#e52538"
          opacity="0.8"
          filter="url(#neonRedHeroGlow)"
        >
          FITNESS MATTERS
        </text>
        <text
          x="0"
          y="38"
          fontFamily="'Oswald', sans-serif"
          fontSize="24"
          letterSpacing="8"
          fill="#ffffff"
          opacity="0.6"
        >
          DISCIPLINE · LOCATION
        </text>
      </g>

      {/* HERO ATHLETE: Muscular athlete clapping hands with chalk cloud (reference photo match!) */}
      <g transform="translate(1120, 210)">
        {/* Red Rim Light behind athlete body */}
        <path
          d="M 60,180 Q 20,280 40,420 Q 80,500 120,530 L 220,530 Q 260,500 300,420 Q 320,280 280,180 Q 250,110 200,100 Q 140,110 60,180 Z"
          fill="#e52538"
          opacity="0.22"
          filter="url(#chalkBlur)"
        />

        {/* Head and focused jawline */}
        <circle cx="170" cy="115" r="42" fill="#1b1e26" stroke="#e52538" strokeWidth="1.5" />
        {/* Haircut with pompadour profile */}
        <path d="M 135,100 C 135,70 180,65 205,80 C 215,95 210,120 205,125 C 190,105 155,100 135,100 Z" fill="#0d0e12" />

        {/* Muscular Trapezius and Neck */}
        <path d="M 140,140 L 100,185 L 240,185 L 200,140 Z" fill="#1c1f28" />

        {/* Muscular Deltoids and Chest */}
        <path
          d="M 70,195 Q 40,240 50,310 Q 75,340 100,320 L 110,210 Z"
          fill="#252a36"
          stroke="#404658"
          strokeWidth="1.5"
        />
        <path
          d="M 270,195 Q 300,240 290,310 Q 265,340 240,320 L 230,210 Z"
          fill="#252a36"
          stroke="#404658"
          strokeWidth="1.5"
        />

        {/* Athlete Tank / Athletic Stringer with FM Branding */}
        <path
          d="M 100,190 L 130,200 L 135,320 L 125,510 L 215,510 L 205,320 L 210,200 L 240,190 L 230,250 C 220,380 210,480 210,510 L 130,510 C 130,480 120,380 110,250 Z"
          fill="#101217"
          stroke="#222632"
          strokeWidth="2"
        />

        {/* Chest and Pectorals definition */}
        <path d="M 135,230 Q 170,255 205,230" stroke="#373c4c" strokeWidth="2.5" fill="none" />
        <line x1="170" y1="210" x2="170" y2="300" stroke="#373c4c" strokeWidth="2" />

        {/* Athletic Arms holding / clapping chalk */}
        {/* Left forearm coming inwards */}
        <path d="M 50,310 Q 70,390 130,420 L 155,395 Q 105,370 85,310 Z" fill="#252a36" stroke="#404658" strokeWidth="1.5" />
        {/* Right forearm coming inwards */}
        <path d="M 290,310 Q 270,390 210,420 L 185,395 Q 235,370 255,310 Z" fill="#252a36" stroke="#404658" strokeWidth="1.5" />

        {/* Hands clapping together */}
        <ellipse cx="170" cy="410" rx="26" ry="18" fill="#2d3342" stroke="#50586c" strokeWidth="1.5" />

        {/* Dynamic Chalk Dust Cloud (just like in the reference photo!) */}
        <g opacity="0.8">
          <ellipse cx="170" cy="415" rx="90" ry="55" fill="#ffffff" opacity="0.16" filter="url(#chalkBlur)" />
          <ellipse cx="170" cy="415" rx="55" ry="35" fill="#ffffff" opacity="0.28" filter="url(#chalkBlur)" />
          <circle cx="160" cy="410" r="18" fill="#ffffff" opacity="0.45" filter="url(#chalkBlur)" />
          
          {/* Individual chalk dust particles */}
          <circle cx="140" cy="390" r="2.5" fill="#ffffff" opacity="0.9" />
          <circle cx="195" cy="385" r="2" fill="#ffffff" opacity="0.8" />
          <circle cx="120" cy="425" r="3" fill="#ffffff" opacity="0.75" />
          <circle cx="215" cy="430" r="2.5" fill="#ffffff" opacity="0.85" />
          <circle cx="150" cy="445" r="3.5" fill="#ffffff" opacity="0.65" />
          <circle cx="185" cy="455" r="2" fill="#ffffff" opacity="0.7" />
          <circle cx="105" cy="405" r="1.5" fill="#ffffff" opacity="0.9" />
          <circle cx="230" cy="400" r="2" fill="#ffffff" opacity="0.85" />
          <circle cx="170" cy="470" r="1.5" fill="#ffffff" opacity="0.6" />
          <circle cx="162" cy="360" r="1.5" fill="#ffffff" opacity="0.8" />
        </g>

        {/* Lower body shorts */}
        <path d="M 125,510 L 110,650 L 165,650 L 170,550 L 175,650 L 230,650 L 215,510 Z" fill="#0d0e12" stroke="#1d2028" strokeWidth="2" />
      </g>

      {/* Olympic Barbell on the floor in front */}
      <g transform="translate(980, 830)">
        {/* Steel Bar */}
        <rect x="0" y="24" width="620" height="12" rx="3" fill="url(#barbellIron)" stroke="#494f60" strokeWidth="1" />
        {/* Left Bumper Plates */}
        <rect x="70" y="-35" width="22" height="130" rx="4" fill="#14161c" stroke="#e52538" strokeWidth="2.5" />
        <rect x="94" y="-30" width="18" height="120" rx="3" fill="#1b1e25" stroke="#2e3340" strokeWidth="2" />
        <rect x="114" y="-25" width="16" height="110" rx="3" fill="#1b1e25" stroke="#2e3340" strokeWidth="2" />
        <circle cx="81" cy="30" r="10" fill="#0b0c0e" />
        <text x="81" y="34" fontSize="10" fontFamily="'Oswald', sans-serif" fill="#ffffff" textAnchor="middle">25KG</text>

        {/* Right Bumper Plates */}
        <rect x="490" y="-25" width="16" height="110" rx="3" fill="#1b1e25" stroke="#2e3340" strokeWidth="2" />
        <rect x="508" y="-30" width="18" height="120" rx="3" fill="#1b1e25" stroke="#2e3340" strokeWidth="2" />
        <rect x="528" y="-35" width="22" height="130" rx="4" fill="#14161c" stroke="#e52538" strokeWidth="2.5" />
        <circle cx="539" cy="30" r="10" fill="#0b0c0e" />
        <text x="539" y="34" fontSize="10" fontFamily="'Oswald', sans-serif" fill="#ffffff" textAnchor="middle">25KG</text>
      </g>
    </svg>

    {/* Required Left-to-Right Black Scrim for 100% text legibility */}
    <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-transparent to-transparent pointer-events-none" />
  </div>
);

export const FacilityVisual: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full h-full overflow-hidden bg-[#121418] rounded-sm border border-white/10 ${className}`}>
    <svg viewBox="0 0 1024 768" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="facSpot" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#e52538" stopOpacity="0.3" />
          <stop offset="60%" stopColor="#121418" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0b0c0e" stopOpacity="1" />
        </radialGradient>
        <linearGradient id="rackSteel" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#252833" />
          <stop offset="50%" stopColor="#4f5466" />
          <stop offset="100%" stopColor="#1e2028" />
        </linearGradient>
      </defs>

      <rect width="1024" height="768" fill="#0d0f13" />
      <rect width="1024" height="768" fill="url(#facSpot)" />

      {/* Gym Floor */}
      <polygon points="0,520 1024,520 1024,768 0,768" fill="#14161c" />
      <line x1="0" y1="520" x2="1024" y2="520" stroke="#e52538" strokeWidth="2" opacity="0.6" />

      {/* Row of Commercial Power Cages & Squat Racks */}
      {[120, 420, 720].map((x, i) => (
        <g key={i} transform={`translate(${x}, 160)`}>
          {/* Vertical Uprights */}
          <rect x="0" y="0" width="24" height="380" fill="url(#rackSteel)" stroke="#0b0c0e" strokeWidth="2" />
          <rect x="180" y="0" width="24" height="380" fill="url(#rackSteel)" stroke="#0b0c0e" strokeWidth="2" />
          {/* Top Crossbar with Chin-up Handles */}
          <rect x="0" y="20" width="204" height="20" fill="#e52538" rx="2" />
          {/* J-Hooks with Barbell Loaded */}
          <rect x="-10" y="160" width="224" height="10" rx="3" fill="#697184" stroke="#1d2028" strokeWidth="1.5" />
          {/* Plates */}
          <rect x="10" y="110" width="16" height="110" rx="4" fill="#e52538" />
          <rect x="28" y="125" width="14" height="80" rx="3" fill="#2b2f3a" />
          <rect x="162" y="125" width="14" height="80" rx="3" fill="#2b2f3a" />
          <rect x="178" y="110" width="16" height="110" rx="4" fill="#e52538" />
          {/* Bench inside rack */}
          <polygon points="40,320 164,320 174,380 30,380" fill="#181a20" stroke="#333742" strokeWidth="2" />
          <rect x="35" y="300" width="134" height="20" rx="4" fill="#0b0c0e" stroke="#e52538" strokeWidth="1.5" />
        </g>
      ))}

      {/* Dumbbell Tier Rack in foreground */}
      <g transform="translate(60, 560)">
        <rect x="0" y="60" width="904" height="16" rx="3" fill="#262934" stroke="#3f4454" strokeWidth="1.5" />
        {/* Row of calibrated black urethane dumbbells */}
        {[20, 110, 200, 290, 380, 470, 560, 650, 740, 830].map((dx, idx) => (
          <g key={idx} transform={`translate(${dx}, 15)`}>
            <rect x="0" y="0" width="18" height="65" rx="5" fill="#121418" stroke="#e52538" strokeWidth="1.5" />
            <rect x="18" y="22" width="30" height="18" rx="2" fill="#585e70" stroke="#22252e" strokeWidth="1" />
            <rect x="48" y="0" width="18" height="65" rx="5" fill="#121418" stroke="#e52538" strokeWidth="1.5" />
            <text x="33" y="35" fontSize="10" fontFamily="'Oswald', sans-serif" fill="#ffffff" textAnchor="middle">
              {10 + idx * 2.5}
            </text>
          </g>
        ))}
      </g>

      {/* Ambient lighting cones */}
      <polygon points="220,0 120,540 320,540" fill="#ffffff" opacity="0.04" />
      <polygon points="520,0 420,540 620,540" fill="#ffffff" opacity="0.04" />
      <polygon points="820,0 720,540 920,540" fill="#ffffff" opacity="0.04" />
    </svg>
    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-transparent to-black/20" />
    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/80">
      <span className="font-heading font-bold uppercase tracking-wider text-[#e52538]">
        Olympic Training Deck
      </span>
      <span className="font-mono text-white/60">5,000 SQ FT · LOCATION</span>
    </div>
  </div>
);

export const CoachingVisual: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative w-full h-full overflow-hidden bg-[#121418] rounded-sm border border-white/10 ${className}`}>
    <svg viewBox="0 0 1024 768" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="coachGlow" cx="60%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#e52538" stopOpacity="0.3" />
          <stop offset="70%" stopColor="#121418" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0b0c0e" stopOpacity="1" />
        </radialGradient>
      </defs>

      <rect width="1024" height="768" fill="#0b0c0e" />
      <rect width="1024" height="768" fill="url(#coachGlow)" />

      {/* Gym background wall with workout whiteboard / motivational text */}
      <rect x="80" y="80" width="864" height="420" rx="4" fill="#14171e" stroke="#252a36" strokeWidth="2" />
      <text x="120" y="140" fontFamily="'Oswald', sans-serif" fontSize="24" fill="#e52538" letterSpacing="4">
        COACHING PROTOCOL · FITNESS MATTERS
      </text>
      <text x="120" y="180" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="16" fill="#8f96a8">
        1. Form & Biomechanics Verification
      </text>
      <text x="120" y="210" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="16" fill="#8f96a8">
        2. Progressive Overload Calibration
      </text>
      <text x="120" y="240" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="16" fill="#8f96a8">
        3. Heart-Rate & Recovery Monitoring
      </text>

      {/* Coach in black polo shirt mentoring athlete */}
      <g transform="translate(560, 220)">
        {/* Head */}
        <circle cx="100" cy="80" r="38" fill="#20242e" stroke="#e52538" strokeWidth="2" />
        {/* Body / Coach Shirt */}
        <path d="M 50,130 L 150,130 L 170,360 L 30,360 Z" fill="#0f1116" stroke="#2e3342" strokeWidth="2" />
        <text x="100" y="200" fontFamily="'Oswald', sans-serif" fontSize="18" fill="#e52538" textAnchor="middle" fontWeight="bold">
          COACH
        </text>
        {/* Arms gesturing form correction */}
        <path d="M 40,150 L -40,220 L -10,260 L 45,210 Z" fill="#252a36" />
        <circle cx="-35" cy="225" r="14" fill="#2d3342" />
      </g>

      {/* Athlete performing dumbbell press */}
      <g transform="translate(240, 280)">
        <circle cx="100" cy="70" r="34" fill="#1b1e26" />
        <path d="M 60,110 L 140,110 L 150,320 L 50,320 Z" fill="#1a1d26" stroke="#e52538" strokeWidth="1" />
        {/* Dumbbell held up */}
        <line x1="160" y1="40" x2="160" y2="120" stroke="#777f92" strokeWidth="6" />
        <rect x="145" y="25" width="30" height="20" rx="3" fill="#e52538" />
        <rect x="145" y="115" width="30" height="20" rx="3" fill="#e52538" />
      </g>
    </svg>
    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-transparent to-black/20" />
    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/80">
      <span className="font-heading font-bold uppercase tracking-wider text-[#e52538]">
        1-on-1 Certified Mentorship
      </span>
      <span className="font-mono text-white/60">EXPERIENCED COACHES</span>
    </div>
  </div>
);

/**
 * Three program visual tiles matching the reference design:
 * STRENGTH ("Build muscle. Lift heavy. Get results.")
 * CONDITIONING ("Increase endurance. Push your limits.")
 * PERSONAL TRAINING ("1-on-1 coaching. 100% focused on you.")
 */
export const ProgramCardVisual: React.FC<{
  type: 'strength' | 'conditioning' | 'personal';
  className?: string;
}> = ({ type, className = '' }) => {
  if (type === 'strength') {
    return (
      <div className={`relative w-full h-56 overflow-hidden bg-[#101217] ${className}`}>
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
          <defs>
            <radialGradient id="strGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e52538" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0b0c0e" stopOpacity="0.9" />
            </radialGradient>
          </defs>
          <rect width="400" height="240" fill="#0b0c0e" />
          <rect width="400" height="240" fill="url(#strGlow)" />
          {/* Heavy Olympic barbell and bumper plates */}
          <rect x="30" y="115" width="340" height="10" rx="3" fill="#585e70" stroke="#1d2028" strokeWidth="1" />
          <rect x="60" y="60" width="22" height="120" rx="4" fill="#e52538" />
          <rect x="85" y="70" width="18" height="100" rx="3" fill="#1e212b" stroke="#3c4254" strokeWidth="2" />
          <rect x="295" y="70" width="18" height="100" rx="3" fill="#1e212b" stroke="#3c4254" strokeWidth="2" />
          <rect x="318" y="60" width="22" height="120" rx="4" fill="#e52538" />
          {/* Chalk dust specks */}
          <circle cx="180" cy="110" r="18" fill="#ffffff" opacity="0.15" />
          <circle cx="210" cy="120" r="2.5" fill="#ffffff" opacity="0.8" />
          <circle cx="190" cy="95" r="2" fill="#ffffff" opacity="0.8" />
          <circle cx="170" cy="130" r="2" fill="#ffffff" opacity="0.7" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-transparent" />
      </div>
    );
  }

  if (type === 'conditioning') {
    return (
      <div className={`relative w-full h-56 overflow-hidden bg-[#101217] ${className}`}>
        <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
          <defs>
            <radialGradient id="condGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e52538" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0b0c0e" stopOpacity="0.9" />
            </radialGradient>
          </defs>
          <rect width="400" height="240" fill="#0b0c0e" />
          <rect width="400" height="240" fill="url(#condGlow)" />
          {/* Heavy Battle Ropes Wave */}
          <path
            d="M 20,180 Q 70,80 120,180 T 220,180 T 320,180 T 380,180"
            fill="none"
            stroke="#e52538"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M 20,195 Q 80,105 130,195 T 230,195 T 330,195 T 380,195"
            fill="none"
            stroke="#2f3444"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Athlete silhouette slamming ropes */}
          <circle cx="200" cy="70" r="22" fill="#1b1e26" stroke="#e52538" strokeWidth="1" />
          <path d="M 175,100 L 225,100 L 235,170 L 165,170 Z" fill="#141720" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-transparent" />
      </div>
    );
  }

  // Personal Training
  return (
    <div className={`relative w-full h-56 overflow-hidden bg-[#101217] ${className}`}>
      <svg viewBox="0 0 400 240" className="w-full h-full object-cover">
        <defs>
          <radialGradient id="ptGlow" cx="65%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#e52538" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0b0c0e" stopOpacity="0.95" />
          </radialGradient>
        </defs>
        <rect width="400" height="240" fill="#0b0c0e" />
        <rect width="400" height="240" fill="url(#ptGlow)" />
        {/* Coach standing next to athlete lifting dumbbell */}
        <circle cx="270" cy="70" r="24" fill="#252a36" stroke="#e52538" strokeWidth="1.5" />
        <path d="M 240,105 L 300,105 L 310,210 L 230,210 Z" fill="#0e1014" stroke="#e52538" strokeWidth="1" />
        <text x="270" y="145" fontFamily="'Oswald', sans-serif" fontSize="12" fill="#e52538" textAnchor="middle" fontWeight="bold">
          COACH
        </text>

        <circle cx="150" cy="85" r="20" fill="#1a1c22" />
        <path d="M 125,115 L 175,115 L 180,210 L 120,210 Z" fill="#181a24" />
        {/* Dumbbell */}
        <line x1="110" y1="80" x2="110" y2="130" stroke="#777f92" strokeWidth="4" />
        <rect x="100" y="70" width="20" height="12" rx="2" fill="#e52538" />
        <rect x="100" y="128" width="20" height="12" rx="2" fill="#e52538" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-transparent" />
    </div>
  );
};
