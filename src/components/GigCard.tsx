import { useState } from 'react';
import { Eye, TrendingUp, Sparkles, Heart, ShieldCheck, Maximize2, Layers } from 'lucide-react';
import { GigItem } from '../types';

interface GigCardProps {
  gig: GigItem;
  viewMode: 'studio' | 'fiverr';
  showSafeZones: boolean;
  onSelect: (gig: GigItem) => void;
}

export default function GigCard({ gig, viewMode, showSafeZones, onSelect }: GigCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const getSellerBadgeClass = (level: GigItem['sellerLevel']) => {
    switch (level) {
      case 'Top Rated':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case "Fiverr's Choice":
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      case 'Level 2':
        return 'bg-slate-100 text-slate-800 border-slate-300';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <div
      id={`gig-card-${gig.id}`}
      className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer"
      onClick={() => onSelect(gig)}
    >
      {/* Image Container (16:9 Aspect Ratio) */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
        <img
          src={gig.image}
          alt={gig.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Studio View Badge */}
        {viewMode === 'studio' && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold shadow-md">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>{gig.ctrIncrease} CTR</span>
          </div>
        )}

        {/* Fiverr Search Mockup Heart Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white backdrop-blur-xs flex items-center justify-center text-slate-400 hover:text-rose-500 transition-all shadow-sm z-20 cursor-pointer"
          aria-label="Save to list"
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>

        {/* Inspect Overlay on Hover */}
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 pointer-events-none">
          <div className="px-3.5 py-2 rounded-xl bg-white/95 text-slate-900 font-bold text-xs flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Maximize2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Inspect 1280×769 Design</span>
          </div>
        </div>

        {/* Safe-Zone Guide Overlay */}
        {showSafeZones && (
          <div className="absolute inset-0 pointer-events-none z-10">
            {/* 70px margin guideline simulation */}
            <div className="absolute inset-3 sm:inset-4 border border-dashed border-emerald-400/80 rounded-sm">
              <span className="absolute top-1 left-1 px-1 py-0.5 rounded bg-emerald-950/80 text-[9px] font-mono text-emerald-300">
                Safe Margin (70px)
              </span>
            </div>
            {/* Mobile bottom title cover zone */}
            <div className="absolute bottom-0 inset-x-0 h-9 bg-rose-500/20 border-t border-rose-500/40 flex items-center justify-center">
              <span className="text-[10px] font-mono text-white font-bold bg-rose-900/80 px-2 py-0.5 rounded">
                Mobile App Title Safe Zone
              </span>
            </div>
          </div>
        )}

        {/* Category Label Pill */}
        <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-medium border border-white/10">
          {gig.categoryLabel}
        </div>
      </div>

      {/* Card Content: Mode A (Studio Showcase) vs Mode B (Fiverr Search Mockup) */}
      {viewMode === 'studio' ? (
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-600">{gig.clientNiche}</span>
              <span className="font-mono text-emerald-600 font-bold">{gig.dimensions}</span>
            </div>
            <h3 className="font-bold text-base text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
              {gig.title}
            </h3>
            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
              Hook: <span className="font-bold text-slate-800 tracking-wide uppercase">"{gig.headlineHook}"</span>
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-1.5 pt-1 border-t border-slate-100">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Design Strengths</div>
            <div className="text-xs text-slate-600 line-clamp-2">
              {gig.designHighlights[0]}
            </div>
          </div>

          {/* Bottom Bar with Color Swatches & Price */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            {/* Color Palette */}
            <div className="flex items-center gap-1.5">
              {gig.colorPalette.map((col, idx) => (
                <div
                  key={idx}
                  className="w-4 h-4 rounded-full border border-slate-200 shadow-2xs"
                  style={{ backgroundColor: col.hex }}
                  title={`${col.name} (${col.hex})`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">From</span>
              <span className="text-sm font-extrabold text-slate-900">${gig.startingPrice}</span>
            </div>
          </div>
        </div>
      ) : (
        /* Authentically Styled Fiverr Marketplace Search Card */
        <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between space-y-3">
          {/* Seller Profile Line */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={gig.sellerAvatar}
                alt={gig.sellerName}
                className="w-7 h-7 rounded-full object-cover ring-1 ring-slate-200"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-bold text-xs text-slate-900 block leading-tight hover:underline">
                  {gig.sellerName}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">Level 2 Specialist</span>
              </div>
            </div>

            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${getSellerBadgeClass(gig.sellerLevel)}`}>
              {gig.sellerLevel}
            </span>
          </div>

          {/* Gig Title in Fiverr Style */}
          <p className="text-xs text-slate-800 font-medium line-clamp-2 leading-relaxed group-hover:text-emerald-700 transition-colors">
            {gig.fiverrTitle}
          </p>

          {/* Fiverr Rating and Pricing Footer */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1 font-bold text-slate-900">
              <span className="text-amber-500">★</span>
              <span>{gig.rating}</span>
              <span className="text-slate-400 font-normal">({gig.reviewsCount})</span>
            </div>

            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider leading-none">
                Starting at
              </span>
              <span className="text-sm font-extrabold text-slate-900">${gig.startingPrice}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
