import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onFinished: () => void;
}

const LoadingScreen = ({ onFinished }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds total
    const interval = 30; // 30ms updates
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinished, 500); // Small pause at 100%
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <motion.div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black overflow-hidden pointer-events-none"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3b82f633 1px, transparent 1px),
            linear-gradient(to bottom, #3b82f633 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Split Panes (For Exit Transition) */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1/2 bg-[#020202] border-b border-brand/20 z-10"
        exit={{ y: '-100%' }}
        transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#020202] border-t border-brand/20 z-10"
        exit={{ y: '100%' }}
        transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
      />

      {/* UI Elements (Stay in center during split) */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center"
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        {/* Corner Brackets Container */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          {/* Top-Left */}
          <svg className="absolute top-0 left-0 w-12 h-12" viewBox="0 0 48 48">
            <motion.path
              d="M 48 0 L 0 0 L 0 48"
              fill="none"
              stroke="var(--color-brand)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
              transition={{ ease: "linear" }}
            />
          </svg>
          {/* Top-Right */}
          <svg className="absolute top-0 right-0 w-12 h-12 rotate-90" viewBox="0 0 48 48">
            <motion.path
              d="M 48 0 L 0 0 L 0 48"
              fill="none"
              stroke="var(--color-brand)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
              transition={{ ease: "linear" }}
            />
          </svg>
          {/* Bottom-Left */}
          <svg className="absolute bottom-0 left-0 w-12 h-12 -rotate-90" viewBox="0 0 48 48">
            <motion.path
              d="M 48 0 L 0 0 L 0 48"
              fill="none"
              stroke="var(--color-brand)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
              transition={{ ease: "linear" }}
            />
          </svg>
          {/* Bottom-Right */}
          <svg className="absolute bottom-0 right-0 w-12 h-12 rotate-180" viewBox="0 0 48 48">
            <motion.path
              d="M 48 0 L 0 0 L 0 48"
              fill="none"
              stroke="var(--color-brand)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: progress / 100 }}
              transition={{ ease: "linear" }}
            />
          </svg>

          {/* Progress Number */}
          <div className="flex flex-col items-center">
            <motion.span
              className="text-6xl font-mono font-black text-brand tracking-tighter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {Math.floor(progress).toString().padStart(3, '0')}
            </motion.span>
            <span className="text-[10px] font-mono font-black text-brand/40 uppercase tracking-[0.5em] mt-2">
              System_Boot
            </span>
          </div>
        </div>

        {/* Technical Status Line */}
        <div className="mt-12 w-48 h-1 bg-brand/10 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-brand"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            style={{ originX: 0 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
