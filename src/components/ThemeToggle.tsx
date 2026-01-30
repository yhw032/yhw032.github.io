import { useEffect, useState, type ReactElement } from 'react';

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
      className="px-4 py-2 rounded-full bg-brand text-brand-contrast font-medium 
                 transition-all hover:ring-2 hover:ring-brand/50 active:scale-95"
      aria-label="Toggle Theme"
    >
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}