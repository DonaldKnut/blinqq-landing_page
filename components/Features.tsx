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
} from 'lucide-react';

const features = [
  {
    icon: Send,
    title: 'Instant Transfers',
    description: 'Send money to anyone, anywhere in seconds using just their @username',
    color: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-50 to-blue-100/50',
  },
  {
    icon: Wallet,
    title: 'Multi-Currency Wallets',
    description: 'Manage NGN, USD, EUR, GBP, USDC, and USDT all in one place',
    color: 'from-emerald-500 to-emerald-600',
    bgGradient: 'from-emerald-50 to-emerald-100/50',
  },
  {
    icon: CreditCard,
    title: 'Bill Payments',
    description: 'Pay utility bills, buy airtime, and handle all your expenses seamlessly',
    color: 'from-purple-500 to-purple-600',
    bgGradient: 'from-purple-50 to-purple-100/50',
  },
  {
    icon: TrendingUp,
    title: 'Invest & Earn',
    description: 'Lock funds, invest in plans, and watch your money grow with competitive returns',
    color: 'from-orange-500 to-orange-600',
    bgGradient: 'from-orange-50 to-orange-100/50',
  },
  {
    icon: Gift,
    title: 'Earn Rewards',
    description: 'Get cashback on every transaction and unlock loyalty tiers for bigger rewards',
    color: 'from-pink-500 to-pink-600',
    bgGradient: 'from-pink-50 to-pink-100/50',
  },
  {
    icon: Globe,
    title: 'Crypto Support',
    description: 'Buy, sell, and transfer USDC/USDT with multi-network support',
    color: 'from-indigo-500 to-indigo-600',
    bgGradient: 'from-indigo-50 to-indigo-100/50',
  },
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: '2FA, biometric authentication, and fraud detection keep your money safe',
    color: 'from-red-500 to-red-600',
    bgGradient: 'from-red-50 to-red-100/50',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process transactions instantly with our optimized infrastructure',
    color: 'from-yellow-500 to-yellow-600',
    bgGradient: 'from-yellow-50 to-yellow-100/50',
  },
  {
    icon: DollarSign,
    title: 'Loans & Credit',
    description: 'Borrow money instantly with flexible repayment options',
    color: 'from-teal-500 to-teal-600',
    bgGradient: 'from-teal-50 to-teal-100/50',
  },
  {
    icon: Lock,
    title: 'Fund Locking',
    description: 'Lock funds for savings goals with automatic unlock features',
    color: 'from-cyan-500 to-cyan-600',
    bgGradient: 'from-cyan-50 to-cyan-100/50',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track your spending, earnings, and financial health in real-time',
    color: 'from-violet-500 to-violet-600',
    bgGradient: 'from-violet-50 to-violet-100/50',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Beautiful, intuitive mobile app designed for on-the-go banking',
    color: 'from-rose-500 to-rose-600',
    bgGradient: 'from-rose-50 to-rose-100/50',
  },
];

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-emerald-700">Complete Payment Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A complete fintech platform packed with powerful features to manage your money
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-transparent transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-blue-600 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover effect indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
