import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, Sparkles, X } from 'lucide-react';
import { LazyVideo } from './LazyVideo';
import { getOptimizedImageUrl } from '../utils/cloudinary';

export const CoolhausCaseStudy: React.FC = () => {
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
      className="coolhaus-case-study w-full bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white"
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
            COOLHAUS
          </span>

          {/* Main Title */}
          <h1 className="font-playfair text-4xl sm:text-6xl lg:text-7xl font-semibold text-neutral-900 tracking-tight leading-[1.08] mb-4">
            BRAND SYSTEM &amp; VISUAL IDENTITY
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-base sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Building a bold, playful, and scalable visual language for an ice cream brand designed to stand out.
          </p>

          {/* Compact Metadata */}
          <div className="py-6 border-y border-neutral-200/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mb-8 bg-neutral-50/50 px-6 rounded-xl">
            <div>
              <span className="font-inter text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 block mb-1">
                SERVICES
              </span>
              <p className="font-inter text-xs sm:text-sm font-medium text-neutral-800 leading-snug">
                Brand Strategy &bull; Visual Identity &bull; Packaging Design &bull; Art Direction &bull; Illustration &bull; Brand System
              </p>
            </div>
            <div>
              <span className="font-inter text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 block mb-1">
                CATEGORY
              </span>
              <p className="font-inter text-xs sm:text-sm font-medium text-neutral-800 leading-snug">
                Food &amp; Beverage &bull; Consumer Packaging
              </p>
            </div>
          </div>

          {/* Short Introduction Paragraph */}
          <p className="font-inter text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Coolhaus is built around the idea that ice cream should be more than a product &mdash; it should be an experience. The challenge was to translate that personality into a bold, expressive, playful, and unmistakably Coolhaus visual identity.
          </p>

          {/* VIEW MORE Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsViewMoreOpen(!isViewMoreOpen)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white font-inter text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-colors shadow-sm"
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
                  className="text-neutral-400 hover:text-neutral-900 transition-colors p-1"
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
                  Turning Ice Cream Into a Visual Experience
                </h3>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  Coolhaus is built around the idea that ice cream should be more than a product &mdash; it should be an experience. The challenge was to translate that personality into a bold, expressive, playful, and unmistakably Coolhaus visual identity.
                </p>
              </div>

              {/* 02 — RESEARCH & VISUAL EXPLORATION */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  02 &mdash; RESEARCH &amp; VISUAL EXPLORATION
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  Looking Beyond the Freezer Aisle
                </h3>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  We studied the competitive landscape to understand how color, typography, packaging hierarchy, illustration, photography, and flavor communication are used to capture attention.
                </p>
                <p className="font-playfair text-lg sm:text-xl font-semibold text-neutral-900 pt-2">
                  MORE COLOR &bull; MORE PERSONALITY &bull; MORE ENERGY
                </p>
              </div>

              {/* 03 — THE CREATIVE DIRECTION */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  03 &mdash; THE CREATIVE DIRECTION
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  Edible Creativity
                </h3>
                <p className="font-playfair text-xl text-neutral-800 italic">
                  "Every flavor has a personality."
                </p>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  We treated every flavor as a character rather than simply another SKU. Color, illustration, typography, naming, and composition work together to give every product its own personality within a recognizable brand world.
                </p>
              </div>

              {/* 04 — VISUAL LANGUAGE */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  04 &mdash; VISUAL LANGUAGE
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  A Brand Built to Be Seen
                </h3>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  Oversized typography, high-impact color combinations, expressive illustrations, and playful compositions create a visual identity that demands attention.
                </p>
                <p className="font-playfair text-lg sm:text-xl font-semibold text-neutral-900">
                  ONE BRAND. MANY PERSONALITIES.
                </p>
              </div>

              {/* 05 — ILLUSTRATION SYSTEM */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  05 &mdash; ILLUSTRATION SYSTEM
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  Illustration With Personality
                </h3>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  Illustration became one of the most important tools for bringing the brand to life. The visual language was designed to communicate flavor, texture, emotion, and personality in an instantly recognizable way.
                </p>
                <div className="flex gap-2 pt-1">
                  {['MODULAR', 'PLAYFUL', 'EXPANDABLE'].map((tag) => (
                    <span key={tag} className="font-inter text-[10px] font-bold tracking-wider px-2.5 py-1 bg-neutral-200/60 rounded-full text-neutral-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 06 — PACKAGING SYSTEM */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  06 &mdash; PACKAGING SYSTEM
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  Designing a System, Not Just a Package
                </h3>
                <p className="font-playfair text-lg text-neutral-800">
                  Create consistency at the brand level &mdash; while giving every SKU its own identity.
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold text-neutral-600 pt-1">
                  <span>&bull; Brand Recognition</span>
                  <span>&bull; Flavor Communication</span>
                  <span>&bull; Color Coding</span>
                  <span>&bull; Product Personality</span>
                  <span>&bull; Shelf Visibility</span>
                </div>
              </div>

              {/* 07 — COLOR & FLAVOR ARCHITECTURE */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  07 &mdash; COLOR &amp; FLAVOR ARCHITECTURE
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  Every Flavor Has a Personality
                </h3>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  Color became a functional part of the brand system &mdash; not simply decoration. Different at first glance. Connected as a family.
                </p>
              </div>

              {/* 08 — RETAIL APPLICATION */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  08 &mdash; RETAIL APPLICATION
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  Built for the Real World
                </h3>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  A strong identity needs to perform beyond the presentation board. The bold color palette, oversized typography, and distinctive illustrations were developed to create strong visual recognition from a distance.
                </p>
                <p className="font-playfair text-lg font-bold text-neutral-900 uppercase">
                  MAKE COOLHAUS IMPOSSIBLE TO OVERLOOK.
                </p>
              </div>

              {/* 09 — CAMPAIGN & COMMUNICATION */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  09 &mdash; CAMPAIGN &amp; COMMUNICATION
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  From Packaging to Campaign
                </h3>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  Packaging elements, typography, illustration, color, and photography can be recombined across campaigns, retail graphics, outdoor advertising, and social content. ONE VISUAL LANGUAGE. EVERY TOUCHPOINT.
                </p>
              </div>

              {/* 10 — PRODUCT EXPERIENCE */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  10 &mdash; PRODUCT EXPERIENCE
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  A Cohesive Family of Distinct Products
                </h3>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  Different colors, flavors, illustrations, and formats create a dynamic product family without losing the underlying brand structure. DISTINCT PRODUCTS. ONE COHESIVE WORLD.
                </p>
              </div>

              {/* 11 — EXTENDING THE VISUAL SYSTEM */}
              <div className="space-y-3 pt-6 border-t border-neutral-200/60">
                <span className="font-inter text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block">
                  11 &mdash; EXTENDING THE VISUAL SYSTEM
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-medium text-neutral-900">
                  Built to Keep Evolving
                </h3>
                <p className="font-inter text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
                  The identity was designed with enough flexibility to support new flavors, campaigns, formats, and creative expressions. Flexible enough to evolve. Distinct enough to remain recognizable.
                </p>
              </div>

              <div className="pt-4 text-center">
                <button
                  onClick={() => setIsViewMoreOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-neutral-200 text-neutral-800 font-inter text-xs font-semibold hover:bg-neutral-300 transition-colors"
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
        {/* ROW 1 (Full Width): C1.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787338831/C1.jpg", 1400)}
            alt="Portfolio Asset"
            style={mediaImgStyle}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* ROW 2 (2-Col Grid): C2.png | C3.mp4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" style={{ gap: '16px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <img
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787338840/C2.png", 800)}
              alt="Portfolio Asset"
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
            <LazyVideo
              src="https://res.cloudinary.com/e2bztnpa/video/upload/v1787338834/C3.mp4"
              style={mediaVideoStyle}
            />
          </motion.div>
        </div>

        {/* ROW 3 (Full Width): C4.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787338853/C4.jpg", 1400)}
            alt="Portfolio Asset"
            style={mediaImgStyle}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* ROW 4 (Full Width): C5.mp4 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <LazyVideo
            src="https://res.cloudinary.com/e2bztnpa/video/upload/v1787338855/C5.mp4"
            style={mediaVideoStyle}
          />
        </motion.div>

        {/* ROW 5 (2-Col Grid): C6.mp4 | C7.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" style={{ gap: '16px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <LazyVideo
              src="https://res.cloudinary.com/e2bztnpa/video/upload/v1787338835/C6.mp4"
              style={mediaVideoStyle}
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
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787338842/C7.jpg", 800)}
              alt="Portfolio Asset"
              style={mediaImgStyle}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* ROW 6 (Full Width): C8.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787338858/C8.jpg", 1400)}
            alt="Portfolio Asset"
            style={mediaImgStyle}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* ROW 7 (2-Col Grid): C9.jpg | C10.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" style={{ gap: '16px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <img
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787338853/C9.jpg", 800)}
              alt="Portfolio Asset"
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
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787338854/C10.jpg", 800)}
              alt="Portfolio Asset"
              style={mediaImgStyle}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* ROW 8 (Full Width): C11.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787338855/C11.jpg", 1400)}
            alt="Portfolio Asset"
            style={mediaImgStyle}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* ROW 9 (2-Col Grid): C12.jpg | C13.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" style={{ gap: '16px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <img
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787338872/C12.jpg", 800)}
              alt="Portfolio Asset"
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
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787338866/C13.jpg", 800)}
              alt="Portfolio Asset"
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

        {/* ROW 10 (Full Width): C14.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787338875/C14.jpg", 1400)}
            alt="Portfolio Asset"
            style={mediaImgStyle}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* ROW 11 (2-Col Grid): C15.jpg | C16.mp4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" style={{ gap: '16px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <img
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787338872/C15.jpg", 800)}
              alt="Portfolio Asset"
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
            <LazyVideo
              src="https://res.cloudinary.com/e2bztnpa/video/upload/v1787338861/C16.mp4"
              style={mediaVideoStyle}
            />
          </motion.div>
        </div>

        {/* ROW 12 (Full Width): C17.mp4 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <LazyVideo
            src="https://res.cloudinary.com/e2bztnpa/video/upload/v1787338864/C17.mp4"
            style={mediaVideoStyle}
          />
        </motion.div>

        {/* ROW 13 (2-Col Grid): C18.jpg | C19.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" style={{ gap: '16px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <img
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787338875/C18.jpg", 800)}
              alt="Portfolio Asset"
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
              src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787338878/C19.jpg", 800)}
              alt="Portfolio Asset"
              style={mediaImgStyle}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* ROW 14 (Full Width): C20.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787338875/C20.jpg", 1400)}
            alt="Portfolio Asset"
            style={mediaImgStyle}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* ROW 15 (2-Col Grid): C21.mp4 | C22.mp4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" style={{ gap: '16px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <LazyVideo
              src="https://res.cloudinary.com/e2bztnpa/video/upload/v1787338877/C21.mp4"
              style={mediaVideoStyle}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full overflow-hidden rounded-lg bg-neutral-100"
          >
            <LazyVideo
              src="https://res.cloudinary.com/e2bztnpa/video/upload/v1787338881/C22.mp4"
              style={mediaVideoStyle}
            />
          </motion.div>
        </div>

        {/* ROW 16 (Full Width): C23.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787338882/C23.jpg", 1400)}
            alt="Portfolio Asset"
            style={mediaImgStyle}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* ROW 17 (Full Width): C24.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787338885/C24.jpg", 1400)}
            alt="Portfolio Asset"
            style={mediaImgStyle}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* ROW 18 (Full Width): C25.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787338888/C25.jpg", 1400)}
            alt="Portfolio Asset"
            style={mediaImgStyle}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* ROW 19 (Full Width): C26.jpg */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden rounded-lg bg-neutral-100"
        >
          <img
            src={getOptimizedImageUrl("https://res.cloudinary.com/e2bztnpa/image/upload/v1787338882/C26.jpg", 1400)}
            alt="Portfolio Asset"
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
            Creativity That Scales
          </h2>
          <p className="font-inter text-base sm:text-lg text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto">
            The final identity transformed Coolhaus into a more expressive and recognizable visual world &mdash; capable of supporting a diverse product portfolio without becoming visually fragmented.
          </p>
        </div>

        {/* 6 Editorial Grid Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {[
            {
              title: "STRATEGY",
              desc: "A clear creative direction rooted in personality and differentiation."
            },
            {
              title: "IDENTITY",
              desc: "A bold and recognizable visual language."
            },
            {
              title: "PACKAGING",
              desc: "A scalable architecture built for multiple products and formats."
            },
            {
              title: "ILLUSTRATION",
              desc: "A flexible creative system designed for continuous expansion."
            },
            {
              title: "COLOR",
              desc: "A distinctive framework that gives every flavor its own personality."
            },
            {
              title: "APPLICATIONS",
              desc: "A visual language capable of moving seamlessly from physical and digital touchpoints."
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
            MAKING CREATIVITY TANGIBLE
          </span>
          <h2 className="font-playfair text-4xl sm:text-6xl font-semibold text-neutral-900 tracking-tight mb-6">
            More Than Packaging.
          </h2>
          <p className="font-inter text-base sm:text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed mb-12 font-normal">
            This project was about building a design system with enough structure to create consistency and enough freedom to create personality.
          </p>
          <div className="py-8 border-y border-neutral-200">
            <p className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 uppercase">
              ONE BRAND. ENDLESS POSSIBILITIES.
            </p>
          </div>
        </motion.div>
      </section>
    </article>
  );
};
