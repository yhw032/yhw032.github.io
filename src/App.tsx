import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import { X, Briefcase, Code, ExternalLink } from 'lucide-react'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

// --- Technical Data Overlays ---
const SYSTEM_LOGS = [
  "INIT_SEQUENCE_SUCCESSFUL",
  "CORE_KERNEL_LOADED",
  "UI_INTERFACE_READY",
  "VIRTUAL_ENV_STABLE"
];

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

const EDUCATION = [
  {
    school: "DUICA",
    degree: "Bachelor of Computer Science",
    period: "2020.03 - 2022.02",
    details: "GPA: 4.41/4.5. Specialized in Core Data Systems."
  },
  {
    school: "Hansung University",
    degree: "Division of Computer Science, Web Engineering",
    period: "2022.03 - 2026.08",
    details: "GPA: 4.02/4.5. Focus on Scalable Web Architecture."
  }
];

const EXPERIENCE = [
  {
    company: "GNC SOLUTION",
    role: "Backend Developer",
    period: "2025.04 - 2025.06",
    type: "Intern",
    tech: ["Django", "Python", "DRF", "PostgreSQL", "Nginx"],
    desc: "Developed Gacci Project API and Admin Panel with Django Rest Framework.",
    fullDesc: "Led the backend development for the 'Gacci' project, focusing on architecting a robust RESTful API using Django Rest Framework. Implemented secure authentication systems, data validation pipelines, and complex database queries. Designed and deployed an administrative dashboard to manage user data and system configurations efficiently."
  },
  {
    company: "RYON ASSET",
    role: "DevOps Engineer",
    period: "2024.07 - 0x7E7",
    type: "Full-time",
    tech: ["AWS", "Terraform", "Docker", "GitHub Actions", "Python"],
    desc: "Infrastructure Management and DevOps Support.",
    fullDesc: "Orchestrating cloud infrastructure using Terraform and AWS (EC2, S3, RDS, Lambda). Implementing CI/CD pipelines via GitHub Actions to automate testing and deployment processes. Managing containerized environments with Docker and ensuring high availability and scalability of critical financial services."
  }
];

const PROJECTS = [
  {
    id: "PRJ-001",
    title: "GRID_OS_INTERFACE",
    organization: "Personal",
    role: "Lead Developer",
    period: "2024.01 - 2024.03",
    tech: "REACT.V4, TS, VITE",
    desc: "Low-latency dashboard for real-time mesh network monitoring.",
    fullDesc: "Architecture design and implementation of a high-performance grid monitoring system. Focused on minimizing main-thread blocking during high-frequency data updates. Implemented custom visualization kernels using Canvas and OffscreenCanvas for smooth 60FPS rendering of thousands of active nodes.",
    links: [{ label: "GITHUB", url: "#" }, { label: "DEMO", url: "#" }]
  },
  {
    id: "PRJ-002",
    title: "VIRTUAL_DOM_SYNC",
    team: "X-SYNC-LAB",
    organization: "Open Source",
    role: "Core Contributor",
    period: "2023.10 - 2023.12",
    tech: "NEXT.JS, WEB_SOCKETS",
    desc: "Distributed state synchronization engine for multi-agent environments.",
    fullDesc: "Developed a conflict-free replicated data type (CRDT) implementation for real-time state sync across multiple client instances. Reduced synchronization latency by 40% through intelligent delta-patching and binary message protocols. Built a debugging visualizer to trace state propagation across the mesh network.",
    links: [{ label: "GITHUB", url: "#" }]
  },
  {
    id: "PRJ-003",
    title: "QUANTUM_STYLING",
    organization: "Experiment",
    role: "Researcher",
    period: "2023.08 - 2023.09",
    tech: "CSS_ENGINE, FRAMER",
    desc: "Houdini-based paint worklets for generating procedural industrial patterns.",
    fullDesc: "Exploration into the CSS Houdini Paint API to create high-performance procedural textures for technical UIs. Designed algorithms for generating randomized circuit-board patterns and hazard-stripe effects without image assets. Successfully integrated with Framer Motion for dynamic, state-reactive visual feedback.",
    links: []
  }
];

