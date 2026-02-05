import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

// Layout & Frame
import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle'
import LanguageToggle from './components/LanguageToggle'
import LoadingScreen from './components/LoadingScreen'
import { BackgroundDecor } from './components/layout/BackgroundDecor'

// Sections
import { Hero } from './components/sections/Hero'
import { Education } from './components/sections/Education'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Contact } from './components/sections/Contact'

import './App.css'

function App() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [isAlt, setIsAlt] = useState(false);

  const LOGS = t('system.logs', { returnObjects: true }) as string[];

  useEffect(() => {
    const interval = setInterval(() => setIsAlt(prev => !prev), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand/30 relative overflow-x-hidden">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen key="loader" onFinished={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className={isLoading ? "h-screen overflow-hidden" : ""}>
        <BackgroundDecor />
        <Navbar />

        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 font-mono">
          <ThemeToggle />
          <LanguageToggle />
        </div>

        <main className="relative z-10">
          <Hero isAlt={isAlt} logs={LOGS} />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
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
