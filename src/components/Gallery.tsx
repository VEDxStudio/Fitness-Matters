import React, { useState } from 'react';
import { Maximize2, X, MapPin, Eye, Sparkles, Filter } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';
import { GymImage } from './GymImage';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const categories = ['ALL', 'FACILITY', 'CONDITIONING', 'EQUIPMENT', 'BRAND IDENTITY'];

  const filteredItems = activeFilter === 'ALL'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0b0c0e] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <span className="eyebrow mb-3">VISUAL TOUR</span>
            <h2 className="font-display uppercase text-4xl sm:text-6xl text-white font-black leading-none">
              INSIDE THE <span className="text-gradient-brand">GYM</span>
            </h2>
            <p className="text-sm sm:text-base text-[#9ba1b0] max-w-xl mt-3 font-sans">
              Experience the raw atmosphere of our most equipped strength haven. Heavy steel, rubber flooring, and high-energy music.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-heading uppercase tracking-wider text-[#9ba1b0]">
            <MapPin className="w-4 h-4 text-[#e52538]" />
            <span>Prime Training Facility · Location</span>
          </div>
        </div>

        {/* Interactive Filter Tabs per anti-slop rules (functional buttons with click handlers) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5 text-xs font-heading uppercase tracking-wider text-[#9ba1b0] mr-2">
            <Filter className="w-3.5 h-3.5 text-[#e52538]" />
            <span>Filter Zone:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-sm text-xs font-heading uppercase tracking-wider font-bold transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#e52538] text-white shadow-glow-sm'
                  : 'bg-[#181b22] text-[#9ba1b0] hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredItems.map((item, idx) => {
            const isWidescreen = item.aspect === '16:9';
            const colSpan = isWidescreen ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className={`${colSpan} group relative bg-[#14171e] rounded-sm border border-white/10 overflow-hidden cursor-pointer hover:border-[#e52538] hover:shadow-[0_8px_30px_rgba(229,37,56,0.25)] transition-all duration-300 ${
                  isWidescreen ? 'aspect-[16/9]' : 'aspect-square md:aspect-[4/3] lg:aspect-square'
                }`}
              >
                {/* Real High-Res Photo or Neon Signboard Tribute */}
                {item.photoUrl ? (
                  <GymImage
                    src={item.photoUrl}
                    alt={item.title}
                    className="group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  /* Original Authentic Signboard Tribute with Muscular Mascot */
                  <div className="w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-[#181b24] via-[#0d0e12] to-[#090a0d] relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,37,56,0.25)_0%,transparent_65%)]" />

                    <div className="relative z-10 flex flex-col items-center scale-90 sm:scale-100">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <div className="flex items-baseline font-heading tracking-wider">
                          <span className="text-[#e52538] text-3xl sm:text-5xl font-black drop-shadow-[0_0_15px_rgba(229,37,56,0.9)]">
                            F
                          </span>
                          <span className="text-white text-2xl sm:text-4xl font-bold tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                            ITNESS
                          </span>
                        </div>

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
                        Original Acrylic Signboard & Welcoming Shrine · Location
                      </div>
                    </div>
                  </div>
                )}

                {/* Top Corner Category Badge */}
                <div className="absolute top-3 left-3 bg-[#0b0c0e]/85 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-sm text-[10px] font-heading uppercase tracking-widest text-[#e52538] font-bold z-10">
                  {item.category}
                </div>

                {/* Hover Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-black/40 to-transparent flex flex-col justify-end p-5 z-10">
                  <div className="text-[11px] font-heading uppercase tracking-widest text-[#e52538] font-bold">
                    {item.zone}
                  </div>
                  <h3 className="font-heading uppercase text-lg sm:text-xl font-bold text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9ba1b0] mt-1 line-clamp-1">
                    {item.caption}
                  </p>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-sm bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
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
                <h4 className="font-heading uppercase text-base sm:text-lg font-bold text-white tracking-wide">
                  {activeModalItem.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="p-1.5 text-white/60 hover:text-white rounded-sm hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="relative rounded-sm overflow-hidden border border-white/10 mb-4 aspect-[16/9] bg-[#0b0c0e] flex items-center justify-center">
                {activeModalItem.photoUrl ? (
                  <img
                    src={activeModalItem.photoUrl}
                    alt={activeModalItem.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
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
                      Authentic Signboard Tribute · Location
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div>
                  <div className="text-xs text-[#9ba1b0]">Zone Location:</div>
                  <div className="font-heading uppercase text-sm font-bold text-white">
                    {activeModalItem.zone}
                  </div>
                  <p className="text-xs text-[#9ba1b0] mt-1 max-w-xl font-sans">
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
