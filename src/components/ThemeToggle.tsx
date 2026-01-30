import { useEffect, useState, type ReactElement } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle(): ReactElement {

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark' ||
        (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="group relative p-3 bg-panel backdrop-blur-md border border-brand/20 transition-all 
                 hover:bg-brand/10 hover:border-brand/50 active:scale-95 shadow-lg overflow-hidden"
      aria-label="Toggle Theme"
      style={{
        clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
      }}
    >
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-2 h-[1px] bg-brand/40" />
      <div className="absolute bottom-0 left-0 w-2 h-[1px] bg-brand/40" />

      <div className="relative z-10 flex items-center justify-center w-6 h-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={isDark ? 'dark' : 'light'}
            initial={{ y: 10, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -10, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.2, ease: "circOut" }}
          >
            {isDark ? (
              <Moon size={20} className="text-brand" />
            ) : (
              <Sun size={20} className="text-brand" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative Bits */}
      <div className="absolute -bottom-1 -right-1 text-[6px] font-black text-brand/20 opacity-0 group-hover:opacity-100 transition-opacity">
        SYS.MODE
      </div>
    </button>
  );
}