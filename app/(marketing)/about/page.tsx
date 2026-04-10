'use client';

import { 
  Zap, Shield, Globe, Users, Target, Rocket, 
  Sparkles, ArrowRight, Heart, Award, ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-midnight pt-32 pb-24 relative overflow-hidden text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-emerald-500/5 rounded-full blur-[140px] opacity-10"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Mission Hero */}
        <div className="max-w-4xl space-y-10 mb-32 animate-fade-in">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-emerald-400 fill-emerald-400/10" />
             </div>
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-500">Our Protocol Mission</span>
           </div>
           <h1 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tight leading-[0.9]">
             Architecting the <br />
             <span className="premium-gradient-text">Freedom of Value</span>
           </h1>
           <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl">
             We believe that the next generation of global finance should be borderless, instant, and accessible to everyone. Blinqq is the bridge from the old world to the decentralized apex.
           </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
           {[
             { 
               icon: ShieldCheck, 
               title: 'Uncompromising Security', 
               desc: 'We prioritize the safety of your assets above all else, utilizing military-grade encryption and audited protocol layers.',
               color: 'text-emerald-400'
             },
             { 
               icon: Globe, 
               title: 'Borderless Liquidity', 
               desc: 'Global settlement shouldn\'t take days. We operate at the speed of thought, bridging markets in milliseconds.',
               color: 'text-blue-400'
             },
             { 
               icon: Heart, 
               title: 'User Sovereignty', 
               desc: 'You are the only owner of your data and assets. We provide the tools; you maintain absolute control.',
               color: 'text-pink-400'
             },
           ].map((value, idx) => (
             <div key={idx} className="group p-10 glass-card rounded-[3rem] border-white/5 hover:bg-white/[0.05] transition-all hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                   <value.icon className={`w-8 h-8 ${value.color} fill-${value.color.split('-')[1]}-400/10`} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-6 uppercase tracking-tight">{value.title}</h3>
                <p className="text-zinc-500 font-light leading-relaxed text-lg">
                  {value.desc}
                </p>
             </div>
           ))}
        </div>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
           <div className="relative aspect-square glass-card rounded-[4rem] border-white/5 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070" 
                alt="Innovation Hub" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-midnight via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12 space-y-4">
                 <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                 </div>
                 <h4 className="text-2xl font-display font-bold text-white">Established 2024</h4>
                 <p className="text-zinc-400 text-sm font-light">Evolving the digital landscape from our London HQ.</p>
              </div>
           </div>
           
           <div className="space-y-12">
              <div className="space-y-6">
                 <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Built by <span className="premium-gradient-text">Engineers</span>, Backed by <span className="premium-gradient-text">Visionaries</span></h2>
                 <p className="text-lg text-zinc-500 font-light leading-relaxed">
                   Blinqq was born out of a simple frustration: why does moving money feel like a relic of the past when we live in the digital future? 
                 </p>
                 <p className="text-lg text-zinc-500 font-light leading-relaxed">
                   Our team is a collective of cryptographic engineers, financial strategists, and world-class designers dedicated to stripping away the friction of global finance.
                 </p>
              </div>
              
              <div className="grid grid-cols-2 gap-10">
                 <div>
                    <h5 className="text-3xl font-display font-bold text-white mb-1">100k+</h5>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Active Protocol Nodes</p>
                 </div>
                 <div>
                    <h5 className="text-3xl font-display font-bold text-white mb-1">$4B+</h5>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Quarterly Volume Flow</p>
                 </div>
              </div>

              <Link href="/careers" className="inline-flex items-center gap-4 group text-emerald-400 font-bold tracking-widest uppercase text-xs">
                 Join the Collective
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
           </div>
        </div>

        {/* Global Impact CTA */}
        <div className="relative glass-card rounded-[4rem] p-12 md:p-24 border-white/5 overflow-hidden text-center space-y-10">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]"></div>
           <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <div className="w-20 h-20 bg-zinc-900 border border-white/10 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                 <Zap className="w-10 h-10 text-emerald-400 fill-emerald-400/10" />
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight leading-tight">Ready to bridge to the <br /> <span className="premium-gradient-text">Apex Protocol?</span></h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed">
                The future of finance is already here. Secure your credentials and deploy your node into the most advanced network on the planet.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                 <Link href="/auth/signup" className="px-12 py-5 bg-white text-zinc-950 rounded-2xl font-bold flex items-center gap-3 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all">
                   Initialize Identity
                   <ArrowRight className="w-5 h-5" />
                 </Link>
              </div>
           </div>
        </div>

      </div>
    </main>
  );
}
