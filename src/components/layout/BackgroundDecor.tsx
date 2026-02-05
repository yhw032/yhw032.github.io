import { useTranslation } from 'react-i18next';

export function BackgroundDecor() {
  const { t } = useTranslation();

  return (
    <>
      <div className="scanline" />

      {/* Background Decorative Elements */}
      <div className="fixed top-3/4 left-4 z-20 text-[10px] text-brand/25 -rotate-90 origin-top-left pointer-events-none select-none uppercase tracking-[0.3em] font-mono font-black">
        {t('system.coord_x')} // {t('system.coord_y')} // {t('system.status')}
      </div>
      <div className="fixed top-1/2 right-4 z-20 rotate-90 origin-top-right pointer-events-none select-none text-[10px] text-brand/25 uppercase tracking-[0.3em] font-mono font-black">
        {t('system.node_id')} // {t('system.link')} // 0x7E7
      </div>

      {/* Edge Accents */}
      <div className="fixed top-0 bottom-0 left-0 w-px bg-brand/5 z-20 pointer-events-none" />
      <div className="fixed top-0 bottom-0 right-0 w-px bg-brand/5 z-20 pointer-events-none" />
    </>
  );
}
