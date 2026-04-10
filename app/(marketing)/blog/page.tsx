'use client';

import { 
  Search, Calendar, Clock, ArrowRight, Zap, 
  Sparkles, TrendingUp, Cpu, Shield, Globe, 
  ChevronRight, Filter
} from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'The Paradox of Decentralized Liquidity',
    excerpt: 'Exploring how next-generation settlement protocols are bridge the gap between traditional finance and the decentralized apex.',
    category: 'Protocol Strategy',
    author: 'Aria Sterling',
    date: 'Oct 22, 2026',
    readTime: '6 min read',
    icon: Zap,
    color: 'text-emerald-400',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2232',
  },
  {
    title: 'Quantum-Safe Encryption in Retail Finance',
    excerpt: 'Why the next decade of banking security will be defined by post-quantum cryptographic standards and zero-knowledge proofs.',
    category: 'Security Vault',
    author: 'Silas Thorne',
    date: 'Oct 18, 2026',
    readTime: '8 min read',
    icon: Shield,
    color: 'text-blue-400',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070',
  },
  {
    title: 'The Rise of Programmable Assets',
    excerpt: 'How smart-contract level composability is transforming mundane digital payments into intelligent global ecosystem interactions.',
    category: 'Asset Engineering',
    author: 'Elena Vance',
    date: 'Oct 12, 2026',
    readTime: '5 min read',
    icon: Cpu,
    color: 'text-purple-400',
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=2232',
  },
  {
    title: 'Navigating Global Settlement Bridges',
    excerpt: 'A deep dive into cross-border routing efficiency and the reduction of frictional slippage in high-velocity treasury movemement.',
    category: 'Liquidity Port',
    author: 'Marcus Chen',
    date: 'Oct 05, 2026',
    readTime: '7 min read',
    icon: Globe,
    color: 'text-yellow-400',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072',
  },
];

const categories = ['All Intelligence', 'Protocol Strategy', 'Security Vault', 'Asset Engineering', 'Liquidity Port'];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-midnight pt-32 pb-24 relative overflow-hidden text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-emerald-500/5 rounded-full blur-[140px] opacity-10"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl space-y-8 mb-20 animate-fade-in">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-emerald-400 fill-emerald-400/10" />
             </div>
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-500">Intelligence Hub</span>
           </div>
           <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-[1.1]">
             Decoding the <br />
             <span className="premium-gradient-text">Future of Value</span>
           </h1>
           <p className="text-xl text-zinc-400 font-light leading-relaxed">
             Insights and technical intelligence from the collective engineering the world's most advanced financial ecosystem.
           </p>
        </div>

        {/* Featured Post */}
        <div className="relative mb-24 group animate-fade-in-up">
           <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-600/20 blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
           <div className="relative h-[600px] glass-card rounded-[3rem] border-white/5 overflow-hidden flex flex-col lg:flex-row items-stretch">
             <div className="lg:w-1/2 h-full relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1974" 
                  alt="Featured Post" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent lg:hidden"></div>
             </div>
             <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center space-y-8 relative z-10 bg-midnight/40 backdrop-blur-md lg:bg-transparent">
                <div className="flex items-center gap-3 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                  <TrendingUp className="w-4 h-4" />
                  Trending Intelligence
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                  The Genesis Protocol: <br />
                  Defining the Apex Era
                </h2>
                <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-lg">
                  A foundational analysis of how Blinqq's proprietary bridge architecture resolves the traditional trilemma of speed, security, and decentralization.
                </p>
                <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-zinc-500">
                   <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Oct 24, 2026</span>
                   <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 12 min read</span>
                </div>
                <Link href="#" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-zinc-950 rounded-2xl font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all w-fit">
                  Read Protocol Analysis
                  <ArrowRight className="w-5 h-5" />
                </Link>
             </div>
           </div>
        </div>

        {/* Filters & Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 animate-fade-in">
           <div className="flex flex-wrap items-center gap-2">
             {categories.map((category, idx) => (
               <button 
                key={idx}
                className={`px-6 py-3 rounded-xl border text-xs font-bold uppercase tracking-widest transition-all ${
                  idx === 0 
                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]' 
                  : 'bg-white/5 border-white/5 text-zinc-500 hover:text-white hover:bg-white/10'
                }`}
               >
                 {category}
               </button>
             ))}
           </div>
           
           <div className="relative w-full md:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 group-focus-within:text-emerald-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Search intelligence..." 
                className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/5 rounded-2xl text-white placeholder-zinc-700 focus:outline-none focus:border-emerald-500/50 transition-all font-light text-sm"
              />
           </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
           {blogPosts.map((post, idx) => (
             <div 
              key={idx}
              className="group relative h-[500px] glass-card rounded-[2.5rem] border-white/5 overflow-hidden flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
             >
                <div className="h-2/3 relative overflow-hidden">
                   <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 opacity-40 group-hover:opacity-70" 
                  />
                   <div className="absolute top-6 left-6 flex items-center gap-2">
                     <div className="px-4 py-2 bg-midnight/80 backdrop-blur-md rounded-xl border border-white/10">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">{post.category}</span>
                     </div>
                   </div>
                   <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-midnight to-transparent"></div>
                </div>
                
                <div className="p-8 space-y-4 relative z-10 -mt-10">
                   <h3 className="text-2xl font-display font-bold text-white group-hover:text-emerald-400 transition-colors">
                     {post.title}
                   </h3>
                   <p className="text-zinc-500 text-sm font-light leading-relaxed line-clamp-2">
                     {post.excerpt}
                   </p>
                   <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-3">
                         <div className="flex flex-col">
                            <span className="text-white text-xs font-bold">{post.author}</span>
                            <span className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">{post.date}</span>
                         </div>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all cursor-pointer">
                        Initiate Context
                        <ArrowRight className="w-4 h-4" />
                      </div>
                   </div>
                </div>
                
                {/* Decorative hover elements */}
                <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500`}></div>
             </div>
           ))}
        </div>

        {/* Newsletter Callout */}
        <div className="relative overflow-hidden glass-card rounded-[3rem] p-12 md:p-20 text-center space-y-8 border-white/5">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]"></div>
           <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
                <Sparkles className="w-3 h-3 text-blue-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Sync Intelligence</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Don't miss a <span className="premium-gradient-text">Protocol Shift</span></h2>
              <p className="text-zinc-500 text-lg font-light leading-relaxed">
                Join our private intelligence feed to receive cryptographic updates, strategic analysis, and early network deployments directly to your node.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4 pt-4">
                 <input 
                  type="email" 
                  placeholder="nexus-handle@email.com" 
                  className="w-full md:flex-grow px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-zinc-700 focus:outline-none focus:border-emerald-500/50 transition-all font-light"
                 />
                 <button className="w-full md:w-auto px-10 py-5 bg-white text-zinc-950 rounded-2xl font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 active:scale-95 transition-all outline-none">
                   Initialize Sync
                 </button>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-700">Zero-Spam Architecture. Instant Revocation Guaranteed.</p>
           </div>
        </div>

      </div>
    </main>
  );
}
