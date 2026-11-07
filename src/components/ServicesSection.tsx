import React from 'react';
import { motion } from 'motion/react';
import {
  Globe,
  Smartphone,
  Server,
  Bot,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface ServicesSectionProps {
  onStartProject: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onStartProject }) => {
  const services = [
    {
      title: 'Website Development',
      description:
        'Professional responsive business websites and modern web applications built for speed, SEO excellence, and conversion.',
      icon: Globe,
      features: [
        'Custom React & Next.js architectures',
        'Mobile-first responsive fluid layouts',
        'SEO optimization & ultra-fast loading',
        'Modern luxury animations & glassmorphism',
      ],
      color: '#60A5FA',
    },
    {
      title: 'Mobile App Development',
      description:
        'High-quality Android and iOS applications using Flutter, delivering 60FPS fluid interactions and native device integrations.',
      icon: Smartphone,
      features: [
        'Single codebase for iOS & Android',
        'Real-time data sync with Firebase',
        'Custom UI/UX and micro-animations',
        'App Store & Play Store publication ready',
      ],
      color: '#40C4FF',
    },
    {
      title: 'Custom Software Development',
      description:
        'Business management systems, administrative dashboards, POS software, and scalable .NET enterprise solutions.',
      icon: Server,
      features: [
        'Robust .NET Core & C# backend services',
        'Relational databases (SQL Server, Postgres)',
        'Role-based access control (RBAC)',
        'Automated reports & hardware integrations',
      ],
      color: '#A074C4',
    },
    {
      title: 'AI Agents & Automation',
      description:
        'Intelligent digital solutions and workflow automation designed to streamline business operations and eliminate repetitive tasks.',
      icon: Bot,
      features: [
        'Autonomous AI agentic architectures',
        'LLM & OpenAI/Gemini multi-tool pipelines',
        'Robotics & hardware sensor telemetry',
        'Automated workflow & notification triggers',
      ],
      color: '#FFD700',
    },
  ];

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background Golden Lighting effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-[#996515]/10 via-[#D4AF37]/15 to-[#FFD700]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161616] border border-[#D4AF37]/40 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#FFD700] uppercase">
              YOUR VISION. OUR TECHNOLOGY.
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight text-white leading-tight">
            <span>Build Your Website, Application & Software </span>
            <span className="gold-text-shimmer block sm:inline">for a Better Future.</span>
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
            At Neurovex, we transform ideas into powerful digital solutions. From professional websites and high-performance mobile applications to custom management systems and intelligent AI solutions, we build technology that helps businesses succeed.
          </p>
        </div>

        {/* Four Premium Golden Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="gold-glass-card rounded-2xl p-6 sm:p-7 border border-[#D4AF37]/35 hover:border-[#FFD700] hover:shadow-[0_0_35px_rgba(255,215,0,0.3)] transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden"
              >
                {/* Golden Top Edge Glow */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Glowing Icon Header */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#D4AF37]/50 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] transition-all duration-300">
                    <Icon className="w-7 h-7 text-[#FFD700]" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors font-serif mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Service Features Checklist */}
                <div className="pt-4 border-t border-[#D4AF37]/20 space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Central Call to Action */}
        <div className="text-center pt-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStartProject}
            className="gold-button px-9 py-4 rounded-full text-sm sm:text-base font-bold tracking-wide inline-flex items-center gap-3 cursor-pointer shadow-[0_0_35px_rgba(212,175,55,0.45)] transition-all duration-300"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

      </div>
    </section>
  );
};
