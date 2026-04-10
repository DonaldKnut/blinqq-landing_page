'use client';

import { 
  Zap, Shield, Globe, Cpu, Smartphone, Layout, ArrowRight, 
  Sparkles, CheckCircle2, Star, TrendingUp, Lock, RefreshCw, BarChart3, 
  CreditCard, Wallet
} from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Lock,
    title: 'Biometric Cryptography',
    desc: 'Zero-knowledge proof authentication tied directly to your hardware security module.',
    color: 'text-emerald-400',
  },
  {
    icon: Globe,
    title: 'Cross-Chain Routing',
    desc: 'Instant liquidity swaps across 12+ parallel networks with zero frictional slippage.',
    color: 'text-blue-400',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    desc: 'Visualized institutional data feeds and performance metrics at a glance.',
    color: 'text-purple-400',
  },
  {
    icon: RefreshCw,
    title: 'Instant Settlement',
    desc: 'Finality achieved in <400ms via our proprietary Blinqq Bridge architecture.',
    color: 'text-orange-400',
  },
];

export default function WalletPage() {
  return (
    <main className="min-h-screen bg-midnight pt-32 pb-24 relative overflow-hidden text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[1200px] h-[1200px] bg-emerald-500/5 rounded-full blur-[160px] opacity-10"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[140px] opacity-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-10 animate-fade-in">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
               <Sparkles className="w-3 h-3 text-emerald-400" />
               <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Genesis v2.4 Release</span>
             </div>
             <h1 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tight leading-[0.9]">
               The Apex <br />
               <span className="premium-gradient-text">Protocol</span>
             </h1>
             <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-xl">
               More than a wallet. A high-performance gateway to the global financial ecosystem. Engineered for those who demand the absolute edge of speed and security.
             </p>
             <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-10 py-5 bg-white text-zinc-950 rounded-2xl font-bold flex items-center gap-3 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all">
                  Initialize Download
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all">
                  View Tech Specs
                </button>
             </div>
             <div className="flex items-center gap-8 pt-8 opacity-50">
                <div className="flex items-center gap-2">
                   <Smartphone className="w-4 h-4" />
                   <span className="text-xs font-bold uppercase tracking-widest">iOS & Android</span>
                </div>
                <div className="flex items-center gap-2">
                   <Layout className="w-4 h-4" />
                   <span className="text-xs font-bold uppercase tracking-widest">Desktop Nexus</span>
                </div>
             </div>
          </div>

          {/* Cinematic Device Mockup */}
          <div className="relative group perspective-1000 animate-fade-in-up">
             <div className="absolute inset-x-0 -bottom-20 h-40 bg-emerald-500/20 blur-[120px] rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
             <div className="relative z-10 mx-auto w-full max-w-[320px] aspect-[9/19] bg-zinc-950 rounded-[3rem] border-8 border-zinc-900 shadow-2xl p-4 transform rotate-6 group-hover:rotate-3 transition-transform duration-1000">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 rounded-b-2xl"></div>
                <div className="h-full w-full rounded-[2.2rem] overflow-hidden bg-midnight relative">
                   {/* Mock App UI */}
                   <div className="p-6 pt-12 space-y-6">
                      <div className="flex justify-between items-center">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                          <Zap className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10"></div>
                      </div>
                      <div className="space-y-1 pt-4">
                         <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Total Liquidity</p>
                         <h4 className="text-3xl font-display font-bold">$124,942.00</h4>
                      </div>
                      <div className="h-32 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl border border-white/5 p-4 flex flex-col justify-end">
                         <div className="flex justify-between items-end">
                           <CreditCard className="w-6 h-6 text-white/40" />
                           <div className="text-right">
                              <p className="text-[8px] uppercase font-bold text-white/40">Nexus Card</p>
                              <p className="text-xs font-bold font-mono">**** 4912</p>
                           </div>
                         </div>
                      </div>
                      <div className="space-y-3">
                         <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">System Protocols</p>
                         {[1, 2, 3].map(i => (
                           <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                             <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center">
                                   <RefreshCw className="w-3 h-3 text-emerald-500" />
                                </div>
                                <div className="h-2 w-16 bg-zinc-800 rounded"></div>
                             </div>
                             <div className="h-2 w-10 bg-emerald-500/20 rounded"></div>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
             {/* Secondary Mockup Floating */}
             <div className="absolute -left-12 bottom-20 w-48 h-48 bg-midnight/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 hidden md:flex flex-col justify-between transform -rotate-12 group-hover:-rotate-6 transition-transform duration-700">
                <Shield className="w-8 h-8 text-emerald-400" />
                <div className="space-y-2">
                   <p className="text-[8px] uppercase font-bold text-zinc-500 tracking-widest">Vault Status</p>
                   <p className="text-sm font-bold text-white">Fortified</p>
                </div>
             </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
           {features.map((feature, idx) => (
             <div 
              key={idx}
              className="group glass-card p-10 rounded-[2.5rem] border-white/5 hover:bg-white/[0.05] transition-all hover:-translate-y-2"
             >
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                   <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-zinc-500 text-sm font-light leading-relaxed">
                  {feature.desc}
                </p>
             </div>
           ))}
        </div>

        {/* Comparison Tier Section */}
        <div className="mb-32 space-y-20">
           <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Evolve Your <span className="premium-gradient-text">Identity</span></h2>
              <p className="text-zinc-500 font-light">Select the level of institutional protocol power you require.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Standard Node', price: 'Free', features: ['Core Wallet', 'Global Transfers', 'L1 Security'], button: 'Initialize' },
                { name: 'Apex Elite', price: '$24.99/mo', features: ['Priority Routing', 'L2 Liquidity', 'Zero Slippage', 'Vault Insurance'], highlight: true, button: 'Upgrade to Apex' },
                { name: 'Foundry Institutional', price: 'Custom', features: ['Whitelabel Infrastructure', 'Multi-sig Custody', 'Enterprise API', 'Dedicated Strategist'], button: 'Inquire' },
              ].map((tier, idx) => (
                <div 
                  key={idx}
                  className={`relative p-10 rounded-[3rem] flex flex-col justify-between ${
                    tier.highlight 
                    ? 'bg-white/5 border-emerald-500/30 border-2 shadow-[0_0_40px_rgba(16,185,129,0.1)]' 
                    : 'bg-white/[0.02] border border-white/5'
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-zinc-950 text-[10px] font-bold uppercase tracking-widest rounded-full">
                      Most Deployed
                    </div>
                  )}
                  <div className="space-y-8">
                     <div className="space-y-2">
                        <h4 className="text-xl font-display font-bold text-zinc-400">{tier.name}</h4>
                        <div className="flex items-baseline gap-1">
                           <span className="text-4xl font-display font-bold text-white">{tier.price}</span>
                        </div>
                     </div>
                     <ul className="space-y-6">
                        {tier.features.map(f => (
                          <li key={f} className="flex items-center gap-3 text-sm text-zinc-500 font-light">
                             <CheckCircle2 className="w-4 h-4 text-emerald-500/50" />
                             {f}
                          </li>
                        ))}
                     </ul>
                  </div>
                  <button className={`mt-10 w-full py-5 rounded-2xl font-bold transition-all ${
                    tier.highlight 
                    ? 'bg-white text-zinc-950 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                  }`}>
                    {tier.button}
                  </button>
                </div>
              ))}
           </div>
        </div>

        {/* Global Network Section */}
        <div className="relative glass-card rounded-[4rem] p-12 md:p-24 border-white/5 overflow-hidden">
           <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full -right-20 -bottom-20"></div>
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                 <div className="w-16 h-16 rounded-3xl bg-zinc-900 border border-white/10 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-blue-400" />
                 </div>
                 <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">The Decentralized <br /> <span className="premium-gradient-text">Global Bridge</span></h2>
                 <p className="text-lg text-zinc-400 font-light leading-relaxed">
                   Sync your wallet with our global node network to experience near-zero latency liquidation and institutional-grade settlement no matter where you are on the planet.
                 </p>
                 <div className="grid grid-cols-2 gap-8 pt-4">
                    <div>
                       <h4 className="text-3xl font-display font-bold text-white">50+</h4>
                       <p className="text-xs uppercase font-bold text-zinc-600 tracking-wider">Operational Nodes</p>
                    </div>
                    <div>
                       <h4 className="text-3xl font-display font-bold text-white">&lt;400ms</h4>
                       <p className="text-xs uppercase font-bold text-zinc-600 tracking-wider">Average Settlement</p>
                    </div>
                 </div>
              </div>
              <div className="relative aspect-square">
                 {/* Decorative Network Visualization */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full border border-white/5 rounded-full animate-ping-slow"></div>
                    <div className="absolute w-4/5 h-4/5 border border-white/5 rounded-full animate-ping-slow [animation-delay:1s]"></div>
                    <div className="absolute w-2/3 h-2/3 border border-white/5 rounded-full animate-ping-slow [animation-delay:2s]"></div>
                    <div className="relative w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                       <Zap className="w-6 h-6 text-blue-400" />
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </main>
  );
}
