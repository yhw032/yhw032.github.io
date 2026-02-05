import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Cpu } from 'lucide-react';
import { SKILLS } from '../../constants/skills';

/**
 * Node Component: Individual skill or category group.
 */
function Node({
  icon,
  name,
  isCenter = false,
  className = ""
}: {
  icon: React.ReactNode;
  name: string;
  isCenter?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className} group`}>
      <div className={`
        relative z-10 flex items-center justify-center p-3 overflow-hidden
        ${isCenter
          ? 'w-20 h-20 bg-brand text-brand-contrast shadow-[0_0_25px_rgba(59,130,246,0.4)]'
          : 'min-w-12 h-12 border bg-brand-contrast border-brand/20 text-brand px-4'}
        transition-all duration-300
      `}>
        {!isCenter && (
          <div className="absolute inset-0 bg-brand translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out z-[-1]" />
        )}
        <div className="relative z-10 flex items-center group-hover:text-brand-contrast transition-colors duration-300">
          {icon}
          {!isCenter && <span className="ml-3 text-[10px] font-black uppercase tracking-widest">{name}</span>}
        </div>
      </div>
      {isCenter && (
        <span className="absolute top-full mt-4 text-[11px] font-black text-brand tracking-[0.2em] uppercase whitespace-nowrap">
          {name}
        </span>
      )}
    </div>
  );
}

/**
 * ConnectorLayer: Dynamic SVG line drawing between tracked node positions.
 */
function ConnectorLayer({ nodes, coreRef }: { nodes: { [key: string]: HTMLDivElement | null }, coreRef: React.RefObject<HTMLDivElement | null> }) {
  const [lines, setLines] = useState<{ id: string; d: string }[]>([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    const container = coreRef.current?.closest('.relative.flex');
    if (!container) return;

    const updateLines = () => {
      if (!coreRef.current) return;

      const coreRect = coreRef.current.getBoundingClientRect();
      const parentRect = container.getBoundingClientRect();

      const isMobile = window.innerWidth < 768;
      const coreX = coreRect.left + coreRect.width / 2 - parentRect.left;
      const coreY = coreRect.top + coreRect.height / 2 - parentRect.top;

      const newLines = Object.entries(nodes).map(([id, el]) => {
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        const targetX = Math.round(rect.left + rect.width / 2 - parentRect.left);
        const targetY = Math.round(rect.top + rect.height / 2 - parentRect.top);

        let d = "";
        if (isMobile) {
          const midY = Math.round(coreY + (targetY - coreY) * 0.5);
          d = `M ${coreX} ${coreY} V ${midY} H ${targetX} V ${targetY}`;
        } else {
          const isLeft = targetX < coreX;
          const offset = isLeft ? -60 : 60;
          const midX = coreX + offset;
          d = `M ${coreX} ${coreY} H ${midX} V ${targetY} H ${targetX}`;
        }

        return { id, d };
      }).filter(Boolean) as { id: string; d: string }[];

      setLines(newLines);
    };

    // Use ResizeObserver for more reliable layout tracking
    const observer = new ResizeObserver(() => {
      requestAnimationFrame(updateLines);
    });

    observer.observe(container);

    // Initial and deferred trigger for stability
    const timeout = setTimeout(() => requestAnimationFrame(updateLines), 300);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [nodes, coreRef, i18n.language]);

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible opacity-30">
      <AnimatePresence>
        {lines.map((line) => (
          <motion.path
            key={line.id}
            d={line.d}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-brand"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        ))}
      </AnimatePresence>
    </svg>
  );
}

export function Skills() {
  const { t } = useTranslation();
  const coreRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const leftCats = [SKILLS[3], SKILLS[4]];
  const rightCats = [SKILLS[0], SKILLS[1], SKILLS[2]];

  return (
    <section id="stack" className="py-24 md:py-40 bg-brand-bg relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none" />

      <div className="absolute top-24 left-10 opacity-10 font-mono text-[9px] uppercase tracking-widest hidden lg:block">
        [SYS_CORE::SKILLS_MANIFEST]
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-10 border-b border-brand/20 pb-12 font-mono">
          <div className="space-y-4">
            <span className="text-xs text-brand font-black tracking-[0.4em] uppercase opacity-60 font-mono">{t('stack.version')}</span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase font-sans leading-none">{t('stack.title')}</h2>
          </div>
          <div className="text-right hidden sm:block">
            <span className="text-[10px] font-black tracking-widest text-brand opacity-40 uppercase">{t('stack.config')}</span>
            <div className="flex gap-2 mt-2 justify-end">
              {[1, 2, 3].map(i => <div key={i} className="w-10 h-1 bg-brand/20" />)}
            </div>
          </div>
        </div>

        <div className="relative min-h-[400px] flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">

          <ConnectorLayer nodes={nodeRefs.current} coreRef={coreRef} />

          <div className="flex flex-col gap-12 w-full md:w-auto order-3 md:order-1">
            {leftCats.map((cat, idx) => (
              <div
                key={cat.category}
                className="flex flex-col items-center md:items-end gap-4"
              >
                <div ref={el => { nodeRefs.current[`left-${idx}`] = el; }}>
                  <Node icon={cat.icon} name={t(`stack.categories.${cat.category}`)} className="self-center md:self-end" />
                </div>
                <div className="flex flex-wrap justify-center md:justify-end gap-2 max-w-xs">
                  {cat.skills.map((skill: any) => (
                    <div key={skill.name} className="z-10 bg-brand/5 border border-brand/10 px-3 py-1 text-[9px] font-black text-text-muted uppercase tracking-tighter hover:bg-brand/10 transition-colors">
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="order-1 md:order-2 shrink-0 my-10 md:my-0">
            <div ref={coreRef}>
              <Node icon={<Cpu size={36} />} name="CORE_SYSTEM" isCenter />
            </div>
          </div>

          <div className="flex flex-col gap-12 w-full md:w-auto order-2 md:order-3">
            {rightCats.map((cat, idx) => (
              <div
                key={cat.category}
                className="flex flex-col items-center md:items-start gap-4"
              >
                <div ref={el => { nodeRefs.current[`right-${idx}`] = el; }}>
                  <Node icon={cat.icon} name={t(`stack.categories.${cat.category}`)} className="self-center md:self-start" />
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 max-w-md">
                  {cat.skills.map((skill: any) => (
                    <div
                      key={skill.name}
                      className="z-10 bg-brand/5 border border-brand/10 px-3 py-1 text-[9px] font-black text-text-muted uppercase tracking-tighter hover:bg-brand/10 transition-colors"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand/10 flex justify-between items-center font-mono opacity-20">
          <div className="flex gap-4 text-[9px] font-black uppercase tracking-widest">
            <span>LINK_LOAD: STABLE</span>
            <span>NODE_COUNT: {SKILLS.length + SKILLS.reduce((acc, c) => acc + c.skills.length, 0)}</span>
          </div>
          <span className="text-[8px] font-black uppercase tracking-[0.5em] hidden sm:block">
            01000001 01001110 01010100 01001001
          </span>
        </div>
      </div>
    </section>
  );
}
