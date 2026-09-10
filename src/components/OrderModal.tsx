import { useState, type FormEvent } from 'react';
import { X, CheckCircle2, Send, Clock, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { PricingPlan, GigItem } from '../types';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: PricingPlan;
  selectedAddOns: string[];
  finalPrice: number;
  referencedGig?: GigItem | null;
}

export default function OrderModal({
  isOpen,
  onClose,
  selectedPlan,
  selectedAddOns,
  finalPrice,
  referencedGig
}: OrderModalProps) {
  const [fiverrHandle, setFiverrHandle] = useState('');
  const [email, setEmail] = useState('');
  const [gigUrl, setGigUrl] = useState('');
  const [category, setCategory] = useState(referencedGig?.category || 'web');
  const [headlineHook, setHeadlineHook] = useState(referencedGig?.headlineHook || '');
  const [colorPreferences, setColorPreferences] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/60">
          <div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
              Step 2 of 2 • Project Brief
            </span>
            <h3 className="font-black text-lg text-slate-900 dark:text-white">Custom Fiverr Gig Image Brief</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 sm:p-10 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-inner border border-emerald-200 dark:border-emerald-800">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-black text-slate-900 dark:text-white">Brief Received Successfully!</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Thank you for your order! We will analyze your gig niche and deliver your high-converting 1280×769 designs within <strong>24 hours</strong>.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-left text-xs space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Selected Package:</span>
                <span className="font-bold text-slate-900 dark:text-white">{selectedPlan.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Total Investment:</span>
                <span className="font-extrabold text-[#1dbf73]">${finalPrice} USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Delivery Guarantee:</span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">24-36h with 100% Fiverr TOS Approval</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 text-white font-bold text-sm cursor-pointer transition-colors"
            >
              Back to Portfolio
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            {/* Plan summary badge */}
            <div className="p-3.5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/90 dark:border-emerald-800/60 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-900 dark:text-white block">{selectedPlan.name}</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">{selectedPlan.deliveryTime} • {selectedPlan.revisions}</span>
              </div>
              <span className="text-xl font-black text-[#1dbf73]">${finalPrice}</span>
            </div>

            {selectedAddOns.length > 0 && (
              <div className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-950/50 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="font-bold block text-slate-700 dark:text-slate-200 mb-1">Active Add-Ons:</span>
                <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                  {selectedAddOns.map((addon, i) => (
                    <li key={i}>{addon}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Fiverr Username / Handle *</label>
                <input
                  type="text"
                  required
                  placeholder="@your_username"
                  value={fiverrHandle}
                  onChange={(e) => setFiverrHandle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Contact Email *</label>
                <input
                  type="email"
                  required
                  placeholder="alex@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Existing Fiverr Gig URL (Optional)</label>
              <input
                type="url"
                placeholder="https://www.fiverr.com/s/..."
                value={gigUrl}
                onChange={(e) => setGigUrl(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Primary Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                >
                  <option value="web">Web & Tech (WordPress, React)</option>
                  <option value="logo">Graphics & Design (Logos, Branding)</option>
                  <option value="video">Video & Shorts / Reels</option>
                  <option value="seo">Digital Marketing & SEO</option>
                  <option value="mobile">Mobile App UI/UX</option>
                  <option value="ecommerce">Shopify & Dropshipping</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Main 3-4 Word Hook</label>
                <input
                  type="text"
                  placeholder="e.g. MODERN WEB DESIGN"
                  value={headlineHook}
                  onChange={(e) => setHeadlineHook(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Color Palette or Style Preferences</label>
              <input
                type="text"
                placeholder="e.g. Dark mode with emerald glow, minimal luxury aesthetic"
                value={colorPreferences}
                onChange={(e) => setColorPreferences(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Additional Instructions / Competitor Links</label>
              <textarea
                rows={2}
                placeholder="Tell us what competitors you want to outshine or specific deliverables you need..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#1dbf73] hover:bg-[#19a463] text-white font-bold text-sm shadow-md transition-all hover:shadow flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Order Brief (${finalPrice})</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
