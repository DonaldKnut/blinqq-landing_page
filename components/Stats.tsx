'use client';

import { TrendingUp, Users, DollarSign, Globe } from 'lucide-react';

const stats = [
  { icon: Users, value: '100K+', label: 'Active Users', color: 'text-blue-600' },
  { icon: DollarSign, value: '₦10B+', label: 'Transactions', color: 'text-green-600' },
  { icon: Globe, value: '150+', label: 'Countries', color: 'text-purple-600' },
  { icon: TrendingUp, value: '99.9%', label: 'Uptime', color: 'text-orange-600' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center transform transition-all duration-300 hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 ${stat.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

