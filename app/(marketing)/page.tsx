import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight overflow-x-hidden text-white font-sans">
      {/* 
        - [x] Redesign Hero Section
          - [x] Implement deep space dark background
          - [x] Enhance phone mockup with high-fidelity visuals
          - [x] Add smooth text entrance animations
        - [/] Redesign Stats Section
      */}
      <Hero />
      <Stats />
      <Features />
      <Benefits />
      <HowItWorks />
      <CTA />
    </main>
  );
}
