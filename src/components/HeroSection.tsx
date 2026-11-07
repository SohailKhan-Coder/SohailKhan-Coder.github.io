import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code2, Smartphone, Bot, Cpu, Sparkles, FolderGit2 } from 'lucide-react';

interface HeroSectionProps {
  onViewProjects: () => void;
  onStartProject: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onViewProjects,
  onStartProject,
}) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#FFD700]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-[#D4AF37]/35 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#FFD700] uppercase">
                SOFTWARE DEVELOPER & EDUCATOR
              </span>
            </div>

            {/* Large Metallic Golden Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-white font-serif">
              <span className="block text-white/95">Hi, I'm</span>
              <span className="gold-text-shimmer drop-shadow-[0_2px_20px_rgba(212,175,55,0.4)]">
                Sohail Khan
              </span>
            </h1>

            {/* Professional Subtitle */}
            <div className="text-sm sm:text-base font-medium text-[#E6C687] leading-relaxed max-w-2xl border-l-2 border-[#D4AF37]/60 pl-4 py-1 bg-gradient-to-r from-[#D4AF37]/10 to-transparent">
              Founder of Neurovex <span className="text-[#D4AF37]">|</span> .NET Core Developer <span className="text-[#D4AF37]">|</span> Flutter Developer <span className="text-[#D4AF37]">|</span> Web Developer <span className="text-[#D4AF37]">|</span> AI Agent & Robotics Enthusiast <span className="text-[#D4AF37]">|</span> Remote International Instructor
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
              I develop high-performance mobile applications, professional business websites, intelligent management systems, and AI-powered solutions. As the Founder of Neurovex, I help turn innovative ideas into powerful digital products for a better future.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
              <button
                onClick={onViewProjects}
                className="gold-button-outline px-6 sm:px-7 py-3 rounded-full text-sm font-semibold tracking-wide flex items-center gap-2.5 cursor-pointer shadow-lg group"
              >
                <FolderGit2 className="w-4 h-4 text-[#FFD700]" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onStartProject}
                className="gold-button px-7 sm:px-8 py-3 rounded-full text-sm font-semibold tracking-wide flex items-center gap-2 cursor-pointer transition-all duration-300 shadow-xl"
              >
                <span>Start Your Project</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Proof Highlights */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#D4AF37]/20 max-w-xl">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif gold-text-gradient">2+ Years</div>
                <div className="text-xs text-neutral-400">Industry Dev Experience</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif gold-text-gradient">9+</div>
                <div className="text-xs text-neutral-400">Major Production Apps</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif gold-text-gradient">Global</div>
                <div className="text-xs text-neutral-400">Online Mentorship</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Circular Portrait with Glowing Golden Double Border and Floating Tech Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            {/* Outer Concentric Golden Ring with Gentle Rotation */}
            <div className="relative flex items-center justify-center">
              
              {/* Outer Decorative Ring */}
              <div className="absolute w-[340px] h-[340px] sm:w-[410px] sm:h-[410px] lg:w-[450px] lg:h-[450px] rounded-full border border-dashed border-[#D4AF37]/45 animate-[spin_40s_linear_infinite]" />

              {/* Glowing Halo Backdrop */}
              <div className="absolute w-[310px] h-[310px] sm:w-[370px] sm:h-[370px] lg:w-[410px] lg:h-[410px] rounded-full bg-gradient-to-tr from-[#996515]/30 via-[#D4AF37]/40 to-[#FFD700]/30 blur-2xl pulse-gold-halo pointer-events-none" />

              {/* Double Golden Border Outer Ring */}
              <div className="relative p-2.5 sm:p-3 rounded-full bg-gradient-to-tr from-[#996515] via-[#D4AF37] to-[#FFD700] shadow-[0_0_50px_rgba(212,175,55,0.45)]">
                {/* Inner Metallic Gap */}
                <div className="p-1 sm:p-1.5 rounded-full bg-[#080808]">
                  {/* Inner Gold Border Ring */}
                  <div className="p-1 rounded-full bg-gradient-to-b from-[#FFD700] via-[#D4AF37] to-[#996515]">
                    
                    {/* The Circular Portrait Container */}
                    <div className="w-[280px] h-[280px] sm:w-[330px] sm:h-[330px] lg:w-[370px] lg:h-[370px] rounded-full overflow-hidden bg-[#0c0c0c] relative shadow-inner">
                      {/* Real Uploaded Photo of Sohail Khan in Black T-shirt */}
                      <img
                        src="/assets/aistudio/WhatsApp_Image_2026-11-06_at_4.01.26_PM_294ee7da.jpeg"
                        alt="Sohail Khan - Founder of Neurovex"
                        className="w-full h-full object-cover object-[center_28%] scale-[1.02] select-none"
                        loading="eager"
                        decoding="async"
                      />
                      
                      {/* Gentle Gold Edge Vignette for smooth integration */}
                      <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-[#FFD700]/30 pointer-events-none" />
                    </div>

                  </div>
                </div>
              </div>

              {/* Floating Technology Card 1: .NET Core (Top-Left) */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -left-3 sm:-left-8 z-20"
              >
                <div className="gold-glass-card px-3.5 py-2 rounded-xl flex items-center gap-2.5 shadow-xl border border-[#D4AF37]/50">
                  <div className="w-8 h-8 rounded-lg bg-[#512BD4]/20 border border-[#512BD4]/40 flex items-center justify-center text-[#9E7FF5]">
                    <Code2 className="w-4 h-4 text-[#C1A8FF]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white tracking-wide">.NET Core</div>
                    <div className="text-[10px] text-[#D4AF37] font-medium">Enterprise & C#</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Technology Card 2: Flutter (Top-Right) */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-3 sm:-right-8 z-20"
              >
                <div className="gold-glass-card px-3.5 py-2 rounded-xl flex items-center gap-2.5 shadow-xl border border-[#D4AF37]/50">
                  <div className="w-8 h-8 rounded-lg bg-[#02569B]/20 border border-[#02569B]/40 flex items-center justify-center text-[#40C4FF]">
                    <Smartphone className="w-4 h-4 text-[#40C4FF]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white tracking-wide">Flutter</div>
                    <div className="text-[10px] text-[#D4AF37] font-medium">iOS & Android</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Technology Card 3: AI Agents (Bottom-Left) */}
              <motion.div
                animate={{ y: [5, -7, 5] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-3 sm:-left-6 z-20"
              >
                <div className="gold-glass-card px-3.5 py-2 rounded-xl flex items-center gap-2.5 shadow-xl border border-[#D4AF37]/50">
                  <div className="w-8 h-8 rounded-lg bg-[#FFD700]/15 border border-[#FFD700]/40 flex items-center justify-center text-[#FFD700]">
                    <Bot className="w-4 h-4 text-[#FFD700]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white tracking-wide">AI Agents</div>
                    <div className="text-[10px] text-[#D4AF37] font-medium">Automation & LLMs</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Technology Card 4: Robotics (Bottom-Right) */}
              <motion.div
                animate={{ y: [-5, 7, -5] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 -right-3 sm:-right-6 z-20"
              >
                <div className="gold-glass-card px-3.5 py-2 rounded-xl flex items-center gap-2.5 shadow-xl border border-[#D4AF37]/50">
                  <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/15 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF]">
                    <Cpu className="w-4 h-4 text-[#00E5FF]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white tracking-wide">Robotics</div>
                    <div className="text-[10px] text-[#D4AF37] font-medium">Hardware & Logic</div>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
