import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Sparkles,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageCircle,
  ArrowRight,
  Clock,
  ShieldCheck,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, text: string, label: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 overflow-hidden bg-[#050505]">
      {/* Background Animated Golden Wave Glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent shadow-[0_0_20px_#FFD700]" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[#D4AF37]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141414] border border-[#D4AF37]/35 text-[#FFD700] text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Inquiry</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold font-serif tracking-tight text-white">
            <span className="gold-text-shimmer">Let's Work Together</span>
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            Have an idea for a website, mobile application, custom business software, or an AI-powered solution? Let's transform your vision into a digital experience.
          </p>
        </div>

        {/* Contact Grid: Left Contact Info Cards, Right Call-To-Action Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-20">
          
          {/* Left Column: Fully Clickable Contact Cards & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 text-left">
            
            {/* Email Card */}
            <a
              href="mailto:sohailsoftwaredeveloper@gmail.com"
              className="gold-glass-card p-5 rounded-2xl border border-[#D4AF37]/35 hover:border-[#FFD700] hover:shadow-[0_0_25px_rgba(255,215,0,0.25)] transition-all duration-300 group block"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#FFD700] shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider">Email Address</div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-[#FFD700] transition-colors break-all">
                      sohailsoftwaredeveloper@gmail.com
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => handleCopy(e, 'sohailsoftwaredeveloper@gmail.com', 'email')}
                  className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-[#1f1f1f] transition-colors shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedItem === 'email' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </a>

            {/* Phone & WhatsApp Card */}
            <a
              href="tel:+923189992197"
              className="gold-glass-card p-5 rounded-2xl border border-[#D4AF37]/35 hover:border-[#FFD700] hover:shadow-[0_0_25px_rgba(255,215,0,0.25)] transition-all duration-300 group block"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#FFD700] shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider">Direct Phone & WhatsApp</div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-[#FFD700] transition-colors">
                      +92 318 9992197
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open('https://wa.me/923189992197', '_blank', 'noopener,noreferrer');
                    }}
                    className="p-2 rounded-lg text-emerald-400 hover:bg-[#1f1f1f] transition-colors"
                    title="Chat on WhatsApp"
                    aria-label="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => handleCopy(e, '+92 318 9992197', 'phone')}
                    className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-[#1f1f1f] transition-colors"
                    title="Copy phone number"
                    aria-label="Copy phone number"
                  >
                    {copiedItem === 'phone' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/sohail-khan-047519369"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-glass-card p-5 rounded-2xl border border-[#D4AF37]/35 hover:border-[#FFD700] hover:shadow-[0_0_25px_rgba(255,215,0,0.25)] transition-all duration-300 flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-[#0077B5]/20 border border-[#0077B5]/40 flex items-center justify-center text-[#0077B5] shrink-0 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider">Professional Profile</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-[#FFD700] transition-colors truncate">
                    Sohail Khan on LinkedIn
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-[#FFD700] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/SohailKhan-Coder"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-glass-card p-5 rounded-2xl border border-[#D4AF37]/35 hover:border-[#FFD700] hover:shadow-[0_0_25px_rgba(255,215,0,0.25)] transition-all duration-300 flex items-center justify-between group block"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider">Code Repositories</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-[#FFD700] transition-colors truncate">
                    @SohailKhan-Coder
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-[#FFD700] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>

          </div>

          {/* Right Column: Premium Call-to-Action Message (Form Replaced) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="gold-glass-card p-8 sm:p-10 lg:p-12 rounded-3xl border border-[#D4AF37]/45 shadow-[0_0_50px_rgba(212,175,55,0.25)] text-center relative overflow-hidden flex flex-col items-center justify-center">
              
              {/* Golden Top Edge Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent shadow-[0_0_10px_#FFD700]" />

              {/* Decorative Subtle Corner Accent */}
              <div className="absolute top-3 right-3 text-[#D4AF37]/20 pointer-events-none">
                <Sparkles className="w-16 h-16" />
              </div>

              {/* Monogram Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161616] border border-[#D4AF37]/40 shadow-[0_0_20px_rgba(212,175,55,0.2)] mb-5">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
                <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#FFD700] uppercase">
                  NEUROVEX COLLABORATION
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight leading-tight">
                <span className="gold-text-shimmer">Let's Build Something Extraordinary</span>
              </h3>

              {/* Subtitle */}
              <div className="text-sm sm:text-base lg:text-lg font-medium text-[#FFD700] tracking-wide mt-3 mb-4">
                Your Vision. Our Technology. A Better Future.
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl mx-auto mb-8 font-normal">
                Have an idea for a website, mobile application, custom software, or AI-powered solution? At Neurovex, we transform ambitious ideas into professional digital experiences. Connect with us and let's bring your vision to life.
              </p>

              {/* Two Glowing Golden Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
                {/* Email Me Button */}
                <a
                  href="mailto:sohailsoftwaredeveloper@gmail.com"
                  className="gold-button px-7 sm:px-8 py-3.5 rounded-full text-sm font-bold tracking-wide flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105 cursor-pointer w-full sm:w-auto"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
                </a>

                {/* Chat on WhatsApp Button */}
                <a
                  href="https://wa.me/923189992197"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-button-outline px-7 sm:px-8 py-3.5 rounded-full text-sm font-bold tracking-wide flex items-center justify-center gap-2.5 border border-[#D4AF37] hover:border-[#FFD700] transition-all duration-300 hover:scale-105 cursor-pointer w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Response Time: &lt; 24 Hours</span>
                </span>
                <span className="text-[#D4AF37]/40 hidden sm:inline">|</span>
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FFD700]" />
                  <span>Direct Communication with Founder</span>
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Bottom Bar with Copyright */}
        <div className="pt-8 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-white">SK</span>
            <span>·</span>
            <span className="text-[#FFD700] font-semibold">© Sohail Khan | Founder of Neurovex</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-[#FFD700] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#FFD700] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#FFD700] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#FFD700] transition-colors">Projects</a>
            <a href="#services" className="hover:text-[#FFD700] transition-colors">Services</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
