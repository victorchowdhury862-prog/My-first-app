import { useState, type MouseEvent, type TouchEvent } from 'react';
import { Sparkles, TrendingUp, AlertTriangle, CheckCircle2, ArrowRight, MousePointerClick } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <section id="before-after" className="py-16 md:py-24 bg-white dark:bg-[#0b0f19] border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 text-xs font-bold uppercase tracking-wider border border-rose-200 dark:border-rose-800/80">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Interactive Case Study</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Before vs. After: Anatomy of a +340% CTR Redesign
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Drag the slider below to compare a typical amateur gig cover that repels buyers against our CTR-engineered redesign.
          </p>
        </div>

        {/* Interactive Comparison Slider Frame */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-900 select-none cursor-ew-resize bg-slate-900"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* "AFTER" Image (Full background) */}
            <div className="absolute inset-0">
              <img
                src="/src/assets/images/fiverr_web_design_gig_1789058231654.jpg"
                alt="After Redesign"
                className="w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-extrabold px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>AFTER (5.3% CTR • Page 1)</span>
              </div>
            </div>

            {/* "BEFORE" Image Overlay (Clipped by slider position) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="relative w-full h-full bg-slate-800 flex items-center justify-center p-6 text-center">
                {/* Simulated amateur gig image */}
                <div className="w-full h-full bg-gradient-to-br from-slate-200 via-gray-300 to-slate-400 p-6 flex flex-col justify-between items-center text-slate-800 border-2 border-dashed border-slate-400">
                  <div className="w-full text-left font-sans">
                    <span className="text-xs bg-red-600 text-white font-bold px-2 py-0.5 rounded">
                      VIOLATION: Too much text!
                    </span>
                    <h4 className="text-sm sm:text-lg font-bold text-slate-900 mt-2 leading-tight">
                      I WILL DO WORDPRESS ELEMENTOR WEBSITE DESIGN FOR YOU FAST SPEED CHEAP PRICE 100% GUARANTEE
                    </h4>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-700 w-full text-left bg-white/70 p-2 rounded">
                    <div>• WordPress Installation</div>
                    <div>• Plugins Setup</div>
                    <div>• SEO Optimization</div>
                    <div>• Fast 24 Hour Delivery</div>
                    <div>• Responsive Design</div>
                    <div>• Unlimited Revisions</div>
                  </div>

                  <div className="text-[11px] text-red-600 font-bold bg-white/90 px-3 py-1 rounded-full shadow-xs">
                    ❌ Blurry Text • Low Contrast • Cluttered Layout
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-rose-600 text-white text-xs font-extrabold px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  <span>BEFORE (1.2% CTR • Page 9)</span>
                </div>
              </div>
            </div>

            {/* Slider Dividing Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize z-20 flex items-center justify-center"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-9 h-9 rounded-full bg-white border-2 border-slate-900 shadow-xl flex items-center justify-center text-slate-900 font-bold text-xs">
                ↔
              </div>
            </div>

            {/* Prompt Helper badge */}
            <div className="absolute bottom-3 inset-x-0 mx-auto w-max px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1.5 pointer-events-none">
              <MousePointerClick className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>Drag slider left or right to compare</span>
            </div>
          </div>
        </div>

        {/* 4 Critical Flaws Sellers Make on Fiverr */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6">
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-400 font-black text-sm flex items-center justify-center">
              1
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">The "Flyer" Trap</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Listing 12 bullet points of text. On mobile Fiverr feeds, tiny text becomes unreadable gray noise that buyers skip.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-400 font-black text-sm flex items-center justify-center">
              2
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">Fiverr TOS Violations</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Placing fake "Top Rated Seller" or "5 Star" badges. Fiverr's AI vision flags these and silently suppresses gig ranking.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 font-black text-sm flex items-center justify-center">
              3
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">The 3D Focal Anchor</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Our redesigns use dimensional device mockups and glowing depth to pull the eye immediately to your card.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 font-black text-sm flex items-center justify-center">
              4
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">Under 20% Text Rule</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              We stick strictly to 3–4 high-impact words with optimal contrast, ensuring maximum readability on 4-inch phone screens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
