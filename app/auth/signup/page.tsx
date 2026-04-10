'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Zap, Mail, Lock, User, Eye, EyeOff, ArrowRight, 
  Sparkles, Shield, Star, CheckCircle2, ChevronLeft 
} from 'lucide-react';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <main className="h-[100dvh] bg-midnight flex items-stretch overflow-hidden fixed inset-0">
      {/* Right Side: Promo Panel - Fixed */}
      <div className="hidden lg:flex w-1/2 relative bg-zinc-950 overflow-hidden items-center justify-center p-24 h-full">
        {/* Cinematic Background */}
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] animate-pulse-glow"></div>
          
          {/* Pulsing Concentric Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <div className="w-[400px] h-[400px] border border-white/5 rounded-full animate-ping-slow"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-ping-slow [animation-delay:1s]"></div>
          </div>
        </div>

        {/* Promo Content */}
        <div className="relative z-10 space-y-12 max-w-lg">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl">
              <Zap className="w-7 h-7 text-emerald-400 fill-emerald-400/10" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-white tracking-tighter">Blinqq</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Simple Finance</span>
            </div>
          </div>

          <div className="space-y-6">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
               <Star className="w-3 h-3 text-emerald-400 fill-emerald-400" />
               <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Join 100k+ Users</span>
             </div>
             <h2 className="text-5xl font-display font-bold text-white leading-tight tracking-tight">
               Open Your <br />
               <span className="premium-gradient-text">Blinqq Account</span>
             </h2>
             <p className="text-zinc-400 text-lg font-light leading-relaxed">
               Sign up in minutes and start sending, saving, and paying with ease.
             </p>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 gap-8 pt-8">
             {[
               { title: 'Quick Setup', desc: 'Create your account in a few steps.' },
               { title: 'Low Fees', desc: 'Enjoy affordable transfers and payments.' },
               { title: 'User Rewards', desc: 'Get rewards as you keep using Blinqq.' },
             ].map((item, idx) => (
               <div key={idx} className="flex items-start gap-5">
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-wide">{item.title}</h4>
                    <p className="text-zinc-600 text-sm font-light mt-1">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>

          {/* Social Proof */}
          <div className="pt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-zinc-950 bg-zinc-800 overflow-hidden relative">
                  <img src={`https://i.pravatar.cc/100?u=user${i}`} alt="user" className="w-full h-full object-cover grayscale" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-zinc-950 bg-zinc-900 flex items-center justify-center">
                 <span className="text-[10px] font-bold text-zinc-400">+12k</span>
              </div>
            </div>
            <p className="text-xs font-bold text-zinc-600 uppercase tracking-widest">Users around the world <br /> already on Blinqq</p>
          </div>
        </div>
      </div>

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
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-emerald-400 fill-emerald-400/10" />
            </div>
            <span className="text-2xl font-display font-bold text-white">Blinqq</span>
          </div>

          <div className="space-y-4">
             <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">
               <Sparkles className="w-4 h-4" />
               Quick Sign Up
             </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Create <span className="premium-gradient-text">Your Account</span>
            </h1>
            <p className="text-zinc-500 font-light text-lg">
              Fill your details below to create your Blinqq account.
            </p>
          </div>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-white/5"></div>
            <span className="flex-shrink mx-4 text-zinc-700 text-[10px] font-bold uppercase tracking-[0.2em]">Your Details</span>
            <div className="flex-grow border-t border-white/5"></div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">First Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-zinc-600 group-focus-within:text-emerald-500 transition-colors" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="First"
                    className="block w-full pl-11 pr-4 py-4 bg-zinc-900/50 border border-white/5 rounded-2xl text-white placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all text-base font-light"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">Last Name</label>
                <input
                  type="text"
                  required
                  placeholder="Last"
                  className="block w-full px-4 py-4 bg-zinc-900/50 border border-white/5 rounded-2xl text-white placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all text-base font-light"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-zinc-600 group-focus-within:text-emerald-500 transition-colors" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  className="block w-full pl-11 pr-4 py-4 bg-zinc-900/50 border border-white/5 rounded-2xl text-white placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all text-base font-light"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-zinc-600 group-focus-within:text-emerald-500 transition-colors" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="At least 8 characters"
                  className="block w-full pl-11 pr-11 py-4 bg-zinc-900/50 border border-white/5 rounded-2xl text-white placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/50 transition-all text-base font-light"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center group-hover:text-emerald-500 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 py-2 px-1">
               <input 
                type="checkbox" 
                id="terms" 
                required
                className="w-5 h-5 rounded-lg bg-zinc-900 border-white/5 text-emerald-500 focus:ring-emerald-500/20 transition-all cursor-pointer" 
               />
               <label htmlFor="terms" className="text-xs text-zinc-500 font-light leading-snug">
                 I agree to the <Link href="/terms" className="text-zinc-300 font-bold hover:text-emerald-400">Terms of Service</Link> and <Link href="/privacy" className="text-zinc-300 font-bold hover:text-emerald-400">Privacy Policy</Link>.
               </label>
            </div>

            <button
              disabled={isLoading}
              className="group relative w-full py-5 bg-white text-zinc-950 font-bold rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin"></div>
                  <span>Creating account...</span>
                </div>
              ) : (
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Create Account
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </button>
          </form>

          <p className="text-center text-zinc-500 font-light">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-emerald-500 font-bold hover:text-emerald-400 transition-colors">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
