import { motion } from "framer-motion";
import weddingCarImg from "@/assets/wedding-car.png";

/** Cartoon bride & groom in pink convertible - same animation style as Baghi */
const WeddingCarAnimation = () => (
  <div className="absolute left-0 right-0 bottom-0 top-0 pointer-events-none overflow-hidden">
    <div className="absolute bottom-[20px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent z-[2]" />

    <motion.div
      className="absolute bottom-0 w-[180px] sm:w-[220px] z-0"
      initial={{ x: "-200px" }}
      animate={{ x: ["-200px", "calc(100vw + 150px)"] }}
      transition={{
        duration: 5.5,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 0.3,
      }}
    >
      <motion.div
        animate={{ y: [0, -3, 0, -2, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={weddingCarImg}
          alt="Wedding couple driving away"
          className="w-full h-auto object-contain object-bottom max-h-[220px] sm:max-h-[200px]"
        />
      </motion.div>
    </motion.div>
  </div>
);

export default WeddingCarAnimation;
