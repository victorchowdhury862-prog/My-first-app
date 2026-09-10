import { useState } from 'react';
import { Check, Sparkles, Clock, ShieldCheck, ArrowRight, Plus } from 'lucide-react';
import { PRICING_PLANS } from '../data/gigs';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan, addOns: string[], finalPrice: number) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const [selectedPlanId, setSelectedPlanId] = useState('pro-ab');
  const [rushDelivery, setRushDelivery] = useState(false);
  const [extraVariant, setExtraVariant] = useState(false);
  const [profileBanner, setProfileBanner] = useState(false);

  const selectedPlan = PRICING_PLANS.find((p) => p.id === selectedPlanId) || PRICING_PLANS[1];

  // Calculate dynamic total
  const addOns: string[] = [];
  let calculatedPrice = selectedPlan.price;

  if (rushDelivery) {
    calculatedPrice += 15;
    addOns.push('12-Hour Super Express Rush (+$15)');
  }
  if (extraVariant) {
    calculatedPrice += 10;
    addOns.push('1 Additional A/B Hook Variation (+$10)');
  }
  if (profileBanner && selectedPlanId !== 'agency-suite') {
    calculatedPrice += 15;
    addOns.push('Matching Fiverr Profile Header Banner (+$15)');
  }

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50/70 dark:bg-[#0b0f19]/80 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-800/80">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Select Your Gig Image Package
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            One single new order on your gig pays for your thumbnail redesign. No hidden fees, commercial license included.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isSelected = selectedPlanId === plan.id;
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  plan.popular
                    ? 'bg-slate-900 dark:bg-slate-950 text-white shadow-2xl ring-2 ring-[#1dbf73] lg:-translate-y-2'
                    : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#1dbf73] text-white text-[11px] font-extrabold tracking-wider uppercase shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>MOST POPULAR CHOICE</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-extrabold text-xl">{plan.name}</h3>
                      <p className={`text-xs mt-1 ${plan.popular ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                        {plan.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-1.5 pt-2">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight">${plan.price}</span>
                    <span className={`text-xs font-semibold ${plan.popular ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>
                      USD / one-time
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-bold pt-2 border-t border-slate-200/20 dark:border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{plan.deliveryTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{plan.revisions}</span>
                    </div>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-2.5 pt-4">
                    {plan.features.map((f, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-2.5 text-xs ${
                          f.included
                            ? plan.popular ? 'text-slate-200' : 'text-slate-700 dark:text-slate-300'
                            : 'text-slate-400 line-through opacity-50'
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            f.included
                              ? 'text-[#1dbf73]'
                              : 'text-slate-400 opacity-40'
                          }`}
                        />
                        <span>{f.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPlanId(plan.id);
                      onSelectPlan(plan, addOns, calculatedPrice);
                    }}
                    className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      plan.popular
                        ? 'bg-[#1dbf73] hover:bg-[#19a463] text-white shadow-md'
                        : 'bg-slate-900 hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 text-white'
                    }`}
                  >
                    <span>Choose {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional Add-Ons & Interactive Order Calculator Bar */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Customize With Add-Ons</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Selected Base Plan: <strong className="text-slate-800 dark:text-slate-200">{selectedPlan.name} (${selectedPlan.price})</strong></p>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 uppercase font-bold block">Estimated Total</span>
              <span className="text-2xl font-black text-slate-900 dark:text-white">${calculatedPrice}</span>
            </div>
          </div>

          {/* Addon Checkboxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <label className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 cursor-pointer transition-colors ${rushDelivery ? 'bg-emerald-50/50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-700' : 'bg-slate-50 dark:bg-slate-950/70 border-slate-200 dark:border-slate-800'}`}>
              <div className="space-y-0.5">
                <span className="block text-xs font-bold text-slate-900 dark:text-white">12-Hour Super Express</span>
                <span className="block text-[11px] text-slate-500 dark:text-slate-400">Fastest turnaround guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#1dbf73]">+$15</span>
                <input
                  type="checkbox"
                  checked={rushDelivery}
                  onChange={(e) => setRushDelivery(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                />
              </div>
            </label>

            <label className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 cursor-pointer transition-colors ${extraVariant ? 'bg-emerald-50/50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-700' : 'bg-slate-50 dark:bg-slate-950/70 border-slate-200 dark:border-slate-800'}`}>
              <div className="space-y-0.5">
                <span className="block text-xs font-bold text-slate-900 dark:text-white">+1 Extra A/B Variant</span>
                <span className="block text-[11px] text-slate-500 dark:text-slate-400">Test an alternative visual hook</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#1dbf73]">+$10</span>
                <input
                  type="checkbox"
                  checked={extraVariant}
                  onChange={(e) => setExtraVariant(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                />
              </div>
            </label>

            <label className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 cursor-pointer transition-colors ${profileBanner ? 'bg-emerald-50/50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-700' : 'bg-slate-50 dark:bg-slate-950/70 border-slate-200 dark:border-slate-800'}`}>
              <div className="space-y-0.5">
                <span className="block text-xs font-bold text-slate-900 dark:text-white">Profile Header Banner</span>
                <span className="block text-[11px] text-slate-500 dark:text-slate-400">Matching desktop profile banner</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#1dbf73]">+$15</span>
                <input
                  type="checkbox"
                  checked={profileBanner}
                  onChange={(e) => setProfileBanner(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                />
              </div>
            </label>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => onSelectPlan(selectedPlan, addOns, calculatedPrice)}
              className="px-6 py-3 rounded-xl bg-[#1dbf73] hover:bg-[#19a463] text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Continue to Project Brief (${calculatedPrice})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
