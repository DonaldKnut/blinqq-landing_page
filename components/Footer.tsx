'use client';

import Link from 'next/link';
import { Twitter, Instagram, Linkedin, Zap, Sparkles } from 'lucide-react';

const footerLinks = {
  ecosystem: [
    { name: '@username Transfers', href: '#features' },
    { name: 'Multi-Currency Wallets', href: '#features' },
    { name: 'Agent Cash Access', href: '#features' },
    { name: 'Cross-Border Payments', href: '#features' },
  ],
  governance: [
    { name: 'About Blinqq', href: '#home' },
    { name: 'Roadmap', href: '#benefits' },
    { name: 'Careers', href: '/careers' },
    { name: 'How It Works', href: '#how-it-works' },
  ],
  standard: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'KYC & Security', href: '/terms' },
    { name: 'Fraud Protection', href: '/privacy' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
];

export default function Footer() {
  return (
    <footer className="bg-midnight pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-xl group cursor-pointer hover:border-emerald-500/30 transition-all duration-500">
                <Zap className="w-6 h-6 text-brand-400 fill-brand-400/10" />
              </div>
              <h3 className="text-3xl font-display font-bold text-white tracking-tight">Blinqq</h3>
            </div>
            <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-sm">
              A secure, username-based fintech platform for instant local and cross-border payments, digital wallets, and agent cash access.
            </p>
            <div className="flex items-center gap-4 pt-4">
               {socialLinks.map((social) => (
                 <a
                   key={social.label}
                   href={social.href}
                   className={`w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center transition-all duration-500 hover:border-white/20 hover:-translate-y-1 ${social.color}`}
                 >
                   <social.icon className="w-5 h-5" />
                 </a>
               ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-6">
                <h4 className="text-white text-xs font-bold uppercase tracking-widest">
                  {category === 'ecosystem' ? 'Product' : category === 'governance' ? 'Company' : 'Legal'}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-zinc-500 hover:text-white transition-colors duration-300 font-light text-base block group"
                      >
                        <span className="relative inline-block">
                          {link.name}
                          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-zinc-500 text-sm font-light">
            <Sparkles className="w-4 h-4 text-emerald-500 opacity-50" />
            <span>© {new Date().getFullYear()} Blinqq</span>
          </div>
          
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Service Online</span>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-zinc-400 cursor-pointer transition-colors">
               Uptime: 99.9%
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
