import { motion } from "framer-motion";

export const IslamicPattern = ({ className = "" }: { className?: string }) => (
  <svg
    className={`absolute opacity-[0.06] pointer-events-none ${className}`}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Geometric Islamic star pattern */}
    <g stroke="hsl(43, 72%, 52%)" strokeWidth="0.5">
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i * Math.PI * 2) / 8;
        const x1 = 100 + 80 * Math.cos(angle);
        const y1 = 100 + 80 * Math.sin(angle);
        const x2 = 100 + 80 * Math.cos(angle + Math.PI / 4);
        const y2 = 100 + 80 * Math.sin(angle + Math.PI / 4);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i * Math.PI * 2) / 12;
        const r = 50;
        return (
          <circle
            key={`c${i}`}
            cx={100 + r * Math.cos(angle)}
            cy={100 + r * Math.sin(angle)}
            r={15}
          />
        );
      })}
      <polygon points="100,20 115,60 160,60 125,85 140,130 100,100 60,130 75,85 40,60 85,60" />
      <circle cx="100" cy="100" r="90" />
      <circle cx="100" cy="100" r="70" />
      <circle cx="100" cy="100" r="40" />
    </g>
  </svg>
);

export const OrnamentDivider = () => (
  <motion.div
    className="flex items-center justify-center gap-3 my-6"
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
    <span className="text-gold text-xl">✦</span>
    <div className="h-px w-8 bg-gold/50" />
    <span className="text-gold text-sm">☪</span>
    <div className="h-px w-8 bg-gold/50" />
    <span className="text-gold text-xl">✦</span>
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
  </motion.div>
);

export const FloralArch = ({ children }: { children: React.ReactNode }) => (
  <div className="relative">
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl opacity-60">🌿🌸🌿</div>
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-3xl opacity-60 rotate-180">🌿🌸🌿</div>
    <div className="absolute top-1/2 -left-6 -translate-y-1/2 text-2xl opacity-40 -rotate-90">🌿🌺</div>
    <div className="absolute top-1/2 -right-6 -translate-y-1/2 text-2xl opacity-40 rotate-90">🌿🌺</div>
    {children}
  </div>
);
