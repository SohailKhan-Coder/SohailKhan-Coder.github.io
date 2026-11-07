import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Layers,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { Project } from '../types';
import { ProjectImage } from './ProjectImage';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onStartProject: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onStartProject,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setIsZoomed(false);
  }, [project?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
        {/* Dark Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#0b0b0b] border border-[#D4AF37]/60 rounded-3xl shadow-[0_0_60px_rgba(212,175,55,0.4)] overflow-hidden z-10 my-6 text-left"
        >
          {/* Top Bar with Title & Close Action */}
          <div className="px-5 py-3.5 bg-[#0e0e0e] border-b border-[#D4AF37]/30 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD700] shadow-[0_0_8px_#FFD700] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#FFD700] uppercase truncate">
                {project.badge}
              </span>
              <span className="text-neutral-500 hidden sm:inline">|</span>
              <span className="text-xs text-neutral-300 hidden sm:inline truncate">
                Project Gallery Lightbox
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* Zoom Toggle Button */}
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="p-2 rounded-xl bg-[#161616] text-neutral-300 hover:text-[#FFD700] border border-[#D4AF37]/30 transition-colors"
                title={isZoomed ? 'Reset Zoom' : 'Zoom Image'}
                aria-label={isZoomed ? 'Reset Zoom' : 'Zoom Image'}
              >
                {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-[#161616] text-neutral-300 hover:text-[#FFD700] hover:bg-[#202020] border border-[#D4AF37]/30 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Large Visual Picture Preview (60% Emphasis) */}
          <div className="relative bg-[#050505] overflow-hidden border-b border-[#D4AF37]/30 flex items-center justify-center">
            <div
              className={`project-lightbox-image relative w-full overflow-hidden transition-all duration-300 cursor-zoom-in ${
                isZoomed ? 'cursor-zoom-out' : ''
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <ProjectImage
                src={project.imageUrl}
                alt={`${project.title} Preview Screenshot`}
                className={`project-image-fill transition-transform duration-500 select-none ${
                  isZoomed ? 'scale-125' : 'scale-100'
                }`}
                loading="eager"
              />
            </div>

            {/* Subtle Overlay Badge */}
            <div className="absolute bottom-3 left-4 pointer-events-none">
              <span className="text-[11px] font-semibold text-white px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#D4AF37]/50 shadow-lg">
                Click photo to {isZoomed ? 'zoom out' : 'zoom in'}
              </span>
            </div>
          </div>

          {/* Modal Details Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[45vh] overflow-y-auto">
            
            {/* Header info */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D4AF37]/15 text-[#FFD700] border border-[#D4AF37]/45">
                  {project.category}
                </span>
                <span className="text-xs text-neutral-400 font-medium">
                  High-Fidelity Production Showcase
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif gold-text-gradient">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 mt-2 leading-relaxed">
                {project.fullDesc}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="bg-[#141414] p-5 rounded-2xl border border-[#D4AF37]/25 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD700] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FFD700]" />
                <span>Key Engineering Highlights</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-neutral-300">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Technologies & Frameworks</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-[#161616] text-[#FFF2B0] border border-[#D4AF37]/35 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Action Bar */}
          <div className="p-4 sm:p-6 border-t border-[#D4AF37]/30 bg-[#0c0c0c] flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-neutral-400">
              Need a similar solution built for your business?
            </div>
            <button
              onClick={() => {
                onClose();
                onStartProject();
              }}
              className="gold-button px-7 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Build This With Sohail</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
