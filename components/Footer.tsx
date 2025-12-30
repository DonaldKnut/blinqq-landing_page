'use client';

import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin, Zap } from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Security', href: '#security' },
    { name: 'API', href: '#api' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'Compliance', href: '#compliance' },
  ],
  support: [
    { name: 'Help Center', href: '#help' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Community', href: '#community' },
    { name: 'Status', href: '#status' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-blue-500' },
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-600 rounded-2xl blur-sm opacity-75"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Zap className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-display font-bold text-white">Blinqq</h3>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Your all-in-one fintech platform for instant payments, investments, and financial growth.
            </p>
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mr-3 group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <span className="hover:text-white transition-colors">support@blinqq.com</span>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mr-3 group-hover:bg-emerald-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="hover:text-white transition-colors">+234 800 BLINQQ</span>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mr-3 group-hover:bg-purple-500/20 transition-colors">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <span className="hover:text-white transition-colors">Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-display font-semibold mb-6 capitalize text-lg">{category}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors duration-200 text-gray-400 hover:translate-x-1 inline-block transform"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Blinqq. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
