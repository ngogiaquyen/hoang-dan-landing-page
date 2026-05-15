"use client";

import { useState } from 'react';

import BackgroundDecor from '@/components/BackgroundDecor';
import HeroSection from '@/components/HeroSection';
import HeroImageSection from '@/components/HeroImageSection';
import NavbarSection from '@/components/NavbarSection';
import OrderSection from '@/components/OrderSection';
import PricingSection from '@/components/PricingSection';
import ProcessSection from '@/components/ProcessSection';
import TrustSection from '@/components/TrustSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  const scrollToOrder = (packageId?: number) => {
    if (packageId) {
      setSelectedPackage(packageId);
    }

    document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f1f1f1] flex justify-center font-sans">
      <div className="w-full max-w-[480px] bg-[#fdfcf0] text-[#1a4331] font-sans selection:bg-[#bc6c25]/30 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.1)]">
        <BackgroundDecor />
        <NavbarSection onOrderClick={scrollToOrder} />
        <HeroSection onOrderClick={scrollToOrder} />
        <HeroImageSection />
        <TrustSection />
        <PricingSection onSelectPackage={scrollToOrder} />
        <ProcessSection />
        <OrderSection selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage} />
        <FooterSection onSelectPackage={scrollToOrder} />
      </div>
    </div>
  );
}
