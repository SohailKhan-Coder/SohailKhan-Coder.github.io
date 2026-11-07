import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'skills', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* SK Golden Monogram Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex items-center gap-3 shrink-0 focus-visible:outline-[#D4AF37]"
            aria-label="Sohail Khan Home"
          >
            {/* Golden Monogram Crest */}
            <div className="relative w-10 h-10 rounded-lg flex items-center justify-center p-[1px] bg-gradient-to-br from-[#FFD700] via-[#D4AF37] to-[#996515] shadow-[0_0_15px_rgba(212,175,55,0.35)] group-hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] transition-all duration-300">
              <div className="w-full h-full bg-[#0c0c0c] rounded-[7px] flex items-center justify-center">
                <span className="font-serif text-lg font-bold tracking-wider gold-text-shimmer">
                  SK
                </span>
              </div>
            </div>

            {/* Founder Branding */}
            <div className="flex flex-col text-left">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-[#FFD700] transition-colors font-serif">
                Sohail Khan
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#D4AF37]/90 font-medium">
                Founder of Neurovex
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative py-1.5 transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-[#FFD700] font-semibold drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent shadow-[0_0_8px_#FFD700]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Button: Professional "Start Your Project" */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onStartProject}
              className="gold-button px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2 cursor-pointer transition-all duration-300 group"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-300 hover:text-[#FFD700] hover:bg-[#151515] border border-[#D4AF37]/30 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c0c]/98 backdrop-blur-xl border-b border-[#D4AF37]/30 px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-base py-2 px-3 rounded-lg flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#D4AF37]/15 text-[#FFD700] font-semibold border-l-2 border-[#FFD700]'
                      : 'text-neutral-300 hover:text-white hover:bg-[#1a1a1a]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-[#FFD700]" />}
                </a>
              );
            })}
            
            <div className="pt-2 border-t border-[#D4AF37]/20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onStartProject();
                }}
                className="gold-button w-full py-3 rounded-full text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
