'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Download, Smartphone, Shield, Zap, TrendingUp, CreditCard, Send, Sparkles } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-midnight min-h-screen flex items-center pt-20">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]"></div>
        
        {/* Animated Particles Simulation */}
        <div className="absolute inset-0 opacity-20">
          {isVisible && [...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-float"
              style={{
                top: `${(i * 137.5) % 100}%`, // Use deterministic positions for first render or only render after mount
                left: `${(i * 224.7) % 100}%`,
                animationDuration: `${5 + (i % 10)}s`,
                animationDelay: `${(i % 5)}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`lg:col-span-7 space-y-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 group animate-fade-in">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-xs font-bold tracking-widest uppercase text-zinc-400 group-hover:text-emerald-400 transition-colors">
                Username Payments: Send with @username
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] tracking-tight">
                Blinqq <br />
                <span className="premium-gradient-text">Fintech Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-2xl font-light">
                Secure local and cross-border payments with @username transfers, multi-currency wallets, and agent cash access.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a
                href="#download"
                className="group relative inline-flex items-center justify-center px-8 py-5 bg-emerald-500 text-zinc-950 font-bold rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:-translate-y-1 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Get Blinqq Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#features"
                className="group inline-flex items-center justify-center px-8 py-5 bg-white/5 backdrop-blur-md text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                  See Features
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-white/5 flex flex-wrap items-center gap-10">
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-midnight bg-zinc-800 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 group-hover:opacity-0 transition-opacity"></div>
                    <img src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="user" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-emerald-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-3 h-3 fill-current" />
                  ))}
                  <span className="ml-2 text-sm font-bold text-white">4.9/5 Rating</span>
                </div>
                <p className="text-zinc-500 text-sm">Trusted by 100k+ users</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className={`lg:col-span-5 relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative mx-auto max-w-[320px]">
              {/* Massive Glow Background */}
              <div className="absolute inset-0 bg-emerald-500/20 rounded-[3rem] blur-[80px] animate-pulse-glow"></div>
              
              {/* Phone Mockup Frame */}
              <div className="relative rounded-[3rem] p-3 bg-zinc-900 border border-white/10 shadow-2xl glass-card">
                <div className="relative rounded-[2.5rem] bg-zinc-950 h-[640px] overflow-hidden border border-white/5">
                  {/* Phone Status Bar */}
                  <div className="h-10 flex items-center justify-between px-8 pt-4">
                    <span className="text-xs font-bold text-white">9:41</span>
                    <div className="flex gap-1.5">
                      <div className="w-4 h-2 bg-white/20 rounded-sm"></div>
                      <div className="w-3 h-2 bg-white/20 rounded-sm"></div>
                      <div className="w-5 h-2 bg-emerald-500 rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Dashboard Preview */}
                  <div className="p-6 space-y-8 h-full">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Balance</p>
                        <h3 className="text-3xl font-display font-bold text-white">$48,290.00</h3>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-emerald-400" />
                      </div>
                    </div>

                    {/* Quick Send Card */}
                    <div className="p-5 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-blue-600/20 border border-white/10 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-125 transition-transform duration-700">
                        <Zap className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-zinc-400 text-sm mb-4">Quick Transfer</p>
                      <div className="flex gap-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-xs text-white font-bold">
                            JD
                          </div>
                        ))}
                        <button className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                          <Send className="w-4 h-4 text-zinc-950" />
                        </button>
                      </div>
                    </div>

                    {/* Analytics Preview */}
                    <div className="space-y-4">
                      <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Spending insights</p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                          <p className="text-zinc-500 text-[10px] mb-1">Investment</p>
                          <p className="text-white font-bold">+12.4%</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                          <p className="text-zinc-500 text-[10px] mb-1">Savings</p>
                          <p className="text-white font-bold">$12.5k</p>
                        </div>
                      </div>
                    </div>

                    {/* Virtual Card Preview */}
                    <div className="relative h-40 rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 p-6 overflow-hidden">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl"></div>
                       <div className="flex justify-between items-start">
                         <div className="w-10 h-8 bg-zinc-700/50 rounded-md"></div>
                         <CreditCard className="w-6 h-6 text-zinc-600" />
                       </div>
                       <div className="mt-8">
                         <p className="text-white font-mono tracking-widest">**** 8829</p>
                         <div className="flex justify-between items-end mt-4">
                           <p className="text-[10px] text-zinc-500 font-bold uppercase">Kevin Smith</p>
                           <div className="flex gap-1">
                             <div className="w-5 h-5 rounded-full bg-red-500/80"></div>
                             <div className="w-5 h-5 rounded-full bg-yellow-500/80 -ml-3"></div>
                           </div>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Floating Elements */}
              <div className="absolute -right-12 top-20 glass-card p-4 rounded-2xl animate-float shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-zinc-950" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase">Encrypted</p>
                    <p className="text-xs text-white font-bold">AES-256 Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
