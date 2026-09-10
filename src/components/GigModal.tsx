import { useEffect, useState } from 'react';
import { X, CheckCircle2, TrendingUp, Layers, Palette, FileCode2, Star, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import { GigItem } from '../types';

interface GigModalProps {
  gig: GigItem | null;
  onClose: () => void;
  onOrderStyle: (gig: GigItem) => void;
}

export default function GigModal({ gig, onClose, onOrderStyle }: GigModalProps) {
  const [showSafeZone, setShowSafeZone] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!gig) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh] transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-slate-950/60">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              {gig.categoryLabel}
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">{gig.dimensions}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSafeZone(!showSafeZone)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border ${
                showSafeZone
                  ? 'bg-emerald-600 text-white border-emerald-700'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{showSafeZone ? 'Hide Safe Zone' : 'Test Safe Zone'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200/80 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8">
          {/* Main Visual Showcase (16:9) */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 bg-slate-950">
            <img
              src={gig.image}
              alt={gig.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* Live Safe-Zone Guide Overlay */}
            {showSafeZone && (
              <div className="absolute inset-0 pointer-events-none z-20">
                {/* 70px border guide */}
                <div className="absolute inset-5 sm:inset-7 border-2 border-dashed border-emerald-400 rounded-sm">
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-emerald-950/90 text-[10px] font-mono font-bold text-emerald-300 shadow-sm">
                    Fiverr 70px Clearance Boundary
                  </span>
                </div>
                {/* Bottom title bar overlay simulation */}
                <div className="absolute bottom-0 inset-x-0 h-12 bg-rose-500/25 border-t-2 border-rose-500 flex items-center justify-center">
                  <span className="text-xs font-mono text-white font-bold bg-rose-950/90 px-3 py-1 rounded">
                    Mobile Title & Heart Button Safe Margin
                  </span>
                </div>
              </div>
            )}

            {/* Performance Stamp */}
            <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold flex items-center gap-2 border border-white/15 shadow-md">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>CTR Impact: <strong className="text-emerald-400">{gig.ctrIncrease}</strong></span>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Engineering & Conversion Strategy */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{gig.title}</h2>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                  Fiverr Gig Hook: <strong className="text-slate-800 dark:text-slate-200">"{gig.headlineHook}"</strong>
                </p>
              </div>

              {/* CTR Before / After Breakdown */}
              <div className="bg-slate-50 dark:bg-slate-950/60 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Before Redesign</span>
                  <span className="text-base font-bold text-rose-600 block">{gig.clicksBeforeAfter.before}</span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Amateur text-heavy graphic with low search contrast</p>
                </div>
                <div className="space-y-1 border-l border-slate-200 dark:border-slate-800 pl-4">
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block">After GigCover Redesign</span>
                  <span className="text-base font-bold text-emerald-600 block">{gig.clicksBeforeAfter.after}</span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Instant 3D visual anchor + 100% mobile safe-zone</p>
                </div>
              </div>

              {/* Conversion Strengths */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Why This Design Converts</span>
                </h3>
                <ul className="space-y-2">
                  {gig.designHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Client Testimonial */}
              {gig.testimonial && (
                <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500 text-xs">
                      {[...Array(gig.testimonial.stars)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      {gig.testimonial.author} ({gig.testimonial.country})
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 italic">"{gig.testimonial.comment}"</p>
                </div>
              )}
            </div>

            {/* Right: Technical Specs, Deliverables & CTA */}
            <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-slate-200 dark:lg:border-slate-800 lg:pl-8">
              {/* Color Psychology */}
              <div className="space-y-2.5">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                  <span>Color Psychology Palette</span>
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {gig.colorPalette.map((col, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 text-xs">
                      <div className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-700 shrink-0" style={{ backgroundColor: col.hex }} />
                      <div className="truncate">
                        <span className="block font-bold text-slate-800 dark:text-slate-200 text-[11px] truncate">{col.name}</span>
                        <span className="block font-mono text-[10px] text-slate-400">{col.hex}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables Included */}
              <div className="space-y-2.5">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <FileCode2 className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                  <span>Package Deliverables</span>
                </h3>
                <div className="space-y-1.5">
                  {gig.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Box */}
              <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-4 shadow-lg border border-slate-800">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-bold block">
                    Tailored For Your Niche
                  </span>
                  <h4 className="text-lg font-bold">Want a design like this for your gig?</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Delivered in 24 hours. Includes 3 A/B test variations to ensure maximum click-through rate.
                  </p>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onOrderStyle(gig);
                  }}
                  className="w-full py-3 rounded-xl bg-[#1dbf73] hover:bg-[#19a463] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all hover:shadow cursor-pointer"
                >
                  <span>Order Design in this Style</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
