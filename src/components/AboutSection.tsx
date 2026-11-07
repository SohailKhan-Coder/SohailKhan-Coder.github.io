import React from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  GraduationCap,
  Globe2,
  Cpu,
  Sparkles,
  Rocket,
  CheckCircle2,
  Terminal,
  Laptop,
  Handshake,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const experiences = [
    {
      id: 'neurovex',
      title: 'Founder of Neurovex',
      subtitle: 'Executive & Lead Architect',
      description:
        'Building innovative software, high-performance websites, mobile applications, and AI-powered solutions that empower businesses worldwide.',
      icon: Rocket,
      highlight: 'Core Leadership',
    },
    {
      id: 'virtzon',
      title: 'Software Developer | Virtzon',
      subtitle: 'Software Solutions & Collaborative Projects',
      description:
        'Working as a Software Developer with Virtzon, contributing to software development, technical solutions, and collaborative projects.',
      icon: Laptop,
      highlight: 'Active Role',
    },
    {
      id: 'it-artificer',
      title: '2 Years at IT Artificer',
      subtitle: 'Software Developer',
      description:
        'Professional hands-on experience in enterprise software development, backend architectures, and mission-critical production IT projects.',
      icon: Briefcase,
      highlight: 'Industry Track Record',
    },
    {
      id: 'cs-foundation',
      title: 'Computer Science',
      subtitle: 'Academic & Practical Foundation',
      description:
        'Strong computer science background encompassing data structures, algorithms, object-oriented design, systems engineering, and computing theory.',
      icon: GraduationCap,
      highlight: 'Rigorous Engineering',
    },
    {
      id: 'teaching',
      title: 'Remote International Teaching',
      subtitle: 'Instructor & Mentor',
      description:
        'Teaching, coaching, and mentoring tech students internationally across multiple continents through interactive live remote coding classes.',
      icon: Globe2,
      highlight: 'Global Educator',
    },
    {
      id: 'ai-robotics',
      title: 'AI Agents & Robotics',
      subtitle: 'R&D and Modern Tech Exploration',
      description:
        'Pioneering intelligent autonomous AI agents, machine learning workflows, automation pipelines, and robotics hardware interfaces.',
      icon: Cpu,
      highlight: 'Next-Gen Research',
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141414] border border-[#D4AF37]/35 text-[#FFD700] text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Background & Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight text-white">
            <span className="gold-text-shimmer">About Me</span>
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            I'm Sohail Khan, Founder of Neurovex, software developer, freelancer, and remote international instructor. Alongside founding Neurovex, I work as a Software Developer with Virtzon, collaborating on software solutions and technology-driven projects. I specialize in building web applications, Flutter mobile apps, business management software, and exploring AI agents and robotics. My experience includes two years at IT Artificer and independent software development projects.
          </p>

          {/* Highlights & Collaboration Strip */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37]/15 via-[#FFD700]/20 to-[#D4AF37]/15 border border-[#D4AF37]/50 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <span className="text-[#FFD700] font-semibold text-xs sm:text-sm tracking-wide flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFD700]" />
                Top-Rated Independent Freelancer
              </span>
              <span className="text-[#D4AF37]/60 hidden sm:inline">|</span>
              <span className="text-neutral-200 text-xs sm:text-sm">
                Software Developer @ Virtzon & Founder @ Neurovex
              </span>
            </div>
          </div>
        </div>

        {/* Main Grid: Left Office Photo Frame & Collaborations, Right Glowing Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Formal Office Photograph in Golden Rounded Rectangular Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between gap-4"
          >
            <div>
              {/* Golden Outer Decorative Frame */}
              <div className="relative p-2.5 sm:p-3 rounded-2xl bg-gradient-to-tr from-[#996515] via-[#D4AF37] to-[#FFD700] shadow-[0_0_40px_rgba(212,175,55,0.3)] group transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,215,0,0.45)]">
                {/* Inner Dark Matting */}
                <div className="p-1 sm:p-1.5 rounded-xl bg-[#080808]">
                  {/* Photo Container */}
                  <div className="relative rounded-lg overflow-hidden aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] bg-[#121212]">
                    <img
                      width={864}
                      height={1184}
                      decoding="async"
                      src={`${import.meta.env.BASE_URL}assets/aistudio/WhatsApp_Image_2026-11-06_at_2.46.48_PM_00eda1ef.jpeg`}
                      alt="Sohail Khan in formal executive suit working in modern tech office"
                      className="w-full h-full object-cover object-[center_top] transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Bottom Gradient Scrim with Founder Credential */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 pt-12 text-left">
                      <div className="flex items-center gap-2 text-[#FFD700] text-xs font-semibold tracking-wider uppercase mb-1">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>Executive Workspace</span>
                      </div>
                      <div className="text-white text-lg font-bold font-serif">
                        Sohail Khan
                      </div>
                      <div className="text-[#D4AF37] text-xs font-medium">
                        Founder @ Neurovex | Software Developer @ Virtzon
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Open to Collaborations Highlight Card */}
            <div className="gold-glass-card p-4 sm:p-5 rounded-xl text-left border border-[#FFD700]/45 shadow-[0_0_25px_rgba(212,175,55,0.2)] bg-gradient-to-br from-[#121212] via-[#0d0d0d] to-[#151515] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFD700]/20 to-[#996515]/20 border border-[#D4AF37]/50 flex items-center justify-center text-[#FFD700] shrink-0 shadow-md">
                  <Handshake className="w-5 h-5 text-[#FFD700]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-white font-serif tracking-wide">
                      Open to Collaborations
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                      Available
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Interested in collaborating with developers, technology companies, and innovative teams to build modern websites, mobile applications, custom software, and AI-powered solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Freelancing Experience Tag */}
            <div className="gold-glass-card p-4 rounded-xl text-left border border-[#D4AF37]/35 flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#FFD700] to-[#996515] p-[1px] shrink-0">
                <div className="w-full h-full bg-[#101010] rounded-[7px] flex items-center justify-center text-[#FFD700]">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-white">Freelance Software Consultant</div>
                <div className="text-xs text-neutral-300">
                  Delivering custom .NET, Flutter, and web architectures directly to businesses with 100% on-time completion.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 6 Glowing Experience Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-3.5">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="gold-glass-card rounded-xl p-4 sm:p-5 border border-[#D4AF37]/30 hover:border-[#FFD700]/70 group text-left relative overflow-hidden transition-all duration-300"
                >
                  {/* Subtle hover gradient wash */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="flex items-start gap-4">
                    {/* Glowing Icon Shield */}
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FFD700]/20 via-[#D4AF37]/30 to-[#996515]/20 border border-[#D4AF37]/50 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#FFD700]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FFD700] transition-colors font-serif">
                          {exp.title}
                        </h3>
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-[#D4AF37] px-2.5 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                          {exp.highlight}
                        </span>
                      </div>

                      <div className="text-xs text-[#E6C687] font-medium mb-1.5">
                        {exp.subtitle}
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
