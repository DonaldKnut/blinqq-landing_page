'use client';

import { Download, ArrowRight, Smartphone, AppWindow, CheckCircle2, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section id="download" className="py-32 bg-midnight relative overflow-hidden">
      {/* Cinematic Ambient Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        
        {/* Animated Light Rays */}
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent rotate-12"></div>
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent -rotate-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating CTA Card */}
        <div className="glass-card rounded-[4rem] p-12 md:p-20 border-white/5 relative overflow-hidden group shadow-2xl hover:border-white/10 transition-all duration-700">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 pointer-events-none"></div>
          
          {/* Content */}
          <div className="relative z-10 space-y-10">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
              <Sparkles className="w-4 h-4 mr-2 text-emerald-400" />
              <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">Get the App</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight tracking-tight">
              Ready to <span className="premium-gradient-text">Use Blinqq?</span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
              Download Blinqq to start @username transfers, manage multi-currency wallets, and access secure local and cross-border payments.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="#"
                className="group relative inline-flex items-center px-8 py-5 bg-white text-zinc-950 font-bold rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-1 active:scale-95 min-w-[240px]"
              >
                <AppWindow className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Get it on</p>
                  <p className="text-lg">Google Play</p>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#"
                className="group relative inline-flex items-center px-8 py-5 bg-white text-zinc-950 font-bold rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-1 active:scale-95 min-w-[240px]"
              >
                <Smartphone className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Available on</p>
                  <p className="text-lg">App Store</p>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-10 pt-8 border-t border-white/5">
              {[
                { text: '@username Transfers', icon: CheckCircle2 },
                { text: 'NGN, USD, EUR, GBP Wallets', icon: CheckCircle2 },
                { text: '2FA + Biometrics + Fraud Detection', icon: CheckCircle2 },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center group/item">
                  <div className="w-6 h-6 mr-3 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover/item:bg-emerald-500/20 transition-colors">
                    <item.icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-sm font-bold tracking-wide text-zinc-400 group-hover/item:text-white transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
