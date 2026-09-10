import { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Smartphone,
  Monitor,
  Copy,
  Check,
  FileDown,
  CheckSquare,
  Square,
  Sparkles,
  Info
} from 'lucide-react';
import { FIVERR_GUIDELINES_SPECS } from '../data/gigs';
import { generateGuidelinesPDF } from '../utils/pdfGenerator';

export default function GuidelinesGuide() {
  const [devicePreview, setDevicePreview] = useState<'desktop' | 'mobile'>('desktop');
  const [copied, setCopied] = useState(false);
  const [pdfStatus, setPdfStatus] = useState<'idle' | 'generating' | 'success'>('idle');

  // Pre-flight checklist interactive state
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    dimension: true,
    safezone: true,
    textRule: true,
    mobileSafe: false,
    noFakeBadges: true,
    fileWeight: false
  });

  const checklistItems = [
    { id: 'dimension', label: '1280 × 769 px Resolution (Exact 1.66:1 Aspect Ratio)' },
    { id: 'safezone', label: '70px Border Clearance (Avoids Level Badges & Heart Button)' },
    { id: 'textRule', label: 'Under 20% Text Rule (3 to 5 High-Impact Headline Words)' },
    { id: 'mobileSafe', label: 'Mobile App Safe: Text & Mockup Centered & Legible at 200px' },
    { id: 'noFakeBadges', label: 'Zero Deceptive Badges (No fake "Top Rated" or "Fiverr Choice" stamps)' },
    { id: 'fileWeight', label: 'Export Compressed Under 5 MB (WebP, High-Res PNG, or JPEG)' }
  ];

  const toggleCheckItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((checkedCount / checklistItems.length) * 100);

  const checklistText = `Fiverr Gig Image Quality Checklist (2026 Standards):
1. Exact Dimensions: 1280 x 769 px (1.66:1 ratio)
2. Safe Zone Clearance: Minimum 70px border padding
3. Text Rule: Under 20% of image area (3-5 words max)
4. Mobile Safe: Crucial text & graphics centered
5. TOS Compliance: No fake "Top Rated" or "Fiverr Choice" badge graphics
6. File Weight: Under 5 MB in high-quality PNG or WebP`;

  const handleCopy = () => {
    navigator.clipboard.writeText(checklistText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPDF = () => {
    setPdfStatus('generating');
    try {
      generateGuidelinesPDF();
      setPdfStatus('success');
      setTimeout(() => setPdfStatus('idle'), 3500);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
      setPdfStatus('idle');
    }
  };

  return (
    <section id="guidelines" className="py-16 md:py-24 bg-white dark:bg-[#0b0f19] border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-800/80">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Official 2026 Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Fiverr Gig Image Specifications & Safe-Zones
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Fiverr's algorithm actively tests your images across web, iPad, and iOS/Android apps. We ensure every pixel passes platform compliance.
            </p>
          </div>

          {/* Action Buttons: Download PDF & Copy */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              id="btn-download-pdf-guidelines"
              onClick={handleDownloadPDF}
              disabled={pdfStatus === 'generating'}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:shadow active:scale-95 disabled:opacity-75"
              title="Download print-ready A4 PDF compliance checklist"
            >
              {pdfStatus === 'generating' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : pdfStatus === 'success' ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>PDF Downloaded!</span>
                </>
              ) : (
                <>
                  <FileDown className="w-4 h-4" />
                  <span>Download as PDF</span>
                </>
              )}
            </button>

            <button
              id="btn-copy-guidelines"
              onClick={handleCopy}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center gap-2 border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-500 dark:text-slate-400" />}
              <span>{copied ? 'Checklist Copied!' : 'Copy Specs'}</span>
            </button>
          </div>
        </div>

        {/* Interactive Safe-Zone Breakdown Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Safe Zone Inspector Screen */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Safe-Zone Boundary Simulation
              </span>
              <div className="inline-flex rounded-lg bg-slate-100 dark:bg-slate-900 p-1 border border-slate-200 dark:border-slate-800 text-xs font-semibold">
                <button
                  onClick={() => setDevicePreview('desktop')}
                  className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer ${
                    devicePreview === 'desktop' ? 'bg-white dark:bg-slate-800 shadow-xs text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop View (1280×769)</span>
                </button>
                <button
                  onClick={() => setDevicePreview('mobile')}
                  className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer ${
                    devicePreview === 'mobile' ? 'bg-white dark:bg-slate-800 shadow-xs text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile App View (Overlay Cut)</span>
                </button>
              </div>
            </div>

            {/* Frame with overlays */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border-2 border-slate-900 shadow-xl bg-slate-950">
              <img
                src="/src/assets/images/fiverr_logo_brand_gig_1789058248799.jpg"
                alt="Fiverr Image Guidelines Safe Zone preview"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* 70px Safe Zone Outer Boundary */}
              <div className="absolute inset-5 sm:inset-7 border-2 border-dashed border-emerald-400 z-10 pointer-events-none">
                <span className="absolute top-2 left-2 bg-emerald-950/90 text-emerald-300 text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-sm">
                  70px Safe Clearance Zone
                </span>
              </div>

              {/* Mobile device cutoff overlay */}
              {devicePreview === 'mobile' && (
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent z-20 flex items-end justify-center pb-2 pointer-events-none">
                  <div className="px-3 py-1 rounded-full bg-rose-600/90 text-white text-[11px] font-bold flex items-center gap-1.5 shadow-sm">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Mobile Title Bar & Heart Button Overlay Danger Area</span>
                  </div>
                </div>
              )}

              {/* Resolution indicator */}
              <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-lg bg-slate-900/90 text-white text-[11px] font-mono font-bold border border-white/20">
                1280 × 769 px
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 italic text-center">
              Notice how our core hook "MINIMALIST LUXURY LOGO" sits strictly within the green safe zone, ensuring 100% readability across every device.
            </p>
          </div>

          {/* Guidelines Cards Grid */}
          <div className="lg:col-span-5 space-y-3.5">
            {FIVERR_GUIDELINES_SPECS.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-500/50 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 transition-all space-y-1"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">{item.title}</h3>
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    {item.spec}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pre-Flight Compliance Checklist Banner with Direct PDF Export */}
        <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 relative z-10">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
                <h3 className="text-lg font-bold text-white">
                  Interactive Seller Pre-Flight Compliance Checklist
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Tick each requirement before uploading your new gig image to Fiverr. Click "Download as PDF" to save or print this official verification sheet.
              </p>
            </div>

            {/* Checklist Progress Meter */}
            <div className="flex items-center gap-3 bg-slate-950/80 px-4 py-2 rounded-2xl border border-slate-800 shrink-0">
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Upload Readiness</div>
                <div className="text-sm font-extrabold text-emerald-400">
                  {checkedCount} of {checklistItems.length} Passed ({progressPercent}%)
                </div>
              </div>
              <div className="w-16 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Interactive Checklist Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10">
            {checklistItems.map((item) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <button
                  key={item.id}
                  onClick={() => toggleCheckItem(item.id)}
                  className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                    isChecked
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-slate-200'
                      : 'bg-slate-800/50 border-slate-800 text-slate-400 hover:bg-slate-800/80'
                  }`}
                >
                  <span className="mt-0.5 shrink-0 text-emerald-400">
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-500" />
                    )}
                  </span>
                  <span className={`text-xs leading-relaxed ${isChecked ? 'text-white font-medium' : 'text-slate-400'}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Footer of the Card with PDF CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 relative z-10">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Info className="w-4 h-4 text-slate-500 shrink-0" />
              <span>
                PDF output is formatted in clean A4 printable layout with safe-zone specs, pre-flight boxes, and CTR advice.
              </span>
            </div>

            <button
              id="btn-download-pdf-checklist-bottom"
              onClick={handleDownloadPDF}
              disabled={pdfStatus === 'generating'}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-500/20 active:scale-95 shrink-0 disabled:opacity-75"
            >
              {pdfStatus === 'generating' ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                  <span>Building PDF Document...</span>
                </>
              ) : pdfStatus === 'success' ? (
                <>
                  <Check className="w-4 h-4 text-slate-950" />
                  <span>PDF Checklist Saved!</span>
                </>
              ) : (
                <>
                  <FileDown className="w-4 h-4 text-slate-950" />
                  <span>Download Compliance Checklist PDF</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

