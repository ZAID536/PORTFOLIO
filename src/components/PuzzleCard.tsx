import React, { useState } from 'react';
import { Project } from '../types';
import { getOptimizedImageUrl } from '../utils/cloudinary';

interface PuzzleCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const PuzzleCard: React.FC<PuzzleCardProps> = ({ project, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const optimizedCover = getOptimizedImageUrl(project.coverImage, 600);

  // 3x3 Grid Scatter transforms for 9 tile pieces on hover
  // row r (0..2), col c (0..2)
  const tiles = [
    // Row 0
    { r: 0, c: 0, hoverTransform: 'translate(-8px, -8px) rotate(-4deg)' },
    { r: 0, c: 1, hoverTransform: 'translate(0px, -10px) rotate(2deg)' },
    { r: 0, c: 2, hoverTransform: 'translate(8px, -8px) rotate(5deg)' },
    // Row 1
    { r: 1, c: 0, hoverTransform: 'translate(-10px, 0px) rotate(-3deg)' },
    { r: 1, c: 1, hoverTransform: 'translate(0px, 0px) scale(0.92)' },
    { r: 1, c: 2, hoverTransform: 'translate(10px, 0px) rotate(3deg)' },
    // Row 2
    { r: 2, c: 0, hoverTransform: 'translate(-8px, 8px) rotate(4deg)' },
    { r: 2, c: 1, hoverTransform: 'translate(0px, 10px) rotate(-2deg)' },
    { r: 2, c: 2, hoverTransform: 'translate(8px, 8px) rotate(-5deg)' },
  ];

  return (
    <div
      data-category={project.category}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(project)}
      style={{
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0px)',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`group relative rounded-2xl bg-white dark:bg-[#1C1C1E] border border-[#DCCFE8] dark:border-white/10 cursor-pointer overflow-hidden transition-all duration-300 ${
        isHovered
          ? 'shadow-[0_20px_25px_-5px_rgba(0,0,0,0.12),0_8px_10px_-6px_rgba(0,0,0,0.08)] border-[#E8502F]/60'
          : 'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.04),0_2px_4px_-2px_rgba(0,0,0,0.02)]'
      }`}
    >
      {/* 1. THUMBNAIL IMAGE (Aspect ratio 4:3, rounded top corners) */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900 rounded-t-2xl select-none">
        {/* Background base image */}
        <img
          src={optimizedCover}
          alt={project.title}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-20 filter blur-xs"
        />

        {/* 3x3 CSS Grid Tile Pieces */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-0.5 p-1 z-10">
          {tiles.map((tile, idx) => (
            <div
              key={idx}
              style={{
                transform: isHovered ? tile.hoverTransform : 'translate(0px, 0px) rotate(0deg)',
                transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
              className="relative overflow-hidden rounded-md border border-white/20 shadow-xs bg-slate-800"
            >
              <img
                src={optimizedCover}
                alt=""
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="absolute max-w-none object-cover"
                style={{
                  width: '300%',
                  height: '300%',
                  left: `-${tile.c * 100}%`,
                  top: `-${tile.r * 100}%`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Category Badge Chip (Top-Left) */}
        <div className="absolute top-3 left-3 z-20">
          <span className="px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase text-white bg-black/60 backdrop-blur-md border border-white/20 shadow-md">
            {project.category}
          </span>
        </div>

        {/* Year Label (Top-Right) */}
        <div className="absolute top-3 right-3 z-20">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold text-white bg-black/60 backdrop-blur-md border border-white/20 shadow-md">
            {project.year}
          </span>
        </div>

        {/* Small Circular Marker Centered on Image (Appears with Pulse on Hover) */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div
            className={`w-10 h-10 rounded-full bg-[#E8502F] text-white flex items-center justify-center shadow-lg shadow-[#E8502F]/60 transition-all duration-300 ${
              isHovered ? 'opacity-100 scale-100 animate-pulse' : 'opacity-0 scale-50'
            }`}
          >
            <span className="w-3.5 h-3.5 rounded-full bg-white shadow-inner" />
          </div>
        </div>
      </div>

      {/* 2. CARD BODY (White/light background, padding, rounded bottom corners) */}
      <div className="p-5 bg-white dark:bg-[#1C1C1E] rounded-b-2xl">
        {/* Project Title (Bold, 1 line, truncate with ellipsis) */}
        <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#16141A] dark:text-white leading-snug truncate mb-1.5 group-hover:text-[#E8502F] transition-colors duration-200">
          {project.title}
        </h3>

        {/* Short Description (2 lines max, muted gray text, line-clamp) */}
        <p className="text-xs sm:text-sm text-[#5E5963] dark:text-slate-400 line-clamp-2 leading-relaxed mb-4 font-medium">
          {project.subtitle}
        </p>

        {/* Row of 2-3 small outline tag chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-full text-[10px] font-bold border border-[#DCCFE8] dark:border-white/15 text-[#5E5963] dark:text-slate-300 bg-transparent"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
