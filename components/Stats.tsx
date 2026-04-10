'use client';

import { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, DollarSign, Globe } from 'lucide-react';

const stats = [
  { icon: Users, value: 100000, suffix: '+', label: '@Username Accounts', color: 'from-blue-500 to-blue-600' },
  { icon: DollarSign, value: 10000000000, suffix: '+', label: 'P2P Transfers', color: 'from-emerald-500 to-emerald-600', prefix: '₦' },
  { icon: Globe, value: 4, suffix: '', label: 'Wallet Currencies', color: 'from-purple-500 to-purple-600' },
  { icon: TrendingUp, value: 99.9, suffix: '%', label: 'Fraud Monitoring Uptime', color: 'from-orange-500 to-orange-600' },
];

function CountUp({ end, duration = 2000, suffix = '', prefix = '' }: { end: number, duration?: number, suffix?: string, prefix?: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const rate = Math.min(progress / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeValue = rate === 1 ? 1 : 1 - Math.pow(2, -10 * rate);
      
      const currentCount = Math.floor(easeValue * end);
      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }

      if (rate < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  const formatNumber = (num: number) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(0) + 'B';
    if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toString();
  };

  return <span>{prefix}{formatNumber(count)}{suffix}</span>;
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-midnight relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`group relative glass-card rounded-[2.5rem] p-8 transition-all duration-700 transform hover:-translate-y-2 hover:border-white/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Inner Glow Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-[2.5rem] transition-opacity duration-500`}></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 group-hover:border-emerald-500/30 transition-colors duration-500"></div>

              {/* Icon Container */}
              <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-900 border border-white/5 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]`}>
                <stat.icon className={`w-8 h-8 bg-gradient-to-br ${stat.color} bg-clip-text text-white`} />
              </div>

              {/* Data Content */}
              <div className="relative">
                <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2 tracking-tight">
                  {isVisible ? (
                    <CountUp 
                      end={stat.value} 
                      suffix={stat.suffix} 
                      prefix={stat.prefix} 
                    />
                  ) : (
                    <span>0</span>
                  )}
                </div>
                <div className="text-zinc-500 text-sm font-bold uppercase tracking-widest group-hover:text-zinc-300 transition-colors">
                  {stat.label}
                </div>
              </div>

              {/* Subtle Decorative Particle */}
              <div className={`absolute top-6 right-6 w-12 h-12 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
