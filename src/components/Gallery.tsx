import React, { useState } from 'react';
import { Maximize2, X, MapPin, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0b0c0e] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="eyebrow mb-3">VISUAL TOUR</span>
            <h2 className="font-display uppercase text-4xl sm:text-6xl text-white font-black leading-none">
              INSIDE THE <span className="text-gradient-brand">GYM</span>
            </h2>
            <p className="text-sm sm:text-base text-[#9ba1b0] max-w-xl mt-3 font-sans">
              Experience the raw atmosphere of Ambejogai’s most equipped strength haven. Heavy steel, rubber flooring, and high-energy music.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-wider text-[#9ba1b0]">
            <MapPin className="w-4 h-4 text-[#e52538]" />
            <span>Shivaji Chowk Area · Ambejogai</span>
          </div>
        </div>

        {/* Asymmetric 4-Tile Grid requested by prompt:
            Two wide 16:9 widescreen tiles & two square 1:1 tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Tile 1: 16:9 Widescreen (Col span 7 lg) - Features the iconic Signboard Tribute! */}
          <div
            onClick={() => setActiveModalItem(GALLERY_ITEMS[0])}
            className="lg:col-span-7 group relative bg-[#14171e] rounded-sm border border-white/10 overflow-hidden cursor-pointer hover:border-[#e52538] transition-all duration-300 aspect-[16/9]"
          >
            {/* Real Gym Signboard Visual Recreation */}
            <div className="w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-[#181b24] via-[#0d0e12] to-[#090a0d] relative overflow-hidden">
              {/* Neon Glow Backdrop */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,37,56,0.25)_0%,transparent_65%)]" />

              {/* Decorative Ceiling Tiles & Hanuman Idol outline representation */}
              <div className="absolute top-3 left-4 flex items-center gap-2 text-[10px] font-mono uppercase text-[#e52538] bg-[#0b0c0e]/80 border border-[#e52538]/30 px-2.5 py-1 rounded-sm">
                <span>AUTHENTIC GYM HEADQUARTERS</span>
              </div>

              {/* The Famous Fitness Matters Sign */}
              <div className="relative z-10 flex flex-col items-center scale-90 sm:scale-100 group-hover:scale-105 transition-transform duration-500">
                <div className="flex items-center gap-2 sm:gap-4">
                  {/* Word FITNESS */}
                  <div className="flex items-baseline font-heading tracking-wider">
                    <span className="text-[#e52538] text-3xl sm:text-5xl font-black drop-shadow-[0_0_15px_rgba(229,37,56,0.9)]">
                      F
                    </span>
                    <span className="text-white text-2xl sm:text-4xl font-bold tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                      ITNESS
                    </span>
                  </div>

                  {/* Bodybuilder Mascot Illuminated */}
                  <div className="w-14 h-14 sm:w-20 sm:h-20 bg-[#10131a] border border-[#e52538] rounded-sm flex items-center justify-center shadow-[0_0_20px_rgba(229,37,56,0.5)]">
                    <svg viewBox="0 0 100 100" className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="none">
                      <path
                        d="M44 32 C38 34 30 40 26 48 C23 53 25 59 29 60 C33 61 36 58 38 54 C40 46 44 42 51 42 C58 42 61 46 63 54 C65 58 68 61 72 60 C76 59 78 53 75 48 C71 40 63 34 57 32 Z"
                        fill="#ffffff"
                      />
                      <path d="M51 42 L51 68 M45 50 C48 53 54 53 57 50 M46 58 C48 60 53 60 56 58" stroke="#0b0c0e" strokeWidth="2.5" />
                      <circle cx="51" cy="22" r="12" fill="#e52538" />
                    </svg>
                  </div>

                  {/* Word MATTERS */}
                  <div className="flex items-baseline font-heading tracking-wider">
                    <span className="text-[#e52538] text-3xl sm:text-5xl font-black drop-shadow-[0_0_15px_rgba(229,37,56,0.9)]">
                      M
                    </span>
                    <span className="text-white text-2xl sm:text-4xl font-bold tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                      ATTERS
                    </span>
                  </div>
                </div>

                <div className="mt-2 text-[10px] sm:text-xs font-heading uppercase tracking-[0.25em] text-[#9ba1b0] font-semibold">
                  Original Acrylic Signboard & Welcoming Shrine · Ambejogai
                </div>
              </div>
            </div>

            {/* Hover Caption Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-black/40 to-transparent flex flex-col justify-end p-5">
              <div className="text-[11px] font-heading uppercase tracking-widest text-[#e52538] font-bold">
                {GALLERY_ITEMS[0].category}
              </div>
              <h3 className="font-heading uppercase text-lg sm:text-xl font-bold text-white tracking-wide">
                {GALLERY_ITEMS[0].title}
              </h3>
              <p className="text-xs text-[#9ba1b0] mt-1 line-clamp-1">
                {GALLERY_ITEMS[0].caption}
              </p>
            </div>

            <div className="absolute top-3 right-3 w-8 h-8 rounded-sm bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          {/* Tile 2: 1:1 Square (Col span 5 lg) - Power Racks */}
          <div
            onClick={() => setActiveModalItem(GALLERY_ITEMS[1])}
            className="lg:col-span-5 group relative bg-[#14171e] rounded-sm border border-white/10 overflow-hidden cursor-pointer hover:border-[#e52538] transition-all duration-300 aspect-square"
          >
            <div className="w-full h-full bg-[#12151c] flex items-center justify-center p-6 relative">
              <svg viewBox="0 0 400 400" className="w-full h-full object-cover">
                <rect width="400" height="400" fill="#0e1015" />
                {/* Spotlights */}
                <circle cx="200" cy="180" r="140" fill="#e52538" opacity="0.15" />
                {/* Power Cage */}
                <rect x="80" y="60" width="16" height="280" fill="#3f4556" />
                <rect x="300" y="60" width="16" height="280" fill="#3f4556" />
                <rect x="80" y="80" width="236" height="14" fill="#e52538" />
                <rect x="60" y="200" width="280" height="10" fill="#757d92" />
                <rect x="80" y="150" width="16" height="110" fill="#e52538" />
                <rect x="300" y="150" width="16" height="110" fill="#e52538" />
              </svg>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-black/40 to-transparent flex flex-col justify-end p-5">
              <div className="text-[11px] font-heading uppercase tracking-widest text-[#e52538] font-bold">
                {GALLERY_ITEMS[1].category}
              </div>
              <h3 className="font-heading uppercase text-lg sm:text-xl font-bold text-white tracking-wide">
                {GALLERY_ITEMS[1].title}
              </h3>
              <p className="text-xs text-[#9ba1b0] mt-1 line-clamp-1">
                {GALLERY_ITEMS[1].caption}
              </p>
            </div>

            <div className="absolute top-3 right-3 w-8 h-8 rounded-sm bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          {/* Tile 3: 1:1 Square (Col span 5 lg) - Dumbbell Bay */}
          <div
            onClick={() => setActiveModalItem(GALLERY_ITEMS[2])}
            className="lg:col-span-5 group relative bg-[#14171e] rounded-sm border border-white/10 overflow-hidden cursor-pointer hover:border-[#e52538] transition-all duration-300 aspect-square"
          >
            <div className="w-full h-full bg-[#12151c] flex items-center justify-center p-6 relative">
              <svg viewBox="0 0 400 400" className="w-full h-full object-cover">
                <rect width="400" height="400" fill="#0e1015" />
                <circle cx="200" cy="200" r="130" fill="#e52538" opacity="0.12" />
                {/* 3-tier dumbbell rack representation */}
                <line x1="40" y1="140" x2="360" y2="140" stroke="#333846" strokeWidth="8" />
                <line x1="40" y1="230" x2="360" y2="230" stroke="#333846" strokeWidth="8" />
                <line x1="40" y1="320" x2="360" y2="320" stroke="#333846" strokeWidth="8" />
                {[60, 140, 220, 300].map((dx, i) => (
                  <g key={i}>
                    <rect x={dx} y="95" width="40" height="45" rx="4" fill="#1b1e26" stroke="#e52538" strokeWidth="2" />
                    <rect x={dx} y="185" width="40" height="45" rx="4" fill="#1b1e26" stroke="#e52538" strokeWidth="2" />
                    <rect x={dx} y="275" width="40" height="45" rx="4" fill="#1b1e26" stroke="#e52538" strokeWidth="2" />
                  </g>
                ))}
              </svg>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-black/40 to-transparent flex flex-col justify-end p-5">
              <div className="text-[11px] font-heading uppercase tracking-widest text-[#e52538] font-bold">
                {GALLERY_ITEMS[2].category}
              </div>
              <h3 className="font-heading uppercase text-lg sm:text-xl font-bold text-white tracking-wide">
                {GALLERY_ITEMS[2].title}
              </h3>
              <p className="text-xs text-[#9ba1b0] mt-1 line-clamp-1">
                {GALLERY_ITEMS[2].caption}
              </p>
            </div>

            <div className="absolute top-3 right-3 w-8 h-8 rounded-sm bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          {/* Tile 4: 16:9 Widescreen (Col span 7 lg) - Conditioning Turf */}
          <div
            onClick={() => setActiveModalItem(GALLERY_ITEMS[3])}
            className="lg:col-span-7 group relative bg-[#14171e] rounded-sm border border-white/10 overflow-hidden cursor-pointer hover:border-[#e52538] transition-all duration-300 aspect-[16/9]"
          >
            <div className="w-full h-full bg-[#12151c] flex items-center justify-center p-6 relative">
              <svg viewBox="0 0 600 340" className="w-full h-full object-cover">
                <rect width="600" height="340" fill="#0e1015" />
                <path d="M 0,220 L 600,220 L 600,340 L 0,340 Z" fill="#151b1f" />
                {/* Turf green line markers */}
                <line x1="100" y1="220" x2="60" y2="340" stroke="#e52538" strokeWidth="3" />
                <line x1="300" y1="220" x2="300" y2="340" stroke="#e52538" strokeWidth="3" />
                <line x1="500" y1="220" x2="540" y2="340" stroke="#e52538" strokeWidth="3" />
                {/* Battle Ropes in flight */}
                <path
                  d="M 50,260 Q 150,150 250,260 T 450,260 T 550,260"
                  fill="none"
                  stroke="#e52538"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-black/40 to-transparent flex flex-col justify-end p-5">
              <div className="text-[11px] font-heading uppercase tracking-widest text-[#e52538] font-bold">
                {GALLERY_ITEMS[3].category}
              </div>
              <h3 className="font-heading uppercase text-lg sm:text-xl font-bold text-white tracking-wide">
                {GALLERY_ITEMS[3].title}
              </h3>
              <p className="text-xs text-[#9ba1b0] mt-1 line-clamp-1">
                {GALLERY_ITEMS[3].caption}
              </p>
            </div>

            <div className="absolute top-3 right-3 w-8 h-8 rounded-sm bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#121418] border border-white/20 rounded-sm overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#0b0c0e]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-[#e52538] rounded-full" />
                <h4 className="font-heading uppercase text-lg font-bold text-white tracking-wide">
                  {activeModalItem.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="p-1.5 text-white/60 hover:text-white rounded-sm hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="relative rounded-sm overflow-hidden border border-white/10 mb-4 aspect-[16/9] bg-[#0b0c0e] flex items-center justify-center">
                {activeModalItem.id === 'gal-1' ? (
                  <div className="flex flex-col items-center justify-center p-8 text-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[#e52538] text-5xl sm:text-7xl font-black font-heading drop-shadow-[0_0_20px_rgba(229,37,56,0.9)]">
                        F
                      </span>
                      <span className="text-white text-4xl sm:text-6xl font-bold font-heading tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">
                        ITNESS
                      </span>
                      <div className="w-20 h-20 bg-[#121418] border-2 border-[#e52538] rounded-sm flex items-center justify-center shadow-glow">
                        <svg viewBox="0 0 100 100" className="w-16 h-16 text-white" fill="none">
                          <path
                            d="M44 32 C38 34 30 40 26 48 C23 53 25 59 29 60 C33 61 36 58 38 54 C40 46 44 42 51 42 C58 42 61 46 63 54 C65 58 68 61 72 60 C76 59 78 53 75 48 C71 40 63 34 57 32 Z"
                            fill="#ffffff"
                          />
                          <circle cx="51" cy="22" r="12" fill="#e52538" />
                        </svg>
                      </div>
                      <span className="text-[#e52538] text-5xl sm:text-7xl font-black font-heading drop-shadow-[0_0_20px_rgba(229,37,56,0.9)]">
                        M
                      </span>
                      <span className="text-white text-4xl sm:text-6xl font-bold font-heading tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">
                        ATTERS
                      </span>
                    </div>
                    <div className="text-xs font-mono uppercase tracking-widest text-[#e52538]">
                      Authentic Signboard Tribute · Shivaji Chowk, Ambejogai
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-8 text-[#9ba1b0]">
                    <Eye className="w-12 h-12 text-[#e52538] mx-auto mb-3" />
                    <div className="font-heading uppercase text-xl text-white font-bold">
                      {activeModalItem.zone}
                    </div>
                    <div className="text-sm mt-1">High-resolution inspection view</div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div>
                  <div className="text-xs text-[#9ba1b0]">Zone Location:</div>
                  <div className="font-heading uppercase text-sm font-bold text-white">
                    {activeModalItem.zone}
                  </div>
                  <p className="text-xs text-[#9ba1b0] mt-1 max-w-xl">
                    {activeModalItem.caption}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalItem(null)}
                  className="btn-ghost text-xs py-2 px-4 shrink-0"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
