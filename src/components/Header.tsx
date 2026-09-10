import { useState } from 'react';
import { Eye, ChevronRight, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onOpenOrder: (planId?: string) => void;
  onScrollTo: (elementId: string) => void;
}

export default function Header({ onOpenOrder, onScrollTo }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleNav = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav('hero')}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 dark:bg-slate-800 text-white shadow-sm ring-1 ring-slate-800 dark:ring-slate-700">
              <span className="font-extrabold text-xl tracking-tight text-white">G</span>
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#1dbf73] border-2 border-white dark:border-slate-900 rounded-full"></span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">GigCover</span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/70 text-[#1dbf73] border border-emerald-200 dark:border-emerald-800">
                  STUDIO
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-none">Fiverr Gig Image Specialist</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <button
              onClick={() => handleNav('portfolio')}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer py-1"
            >
              Portfolio
            </button>
            <button
              onClick={() => handleNav('ee-topics')}
              className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors cursor-pointer py-1 flex items-center gap-1.5 text-slate-800 dark:text-amber-300 font-bold"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>⚡ EE Topics Apps</span>
            </button>
            <button
              onClick={() => handleNav('simulator')}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer py-1 flex items-center gap-1 text-slate-700 dark:text-slate-300"
            >
              <Eye className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Live Fiverr Mockup</span>
            </button>
            <button
              onClick={() => handleNav('before-after')}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer py-1"
            >
              Before & After
            </button>
            <button
              onClick={() => handleNav('guidelines')}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer py-1"
            >
              Specs & Safe-Zones
            </button>
            <button
              onClick={() => handleNav('pricing')}
              className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer py-1"
            >
              Packages
            </button>
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Global Theme Switcher Button */}
            <button
              id="header-theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              className="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-slate-800 transition-all cursor-pointer flex items-center gap-2 shadow-2xs group"
            >
              <div className="relative w-4 h-4 flex items-center justify-center">
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 animate-in zoom-in duration-200" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700 group-hover:text-slate-900 animate-in zoom-in duration-200" />
                )}
              </div>
              <span className="text-xs font-bold capitalize">
                {theme === 'dark' ? 'Light' : 'Dark'}
              </span>
            </button>

            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-[#1dbf73] animate-pulse"></span>
              <span>Accepting 3 Orders</span>
            </div>

            <button
              id="header-order-btn"
              onClick={() => onOpenOrder()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1dbf73] hover:bg-[#19a463] text-white text-sm font-bold shadow-sm transition-all hover:shadow hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Order Gig Image</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu toggle & quick theme switcher */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="header-mobile-theme-toggle-quick"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-3 pb-5 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          {/* Theme switcher toggle bar for mobile */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
              {theme === 'dark' ? (
                <Moon className="w-4 h-4 text-sky-400" />
              ) : (
                <Sun className="w-4 h-4 text-amber-500" />
              )}
              <span>Appearance Mode:</span>
            </div>
            <button
              id="mobile-theme-switch-row"
              onClick={toggleTheme}
              className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 text-xs font-bold text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700 flex items-center gap-1.5 shadow-2xs cursor-pointer"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Switch to Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-slate-600" />
                  <span>Switch to Dark</span>
                </>
              )}
            </button>
          </div>

          <button
            onClick={() => handleNav('portfolio')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
          >
            Portfolio Gallery
          </button>
          <button
            onClick={() => handleNav('ee-topics')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-bold text-slate-900 dark:text-white bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100/80 dark:hover:bg-amber-950/60 flex items-center justify-between border border-amber-200/60 dark:border-amber-900/50"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>⚡ EE Topics Apps Directory</span>
            </span>
            <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200">7 Branches</span>
          </button>
          <button
            onClick={() => handleNav('simulator')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 flex items-center justify-between"
          >
            <span>Live Fiverr Mockup Simulator</span>
            <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-[#1dbf73]">Interactive</span>
          </button>
          <button
            onClick={() => handleNav('before-after')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
          >
            Before & After CTR Case Studies
          </button>
          <button
            onClick={() => handleNav('guidelines')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
          >
            Fiverr Safe-Zone & 20% Text Specs
          </button>
          <button
            onClick={() => handleNav('pricing')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
          >
            Pricing & Packages
          </button>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder();
              }}
              className="w-full py-2.5 rounded-xl bg-[#1dbf73] text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Order Gig Image Cover</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

