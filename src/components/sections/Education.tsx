import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap, Terminal, Award, ChevronRight } from 'lucide-react';

export function Education() {
  const { t } = useTranslation();

  const DEGREES = t('education.degrees', { returnObjects: true }) as any[];
  const PROGRAMS = t('education.programs', { returnObjects: true }) as any[];
  const CERTIFICATIONS = t('education.certifications', { returnObjects: true }) as any[];

  return (
    <section id="education" className="py-24 md:py-40 bg-section-alt relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">{t('education.title')}</h2>
          <div className="h-px grow bg-border" />
          <span className="text-xs text-brand opacity-60 font-mono font-black">{t('education.type')}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Degrees (Main Academic) */}
          <div className="lg:col-span-7 space-y-10">
            <div className="flex items-center gap-4 mb-8 opacity-40">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase whitespace-nowrap">ENTRY_TYPE: ACADEMIC</span>
              <div className="h-px w-full bg-brand/20" />
            </div>

            <div className="space-y-6">
              {DEGREES.map((edu, idx) => (
                <div key={idx} className="tech-panel group relative overflow-hidden">

                  <div className="flex justify-between items-start mb-6 border-b border-brand/10 pb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand/10 border border-brand/20 text-brand mt-1 group-hover:bg-brand group-hover:text-brand-contrast transition-colors">
                        <GraduationCap size={20} />
                      </div>
                      <div>
                        <span className="text-[9px] text-brand block mb-1 font-black opacity-60 tracking-widest">{edu.id}</span>
                        <h3 className="text-2xl font-black text-brand leading-none uppercase tracking-tighter">{edu.school}</h3>
                      </div>
                    </div>
                    <span className="text-[10px] bg-brand text-brand-contrast px-2 py-1 font-black uppercase tracking-tighter shadow-sm font-mono shrink-0">
                      {edu.period}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xl font-black leading-tight text-text-main group-hover:translate-x-1 transition-transform inline-flex items-center gap-3">
                      <ChevronRight size={18} className="text-brand" />
                      {edu.degree}
                    </p>
                    <p className="text-text-muted leading-relaxed text-sm font-bold border-l-2 border-brand/20 pl-4 bg-brand/5 py-2">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Programs & Certifications (Compact) */}
          <div className="lg:col-span-5 space-y-16">
            {/* Intensive Programs */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6 opacity-40">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase whitespace-nowrap">ENTRY_TYPE: TRAINING</span>
                <div className="h-px w-full bg-brand/20" />
              </div>

              <div className="space-y-3">
                {PROGRAMS.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="min-h-12 flex items-center gap-4 bg-panel/30 border border-border hover:border-brand/30 p-4 transition-all group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-brand/5 border border-brand/10 text-brand group-hover:bg-brand/10 shrink-0">
                      <Terminal size={18} />
                    </div>
                    <div className="grow overflow-hidden">
                      <div className="flex justify-between items-baseline gap-2 mb-1">
                        <h4 className="text-xs font-black uppercase tracking-tighter text-brand truncate">{item.title}</h4>
                        <span className="text-[8px] font-mono opacity-40 shrink-0">{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[9px] font-bold text-text-muted">
                        <span className="opacity-60">{item.issuer}</span>
                        <span className="opacity-20">//</span>
                        <span className="truncate">{item.details}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6 opacity-40">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase whitespace-nowrap">ENTRY_TYPE: CERTIFICATION</span>
                <div className="h-px w-full bg-brand/20" />
              </div>

              <div className="grid grid-cols-1 gap-2">
                {CERTIFICATIONS.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="min-h-10 flex items-center gap-3 bg-brand/5 border border-brand/10 hover:border-brand/30 px-4 py-2 transition-all group"
                  >
                    <Award size={14} className="text-brand opacity-60 group-hover:opacity-100" />
                    <div className="grow flex justify-between items-center gap-4">
                      <div>
                        <h4 className="text-[11px] font-black uppercase tracking-tighter text-brand">{cert.title}</h4>
                        <p className="text-[9px] font-bold text-text-muted opacity-60 uppercase tracking-widest">{cert.issuer}</p>
                      </div>
                      <span className="text-[9px] font-mono opacity-40 italic">{cert.period}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Data Info */}
            <div className="pt-10 border-t border-brand/10 flex flex-col gap-2 font-mono opacity-20 text-[9px]">
              <div className="flex justify-between uppercase">
                <span>Verification_Hash:</span>
                <span>0x7E12...F9A4</span>
              </div>
              <div className="flex justify-between uppercase">
                <span>System_Load:</span>
                <span>Optimized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
