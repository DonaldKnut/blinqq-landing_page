'use client';

import { CheckCircle2, Star, Award, Users } from 'lucide-react';

const benefits = [
  {
    title: 'Earn While You Spend',
    description: 'Get cashback on every transaction. The more you use Blinqq, the more you earn!',
    features: [
      'Up to 3% cashback with Diamond tier',
      'Loyalty points on every transaction',
      'Tier upgrade bonuses',
      'Referral rewards',
    ],
    icon: Award,
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    title: 'Secure & Protected',
    description: 'Your money is safe with bank-level security and fraud detection.',
    features: [
      '2FA authentication',
      'Biometric login',
      'Real-time fraud detection',
      'Encrypted transactions',
    ],
    icon: CheckCircle2,
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    title: 'Fast & Reliable',
    description: 'Process transactions instantly with 99.9% uptime guarantee.',
    features: [
      'Instant transfers',
      '24/7 availability',
      'Multi-currency support',
      'Global reach',
    ],
    icon: Star,
    gradient: 'from-blue-400 to-cyan-500',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Blinqq?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of digital banking with features designed for you
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-6 shadow-lg`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {benefit.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {benefit.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

