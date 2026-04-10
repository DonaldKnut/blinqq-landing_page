'use client';

import { useState, useEffect, useRef } from 'react';
import { Download, UserPlus, Wallet, Zap, ArrowRight, Sparkles } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Create Your Account',
    description: 'Sign up and complete your tiered KYC in minutes.',
    icon: Download,
    color: 'text-blue-400',
    glow: 'shadow-blue-500/10',
  },
  {
    number: '02',
    title: 'Fund Your Wallet',
    description: 'Add money through bank transfer or nearby agents.',
    icon: Wallet,
    color: 'text-emerald-400',
    glow: 'shadow-emerald-500/10',
  },
  {
    number: '03',
    title: 'Pay with @username',
    description: 'Send instant local or cross-border transfers with @username.',
    icon: Zap,
    color: 'text-yellow-400',
    glow: 'shadow-yellow-500/10',
  },
  {
    number: '04',
    title: 'Grow with Blinqq',
    description: 'Unlock advanced features as we roll out neobank and crypto tools.',
    icon: UserPlus,
    color: 'text-purple-400',
    glow: 'shadow-purple-500/10',
  },
];

export default function HowItWorks() {
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
    <section id="how-it-works" ref={sectionRef} className="py-32 bg-midnight relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-24 space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
            <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">How It Works</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight">
            Get Started in <span className="premium-gradient-text">4 Steps</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
            Start fast, transfer instantly, and grow with new features over time.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[120px] left-[10%] right-[10%] h-[2px] z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 via-emerald-500/50 via-yellow-500/50 to-purple-500/50 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`group relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className="relative text-center space-y-8">
                  {/* Step Number Badge */}
                  <div className="relative inline-block">
                    <div className={`w-24 h-24 rounded-3xl bg-zinc-900 border border-white/10 flex items-center justify-center text-3xl font-display font-bold ${step.color} shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      {step.number}
                    </div>
                    <div className={`absolute -inset-2 bg-current opacity-0 group-hover:opacity-10 blur-xl transition-opacity ${step.color}`}></div>
                  </div>

                  {/* Content Card */}
                  <div className="glass-card rounded-[2.5rem] p-8 space-y-4 border-white/5 group-hover:border-white/10 transition-colors">
                     <div className="w-12 h-12 mx-auto rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-2">
                        <step.icon className={`w-6 h-6 ${step.color}`} />
                     </div>
                     <h3 className="text-2xl font-display font-bold text-white group-hover:text-emerald-400 transition-colors">
                       {step.title}
                     </h3>
                     <p className="text-zinc-400 font-light leading-relaxed">
                       {step.description}
                     </p>
                  </div>

                  {/* Mobile Arrow */}
                  {idx < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center py-4">
                      <ArrowRight className="w-6 h-6 text-zinc-700 rotate-90" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
