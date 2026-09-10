import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import EETopicsExplorer from './components/EETopicsExplorer';
import GigModal from './components/GigModal';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import FiverrSimulator from './components/FiverrSimulator';
import GuidelinesGuide from './components/GuidelinesGuide';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import OrderModal from './components/OrderModal';
import Footer from './components/Footer';
import { GIGS_DATA, PRICING_PLANS } from './data/gigs';
import { GigItem, PricingPlan } from './types';

export default function App() {
  const [selectedGig, setSelectedGig] = useState<GigItem | null>(null);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan>(PRICING_PLANS[1]);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [finalPrice, setFinalPrice] = useState<number>(PRICING_PLANS[1].price);
  const [referencedGig, setReferencedGig] = useState<GigItem | null>(null);

  const scrollToSection = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenOrder = (planId?: string) => {
    if (planId) {
      const plan = PRICING_PLANS.find((p) => p.id === planId) || PRICING_PLANS[1];
      setSelectedPlan(plan);
      setFinalPrice(plan.price);
    }
    setOrderModalOpen(true);
  };

  const handleSelectPlanFromPricing = (plan: PricingPlan, addOns: string[], price: number) => {
    setSelectedPlan(plan);
    setSelectedAddOns(addOns);
    setFinalPrice(price);
    setOrderModalOpen(true);
  };

  const handleOrderStyle = (gig: GigItem) => {
    setReferencedGig(gig);
    setSelectedPlan(PRICING_PLANS[1]);
    setFinalPrice(PRICING_PLANS[1].price);
    setOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 flex flex-col antialiased selection:bg-emerald-200 dark:selection:bg-emerald-900 selection:text-emerald-900 dark:selection:text-emerald-100 transition-colors duration-200">
      {/* Top Navigation */}
      <Header
        onOpenOrder={handleOpenOrder}
        onScrollTo={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onScrollTo={scrollToSection}
          onOpenOrder={() => handleOpenOrder('pro-ab')}
        />

        {/* Portfolio Gallery Showcase with Studio & Fiverr Feed Views */}
        <PortfolioGrid
          gigs={GIGS_DATA}
          onSelectGig={(gig) => setSelectedGig(gig)}
          onOpenOrder={() => handleOpenOrder('pro-ab')}
          onScrollToTopics={() => scrollToSection('ee-topics')}
        />

        {/* Electrical Engineering Topics-Wise App Directory & Formula Simulator */}
        <EETopicsExplorer
          onSelectGig={(gig) => setSelectedGig(gig)}
          onOrderStyle={handleOrderStyle}
          onTestInSimulator={(gig) => {
            scrollToSection('simulator');
          }}
          onFilterPortfolioByTopic={(_topicId) => {
            scrollToSection('portfolio');
          }}
        />

        {/* Interactive Fiverr Search Simulator */}
        <FiverrSimulator />

        {/* Before vs. After Interactive Case Study Slider */}
        <BeforeAfterSlider />

        {/* Official Fiverr Specs & Safe-Zones Checklist */}
        <GuidelinesGuide />

        {/* Verified Seller Testimonials */}
        <TestimonialsSection />

        {/* Pricing Packages & Custom Add-On Calculator */}
        <PricingSection onSelectPlan={handleSelectPlanFromPricing} />
      </main>

      {/* Footer */}
      <Footer onScrollTo={scrollToSection} />

      {/* High-Res Gig Inspection Lightbox Modal */}
      <GigModal
        gig={selectedGig}
        onClose={() => setSelectedGig(null)}
        onOrderStyle={handleOrderStyle}
      />

      {/* Order Brief & Checkout Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        selectedPlan={selectedPlan}
        selectedAddOns={selectedAddOns}
        finalPrice={finalPrice}
        referencedGig={referencedGig}
      />
    </div>
  );
}
