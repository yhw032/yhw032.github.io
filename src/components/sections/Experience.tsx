import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, Briefcase, Code } from 'lucide-react';

export function Experience() {
  const { t } = useTranslation();
  const [selectedExp, setSelectedExp] = useState<any>(null);
  const EXPERIENCE_ITEMS = t('experience.items', { returnObjects: true }) as any[];

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedExp) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedExp]);

  return (
    <>
      <section id="experience" className="py-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-xs text-brand opacity-60 font-mono font-black">{t('experience.log_level')}</span>
            <div className="h-px grow bg-border" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">{t('experience.title')}</h2>
          </div>

          <div className="space-y-1">
            {EXPERIENCE_ITEMS.map((exp, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedExp(exp)}
                className="tech-panel group cursor-pointer overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-3">
                    <span className="text-[10px] text-brand block mb-1 font-mono font-black uppercase tracking-widest">{t('experience.period_stamp')}</span>
                    <span className="text-xl font-black">{exp.period}</span>
                    <div className="mt-2 text-[10px] font-medium text-brand-contrast bg-brand px-2 py-0.5 w-fit uppercase tracking-tighter">
                      {exp.type}
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <span className="text-[10px] text-brand block mb-1 font-mono font-black uppercase tracking-widest">{t('experience.organization')}</span>
                    <h3 className="text-2xl font-black leading-none uppercase text-brand/90">{exp.company}</h3>
                  </div>
                  <div className="lg:col-span-5">
                    <span className="text-[10px] text-brand block mb-1 font-mono font-black uppercase tracking-widest">{t('experience.status_role')}</span>
                    <p className="text-lg font-black text-text-main mb-2 tracking-tight">{exp.role}</p>
                    <div className="flex flex-wrap gap-2 mb-3 font-mono">
                      {exp.tech.slice(0, 3).map((t: string, i: number) => (
                        <span key={i} className="text-[9px] font-black bg-brand/5 border border-brand/20 px-2 py-0.5 text-brand uppercase tracking-widest">
                          {t}
                        </span>
                      ))}
                      {exp.tech.length > 3 && (
                        <span className="text-[9px] font-black text-text-muted px-2 py-0.5 uppercase tracking-widest">
                          + {exp.tech.length - 3} {t('experience.more')}
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
                    {t('experience.resource_details')} // {selectedExp.period}
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
                  className="p-2 border border-brand/20 text-brand hover:bg-brand/10 transition-colors font-mono"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
                <div>
                  <h4 className="text-xs font-mono font-black text-brand uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Code size={14} /> {t('experience.technical_stack')}
                  </h4>
                  <div className="flex flex-wrap gap-2 font-mono">
                    {selectedExp.tech.map((t: string, i: number) => (
                      <span key={i} className="text-[10px] font-black bg-brand/5 border border-brand/20 px-3 py-1 text-brand uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-black text-brand uppercase tracking-widest mb-4">{t('experience.detailed_manifest')}</h4>
                  <div className="border-l-2 border-brand/20 pl-6 py-2">
                    <p className="text-text-main font-bold leading-relaxed whitespace-pre-line">
                      {selectedExp.fullDesc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-brand/5 border-t border-brand/10 flex justify-after font-mono">
                <span className="text-[10px] font-black opacity-30 tracking-[0.3em] uppercase">
                  {t('experience.sys_access_stable')} // HASH: {Math.random().toString(36).substring(7).toUpperCase()}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
