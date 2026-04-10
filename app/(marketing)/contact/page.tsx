'use client';

import { Mail, MessageSquare, Phone, Globe, ArrowRight, Zap, Sparkles, Send, ShieldCheck, Clock } from 'lucide-react';
import { useState } from 'react';

const contactHubs = [
  {
    city: 'London / Nexus',
    region: 'European Hub',
    address: '22 Bishopsgate, London EC2N 4AJ',
    icon: Globe,
  },
  {
    city: 'Singapore',
    region: 'Asia-Pacific Core',
    address: '88 Market St, Singapore 048948',
    icon: Zap,
  },
  {
    city: 'New York',
    region: 'Americas Gateway',
    address: 'One World Trade Center, NY 10007',
    icon: ShieldCheck,
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <main className="min-h-screen bg-midnight pt-32 pb-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Form Section */}
          <div className="space-y-12">
            <div className="space-y-6">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-emerald-400 fill-emerald-400/10" />
                 </div>
                 <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-500">Support Nexus</span>
               </div>
               <h1 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight">
                 Initialize <span className="premium-gradient-text">Inquiry</span>
               </h1>
               <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-xl">
                 Our specialized governance team is on standby 24/7 to assist with your institutional or retail node deployment.
               </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 p-8 md:p-10 glass-card rounded-[2.5rem] border-white/5 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">Protocol Handle</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="First Name"
                    className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-2xl text-white placeholder-zinc-700 focus:outline-none focus:border-emerald-500/50 transition-all font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">Entity Reference</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Last Name"
                    className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-2xl text-white placeholder-zinc-700 focus:outline-none focus:border-emerald-500/50 transition-all font-light"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">Communication Channel</label>
                <input 
                  type="email" 
                  required 
                  placeholder="name@nexus.com"
                  className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-2xl text-white placeholder-zinc-700 focus:outline-none focus:border-emerald-500/50 transition-all font-light"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1">Transmission Message</label>
                <textarea 
                  rows={4} 
                  required 
                  placeholder="How can we assist your node today?"
                  className="w-full px-5 py-4 bg-white/5 border border-white/5 rounded-2xl text-white placeholder-zinc-700 focus:outline-none focus:border-emerald-500/50 transition-all font-light resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-white text-zinc-950 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Transmitting...' : (
                  <>
                    Initialize Sync
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            <div className="flex flex-wrap items-center gap-10 pt-4">
               <div className="flex items-center gap-3">
                 <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group hover:border-emerald-500/30 transition-all">
                    <Clock className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                 </div>
                 <div>
                    <p className="text-white font-bold text-sm tracking-wide">Sync Speed</p>
                    <p className="text-zinc-500 text-xs font-light">Average response: 4m</p>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group hover:border-emerald-500/30 transition-all">
                    <MessageSquare className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                 </div>
                 <div>
                    <p className="text-white font-bold text-sm tracking-wide">Live Bridge</p>
                    <p className="text-zinc-500 text-xs font-light">Instant chat operational</p>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Column: Address Hubs Section */}
          <div className="space-y-12 lg:pt-24">
             <div className="space-y-8">
               <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-600 mb-8">Global Node Coordinates</h3>
               
               <div className="space-y-6">
                 {contactHubs.map((hub, idx) => (
                   <div 
                    key={idx}
                    className="group relative glass-card-light rounded-3xl p-6 border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all hover:translate-x-2 cursor-default"
                   >
                     <div className="flex items-center gap-5">
                       <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                         <hub.icon className="w-6 h-6 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                       </div>
                       <div>
                         <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60 mb-1">{hub.region}</p>
                         <h4 className="text-xl font-display font-bold text-white mb-1">{hub.city}</h4>
                         <p className="text-zinc-500 text-sm font-light">{hub.address}</p>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-3xl p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Institutional Access</span>
                </div>
                <h4 className="text-white font-bold text-lg">Prefer Cryptographic Transmission?</h4>
                <p className="text-zinc-500 text-sm font-light leading-relaxed">
                  For PGP-encrypted inquiries or specialized institutional onboarding, please reach out to our secure vault address: 
                  <code className="block mt-2 text-emerald-400/80 bg-zinc-950 px-3 py-2 rounded-lg text-xs break-all">vault-protocol@blinqq.finance</code>
                </p>
             </div>
          </div>

        </div>
      </div>
    </main>
  );
}
