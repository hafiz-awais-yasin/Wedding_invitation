import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SwipeIndicatorProps {
  currentIndex: number;
  totalSections: number;
  onNavigate: (index: number) => void;
}

export const SwipeIndicator = ({ currentIndex, totalSections, onNavigate }: SwipeIndicatorProps) => (
  <div
    className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full opacity-80 hover:opacity-100 transition-opacity w-fit h-10 sm:h-11 flex-shrink-0"
    style={{
      background: "linear-gradient(135deg, hsl(30 20% 12% / 0.6) 0%, hsl(30 25% 8% / 0.55) 100%)",
      boxShadow: "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 hsl(43 72% 52% / 0.2)",
    }}
  >
    <motion.button
      onClick={() => onNavigate(Math.max(0, currentIndex - 1))}
      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold/70 hover:text-gold hover:border-gold transition-colors flex-shrink-0"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{ opacity: currentIndex === 0 ? 0.2 : 0.9 }}
    >
      <ChevronLeft size={14} />
    </motion.button>
    <div className="flex items-center gap-1 sm:gap-1.5">
      {Array.from({ length: totalSections }, (_, i) => (
        <motion.button
          key={i}
          onClick={() => onNavigate(i)}
          className={`rounded-full transition-all duration-300 flex-shrink-0 ${
            i === currentIndex
              ? "w-5 h-1.5 sm:w-6 sm:h-2 bg-gold/80"
              : "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold/25 hover:bg-gold/40"
          }`}
          whileHover={{ scale: 1.2 }}
        />
      ))}
    </div>
    <motion.button
      onClick={() => onNavigate(Math.min(totalSections - 1, currentIndex + 1))}
      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold/70 hover:text-gold hover:border-gold transition-colors flex-shrink-0"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{ opacity: currentIndex === totalSections - 1 ? 0.2 : 0.9 }}
    >
      <ChevronRight size={14} />
    </motion.button>
  </div>
);

export const SwipeHint = () => (
  <motion.div
    className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2 text-gold/60 text-sm font-body"
    animate={{ x: [0, -10, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    <span>Swipe to explore</span>
    <ChevronRight size={18} />
    <ChevronRight size={18} className="-ml-3 opacity-50" />
  </motion.div>
);
