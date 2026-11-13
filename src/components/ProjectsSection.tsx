import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { CATEGORIES, PROJECTS } from '../data/projects';
import { PuzzleCard } from './PuzzleCard';
import { ProjectModal } from './ProjectModal';
import { Filter, Search } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Filter projects based on category and search query
  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          {/* Small uppercase label with letter-spacing */}
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#5E5963] dark:text-slate-300 font-sans block mb-2">
            SELECTED WORKS &amp; CASE STUDIES
          </span>
          
          {/* Large heading with mixed-typography contrast look */}
          <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black text-[#16141A] dark:text-white tracking-tight leading-[0.95]">
            Identities &amp;{' '}
            <span className="font-serif italic font-normal text-[#E8502F] drop-shadow-sm">
              Experiences
            </span>
          </h2>
        </div>

        {/* Helper paragraph (right-aligned on desktop, stacks on mobile) */}
        <p className="max-w-md text-xs sm:text-sm text-[#5E5963] dark:text-slate-300 font-medium leading-relaxed md:text-right">
          Hover over any project piece to experience the 3D scatter-and-snap puzzle effect. Click to inspect complete identity breakdowns.
        </p>
      </div>

      {/* 2. FILTER + SEARCH BAR */}
      <div className="mb-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Horizontal row of pill-shaped filter buttons */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 sm:pb-0 max-w-full">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as ProjectCategory)}
                className={`h-10 px-5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer flex-shrink-0 flex items-center justify-center ${
                  isActive
                    ? 'bg-[#E8502F] text-white shadow-lg shadow-[#E8502F]/30 scale-105 border border-[#E8502F]'
                    : 'bg-white/80 dark:bg-black/30 backdrop-blur-md border border-[#DCCFE8] dark:border-white/20 text-[#16141A] dark:text-white hover:bg-white dark:hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Rounded search input box */}
        <div className="relative h-10 w-full sm:w-64 lg:w-72 flex-shrink-0">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5E5963] dark:text-slate-300" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-full pl-9 pr-4 rounded-full bg-white/85 dark:bg-black/30 backdrop-blur-md text-xs font-semibold text-[#16141A] dark:text-white placeholder-[#5E5963] dark:placeholder-slate-400 border border-[#DCCFE8] dark:border-white/20 focus:outline-none focus:bg-white focus:text-[#16141A] focus:placeholder-slate-400 focus:border-[#E8502F] focus:ring-2 focus:ring-[#E8502F]/30 transition-all duration-300 shadow-inner"
          />
        </div>
      </div>

      {/* 3. PROJECT GRID */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <PuzzleCard
              key={project.id}
              project={project}
              onSelect={(proj) => setActiveModalProject(proj)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 rounded-3xl bg-white/80 dark:bg-black/30 backdrop-blur-md border border-dashed border-[#DCCFE8] dark:border-white/20 text-[#16141A] dark:text-white">
          <Filter className="w-10 h-10 mx-auto text-[#5E5963] dark:text-slate-300 mb-3 animate-bounce" />
          <h3 className="font-heading font-bold text-lg mb-1">No Projects Found</h3>
          <p className="text-xs sm:text-sm text-[#5E5963] dark:text-slate-300 mb-4 max-w-sm mx-auto">
            No items match your filter selection or search query. Try clearing your search.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-6 py-2.5 rounded-full bg-[#E8502F] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#d03b07] transition-all cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Modal View for full case study breakdown */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
