import React from 'react';
import { motion } from 'motion/react';

export const FlowerLogo: React.FC<{ size?: number, color?: string, animate?: boolean }> = ({ 
  size = 120, 
  color = "#808000",
  animate = true 
}) => {
  const petals = [0, 60, 120, 180, 240, 300];
  
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {petals.map((angle, i) => (
        <motion.div
          key={i}
          initial={animate ? { scale: 0, rotate: angle } : { scale: 1, rotate: angle }}
          animate={animate ? { 
            scale: [0, 1, 1.08, 1],
            rotate: [angle, angle + 5, angle] 
          } : {}}
          transition={{
            duration: 1.5,
            delay: i * 0.1,
            ease: "easeInOut",
            times: [0, 0.4, 0.7, 1],
            repeat: animate ? Infinity : 0,
            repeatDelay: 1
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full origin-bottom"
          style={{
            width: size * 0.35,
            height: size * 0.5,
            backgroundColor: color,
            borderRadius: '100% 100% 100% 100% / 120% 120% 80% 80%',
            opacity: 0.85
          }}
        />
      ))}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5F1E9] border-2 border-[#808000]/20"
        style={{ width: size * 0.25, height: size * 0.25 }}
        animate={animate ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </div>
  );
};

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = React.useState(1);

  React.useEffect(() => {
    // Phase 1: 0 - 0.6s (Fade in)
    // Phase 2: 0.6 - 1.4s (Petal Bloom - handled by component animation)
    // Phase 3: 1.4 - 2.4s (Zoom through)
    // Phase 4: 2.4 - 2.8s (Handoff)
    
    const timer1 = setTimeout(() => setPhase(2), 600);
    const timer2 = setTimeout(() => setPhase(3), 1400);
    const timer3 = setTimeout(() => {
      setPhase(4);
      onComplete();
    }, 2400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-[#FDFBF7] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
      
      {/* Corner Decors */}
      <div className="absolute top-12 left-12 opacity-10 rotate-12 pointer-events-none select-none">
        <span className="text-8xl">🌼</span>
      </div>
      <div className="absolute bottom-12 right-12 opacity-10 -rotate-12 pointer-events-none select-none">
        <span className="text-8xl">🌿</span>
      </div>

      <motion.div 
        className="flex flex-col items-center gap-8 relative z-10"
        animate={phase === 3 ? { scale: 40, opacity: 0 } : {}}
        transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
      >
        <div id="LogoPortal">
          <FlowerLogo size={120} animate={phase < 3} />
        </div>
        
        <motion.div 
          className="text-center space-y-3"
          animate={phase === 3 ? { opacity: 0 } : {}}
        >
          <h1 className="text-4xl font-serif font-bold text-[#5C4033] tracking-widest">
            BÔNG LÉM
          </h1>
          <p className="text-[#5C4033]/60 text-sm font-medium italic animate-pulse">
            Chờ xí nhaa...
          </p>
        </motion.div>
      </motion.div>

      {/* Animation Notes (Visible for Design reference/debug if needed, but here styled as subtle overlay) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-20 text-[10px] uppercase tracking-[0.2em] font-bold text-[#5C4033] hidden md:block">
        Phase {phase}: {phase === 1 ? 'Fade In' : phase === 2 ? 'Petal Bloom' : phase === 3 ? 'Zoom Through' : 'Handoff'}
      </div>
    </motion.div>
  );
};
