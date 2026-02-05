import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SKILLS } from '../../constants/skills';

export function Skills() {
  const { t } = useTranslation();

  return (
    <section id="stack" className="py-40 bg-brand-bg relative overflow-hidden transition-colors duration-500">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.08] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-24 border-b border-brand/20 pb-12 font-mono">
          <div className="space-y-4">
            <span className="text-xs text-brand font-black tracking-[0.4em] uppercase opacity-60">{t('stack.version')}</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase font-sans" data-text="STACK">{t('stack.title')}</h2>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-[10px] font-black tracking-widest text-brand opacity-40 uppercase">{t('stack.config')}</span>
            <div className="flex gap-2 mt-2 justify-end">
              {[1, 2, 3].map(i => <div key={i} className="w-12 h-1 bg-brand/20" />)}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SKILLS.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              {/* Module Decoration */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-brand/20 group-hover:border-brand/60 transition-colors" />

              <div className="bg-brand/2 p-10! backdrop-blur-md border border-brand/5 h-full flex flex-col group-hover:border-brand/40 transition-all duration-500">
                <div className="flex items-center gap-5 mb-12">
                  <div className="p-4 bg-brand/5 border border-brand/20 text-brand group-hover:bg-brand/10 group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                    {cat.icon}
                  </div>
                  <div className="flex-1 font-mono">
                    <span className="text-[11px] font-black text-brand tracking-widest block uppercase mb-1 opacity-60">{t(`stack.labels.${cat.label}`)}</span>
                    <h3 className="text-2xl font-black tracking-tighter uppercase leading-none font-sans">{t(`stack.categories.${cat.category}`)}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {cat.skills.map((skill: any, sIdx: number) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-3 p-3 border border-brand/5 bg-brand/2 hover:bg-brand/10 hover:border-brand/20 transition-all group/skill"
                    >
                      <div className="text-brand opacity-40 group-hover/skill:opacity-100 group-hover/skill:scale-110 transition-all">
                        {skill.icon}
                      </div>
                      <span className="text-[11px] font-black text-text-muted group-hover/skill:text-text-main uppercase tracking-tighter transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Diagnostic Footer */}
                <div className="mt-auto pt-10 flex items-center justify-between opacity-10 group-hover:opacity-30 transition-opacity">
                  <div className="flex gap-1.5">
                    {[1, 2, 3].map(i => <div key={i} className="w-1 h-3 bg-brand" />)}
                  </div>
                  <span className="text-[8px] font-mono font-black tracking-widest uppercase">SYSCFG_0{idx}::{t('stack.stable')}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
