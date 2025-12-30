'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Download, Smartphone, Shield, Zap, TrendingUp, CreditCard, Send } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-100 shadow-sm hover:shadow-md transition-shadow group">
              <Zap className="w-4 h-4 mr-2 text-emerald-500 group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-semibold text-gray-700">The Future of Digital Payments</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 leading-tight">
                Send Money
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                    Instantly
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-emerald-200/50 via-blue-200/50 to-purple-200/50 rounded-full -z-0"></span>
                </span>
                <br />
                <span className="text-gray-700">Anywhere, Anytime</span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
              Your all-in-one fintech platform. Transfer funds, pay bills, invest, borrow, and earn rewards—all from your mobile device.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#download"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl border-2 border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
              >
                Learn More
              </a>
            </div>

            {/* Key Features Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { icon: Shield, text: 'Bank-Level Security', color: 'from-emerald-500 to-emerald-600' },
                { icon: Zap, text: 'Instant Transfers', color: 'from-blue-500 to-blue-600' },
                { icon: Smartphone, text: 'Mobile First', color: 'from-purple-500 to-purple-600' },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                >
                  <div className={`p-1.5 rounded-lg bg-gradient-to-br ${feature.color} mr-2 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 border-2 border-white shadow-sm"></div>
                  ))}
                </div>
                <div className="ml-2">
                  <div className="text-sm font-semibold text-gray-900">100K+ Active Users</div>
                  <div className="text-xs text-gray-500">Trusted by thousands</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className={`relative lg:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-30 transform scale-110 animate-pulse"></div>
              
              {/* Phone Mockup Container */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-3 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="bg-white rounded-2xl w-full max-w-sm mx-auto h-[600px] overflow-hidden relative">
                  {/* Phone Status Bar */}
                  <div className="bg-gradient-to-r from-emerald-500 to-blue-500 h-12 flex items-center justify-between px-6 text-white text-sm font-medium">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-6 space-y-6 h-full overflow-y-auto">
                    {/* Header */}
                    <div>
                      <div className="text-2xl font-display font-bold text-gray-900 mb-1">Kevin Smith</div>
                      <div className="text-sm text-gray-500">Account Balance</div>
                    </div>

                    {/* Balance Card */}
                    <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl p-6 text-white shadow-lg">
                      <div className="text-sm opacity-90 mb-2">Total Balance</div>
                      <div className="text-4xl font-display font-bold mb-4">$4,570.80</div>
                      <div className="flex items-center gap-4 text-sm">
                        <div>
                          <div className="opacity-80">Income</div>
                          <div className="font-semibold">+$2,450</div>
                        </div>
                        <div>
                          <div className="opacity-80">Expense</div>
                          <div className="font-semibold">-$890</div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { icon: Send, label: 'Send', color: 'from-blue-500 to-blue-600' },
                        { icon: CreditCard, label: 'Pay', color: 'from-purple-500 to-purple-600' },
                        { icon: TrendingUp, label: 'Invest', color: 'from-emerald-500 to-emerald-600' },
                        { icon: Download, label: 'More', color: 'from-orange-500 to-orange-600' },
                      ].map((action, idx) => (
                        <div key={idx} className="text-center">
                          <div className={`w-14 h-14 mx-auto mb-2 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-md`}>
                            <action.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-xs text-gray-600 font-medium">{action.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Recent Transactions */}
                    <div>
                      <div className="text-sm font-semibold text-gray-900 mb-3">Recent Transactions</div>
                      <div className="space-y-3">
                        {[
                          { name: 'Tiffany Spyder', amount: '$53.45', type: 'sent' },
                          { name: 'John Maxwell', amount: '$120.00', type: 'received' },
                          { name: 'Leslie Alexander', amount: '$89.20', type: 'sent' },
                        ].map((tx, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500"></div>
                              <div>
                                <div className="text-sm font-semibold text-gray-900">{tx.name}</div>
                                <div className="text-xs text-gray-500">2 hours ago</div>
                              </div>
                            </div>
                            <div className={`text-sm font-bold ${tx.type === 'sent' ? 'text-red-500' : 'text-emerald-500'}`}>
                              {tx.type === 'sent' ? '-' : '+'}{tx.amount}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 bg-white rounded-2xl p-4 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-blue-500"></div>
                  <div>
                    <div className="text-xs text-gray-500">Payment Received</div>
                    <div className="text-lg font-bold text-gray-900">+$250.00</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-4 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform animate-float animation-delay-2000">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500"></div>
                  <div>
                    <div className="text-xs text-gray-500">Reward Earned</div>
                    <div className="text-lg font-bold text-gray-900">+50 Points</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
