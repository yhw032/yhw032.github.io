import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Briefcase, GraduationCap, FolderCode, Mail, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface NavItem {
  id: string;
  key: string;
  href: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  { id: '01', key: 'home', href: '#home', icon: <Home size={14} /> },
  { id: '02', key: 'education', href: '#education', icon: <GraduationCap size={14} /> },
  { id: '03', key: 'experience', href: '#experience', icon: <Briefcase size={14} /> },
  { id: '04', key: 'projects', href: '#projects', icon: <FolderCode size={14} /> },
  { id: '05', key: 'stack', href: '#stack', icon: <Terminal size={14} /> },
  { id: '06', key: 'contact', href: '#contact', icon: <Mail size={14} /> },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const langClass = i18n.language.startsWith('ko') ? 'lang-ko' : 'lang-en';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${langClass} ${scrolled || isOpen
        ? 'bg-panel backdrop-blur-xl border-brand/20 shadow-sm py-2'
        : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center font-mono">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <Terminal className="text-brand group-hover:animate-pulse" size={24} />
          <span className="text-xl font-black tracking-[0.2em] text-brand uppercase">
            yhw032.<span className="opacity-50">github</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            const label = t(`nav.${item.key}`);
            return (
              <a
                key={item.key}
                href={item.href}
                className={`group flex items-center gap-2 px-4 py-1.5 text-xs font-bold transition-all relative z-10 ${isActive
                  ? 'text-brand-contrast'
                  : 'text-text-muted hover:text-brand'
                  }`}
              >
                <span className={`text-[10px] transition-opacity ${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'}`}>
                  [{item.id}]
                </span>
                <span className="tracking-widest">{label}</span>

                {isActive && (
                  <motion.div
                    layoutId="nav-highlight"
                    className="absolute inset-0 bg-brand -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
                  />
                )}

                {/* Visual Accent for active link corners */}
                {isActive && (
                  <>
                    <div className="absolute top-0 left-0 w-1 h-1 bg-brand-contrast opacity-50" />
                    <div className="absolute bottom-0 right-0 w-1 h-1 bg-brand-contrast opacity-50" />
                  </>
                )}
              </a>
            );
          })}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-brand border border-brand/20 hover:bg-brand/10 transition-colors"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-x-0 top-full bg-panel backdrop-blur-2xl z-40 border-t border-brand/10 overflow-hidden"
          >
            <div className={`flex flex-col p-10 gap-4 ${langClass}`}>
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                const label = t(`nav.${item.key}`);
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between p-4 text-2xl font-black tracking-tighter transition-all ${isActive
                      ? 'bg-brand text-brand-contrast'
                      : 'text-text-muted hover:bg-brand/5'
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs opacity-40">[{item.id}]</span>
                      {label}
                    </div>
                    {item.icon}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
