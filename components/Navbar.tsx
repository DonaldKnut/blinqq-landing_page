'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap, ChevronRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`mobile-nav-shell fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-4 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative group flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-500/30 rounded-xl blur-md group-hover:bg-brand-500/50 transition-all duration-500"></div>
                <div className="logo-shell relative w-10 h-10 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                  <Zap className="w-5 h-5 text-brand-400 fill-brand-400/10" />
                </div>
              </div>
              <span className="text-2xl font-display font-bold tracking-tight text-white group-hover:text-brand-400 transition-colors duration-300">
                Blinqq
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-2 py-1 backdrop-blur-md">
            {[
              { name: 'Home', href: '#home' },
              { name: 'Core Features', href: '#features' },
              { name: 'Benefits', href: '#benefits' },
              { name: 'How It Works', href: '#how-it-works' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-5 py-2 text-zinc-400 hover:text-white transition-all duration-300 font-medium text-sm group"
              >
                {item.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-brand-500 rounded-full group-hover:w-1 transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <ThemeToggle />
            <Link 
              href="/auth/login" 
              className="text-sm font-bold text-zinc-500 hover:text-white transition-colors tracking-widest uppercase"
            >
              Log In
            </Link>
            <Link
              href="/auth/signup"
              className="px-8 py-3 bg-white text-zinc-950 rounded-2xl font-bold text-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-trigger md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 right-0 mt-2 mx-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="mobile-menu-panel bg-midnight/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl space-y-2">
            {[
              { name: 'Home', href: '#home' },
              { name: 'Core Features', href: '#features' },
              { name: 'Benefits', href: '#benefits' },
              { name: 'How It Works', href: '#how-it-works' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-between px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
            <div className="pt-6 grid grid-cols-1 gap-4">
              <div className="flex justify-center">
                <ThemeToggle />
              </div>
              <Link 
                href="/auth/login" 
                className="px-6 py-4 bg-white/5 text-white rounded-2xl font-bold text-sm hover:bg-white/10 transition-all text-center"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/auth/signup"
                className="px-6 py-4 bg-emerald-500 text-zinc-950 rounded-2xl font-bold text-sm text-center shadow-lg shadow-emerald-500/20"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
