'use client';

import { useState, useEffect, useRef } from 'react';
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
    gradient: 'from-yellow-400 via-orange-500 to-pink-500',
    bgGradient: 'from-yellow-50 via-orange-50 to-pink-50',
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
    gradient: 'from-emerald-400 via-green-500 to-teal-500',
    bgGradient: 'from-emerald-50 via-green-50 to-teal-50',
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
    gradient: 'from-blue-400 via-cyan-500 to-indigo-500',
    bgGradient: 'from-blue-50 via-cyan-50 to-indigo-50',
  },
];

export default function Benefits() {
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
    <section id="benefits" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            Why Choose Blinqq?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of digital banking with features designed for you
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className={`group relative bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 hover:border-transparent transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${benefit.gradient} mb-6 shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <benefit.icon className="w-10 h-10 text-white" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-blue-600 transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {benefit.description}
                </p>

                {/* Features List */}
                <ul className="space-y-4">
                  {benefit.features.map((feature, fIdx) => (
                    <li 
                      key={fIdx} 
                      className="flex items-start group/item"
                      style={{ animationDelay: `${(idx * 150) + (fIdx * 100)}ms` }}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <span className="ml-3 text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative corner element */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.gradient} opacity-5 rounded-bl-full rounded-tr-3xl group-hover:opacity-10 transition-opacity`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}
