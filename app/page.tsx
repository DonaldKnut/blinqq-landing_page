import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight overflow-x-hidden text-white font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Benefits />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
