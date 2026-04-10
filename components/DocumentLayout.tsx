'use client';

import Link from 'next/link';
import { ChevronLeft, Share2, Printer, ArrowRight, Zap, Sparkles } from 'lucide-react';

interface DocumentLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  children: React.ReactNode;
  category?: string;
}

export default function DocumentLayout({ 
  title, 
  subtitle, 
  lastUpdated, 
  children,
  category = "Important Information"
}: DocumentLayoutProps) {
  return (
    <main className="min-h-screen bg-midnight pt-32 pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[140px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] opacity-10"></div>
        
        {/* Animated Rays */}
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent rotate-6"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {/* Navigation / Actions */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-16 animate-fade-in">
          <Link 
            href="/" 
            className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/30 transition-all">
              <ChevronLeft className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest leading-none">Back to Home</span>
          </Link>

          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white transition-all hover:bg-white/10">
              <Printer className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white transition-all hover:bg-white/10">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Header Section */}
        <div className="space-y-8 mb-20 animate-fade-in-up">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-emerald-400 fill-emerald-400/10" />
             </div>
             <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-500">{category}</span>
                <span className="text-sm font-bold text-zinc-500 leading-none">Blinqq</span>
             </div>
           </div>

           <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                  {subtitle}
                </p>
              )}
           </div>

           {lastUpdated && (
             <div className="pt-4 flex items-center gap-4 text-zinc-600">
               <div className="flex items-center gap-2">
                 <Sparkles className="w-4 h-4 opacity-50" />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Updated Info</span>
               </div>
               <div className="w-1 h-1 rounded-full bg-zinc-800"></div>
               <span className="text-xs font-light">Last updated: {lastUpdated}</span>
             </div>
           )}
        </div>

        {/* Dynamic Content Container */}
        <div className="glass-card rounded-[3rem] p-8 md:p-12 lg:p-16 border-white/5 relative group animate-fade-in shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none rounded-[3rem]"></div>
          
          {/* Main Body Text */}
          <article className="relative z-10 prose prose-invert prose-zinc max-w-none 
            prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
            prose-p:text-zinc-400 prose-p:font-light prose-p:leading-relaxed prose-p:text-lg
            prose-li:text-zinc-400 prose-li:font-light
            prose-strong:text-emerald-400 prose-strong:font-bold
            prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:text-emerald-300 transition-colors">
            {children}
          </article>

          {/* Bottom Callout */}
          <div className="mt-16 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
             <div className="space-y-1">
                <p className="text-white font-bold text-sm tracking-wide">Need help with this page?</p>
                <p className="text-zinc-500 text-xs font-light">Our support team is available anytime.</p>
             </div>
             <Link 
               href="/auth/signup" 
               className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-sm hover:bg-white/10 transition-all"
             >
               Create Account
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </div>

        {/* Sticky Utility (Optional) */}
        <div className="mt-12 text-center text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-800 hover:text-zinc-600 transition-colors cursor-default">
           End of Document
        </div>
      </div>
    </main>
  );
}
