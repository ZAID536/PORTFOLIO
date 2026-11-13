import React, { useEffect } from 'react';
import { X, Download, GraduationCap, CheckCircle } from 'lucide-react';
import { EXPERIENCES } from '../data/projects';
import { generateResumeDownload } from '../utils/pdfGenerator';
import zaidZamanPortrait from '../assets/images/user_gdrive_portrait.png';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
      document.body.style.removeProperty('overflow');
      document.documentElement.style.overflow = '';
      document.documentElement.style.removeProperty('overflow');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownloadAndPrint = () => {
    generateResumeDownload();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-panel rounded-3xl border border-[#DCCFE8] dark:border-white/20 shadow-2xl p-6 sm:p-10 text-[#16141A] dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Actions */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#DCCFE8] dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl overflow-hidden border border-[#DCCFE8] dark:border-white/20 shadow-md">
              <img
                src={zaidZamanPortrait}
                alt="Zaid Zaman"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="font-heading font-black text-xl sm:text-2xl text-[#16141A] dark:text-white">Zaid Zaman — CV &amp; Resume</h2>
              <p className="text-xs text-[#5E5963] dark:text-slate-400 font-mono">Curriculum Vitae (Updated Q3 2026)</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadAndPrint}
              className="btn-primary px-4 py-2 text-xs font-bold flex items-center gap-2 shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#FFFFFF]" />
              <span>Download File</span>
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-[#EAE3EF] dark:bg-slate-800 hover:bg-[#DCCFE8] dark:hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-[#16141A] dark:text-white" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Body */}
        <div className="space-y-8 font-sans">
          {/* Executive Summary */}
          <div>
            <h3 className="font-heading font-bold text-lg text-[#E8502F] mb-2 uppercase tracking-wider text-xs">
              Executive Summary
            </h3>
            <p className="text-[#16141A] dark:text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
              Senior Visual Architect with 8+ years of experience directing brand design, kinetic 3D systems, and generative AI visual art. Proven track record scaling tech startups, crafting award-winning packaging, and leading cross-functional creative teams.
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="font-heading font-bold text-lg text-[#E8502F] mb-4 uppercase tracking-wider text-xs">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="p-5 rounded-2xl glass-card border border-[#DCCFE8] dark:border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="font-heading font-black text-base sm:text-lg text-[#16141A] dark:text-white">
                      {exp.role} <span className="text-[#E8502F] font-semibold">@ {exp.company}</span>
                    </h4>
                    <span className="text-xs font-mono font-bold text-[#5E5963] px-2.5 py-1 rounded-md bg-[#EAE3EF] dark:bg-slate-800 border border-[#DCCFE8] dark:border-white/10">
                      {exp.year}
                    </span>
                  </div>
                  <p className="text-xs text-[#5E5963] mb-3 font-mono">{exp.location}</p>
                  <p className="text-sm text-[#16141A] dark:text-slate-300 mb-3 leading-relaxed font-medium">
                    {exp.description}
                  </p>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-[#5E5963] dark:text-slate-300 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-[#E8502F] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-heading font-bold text-lg text-[#E8502F] mb-3 uppercase tracking-wider text-xs">
              Education &amp; Honors
            </h3>
            <div className="p-5 rounded-2xl glass-card border border-[#DCCFE8] dark:border-white/10">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-[#E8502F]" />
                <div>
                  <h4 className="font-heading font-bold text-base text-[#16141A] dark:text-white">Bachelor of Fine Arts (BFA) in Graphic Design</h4>
                  <p className="text-xs text-[#5E5963] dark:text-slate-400">Rhode Island School of Design (RISD) | Graduated with Honors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
