'use client';

import { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, DollarSign, Globe } from 'lucide-react';

const stats = [
  { icon: Users, value: '100K+', label: 'Active Users', color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-50' },
  { icon: DollarSign, value: '₦10B+', label: 'Transactions', color: 'from-emerald-500 to-emerald-600', bgColor: 'bg-emerald-50' },
  { icon: Globe, value: '150+', label: 'Countries', color: 'from-purple-500 to-purple-600', bgColor: 'bg-purple-50' },
  { icon: TrendingUp, value: '99.9%', label: 'Uptime', color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-50' },
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100 hover:border-transparent transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>

              {/* Content */}
              <div className="relative">
                <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>

              {/* Decorative element */}
              <div className={`absolute top-4 right-4 w-20 h-20 ${stat.bgColor} rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
