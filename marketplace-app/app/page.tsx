import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import TestimonialSection from './components/TestimonialSection';
import StatsSection from './components/StatsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import UsedBySection from './components/UsedBySection';
import FooterSection from './components/FooterSection';

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <div className="pt-16">
        <HeroSection />
      </div>
      <StatsSection />
      <TestimonialSection />
      <PricingSection />
      <UsedBySection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
