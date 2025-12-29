'use client';

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
  },
  {
    icon: Wallet,
    title: 'Multi-Currency Wallets',
    description: 'Manage NGN, USD, EUR, GBP, USDC, and USDT all in one place',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: CreditCard,
    title: 'Bill Payments',
    description: 'Pay utility bills, buy airtime, and handle all your expenses seamlessly',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: TrendingUp,
    title: 'Invest & Earn',
    description: 'Lock funds, invest in plans, and watch your money grow with competitive returns',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Gift,
    title: 'Earn Rewards',
    description: 'Get cashback on every transaction and unlock loyalty tiers for bigger rewards',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Globe,
    title: 'Crypto Support',
    description: 'Buy, sell, and transfer USDC/USDT with multi-network support',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: '2FA, biometric authentication, and fraud detection keep your money safe',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process transactions instantly with our optimized infrastructure',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: DollarSign,
    title: 'Loans & Credit',
    description: 'Borrow money instantly with flexible repayment options',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Lock,
    title: 'Fund Locking',
    description: 'Lock funds for savings goals with automatic unlock features',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track your spending, earnings, and financial health in real-time',
    color: 'from-violet-500 to-violet-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Beautiful, intuitive mobile app designed for on-the-go banking',
    color: 'from-rose-500 to-rose-600',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A complete fintech platform packed with powerful features to manage your money
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