function App() {
  const [isAlt, setIsAlt] = useState(false);
  const [selectedExp, setSelectedExp] = useState<typeof EXPERIENCE[0] | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

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
    <div className="min-h-screen font-mono selection:bg-brand/30 relative overflow-x-hidden">
      <div className="scanline" />
      <Navbar />

      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed top-3/4 left-4 z-20 text-[10px] text-brand/25 -rotate-90 origin-top-left pointer-events-none select-none uppercase tracking-[0.3em] font-black">
        COORD_X: 37.3784 // COORD_Y: 127.1143 // SYS_STATUS: NOMINAL
      </div>
      <div className="fixed top-1/2 right-4 z-20 rotate-90 origin-top-right pointer-events-none select-none text-[10px] text-brand/25 uppercase tracking-[0.3em] font-black">
        NODE_ID: YHW-032 // LINK: ENCRYPTED // 0x7E7
      </div>

      {/* Edge Accents */}
      <div className="fixed top-0 bottom-0 left-0 w-px bg-brand/5 z-20 pointer-events-none" />
      <div className="fixed top-0 bottom-0 right-0 w-px bg-brand/5 z-20 pointer-events-none" />

      <main className="relative z-10">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center p-6 pt-20">
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-12 lg:col-span-8 flex flex-col justify-center space-y-8">
              <div className="inline-block border border-brand/40 px-3 py-1 text-[10px] text-brand w-fit animate-pulse tracking-widest font-black uppercase">
                SYSTEM_ACCESS: GRANTED
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
                        <DecipherText text="ELLO" />
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
                        <DecipherText text="EE" />
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
                        <DecipherText text="ORLD" delay={0.15} />
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
                        <DecipherText text="OOK" delay={0.15} />
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 0.6, x: 0 }}
                          className="text-[0.2em] md:text-[0.18em] font-bold ml-2 tracking-normal normal-case whitespace-nowrap opacity-60 hidden md:inline-block border-l border-brand/20 pl-2 py-1 leading-none self-center"
                        >
                          <DecipherText text="s GITHUB.IO" delay={0.4} />
                        </motion.span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.h1>
              </div>
              <p className="text-xl md:text-2xl text-text-muted font-bold max-w-2xl border-l-4 border-brand pl-6">
                Specializing in Technical UI Engineering and Scalable Architecture for Industrial-grade Applications.
              </p>
            </div>

            <div className="md:col-span-12 lg:col-span-4 flex flex-col justify-end space-y-4 text-[10px] font-bold text-text-muted">
              {SYSTEM_LOGS.map((log, i) => (
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
              <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">Education</h2>
              <div className="h-px grow bg-border" />
              <span className="text-xs text-brand opacity-60 font-black">TYPE: DATA_HISTORY</span>
            </div>

            <div className="grid gap-1 grid-cols-1 md:grid-cols-2">
              {EDUCATION.map((edu, idx) => (
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
              <span className="text-xs text-brand opacity-60 font-black">LOG_LEVEL: SENIOR</span>
              <div className="h-px grow bg-border" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">Experience</h2>
            </div>

            <div className="space-y-1">
              {EXPERIENCE.map((exp, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedExp(exp)}
                  className="tech-panel group cursor-pointer overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-3">
                      <span className="text-[10px] text-brand block mb-1 font-black uppercase tracking-widest">PERIOD_STAMP</span>
                      <span className="text-xl font-black">{exp.period}</span>
                      <div className="mt-2 text-[10px] font-black text-brand-contrast bg-brand px-2 py-0.5 w-fit uppercase tracking-tighter">
                        {exp.type}
                      </div>
                    </div>
                    <div className="lg:col-span-4">
                      <span className="text-[10px] text-brand block mb-1 font-black uppercase tracking-widest">ORGANIZATION</span>
                      <h3 className="text-2xl font-black leading-none uppercase text-brand/90">{exp.company}</h3>
                    </div>
                    <div className="lg:col-span-5">
                      <span className="text-[10px] text-brand block mb-1 font-black uppercase tracking-widest">STATUS_ROLE</span>
                      <p className="text-lg font-black text-text-main mb-2 tracking-tight">{exp.role}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {exp.tech.slice(0, 3).map((t, i) => (
                          <span key={i} className="text-[9px] font-black bg-brand/5 border border-brand/20 px-2 py-0.5 text-brand uppercase tracking-widest">
                            {t}
                          </span>
                        ))}
                        {exp.tech.length > 3 && (
                          <span className="text-[9px] font-black text-text-muted px-2 py-0.5 uppercase tracking-widest">
                            + {exp.tech.length - 3} MORE
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
                      RESOURCE_DETAILS // {selectedExp.period}
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
                    className="p-2 border border-brand/20 text-brand hover:bg-brand/10 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
                  <div>
                    <h4 className="text-xs font-black text-brand uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Code size={14} /> TECHNICAL_STACK
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExp.tech.map((t, i) => (
                        <span key={i} className="text-[10px] font-black bg-brand/5 border border-brand/20 px-3 py-1 text-brand uppercase tracking-widest">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-brand uppercase tracking-widest mb-4">DETAILED_MANIFEST</h4>
                    <div className="border-l-2 border-brand/20 pl-6 py-2">
                      <p className="text-text-main font-bold leading-relaxed whitespace-pre-line">
                        {selectedExp.fullDesc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-brand/5 border-t border-brand/10 flex justify-after">
                  <span className="text-[10px] font-black opacity-30 tracking-[0.3em] uppercase">
                    SYS_ACCESS_STABLE // HASH: {Math.random().toString(36).substring(7).toUpperCase()}
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
              <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">Projects</h2>
              <div className="h-px grow bg-border" />
              <span className="text-xs text-brand opacity-60 font-black">MODE: DEPLOYED</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {PROJECTS.map((project, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedProject(project)}
                  className="tech-panel group p-10! border-border cursor-pointer shadow-sm"
                >
                  <div className="flex justify-between mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-black">{project.id}</span>
                    <span className="text-[10px] bg-brand text-brand-contrast px-1 font-black">ST_0{idx}</span>
                  </div>

                  <h3 className="text-2xl font-black mb-4 group-hover:text-brand transition-colors tracking-tighter uppercase leading-none">{project.title}</h3>

                  <div className="space-y-1 mb-6 border-l-2 border-brand/20 pl-4 py-1">
                    <div className="flex items-center gap-2 text-[10px] font-bold">
                      <span className="text-brand uppercase tracking-tighter">ORG:</span>
                      <span className="text-text-main">{project.organization}</span>
                      {project.team && (
                        <>
                          <span className="opacity-20">//</span>
                          <span className="text-brand uppercase tracking-tighter">UNIT:</span>
                          <span className="text-text-main">{project.team}</span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold">
                      <span className="text-brand uppercase tracking-tighter">ROLE:</span>
                      <span className="text-text-main">{project.role}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold">
                      <span className="text-brand uppercase tracking-tighter">TIME:</span>
                      <span className="text-text-main">{project.period}</span>
                    </div>
                  </div>

                  <p className="text-text-muted text-xs mb-8 grow leading-relaxed font-bold">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(', ').slice(0, 3).map((t, i) => (
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
                className="relative w-full max-w-5xl tech-panel bg-panel! p-0! overflow-hidden shadow-2xl flex flex-col md:flex-row h-fit max-h-[90vh]"
              >
                {/* Left Side: Metadata (Distinct from Experience Modal) */}
                <div className="md:w-2/5 p-8 bg-brand/5 border-b md:border-b-0 md:border-r border-brand/10 space-y-8">
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
                      <span className="text-[10px] font-black text-brand uppercase tracking-widest mb-1 block">ORGANIZATION</span>
                      <p className="font-black text-lg">{selectedProject.organization}</p>
                    </div>
                    {selectedProject.team && (
                      <div>
                        <span className="text-[10px] font-black text-brand uppercase tracking-widest mb-1 block">TEAM_UNIT</span>
                        <p className="font-black text-lg">{selectedProject.team}</p>
                      </div>
                    )}
                    <div>
                      <span className="text-[10px] font-black text-brand uppercase tracking-widest mb-1 block">ASSIGNED_ROLE</span>
                      <p className="font-black text-lg">{selectedProject.role}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-brand uppercase tracking-widest mb-1 block">SERVICE_PERIOD</span>
                      <p className="font-black text-lg">{selectedProject.period}</p>
                    </div>
                  </div>

                  {selectedProject.links.length > 0 && (
                    <div>
                      <span className="text-[10px] font-black text-brand uppercase tracking-widest mb-4 block">HANDSHAKE_LINKS</span>
                      <div className="flex flex-col gap-2">
                        {selectedProject.links.map((link, i) => (
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
                <div className="md:w-3/5 p-8 flex flex-col h-full bg-panel">
                  <div className="hidden md:flex justify-end mb-8">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 border border-brand/20 text-brand hover:bg-brand/10 transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="space-y-8 overflow-y-auto custom-scrollbar pr-4">
                    <div>
                      <h4 className="text-xs font-black text-brand uppercase tracking-widest mb-4">PROJECT_MANIFEST</h4>
                      <p className="text-text-main font-bold leading-relaxed whitespace-pre-line text-lg">
                        {selectedProject.fullDesc}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-black text-brand uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Code size={14} /> SYSTEM_DEPENDENCIES
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.split(', ').map((t, i) => (
                          <span key={i} className="text-[10px] font-black bg-brand/5 border border-brand/20 px-3 py-1 text-brand uppercase tracking-widest">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-8 border-t border-brand/10">
                    <span className="text-[10px] font-black opacity-30 tracking-[0.3em] uppercase">
                      MANIFEST_VERIFIED // ST_CODE: {selectedProject.id.split('-')[1]}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Contact Section */}
        <section id="contact" className="py-40 relative">
          <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden flex items-center justify-center text-[20vw] font-black text-brand select-none uppercase">
            CONNECT
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
            <div className="space-y-4">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase glitch" data-text="TRANSMIT">Transmit</h2>
              <p className="text-lg text-text-muted max-w-xl mx-auto leading-relaxed font-black uppercase tracking-widest">
                Initiate handshake for secure coordination or architectural discussion.
              </p>
            </div>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center justify-center px-16 py-6 border-2 border-brand text-brand font-black text-xl transition-all hover:bg-brand hover:text-brand-contrast active:scale-95 shadow-lg shadow-brand/10 hover:shadow-brand/30"
            >
              ESTABLISH_LINK
            </a>
          </div>
        </section>
      </main>

      <footer className="py-24 border-t border-border bg-section-alt">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center font-black">
          <div className="text-left text-[10px] text-text-muted uppercase tracking-[0.3em]">
            <p>Built with React & Tailwind CSS v4 [Engine: Stable]</p>
            <p>© 2026. Data verification complete.</p>
          </div>
          <div className="text-right flex justify-end gap-12 text-[10px] text-brand uppercase tracking-widest">
            <span>SECURE_SHELL</span>
            <span>SYS_CORE</span>
            <span>UI_V4.1</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
