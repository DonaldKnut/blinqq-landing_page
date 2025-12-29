'use client';

import { Download, UserPlus, Wallet, Zap } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Download & Sign Up',
    description: 'Get the Blinqq app from App Store or Google Play. Create your account in seconds with just your email and phone number.',
    icon: Download,
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: '02',
    title: 'Verify & Fund',
    description: 'Complete KYC verification and add money to your wallet using your bank card or bank transfer.',
    icon: Wallet,
    color: 'from-green-500 to-green-600',
  },
  {
    number: '03',
    title: 'Start Earning',
    description: 'Make your first transaction and start earning cashback and loyalty points immediately!',
    icon: Zap,
    color: 'from-yellow-500 to-orange-600',
  },
  {
    number: '04',
    title: 'Level Up',
    description: 'Use Blinqq regularly to unlock higher loyalty tiers and maximize your rewards.',
    icon: UserPlus,
    color: 'from-purple-500 to-pink-600',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes and unlock the full power of Blinqq
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connecting Line (Desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-x-1/2 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
              )}

              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 z-10">
                {/* Number Badge */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white text-2xl font-bold mb-6 shadow-lg`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} bg-opacity-10 mb-4`}>
                  <step.icon className={`w-6 h-6 bg-gradient-to-br ${step.color} bg-clip-text text-transparent`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

