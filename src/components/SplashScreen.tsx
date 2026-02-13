import React from "react";
import { motion } from "motion/react";

const MASCOT = {
  petalPink: "#FD8FAA",
  sunYellow: "#FBCA04",
  cherryRed: "#E42D3F",
  skyBlue: "#289BF5",
  leafGreen: "#1C9236",
  offWhite: "#FCF9F9",
  ink: "#141318",
  cocoa: "#5C4033",
};

export const FlowerLogo: React.FC<{
  size?: number;
  petalColor?: string;
  centerColor?: string;
  outlineColor?: string;
  animate?: boolean;
}> = ({
  size = 120,
  petalColor = MASCOT.petalPink,
  centerColor = MASCOT.sunYellow,
  outlineColor = "rgba(0,0,0,0.18)",
  animate = true,
}) => {
  const petals = [0, 60, 120, 180, 240, 300];

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {petals.map((angle, i) => (
        <motion.div
          key={i}
          initial={animate ? { scale: 0, rotate: angle } : { scale: 1, rotate: angle }}
          animate={
            animate
              ? {
                  scale: [0, 1, 1.06, 1],
                  rotate: [angle, angle + 4, angle],
                }
              : {}
          }
          transition={{
            duration: 1.5,
            delay: i * 0.08,
            ease: "easeInOut",
            times: [0, 0.4, 0.7, 1],
            repeat: animate ? Infinity : 0,
            repeatDelay: 1,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full origin-bottom"
          style={{
            width: size * 0.36,
            height: size * 0.52,
            backgroundColor: petalColor,
            borderRadius: "100% 100% 100% 100% / 120% 120% 80% 80%",
            opacity: 0.95,
            boxShadow: `0 10px 28px ${outlineColor}`,
          }}
        />
      ))}

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: size * 0.27,
          height: size * 0.27,
          backgroundColor: centerColor,
          boxShadow: "0 0 0 2px rgba(0,0,0,0.18), 0 10px 28px rgba(0,0,0,0.16)",
        }}
        animate={animate ? { scale: [1, 1.08, 1] } : {}}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </div>
  );
};

interface SplashScreenProps {
  onComplete: () => void;
  language?: "vi" | "en";
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onComplete,
  language = "vi",
}) => {
  const [phase, setPhase] = React.useState(1);

  React.useEffect(() => {
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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(900px 600px at 50% 40%, rgba(253,143,170,0.18), transparent 60%)," +
          "linear-gradient(180deg, #FFFDF7 0%, #FFF6FB 55%, #F7FCFF 100%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.10] mix-blend-multiply"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 3px)",
        }}
      />

      <div className="absolute top-10 left-10 opacity-[0.12] rotate-12 pointer-events-none select-none">
        <span className="text-7xl">✿</span>
      </div>
      <div className="absolute bottom-10 right-10 opacity-[0.10] -rotate-12 pointer-events-none select-none">
        <span className="text-7xl">●</span>
      </div>

      <motion.div
        className="flex flex-col items-center gap-8 relative z-10"
        animate={phase === 3 ? { scale: 40, opacity: 0 } : {}}
        transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
      >
        <div id="LogoPortal">
          <FlowerLogo
            size={120}
            animate={phase < 3}
            petalColor={MASCOT.petalPink}
            centerColor={MASCOT.sunYellow}
          />
        </div>

        <motion.div className="text-center space-y-3" animate={phase === 3 ? { opacity: 0 } : {}}>
          <h1
            className="text-4xl font-serif font-extrabold tracking-widest"
            style={{
              color: MASCOT.cocoa,
              textShadow: "0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            BÔNG LÉM
          </h1>

          <p className="text-sm font-medium italic" style={{ color: "rgba(20,19,24,0.55)" }}>
            {language === "vi" ? "Chờ một chút nhé..." : "Just a sec..."}{" "}
            <span style={{ color: MASCOT.petalPink }}>✿</span>
          </p>

          <div className="mx-auto h-[3px] w-24 rounded-full overflow-hidden">
            <div
              className="h-full w-full"
              style={{
                background: `linear-gradient(90deg, ${MASCOT.petalPink}, ${MASCOT.sunYellow}, ${MASCOT.skyBlue})`,
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] font-bold hidden md:block"
        style={{ color: "rgba(20,19,24,0.28)" }}
      >
        Phase {phase}:{" "}
        {phase === 1
          ? "Fade In"
          : phase === 2
            ? "Petal Bloom"
            : phase === 3
              ? "Zoom Through"
              : "Handoff"}
      </div>
    </motion.div>
  );
};
