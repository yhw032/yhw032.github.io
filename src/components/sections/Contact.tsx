import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, ExternalLink, Copy, Check } from 'lucide-react';

export function Contact() {
  const { t } = useTranslation();
  const [showMailMenu, setShowMailMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('yhw6440@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    setTimeout(() => setShowMailMenu(false), 1000);
  };

  return (
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
                        onClick={handleCopy}
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
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
