import { motion } from "framer-motion";
import baghiImg from "@/assets/baghi-scene.png";

const BaghiAnimation = () => (
  <div className="absolute bottom-0 left-0 right-0 h-[120px] z-40 pointer-events-none overflow-hidden">
    {/* Road surface */}
    <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-black/30 to-transparent" />
    <div className="absolute bottom-[35px] left-0 right-0 h-[2px] bg-gold/20" />

    {/* Diyas along the road */}
    <div className="absolute bottom-[8px] left-0 right-0 flex justify-around px-4">
      {Array.from({ length: 8 }, (_, i) => (
        <motion.span
          key={i}
          className="text-sm"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
        >
          🪔
        </motion.span>
      ))}
    </div>

    {/* Baghi carriage */}
    <motion.div
      className="absolute bottom-[20px] w-[130px] sm:w-[170px]"
      initial={{ x: "-180px" }}
      animate={{ x: ["-180px", "calc(100vw + 100px)"] }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 2,
      }}
    >
      {/* Trotting motion */}
      <motion.div
        animate={{ y: [0, -6, 0, -3, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Dust particles */}
        <motion.div
          className="absolute -bottom-2 -left-6 w-12 h-4 rounded-full"
          style={{ background: "radial-gradient(ellipse, hsl(35 30% 50% / 0.3), transparent)" }}
          animate={{ opacity: [0.1, 0.4, 0.1], scaleX: [0.6, 1.4, 0.6] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
        <img
          src={baghiImg}
          alt="Wedding Baghi"
          className="w-full h-auto drop-shadow-[0_4px_16px_hsl(43_72%_52%/0.35)]"
        />
        {/* Ground glow */}
        <div
          className="absolute -bottom-3 left-[10%] right-[10%] h-5 rounded-full"
          style={{ background: "radial-gradient(ellipse, hsl(43 72% 52% / 0.2), transparent)" }}
        />
      </motion.div>
    </motion.div>
  </div>
);

export default BaghiAnimation;
