import { motion } from "framer-motion";
import baghiImg from "@/assets/de9f387d791354bd20cb663a8d415919.png";
import { FireworksBackground } from "./FireworksBackground";

const BaghiAnimation = () => (
  <div className="absolute left-0 right-0 bottom-0 top-0 pointer-events-none overflow-hidden">
    {/* Fireworks overlay on top of baghi image */}
    <div className="absolute inset-0 z-[1]">
      <FireworksBackground count={4} light />
    </div>
    {/* Ground line - gold accent */}
    <div className="absolute bottom-[20px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent z-[2]" />

    {/* Baghi procession - full image visible */}
    <motion.div
      className="absolute bottom-0 w-[180px] sm:w-[220px] z-0"
      initial={{ x: "-200px" }}
      animate={{ x: ["-200px", "calc(100vw + 150px)"] }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 1,
      }}
    >
      <motion.div
        animate={{ y: [0, -4, 0, -2, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={baghiImg}
          alt="Wedding Baraat Procession"
          className="w-full h-auto object-contain object-bottom max-h-[170px] sm:max-h-[190px]"
        />
      </motion.div>
    </motion.div>
  </div>
);

export default BaghiAnimation;
