'use client';

import { Download, ArrowRight, Smartphone, AppWindow } from 'lucide-react';

export default function CTA() {
  return (
    <section id="download" className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Join thousands of users who are already enjoying seamless digital payments and earning rewards
        </p>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a
            href="#"
            className="group inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            <AppWindow className="w-6 h-6 mr-3" />
            <div className="text-left">
              <div className="text-xs text-gray-500">Download on</div>
              <div className="text-lg font-bold">Google Play</div>
            </div>
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#"
            className="group inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            <Smartphone className="w-6 h-6 mr-3" />
            <div className="text-left">
              <div className="text-xs text-gray-500">Download on</div>
              <div className="text-lg font-bold">App Store</div>
            </div>
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 text-blue-100">
          <div className="flex items-center">
            <CheckCircle2 className="w-5 h-5 mr-2 text-green-300" />
            <span>No Hidden Fees</span>
          </div>
          <div className="flex items-center">
            <CheckCircle2 className="w-5 h-5 mr-2 text-green-300" />
            <span>Bank-Level Security</span>
          </div>
          <div className="flex items-center">
            <CheckCircle2 className="w-5 h-5 mr-2 text-green-300" />
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

