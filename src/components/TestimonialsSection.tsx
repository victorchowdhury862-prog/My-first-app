import { Star, ShieldCheck, TrendingUp, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/gigs';

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0b0f19] border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-200 dark:border-amber-800/80">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Verified Fiverr Sellers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Sellers Say After the CTR Upgrade
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Real feedback from Level 2 and Top Rated sellers who upgraded their gig images to rank on page 1 of search.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-6 shadow-xs hover:shadow-md transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-[11px] font-bold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    <span>{item.ctrBeforeAfter}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-500/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-1">
                    <span>{item.author}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1dbf73]" />
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{item.role}</p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
