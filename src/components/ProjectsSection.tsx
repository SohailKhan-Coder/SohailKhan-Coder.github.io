import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Maximize2, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import projectPreview1 from '../assets/images/project_chat_app_1793964324542.jpg';
import projectPreview2 from '../assets/images/project_school_management_1793964325994.jpg';
import projectPreview3 from '../assets/images/project_social_media_1793964326526.jpg';
import projectPreview4 from '../assets/images/project_ecommerce_app_1793964327569.jpg';
import projectPreview5 from '../assets/images/project_estimation_website_1793964327808.jpg';
import projectPreview6 from '../assets/images/project_global_provider_1793964327430.jpg';
import projectPreview7 from '../assets/images/project_pharmacy_system_1793964345702.jpg';
import projectPreview8 from '../assets/images/project_cafe_system_1793964348011.jpg';
import projectPreview9 from '../assets/images/project_restaurant_system_1793964347687.jpg';

interface ProjectsSectionProps {
  onStartProject: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onStartProject }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    // Row 1
    {
      id: 'chat-app',
      row: 1,
      title: 'Chat App',
      category: 'Mobile',
      shortDesc: 'Modern messaging application with contacts, chat bubbles, real-time messaging, and multimedia sharing.',
      fullDesc: 'Developed in Flutter for iOS and Android, this messaging suite features end-to-end socket messaging, unread counts, typing indicators, contact discovery, voice waveforms, and smooth 60FPS animations.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'WebSockets', 'Riverpod'],
      mockupType: 'dual-phone',
      highlights: [
        'Real-time low-latency socket messaging',
        'Offline chat persistence with SQLite cache',
        'End-to-end encrypted messaging format',
        'Custom interactive media bubble widgets',
      ],
      badge: 'Flutter Mobile App',
      imageUrl: projectPreview1,
    },
    {
      id: 'school-management',
      row: 1,
      title: 'School Management App',
      category: 'System',
      shortDesc: 'Comprehensive administration portal with students, teachers, attendance, fees, classes, and analytics graphs.',
      fullDesc: 'An enterprise educational management system architected with .NET Core and modern frontend dashboards. Automates student attendance tracking, tuition billing, exam grades, and faculty scheduling.',
      technologies: ['.NET Core', 'C#', 'SQL Server', 'REST API', 'Tailwind CSS'],
      mockupType: 'dashboard',
      highlights: [
        'Multi-role access (Admin, Teachers, Parents, Students)',
        'Automated attendance analytics and SMS alerts',
        'Fee generation with exportable PDF receipts',
        'Graphical performance metrics and grading curves',
      ],
      badge: 'Enterprise Dashboard',
      imageUrl: projectPreview2,
    },
    {
      id: 'social-media',
      row: 1,
      title: 'Social Media App',
      category: 'Mobile',
      shortDesc: 'Feature-rich social platform with dynamic feeds, user profiles, story circles, likes, comments, and discovery.',
      fullDesc: 'Crafted in Flutter with a clean MVVM architecture, featuring an infinite scroll media feed, interactive heart likes, story sharing, nested comments, and comprehensive user profile customization.',
      technologies: ['Flutter', 'Dart', 'Cloud Firestore', 'Node.js', 'StateNotifier'],
      mockupType: 'dual-phone',
      highlights: [
        'Optimized infinite scroll pagination',
        'Story circles with timed expiration',
        'Interactive like, save, and comment animations',
        'Instant push notifications via FCM',
      ],
      badge: 'Flutter Mobile App',
      imageUrl: projectPreview3,
    },

    // Row 2
    {
      id: 'ecommerce-app',
      row: 2,
      title: 'E-Commerce App',
      category: 'Mobile',
      shortDesc: 'Luxury mobile shopping experience featuring premium headphones, catalog filters, shopping cart, and quick checkout.',
      fullDesc: 'High-conversion retail application engineered in Flutter. Features animated product carousels, variant selectors, multi-currency support, cart badge sync, and secure payment processing.',
      technologies: ['Flutter', 'Dart', 'Stripe API', 'Firebase Auth', 'Bloc Pattern'],
      mockupType: 'single-phone',
      highlights: [
        'Fluid 3D-tilt product showcase cards',
        'Real-time inventory decrement engine',
        'Instant 1-click cart checkout pipeline',
        'Customer review and star rating subsystem',
      ],
      badge: 'Flutter Mobile App',
      imageUrl: projectPreview4,
    },
    {
      id: 'estimation-website',
      row: 2,
      title: 'Estimation Company Website',
      category: 'Web',
      shortDesc: 'Professional construction estimation firm platform featuring project showcases, blueprints, and quotation services.',
      fullDesc: 'Corporate web presence engineered for an international construction cost takeoff firm. Features interactive quote estimation calculators, case study archives, and blueprint submission forms.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive UI', 'SEO'],
      mockupType: 'laptop',
      highlights: [
        'Interactive construction cost takeoff calculator',
        'Dynamic civil project portfolio showcase',
        'Instant quote inquiry generator with blueprint upload',
        'Lighthouse 100/100 performance and SEO scores',
      ],
      badge: 'Corporate Web App',
      imageUrl: projectPreview5,
    },
    {
      id: 'global-service-provider',
      row: 2,
      title: 'Global Service Provider Website',
      category: 'Web',
      shortDesc: 'Premium corporate web platform with an illuminated globe, international business solutions, and cross-border services.',
      fullDesc: 'High-end global enterprise portal with interactive illuminated globe graphics, international service routing across London, New York, Dubai, and Singapore, and multi-region business solutions.',
      technologies: ['React', 'TypeScript', 'WebGL', 'Tailwind CSS', 'Framer Motion'],
      mockupType: 'laptop',
      highlights: [
        'Interactive illuminated globe vector visualization',
        'Cross-border regional service branch locator',
        'Multi-lingual enterprise architecture',
        'Luxury black & gold corporate branding',
      ],
      badge: 'Enterprise Web Portal',
      imageUrl: projectPreview6,
    },

    // Row 3
    {
      id: 'pharmacy-system',
      row: 3,
      title: 'Pharmacy Management System',
      category: 'System',
      shortDesc: 'Realistic clinical pharmacy ERP managing medicine inventory, barcode scanning, prescriptions, sales, and suppliers.',
      fullDesc: 'Robust medical ERP engineered with .NET and SQL Server. Handles batch expiry tracking, barcode dispensing, prescription verification, drug interactions, supplier purchase orders, and daily reconciliation.',
      technologies: ['.NET Core', 'C#', 'SQL Server', 'Entity Framework', 'WPF / Web'],
      mockupType: 'dashboard',
      highlights: [
        'Automated expiration date alerts & quarantine',
        'Barcode scanner integration for dispensing',
        'Supplier reorder automation with low-stock alerts',
        'FDA regulatory audit trail and prescription logs',
      ],
      badge: 'Healthcare Management',
      imageUrl: projectPreview7,
    },
    {
      id: 'cafe-system',
      row: 3,
      title: 'Café Management System',
      category: 'System',
      shortDesc: 'Specialty coffee point-of-sale dashboard managing beverages, food items, tables, tickets, and revenue reporting.',
      fullDesc: 'High-speed touch-friendly Point of Sale (POS) system for modern cafés. Provides instant drink customization modifiers, thermal receipt printing, table order dispatch, and live sales analytics.',
      technologies: ['.NET Core', 'C#', 'PostgreSQL', 'Thermal POS', 'Touch UI'],
      mockupType: 'dashboard',
      highlights: [
        'Sub-second touch item selection and modifiers',
        'Kitchen display system (KDS) live order routing',
        'Real-time milk and coffee bean inventory deduction',
        'End-of-day Z-report generation and cash reconciliation',
      ],
      badge: 'Point of Sale (POS)',
      imageUrl: projectPreview8,
    },
    {
      id: 'restaurant-system',
      row: 3,
      title: 'Restaurant Management System',
      category: 'System',
      shortDesc: 'Complete dining administration system with floor plan table status, kitchen tickets, split billing, and operations.',
      fullDesc: 'Full-service restaurant management software with live floor map table indicators (Occupied, Reserved, Available), multi-station kitchen display, split bills, staff permissions, and business intelligence.',
      technologies: ['.NET Core', 'C#', 'SQL Server', 'WebSockets', 'Dashboard UI'],
      mockupType: 'dashboard',
      highlights: [
        'Interactive visual dining room floor plan',
        'Station-by-station kitchen order ticketing',
        'Split check and multi-tender payment processing',
        'Comprehensive food cost and labor analytics',
      ],
      badge: 'Hospitality ERP',
      imageUrl: projectPreview9,
    },
  ];

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-[#D4AF37]/40 text-[#FFD700] text-xs font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio Works</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight text-white">
            <span className="gold-text-shimmer">Visual Software Showcase</span>
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            High-fidelity realistic previews of production mobile applications, business platforms, and enterprise dashboards. Click any project to open the full-resolution lightbox gallery.
          </p>
        </div>

        {/* Exactly 9 Projects in 3x3 Grid on Desktop (1 on mobile, 2 on tablet) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              whileHover={{ y: -7 }}
              onClick={() => setSelectedProject(project)}
              className="gold-glass-card rounded-2xl overflow-hidden border border-[#D4AF37]/35 hover:border-[#FFD700] hover:shadow-[0_0_40px_rgba(255,215,0,0.35)] transition-all duration-300 flex flex-col group cursor-pointer text-left"
            >
              {/* Card Top: Large Visual Picture Preview (approx 60% of vertical presence) */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0a0a0a] border-b border-[#D4AF37]/30">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} Preview`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108 select-none"
                  loading="lazy"
                  decoding="async"
                />

                {/* Subtle Gradient Shadow & Top Badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFD700] px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-[#D4AF37]/50 shadow-md">
                    {project.badge}
                  </span>
                </div>

                {/* Hover Lightbox Indicator Overlay */}
                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-10">
                  <span className="gold-button px-4 py-2 rounded-full text-xs font-semibold tracking-wider flex items-center gap-1.5 shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View in Lightbox</span>
                  </span>
                </div>
              </div>

              {/* Card Body: Title, Full Description, Tech Badges */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs text-[#D4AF37] font-semibold tracking-wide">
                      {project.category} Architecture
                    </span>
                    <span className="text-xs text-neutral-400">
                      #{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#FFD700] transition-colors font-serif leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-neutral-300 mt-2.5 leading-relaxed font-normal">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Tech Badges & View Action */}
                <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium text-[#FFF2B0] px-2.5 py-1 rounded-lg bg-[#161616] border border-[#D4AF37]/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] text-neutral-400 px-1 py-1">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <span className="text-xs sm:text-sm text-[#FFD700] font-semibold flex items-center gap-1 shrink-0 group-hover:translate-x-1 transition-transform">
                    <span>Inspect</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* High-Resolution Project Image Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={onStartProject}
      />
    </section>
  );
};
