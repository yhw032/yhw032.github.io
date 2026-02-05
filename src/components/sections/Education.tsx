import { useTranslation } from 'react-i18next';

export function Education() {
  const { t } = useTranslation();
  const EDUCATION_ITEMS = t('education.items', { returnObjects: true }) as any[];

  return (
    <section id="education" className="py-40 bg-section-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">{t('education.title')}</h2>
          <div className="h-px grow bg-border" />
          <span className="text-xs text-brand opacity-60 font-mono font-black">{t('education.type')}</span>
        </div>

        <div className="grid gap-1 grid-cols-1 md:grid-cols-2">
          {EDUCATION_ITEMS.map((edu, idx) => (
            <div key={idx} className="tech-panel">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] text-brand block mb-1 font-black">ENTRY_{idx}</span>
                  <h3 className="text-2xl font-black text-brand leading-none">{edu.school}</h3>
                </div>
                <span className="text-[10px] bg-brand text-brand-contrast px-2 py-0.5 font-black uppercase tracking-tighter shadow-sm">{edu.period}</span>
              </div>
              <p className="text-lg font-black mb-4 border-b border-border pb-4">{edu.degree}</p>
              <p className="text-text-muted leading-relaxed text-sm font-bold">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
