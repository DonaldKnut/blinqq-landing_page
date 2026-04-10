'use client';

import { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Award, Shield, Zap, Sparkles } from 'lucide-react';

const benefits = [
  {
    title: 'Core Features Live',
    description: 'Everything you need for daily fintech use is already available.',
    features: [
      '@username transfers',
      'Instant P2P transfers',
      'Transaction history',
      'Bank and agent channels',
    ],
    icon: Award,
    color: 'text-yellow-400',
    glow: 'shadow-yellow-500/10',
  },
  {
    title: 'Built for Trust',
    description: 'Security is built into every transaction and every login.',
    features: [
      'Tiered KYC verification',
      '2FA and biometric login',
      'Fraud monitoring',
      'Real-time risk checks',
    ],
    icon: Shield,
    color: 'text-emerald-400',
    glow: 'shadow-emerald-500/10',
  },
  {
    title: 'Expansion Roadmap',
    description: 'Blinqq is growing into a full neobank and crypto-ready platform.',
    features: [
      'Virtual debit cards',
      'Savings, investments, and micro-loans',
      'Business accounts, links, and invoicing',
      'USDC/USDT and cross-border settlement rails',
    ],
    icon: Zap,
    color: 'text-blue-400',
    glow: 'shadow-blue-500/10',
  },
];

export default function Benefits() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" ref={sectionRef} className="py-32 bg-midnight relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-[10%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse-glow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-24 space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
            <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">Why People Like Blinqq</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight">
            Why <span className="premium-gradient-text">Blinqq Stands Out</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
            From local transfers to global infrastructure, Blinqq is built to scale with your needs.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className={`group relative glass-card rounded-[3rem] p-10 lg:p-12 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl ${benefit.glow} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-[3rem] border border-white/5 group-hover:border-white/10 transition-colors"></div>
              
              {/* Icon Container */}
              <div className="relative mb-10">
                <div className="w-20 h-20 rounded-3xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <benefit.icon className={`w-10 h-10 ${benefit.color}`} />
                </div>
                <div className={`absolute inset-0 bg-current opacity-0 group-hover:opacity-10 blur-3xl transition-opacity ${benefit.color}`}></div>
              </div>

              {/* Content */}
              <div className="relative space-y-6">
                <h3 className="text-3xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-500 transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-zinc-400 font-light leading-relaxed text-lg">
                  {benefit.description}
                </p>

                {/* Features List */}
                <ul className="space-y-4 pt-4">
                  {benefit.features.map((feature, fIdx) => (
                    <li 
                      key={fIdx} 
                      className="flex items-center group/item transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-emerald-500/50 transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 scale-0 group-hover/item:scale-100 transition-transform" />
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/item:hidden"></div>
                        </div>
                      </div>
                      <span className="ml-4 text-zinc-400 font-light group-hover/item:text-white transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
