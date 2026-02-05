import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import { useTranslation } from 'react-i18next'
import { X, Briefcase, Code, ExternalLink, Github, Linkedin, Mail, Copy, Check, Terminal, Cpu, Database, Palette, Shield, Zap, Layout, Monitor, Server, Box, GitBranch, Binary, Globe } from 'lucide-react'
import ThemeToggle from './components/ThemeToggle'
import LoadingScreen from './components/LoadingScreen'
import LanguageToggle from './components/LanguageToggle'
import './App.css'

// --- Technical Data Overlays ---
const GLYPHS = "01ABCDEFGH_JKLMNOPQRSTUVWXYZ<>{}[]$%-+*";

function DecipherText({ text, delay = 0 }: { text: string, delay?: number }) {
  const [displayText, setDisplayText] = useState(() =>
    text.split("").map(c => c === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]).join("")
  );

  useEffect(() => {
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText(
          text.split("")
            .map((char, index) => {
              if (index < iteration) return char;
              if (char === " ") return " ";
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 30);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, delay]);

  return <>{displayText}</>;
}
// Data handles through i18n

const SKILLS = [
  {
    category: "DEVELOPMENT",
    label: "CORE_SYSTEMS",
    icon: <Cpu size={24} />,
    skills: [
      { name: "HTML", icon: <Layout size={14} /> },
      { name: "CSS", icon: <Palette size={14} /> },
      { name: "JS", icon: <Binary size={14} /> },
      { name: "TS", icon: <Shield size={14} /> },
      { name: "React", icon: <Box size={14} /> },
      { name: "React Native", icon: <Monitor size={14} /> },
      { name: "TailwindCSS", icon: <Palette size={14} /> },
      { name: "Next.js", icon: <Zap size={14} /> },
      { name: "Django", icon: <Server size={14} /> },
      { name: "Python", icon: <Binary size={14} /> }
    ]
  },
  {
    category: "INFRASTRUCTURE",
    label: "ORCHESTRATION",
    icon: <Database size={24} />,
    skills: [
      { name: "AWS", icon: <Server size={14} /> },
      { name: "Git", icon: <GitBranch size={14} /> }
    ]
  },
  {
    category: "TOOLING",
    label: "ENV_STABLE",
    icon: <Code size={24} />,
    skills: [
      { name: "VSCode", icon: <Terminal size={14} /> },
      { name: "Antigravity", icon: <Zap size={14} /> }
    ]
  },
  {
    category: "CREATIVE",
    label: "DESIGN_MEDIA",
    icon: <Palette size={24} />,
    skills: [
      { name: "Photoshop", icon: <Palette size={14} /> },
      { name: "Premiere", icon: <Monitor size={14} /> },
      { name: "Figma", icon: <Box size={14} /> }
    ]
  },
  {
    category: "MANAGEMENT",
    label: "PRODUCTIVITY",
    icon: <Shield size={24} />,
    skills: [
      { name: "MS Office", icon: <Binary size={14} /> },
      { name: "Notion", icon: <Globe size={14} /> }
    ]
  }
];

function App() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [isAlt, setIsAlt] = useState(false);
  const [selectedExp, setSelectedExp] = useState<any>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showMailMenu, setShowMailMenu] = useState(false);
  const [copied, setCopied] = useState(false);


  // Extract translation-ready items
  const EDUCATION_ITEMS = t('education.items', { returnObjects: true }) as any[];
  const EXPERIENCE_ITEMS = t('experience.items', { returnObjects: true }) as any[];
  const PROJECT_ITEMS = t('projects.items', { returnObjects: true }) as any[];
  const LOGS = t('system.logs', { returnObjects: true }) as string[];

  useEffect(() => {
    const interval = setInterval(() => setIsAlt(prev => !prev), 4000);
    return () => clearInterval(interval);
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedExp || selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedExp, selectedProject]);

  return (
    <div className={`min-h-screen selection:bg-brand/30 relative overflow-x-hidden`}>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen key="loader" onFinished={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className={isLoading ? "h-screen overflow-hidden" : ""}>
        <div className="scanline" />
        <Navbar />

        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 font-mono">
          <ThemeToggle />
          <LanguageToggle />
        </div>

        {/* Background Decorative Elements */}
        <div className="fixed top-3/4 left-4 z-20 text-[10px] text-brand/25 -rotate-90 origin-top-left pointer-events-none select-none uppercase tracking-[0.3em] font-mono font-black">
          {t('system.coord_x')} // {t('system.coord_y')} // {t('system.status')}
        </div>
        <div className="fixed top-1/2 right-4 z-20 rotate-90 origin-top-right pointer-events-none select-none text-[10px] text-brand/25 uppercase tracking-[0.3em] font-mono font-black">
          {t('system.node_id')} // {t('system.link')} // 0x7E7
        </div>

        {/* Edge Accents */}
        <div className="fixed top-0 bottom-0 left-0 w-px bg-brand/5 z-20 pointer-events-none" />
        <div className="fixed top-0 bottom-0 right-0 w-px bg-brand/5 z-20 pointer-events-none" />

        <main className="relative z-10">
          {/* Home Section */}
          <section id="home" className="min-h-screen flex flex-col items-center justify-center p-6 pt-20">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-12 lg:col-span-8 flex flex-col justify-center space-y-8">
                <div className="inline-block border border-brand/40 px-3 py-1 text-[10px] text-brand w-fit animate-pulse tracking-widest font-mono font-black uppercase">
                  {t('system.access_granted')}
                </div>
                {/* Cinematic Hero Title */}
                <div className="relative min-h-[1.2em] flex items-baseline">
                  <motion.h1
                    layout
                    className="text-6xl md:text-8xl lg:text-9xl font-black text-brand tracking-tighter uppercase leading-none flex items-baseline"
                  >
                    <motion.span layout className="shrink-0">H</motion.span>

                    <AnimatePresence mode="popLayout">
                      {!isAlt ? (
                        <motion.span
                          key="hello"
                          layout
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="px-[0.05em] origin-left flex items-baseline whitespace-nowrap"
                        >
                          <DecipherText text={t('hero.hello')} />
                          <span className="inline-block w-[0.1em]" />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="hee"
                          layout
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="px-[0.05em] origin-left flex items-baseline whitespace-nowrap"
                        >
                          <DecipherText text={t('hero.ee')} />
                          <span className="inline-block w-[0.1em]" />
                        </motion.span>
                      )}
                    </AnimatePresence>

                    <motion.span layout className="shrink-0">W</motion.span>

                    <AnimatePresence mode="popLayout">
                      {!isAlt ? (
                        <motion.span
                          key="world"
                          layout
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="px-[0.05em] origin-left whitespace-nowrap"
                        >
                          <DecipherText text={t('hero.world')} delay={0.15} />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="wook"
                          layout
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="px-[0.05em] origin-left flex items-baseline whitespace-nowrap"
                        >
                          <DecipherText text={t('hero.wook')} delay={0.15} />
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 0.6, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-[0.2em] md:text-[0.18em] font-bold ml-2 tracking-normal normal-case whitespace-nowrap opacity-60 hidden md:inline-block border-l border-brand/20 pl-2 py-1 leading-none self-center"
                          >
                            <DecipherText text={t('hero.github_label')} delay={0.4} />
                          </motion.span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.h1>
                </div>
                <div className="flex gap-3 font-mono text-[10px] tracking-[0.2em] text-brand/60 uppercase">
                  <span>// {t('hero.core_value')}</span>
                  <span className="animate-pulse">● {t('hero.online')}</span>
                </div>

                <p className="text-xl md:text-2xl text-slate-400 font-bold max-w-2xl border-l-2 border-brand pl-6 py-1 leading-relaxed">
                  <span className="">{t('hero.main_desc')}</span>
                  <br />
                  <span className="text-sm md:text-base opacity-60 font-medium">
                    {t('hero.sub_desc')}
                  </span>
                </p>
              </div>

              <div className="md:col-span-12 lg:col-span-4 flex flex-col justify-end space-y-4 text-[10px] font-mono font-bold text-text-muted">
                {LOGS.map((log, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <span className="text-brand opacity-60">[{i}]</span>
                    <span>{log}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-40 bg-section-alt">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center gap-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">{t('education.title')}</h2>
                <div className="h-px grow bg-border" />
                <span className="text-xs text-brand opacity-60 font-mono font-black">{t('education.type')}</span>
              </div>

              <div className="grid gap-1 grid-cols-1 md:grid-cols-2">
                {EDUCATION_ITEMS.map((edu, idx) => (
                  <div key={idx} className="tech-panel">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-[10px] text-brand block mb-1 font-black">ENTRY_{idx}</span>
                        <h3 className="text-2xl font-black text-brand leading-none">{edu.school}</h3>
                      </div>
                      <span className="text-[10px] bg-brand text-brand-contrast px-2 py-0.5 font-black uppercase tracking-tighter shadow-sm">{edu.period}</span>
                    </div>
                    <p className="text-lg font-black mb-4 border-b border-border pb-4">{edu.degree}</p>
                    <p className="text-text-muted leading-relaxed text-sm font-bold">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-40">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center gap-4 mb-16">
                <span className="text-xs text-brand opacity-60 font-mono font-black">{t('experience.log_level')}</span>
                <div className="h-px grow bg-border" />
                <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">{t('experience.title')}</h2>
              </div>

              <div className="space-y-1">
                {EXPERIENCE_ITEMS.map((exp, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedExp(exp)}
                    className="tech-panel group cursor-pointer overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-3">
                        <span className="text-[10px] text-brand block mb-1 font-mono font-black uppercase tracking-widest">{t('experience.period_stamp')}</span>
                        <span className="text-xl font-black">{exp.period}</span>
                        <div className="mt-2 text-[10px] font-medium text-brand-contrast bg-brand px-2 py-0.5 w-fit uppercase tracking-tighter">
                          {exp.type}
                        </div>
                      </div>
                      <div className="lg:col-span-4">
                        <span className="text-[10px] text-brand block mb-1 font-mono font-black uppercase tracking-widest">{t('experience.organization')}</span>
                        <h3 className="text-2xl font-black leading-none uppercase text-brand/90">{exp.company}</h3>
                      </div>
                      <div className="lg:col-span-5">
                        <span className="text-[10px] text-brand block mb-1 font-mono font-black uppercase tracking-widest">{t('experience.status_role')}</span>
                        <p className="text-lg font-black text-text-main mb-2 tracking-tight">{exp.role}</p>
                        <div className="flex flex-wrap gap-2 mb-3 font-mono">
                          {exp.tech.slice(0, 3).map((t: string, i: number) => (
                            <span key={i} className="text-[9px] font-black bg-brand/5 border border-brand/20 px-2 py-0.5 text-brand uppercase tracking-widest">
                              {t}
                            </span>
                          ))}
                          {exp.tech.length > 3 && (
                            <span className="text-[9px] font-black text-text-muted px-2 py-0.5 uppercase tracking-widest">
                              + {exp.tech.length - 3} {t('experience.more')}
                            </span>
                          )}
                        </div>
                        <p className="text-text-muted text-xs font-bold leading-relaxed">{exp.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <AnimatePresence mode="wait">
            {selectedExp && (
              <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedExp(null)}
                  className="absolute inset-0 bg-brand-bg/80 backdrop-blur-md"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="relative w-full max-w-2xl tech-panel bg-panel! p-0! overflow-hidden shadow-2xl"
                >
                  {/* Header Accents */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-brand" />
                  <div className="p-8 pb-0 flex justify-between items-start">
                    <div>
                      <span className="text-xs font-black text-brand tracking-[0.2em] uppercase mb-2 block">
                        {t('experience.resource_details')} // {selectedExp.period}
                      </span>
                      <h2 className="text-4xl font-black uppercase tracking-tighter text-brand">
                        {selectedExp.company}
                      </h2>
                      <p className="text-xl font-bold mt-2 text-text-main flex items-center gap-2">
                        <Briefcase size={18} className="text-brand" /> {selectedExp.role}
                        <span className="text-xs bg-brand/10 text-brand px-2 py-0.5 font-black uppercase tracking-widest ml-2">
                          {selectedExp.type}
                        </span>
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedExp(null)}
                      className="p-2 border border-brand/20 text-brand hover:bg-brand/10 transition-colors font-mono"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
                    <div>
                      <h4 className="text-xs font-mono font-black text-brand uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Code size={14} /> {t('experience.technical_stack')}
                      </h4>
                      <div className="flex flex-wrap gap-2 font-mono">
                        {selectedExp.tech.map((t: string, i: number) => (
                          <span key={i} className="text-[10px] font-black bg-brand/5 border border-brand/20 px-3 py-1 text-brand uppercase tracking-widest">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-black text-brand uppercase tracking-widest mb-4">{t('experience.detailed_manifest')}</h4>
                      <div className="border-l-2 border-brand/20 pl-6 py-2">
                        <p className="text-text-main font-bold leading-relaxed whitespace-pre-line">
                          {selectedExp.fullDesc}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-brand/5 border-t border-brand/10 flex justify-after font-mono">
                    <span className="text-[10px] font-black opacity-30 tracking-[0.3em] uppercase">
                      {t('experience.sys_access_stable')} // HASH: {Math.random().toString(36).substring(7).toUpperCase()}
                    </span>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* Projects Section */}
          <section id="projects" className="py-40 bg-section-alt">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center gap-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">{t('projects.title')}</h2>
                <div className="h-px grow bg-border" />
                <span className="text-xs text-brand opacity-60 font-mono font-black">{t('projects.mode')}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                {PROJECT_ITEMS.map((project, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedProject(project)}
                    className="tech-panel group p-10! border-border cursor-pointer shadow-sm"
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
                  {/* Left Side: Metadata (Distinct from Experience Modal) */}
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

                  {/* Right Side: Content */}
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


          {/* Skills Section */}
          <section id="stack" className="py-40 bg-brand-bg relative overflow-hidden transition-colors duration-500">
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 blueprint-grid opacity-[0.08] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-24 border-b border-brand/20 pb-12 font-mono">
                <div className="space-y-4">
                  <span className="text-xs text-brand font-black tracking-[0.4em] uppercase opacity-60">{t('stack.version')}</span>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase font-sans" data-text="STACK">{t('stack.title')}</h2>
                </div>
                <div className="hidden md:block text-right">
                  <span className="text-[10px] font-black tracking-widest text-brand opacity-40 uppercase">{t('stack.config')}</span>
                  <div className="flex gap-2 mt-2 justify-end">
                    {[1, 2, 3].map(i => <div key={i} className="w-12 h-1 bg-brand/20" />)}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {SKILLS.map((cat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group h-full"
                  >
                    {/* Module Decoration */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-brand/20 group-hover:border-brand/60 transition-colors" />

                    <div className="bg-brand/2 p-10! backdrop-blur-md border border-brand/5 h-full flex flex-col group-hover:border-brand/40 transition-all duration-500">
                      <div className="flex items-center gap-5 mb-12">
                        <div className="p-4 bg-brand/5 border border-brand/20 text-brand group-hover:bg-brand/10 group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                          {cat.icon}
                        </div>
                        <div className="flex-1 font-mono">
                          <span className="text-[11px] font-black text-brand tracking-widest block uppercase mb-1 opacity-60">{t(`stack.labels.${cat.label}`)}</span>
                          <h3 className="text-2xl font-black tracking-tighter uppercase leading-none font-sans">{t(`stack.categories.${cat.category}`)}</h3>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {cat.skills.map((skill: any, sIdx: number) => (
                          <div
                            key={sIdx}
                            className="flex items-center gap-3 p-3 border border-brand/5 bg-brand/[0.02] hover:bg-brand/10 hover:border-brand/20 transition-all group/skill"
                          >
                            <div className="text-brand opacity-40 group-hover/skill:opacity-100 group-hover/skill:scale-110 transition-all">
                              {skill.icon}
                            </div>
                            <span className="text-[11px] font-black text-text-muted group-hover/skill:text-text-main uppercase tracking-tighter transition-colors">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                      {/* Diagnostic Footer */}
                      <div className="mt-auto pt-10 flex items-center justify-between opacity-10 group-hover:opacity-30 transition-opacity">
                        <div className="flex gap-1.5">
                          {[1, 2, 3].map(i => <div key={i} className="w-1 h-3 bg-brand" />)}
                        </div>
                        <span className="text-[8px] font-mono font-black tracking-widest uppercase">SYSCFG_0{idx}::{t('stack.stable')}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-40 relative">
            <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden flex items-center justify-center text-[20vw] font-black text-brand select-none uppercase">
              {t('contact.bg')}
            </div>
            <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
              <div className="space-y-4">
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase glitch" data-text={t('contact.title')}>{t('contact.title')}</h2>
                <p className="text-lg text-text-muted max-w-xl mx-auto leading-relaxed font-black uppercase tracking-widest">
                  {t('contact.desc')}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto items-stretch">
                {/* GitHub Link */}
                <div className="flex h-full">
                  <a
                    href="https://github.com/yhw032"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-panel group flex items-center gap-4 transition-all hover:bg-brand/10 w-full"
                  >
                    <div className="p-3 bg-brand/5 border border-brand/20 text-brand">
                      <Github size={24} />
                    </div>
                    <div className="text-left font-mono">
                      <span className="text-[10px] font-black text-brand block uppercase tracking-widest leading-none mb-1">NETWORK_HUB</span>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-black uppercase">GitHub</span>
                        <ExternalLink size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </a>
                </div>

                {/* LinkedIn Link */}
                <div className="flex h-full">
                  <a
                    href="https://www.linkedin.com/in/heewook-yoon-1b504b317/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-panel group flex items-center gap-4 transition-all hover:bg-brand/10 w-full"
                  >
                    <div className="p-3 bg-brand/5 border border-brand/20 text-brand">
                      <Linkedin size={24} />
                    </div>
                    <div className="text-left font-mono">
                      <span className="text-[10px] font-black text-brand block uppercase tracking-widest leading-none mb-1">PROFESSIONAL_LINK</span>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-black uppercase">LinkedIn</span>
                        <ExternalLink size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </a>
                </div>

                {/* Mail Link with Custom Menu */}
                <div className="relative flex h-full">
                  <button
                    onClick={() => setShowMailMenu(!showMailMenu)}
                    className="tech-panel group flex items-center gap-4 transition-all hover:bg-brand/10 w-full text-left"
                  >
                    <div className="p-3 bg-brand/5 border border-brand/20 text-brand">
                      <Mail size={24} />
                    </div>
                    <div className="text-left font-mono">
                      <span className="text-[10px] font-black text-brand block uppercase tracking-widest leading-none mb-1">{t('contact.link_label') || 'DIRECT_CHANNEL'}</span>
                      <span className="text-lg font-black uppercase">E-Mail</span>
                    </div>
                  </button>

                  <AnimatePresence>
                    {showMailMenu && (
                      <>
                        {/* Backdrop to close menu */}
                        <div
                          className="fixed inset-0 z-40 bg-transparent"
                          onClick={() => setShowMailMenu(false)}
                        />
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: 10 }}
                          className="absolute bottom-full left-0 right-0 mb-4 z-50 bg-panel backdrop-blur-2xl border border-brand/40 shadow-2xl p-2"
                        >
                          <div className="flex flex-col gap-1">
                            <button
                              onClick={() => {
                                window.location.href = 'mailto:yhw6440@gmail.com';
                                setShowMailMenu(false);
                              }}
                              className="flex items-center gap-3 p-3 hover:bg-brand/10 text-text transition-colors text-xs font-black uppercase tracking-widest group"
                            >
                              <ExternalLink size={14} className="text-brand opacity-60 group-hover:opacity-100" />
                              {t('contact.send_mail')}
                            </button>
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText('yhw6440@gmail.com');
                                setCopied(true);
                                setTimeout(() => setCopied(false), 2000);
                                setTimeout(() => setShowMailMenu(false), 1000);
                              }}
                              className="flex items-center gap-3 p-3 hover:bg-brand/10 text-text transition-colors text-xs font-black uppercase tracking-widest group text-left w-full"
                            >
                              {copied ? (
                                <Check size={14} className="text-green-500" />
                              ) : (
                                <Copy size={14} className="text-brand opacity-60 group-hover:opacity-100" />
                              )}
                              {copied ? t('contact.copied') : t('contact.copy_address')}
                            </button>
                          </div>
                          {/* Technical Accent Decorative Line */}
                          <div className="mt-2 h-0.5 bg-brand/10 w-full relative overflow-hidden">
                            <motion.div
                              initial={{ x: "-100%" }}
                              animate={{ x: "100%" }}
                              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                              className="absolute inset-0 bg-brand/40 w-1/3"
                            />
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-24 border-t border-border bg-section-alt font-mono">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center font-black">
            <div className="text-left text-[10px] text-text-muted uppercase tracking-[0.3em]">
              <p>Built with React & Tailwind CSS v4 [Engine: Stable]</p>
              <p>&copy; 2026. Data verification complete.</p>
            </div>
            <div className="text-right flex justify-end gap-12 text-[10px] text-brand uppercase tracking-widest">
              <span>SECURE_SHELL</span>
              <span>SYS_CORE</span>
              <span>UI_V4.1</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
