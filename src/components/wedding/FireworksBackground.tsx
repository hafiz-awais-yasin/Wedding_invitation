import { motion } from "framer-motion";
import { useMemo } from "react";

const COLORS = [
  "hsl(43 90% 65%)",   // bright gold
  "hsl(48 100% 68%)",  // amber yellow
  "hsl(25 100% 62%)",  // orange
  "hsl(345 75% 60%)",  // rose
  "hsl(0 0% 100%)",    // white
  "hsl(55 100% 70%)",  // lemon gold
  "hsl(350 80% 65%)",  // coral red
];

interface Burst {
  id: number;
  x: number;
  y: number;
  particles: Array<{
    id: number;
    color: string;
    angle: number;
    distance: number;
    size: number;
    duration: number;
    delay: number;
  }>;
}

/** Premium fireworks - dramatic bursts with trailing particles */
export const FireworksBackground = ({
  count = 6,
  wallpaperSrc,
  light = false,
}: {
  count?: number;
  wallpaperSrc?: string;
  light?: boolean;
}) => {
  const bursts = useMemo(() => {
    const result: Burst[] = [];
    for (let b = 0; b < count; b++) {
      const x = 10 + Math.random() * 80;
      const y = 8 + Math.random() * 55;
      const particleCount = 8 + Math.floor(Math.random() * 5);
      const particles = [];
      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * 2 * Math.PI + Math.random() * 0.4;
        particles.push({
          id: b * 100 + i,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          angle,
          distance: 14 + Math.random() * 16,
          size: 3 + Math.random() * 4,
          duration: 1.6 + Math.random() * 0.6,
          delay: b * 1.2 + Math.random() * 0.3,
        });
      }
      result.push({ id: b, x, y, particles });
    }
    return result;
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${light ? "z-[1]" : "z-0"}`}>
      {/* Optional 4K wallpaper layer - add fireworks-4k.jpg to /public to use */}
      {wallpaperSrc && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${wallpaperSrc})` }}
        />
      )}
      {/* Background overlay - light mode for white/cream sections */}
      <div
        className="absolute inset-0"
        style={{
          background: light
            ? "radial-gradient(ellipse 100% 80% at 50% 50%, hsl(43 60% 95% / 0.15) 0%, transparent 70%)"
            : wallpaperSrc
              ? `linear-gradient(180deg, hsl(255 40% 8% / 0.9) 0%, hsl(260 35% 6% / 0.7) 100%)`
              : `
                radial-gradient(ellipse 80% 50% at 50% 20%, hsl(260 50% 18% / 0.9) 0%, transparent 50%),
                radial-gradient(ellipse 120% 80% at 50% 80%, hsl(340 45% 15% / 0.8) 0%, transparent 50%),
                radial-gradient(ellipse 100% 100% at 50% 50%, hsl(255 40% 12%) 0%, hsl(250 50% 6%) 50%, hsl(245 60% 4%) 100%)
              `,
        }}
      />
      {/* Firework bursts */}
      {bursts.map((burst) => (
        <div
          key={burst.id}
          className="absolute"
          style={{ left: `${burst.x}%`, top: `${burst.y}%` }}
        >
          {/* Core explosion - subtle flash */}
          <motion.div
            className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "120px",
              height: "120px",
              background: "radial-gradient(circle, hsl(43 90% 70% / 0.25) 0%, hsl(43 80% 60% / 0.12) 35%, transparent 65%)",
              boxShadow: "0 0 80px hsl(43 85% 65% / 0.2), 0 0 120px hsl(43 75% 55% / 0.1)",
            }}
            animate={{
              scale: [0.2, 1.4, 1],
              opacity: [0, 0.3, 0.12],
            }}
            transition={{
              duration: 4,
              delay: burst.id * 3,
              repeat: Infinity,
              repeatDelay: 6,
              ease: "easeOut",
            }}
          />
          {/* Main particles - radial burst */}
          {burst.particles.map((p) => {
            const endX = Math.cos(p.angle) * p.distance * 8;
            const endY = Math.sin(p.angle) * p.distance * 8;
            return (
              <motion.div
                key={p.id}
                className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  backgroundColor: p.color,
                  boxShadow: `0 0 ${p.size * 4}px ${p.color}, 0 0 ${p.size * 10}px ${p.color}`,
                }}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0.2 }}
                animate={{
                  x: endX,
                  y: endY,
                  opacity: [0, 0.9, 0.8, 0],
                  scale: [0.2, 1.1, 0.85, 0.05],
                }}
                transition={{
                  duration: p.duration + 1,
                  delay: p.delay,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeOut",
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default FireworksBackground;
