'use client';

import { Download, ArrowRight, Smartphone, AppWindow, CheckCircle2 } from 'lucide-react';

export default function CTA() {
  return (
    <section id="download" className="py-24 bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-700 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
          <Sparkles className="w-4 h-4 mr-2 text-white" />
          <span className="text-sm font-semibold text-white">Ready to Get Started?</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
          Join Thousands of Users
        </h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Start enjoying seamless digital payments and earning rewards today. Download the app and experience the future of banking.
        </p>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a
            href="#"
            className="group inline-flex items-center px-8 py-5 bg-white text-gray-900 font-semibold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto justify-center min-w-[240px]"
          >
            <AppWindow className="w-6 h-6 mr-3" />
            <div className="text-left">
              <div className="text-xs text-gray-500 font-normal">Download on</div>
              <div className="text-lg font-bold">Google Play</div>
            </div>
            <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#"
            className="group inline-flex items-center px-8 py-5 bg-white text-gray-900 font-semibold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 w-full sm:w-auto justify-center min-w-[240px]"
          >
            <Smartphone className="w-6 h-6 mr-3" />
            <div className="text-left">
              <div className="text-xs text-gray-500 font-normal">Download on</div>
              <div className="text-lg font-bold">App Store</div>
            </div>
            <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 text-blue-100">
          {[
            { text: 'No Hidden Fees', icon: CheckCircle2 },
            { text: 'Bank-Level Security', icon: CheckCircle2 },
            { text: '24/7 Support', icon: CheckCircle2 },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center group">
              <div className="w-6 h-6 mr-2 rounded-full bg-emerald-400/20 flex items-center justify-center group-hover:bg-emerald-400/30 transition-colors">
                <item.icon className="w-4 h-4 text-emerald-300" />
              </div>
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}
