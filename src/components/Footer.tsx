import { ShieldCheck, Award, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 text-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 dark:bg-slate-800 border border-slate-700 flex items-center justify-center font-black text-white text-base">
                G
              </div>
              <span className="font-extrabold text-base text-slate-900 dark:text-white tracking-tight">GigCover Studio</span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                PRO CERTIFIED
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed max-w-sm">
              Helping freelance sellers on Fiverr skyrocket their impressions and conversion rates with scientifically engineered 1280×769 px thumbnail covers.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold pt-1">
              <span className="w-2 h-2 rounded-full bg-[#1dbf73] animate-pulse"></span>
              <span>100% Fiverr TOS & 20% Text Rule Guaranteed</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => onScrollTo('portfolio')}
                className="text-left text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                Gig Portfolio
              </button>
              <button
                onClick={() => onScrollTo('simulator')}
                className="text-left text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                Fiverr Simulator
              </button>
              <button
                onClick={() => onScrollTo('before-after')}
                className="text-left text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                Before & After CTR
              </button>
              <button
                onClick={() => onScrollTo('guidelines')}
                className="text-left text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                Safe-Zone Specs
              </button>
              <button
                onClick={() => onScrollTo('pricing')}
                className="text-left text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                Packages & Pricing
              </button>
            </div>
          </div>

          {/* Scroll to Top */}
          <div className="md:col-span-3 flex md:justify-end items-start">
            <button
              onClick={() => onScrollTo('hero')}
              className="p-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} GigCover Studio. Designed for ambitious Fiverr freelancers and digital agencies worldwide.
          </p>
          <p className="text-slate-500">
            Fiverr is a trademark of Fiverr International Ltd. Independent design agency.
          </p>
        </div>
      </div>
    </footer>
  );
}
