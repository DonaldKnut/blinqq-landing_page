'use client';

import { useState, useEffect, useRef } from 'react';
import { Download, UserPlus, Wallet, Zap, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Download & Sign Up',
    description: 'Get the Blinqq app from App Store or Google Play. Create your account in seconds with just your email and phone number.',
    icon: Download,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
  },
  {
    number: '02',
    title: 'Verify & Fund',
    description: 'Complete KYC verification and add money to your wallet using your bank card or bank transfer.',
    icon: Wallet,
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'from-emerald-50 to-emerald-100',
  },
  {
    number: '03',
    title: 'Start Earning',
    description: 'Make your first transaction and start earning cashback and loyalty points immediately!',
    icon: Zap,
    color: 'from-yellow-500 to-orange-600',
    bgColor: 'from-yellow-50 to-orange-100',
  },
  {
    number: '04',
    title: 'Level Up',
    description: 'Use Blinqq regularly to unlock higher loyalty tiers and maximize your rewards.',
    icon: UserPlus,
    color: 'from-purple-500 to-pink-600',
    bgColor: 'from-purple-50 to-pink-100',
  },
];

export default function HowItWorks() {
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
    <section id="how-it-works" ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-purple-50 border border-purple-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-purple-700">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get started in minutes and unlock the full power of Blinqq
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-emerald-200 via-yellow-200 to-purple-200 transform -translate-y-1/2 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-emerald-500 via-yellow-500 to-purple-500 opacity-20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`group relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 h-full">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500`}></div>
                  
                  {/* Number Badge */}
                  <div className={`relative inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} text-white text-3xl font-display font-bold mb-6 shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} bg-opacity-10 mb-6 group-hover:bg-opacity-20 transition-all`}>
                    <step.icon className={`w-7 h-7 bg-gradient-to-br ${step.color} bg-clip-text text-transparent`} />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-blue-600 transition-all duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow indicator (Desktop) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-4 z-20">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-lg">
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  )}

                  {/* Decorative element */}
                  <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${step.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl opacity-20`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
