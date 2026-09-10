import { useState, useMemo } from 'react';
import {
  Zap,
  Cpu,
  Activity,
  Sun,
  FileCode,
  CircuitBoard,
  Wrench,
  Calculator,
  Layers,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Tag,
  Users
} from 'lucide-react';
import { EE_TOPICS_LIST, EETopicDefinition } from '../data/eeTopics';
import { GIGS_DATA } from '../data/gigs';
import { GigItem, EETopicId } from '../types';

interface EETopicsExplorerProps {
  onSelectGig: (gig: GigItem) => void;
  onOrderStyle: (gig: GigItem) => void;
  onTestInSimulator?: (gig: GigItem) => void;
  onFilterPortfolioByTopic?: (topicId: EETopicId) => void;
}

export default function EETopicsExplorer({
  onSelectGig,
  onOrderStyle,
  onTestInSimulator,
  onFilterPortfolioByTopic
}: EETopicsExplorerProps) {
  const [activeTopicId, setActiveTopicId] = useState<EETopicId>('power-systems');

  // Interactive Calculator State
  // 1. Transformer
  const [vPrimary, setVPrimary] = useState<number>(11000);
  const [nPrimary, setNPrimary] = useState<number>(2000);
  const [nSecondary, setNSecondary] = useState<number>(400);

  // 2. Motor
  const [frequency, setFrequency] = useState<number>(60);
  const [poles, setPoles] = useState<number>(4);
  const [actualRpm, setActualRpm] = useState<number>(1740);

  // 3. 3-Phase Power
  const [vLine, setVLine] = useState<number>(480);
  const [iLine, setILine] = useState<number>(65);
  const [powerFactor, setPowerFactor] = useState<number>(0.88);

  // 4. Solar & EV
  const [panelKw, setPanelKw] = useState<number>(8.5);
  const [sunHours, setSunHours] = useState<number>(5.2);
  const [batteryKwh, setBatteryKwh] = useState<number>(13.5);

  // 5. Voltage Drop
  const [vdAmps, setVdAmps] = useState<number>(20);
  const [vdLength, setVdLength] = useState<number>(120);
  const [selectedWireAwg, setSelectedWireAwg] = useState<number>(12); // 12 AWG = 6530 CM

  // 6. LED Resistor
  const [sourceVolts, setSourceVolts] = useState<number>(3.3);
  const [ledVf, setLedVf] = useState<number>(2.1); // Red/Amber
  const [ledCurrentMa, setLedCurrentMa] = useState<number>(15);

  const activeTopic = useMemo(() => {
    return EE_TOPICS_LIST.find((t) => t.id === activeTopicId) || EE_TOPICS_LIST[0];
  }, [activeTopicId]);

  const activeGigs = useMemo(() => {
    return GIGS_DATA.filter((g) => activeTopic.gigIds.includes(g.id));
  }, [activeTopic]);

  // Calculations
  // Transformer
  const vSecondary = useMemo(() => {
    if (nPrimary <= 0) return 0;
    return Math.round((vPrimary * (nSecondary / nPrimary)) * 10) / 10;
  }, [vPrimary, nPrimary, nSecondary]);

  // Motor
  const synchronousSpeed = useMemo(() => {
    if (poles <= 0) return 0;
    return Math.round((120 * frequency) / poles);
  }, [frequency, poles]);

  const motorSlip = useMemo(() => {
    if (synchronousSpeed <= 0) return 0;
    const slip = ((synchronousSpeed - actualRpm) / synchronousSpeed) * 100;
    return Math.max(0, Math.round(slip * 10) / 10);
  }, [synchronousSpeed, actualRpm]);

  // 3-Phase Power
  const apparentPowerKva = useMemo(() => {
    return Math.round(((Math.sqrt(3) * vLine * iLine) / 1000) * 10) / 10;
  }, [vLine, iLine]);

  const activePowerKw = useMemo(() => {
    return Math.round((apparentPowerKva * powerFactor) * 10) / 10;
  }, [apparentPowerKva, powerFactor]);

  const reactivePowerKvar = useMemo(() => {
    const sinTheta = Math.sqrt(Math.max(0, 1 - powerFactor * powerFactor));
    return Math.round((apparentPowerKva * sinTheta) * 10) / 10;
  }, [apparentPowerKva, powerFactor]);

  // Solar
  const dailySolarKwh = useMemo(() => {
    return Math.round((panelKw * sunHours * 0.78) * 10) / 10;
  }, [panelKw, sunHours]);

  const batteryChargeHours = useMemo(() => {
    if (panelKw <= 0) return 0;
    return Math.round((batteryKwh / (panelKw * 0.8)) * 10) / 10;
  }, [batteryKwh, panelKw]);

  // Voltage Drop
  // CM for AWG: 14: 4110, 12: 6530, 10: 10380, 8: 16510, 6: 26240, 4: 41740
  const awgMap: Record<number, number> = {
    14: 4110,
    12: 6530,
    10: 10380,
    8: 16510,
    6: 26240,
    4: 41740
  };
  const cmVal = awgMap[selectedWireAwg] || 6530;
  const voltageDropVolts = useMemo(() => {
    const kCopper = 12.9;
    const drop = (2 * kCopper * vdAmps * vdLength) / cmVal;
    return Math.round(drop * 100) / 100;
  }, [vdAmps, vdLength, cmVal]);
  const voltageDropPercent = useMemo(() => {
    return Math.round((voltageDropVolts / 120) * 100 * 10) / 10;
  }, [voltageDropVolts]);

  // LED Resistor
  const resistorOhms = useMemo(() => {
    if (ledCurrentMa <= 0) return 0;
    const drop = Math.max(0, sourceVolts - ledVf);
    const ohms = (drop / (ledCurrentMa / 1000));
    return Math.round(ohms);
  }, [sourceVolts, ledVf, ledCurrentMa]);

  const resistorMilliWatts = useMemo(() => {
    const currentA = ledCurrentMa / 1000;
    const mw = currentA * currentA * resistorOhms * 1000;
    return Math.round(mw);
  }, [ledCurrentMa, resistorOhms]);

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-4 h-4" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4" />;
      case 'Activity':
        return <Activity className="w-4 h-4" />;
      case 'Sun':
        return <Sun className="w-4 h-4" />;
      case 'FileCode':
        return <FileCode className="w-4 h-4" />;
      case 'CircuitBoard':
        return <CircuitBoard className="w-4 h-4" />;
      case 'Wrench':
      default:
        return <Wrench className="w-4 h-4" />;
    }
  };

  return (
    <section id="ee-topics" className="py-16 md:py-24 bg-slate-50/70 dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>Electrical Engineering Topics-Wise Directory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Electrical Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-sky-600 dark:from-amber-400 dark:via-orange-300 dark:to-sky-400">Topics-Wise Apps</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Explore specialized mobile & tablet UI designs custom-tailored for each fundamental branch of electrical engineering. Each topic includes dedicated Fiverr gig covers, core academic concepts, mobile architecture, and an interactive engineering formula simulator.
            </p>
          </div>

          {/* Quick Portfolio Bridge Button */}
          {onFilterPortfolioByTopic && (
            <button
              onClick={() => onFilterPortfolioByTopic('all-ee')}
              className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs font-bold inline-flex items-center gap-2 transition-colors cursor-pointer shrink-0 shadow-xs"
            >
              <span>View All Electrical Apps in Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            </button>
          )}
        </div>

        {/* Topic Tabs Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5">
          {EE_TOPICS_LIST.map((topic) => {
            const isActive = activeTopicId === topic.id;
            const gigCount = GIGS_DATA.filter((g) => topic.gigIds.includes(g.id)).length;

            return (
              <button
                key={topic.id}
                onClick={() => setActiveTopicId(topic.id)}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2.5 relative ${
                  isActive
                    ? 'bg-white dark:bg-slate-800/95 border-amber-500/60 dark:border-amber-400/60 shadow-md dark:shadow-lg shadow-amber-500/5 ring-1 ring-amber-500/30 dark:ring-amber-400/30'
                    : 'bg-white/70 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/70 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="p-1.5 rounded-lg text-white"
                    style={{ backgroundColor: `${topic.color}25`, color: topic.color }}
                  >
                    {getTopicIcon(topic.iconName)}
                  </div>
                  <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                    {gigCount} {gigCount === 1 ? 'App' : 'Apps'}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-snug line-clamp-1">
                    {topic.shortLabel}
                  </h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {topic.label.split('&')[1]?.trim() || topic.label}
                  </p>
                </div>
                {isActive && (
                  <div
                    className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                    style={{ backgroundColor: topic.color }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Topic Detailed Showcase Card */}
        <div className="bg-white dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700/80 rounded-3xl p-6 lg:p-8 space-y-8 shadow-sm">
          {/* Topic Title & Subtitle */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-700/70 pb-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider"
                  style={{ backgroundColor: `${activeTopic.color}20`, color: activeTopic.color }}
                >
                  Topic #{EE_TOPICS_LIST.findIndex((t) => t.id === activeTopic.id) + 1}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Electrical Engineering Branch</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {activeTopic.label}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl">
                {activeTopic.tagline}
              </p>
            </div>

            {/* Topic Action Pills */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="text-right hidden sm:block">
                <p className="text-xs text-slate-500 dark:text-slate-400">Available UI Showcase</p>
                <p className="text-sm font-bold text-amber-600 dark:text-amber-400">{activeGigs.length} Tested Gig Covers</p>
              </div>
            </div>
          </div>

          {/* Core Layout: Left Side (Topic Gigs & Cards) + Right Side (Interactive Formula & App Architecture) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Topic Gig Showcase (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    Fiverr Gig Covers in this Topic
                  </h4>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">Click cover to inspect</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {activeGigs.map((gig) => (
                  <div
                    key={gig.id}
                    className="group bg-slate-50 dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden flex flex-col transition-all hover:border-slate-400 dark:hover:border-slate-500 hover:shadow-lg dark:hover:shadow-black/40"
                  >
                    {/* Thumbnail Image */}
                    <div
                      onClick={() => onSelectGig(gig)}
                      className="relative aspect-video bg-slate-950 overflow-hidden cursor-pointer"
                    >
                      <img
                        src={gig.image}
                        alt={gig.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-xs text-[11px] font-bold text-emerald-400 border border-emerald-500/40">
                        {gig.ctrIncrease} CTR
                      </div>
                      <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-xs text-[10px] font-mono text-slate-300">
                        1280 × 769 (16:9)
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                          <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400">{gig.sellerLevel}</span>
                          <span className="font-semibold text-slate-700 dark:text-slate-300">From ${gig.startingPrice}</span>
                        </div>
                        <h5
                          onClick={() => onSelectGig(gig)}
                          className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors cursor-pointer line-clamp-2"
                        >
                          {gig.title}
                        </h5>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                          "{gig.fiverrTitle}"
                        </p>
                      </div>

                      {/* Design Highlight & Action Buttons */}
                      <div className="space-y-2.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 italic line-clamp-1">
                          💡 {gig.designHighlights[0]}
                        </p>

                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => onSelectGig(gig)}
                            className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer border border-slate-200 dark:border-slate-700"
                          >
                            <ExternalLink className="w-3 h-3 text-slate-400" />
                            <span>Inspect Specs</span>
                          </button>
                          <button
                            onClick={() => onOrderStyle(gig)}
                            className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer shadow-xs"
                          >
                            <span>Order Style</span>
                          </button>
                        </div>

                        {onTestInSimulator && (
                          <button
                            onClick={() => onTestInSimulator(gig)}
                            className="w-full py-1 text-center text-[11px] text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-300 cursor-pointer transition-colors"
                          >
                            Test live in Fiverr Search Simulator →
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Topic Architecture & Buyer Insights */}
              <div className="bg-slate-50/80 dark:bg-slate-900/60 rounded-2xl p-5 border border-slate-200 dark:border-slate-700/60 space-y-4">
                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-300 text-xs font-bold uppercase tracking-wider">
                  <Users className="w-4 h-4 text-sky-500 dark:text-sky-400" />
                  <span>Target Marketplace Buyers & Demand</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block mb-1 font-semibold">Typical High-Ticket Buyers:</span>
                    <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                      {activeTopic.targetBuyers.map((b, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-amber-500 dark:text-amber-400 font-bold">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-slate-500 dark:text-slate-400 block mb-1 font-semibold">High-Converting Fiverr Tags:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeTopic.fiverrSearchKeywords.map((kw, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono text-[10px]"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3">
                      <span className="text-slate-500 dark:text-slate-400 block font-semibold mb-1">Recommended Thumbnail Palette:</span>
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                        {activeTopic.recommendedColorTheory}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Engineering Simulator & App Feature Blueprint (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Interactive Formula & Calculator Widget */}
              <div className="bg-slate-50 dark:bg-slate-900/90 rounded-2xl border border-amber-500/30 p-5 space-y-4 shadow-sm dark:shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                        Topic Engineering Simulator
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">{activeTopic.calculator.title}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-800 text-amber-700 dark:text-amber-300 border border-slate-300 dark:border-slate-700">
                    Live Math
                  </span>
                </div>

                {/* Formula Header */}
                <div className="bg-white dark:bg-slate-950/80 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-mono text-xs text-amber-700 dark:text-amber-400 text-center tracking-wide">
                  {activeTopic.calculator.formulaDisplay}
                </div>

                {/* Dynamic Inputs based on active topic */}
                {activeTopic.calculator.type === 'transformer' && (
                  <div className="space-y-3 text-xs">
                    <div className="space-y-1">
                      <div className="flex justify-between text-slate-700 dark:text-slate-300">
                        <span>Primary Voltage (V_pri)</span>
                        <span className="font-mono text-amber-600 dark:text-amber-400 font-bold">{vPrimary.toLocaleString()} V</span>
                      </div>
                      <input
                        type="range"
                        min="1000"
                        max="33000"
                        step="500"
                        value={vPrimary}
                        onChange={(e) => setVPrimary(Number(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 block mb-1">Primary Turns (N_p)</span>
                        <input
                          type="number"
                          value={nPrimary}
                          onChange={(e) => setNPrimary(Math.max(1, Number(e.target.value)))}
                          className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1 text-slate-900 dark:text-white font-mono text-xs"
                        />
                      </div>
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 block mb-1">Secondary Turns (N_s)</span>
                        <input
                          type="number"
                          value={nSecondary}
                          onChange={(e) => setNSecondary(Math.max(1, Number(e.target.value)))}
                          className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1 text-slate-900 dark:text-white font-mono text-xs"
                        />
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Calculated Secondary Voltage:</span>
                        <span className="text-xl font-mono font-extrabold text-slate-900 dark:text-white">
                          {vSecondary.toLocaleString()} V
                        </span>
                      </div>
                      <span className="text-xs px-2 py-1 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 font-semibold">
                        Turns Ratio: {(nPrimary / (nSecondary || 1)).toFixed(2)} : 1
                      </span>
                    </div>
                  </div>
                )}

                {activeTopic.calculator.type === 'motor' && (
                  <div className="space-y-3 text-xs">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 block mb-1">Grid Frequency (Hz)</span>
                        <div className="flex gap-2">
                          {[50, 60].map((hz) => (
                            <button
                              key={hz}
                              onClick={() => setFrequency(hz)}
                              className={`flex-1 py-1 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                                frequency === hz
                                  ? 'bg-sky-600 text-white border-sky-500'
                                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                              }`}
                            >
                              {hz} Hz
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 block mb-1">Stator Poles (P)</span>
                        <select
                          value={poles}
                          onChange={(e) => setPoles(Number(e.target.value))}
                          className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2 py-1 text-slate-900 dark:text-white font-mono text-xs"
                        >
                          <option value={2}>2 Poles (3,600 / 3,000 RPM)</option>
                          <option value={4}>4 Poles (1,800 / 1,500 RPM)</option>
                          <option value={6}>6 Poles (1,200 / 1,000 RPM)</option>
                          <option value={8}>8 Poles (900 / 750 RPM)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-slate-700 dark:text-slate-300">
                        <span>Rotor Actual Speed (N)</span>
                        <span className="font-mono text-sky-600 dark:text-sky-400 font-bold">{actualRpm} RPM</span>
                      </div>
                      <input
                        type="range"
                        min="500"
                        max={synchronousSpeed}
                        value={actualRpm}
                        onChange={(e) => setActualRpm(Number(e.target.value))}
                        className="w-full accent-sky-500 cursor-pointer"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Synchronous Speed:</span>
                        <span className="text-lg font-mono font-bold text-slate-900 dark:text-white">{synchronousSpeed} RPM</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Rotor Slip %:</span>
                        <span className="text-lg font-mono font-bold text-sky-600 dark:text-sky-400">{motorSlip}%</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTopic.calculator.type === 'powerFactor' && (
                  <div className="space-y-3 text-xs">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 block mb-1">Line Voltage (V_L)</span>
                        <input
                          type="number"
                          value={vLine}
                          onChange={(e) => setVLine(Number(e.target.value))}
                          className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1 text-slate-900 dark:text-white font-mono text-xs"
                        />
                      </div>
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 block mb-1">Line Current (I_L)</span>
                        <input
                          type="number"
                          value={iLine}
                          onChange={(e) => setILine(Number(e.target.value))}
                          className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1 text-slate-900 dark:text-white font-mono text-xs"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-slate-700 dark:text-slate-300">
                        <span>Power Factor (cos φ)</span>
                        <span className="font-mono text-rose-600 dark:text-rose-400 font-bold">{powerFactor}</span>
                      </div>
                      <input
                        type="range"
                        min="0.5"
                        max="1.0"
                        step="0.01"
                        value={powerFactor}
                        onChange={(e) => setPowerFactor(Number(e.target.value))}
                        className="w-full accent-rose-500 cursor-pointer"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center">
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Active P</span>
                        <span className="text-sm font-mono font-bold text-emerald-600 dark:text-emerald-400">{activePowerKw} kW</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center">
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Reactive Q</span>
                        <span className="text-sm font-mono font-bold text-amber-600 dark:text-amber-400">{reactivePowerKvar} kVAR</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center">
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Apparent S</span>
                        <span className="text-sm font-mono font-bold text-sky-600 dark:text-sky-400">{apparentPowerKva} kVA</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTopic.calculator.type === 'solar' && (
                  <div className="space-y-3 text-xs">
                    <div className="space-y-1">
                      <div className="flex justify-between text-slate-700 dark:text-slate-300">
                        <span>Solar Array Capacity</span>
                        <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">{panelKw} kWp</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="25"
                        step="0.5"
                        value={panelKw}
                        onChange={(e) => setPanelKw(Number(e.target.value))}
                        className="w-full accent-emerald-500 cursor-pointer"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 block mb-1">Peak Sun Hours / Day</span>
                        <input
                          type="number"
                          step="0.1"
                          value={sunHours}
                          onChange={(e) => setSunHours(Number(e.target.value))}
                          className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1 text-slate-900 dark:text-white font-mono text-xs"
                        />
                      </div>
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 block mb-1">Battery Size (kWh)</span>
                        <input
                          type="number"
                          step="0.5"
                          value={batteryKwh}
                          onChange={(e) => setBatteryKwh(Number(e.target.value))}
                          className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-1 text-slate-900 dark:text-white font-mono text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Daily Generation:</span>
                        <span className="text-lg font-mono font-bold text-emerald-600 dark:text-emerald-400">{dailySolarKwh} kWh/day</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Battery Full Charge:</span>
                        <span className="text-lg font-mono font-bold text-amber-600 dark:text-amber-400">~{batteryChargeHours} hrs</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTopic.calculator.type === 'voltageDrop' && (
                  <div className="space-y-3 text-xs">
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 block mb-1">Load Current (A)</span>
                        <input
                          type="number"
                          value={vdAmps}
                          onChange={(e) => setVdAmps(Number(e.target.value))}
                          className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2 py-1 text-slate-900 dark:text-white font-mono text-xs"
                        />
                      </div>
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 block mb-1">One-Way Run (ft)</span>
                        <input
                          type="number"
                          value={vdLength}
                          onChange={(e) => setVdLength(Number(e.target.value))}
                          className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2 py-1 text-slate-900 dark:text-white font-mono text-xs"
                        />
                      </div>
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 block mb-1">Wire Gauge</span>
                        <select
                          value={selectedWireAwg}
                          onChange={(e) => setSelectedWireAwg(Number(e.target.value))}
                          className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-1.5 py-1 text-slate-900 dark:text-white font-mono text-xs"
                        >
                          <option value={14}>14 AWG (15A)</option>
                          <option value={12}>12 AWG (20A)</option>
                          <option value={10}>10 AWG (30A)</option>
                          <option value={8}>8 AWG (50A)</option>
                          <option value={6}>6 AWG (65A)</option>
                          <option value={4}>4 AWG (85A)</option>
                        </select>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Voltage Drop (120V Line):</span>
                        <span className="text-lg font-mono font-bold text-slate-900 dark:text-white">{voltageDropVolts} V</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 block">NEC 3% Limit Status:</span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-bold inline-block ${
                            voltageDropPercent <= 3
                              ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30'
                              : 'bg-rose-500/20 text-rose-700 dark:text-rose-400 border border-rose-500/30'
                          }`}
                        >
                          {voltageDropPercent}% {voltageDropPercent <= 3 ? '(PASS)' : '(EXCEEDS 3%)'}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTopic.calculator.type === 'ledResistor' && (
                  <div className="space-y-3 text-xs">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 block mb-1">MCU Supply Voltage (V)</span>
                        <select
                          value={sourceVolts}
                          onChange={(e) => setSourceVolts(Number(e.target.value))}
                          className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2 py-1 text-slate-900 dark:text-white font-mono text-xs"
                        >
                          <option value={3.3}>3.3V (ESP32 / STM32 / RP2040)</option>
                          <option value={5.0}>5.0V (Arduino Uno / Mega)</option>
                          <option value={12.0}>12.0V (Industrial 12V Rail)</option>
                        </select>
                      </div>
                      <div>
                        <span className="text-slate-500 dark:text-slate-400 block mb-1">LED Forward Voltage (V_f)</span>
                        <select
                          value={ledVf}
                          onChange={(e) => setLedVf(Number(e.target.value))}
                          className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-2 py-1 text-slate-900 dark:text-white font-mono text-xs"
                        >
                          <option value={2.0}>Red / Amber (~2.0V)</option>
                          <option value={2.2}>Yellow (~2.2V)</option>
                          <option value={3.2}>Blue / Pure Green (~3.2V)</option>
                          <option value={3.3}>White (~3.3V)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-slate-700 dark:text-slate-300">
                        <span>Target Current (I_f)</span>
                        <span className="font-mono text-purple-600 dark:text-purple-400 font-bold">{ledCurrentMa} mA</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="25"
                        value={ledCurrentMa}
                        onChange={(e) => setLedCurrentMa(Number(e.target.value))}
                        className="w-full accent-purple-500 cursor-pointer"
                      />
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Required Resistor Value:</span>
                        <span className="text-xl font-mono font-extrabold text-purple-600 dark:text-purple-400">
                          {resistorOhms} Ω
                        </span>
                      </div>
                      <span className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono border border-slate-200 dark:border-slate-700">
                        Power: {resistorMilliWatts} mW (use 1/4W)
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Core Academic & Practical Concepts */}
              <div className="bg-slate-50/70 dark:bg-slate-900/70 rounded-2xl border border-slate-200 dark:border-slate-700/60 p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
                  <Layers className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  <span>Key Topic Engineering Concepts</span>
                </div>
                <div className="space-y-1.5">
                  {activeTopic.coreConcepts.map((concept, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <ChevronRight className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
                      <span>{concept}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Mobile App Screens */}
              <div className="bg-slate-50/70 dark:bg-slate-900/70 rounded-2xl border border-slate-200 dark:border-slate-700/60 p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
                  <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Standard Mobile UI Screen Blueprint</span>
                </div>
                <div className="space-y-1.5">
                  {activeTopic.mobileAppFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0 mt-1.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
