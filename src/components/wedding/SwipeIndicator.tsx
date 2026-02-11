import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SwipeIndicatorProps {
  currentIndex: number;
  totalSections: number;
  onNavigate: (index: number) => void;
}

export const SwipeIndicator = ({ currentIndex, totalSections, onNavigate }: SwipeIndicatorProps) => (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
    <motion.button
      onClick={() => onNavigate(Math.max(0, currentIndex - 1))}
      className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold/70 hover:text-gold hover:border-gold transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{ opacity: currentIndex === 0 ? 0.3 : 1 }}
    >
      <ChevronLeft size={16} />
    </motion.button>
    <div className="flex gap-2">
      {Array.from({ length: totalSections }, (_, i) => (
        <motion.button
          key={i}
          onClick={() => onNavigate(i)}
          className={`rounded-full transition-all duration-300 ${
            i === currentIndex
              ? "w-8 h-2 bg-gold"
              : "w-2 h-2 bg-gold/30 hover:bg-gold/50"
          }`}
          whileHover={{ scale: 1.2 }}
        />
      ))}
    </div>
    <motion.button
      onClick={() => onNavigate(Math.min(totalSections - 1, currentIndex + 1))}
      className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold/70 hover:text-gold hover:border-gold transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{ opacity: currentIndex === totalSections - 1 ? 0.3 : 1 }}
    >
      <ChevronRight size={16} />
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
