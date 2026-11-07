import React from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Smartphone,
  Flame,
  Layout,
  Globe,
  Bot,
  Cpu,
  GraduationCap,
  Sparkles,
  Award,
  Layers,
  CheckCircle2,
} from 'lucide-react';

interface SkillItem {
  name: string;
  category: string;
  proficiency: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}

const SkillCard: React.FC<{ skill: SkillItem; index: number }> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      className="gold-glass-card rounded-2xl p-6 sm:p-7 border border-[#D4AF37]/35 hover:border-[#FFD700] hover:shadow-[0_0_35px_rgba(255,215,0,0.3)] transition-all duration-300 flex flex-col justify-between group text-left relative"
    >
      {/* Golden Shimmer top edge highlight */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Top Header: Icon & Skill-Level Badge */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-5">
          {/* 36-44px Technology Icon in styled container */}
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border shadow-md transition-transform duration-300 group-hover:scale-105"
            style={{
              backgroundColor: `${skill.color}18`,
              borderColor: `${skill.color}50`,
              color: skill.color,
            }}
          >
            {skill.icon}
          </div>

          {/* Skill-Level Badge (12–14px) */}
          <span className="text-xs sm:text-sm font-semibold text-[#FFD700] px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/45 shadow-sm">
            {skill.proficiency}
          </span>
        </div>

        {/* Skill Title: 20–24px, Bold */}
        <h3 className="text-xl sm:text-2xl font-bold font-serif text-white group-hover:text-[#FFD700] transition-colors leading-snug">
          {skill.name}
        </h3>

        {/* Category Label: 16–18px */}
        <div className="text-base font-medium text-[#E6C687] mt-1.5 mb-4 leading-normal">
          {skill.category}
        </div>

        {/* Description: 15–17px, Readable, Fully Visible with Natural Wrapping */}
        <p className="text-[15px] sm:text-base text-neutral-300 leading-relaxed font-normal">
          {skill.description}
        </p>
      </div>

      {/* Bottom Accent: Subtle Golden Hairline & Status Indicator */}
      <div className="pt-5 mt-6 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs text-[#D4AF37]/90 font-medium">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-[#FFD700]" />
          <span>Production Verified</span>
        </span>
        <span className="text-neutral-400 group-hover:text-[#FFD700] transition-colors">
          Neurovex Tech Stack
        </span>
      </div>
    </motion.div>
  );
};

