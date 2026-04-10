'use client';

import DocumentLayout from '@/components/DocumentLayout';
import { Briefcase, MapPin, Clock, ArrowRight, Zap, Sparkles, Code, Layout, Shield, Globe } from 'lucide-react';

const jobs = [
  {
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    icon: Code,
    color: 'text-blue-400',
  },
  {
    title: 'UI/UX Specialist',
    department: 'Product Design',
    location: 'Remote',
    type: 'Full-time',
    icon: Layout,
    color: 'text-emerald-400',
  },
  {
    title: 'Finance Operations Specialist',
    department: 'Financial Operations',
    location: 'London / Hub',
    type: 'Full-time',
    icon: Zap,
    color: 'text-yellow-400',
  },
  {
    title: 'Security Auditor',
    department: 'Vault Security',
    location: 'Remote',
    type: 'Contract',
    icon: Shield,
    color: 'text-red-400',
  },
  {
    title: 'Growth Lead',
    department: 'Growth',
    location: 'Singapore / Hub',
    type: 'Full-time',
    icon: Globe,
    color: 'text-purple-400',
  },
];

export default function CareersPage() {
  return (
    <DocumentLayout 
      title="Open Roles" 
      subtitle="Join our team and help us build simple digital payments for everyone."
      category="Careers"
    >
      <section className="mb-16">
        <h2>Build With Us</h2>
        <p>
          At Blinqq, we build products that make money easier for people. We are looking for smart, practical people who want to solve real problems.
        </p>
      </section>

      <div className="space-y-6">
        {jobs.map((job, idx) => (
          <div 
            key={idx}
            className="group relative bg-white/5 border border-white/5 rounded-3xl p-6 md:p-8 transition-all duration-500 hover:bg-white/10 hover:border-white/10 hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <job.icon className={`w-7 h-7 ${job.color}`} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-emerald-400 transition-colors m-0">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3 h-3" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-500/80">
                      <Clock className="w-3 h-3" />
                      {job.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="hidden md:block text-xs font-bold uppercase tracking-widest text-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity">Apply Now</span>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all">
                  <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className={`absolute inset-0 bg-current opacity-0 group-hover:opacity-[0.02] blur-3xl transition-opacity rounded-3xl ${job.color}`}></div>
          </div>
        ))}
      </div>

      <div className="mt-20 glass-card rounded-[2.5rem] p-10 border-white/5 relative overflow-hidden text-center space-y-6">
         <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
              <Sparkles className="w-3 h-3 text-blue-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 text-shadow-glow">General Application</span>
            </div>
            <h3 className="text-3xl font-display font-bold text-white mb-4">No suitable role yet?</h3>
            <p className="text-zinc-500 font-light max-w-xl mx-auto mb-8">
              We are always open to meeting great people. Send us your CV and we will get in touch.
            </p>
            <button className="px-8 py-4 bg-white text-zinc-950 rounded-2xl font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all">
              Submit Application
            </button>
         </div>
      </div>
    </DocumentLayout>
  );
}
