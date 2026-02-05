import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('ko') ? 'en' : 'ko';
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language.startsWith('ko') ? 'KO' : 'EN';

  return (
    <button
      onClick={toggleLanguage}
      className="group relative flex items-center justify-center w-12 h-12 bg-panel/40 backdrop-blur-md border border-brand/20 hover:border-brand/60 transition-all duration-300"
      aria-label="Toggle Language"
    >
      {/* Visual Accents */}
      <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-brand/40 group-hover:border-brand" />
      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-brand/40 group-hover:border-brand" />

      <div className="flex flex-col items-center">
        <Languages size={14} className="text-brand opacity-60 group-hover:opacity-100 transition-opacity mb-0.5" />
        <span className="text-[9px] font-black text-brand tracking-tighter">
          {currentLang}
        </span>
      </div>

      {/* Hover Pulse */}
      <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}
