import { useState, useMemo } from 'react';
import { Search, LayoutGrid, Store, Layers, SlidersHorizontal, Sparkles, Zap, ArrowDown } from 'lucide-react';
import { GigItem, GigCategory, EETopicId } from '../types';
import { EE_TOPICS_LIST } from '../data/eeTopics';
import GigCard from './GigCard';

interface PortfolioGridProps {
  gigs: GigItem[];
  onSelectGig: (gig: GigItem) => void;
  onOpenOrder: () => void;
  onScrollToTopics?: () => void;
}

export default function PortfolioGrid({ gigs, onSelectGig, onOpenOrder, onScrollToTopics }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<GigCategory>('all');
  const [selectedEETopic, setSelectedEETopic] = useState<EETopicId>('all-ee');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'studio' | 'fiverr'>('studio');
  const [showSafeZones, setShowSafeZones] = useState(false);

  const categories: { id: GigCategory; label: string }[] = [
    { id: 'all', label: 'All Showcase' },
    { id: 'electrical', label: '⚡ Electrical & EE Apps' },
    { id: 'medical', label: '💊 Medicine Apps' },
    { id: 'mobile', label: 'Mobile UI/UX' },
    { id: 'web', label: 'Web & Tech' },
    { id: 'logo', label: 'Logo & Branding' },
    { id: 'video', label: 'Video & Animation' },
    { id: 'seo', label: 'SEO & Marketing' },
    { id: 'ecommerce', label: 'E-Commerce' },
  ];

  const filteredGigs = useMemo(() => {
    return gigs.filter((gig) => {
      const matchesCategory = selectedCategory === 'all' || gig.category === selectedCategory;
      const matchesEETopic =
        selectedCategory !== 'electrical' ||
        selectedEETopic === 'all-ee' ||
        gig.eeTopic === selectedEETopic;
      const matchesSearch =
        gig.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        gig.fiverrTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        gig.headlineHook.toLowerCase().includes(searchQuery.toLowerCase()) ||
        gig.clientNiche.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (gig.eeTopicLabel && gig.eeTopicLabel.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesEETopic && matchesSearch;
    });
  }, [gigs, selectedCategory, selectedEETopic, searchQuery]);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-slate-50/60 dark:bg-[#0b0f19]/80 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-800/80">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Proven High-Converting Designs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Fiverr Gig Image Portfolio
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Each design is custom crafted to dominate Fiverr search results, pass automated moderation filters, and trigger immediate buyer clicks.
            </p>
          </div>

          {/* View Mode & Safe-Zone Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Safe zone toggle */}
            <button
              onClick={() => setShowSafeZones(!showSafeZones)}
              className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all cursor-pointer ${
                showSafeZones
                  ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title="Toggle Fiverr safe-zone margins and mobile app crop guides"
            >
              <Layers className="w-4 h-4" />
              <span>{showSafeZones ? 'Hide Safe-Zones' : 'Show Safe-Zones'}</span>
            </button>

            {/* View Switcher: Studio vs Fiverr Search Mockup */}
            <div className="inline-flex rounded-xl bg-slate-200/80 dark:bg-slate-900 p-1 border border-slate-300/80 dark:border-slate-800">
              <button
                onClick={() => setViewMode('studio')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'studio'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Studio View</span>
              </button>

              <button
                onClick={() => setViewMode('fiverr')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'fiverr'
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Store className="w-3.5 h-3.5 text-[#1dbf73]" />
                <span>Fiverr Feed View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-950 shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by gig topic or hook..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-slate-50/50 dark:bg-slate-950"
            />
          </div>
        </div>

        {/* EE Topic-Wise Filter Sub-bar when Electrical category is active */}
        {selectedCategory === 'electrical' && (
          <div className="bg-slate-900 text-white p-4 rounded-2xl border border-slate-800 shadow-md space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Filter by Electrical Engineering Topic:
                </span>
              </div>
              {onScrollToTopics && (
                <button
                  onClick={onScrollToTopics}
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Interactive EE Calculator & Topics Directory</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setSelectedEETopic('all-ee')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedEETopic === 'all-ee'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                All Topics ({gigs.filter((g) => g.category === 'electrical').length})
              </button>
              {EE_TOPICS_LIST.map((topic) => {
                const isSelected = selectedEETopic === topic.id;
                const count = gigs.filter((g) => g.eeTopic === topic.id).length;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedEETopic(topic.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 shadow-sm'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <span>{topic.shortLabel}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-900 text-slate-400'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Informative notification banner when safe zones active */}
        {showSafeZones && (
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 rounded-xl border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-between text-xs text-emerald-900 dark:text-emerald-300 animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
              <span>
                <strong>Safe-Zone Guide Active:</strong> Dashed green lines represent the 70px border padding. Red bottom bar represents the area overlaid by mobile app preview titles. All our designs maintain 100% focal safety!
              </span>
            </div>
            <button
              onClick={() => setShowSafeZones(false)}
              className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline shrink-0 text-[11px]"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Gig Grid */}
        {filteredGigs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredGigs.map((gig) => (
              <GigCard
                key={gig.id}
                gig={gig}
                viewMode={viewMode}
                showSafeZones={showSafeZones}
                onSelect={onSelectGig}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-12 text-center border border-slate-200 dark:border-slate-800 space-y-3">
            <Search className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">No matching gig images found</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Try changing your search keywords or switching category filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#1dbf73] hover:underline"
            >
              Reset all filters
            </button>
          </div>
        )}

        {/* Bottom Portfolio Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">Need a custom cover for your specific gig?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We analyze your top 5 competitors on Fiverr and design 3 variations engineered specifically to beat them in search click share.
            </p>
          </div>
          <button
            onClick={onOpenOrder}
            className="px-5 py-3 rounded-xl bg-[#1dbf73] hover:bg-[#19a463] text-white font-bold text-sm shadow-md transition-all hover:shadow-lg shrink-0 cursor-pointer"
          >
            Order Custom Gig Image
          </button>
        </div>
      </div>
    </section>
  );
}
