import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ExternalLink, Globe, Layers, AlertCircle } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const isDetailMode = !!selectedProject;

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Portofolio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {isDetailMode ? 'Detail Proyek' : 'Karya & Hasil Proyek'}
          </p>
        </div>

        {/* Filters (hanya saat grid mode) */}
        {!isDetailMode && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-3 md:py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform min-w-[80px] ${
                  filter === cat
                    ? 'bg-brand-600 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 hover:scale-105'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Grid & carousel hanya saat grid mode */}
        {!isDetailMode && (
          <>
            {/* Desktop Grid with Filter Animation */}
            <div 
              key={filter} // Forces re-render to trigger animation
              className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-[fadeIn_0.6s_ease-out]"
            >
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onViewDetail={() => setSelectedProject(project)}
                />
              ))}
            </div>

            {/* Mobile Carousel Optimized */}
            <div 
              key={`mobile-${filter}`}
              className="md:hidden flex overflow-x-auto snap-x snap-mandatory space-x-5 pb-8 hide-scrollbar px-4 animate-[fadeIn_0.6s_ease-out]"
            >
              {filteredProjects.map((project) => (
                <div key={project.id} className="flex-none w-[85%] sm:w-[45%] snap-center">
                  <ProjectCard 
                    project={project} 
                    isMobile 
                    onViewDetail={() => setSelectedProject(project)}
                  />
                </div>
              ))}
            </div>

            {/* Mobile Swipe Hint */}
            <div className="md:hidden text-center -mt-4 mb-8">
              <div className="h-1 w-16 bg-slate-300/50 rounded-full mx-auto"></div>
            </div>
          </>
        )}

        {/* Detail Mode */}
        {isDetailMode && selectedProject && (
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-[fadeIn_0.3s_ease-out]">
            {/* Header image */}
            <div className="relative max-h-[360px] sm:max-h-[420px] overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-600/90 text-white shadow-sm border border-white/20">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 pt-6 pb-8">
              <button
                type="button"
                className="mb-4 inline-flex items-center text-xs font-medium text-slate-500 hover:text-slate-700"
                onClick={() => setSelectedProject(null)}
              >
                ← Kembali ke daftar proyek
              </button>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {selectedProject.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                    <Layers size={12} className="text-brand-500" />
                    {tech}
                  </span>
                ))}
              </div>

              <div className="prose prose-slate prose-sm max-w-none text-slate-600 mb-8 leading-relaxed">
                <p>{selectedProject.description}</p>
                {selectedProject.highlight && (
                  <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-500 italic">
                    <span className="font-semibold text-brand-600 not-italic">Highlight:</span> {selectedProject.highlight}
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100">
                {selectedProject.liveDemoUrl ? (
                  <a
                    href={selectedProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex justify-center items-center px-4 py-3 border border-transparent text-sm font-bold rounded-xl shadow-lg shadow-brand-500/30 text-white bg-brand-600 hover:bg-brand-700 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 min-h-[48px]"
                  >
                    <Globe className="mr-2 h-5 w-5" />
                    Live Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex-1 inline-flex justify-center items-center px-4 py-3 border border-slate-200 text-sm font-medium rounded-xl text-slate-400 bg-slate-50 cursor-not-allowed min-h-[48px]"
                  >
                    <AlertCircle className="mr-2 h-5 w-5" />
                    Demo Tidak Tersedia
                  </button>
                )}

                <button
                  type="button"
                  className="flex-1 inline-flex justify-center items-center px-4 py-3 border border-slate-300 shadow-sm text-sm font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors min-h-[48px]"
                  onClick={() => setSelectedProject(null)}
                >
                  Kembali ke Portofolio
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

    </section>
  );
};

const ProjectCard: React.FC<{ 
  project: Project; 
  isMobile?: boolean;
  onViewDetail: () => void;
}> = ({ project, isMobile, onViewDetail }) => {
  return (
    <div 
      className={`group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 h-full flex flex-col 
      transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl ${isMobile ? 'mx-0' : ''}`}
    >
      {/* 
        OPTIMIZATION: Lower height on mobile (h-40) so content "above the fold" is visible. 
        Higher on desktop (h-52).
      */}
      <div className="relative h-40 md:h-44 lg:h-52 overflow-hidden cursor-pointer" onClick={onViewDetail}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
           <span className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur text-slate-900 text-sm font-bold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
             Lihat Detail
           </span>
        </div>
        <div className="absolute top-4 left-4">
           <span className="text-white text-[10px] font-bold uppercase tracking-wider bg-slate-900/60 backdrop-blur-sm px-2 py-1 rounded-md border border-white/10 shadow-sm">
             {project.category}
           </span>
        </div>
      </div>
      
      <div className="p-5 md:p-6 flex-1 flex flex-col">
        {/* Title emphasizes focus */}
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 text-sm mb-5 line-clamp-3 flex-1 leading-relaxed">
          {project.description}
        </p>
        
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <div key={tech} className="relative group/tooltip">
                <span className="px-2.5 py-1 bg-slate-50 border border-slate-100 text-slate-600 text-[10px] font-semibold rounded-md uppercase tracking-wider hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-colors cursor-default">
                  {tech}
                </span>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                  {tech} (Teknologi Utama)
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={onViewDetail}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 md:py-2.5 border border-slate-200 text-slate-600 text-sm font-medium rounded-xl hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all active:scale-95 min-h-[44px]"
          >
            Lihat Detail <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
