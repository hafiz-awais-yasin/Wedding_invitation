import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { createPortal } from "react-dom";

interface FloatingPetal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

/** Flower types with variety: pink, yellow, red, white, gold, maroon */
const FLOWER_EMOJIS = ['🌸', '🌼', '🌹', '🪷', '🌷', '💐', '🏵️', '🌺'];

export const FloatingPetals = ({ count = 12 }: { count?: number }) => {
  const petals: (FloatingPetal & { emoji: string })[] = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 6,
    size: 10 + Math.random() * 14,
    emoji: FLOWER_EMOJIS[i % FLOWER_EMOJIS.length],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute drop-shadow-md"
          style={{ left: `${p.x}%`, top: "-5%" }}
          animate={{
            y: ["0vh", "110vh"],
            rotate: [0, 360 + Math.random() * 360],
            x: [0, Math.sin(p.id) * 50],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span style={{ fontSize: p.size }} className="opacity-75">{p.emoji}</span>
        </motion.div>
      ))}
    </div>
  );
};

/** Animated butterflies - bottom 50% of page, low opacity */
export const FloatingButterflies = ({ count = 4 }: { count?: number }) => {
  const butterflies = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 10 + Math.random() * 80,
    startY: 55 + Math.random() * 40,
    delay: Math.random() * 4,
    duration: 18 + Math.random() * 6,
    size: 16 + Math.random() * 10,
  }));

  return (
    <div className="absolute inset-x-0 bottom-0 h-1/2 overflow-visible z-10 pointer-events-none">
      {butterflies.map((b) => (
        <motion.div
          key={b.id}
          className="absolute"
          style={{
            left: `${b.x}%`,
            top: `${b.startY}%`,
            willChange: "transform",
          }}
          animate={{
            x: [
              0,
              Math.sin(b.id * 0.7) * 15,
              Math.sin(b.id * 1.2) * 20,
              Math.sin(b.id * 0.9) * 12,
              0,
            ],
            y: [
              0,
              Math.cos(b.id * 0.5) * 10,
              Math.sin(b.id * 0.8) * 8,
              0,
            ],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span
            className="inline-block drop-shadow-sm opacity-40"
            style={{ fontSize: b.size }}
          >
            🦋
          </span>
        </motion.div>
      ))}
    </div>
  );
};

/** Pink flowers - spread across full page, falling top to bottom */
const PINK_FLOWER_EMOJIS = ['🌸', '🌷', '💐', '🏵️', '🪷'];

export const FloatingPinkFlowers = ({ count = 14 }: { count?: number }) => {
  const flowers = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 10 + Math.random() * 8,
    size: 14 + Math.random() * 12,
    emoji: PINK_FLOWER_EMOJIS[i % PINK_FLOWER_EMOJIS.length],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
      {flowers.map((f) => (
        <motion.div
          key={f.id}
          className="absolute drop-shadow-sm"
          style={{ left: `${f.x}%`, top: "-5%", willChange: "transform" }}
          animate={{ y: ["0vh", "115vh"], x: [0, Math.sin(f.id * 0.4) * 12] }}
          transition={{ duration: f.duration, delay: f.delay, repeat: Infinity, ease: "linear" }}
        >
          <span style={{ fontSize: f.size }} className="opacity-80">{f.emoji}</span>
        </motion.div>
      ))}
    </div>
  );
};

/** Red flowers - spread across full page, falling top to bottom */
const RED_FLOWER_EMOJIS = ['🌹', '🥀', '🌺'];

export const FloatingRedFlowers = ({ count = 14 }: { count?: number }) => {
  const flowers = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 10 + Math.random() * 8,
    size: 14 + Math.random() * 12,
    emoji: RED_FLOWER_EMOJIS[i % RED_FLOWER_EMOJIS.length],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
      {flowers.map((f) => (
        <motion.div
          key={f.id}
          className="absolute drop-shadow-sm"
          style={{ left: `${f.x}%`, top: "-5%", willChange: "transform" }}
          animate={{ y: ["0vh", "115vh"], x: [0, Math.sin(f.id * 0.4) * 12] }}
          transition={{ duration: f.duration, delay: f.delay, repeat: Infinity, ease: "linear" }}
        >
          <span style={{ fontSize: f.size }} className="opacity-80">{f.emoji}</span>
        </motion.div>
      ))}
    </div>
  );
};

/** Yellow flowers only - left & right 110px strips, falling top to bottom */
const YELLOW_FLOWER_EMOJIS = ['🌼', '🏵️', '🌻'];

