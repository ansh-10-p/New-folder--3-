'use client';

import { useState } from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import TestimonialSection from './components/TestimonialSection';
import StatsSection from './components/StatsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import UsedBySection from './components/UsedBySection';
import FooterSection from './components/FooterSection';
import CombinedFeaturedSection from './components/ui/combined-featured-section';
import AuthModal from './components/AuthModal';

export default function Home() {
  const [showAuthModal, setShowAuthModal] = useState(true);

  return (
    <main className="w-full">
      <Navbar />
      <div className="pt-16">
        <HeroSection />
      </div>
      <StatsSection />
      <CombinedFeaturedSection />
      <TestimonialSection />
      <PricingSection />
      <UsedBySection />
      <FAQSection />
      <FooterSection />
      
      {/* Auth Modal - Shows on first visit */}
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </main>
  );
}
