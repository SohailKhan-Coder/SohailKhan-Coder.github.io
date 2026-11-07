import React from 'react';
import { GoldenParticles } from './components/GoldenParticles';
import { GoldenWaveDivider } from './components/GoldenWaveDivider';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white relative selection:bg-[#D4AF37]/30 selection:text-[#FFD700]">
      {/* Background Floating Golden Dust Particles */}
      <GoldenParticles />

      {/* Fixed Luxury Navigation Bar */}
      <Navbar onStartProject={scrollToContact} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <HeroSection
          onViewProjects={scrollToProjects}
          onStartProject={scrollToContact}
        />

        {/* Golden Wave Divider */}
        <GoldenWaveDivider />

        {/* 2. About & Experience Section */}
        <AboutSection />

        {/* Golden Wave Divider */}
        <GoldenWaveDivider inverted />

        {/* 3. Skills Section */}
        <SkillsSection />

        {/* Golden Wave Divider */}
        <GoldenWaveDivider />

        {/* 4. Featured Projects (9 Visual Cards in 3x3 Grid) */}
        <ProjectsSection onStartProject={scrollToContact} />

        {/* Golden Wave Divider */}
        <GoldenWaveDivider inverted />

        {/* 5. Special Neurovex Services Section */}
        <ServicesSection onStartProject={scrollToContact} />

        {/* Golden Wave Divider */}
        <GoldenWaveDivider />

        {/* 6. Contact & Footer Section */}
        <ContactSection />
      </main>
    </div>
  );
}
