import { TrendingUp, CheckCircle2, ShieldAlert, Sparkles, ArrowDown, Eye, Layers } from 'lucide-react';

interface HeroProps {
  onScrollTo: (id: string) => void;
  onOpenOrder: () => void;
}

export default function Hero({ onScrollTo, onOpenOrder }: HeroProps) {
  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-radial from-emerald-50/40 via-white to-slate-50/80 dark:from-emerald-950/20 dark:via-[#0b0f19] dark:to-slate-950 transition-colors duration-200">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 dark:opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-[#148e54] dark:text-emerald-400 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#1dbf73]" />
              <span>THE #1 SECRET TO FIVERR FIRST-PAGE RANKINGS IS CTR</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08]">
              Fiverr Gig Images Engineered to <span className="text-[#1dbf73] underline decoration-emerald-300 dark:decoration-emerald-600 decoration-wavy decoration-2">3X Your Clicks</span> & Orders.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl">
              Fiverr algorithms prioritize gigs that convert impressions into clicks. We design high-contrast, professional gig thumbnails that stop buyers mid-scroll, pass the 20% text rule, and look flawless across mobile apps.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-explore-btn"
                onClick={() => onScrollTo('portfolio')}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 text-white font-bold text-sm shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2"
              >
                <span>View Portfolio Showcase</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                id="hero-simulator-btn"
                onClick={() => onScrollTo('simulator')}
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-bold text-sm shadow-xs transition-all hover:border-slate-400 dark:hover:border-slate-600 cursor-pointer flex items-center gap-2"
              >
                <Eye className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Test in Live Fiverr Search Mockup</span>
              </button>
            </div>

            {/* Value Checkpoints */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-200/80 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1dbf73] shrink-0" />
                <span>1280 × 769 px Native Ratio</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1dbf73] shrink-0" />
                <span>Mobile App Safe-Zone Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1dbf73] shrink-0" />
                <span>Under 20% Text Rule Safe</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Outer Glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500/20 via-teal-400/10 to-indigo-500/20 rounded-3xl blur-2xl -z-10" />

            {/* Featured Gig Card Preview */}
            <div className="relative rounded-2xl bg-white dark:bg-slate-900 p-3.5 shadow-xl border border-slate-200/90 dark:border-slate-800 space-y-3">
              {/* Card Header simulating Fiverr marketplace tag */}
              <div className="flex items-center justify-between px-1 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1dbf73]"></span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">Fiverr Algorithm Benchmark</span>
                </div>
                <div className="flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 font-bold px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800 text-[11px]">
                  <TrendingUp className="w-3 h-3 text-[#1dbf73]" />
                  <span>+340% CTR Lift</span>
                </div>
              </div>

              {/* Main Image Frame (16:9) */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-inner border border-slate-200 dark:border-slate-700 bg-slate-900 group">
                <img
                  src="/src/assets/images/fiverr_web_design_gig_1789058231654.jpg"
                  alt="High converting Fiverr web design gig cover"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Safe zone overlay badge */}
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-slate-900/85 backdrop-blur-xs text-white text-[10px] font-bold tracking-wide flex items-center gap-1 shadow-sm">
                  <Layers className="w-3 h-3 text-emerald-400" />
                  <span>1280 × 769 px</span>
                </div>

                {/* Fiverr favorite button mock */}
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xs flex items-center justify-center text-slate-400 shadow-sm">
                  <svg className="w-4 h-4 fill-rose-500 text-rose-500" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>

                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-medium border border-white/10">
                  <span className="flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Verified 100% Mobile Safe
                  </span>
                  <span className="text-emerald-300 font-bold">0% Text Overlap</span>
                </div>
              </div>

              {/* Fiverr Gig Mock Listing Metadata */}
              <div className="px-1 pt-1 space-y-2">
                <div className="flex items-center gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt="Seller"
                    className="w-6 h-6 rounded-full object-cover ring-1 ring-slate-200 dark:ring-slate-700"
                    referrerPolicy="no-referrer"
                  />
                  <span className="font-bold text-xs text-slate-800 dark:text-slate-200">alex_webcraft</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-50 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 font-bold border border-amber-200 dark:border-amber-800">
                    Top Rated
                  </span>
                </div>

                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium line-clamp-2 leading-relaxed">
                  I will design modern responsive wordpress website or landing page
                </p>

                <div className="flex items-center justify-between pt-1 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <div className="flex items-center gap-1 font-bold text-slate-900 dark:text-white">
                    <span className="text-amber-500">★</span>
                    <span>4.98</span>
                    <span className="text-slate-400 font-normal">(684)</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block uppercase font-medium">Starting at</span>
                    <span className="font-extrabold text-sm text-slate-900 dark:text-white">$85</span>
                  </div>
                </div>
              </div>

              {/* Quick Stat Bar */}
              <div className="bg-slate-50 dark:bg-slate-950/80 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-medium">
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase">Before</span>
                  <span className="text-rose-600 dark:text-rose-400 font-bold">1.2% CTR</span>
                </div>
                <div className="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase">After Cover</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">5.3% CTR</span>
                </div>
                <div className="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase">Monthly Orders</span>
                  <span className="text-slate-900 dark:text-white font-bold">3.8x Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Metric Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200/90 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">850+</div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Fiverr Covers Crafted</p>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-[#1dbf73] tracking-tight">+340%</div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Avg. Click-Through Surge</p>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">4.98 ★</div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Seller Satisfaction</p>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight">24h</div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Express Turnaround</p>
          </div>
        </div>
      </div>
    </section>
  );
}
