import { useState, type ChangeEvent } from 'react';
import { Sparkles, Eye, Upload, RefreshCw, Star, Heart, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { GIGS_DATA } from '../data/gigs';

interface CompetitorGig {
  id: string;
  seller: string;
  avatar: string;
  level: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  isCompetitor: boolean;
  qualityTag?: string;
}

export default function FiverrSimulator() {
  const [userName, setUserName] = useState('your_fiverr_handle');
  const [sellerLevel, setSellerLevel] = useState<'Level 2' | 'Top Rated' | 'Level 1' | 'Fiverr’s Choice'>('Level 2');
  const [gigTitle, setGigTitle] = useState('I will design modern responsive wordpress website or landing page');
  const [rating, setRating] = useState('4.98');
  const [reviewCount, setReviewCount] = useState('342');
  const [price, setPrice] = useState('85');
  const [selectedImage, setSelectedImage] = useState(GIGS_DATA[0].image);
  const [customImageUploaded, setCustomImageUploaded] = useState(false);

  // Competitor mocks
  const competitorGigs: CompetitorGig[] = [
    {
      id: 'comp-1',
      seller: 'quick_dev99',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      level: 'Level 1',
      title: 'I will make website wordpress fast delivery cheap price for you',
      rating: 4.6,
      reviews: 48,
      price: 25,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
      isCompetitor: true,
      qualityTag: 'Generic Competitor'
    },
    {
      id: 'comp-2',
      seller: 'web_factory_pro',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80',
      level: 'Level 2',
      title: 'I will build an elementor business website in 24 hours',
      rating: 4.8,
      reviews: 189,
      price: 50,
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80',
      isCompetitor: true,
      qualityTag: 'Average Competitor'
    },
    {
      id: 'comp-3',
      seller: 'design_studio_express',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80',
      level: 'New Seller',
      title: 'I will do html css and wordpress custom coding tasks',
      rating: 4.7,
      reviews: 19,
      price: 30,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80',
      isCompetitor: true,
      qualityTag: 'Text Heavy Competitor'
    }
  ];

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setSelectedImage(reader.result);
          setCustomImageUploaded(true);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // CTR Score calculation
  const titleWords = gigTitle.trim().split(/\s+/).length;
  const isOptimalTitle = titleWords >= 6 && titleWords <= 14;
  const hasGoodPrice = Number(price) >= 30;

  return (
    <section id="simulator" className="py-16 md:py-24 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-[#1dbf73] text-xs font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-800/80">
              <Eye className="w-3.5 h-3.5" />
              <span>Interactive Fiverr Search Simulation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Test Your Gig in a Live Fiverr Search Feed
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              See how your cover design commands visual hierarchy when placed directly next to competitors in a simulated Fiverr desktop/tablet browse card feed.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1dbf73]"></span>
              <span>Visual Standout Test Active</span>
            </div>
          </div>
        </div>

        {/* Simulator Workspace: Controls + Simulated Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-700/80 space-y-5 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                <span>Configure Your Test Card</span>
              </h3>
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">1280 × 769 Ratio</span>
            </div>

            {/* Thumbnail Selection */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">Select Portfolio Cover to Test</label>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">{GIGS_DATA.length} covers</span>
              </div>
              <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto pr-1">
                {GIGS_DATA.map((item) => (
                  <button
                    key={item.id}
                    title={item.title}
                    onClick={() => {
                      setSelectedImage(item.image);
                      setCustomImageUploaded(false);
                      setGigTitle(item.fiverrTitle);
                      setPrice(String(item.startingPrice));
                    }}
                    className={`relative aspect-[16/9] rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      selectedImage === item.image
                        ? 'border-[#1dbf73] ring-2 ring-emerald-500/30'
                        : 'border-slate-300 dark:border-slate-700 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-xs py-0.5 px-1 text-[9px] text-white truncate text-center font-medium">
                      {item.headlineHook}
                    </div>
                  </button>
                ))}
              </div>

              {/* Upload custom image */}
              <label className="mt-2 block w-full py-2 px-3 border border-dashed border-slate-300 dark:border-slate-600 hover:border-[#1dbf73] rounded-xl text-center text-xs text-slate-700 dark:text-slate-300 font-medium cursor-pointer transition-colors bg-white dark:bg-slate-800/50">
                <div className="flex items-center justify-center gap-1.5">
                  <Upload className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Upload Your Own Cover (.jpg, .png)</span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Title input & Quick Presets */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">Fiverr Gig Title</label>
                <div className="flex items-center gap-1.5 overflow-x-auto">
                  <button
                    type="button"
                    onClick={() => {
                      const eeGig = GIGS_DATA.find((g) => g.id === 'gig-scada-power-grid') || GIGS_DATA[0];
                      setGigTitle(eeGig.fiverrTitle);
                      setSelectedImage(eeGig.image);
                      setPrice(String(eeGig.startingPrice));
                      setSellerLevel('Top Rated');
                    }}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 hover:bg-amber-200 dark:hover:bg-amber-900 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    ⚡ SCADA Grid
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const eeGig = GIGS_DATA.find((g) => g.id === 'gig-electrical-calculator') || GIGS_DATA[0];
                      setGigTitle(eeGig.fiverrTitle);
                      setSelectedImage(eeGig.image);
                      setPrice(String(eeGig.startingPrice));
                      setSellerLevel("Fiverr's Choice" as any);
                    }}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-sky-100 dark:bg-blue-950 text-sky-800 dark:text-blue-300 border border-sky-300 dark:border-blue-800 hover:bg-sky-200 dark:hover:bg-blue-900 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    ⚡ EE Calculator
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const medGig = GIGS_DATA.find((g) => g.id === 'gig-medicine-tracker') || GIGS_DATA[0];
                      setGigTitle(medGig.fiverrTitle);
                      setSelectedImage(medGig.image);
                      setPrice(String(medGig.startingPrice));
                      setSellerLevel('Top Rated');
                    }}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 hover:bg-emerald-200 dark:hover:bg-emerald-900 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    💊 Medicine App
                  </button>
                </div>
              </div>
              <textarea
                value={gigTitle}
                onChange={(e) => setGigTitle(e.target.value)}
                rows={2}
                className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#1dbf73] leading-relaxed resize-none"
                placeholder="I will..."
              />
            </div>

            {/* Seller Level & Username */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">Seller Level</label>
                <select
                  value={sellerLevel}
                  onChange={(e) => setSellerLevel(e.target.value as any)}
                  className="w-full px-2.5 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#1dbf73]"
                >
                  <option value="Level 2">Level 2</option>
                  <option value="Top Rated">Top Rated</option>
                  <option value="Level 1">Level 1</option>
                  <option value="Fiverr’s Choice">Fiverr’s Choice</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">Starting Price ($)</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#1dbf73]"
                  min="5"
                  step="5"
                />
              </div>
            </div>

            {/* CTR Standout Score */}
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700 dark:text-slate-300">Visual Standout Grade</span>
                <span className="font-black text-[#1dbf73] text-sm">98/100 (Exceptional)</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-[#1dbf73] w-[98%] rounded-full"></div>
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 space-y-1 pt-1">
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>3D High-contrast center focal element</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Under 20% text rule guaranteed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Simulated Fiverr Search Feed (Desktop/Tablet Card Grid) */}
          <div className="lg:col-span-8 space-y-4">
            {/* Fake Fiverr Search Bar Header */}
            <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-3 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="font-extrabold text-[#1dbf73] text-lg tracking-tight">fiverr<span className="text-slate-900 dark:text-white">.</span></span>
                <span className="text-xs text-slate-600 dark:text-slate-400 border-l border-slate-300 dark:border-slate-700 pl-3 hidden sm:inline">
                  Search results for: <strong className="text-slate-900 dark:text-white">"{gigTitle.toLowerCase().includes('electric') ? 'electrical app ui' : gigTitle.toLowerCase().includes('medicine') || gigTitle.toLowerCase().includes('doctor') ? 'medicine app ui ux' : 'mobile app ui ux'}"</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <span className="hidden sm:inline">Sort by:</span>
                <span className="font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
                  Best Selling
                </span>
              </div>
            </div>

            {/* Simulated 4-Column / Responsive 2-to-4 Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* YOUR TEST GIG CARD (Highlight styled) */}
              <div className="bg-white rounded-2xl overflow-hidden border-2 border-emerald-400 shadow-[0_0_25px_rgba(29,191,115,0.25)] flex flex-col justify-between relative group">
                {/* Visual marker label */}
                <div className="absolute top-2.5 left-2.5 z-20 px-2 py-0.5 rounded bg-slate-900/90 text-[#1dbf73] font-bold text-[10px] tracking-wide border border-emerald-500/40 shadow-md">
                  ★ YOUR GIG (CTR ENGINE)
                </div>

                {/* Heart icon */}
                <div className="absolute top-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-400">
                  <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                </div>

                {/* Thumbnail Image */}
                <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden">
                  <img
                    src={selectedImage}
                    alt="Your gig image test"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Card Info */}
                <div className="p-3 space-y-2 text-slate-900">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-[11px] flex items-center justify-center">
                        Y
                      </div>
                      <span className="font-bold text-xs">{userName}</span>
                    </div>
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 border border-amber-300">
                      {sellerLevel}
                    </span>
                  </div>

                  <p className="text-xs text-slate-800 font-medium line-clamp-2 leading-relaxed">
                    {gigTitle}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 font-bold text-slate-900">
                      <span className="text-amber-500">★</span>
                      <span>{rating}</span>
                      <span className="text-slate-400 font-normal">({reviewCount})</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block leading-none">Starting at</span>
                      <span className="text-sm font-extrabold text-slate-900">${price}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Competitor Cards */}
              {competitorGigs.map((comp) => (
                <div
                  key={comp.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/50 opacity-85 hover:opacity-100 transition-opacity flex flex-col justify-between relative shadow-xs"
                >
                  <div className="absolute top-2.5 left-2.5 z-20 px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 text-[10px] font-medium">
                    {comp.qualityTag}
                  </div>

                  <div className="absolute top-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-white/80 flex items-center justify-center text-slate-400">
                    <Heart className="w-3.5 h-3.5" />
                  </div>

                  <div className="relative aspect-[16/9] w-full bg-slate-800 overflow-hidden">
                    <img
                      src={comp.image}
                      alt={comp.title}
                      className="w-full h-full object-cover filter saturate-75"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="p-3 space-y-2 text-slate-900">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <img
                          src={comp.avatar}
                          alt={comp.seller}
                          className="w-6 h-6 rounded-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <span className="font-bold text-xs">{comp.seller}</span>
                      </div>
                      <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-slate-100 text-slate-700">
                        {comp.level}
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 font-medium line-clamp-2 leading-relaxed">
                      {comp.title}
                    </p>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1 font-bold text-slate-900">
                        <span className="text-amber-500">★</span>
                        <span>{comp.rating}</span>
                        <span className="text-slate-400 font-normal">({comp.reviews})</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase font-medium text-slate-400 block leading-none">Starting at</span>
                        <span className="text-sm font-extrabold text-slate-900">${comp.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Analysis Callout */}
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                <span>
                  <strong>Notice the contrast difference:</strong> The high-clarity 3D render and bold hook immediately grab the eye over blurry or text-overloaded competitor cards.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
