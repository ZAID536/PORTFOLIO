import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/projects';
import { FloatingBackButton } from './FloatingBackButton';
import { CoolhausCaseStudy } from './CoolhausCaseStudy';
import { MyazuCaseStudy } from './MyazuCaseStudy';
import { getOptimizedImageUrl } from '../utils/cloudinary';
import {
  X,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Share2,
  ArrowUp,
  Instagram,
  Globe,
  Sparkles,
  TrendingUp,
  Layers,
  Cpu,
} from 'lucide-react';

// Import Marrow local assets
const marrowCover = new URL('../assets/images/marrow_cover_1785239051470.jpg', import.meta.url).href;
const marrowWorkflow = new URL('../assets/images/marrow_workflow_1785239206207.jpg', import.meta.url).href;
const marrowMoodboard = new URL('../assets/images/marrow_moodboard_1785239074221.jpg', import.meta.url).href;
const marrowLogotype = new URL('../assets/images/marrow_logotype_1785239140291.jpg', import.meta.url).href;
const marrowApparel = new URL('../assets/images/marrow_apparel_1785239101978.jpg', import.meta.url).href;
const marrowIpad = new URL('../assets/images/marrow_ipad_1785239122168.jpg', import.meta.url).href;
const marrowHangtags = new URL('../assets/images/marrow_hangtags_1785239170983.jpg', import.meta.url).href;

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project: initialProject, onClose }) => {
  const [currentProject, setCurrentProject] = useState<Project | null>(initialProject);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  // Sync currentProject if prop changes
  useEffect(() => {
    if (initialProject) {
      setCurrentProject(initialProject);
      setShowMoreInfo(false);
    }
  }, [initialProject]);

  // Lock body scroll and mark project modal as open
  useEffect(() => {
    if (!initialProject) return;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.classList.add('project-modal-open');
    return () => {
      document.body.style.overflow = '';
      document.body.style.removeProperty('overflow');
      document.documentElement.style.overflow = '';
      document.documentElement.style.removeProperty('overflow');
      document.body.classList.remove('project-modal-open');
    };
  }, [initialProject]);

  // Keyboard navigation (ESC to close)
  useEffect(() => {
    if (!initialProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxImage) {
          setLightboxImage(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [initialProject, onClose, lightboxImage]);

  if (!initialProject || !currentProject) return null;

  const scrollToTop = () => {
    modalContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleCopyPrompt = (promptText: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Find Previous and Next projects for project navigation footer
  const currentIndex = PROJECTS.findIndex((p) => p.id === currentProject.id);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const handleSwitchProject = (targetProj: Project) => {
    setCurrentProject(targetProj);
    setShowMoreInfo(false);
    scrollToTop();
  };

  // Build narrative rhythm blocks
  const getNarrativeBlocks = (proj: Project) => {
    if (proj.id === 'marrow-brand-identity') {
      return [
        {
          type: 'single',
          image: marrowCover,
          caption: 'The core identity captures the raw energy of urban streetwear, rooted in hip-hop culture and street vocabulary.',
        },
        {
          type: 'double',
          images: [marrowLogotype, marrowMoodboard],
          caption: 'Custom hand-painted logotype paired with an unpolished graphic moodboard for maximum visual impact.',
        },
        {
          type: 'single',
          image: marrowApparel,
          caption: 'Apparel graphics engineered with heavy screenprint techniques on oversized heavyweight cotton silhouettes.',
        },
        {
          type: 'double',
          images: [
            marrowHangtags,
            'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1400&auto=format&fit=crop',
          ],
          caption: 'Embossed kraft apparel hangtags and screenprinted tote bags extend the brand into physical merchandise.',
        },
        {
          type: 'single',
          image: marrowWorkflow,
          caption: 'Comprehensive brand system guidelines defining grid structures, color hierarchy, and typography rules.',
        },
        {
          type: 'double',
          images: [
            marrowIpad,
            'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1400&auto=format&fit=crop',
          ],
          caption: 'Digital storefront experience and physical retail store interior designed for immersive customer engagement.',
        },
        {
          type: 'single',
          image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1400&auto=format&fit=crop',
          caption: 'Street poster wild-posting campaign deployed across urban centers to launch the inaugural collection.',
        },
        {
          type: 'double',
          images: [
            'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1400&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1400&auto=format&fit=crop',
          ],
          caption: 'Macro fabric stitching details and high-octane outdoor billboard executions.',
        },
      ];
    }

    // Dynamic tailored sequence using gallery images and category specific captions
    const imgs = proj.galleryImages && proj.galleryImages.length > 0 ? proj.galleryImages : [proj.coverImage];
    const blocks: { type: 'single' | 'double'; image?: string; images?: string[]; caption: string }[] = [];

    const categoryCaptions: Record<string, string[]> = {
      'Case Study': [
        'Strategic brand architecture defining the primary visual system and tone of voice.',
        'Exploration of high-contrast grid layouts and modular typography hierarchies.',
        'Physical packaging and tactile material studies engineered for premium tactile presentation.',
        'Digital interface application optimized across web and mobile touchpoints.',
        'Environmental architecture capturing the brand presence in physical spaces.',
        'Custom vector mark system and specialized design asset guidelines.',
        'Editorial collateral print systems and marketing publication materials.',
        'Full brand showcase demonstrating scalability across high-impact media channels.',
      ],
      'Logo': [
        'Golden ratio geometry grid and vector construction lines defining the primary mark.',
        'Vector logotype and secondary monogram variations for micro app icons.',
        'Monochrome black & white contrast tests ensuring optical legibility at 12px scale.',
        'Precision laser-engraving and foil-stamping mockup applications on raw materials.',
        'Color system swatches and dark mode contrast specifications.',
        'Brand stationery, embossed business cards, and luxury wax seal applications.',
        'Digital app icon rendering and responsive favicon implementation.',
        '3D architectural signage and physical crest metal casting.',
      ],
      'Re-Branding Design': [
        'Brand evolution audit analyzing legacy visual gaps and market positioning.',
        'New modern typographic system pairing sans-serif display fonts with humanistic body type.',
        'Stationery, editorial print, and business collateral redesign.',
        'Social media campaign engine and kinetic post templates.',
        'Physical retail packaging transformation replacing legacy plastic materials.',
        'Unified design system components across web, iOS, and Android applications.',
        'Out-of-home billboard advertising and urban poster wild-posting system.',
        'Comprehensive brand guidelines manual and asset library distribution.',
      ],
      'Conceptual Design': [
        'Generative neural node exploration and initial algorithmic visual concepts.',
        'Ultra-high-resolution vector refinement and noise reduction post-processing.',
        '3D volumetric material studies with subsurface scattering and metallic shaders.',
        'Experimental kinetic typography responding to physical velocity vectors.',
        'Silk-screened poster series on heavy cotton rag paper.',
        'Interactive WebGL canvas stage with mouse distortion shaders.',
        'Exhibition gallery installation design and museum lighting specs.',
        'Limited edition print series and digital collector series showcase.',
      ],
    };

    const captions = categoryCaptions[proj.category] || categoryCaptions['Case Study'];

    let imgIdx = 0;
    let captionIdx = 0;

    while (imgIdx < imgs.length || blocks.length < 6) {
      const currentImg = imgs[imgIdx % imgs.length];
      const nextImg = imgs[(imgIdx + 1) % imgs.length];
      const caption = captions[captionIdx % captions.length];

      if (blocks.length % 2 === 0) {
        blocks.push({
          type: 'single',
          image: currentImg,
          caption,
        });
        imgIdx += 1;
      } else {
        blocks.push({
          type: 'double',
          images: [currentImg, nextImg],
          caption,
        });
        imgIdx += 2;
      }
      captionIdx += 1;
      if (blocks.length >= 8) break;
    }

    return blocks;
  };

  const narrativeBlocks = getNarrativeBlocks(currentProject);

  // Dynamic Highlight Tagline per project
  const getHighlightTagline = (proj: Project) => {
    if (proj.id === 'marrow-brand-identity') {
      return `"DEEP IN THE BONE, LOUD IN THE STREET! WE DON'T DESIGN CLOTHING. WE DESIGN A VOCABULARY."`;
    }
    if (proj.subtitle) {
      return `"${proj.subtitle.toUpperCase()}"`;
    }
    return `"CRAFTING IMPACTFUL BRAND IDENTITIES & VISUAL EXPERIENCES WORLDWIDE."`;
  };

  // Primary accent color for project highlight card
  const primaryAccentHex = currentProject.colorPalette[0]?.hex || '#C13838';

  return (
    <div
      ref={modalContainerRef}
      className="fixed inset-0 z-[100] bg-white text-slate-900 overflow-y-auto font-sans animate-in fade-in duration-200"
    >
      {/* PERSISTENT FLOATING BACK BUTTON (Centered at top, visible on page open) */}
      <FloatingBackButton onClick={onClose} />

      {/* FLOATING SHARE & CLOSE BUTTONS (Top right) */}
      <div className="fixed top-3 sm:top-4 right-4 sm:right-6 z-[9999] flex items-center gap-2">
        <button
          onClick={handleShareLink}
          className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-950 text-white backdrop-blur-xl border border-white/20 shadow-lg transition-all cursor-pointer"
          title="Share project link"
        >
          {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
        </button>
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-slate-900/80 hover:bg-rose-600 text-white backdrop-blur-xl border border-white/20 shadow-lg transition-all cursor-pointer"
          aria-label="Close"
          title="Close project view"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* MAIN CONTAINER */}
      <main className={currentProject.id === 'coolhaus' || currentProject.id === 'lumiere-hotel' || currentProject.id === 'myazu' ? "w-full max-w-none px-0 pt-16 sm:pt-20 pb-16" : "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-16"}>
        {currentProject.id === 'lumiere-hotel' || currentProject.id === 'myazu' ? (
          <MyazuCaseStudy />
        ) : currentProject.id === 'coolhaus' ? (
          <CoolhausCaseStudy />
        ) : (
          <>
            {/* 2. HERO INTRO BLOCK */}
        <section className="mb-16">
          {/* Large bold wordmark/logo treatment of the project name at top */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest text-white bg-[#ff6b4a] shadow-sm">
                {currentProject.category}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {currentProject.year} &bull; {currentProject.client}
              </span>
            </div>

            <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight leading-tight uppercase">
              {currentProject.title}
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-slate-600 mt-3 tracking-tight leading-snug">
              {currentProject.subtitle}
            </p>
          </div>

          {/* Two/Three-column preview row: preview images side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div
              className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-md cursor-pointer group"
              onClick={() => setLightboxImage(currentProject.coverImage)}
            >
              <img
                src={getOptimizedImageUrl(currentProject.coverImage, 600)}
                alt="Preview 1"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div
              className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-md cursor-pointer group"
              onClick={() => setLightboxImage(currentProject.galleryImages[1] || currentProject.coverImage)}
            >
              <img
                src={getOptimizedImageUrl(currentProject.galleryImages[1] || currentProject.coverImage, 600)}
                alt="Preview 2"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div
              className="hidden lg:block aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-md cursor-pointer group"
              onClick={() => setLightboxImage(currentProject.galleryImages[2] || currentProject.coverImage)}
            >
              <img
                src={getOptimizedImageUrl(currentProject.galleryImages[2] || currentProject.coverImage, 600)}
                alt="Preview 3"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Dynamic Tagline / Hook text in a solid colored highlight box */}
          <div
            className="p-6 sm:p-10 rounded-2xl text-white shadow-xl transition-all"
            style={{ backgroundColor: primaryAccentHex }}
          >
            <h2 className="font-sans font-black text-xl sm:text-3xl lg:text-4xl uppercase tracking-wider leading-tight text-center drop-shadow-md">
              {getHighlightTagline(currentProject)}
            </h2>
          </div>
        </section>

        {/* 3. PROJECT OVERVIEW & METRICS */}
        <section className="mb-20 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <Layers className="w-4 h-4 text-[#ff6b4a]" />
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-400">
              PROJECT OVERVIEW &amp; CREATIVE STRATEGY
            </h2>
          </div>

          <p className="text-lg sm:text-2xl text-slate-800 font-medium leading-relaxed mb-6">
            {currentProject.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-rose-600 block mb-2">
                The Design Challenge
              </span>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {currentProject.challenge}
              </p>
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 block mb-2">
                The Creative Solution
              </span>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {currentProject.solution}
              </p>
            </div>
          </div>

          {/* Key Outcome Metrics */}
          {currentProject.results && currentProject.results.length > 0 && (
            <div className="mb-8 p-6 rounded-2xl bg-slate-900 text-white shadow-lg">
              <div className="flex items-center gap-2 mb-4 text-[#ff6b4a]">
                <TrendingUp className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-widest">
                  Key Outcomes &amp; Impact
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {currentProject.results.map((res, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xs text-slate-300 font-bold block leading-relaxed">
                      {res}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Expandable "More Information" link revealing full credits */}
          <div className="pt-4 border-t border-slate-200">
            <button
              onClick={() => setShowMoreInfo(!showMoreInfo)}
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#ff6b4a] hover:text-[#e05636] transition-colors cursor-pointer"
            >
              <span>{showMoreInfo ? 'Hide Full Specifications' : 'More Specifications & Credits'}</span>
              {showMoreInfo ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {showMoreInfo && (
              <div className="mt-6 p-6 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-in fade-in duration-200">
                <div>
                  <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Client</span>
                  <span className="text-sm font-bold text-slate-900">{currentProject.client}</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Year</span>
                  <span className="text-sm font-bold text-slate-900">{currentProject.year}</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Duration</span>
                  <span className="text-sm font-bold text-slate-900">{currentProject.duration}</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Typography</span>
                  <span className="text-sm font-bold text-slate-900">{currentProject.typography}</span>
                </div>
                <div className="col-span-2 sm:col-span-4 pt-4 border-t border-slate-200">
                  <span className="text-[11px] font-bold uppercase text-slate-400 block mb-2">Tools &amp; Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 4. RE-BRANDING BEFORE / AFTER COMPARISON SECTION */}
        {currentProject.beforeAfterImages && (
          <section className="mb-20 p-8 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-[#ff6b4a]" />
              <h2 className="text-xs font-black uppercase tracking-widest text-[#ff6b4a]">
                BRAND IDENTITY EVOLUTION — BEFORE &amp; AFTER
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group relative rounded-2xl overflow-hidden bg-slate-800 border border-white/10">
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-black/80 text-rose-400 backdrop-blur-md border border-rose-500/30">
                  Legacy Identity (Before)
                </div>
                <img
                  src={getOptimizedImageUrl(currentProject.beforeAfterImages.before, 800)}
                  alt="Legacy brand identity before redesign"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="group relative rounded-2xl overflow-hidden bg-slate-800 border border-white/10">
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-[#ff6b4a] text-white shadow-lg">
                  Transformed Identity (After)
                </div>
                <img
                  src={getOptimizedImageUrl(currentProject.beforeAfterImages.after, 800)}
                  alt="Transformed brand identity after rebrand"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </section>
        )}

        {/* 5. CONCEPTUAL / AI PROMPT SECTION */}
        {currentProject.aiPrompt && (
          <section className="mb-20 p-8 rounded-3xl bg-slate-950 border border-slate-800 text-white shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-indigo-400">
                <Cpu className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-widest">
                  Generative AI Prompt &amp; Synthesis Specification
                </span>
              </div>
              <button
                onClick={() => handleCopyPrompt(currentProject.aiPrompt!)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10"
              >
                {copiedPrompt ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Prompt Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Prompt</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-black/60 font-mono text-xs sm:text-sm text-indigo-200 whitespace-pre-wrap leading-relaxed border border-indigo-500/20">
              {currentProject.aiPrompt}
            </pre>
          </section>
        )}

        {/* 6. RESPONSIVE PROJECT GALLERY GRID & ASSETS */}
        {currentProject.galleryImages && currentProject.galleryImages.length > 0 && (
          <section className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentProject.galleryImages.map((imgUrl, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-md cursor-pointer group"
                  onClick={() => setLightboxImage(imgUrl)}
                >
                  <img
                    src={getOptimizedImageUrl(imgUrl, 1000)}
                    alt={`${currentProject.title} asset ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. COLOR PALETTE & TYPOGRAPHY REVEAL */}
        {currentProject.colorPalette.length > 0 && (
          <section className="mb-24 p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200">
            <h2 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 text-center">
              BRAND COLOR PALETTE &amp; TYPOGRAPHY SPECIFICATIONS
            </h2>

            {/* Color Swatches */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-10">
              {currentProject.colorPalette.map((color, i) => (
                <button
                  key={i}
                  onClick={() => handleCopyHex(color.hex)}
                  className="group flex flex-col p-3 rounded-2xl bg-white border border-slate-200 hover:border-[#ff6b4a] transition-all text-left cursor-pointer shadow-sm"
                >
                  <div
                    className="w-full h-20 rounded-xl mb-3 border border-slate-200/60 shadow-inner group-hover:scale-[1.03] transition-transform"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="font-bold text-xs text-slate-900">{color.name}</span>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mt-1">
                    <span>{color.hex}</span>
                    {copiedHex === color.hex ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Typography Sample */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Primary Brand Typography Hierarchy
              </span>
              <div className="font-sans text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {currentProject.typography}
              </div>
              <p className="text-xs text-slate-500 font-mono mt-2">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ &bull; 0123456789
              </p>
            </div>
          </section>
        )}

        {/* 8. CLOSING SPREAD */}
        <section className="mb-24 relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900">
          <img
            src={getOptimizedImageUrl(currentProject.coverImage, 1600)}
            alt="Closing spread"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="w-full aspect-[21/9] sm:aspect-[24/9] object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex items-center justify-center p-6 text-center">
            <h2 className="font-sans font-black text-2xl sm:text-5xl text-white uppercase tracking-tight max-w-4xl drop-shadow-xl leading-tight">
              {getHighlightTagline(currentProject)}
            </h2>
          </div>
        </section>
          </>
        )}

        {/* 9. PROJECT NAVIGATION FOOTER */}
        <footer className={`pt-12 border-t border-slate-200 flex flex-col gap-10 ${currentProject.id === 'coolhaus' || currentProject.id === 'lumiere-hotel' ? 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full' : ''}`}>
          {/* Previous & Next Links */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => handleSwitchProject(prevProject)}
              className="group flex items-center gap-3 p-4 rounded-2xl border border-slate-200 hover:border-[#ff6b4a] hover:bg-slate-50 transition-all cursor-pointer text-left"
            >
              <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-[#ff6b4a] transition-colors group-hover:-translate-x-1" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                  Previous Project
                </span>
                <span className="text-sm font-bold text-slate-900 group-hover:text-[#ff6b4a]">
                  {prevProject.title.split('—')[0].trim()}
                </span>
              </div>
            </button>

            <button
              onClick={() => handleSwitchProject(nextProject)}
              className="group flex items-center gap-3 p-4 rounded-2xl border border-slate-200 hover:border-[#ff6b4a] hover:bg-slate-50 transition-all cursor-pointer text-right"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                  Next Project
                </span>
                <span className="text-sm font-bold text-slate-900 group-hover:text-[#ff6b4a]">
                  {nextProject.title.split('—')[0].trim()}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#ff6b4a] transition-colors group-hover:translate-x-1" />
            </button>
          </div>

          {/* Category Filter Tags Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 py-4 border-y border-slate-200/80">
            {['All', 'Case Study', 'Logo', 'Re-Branding Design', 'Conceptual Design'].map((tag, i) => (
              <button
                key={i}
                onClick={onClose}
                className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-[#ff6b4a] hover:text-white text-slate-700 transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Agency Tagline + Social Icons + Scroll to Top */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
            <span>Crafting impactful brand identities &amp; visual experiences worldwide.</span>

            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#ff6b4a] transition-colors flex items-center gap-1"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#ff6b4a] transition-colors flex items-center gap-1"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Behance</span>
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1 font-bold text-slate-900 hover:text-[#ff6b4a] transition-colors cursor-pointer ml-4"
              >
                <span>Up</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </footer>
      </main>

      {/* LIGHTBOX OVERLAY */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-slate-800 text-white hover:bg-rose-600 transition-all cursor-pointer shadow-xl border border-white/20"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={getOptimizedImageUrl(lightboxImage, 1800)}
            alt="Expanded view"
            decoding="async"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
