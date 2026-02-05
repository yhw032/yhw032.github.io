import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { DecipherText } from '../common/DecipherText';

interface HeroProps {
  isAlt: boolean;
  logs: string[];
}

export function Hero({ isAlt, logs }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center p-6 pt-20">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-12 lg:col-span-8 flex flex-col justify-center space-y-8">
          <div className="inline-block border border-brand/40 px-3 py-1 text-[10px] text-brand w-fit animate-pulse tracking-widest font-mono font-black uppercase">
            {t('system.access_granted')}
          </div>

          {/* Cinematic Hero Title */}
          <div className="relative min-h-[1.2em] flex items-baseline">
            <motion.h1
              layout
              className="text-6xl md:text-8xl lg:text-9xl font-black text-brand tracking-tighter uppercase leading-none flex items-baseline"
            >
              <motion.span layout className="shrink-0">H</motion.span>

              <AnimatePresence mode="popLayout">
                {!isAlt ? (
                  <motion.span
                    key="hello"
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="px-[0.05em] origin-left flex items-baseline whitespace-nowrap"
                  >
                    <DecipherText text={t('hero.hello')} />
                    <span className="inline-block w-[0.1em]" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="hee"
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="px-[0.05em] origin-left flex items-baseline whitespace-nowrap"
                  >
                    <DecipherText text={t('hero.ee')} />
                    <span className="inline-block w-[0.1em]" />
                  </motion.span>
                )}
              </AnimatePresence>

              <motion.span layout className="shrink-0">W</motion.span>

              <AnimatePresence mode="popLayout">
                {!isAlt ? (
                  <motion.span
                    key="world"
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="px-[0.05em] origin-left whitespace-nowrap"
                  >
                    <DecipherText text={t('hero.world')} delay={0.15} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="wook"
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="px-[0.05em] origin-left flex items-baseline whitespace-nowrap"
                  >
                    <DecipherText text={t('hero.wook')} delay={0.15} />
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 0.6, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-[0.2em] md:text-[0.18em] font-bold ml-2 tracking-normal normal-case whitespace-nowrap opacity-60 hidden md:inline-block border-l border-brand/20 pl-2 py-1 leading-none self-center"
                    >
                      <DecipherText text={t('hero.github_label')} delay={0.4} />
                    </motion.span>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.h1>
          </div>

          <div className="flex gap-3 font-mono text-[10px] tracking-[0.2em] text-brand/60 uppercase">
            <span>// {t('hero.core_value')}</span>
            <span className="animate-pulse">● {t('hero.online')}</span>
          </div>

          <p className="text-xl md:text-2xl text-slate-400 font-bold max-w-2xl border-l-2 border-brand pl-6 py-1 leading-relaxed">
            <span className="">{t('hero.main_desc')}</span>
            <br />
            <span className="text-sm md:text-base opacity-60 font-medium">
              {t('hero.sub_desc')}
            </span>
          </p>
        </div>

        <div className="md:col-span-12 lg:col-span-4 flex flex-col justify-end space-y-4 text-[10px] font-mono font-bold text-text-muted">
          {logs.map((log, i) => (
            <div key={i} className="flex gap-4 items-center">
              <span className="text-brand opacity-60">[{i}]</span>
              <span>{log}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
