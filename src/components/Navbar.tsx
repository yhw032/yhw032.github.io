import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Briefcase, GraduationCap, FolderCode, Mail, Terminal } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  { id: '01', label: 'HOME', href: '#home', icon: <Home size={14} /> },
  { id: '02', label: 'EDUCATION', href: '#education', icon: <GraduationCap size={14} /> },
  { id: '03', label: 'EXPERIENCE', href: '#experience', icon: <Briefcase size={14} /> },
  { id: '04', label: 'PROJECTS', href: '#projects', icon: <FolderCode size={14} /> },
  { id: '05', label: 'CONTACT', href: '#contact', icon: <Mail size={14} /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
          ? 'bg-panel backdrop-blur-xl border-brand/20 shadow-[0_0_20px_rgba(0,255,65,0.1)] py-2'
          : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center font-mono">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <Terminal className="text-brand group-hover:animate-pulse" size={24} />
          <span className="text-xl font-black tracking-[0.2em] text-brand uppercase">
            System.<span className="opacity-50">root</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`group flex items-center gap-2 px-4 py-1 text-xs font-bold transition-all relative ${activeSection === item.href.substring(1)
                  ? 'text-brand'
                  : 'text-slate-500 hover:text-slate-300'
                }`}
            >
              <span className="text-[10px] opacity-40 group-hover:opacity-100 transition-opacity">[{item.id}]</span>
              <span className="tracking-widest">{item.label}</span>
              {activeSection === item.href.substring(1) && (
                <motion.div layoutId="nav-active" className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand shadow-[0_0_10px_#00ff41]" />
              )}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-brand border border-brand/20 hover:bg-brand/10 transition-colors"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="md:hidden fixed inset-0 top-[60px] bg-panel backdrop-blur-2xl z-40 border-l border-brand/20"
          >
            <div className="flex flex-col p-10 gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between text-2xl font-black tracking-tighter ${activeSection === item.href.substring(1)
                      ? 'text-brand'
                      : 'text-slate-600'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs opacity-40">[{item.id}]</span>
                    {item.label}
                  </div>
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
