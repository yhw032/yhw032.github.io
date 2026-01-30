import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

// --- Data Constants for Easy Extensibility ---

const EDUCATION = [
  {
    school: "Hanguk University",
    degree: "Bachelor of Computer Science",
    period: "2018.03 - 2022.02",
    details: "GPA: 4.0/4.5. Focused on Software Engineering and Algorithms."
  },
  {
    school: "Global Tech Academy",
    degree: "Advanced Web Development Course",
    period: "2022.03 - 2022.09",
    details: "Intensive training in modern frontend frameworks and cloud architecture."
  }
];

const EXPERIENCE = [
  {
    company: "Future Tech Inc.",
    role: "Frontend Engineer",
    period: "2023.01 - Present",
    desc: "Led the development of a high-performance analytics dashboard. Optimized React rendering and improved lighthouse scores by 40%."
  },
  {
    company: "Creative Coders Lab",
    role: "Junior Developer",
    period: "2022.09 - 2023.01",
    desc: "Developed and maintained several client-side applications using Vue.js and Firebase. Collaborated with UI/UX designers to implement responsive designs."
  }
];

const PROJECTS = [
  {
    title: "Eco-Tracker App",
    tech: "React, Node.js, MongoDB",
    link: "#",
    desc: "A mobile-first web app to track and reduce personal carbon footprint."
  },
  {
    title: "AI Image Generator",
    tech: "Next.js, Tailwind, OpenAI API",
    link: "#",
    desc: "A creative tool that generates unique artwork based on user text prompts."
  },
  {
    title: "Crypto Dashboard",
    tech: "TypeScript, Vite, Chart.js",
    link: "#",
    desc: "Real-time cryptocurrency tracking platform with advanced data visualization."
  }
];

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand/30">
      <Navbar />

      {/* Fixed ThemeToggle in bottom-right */}
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <main>
        {/* Home Section */}
        <section id="home" className="min-h-[90vh] flex items-center justify-center pt-20">
          <div className="text-center space-y-6 px-6 max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black text-brand tracking-tight">
              Hello World
            </h1>
            <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
              Innovative Developer building digital experiences that matter.
            </p>
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="py-32 bg-section-alt">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center md:text-left tracking-tight">Education</h2>
            <div className="grid gap-10">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="bg-brand-bg p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 transition-all hover:shadow-xl hover:border-brand/40 group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-brand group-hover:translate-x-1 transition-transform">{edu.school}</h3>
                    <span className="text-sm font-bold px-4 py-1 bg-brand/10 text-brand rounded-full mt-2 md:mt-0 w-fit">{edu.period}</span>
                  </div>
                  <p className="text-xl font-bold mb-3">{edu.degree}</p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center md:text-left tracking-tight">Experience</h2>
            <div className="relative border-l-4 border-brand/20 ml-2 md:ml-4 space-y-16">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="relative pl-10 md:pl-12">
                  <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-brand shadow-[0_0_0_6px_rgba(59,130,246,0.1)] ring-4 ring-brand-bg transition-transform group-hover:scale-125" />
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-bold tracking-tight">{exp.role}</h3>
                    <span className="text-sm font-black text-brand tracking-widest uppercase">{exp.period}</span>
                  </div>
                  <p className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-4">{exp.company}</p>
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 max-w-3xl">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 bg-section-alt">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center md:text-left tracking-tight">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {PROJECTS.map((project, idx) => (
                <a
                  key={idx}
                  href={project.link}
                  className="group flex flex-col bg-brand-bg p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-brand/50 transition-all hover:shadow-2xl hover:-translate-y-2"
                >
                  <h3 className="text-2xl font-black mb-4 group-hover:text-brand transition-colors">{project.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-8 flex-grow leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(', ').map((t, i) => (
                      <span key={i} className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-black tracking-wider text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50 uppercase">
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
        <section id="contact" className="py-32">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight">Let's Connect</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center justify-center px-16 py-5 bg-brand text-brand-contrast rounded-full font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(59,130,246,0.4)]"
            >
              Start a Conversation
            </a>
          </div>
        </section>
      </main>

      <footer className="py-20 text-center text-slate-500 border-t border-slate-200 dark:border-slate-800 bg-section-alt">
        <div className="max-w-xl mx-auto px-6 space-y-4 font-bold">
          <p className="text-sm tracking-widest uppercase opacity-60">Crafted with precision using React & Tailwind v4</p>
          <p className="text-brand tracking-tighter text-xl">PORTFOLIO</p>
          <div className="h-px w-12 bg-slate-200 dark:bg-slate-700 mx-auto" />
          <p className="text-xs opacity-50">© 2026. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
