import React from 'react';
import { motion } from 'motion/react';

interface FloatingOrbsBackgroundProps {
  isDarkMode?: boolean;
}

export const FloatingOrbsBackground: React.FC<FloatingOrbsBackgroundProps> = ({ isDarkMode = false }) => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0"
      style={{ contain: 'strict' }}
    >
      {/* Orb 1: Soft Muted Amethyst / Deep Lilac - Floats from top-left toward center */}
      <motion.div
        className="absolute rounded-full will-change-transform"
        style={{
          width: 'min(50vw, 560px)',
          height: 'min(50vw, 560px)',
          top: '-8%',
          left: '-5%',
          backgroundColor: isDarkMode ? '#3B2654' : '#CBB8DB',
          opacity: isDarkMode ? 0.18 : 0.38,
          filter: 'blur(95px)',
        }}
        animate={{
          x: [0, 85, 30, -40, 0],
          y: [0, 95, 160, 45, 0],
          scale: [1, 1.08, 0.95, 1.04, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Orb 2: Soft Warm Peach / Muted Coral Whisper - Floats around top-right */}
      <motion.div
        className="absolute rounded-full will-change-transform"
        style={{
          width: 'min(46vw, 520px)',
          height: 'min(46vw, 520px)',
          top: '8%',
          right: '-6%',
          backgroundColor: isDarkMode ? '#4D2418' : '#F2CDC3',
          opacity: isDarkMode ? 0.14 : 0.32,
          filter: 'blur(105px)',
        }}
        animate={{
          x: [0, -90, -35, 40, 0],
          y: [0, 110, -50, 60, 0],
          scale: [1, 0.92, 1.1, 0.98, 1],
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Orb 3: Soft Periwinkle / Lavender Blue - Floats around mid-left / lower quadrant */}
      <motion.div
        className="absolute rounded-full will-change-transform"
        style={{
          width: 'min(52vw, 580px)',
          height: 'min(52vw, 580px)',
          top: '45%',
          left: '-10%',
          backgroundColor: isDarkMode ? '#22284C' : '#CDD3EC',
          opacity: isDarkMode ? 0.16 : 0.35,
          filter: 'blur(110px)',
        }}
        animate={{
          x: [0, 110, 60, -30, 0],
          y: [0, -90, 80, -60, 0],
          scale: [1, 1.06, 0.92, 1.05, 1],
        }}
        transition={{
          duration: 44,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />

      {/* Orb 4: Soft Dusty Mauve / Rose - Floats around bottom-right */}
      <motion.div
        className="absolute rounded-full will-change-transform"
        style={{
          width: 'min(48vw, 540px)',
          height: 'min(48vw, 540px)',
          bottom: '-10%',
          right: '5%',
          backgroundColor: isDarkMode ? '#3D1E38' : '#DDC4D8',
          opacity: isDarkMode ? 0.15 : 0.34,
          filter: 'blur(100px)',
        }}
        animate={{
          x: [0, -80, -120, 30, 0],
          y: [0, -110, -40, -80, 0],
          scale: [1, 1.09, 0.94, 1.02, 1],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Orb 5: Delicate Creamy Ivory-Lavender Tint - Floats gently near center-bottom */}
      <motion.div
        className="absolute rounded-full will-change-transform"
        style={{
          width: 'min(42vw, 460px)',
          height: 'min(42vw, 460px)',
          top: '60%',
          right: '25%',
          backgroundColor: isDarkMode ? '#2B2438' : '#F7EFFB',
          opacity: isDarkMode ? 0.12 : 0.42,
          filter: 'blur(90px)',
        }}
        animate={{
          x: [0, 60, -70, 40, 0],
          y: [0, -70, 50, -30, 0],
          scale: [1, 0.95, 1.08, 0.97, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
      />
    </div>
  );
};
