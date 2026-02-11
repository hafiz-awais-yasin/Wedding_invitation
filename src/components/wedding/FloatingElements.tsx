import { motion } from "framer-motion";
import { useCallback, useState } from "react";

interface FloatingPetal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

export const FloatingPetals = ({ count = 12 }: { count?: number }) => {
  const petals: FloatingPetal[] = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 6,
    size: 8 + Math.random() * 16,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
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
          <span style={{ fontSize: p.size }} className="opacity-60">🌸</span>
        </motion.div>
      ))}
    </div>
  );
};

export const FloatingMarigolds = ({ count = 10 }: { count?: number }) => {
  const flowers = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 6,
    duration: 5 + Math.random() * 5,
    size: 12 + Math.random() * 14,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {flowers.map((f) => (
        <motion.div
          key={f.id}
          className="absolute"
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
          <span style={{ fontSize: f.size }} className="opacity-70">🌼</span>
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

export const DraggableHearts = ({ count = 5 }: { count?: number }) => {
  const hearts = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: 15 + Math.random() * 70,
    y: 20 + Math.random() * 60,
    size: 18 + Math.random() * 14,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden z-20">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute cursor-grab active:cursor-grabbing"
          style={{ left: `${h.x}%`, top: `${h.y}%` }}
          drag
          dragMomentum={false}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: h.id * 0.5 },
          }}
        >
          <span style={{ fontSize: h.size }} className="select-none">❤️</span>
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

export const ConfettiExplosion = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string }>>([]);

  const triggerConfetti = useCallback(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: Date.now() + i,
      x: (Math.random() - 0.5) * 300,
      y: (Math.random() - 0.5) * 300,
      color: ['#D4AF37', '#8B1A1A', '#FFD700', '#FF69B4', '#FFA500'][Math.floor(Math.random() * 5)],
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 2000);
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
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{ backgroundColor: p.color, left: "50%", top: "50%" }}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: p.x, y: p.y, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};
