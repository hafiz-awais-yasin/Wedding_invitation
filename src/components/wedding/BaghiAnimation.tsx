import { motion } from "framer-motion";
import baghiImg from "@/assets/baghi-scene.png";

const BaghiAnimation = () => (
  <div className="absolute bottom-0 left-0 right-0 h-[100px] z-20 pointer-events-none overflow-hidden">
    {/* Road line */}
    <div className="absolute bottom-[30px] left-0 right-0 h-px bg-gold/15" />
    
    {/* Diyas on road */}
    <div className="absolute bottom-[20px] left-0 right-0 flex justify-around opacity-40">
      {Array.from({ length: 6 }, (_, i) => (
        <motion.span
          key={i}
          className="text-xs"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
        >
          🪔
        </motion.span>
      ))}
    </div>

    {/* Baghi moving left to right */}
    <motion.div
      className="absolute bottom-[15px] w-[120px] sm:w-[160px]"
      initial={{ x: "-150px" }}
      animate={{ x: ["calc(-150px)", "calc(100vw + 50px)"] }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
    >
      {/* Dust trail */}
      <motion.div
        className="absolute -bottom-1 -left-4 w-10 h-3 rounded-full opacity-20"
        style={{ background: "radial-gradient(ellipse, hsl(35 30% 50% / 0.4), transparent)" }}
        animate={{ opacity: [0.1, 0.3, 0.1], scaleX: [0.8, 1.2, 0.8] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
      <img
        src={baghiImg}
        alt="Wedding Baghi"
        className="w-full h-auto drop-shadow-lg"
        style={{ filter: "drop-shadow(0 4px 12px hsl(43 72% 52% / 0.25))" }}
      />
      {/* Glow */}
      <div
        className="absolute -bottom-2 left-[15%] right-[15%] h-4 rounded-full"
        style={{ background: "radial-gradient(ellipse, hsl(43 72% 52% / 0.12), transparent)" }}
      />
    </motion.div>
  </div>
);

export default BaghiAnimation;
