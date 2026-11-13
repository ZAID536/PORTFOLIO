import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, Sparkles, X } from 'lucide-react';
import { LazyVideo } from './LazyVideo';
import { getOptimizedImageUrl } from '../utils/cloudinary';

export const MyazuCaseStudy: React.FC = () => {
  const [isViewMoreOpen, setIsViewMoreOpen] = useState(false);

  const mediaImgStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    borderRadius: '8px',
  };

  const mediaVideoStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    borderRadius: '8px',
  };

  return (
    <article
      className="myazu-case-study w-full bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white"
      style={{
        width: '100%',
        maxWidth: '100vw',
        margin: '0 auto',
        padding: '0 16px',
      }}
    >
      {/* Inline Font Family Declarations */}
      <style>{`
        .font-playfair {
          font-family: 'Playfair Display', Georgia, serif;
        }
        .font-inter {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
      `}</style>

      {/* ==========================================
          HEADER / INTRODUCTION
          ========================================== */}
      <header className="mb-8 sm:mb-12 pt-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Small Label */}
          <span className="font-inter text-xs font-bold uppercase tracking-[0.25em] text-neutral-400 block mb-3">
            MYAZU
          </span>

          {/* Main Title */}
          <h1 className="font-playfair text-4xl sm:text-6xl lg:text-7xl font-semibold text-neutral-900 tracking-tight leading-[1.08] mb-4">
            BRAND SYSTEM &amp; VISUAL IDENTITY
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-base sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Building a distinctive hospitality identity inspired by Riyadh’s cultural heritage, architectural language, and contemporary luxury.
          </p>

          {/* Compact Metadata */}
          <div className="py-6 border-y border-neutral-200/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mb-8 bg-neutral-50/50 px-6 rounded-xl">
            <div>
              <span className="font-inter text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 block mb-1">
                SERVICES
              </span>
              <p className="font-inter text-xs sm:text-sm font-medium text-neutral-800 leading-snug">
                Brand Strategy &bull; Visual Identity &bull; Environmental Graphics &bull; Packaging Design &bull; Art Direction &bull; Brand System
              </p>
            </div>
            <div>
              <span className="font-inter text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 block mb-1">
                CATEGORY
              </span>
              <p className="font-inter text-xs sm:text-sm font-medium text-neutral-800 leading-snug">
                Hospitality &bull; Luxury Hotel &bull; Riyadh, Saudi Arabia
              </p>
            </div>
          </div>

          {/* Short Introduction Paragraph */}
          <p className="font-inter text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Myazu was envisioned as a hospitality experience rooted in the cultural character of Riyadh while speaking through a refined and contemporary visual language. The challenge was to create a complete brand identity that feels deeply connected to place, yet modern enough to stand confidently within a premium hospitality environment.
          </p>

          {/* VIEW MORE Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsViewMoreOpen(!isViewMoreOpen)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white font-inter text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer"
          >
            <span>{isViewMoreOpen ? 'Hide Case Study Details' : 'VIEW MORE'}</span>
            {isViewMoreOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </motion.button>
        </motion.div>
      </header>

      {/* ==========================================
          EXPANDABLE DETAILED CASE STUDY (VIEW MORE)
          ========================================== */}
      <AnimatePresence>
        {isViewMoreOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden mb-12"
          >
            <div className="p-6 sm:p-10 bg-neutral-50 rounded-3xl border border-neutral-200/80 max-w-5xl mx-auto space-y-10 shadow-inner">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span className="font-inter text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                    Comprehensive Strategy &amp; Documentation
                  </span>
                </div>
                <button
                  onClick={() => setIsViewMoreOpen(false)}
                  className="text-neutral-400 hover:text-neutral-900 transition-colors p-1 cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 01 — THE CHALLENGE */}
              <div className="space-y-3">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  01 &mdash; THE CHALLENGE
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  Creating a Sense of Place
                </h3>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  The goal was to develop an identity that could communicate luxury without feeling generic. Myazu needed a visual language with a strong connection to Saudi culture, architecture, and hospitality while remaining elegant, modern, and highly recognizable.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  The challenge was to transform cultural references into a contemporary system that could live across the hotel environment, packaging, signage, guest experiences, and branded touchpoints.
                </p>
              </div>

              {/* 02 — RESEARCH & VISUAL EXPLORATION */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  02 &mdash; RESEARCH &amp; VISUAL EXPLORATION
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  Looking Into Riyadh’s Visual Heritage
                </h3>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  The creative exploration began with the visual culture of Riyadh and Saudi Arabia.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  We studied traditional architectural forms, geometric ornamentation, Arabic typography, regional color palettes, decorative borders, and the relationship between heritage and modern urban design.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  The objective was not to recreate traditional design literally, but to reinterpret its visual principles for a contemporary hospitality brand.
                </p>
                <p className="font-playfair text-lg sm:text-xl font-semibold text-neutral-900 pt-2">
                  HERITAGE &bull; ARCHITECTURE &bull; HOSPITALITY
                </p>
              </div>

              {/* 03 — THE CREATIVE DIRECTION */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  03 &mdash; THE CREATIVE DIRECTION
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  Modern Heritage
                </h3>
                <p className="font-playfair text-xl text-neutral-800 italic">
                  "Rooted in heritage. Designed for today."
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  The creative direction was built around the idea of <strong>Modern Heritage</strong>.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  Traditional Saudi visual elements were refined into a more contemporary and structured system. Architectural arches, geometric patterns, ornamental borders, and regional references became the foundation for a brand world that feels timeless rather than nostalgic.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  Myazu represents a meeting point between cultural memory and contemporary luxury.
                </p>
              </div>

              {/* 04 — BRAND IDENTITY */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  04 &mdash; BRAND IDENTITY
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  A Mark Built Around Recognition
                </h3>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  The Myazu identity was designed to feel distinctive, architectural, and culturally grounded.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  The brand mark combines Arabic and English typography to create a bilingual identity system that reflects the international nature of modern Riyadh while maintaining a strong regional character.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  Every element was developed to create immediate recognition across physical and digital touchpoints.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['DISTINCTIVE', 'CULTURAL', 'TIMELESS'].map((tag) => (
                    <span key={tag} className="font-inter text-[10px] font-bold tracking-wider px-2.5 py-1 bg-neutral-200/60 rounded-full text-neutral-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 05 — THE VISUAL LANGUAGE */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  05 &mdash; THE VISUAL LANGUAGE
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  A System Inspired by Architecture
                </h3>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  The visual language draws inspiration from Saudi architectural forms and decorative traditions.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  Arches, frames, geometric borders, repeated patterns, and symmetrical compositions were transformed into flexible visual elements that can expand across multiple applications.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  Rather than relying on a single logo, the identity was designed as a complete visual system.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['MODULAR', 'ARCHITECTURAL', 'EXPANDABLE'].map((tag) => (
                    <span key={tag} className="font-inter text-[10px] font-bold tracking-wider px-2.5 py-1 bg-neutral-200/60 rounded-full text-neutral-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 06 — COLOR & MATERIAL DIRECTION */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  06 &mdash; COLOR &amp; MATERIAL DIRECTION
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  A Palette With Cultural Depth
                </h3>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  The color system combines deep architectural tones with warm desert-inspired accents.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  Rich teal and deep blue establish a sense of sophistication, while warm orange, gold, and earthy tones introduce warmth and regional character.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  Together, the palette creates a visual balance between luxury, hospitality, tradition, and contemporary design.
                </p>
                <p className="font-playfair text-lg sm:text-xl font-semibold text-neutral-900 pt-2">
                  DEEP TONES. WARM ACCENTS. DISTINCTIVE CHARACTER.
                </p>
              </div>

              {/* 07 — ENVIRONMENTAL BRANDING */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  07 &mdash; ENVIRONMENTAL BRANDING
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  Bringing the Identity Into the Real World
                </h3>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  For a hospitality brand, the identity needs to live beyond the screen.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  The visual system was extended into the physical environment through architectural graphics, façade applications, signage, decorative patterns, and spatial touchpoints.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  The exterior branding transforms the building into a recognizable part of the Myazu experience.
                </p>
                <p className="font-playfair text-lg font-bold text-neutral-900 uppercase">
                  THE BRAND BEGINS BEFORE THE GUEST ENTERS.
                </p>
              </div>

              {/* 08 — PACKAGING SYSTEM */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  08 &mdash; PACKAGING SYSTEM
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  Designing for the Guest Experience
                </h3>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  Packaging became an important extension of the Myazu identity.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  Branded boxes, cups, takeaway packaging, and guest-facing materials were designed using the same architectural framework, creating consistency while allowing different formats to maintain their own visual presence.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  Every package was treated as part of the overall hospitality experience.
                </p>
                <p className="font-playfair text-lg font-semibold text-neutral-900 pt-1">
                  ONE IDENTITY. MULTIPLE TOUCHPOINTS.
                </p>
              </div>

              {/* 09 — PATTERN & GRAPHIC SYSTEM */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  09 &mdash; PATTERN &amp; GRAPHIC SYSTEM
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  Detail With Purpose
                </h3>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  The graphic system was designed to add depth without overwhelming the identity.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  Inspired by regional decorative language, the patterns can be scaled, cropped, repeated, and recombined across different applications.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  This creates flexibility while ensuring that every touchpoint still feels unmistakably Myazu.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['STRUCTURED', 'FLEXIBLE', 'RECOGNIZABLE'].map((tag) => (
                    <span key={tag} className="font-inter text-[10px] font-bold tracking-wider px-2.5 py-1 bg-neutral-200/60 rounded-full text-neutral-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 10 — PRODUCT & PACKAGING APPLICATIONS */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  10 &mdash; PRODUCT &amp; PACKAGING APPLICATIONS
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  A Cohesive Family of Experiences
                </h3>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  From small packaging formats to larger branded applications, every element was designed to feel part of the same visual world.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  Different products and formats can introduce variation through color and composition while maintaining the same underlying architectural structure.
                </p>
                <p className="font-playfair text-lg font-semibold text-neutral-900 pt-1">
                  DISTINCT APPLICATIONS. ONE COHESIVE SYSTEM.
                </p>
              </div>

              {/* 11 — EXTENDING THE BRAND EXPERIENCE */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  11 &mdash; EXTENDING THE BRAND EXPERIENCE
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  Beyond the Hotel Identity
                </h3>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  The Myazu visual system was developed to move across multiple environments and experiences.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  From packaging and signage to transportation, promotional materials, digital content, and guest interactions, the identity remains consistent while adapting to different scales and contexts.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  The system is designed to grow with the brand.
                </p>
                <p className="font-playfair text-lg font-semibold text-neutral-900 pt-1">
                  ONE PLACE. MANY EXPERIENCES.
                </p>
              </div>

              {/* 12 — THE FINAL OUTCOME */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  12 &mdash; THE FINAL OUTCOME
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  A Contemporary Expression of Riyadh
                </h3>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  The final identity creates a visual world that is both culturally grounded and commercially relevant.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  Myazu brings together architecture, pattern, typography, color, and hospitality into one cohesive system designed for a contemporary luxury audience.
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  It is an identity built to feel connected to Riyadh, recognizable across touchpoints, and flexible enough to evolve with the brand.
                </p>
                <p className="font-playfair text-lg sm:text-xl font-bold text-neutral-900 pt-2 uppercase">
                  MYAZU &mdash; WHERE HERITAGE MEETS MODERN HOSPITALITY.
                </p>
              </div>

              <div className="pt-4 text-center">
                <button
                  onClick={() => setIsViewMoreOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-neutral-200 text-neutral-800 font-inter text-xs font-semibold hover:bg-neutral-300 transition-colors cursor-pointer"
                >
                  Collapse Case Study Details
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==========================================
          EXACT 19-ROW VISUAL STORYTELLING SEQUENCE
          ========================================== */}
      <div className="w-full space-y-4" style={{ gap: '16px' }}>
        {/* ROW 1 (Full Width): 1.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249652/1.jpg", 1400)}
            alt="Myazu Architectural Entrance"
            style={mediaImgStyle}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* ROW 2 (Full Width): 3.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249662/3.jpg", 1400)}
            alt="Myazu Brand System"
            style={mediaImgStyle}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* ROW 3 (2-Col Grid): 6.jpg & 8.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" style={{ gap: '16px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <img
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249662/6.jpg", 800)}
              alt="Myazu Architectural Form"
              style={mediaImgStyle}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <img
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249652/8.jpg", 800)}
              alt="Myazu Geometric Heritage"
              style={mediaImgStyle}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* ROW 4 (Full Width): 4.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249664/4.jpg", 1400)}
            alt="Myazu Color & Material Direction"
            style={mediaImgStyle}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* ROW 5 (Full Width): 7.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249659/7.jpg", 1400)}
            alt="Myazu Environmental Graphics"
            style={mediaImgStyle}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* ROW 6 (Full Width): 5.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249677/5.jpg", 1400)}
            alt="Myazu Architectural Façade"
            style={mediaImgStyle}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* ROW 7 (2-Col Grid): 9.jpg & 10.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" style={{ gap: '16px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <img
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249661/9.jpg", 800)}
              alt="Myazu Typography & Layout"
              style={mediaImgStyle}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <img
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249656/10.jpg", 800)}
              alt="Myazu Visual Details"
              style={mediaImgStyle}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* ROW 8 (Full Width): 13.png */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249680/13.png", 1400)}
            alt="Myazu Monogram & Geometry"
            style={mediaImgStyle}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* ROW 9 (2-Col Grid): 11.jpg & 17.png */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" style={{ gap: '16px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <img
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249673/11.jpg", 800)}
              alt="Myazu Pattern Exploration"
              style={mediaImgStyle}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <img
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249686/17.png", 800)}
              alt="Myazu Pattern System"
              style={mediaImgStyle}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* MIDDLE TEXT: SYSTEM & IDENTITY SECTION */}
        <section className="my-8 py-8 sm:py-10 border-y border-neutral-200 text-center bg-neutral-50/60 rounded-2xl w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto px-4"
          >
            <h2 className="font-playfair text-2xl sm:text-4xl font-semibold text-neutral-900 tracking-tight uppercase mb-2">
              SYSTEM &amp; IDENTITY
            </h2>
            <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              A flexible visual system designed to keep the brand consistent while allowing creativity to evolve.
            </p>
          </motion.div>
        </section>

        {/* ROW 10 (Full Width): 12.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249689/12.jpg", 1400)}
            alt="Myazu Packaging System"
            style={mediaImgStyle}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* ROW 11 (2-Col Grid): 19.png & 20.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" style={{ gap: '16px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <img
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249686/19.png", 800)}
              alt="Myazu Takeaway Cups & Packaging"
              style={mediaImgStyle}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <img
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249699/20.jpg", 800)}
              alt="Myazu Guest Collateral"
              style={mediaImgStyle}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* ROW 12 (Full Width Video): veo-3.1-audio-1080p_b_A_perfectly_seamless.mp4 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <LazyVideo
            src="https://res.cloudinary.com/e2bztnpa/video/upload/v1787252182/veo-3.1-audio-1080p_b_A_perfectly_seamless.mp4"
            style={mediaVideoStyle}
          />
        </motion.div>

        {/* ROW 13 (2-Col Grid): 14.png & 15.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" style={{ gap: '16px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <img
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249674/14.png", 800)}
              alt="Myazu Product Application"
              style={mediaImgStyle}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <img
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249674/15.jpg", 800)}
              alt="Myazu Takeaway Box"
              style={mediaImgStyle}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* ROW 14 (Full Width): 18.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249700/18.jpg", 1400)}
            alt="Myazu Brand Stationery"
            style={mediaImgStyle}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* ROW 15 (2-Col Grid): 16.jpg & 23.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" style={{ gap: '16px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <img
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249686/16.jpg", 800)}
              alt="Myazu Hospitality Bag"
              style={mediaImgStyle}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <img
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249689/23.jpg", 800)}
              alt="Myazu Luxury Merchandise"
              style={mediaImgStyle}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* ROW 16 (Full Width): 24.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249703/24.jpg", 1400)}
            alt="Myazu Spatial Signage"
            style={mediaImgStyle}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* ROW 17 (2-Col Grid): 21.jpg & 22.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" style={{ gap: '16px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <img
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249688/21.jpg", 800)}
              alt="Myazu Print Collateral"
              style={mediaImgStyle}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <img
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787254678/22.jpg", 800)}
              alt="Myazu Editorial Menu"
              style={mediaImgStyle}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* ROW 18 (Full Width): 25_1.png */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249706/25_1.png", 1400)}
            alt="Myazu Complete Brand Landscape"
            style={mediaImgStyle}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* ROW 19 (Full Width): 26.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787249706/26.jpg", 1400)}
            alt="Myazu Architectural Night View"
            style={mediaImgStyle}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* ==========================================
          BOTTOM RHYTHM / TYPOGRAPHY / OUTCOME TEXT
          ========================================== */}
      <section className="mt-16 sm:mt-24 pt-12 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="font-inter text-xs font-bold tracking-[0.25em] text-neutral-400 uppercase block mb-3">
            THE OUTCOME
          </span>
          <h2 className="font-playfair text-4xl sm:text-6xl font-semibold text-neutral-900 tracking-tight mb-6">
            A Contemporary Expression of Riyadh
          </h2>
          <p className="font-inter text-base sm:text-lg text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto">
            The final identity creates a visual world that is both culturally grounded and commercially relevant. Myazu brings together architecture, pattern, typography, color, and hospitality into one cohesive system designed for a contemporary luxury audience.
          </p>
        </div>

        {/* 6 Editorial Grid Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {[
            {
              title: "STRATEGY",
              desc: "A clear creative direction rooted in Riyadh’s cultural heritage and contemporary luxury."
            },
            {
              title: "IDENTITY",
              desc: "A distinctive bilingual Arabic and English identity system built for instant recognition."
            },
            {
              title: "ARCHITECTURE",
              desc: "Environmental graphics, façade applications, and spatial touchpoints that transform physical spaces."
            },
            {
              title: "PACKAGING",
              desc: "A cohesive family of guest-facing boxes, cups, takeaway items, and branded collateral."
            },
            {
              title: "COLOR & MATERIAL",
              desc: "Deep architectural teal and midnight tones balanced with warm desert gold accents."
            },
            {
              title: "EXPANDABILITY",
              desc: "A versatile visual language capable of moving seamlessly across physical, digital, and hospitality experiences."
            }
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-2xl border border-neutral-200/80 bg-neutral-50/50">
              <span className="font-inter text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-2">
                {item.title}
              </span>
              <p className="font-inter text-sm text-neutral-800 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          FINAL CLOSING
          ========================================== */}
      <section className="py-16 sm:py-24 text-center max-w-4xl mx-auto border-t border-neutral-200 mt-16 sm:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-inter text-xs font-bold tracking-[0.25em] text-neutral-400 uppercase block mb-3">
            ROOTED IN HERITAGE. DESIGNED FOR TODAY.
          </span>
          <h2 className="font-playfair text-4xl sm:text-6xl font-semibold text-neutral-900 tracking-tight mb-6">
            More Than Hospitality.
          </h2>
          <p className="font-inter text-base sm:text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed mb-12 font-normal">
            This project was about building a design system with enough structure to create consistency and enough freedom to create a timeless cultural luxury experience.
          </p>
          <div className="py-8 border-y border-neutral-200">
            <p className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 uppercase">
              MYAZU &mdash; WHERE HERITAGE MEETS MODERN HOSPITALITY.
            </p>
          </div>
        </motion.div>
      </section>
    </article>
  );
};