export const SkillsSection: React.FC = () => {
  // Group 1: Core Frameworks & Mobile Engineering (6 skills)
  const coreFrameworks: SkillItem[] = [
    {
      name: '.NET Core',
      category: 'Enterprise Backend Development',
      proficiency: 'Expert',
      description:
        'High-throughput RESTful APIs, clean Onion architecture, Entity Framework Core, microservices orchestration, and resilient enterprise desktop and server applications.',
      color: '#9E7FF5',
      icon: <Code className="w-8 h-8" />,
    },
    {
      name: 'C#',
      category: 'Core Programming Language',
      proficiency: 'Mastery',
      description:
        'Advanced asynchronous concurrency (async/await), modern LINQ expressions, robust type safety, dependency injection, and high-performance system engineering.',
      color: '#A074C4',
      icon: <Layers className="w-8 h-8" />,
    },
    {
      name: 'Flutter',
      category: 'Cross-Platform Mobile Development',
      proficiency: 'Advanced',
      description:
        'Pixel-perfect fluid iOS and Android mobile applications, custom 60FPS animations, reactive state management, and native device hardware integrations.',
      color: '#40C4FF',
      icon: <Smartphone className="w-8 h-8" />,
    },
    {
      name: 'Dart',
      category: 'Mobile Application Programming',
      proficiency: 'Advanced',
      description:
        'Null-safe client architectures, fast compilation, reactive stream pipelines, and robust state architectures using Riverpod and Bloc patterns.',
      color: '#00D2B4',
      icon: <Code className="w-8 h-8" />,
    },
    {
      name: 'Firebase',
      category: 'Cloud Backend & Database',
      proficiency: 'Advanced',
      description:
        'Cloud Firestore realtime databases, serverless Cloud Functions, secure access rules, Cloud Storage, and authentication integration.',
      color: '#FFA000',
      icon: <Flame className="w-8 h-8" />,
    },
    {
      name: 'UI/UX Design',
      category: 'User Interface & Experience Design',
      proficiency: 'Skilled',
      description:
        'Intuitive user experiences, ergonomic workflows, luxury micro-interactions, responsive design systems, and modern dark-gold design aesthetics.',
      color: '#FF4081',
      icon: <Layout className="w-8 h-8" />,
    },
  ];

  // Group 2: Web Systems, AI Agents & Leadership (5 skills)
  const webAndAiSkills: SkillItem[] = [
    {
      name: 'Web Development',
      category: 'Modern Responsive Web Applications',
      proficiency: 'Expert',
      description:
        'Modern responsive web platforms, React, TypeScript, Tailwind CSS, scalable RESTful APIs, client-side state, and performance optimization.',
      color: '#61DAFB',
      icon: <Globe className="w-8 h-8" />,
    },
    {
      name: 'AI Agents',
      category: 'Intelligent Systems & Automation',
      proficiency: 'Advanced',
      description:
        'Autonomous agentic workflows, multi-tool LLM integration, prompt engineering, memory orchestration, and intelligent enterprise automation.',
      color: '#FFD700',
      icon: <Bot className="w-8 h-8" />,
    },
    {
      name: 'Robotics',
      category: 'Hardware, Sensors & Automation',
      proficiency: 'Skilled',
      description:
        'Embedded microcontrollers, sensor telemetry, robotic motion control algorithms, and reliable hardware-to-software communication bridges.',
      color: '#00E5FF',
      icon: <Cpu className="w-8 h-8" />,
    },
    {
      name: 'Teaching',
      category: 'Remote International Instruction',
      proficiency: '2+ Years',
      description:
        'Teaching, coaching, and mentoring hundreds of international students across computer science, coding principles, and real-world system architecture.',
      color: '#69F0AE',
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      name: 'Freelancing',
      category: 'Professional Client Project Delivery',
      proficiency: 'Top Rated',
      description:
        'Full lifecycle client delivery from requirements scoping to deployment and maintenance for corporate and international clients.',
      color: '#E040FB',
      icon: <Award className="w-8 h-8" />,
    },
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background golden glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/6 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#D4AF37]/40 text-[#FFD700] text-xs font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities & Mastery</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight text-white">
            <span className="gold-text-shimmer">Core Skills & Expertise</span>
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            Professional engineering toolkit spanning cross-platform mobile development, enterprise .NET backends, autonomous AI agents, robotics, and international mentorship.
          </p>
        </div>

        {/* Group 1: Core Frameworks & Mobile Engineering */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-[#D4AF37]/25">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
              <h3 className="text-lg sm:text-xl font-bold text-white font-serif tracking-wide">
                Core Frameworks & Mobile Engineering
              </h3>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[#FFD700] px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35">
              6 Technologies
            </span>
          </div>

          {/* 3 cards per row on desktop (lg:grid-cols-3), 2 on tablet (md:grid-cols-2), 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {coreFrameworks.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Group 2: Web Systems, AI Agents & Leadership */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-[#D4AF37]/25">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD700] shadow-[0_0_8px_#FFD700]" />
              <h3 className="text-lg sm:text-xl font-bold text-white font-serif tracking-wide">
                Web Systems, AI Agents & Leadership
              </h3>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-[#FFD700] px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35">
              5 Technologies & Domains
            </span>
          </div>

          {/* 3 cards per row on desktop (lg:grid-cols-3), 2 on tablet (md:grid-cols-2), 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {webAndAiSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index + 6}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
