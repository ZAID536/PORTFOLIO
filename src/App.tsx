import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { ShapePlayground } from './components/ShapePlayground';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ResumeModal } from './components/ResumeModal';
import { FloatingOrbsBackground } from './components/FloatingOrbsBackground';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      // Clear legacy dark mode keys if any exist
      const legacyKeys = ['theme', 'darkMode', 'dark_mode', 'color-theme', 'portfolio-theme'];
      legacyKeys.forEach((k) => {
        if (localStorage.getItem(k) && !localStorage.getItem('portfolio_theme')) {
          localStorage.removeItem(k);
        }
      });
      // Default to Light Theme unless explicitly saved as 'dark'
      const savedTheme = localStorage.getItem('portfolio_theme');
      return savedTheme === 'dark';
    } catch {
      return false;
    }
  });

  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

  // Sync theme class on HTML element & localStorage
  useEffect(() => {
    try {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('portfolio_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('portfolio_theme', 'light');
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [isDarkMode]);

  // Section observer to update active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'playground', 'about', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#E8DFF0] dark:bg-[#121212] text-[#16141A] dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-[#E8502F] selection:text-white relative">
      {/* Subtle Animated Floating Orbs Background */}
      <FloatingOrbsBackground isDarkMode={isDarkMode} />

      {/* Trailing Custom Cursor */}
      <CustomCursor isDarkMode={isDarkMode} />

      {/* Global Floating Header */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* Section 1: Hero */}
        <Hero
          isDarkMode={isDarkMode}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        {/* Section 3: Interactive Projects Showcase */}
        <ProjectsSection />

        {/* Section 4: Shape Motif Design Lab */}
        <ShapePlayground />

        {/* Section 5: About & Capabilities */}
        <AboutSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Section 6: Contact & Brief Submission */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* CV / Resume Full View Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}




