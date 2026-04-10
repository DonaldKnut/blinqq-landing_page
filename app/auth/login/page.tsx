'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Zap, Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles, Shield, TrendingUp, Globe, ChevronLeft } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <main className="h-[100dvh] bg-midnight flex items-stretch overflow-hidden fixed inset-0">
      {/* Left Side: Auth Form - Scrollable */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-start p-8 lg:p-24 relative z-10 overflow-y-auto h-full scrollbar-hide py-20 lg:py-32">
        <div className="max-w-md w-full space-y-10 py-12">
          {/* Top Actions */}
          <div className="flex items-center justify-between mb-8">
            <Link 
              href="/" 
              className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/30 transition-all">
                <ChevronLeft className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest leading-none">Back to Home</span>
            </Link>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-emerald-400 fill-emerald-400/10" />
            </div>
            <span className="text-2xl font-display font-bold text-white">Blinqq</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Welcome <span className="premium-gradient-text">Back</span>
            </h1>
            <p className="text-zinc-500 font-light text-lg">
              Welcome back. Enter your details to log in.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-zinc-600 group-focus-within:text-emerald-500 transition-colors" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  className="block w-full pl-14 pr-5 py-5 bg-zinc-900/50 border border-white/5 rounded-2xl text-white placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all text-lg font-light"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Password</label>
                <Link href="#" className="text-xs font-bold uppercase tracking-widest text-emerald-500 hover:text-emerald-400 transition-colors">Forgot Password?</Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-zinc-600 group-focus-within:text-emerald-500 transition-colors" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="block w-full pl-14 pr-14 py-5 bg-zinc-900/50 border border-white/5 rounded-2xl text-white placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all text-lg font-light"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-5 flex items-center group-hover:text-emerald-500 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              disabled={isLoading}
              className="group relative w-full py-5 bg-white text-zinc-950 font-bold rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin"></div>
                  <span>Logging in...</span>
                </div>
              ) : (
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Log In
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </button>
          </form>

          <p className="text-center text-zinc-500 font-light pt-4">
            New here?{' '}
            <Link href="/auth/signup" className="text-emerald-500 font-bold hover:text-emerald-400 transition-colors underline underline-offset-4 decoration-emerald-500/30">
              Create Account
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side: Promo Panel */}
      <div className="hidden lg:flex w-1/2 relative bg-zinc-950 overflow-hidden items-center justify-center p-24">
        {/* Cinematic Background */}
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-glow"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)]"></div>
          
          {/* Moving Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"></div>
        </div>

        {/* Promo Content */}
        <div className="relative z-10 space-y-12 max-w-lg">
          <div className="inline-flex items-center gap-3">
            <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl">
              <Zap className="w-6 h-6 text-emerald-400 fill-emerald-400/10" />
            </div>
            <span className="text-3xl font-display font-bold text-white tracking-tight">Blinqq</span>
          </div>

          <div className="space-y-6">
             <div className="flex items-center gap-3 text-emerald-500">
               <Sparkles className="w-5 h-5" />
               <span className="text-xs font-bold uppercase tracking-[0.3em]">Blinqq App</span>
             </div>
             <h2 className="text-5xl font-display font-bold text-white leading-tight tracking-tight">
               Easy <br />
               <span className="premium-gradient-text">Money Management</span>
             </h2>
             <p className="text-zinc-400 text-lg font-light leading-relaxed">
               Send, save, and manage money in one secure app.
             </p>
          </div>

          {/* Trust Panel */}
          <div className="grid grid-cols-1 gap-6 pt-12">
             {[
               { icon: Shield, title: 'Strong Security', desc: 'Your account is protected.' },
               { icon: TrendingUp, title: 'Smart Insights', desc: 'Track spending and growth.' },
               { icon: Globe, title: 'Global Transfers', desc: 'Send money to many countries.' },
             ].map((item, idx) => (
               <div key={idx} className="flex items-center gap-5 group cursor-default">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all duration-500">
                    <item.icon className="w-6 h-6 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold group-hover:text-emerald-400 transition-colors uppercase text-xs tracking-widest">{item.title}</h4>
                    <p className="text-zinc-600 text-sm font-light leading-tight">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>

          {/* Testimonial Snippet */}
          <div className="pt-12">
            <div className="glass-card rounded-3xl p-6 border-white/5 relative">
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center">
                 <Sparkles className="w-4 h-4 text-emerald-500" />
              </div>
              <p className="text-zinc-400 font-light italic text-sm leading-relaxed mb-4">
                "Blinqq made sending and receiving money faster and easier for our team."
              </p>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
                   <img src="https://i.pravatar.cc/100?u=premium" alt="avatar" className="w-full h-full object-cover grayscale" />
                 </div>
                 <div>
                    <p className="text-white text-xs font-bold">Erik Thorne</p>
                    <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">Macro Strategist</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
