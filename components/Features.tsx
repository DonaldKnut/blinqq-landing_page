'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Wallet,
  Send,
  CreditCard,
  Smartphone,
  Shield,
  TrendingUp,
  Gift,
  Globe,
  Lock,
  Zap,
  DollarSign,
  BarChart3,
  Search,
  Sparkles,
} from 'lucide-react';

const features = [
  { icon: Send, title: '@username Transfers', description: 'Send money instantly with @username, no account number stress.', color: 'text-blue-400', glow: 'shadow-blue-500/20' },
  { icon: Wallet, title: 'Multi-Currency Wallets', description: 'Hold and use NGN, USD, EUR, and GBP in one app.', color: 'text-emerald-400', glow: 'shadow-emerald-500/20' },
  { icon: CreditCard, title: 'Bank Transfers', description: 'Move funds through trusted rails like Paystack and Flutterwave.', color: 'text-purple-400', glow: 'shadow-purple-500/20' },
  { icon: Smartphone, title: 'Agent Cash Access', description: 'Cash-in and cash-out through nearby trusted agents.', color: 'text-orange-400', glow: 'shadow-orange-500/20' },
  { icon: Shield, title: 'Security by Default', description: 'Tiered KYC, 2FA, biometrics, and fraud detection keep you safe.', color: 'text-red-400', glow: 'shadow-red-500/20' },
  { icon: Globe, title: 'Cross-Border Payments', description: 'Send and receive money across borders in seconds.', color: 'text-cyan-400', glow: 'shadow-cyan-500/20' },
];

export default function Features() {
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
    <section id="features" ref={sectionRef} className="py-32 bg-midnight relative overflow-hidden">
      {/* Cinematic Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-24 space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
            <Sparkles className="w-4 h-4 mr-2 text-emerald-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">Main Features</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight">
            Everything You <span className="premium-gradient-text">Need</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
            Core features built for secure, instant payments across local and global channels.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group relative glass-card rounded-[2.5rem] p-10 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl ${feature.glow} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 group-hover:border-emerald-500/30 transition-colors duration-500"></div>
              
              {/* Icon */}
              <div className="relative mb-8">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-current opacity-0 group-hover:opacity-10 blur-2xl transition-opacity ${feature.color}`}></div>
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {feature.description}
                </p>
              </div>

              {/* Action Indicator */}
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Learn More</span>
                <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Zap className="w-3 h-3 text-emerald-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
