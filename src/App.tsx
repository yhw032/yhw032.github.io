import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

// --- Technical Data Overlays ---
const SYSTEM_LOGS = [
  "INIT_SEQUENCE_SUCCESSFUL",
  "CORE_KERNEL_LOADED",
  "UI_INTERFACE_READY",
  "VIRTUAL_ENV_STABLE"
];

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
    desc: "Developed Gacci Project API and Admin Panel with Django Rest Framework."
  },
  {
    company: "RYON ASSET",
    role: "DevOps Engineer",
    period: "2024.07 - 0x7E7",
    desc: "Infrastructure Management and DevOps Support."
  }
];

const PROJECTS = [
  {
    id: "PRJ-001",
    title: "GRID_OS_INTERFACE",
    tech: "REACT.V4, TS, VITE",
    desc: "Low-latency dashboard for real-time mesh network monitoring."
  },
  {
    id: "PRJ-002",
    title: "VIRTUAL_DOM_SYNC",
    tech: "NEXT.JS, WEB_SOCKETS",
    desc: "Distributed state synchronization engine for multi-agent environments."
  },
  {
    id: "PRJ-003",
    title: "QUANTUM_STYLING",
    tech: "CSS_ENGINE, FRAMER",
    desc: "Houdini-based paint worklets for generating procedural industrial patterns."
  }
];

function App() {
  return (
    <div className="min-h-screen font-mono selection:bg-brand/30 relative overflow-x-hidden">
      <div className="scanline" />
      <Navbar />

      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Background Decorative Element */}
      <div className="fixed top-1/4 left-0 text-[10px] text-brand/10 -rotate-90 origin-left pointer-events-none select-none">
        COORD_X: 37.5665 // COORD_Y: 126.9780 // ST_STATUS: NOMINAL
      </div>

      <main className="relative z-10">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center p-6 pt-20">
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-12 lg:col-span-8 flex flex-col justify-center space-y-8">
              <div className="inline-block border border-brand/40 px-3 py-1 text-[10px] text-brand w-fit animate-pulse tracking-widest font-black uppercase">
                SYSTEM_ACCESS: GRANTED
              </div>
              <h1
                className="text-6xl md:text-9xl font-black text-brand tracking-tighter glitch uppercase leading-none"
                data-text="DEVELOPER"
              >
                DEVELOPER
              </h1>
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
              <div className="h-px flex-grow bg-border" />
              <span className="text-xs text-brand opacity-60 font-black">TYPE: DATA_HISTORY</span>
            </div>

            <div className="grid gap-1 grid-cols-1 md:grid-cols-2">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="tech-panel transition-all hover:bg-brand/5">
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
              <div className="h-px flex-grow bg-border" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">Experience</h2>
            </div>

            <div className="space-y-1">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="tech-panel group overflow-hidden transition-all hover:bg-brand/[0.03]">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-3">
                      <span className="text-[10px] text-brand block mb-1 font-black uppercase">PERIOD_STAMP</span>
                      <span className="text-xl font-black">{exp.period}</span>
                    </div>
                    <div className="lg:col-span-4">
                      <span className="text-[10px] text-brand block mb-1 font-black uppercase">ORGANIZATION</span>
                      <h3 className="text-2xl font-black leading-none uppercase text-brand/90">{exp.company}</h3>
                    </div>
                    <div className="lg:col-span-5">
                      <span className="text-[10px] text-brand block mb-1 font-black uppercase">STATUS_ROLE</span>
                      <p className="text-lg font-black text-text-main mb-2 tracking-tight">{exp.role}</p>
                      <p className="text-text-muted text-xs leading-relaxed font-bold">{exp.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-40 bg-section-alt">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">Projects</h2>
              <div className="h-px flex-grow bg-border" />
              <span className="text-xs text-brand opacity-60 font-black">MODE: DEPLOYED</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {PROJECTS.map((project, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="tech-panel group !p-10 border-border hover:border-brand/40 transition-all hover:bg-brand/[0.02] shadow-sm"
                >
                  <div className="flex justify-between mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-black">{project.id}</span>
                    <span className="text-[10px] font-black">ST_0{idx}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-6 group-hover:text-brand transition-colors tracking-tighter uppercase">{project.title}</h3>
                  <p className="text-text-muted text-xs mb-8 flex-grow leading-relaxed font-bold">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(', ').map((t, i) => (
                      <span key={i} className="text-[9px] font-black tracking-widest text-brand border border-brand/20 px-2 py-0.5 uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

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
