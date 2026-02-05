import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, Code, ExternalLink } from 'lucide-react';

export function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const MAIN_PROJECTS = t('projects.main_items', { returnObjects: true }) as any[];
  const MINI_PROJECTS = t('projects.mini_items', { returnObjects: true }) as any[];

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <>
      <section id="projects" className="py-24 md:py-40 bg-section-alt transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Projects Header */}
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">{t('projects.title')}</h2>
            <div className="h-px grow bg-border" />
            <span className="text-xs text-brand opacity-60 font-mono font-black">{t('projects.mode')}</span>
          </div>

          {/* Main Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mb-32 border-b border-border">
            {MAIN_PROJECTS.map((project, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedProject(project)}
                className="tech-panel group p-10! border-border cursor-pointer shadow-sm hover:z-10"
              >
                <div className="flex justify-between mb-8 opacity-40 group-hover:opacity-100 transition-opacity font-mono">
                  <span className="text-[10px] font-black">{project.id}</span>
                  <span className="text-[10px] bg-brand text-brand-contrast px-1 font-black">ST_0{idx}</span>
                </div>

                <h3 className="text-2xl font-black mb-4 group-hover:text-brand transition-colors tracking-tighter uppercase leading-none">{project.title}</h3>

                <div className="space-y-1 mb-6 border-l-2 border-brand/20 pl-4 py-1">
                  <div className="flex items-center gap-2 text-[10px] font-bold">
                    <span className="text-brand uppercase tracking-tighter">{t('projects.org')}:</span>
                    <span className="text-text-main">{project.organization}</span>
                    {project.team && (
                      <>
                        <span className="opacity-20">//</span>
                        <span className="text-brand uppercase tracking-tighter">{t('projects.unit')}:</span>
                        <span className="text-text-main">{project.team}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold">
                    <span className="text-brand uppercase tracking-tighter">{t('projects.role')}:</span>
                    <span className="text-text-main">{project.role}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold">
                    <span className="text-brand uppercase tracking-tighter">{t('projects.time')}:</span>
                    <span className="text-text-main">{project.period}</span>
                  </div>
                </div>

                <p className="text-text-muted text-xs mb-8 grow leading-relaxed font-bold">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 font-mono">
                  {project.tech.split(', ').slice(0, 3).map((t: string, i: number) => (
                    <span key={i} className="text-[9px] font-black tracking-widest text-brand border border-brand/20 px-2 py-0.5 uppercase">
                      {t}
                    </span>
                  ))}
                  {project.tech.split(', ').length > 3 && (
                    <span className="text-[9px] font-black text-text-muted opacity-60">+</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Mini Lab / Experiments */}
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-4 border-brand pl-6">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight">{t('projects.mini_lab_title')}</h3>
                <p className="text-text-muted text-xs font-bold mt-1 opacity-60">{t('projects.mini_lab_desc')}</p>
              </div>
              <div className="flex gap-1 font-mono text-[9px] text-brand opacity-40">
                <span>[EXPERIMENTAL_ACCESS: STABLE]</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {MINI_PROJECTS.map((project, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedProject(project)}
                  className="bg-panel/40 backdrop-blur-sm border border-border p-6 cursor-pointer hover:border-brand/40 group transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] font-mono text-brand/40 group-hover:text-brand transition-colors">{project.id}</span>
                    <div className="w-8 h-px bg-brand/20 group-hover:w-12 transition-all" />
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-tighter mb-3 group-hover:text-brand transition-colors">{project.title}</h4>
                  <p className="text-text-muted text-[11px] font-bold leading-relaxed mb-4 line-clamp-2">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 opacity-60">
                    {project.tech.split(', ').map((t: string, i: number) => (
                      <span key={i} className="text-[8px] font-black text-brand bg-brand/5 px-1.5 py-0.5 uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-brand-bg/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: 20 }}
              className="relative w-full max-w-5xl tech-panel bg-panel! p-0! shadow-2xl flex flex-col md:flex-row h-fit max-h-[90vh] md:h-[90vh] overflow-y-auto md:overflow-hidden custom-scrollbar"
            >
              <div className="md:w-2/5 p-8 bg-brand/5 border-b md:border-b-0 md:border-r border-brand/10 space-y-8 md:overflow-y-auto md:custom-scrollbar">
                <div className="flex justify-between items-start md:block md:space-y-4">
                  <div>
                    <span className="text-xs font-black text-brand tracking-[0.2em] mb-2 block">{selectedProject.id}</span>
                    <h2 className="text-4xl font-black uppercase tracking-tighter leading-none text-brand">
                      {selectedProject.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="md:hidden p-2 border border-brand/20 text-brand"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
                  <div>
                    <span className="text-[10px] font-mono font-black text-brand uppercase tracking-widest mb-1 block">{t('projects.organization')}</span>
                    <p className="font-black text-base">{selectedProject.organization}</p>
                  </div>
                  {selectedProject.team && (
                    <div>
                      <span className="text-[10px] font-mono font-black text-brand uppercase tracking-widest mb-1 block">{t('projects.unit')}</span>
                      <p className="font-black text-base">{selectedProject.team}</p>
                    </div>
                  )}
                  <div>
                    <span className="text-[10px] font-mono font-black text-brand uppercase tracking-widest mb-1 block">{t('projects.role')}</span>
                    <p className="font-black text-base">{selectedProject.role}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-black text-brand uppercase tracking-widest mb-1 block">{t('projects.time')}</span>
                    <p className="font-black text-base">{selectedProject.period}</p>
                  </div>
                </div>

                {selectedProject.links && selectedProject.links.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono font-black text-brand uppercase tracking-widest mb-4 block">{t('projects.handshake_links')}</span>
                    <div className="flex flex-col gap-2 font-mono">
                      {selectedProject.links.map((link: any, i: number) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 border border-brand/20 hover:bg-brand/10 transition-colors font-black text-xs group"
                        >
                          {link.label}
                          <ExternalLink size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="md:w-3/5 p-8 flex flex-col md:h-full bg-panel">
                <div className="hidden md:flex justify-between items-center mb-8 gap-4">
                  <div className="flex-1 h-12 hazard-stripes border border-brand/10" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 border border-brand/20 text-brand hover:bg-brand/10 transition-colors shrink-0"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-8 md:overflow-y-auto scrollbar-thin scrollbar-thumb-brand/20 md:custom-scrollbar md:pr-4 md:flex-1 md:min-h-0">
                  <div>
                    <h4 className="text-xs font-mono font-black text-brand uppercase tracking-widest mb-4">{t('projects.project_manifest')}</h4>
                    <p className="text-text-main font-bold leading-relaxed whitespace-pre-line text-lg">
                      {selectedProject.fullDesc}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-black text-brand uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Code size={14} /> {t('projects.system_dependencies')}
                    </h4>
                    <div className="flex flex-wrap gap-2 font-mono">
                      {selectedProject.tech.split(', ').map((t: string, i: number) => (
                        <span key={i} className="text-[10px] font-black bg-brand/5 border border-brand/20 px-3 py-1 text-brand uppercase tracking-widest">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-brand/10 font-mono">
                  <span className="text-[10px] font-black opacity-30 tracking-[0.3em] uppercase">
                    {t('projects.manifest_verified')} // ST_CODE: {selectedProject.id.split('-')[1]}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