export const FloatingYellowFlowers = ({ count = 12 }: { count?: number }) => {
  const halfCount = Math.floor(count / 2);
  const leftFlowers = Array.from({ length: halfCount }, (_, i) => ({
    id: i,
    x: 5 + Math.random() * 70,
    delay: Math.random() * 6,
    duration: 12 + Math.random() * 6,
    size: 14 + Math.random() * 10,
    emoji: YELLOW_FLOWER_EMOJIS[i % YELLOW_FLOWER_EMOJIS.length],
  }));
  const rightFlowers = Array.from({ length: count - halfCount }, (_, i) => ({
    id: halfCount + i,
    x: 5 + Math.random() * 70,
    delay: Math.random() * 6,
    duration: 12 + Math.random() * 6,
    size: 14 + Math.random() * 10,
    emoji: YELLOW_FLOWER_EMOJIS[(i + halfCount) % YELLOW_FLOWER_EMOJIS.length],
  }));

  const FlowerStrip = ({ flowers, side }: { flowers: typeof leftFlowers; side: "left" | "right" }) => (
    <div
      className="absolute top-0 bottom-0 w-[110px] overflow-hidden pointer-events-none"
      style={side === "left" ? { left: 0 } : { right: 0 }}
    >
      {flowers.map((f) => (
        <motion.div
          key={f.id}
          className="absolute drop-shadow-sm"
          style={{ left: `${f.x}px`, top: "-5%", willChange: "transform" }}
          animate={{ y: ["0vh", "115vh"], x: [0, Math.sin(f.id * 0.4) * 8] }}
          transition={{ duration: f.duration, delay: f.delay, repeat: Infinity, ease: "linear" }}
        >
          <span style={{ fontSize: f.size }} className="opacity-80">{f.emoji}</span>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <FlowerStrip flowers={leftFlowers} side="left" />
      <FlowerStrip flowers={rightFlowers} side="right" />
    </div>
  );
};

/** Roses - left & right strips only (~110px each), falling top to bottom, draggable */
const ROSE_EMOJIS = ['🌹', '🥀', '🌺'];

export const FloatingRoses = ({ count = 10 }: { count?: number }) => {
  const halfCount = Math.floor(count / 2);
  const leftRoses = Array.from({ length: halfCount }, (_, i) => ({
    id: i,
    x: 3 + Math.random() * 22,
    delay: Math.random() * 6,
    duration: 10 + Math.random() * 6,
    size: 14 + Math.random() * 12,
    emoji: ROSE_EMOJIS[i % ROSE_EMOJIS.length],
  }));
  const rightRoses = Array.from({ length: count - halfCount }, (_, i) => ({
    id: halfCount + i,
    x: 75 + Math.random() * 22,
    delay: Math.random() * 6,
    duration: 10 + Math.random() * 6,
    size: 14 + Math.random() * 12,
    emoji: ROSE_EMOJIS[(i + halfCount) % ROSE_EMOJIS.length],
  }));
  const allRoses = [...leftRoses, ...rightRoses];

  return (
    <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
      {allRoses.map((r) => (
        <motion.div
          key={r.id}
          className="absolute"
          style={{ left: `${r.x}%`, top: "-5%", willChange: "transform" }}
          animate={{
            y: ["0vh", "115vh"],
            x: [0, Math.sin(r.id * 0.5) * 12],
          }}
          transition={{
            duration: r.duration,
            delay: r.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span
            className="inline-block drop-shadow-lg opacity-70"
            style={{
              fontSize: r.size,
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
            }}
          >
            {r.emoji}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

/** Multi-color floating flowers: gold, white, pink, red, maroon */
const MARIGOLD_EMOJIS = ['🌼', '🌸', '🏵️', '🌺', '🪷', '💐'];

export const FloatingMarigolds = ({ count = 10 }: { count?: number }) => {
  const flowers = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 6,
    duration: 5 + Math.random() * 5,
    size: 12 + Math.random() * 14,
    emoji: MARIGOLD_EMOJIS[i % MARIGOLD_EMOJIS.length],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {flowers.map((f) => (
        <motion.div
          key={f.id}
          className="absolute drop-shadow-md"
          style={{ left: `${f.x}%`, top: "-5%" }}
          animate={{
            y: ["0vh", "110vh"],
            rotate: [0, 180],
            x: [0, Math.cos(f.id) * 40],
          }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span style={{ fontSize: f.size }} className="opacity-80">{f.emoji}</span>
        </motion.div>
      ))}
    </div>
  );
};

export const FloatingLanterns = ({ count = 6 }: { count?: number }) => {
  const lanterns = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 10 + Math.random() * 80,
    y: 10 + Math.random() * 70,
    delay: Math.random() * 3,
    size: 20 + Math.random() * 16,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {lanterns.map((l) => (
        <motion.div
          key={l.id}
          className="absolute flicker"
          style={{ left: `${l.x}%`, top: `${l.y}%` }}
          animate={{
            y: [0, -20, 0],
            rotate: [-3, 3, -3],
          }}
          transition={{
            duration: 4,
            delay: l.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span style={{ fontSize: l.size }}>🏮</span>
        </motion.div>
      ))}
    </div>
  );
};

export const GlowingLights = ({ count = 15 }: { count?: number }) => {
  const lights = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    size: 4 + Math.random() * 8,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {lights.map((l) => (
        <motion.div
          key={l.id}
          className="absolute rounded-full bg-gold/40"
          style={{
            left: `${l.x}%`,
            top: `${l.y}%`,
            width: l.size,
            height: l.size,
            boxShadow: `0 0 ${l.size * 2}px hsl(43 72% 52% / 0.4)`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: l.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export const DraggableFlowers = ({ count = 6 }: { count?: number }) => {
  const flowers = ['🌹', '🌺', '🌷', '🌻', '💐', '🌸'];
  const items = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 10 + Math.random() * 80,
    y: 15 + Math.random() * 65,
    size: 22 + Math.random() * 18,
    emoji: flowers[i % flowers.length],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden z-20">
      {items.map((f) => (
        <motion.div
          key={f.id}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{ left: `${f.x}%`, top: `${f.y}%` }}
          drag
          dragMomentum={false}
          whileHover={{ scale: 1.4, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -12, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            y: { duration: 3 + f.id * 0.3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <span style={{ fontSize: f.size }} className="select-none drop-shadow-lg">{f.emoji}</span>
        </motion.div>
      ))}
    </div>
  );
};

/** Subtle background sparkle/firework dots — not big bursts */
export const BackgroundSparkles = ({ count = 20 }: { count?: number }) => {
  const sparkles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 6,
    size: 2 + Math.random() * 3,
    color: [
      'hsl(43 72% 52% / 0.6)',
      'hsl(345 60% 50% / 0.4)',
      'hsl(50 90% 65% / 0.5)',
      'hsl(30 80% 60% / 0.4)',
    ][Math.floor(Math.random() * 4)],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            backgroundColor: s.color,
            boxShadow: `0 0 ${s.size * 4}px ${s.color}`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export const Fireworks = ({ count = 8 }: { count?: number }) => {
  const sparks = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 10 + Math.random() * 80,
    y: 10 + Math.random() * 60,
    delay: Math.random() * 5,
    size: 3 + Math.random() * 5,
    color: [
      'hsl(43 72% 52%)',
      'hsl(345 60% 50%)',
      'hsl(30 80% 60%)',
      'hsl(50 90% 65%)',
      'hsl(280 50% 60%)',
    ][Math.floor(Math.random() * 5)],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {sparks.map((s) => (
        <motion.div
          key={s.id}
          className="absolute"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
        >
          {Array.from({ length: 6 }, (_, j) => (
            <motion.div
              key={j}
              className="absolute rounded-full"
              style={{
                width: s.size,
                height: s.size,
                backgroundColor: s.color,
                boxShadow: `0 0 ${s.size * 3}px ${s.color}, 0 0 ${s.size * 6}px ${s.color}`,
              }}
              animate={{
                x: [0, Math.cos((j * 60 * Math.PI) / 180) * 40],
                y: [0, Math.sin((j * 60 * Math.PI) / 180) * 40],
                opacity: [0, 1, 1, 0],
                scale: [0, 1.5, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: s.delay + j * 0.05,
                repeat: Infinity,
                repeatDelay: 3 + Math.random() * 2,
                ease: "easeOut",
              }}
            />
          ))}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: s.size * 2,
              height: s.size * 2,
              left: -s.size,
              top: -s.size,
              backgroundColor: 'white',
              boxShadow: `0 0 ${s.size * 4}px ${s.color}`,
            }}
            animate={{
              opacity: [0, 0.9, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 0.6,
              delay: s.delay,
              repeat: Infinity,
              repeatDelay: 4.4 + Math.random() * 2,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export const Candles = ({ count = 5 }: { count?: number }) => {
  const candles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 10 + (i * 80) / (count - 1),
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {candles.map((c) => (
        <motion.div
          key={c.id}
          className="absolute bottom-[10%]"
          style={{ left: `${c.x}%` }}
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 1.5 + Math.random(),
            delay: c.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-2xl">🕯️</span>
        </motion.div>
      ))}
    </div>
  );
};

const CELEBRATION_FLOWERS = ["🌸", "🌹", "🌷", "💐", "🌼", "🏵️", "🌺", "🪷", "🌻", "🪻"];

export const ConfettiExplosion = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string; type: "dot" | "flower" }>>([]);
  const [fireworkBursts, setFireworkBursts] = useState<number>(0);

  const triggerConfetti = useCallback(() => {
    // Lots of confetti dots - 80 particles
    const dots = Array.from({ length: 80 }, (_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 600,
      y: (Math.random() - 0.5) * 600,
      color: ["#D4AF37", "#8B1A1A", "#FFD700", "#FF69B4", "#FFA500", "#FFD700", "#E8B4B8", "#F4A460"][Math.floor(Math.random() * 8)],
      type: "dot" as const,
    }));
    // Lots of flowers - 50 floating flower emojis
    const flowers = Array.from({ length: 50 }, (_, i) => ({
      id: Date.now() + 1000 + i,
      x: (Math.random() - 0.5) * 500,
      y: (Math.random() - 0.5) * 500,
      color: "#fff",
      type: "flower" as const,
    }));
    setParticles([...dots, ...flowers]);
    setFireworkBursts((b) => b + 1);
    setTimeout(() => setParticles([]), 3000);
  }, []);

  return (
    <div className="relative inline-block">
      <motion.button
        onClick={triggerConfetti}
        className="px-8 py-3 border-2 border-gold/50 rounded-full text-gold font-display text-lg tracking-wider hover:border-gold transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🎉 Tap to Celebrate!
      </motion.button>

      {/* Full-screen overlay for celebration particles - portal to body so not clipped */}
      {particles.length > 0 &&
        createPortal(
          <div className="fixed inset-0 pointer-events-none z-[60] flex items-center justify-center">
            {particles.map((p) =>
          p.type === "flower" ? (
            <motion.div
              key={p.id}
              className="absolute text-2xl sm:text-4xl -translate-x-1/2 -translate-y-1/2"
              style={{ left: "50%", top: "50%" }}
              initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 0.5 }}
              animate={{
                x: p.x + (Math.random() - 0.5) * 100,
                y: p.y + (Math.random() - 0.5) * 100,
                opacity: 0,
                rotate: 360 + (Math.random() - 0.5) * 720,
                scale: 1.2,
              }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              {CELEBRATION_FLOWERS[Math.floor(Math.random() * CELEBRATION_FLOWERS.length)]}
            </motion.div>
          ) : (
            <motion.div
              key={p.id}
              className="absolute w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
              style={{ backgroundColor: p.color, left: "50%", top: "50%" }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{ x: p.x, y: p.y, opacity: 0, scale: 0.2 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          )
        )}
          </div>,
          document.body
        )}

      {/* Fireworks burst on click - portal to body */}
      {fireworkBursts > 0 &&
        createPortal(<CelebrationFireworks key={fireworkBursts} />, document.body)}
    </div>
  );
};

/** One-time fireworks burst from center - lots of bursts */
const CelebrationFireworks = () => {
  const COLORS = ["hsl(43 90% 65%)", "hsl(48 100% 68%)", "hsl(25 100% 62%)", "hsl(345 75% 60%)", "hsl(55 100% 70%)", "hsl(350 80% 65%)"];
  const burstCount = 12;

  return (
    <div className="fixed inset-0 pointer-events-none z-[59] flex items-center justify-center">
      {Array.from({ length: burstCount }, (_, b) => {
        const angleOffset = (b / burstCount) * Math.PI * 2;
        return (
          <motion.div
            key={b}
            className="absolute w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{
              left: "50%",
              top: "50%",
              backgroundColor: COLORS[b % COLORS.length],
              boxShadow: `0 0 20px ${COLORS[b % COLORS.length]}, 0 0 40px ${COLORS[b % COLORS.length]}`,
            }}
            initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            animate={{
              x: Math.cos(angleOffset) * 200,
              y: Math.sin(angleOffset) * 200,
              scale: 0,
              opacity: 0,
            }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          />
        );
      })}
      {/* Dense radial burst - many particles in all directions */}
      {Array.from({ length: 60 }, (_, i) => {
        const angle = (i / 60) * Math.PI * 2 + Math.random() * 0.5;
        const dist = 80 + Math.random() * 120;
        const endX = Math.cos(angle) * dist * 4;
        const endY = Math.sin(angle) * dist * 4;
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        return (
          <motion.div
            key={i}
            className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{
              left: "50%",
              top: "50%",
              width: 4 + Math.random() * 6,
              height: 4 + Math.random() * 6,
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}`,
            }}
            initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            animate={{
              x: endX,
              y: endY,
              scale: 0.2,
              opacity: 0,
            }}
            transition={{
              duration: 1.2 + Math.random() * 0.6,
              delay: Math.random() * 0.2,
              ease: "easeOut",
            }}
          />
        );
      })}
    </div>
  );
};
