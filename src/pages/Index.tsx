import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import brideGroomImg from "@/assets/bride-groom.jpg";
import {
  FloatingPetals,
  FloatingMarigolds,
  FloatingLanterns,
  GlowingLights,
  DraggableHearts,
  Candles,
  ConfettiExplosion,
} from "@/components/wedding/FloatingElements";
import { IslamicPattern, OrnamentDivider, FloralArch } from "@/components/wedding/IslamicPattern";
import { SwipeIndicator, SwipeHint } from "@/components/wedding/SwipeIndicator";

const sectionLabels = ["Intro", "Mehndi", "Barat", "Walima", "Baghi", "Closing"];

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);

  const navigateTo = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const sectionWidth = container.offsetWidth;
    container.scrollTo({ left: index * sectionWidth, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / container.offsetWidth);
      setCurrentSection(index);
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionAnim = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" as const },
    viewport: { once: true },
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <div
        ref={containerRef}
        className="scroll-snap-container flex h-full w-full"
      >
        {/* ===== INTRO ===== */}
        <section className="scroll-snap-section flex-shrink-0 w-screen h-screen relative flex items-center justify-center bg-section-gradient overflow-hidden">
          <IslamicPattern className="w-[500px] h-[500px] top-0 left-0" />
          <IslamicPattern className="w-[400px] h-[400px] bottom-0 right-0" />
          <FloatingPetals count={15} />
          <GlowingLights count={20} />
          <Candles count={4} />

          <motion.div className="relative z-30 text-center px-6 max-w-lg" {...sectionAnim}>
            <motion.p
              className="font-arabic text-gold/70 text-lg mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </motion.p>

            <OrnamentDivider />

            <FloralArch>
              <motion.div
                className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full overflow-hidden border-ornate p-1 mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <img
                  src={brideGroomImg}
                  alt="Hafiz Awais Yasin & Miral Fatima"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
            </FloralArch>

            <motion.h1
              className="font-display text-3xl sm:text-4xl md:text-5xl text-gold-gradient glow-gold leading-tight mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Hafiz Awais Yasin
            </motion.h1>
            <motion.p
              className="text-gold/60 text-xl font-display italic mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Weds
            </motion.p>
            <motion.h1
              className="font-display text-3xl sm:text-4xl md:text-5xl text-gold-gradient glow-gold leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Miral Fatima
            </motion.h1>

            <OrnamentDivider />

            <motion.p
              className="font-arabic text-gold/50 text-sm mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
            </motion.p>

            <SwipeHint />
          </motion.div>
        </section>

        {/* ===== MEHNDI ===== */}
        <section className="scroll-snap-section flex-shrink-0 w-screen h-screen relative flex items-center justify-center bg-mehndi-gradient overflow-hidden">
          <IslamicPattern className="w-[400px] h-[400px] top-10 right-10" />
          <FloatingMarigolds count={12} />
          <FloatingLanterns count={5} />
          <DraggableHearts count={4} />

          <motion.div className="relative z-30 text-center px-6 max-w-md" {...sectionAnim}>
            <span className="text-5xl mb-4 block">💐</span>
            <h2 className="font-display text-4xl sm:text-5xl text-gold-gradient glow-gold mb-2">Mehndi</h2>
            <OrnamentDivider />

            <div className="border-ornate rounded-2xl p-6 sm:p-8 mt-4 shimmer">
              <p className="text-gold/80 font-body text-lg mb-1">📅 April 2, 2026 — Thursday</p>
              <p className="text-gold/80 font-body text-lg mb-4">🕖 7:00 PM</p>
              <div className="h-px bg-gold/20 my-4" />
              <p className="text-gold/60 font-body text-sm uppercase tracking-widest mb-2">Venue</p>
              <p className="text-foreground font-body text-base leading-relaxed">
                House # 229B, Dargahi Shah, Kamalia
              </p>
            </div>

            <motion.p
              className="text-gold/40 font-arabic text-xs mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              An evening of color, joy & celebration
            </motion.p>
          </motion.div>
        </section>

        {/* ===== BARAT ===== */}
        <section className="scroll-snap-section flex-shrink-0 w-screen h-screen relative flex items-center justify-center bg-section-gradient overflow-hidden">
          <IslamicPattern className="w-[500px] h-[500px] bottom-0 left-0" />
          <FloatingLanterns count={7} />
          <Candles count={6} />
          <GlowingLights count={18} />
          <DraggableHearts count={3} />

          <motion.div className="relative z-30 text-center px-6 max-w-md" {...sectionAnim}>
            <span className="text-5xl mb-4 block">🕌</span>
            <h2 className="font-display text-4xl sm:text-5xl text-gold-gradient glow-gold mb-2">Barat</h2>
            <OrnamentDivider />

            <div className="border-ornate rounded-2xl p-6 sm:p-8 mt-4 shimmer">
              <p className="text-gold/80 font-body text-lg mb-1">📅 April 3, 2026 — Friday</p>
              <p className="text-gold/80 font-body text-lg mb-4">🎀 Sehra Bandi: 1:00 PM</p>
              <div className="h-px bg-gold/20 my-4" />
              <p className="text-gold/60 font-body text-sm uppercase tracking-widest mb-2">Departure</p>
              <p className="text-foreground font-body text-sm leading-relaxed mb-4">
                House # 229B, Dargahi Shah, Kamalia
              </p>
              <div className="h-px bg-gold/20 my-4" />
              <p className="text-gold/60 font-body text-sm uppercase tracking-widest mb-2">Venue</p>
              <p className="text-foreground font-body text-sm leading-relaxed">
                Topaz Marquee, Plot # 411–416, Block D-2, Behind LDA Sports Complex, Johar Town, Lahore
              </p>
            </div>
          </motion.div>
        </section>

        {/* ===== WALIMA ===== */}
        <section className="scroll-snap-section flex-shrink-0 w-screen h-screen relative flex items-center justify-center bg-walima-gradient overflow-hidden">
          <IslamicPattern className="w-[450px] h-[450px] top-0 right-0" />
          <FloatingPetals count={10} />
          <GlowingLights count={15} />
          <DraggableHearts count={5} />

          <motion.div className="relative z-30 text-center px-6 max-w-md" {...sectionAnim}>
            <span className="text-5xl mb-4 block">🌙</span>
            <h2 className="font-display text-4xl sm:text-5xl text-gold-gradient glow-gold mb-2">Walima</h2>
            <OrnamentDivider />

            <div className="border-ornate rounded-2xl p-6 sm:p-8 mt-4 shimmer">
              <p className="text-gold/80 font-body text-lg mb-1">📅 April 4, 2026 — Saturday</p>
              <p className="text-gold/80 font-body text-lg mb-4">🕕 6:00 PM</p>
              <div className="h-px bg-gold/20 my-4" />
              <p className="text-gold/60 font-body text-sm uppercase tracking-widest mb-2">Venue</p>
              <p className="text-foreground font-body text-base leading-relaxed">
                Royal Palace, Rajhana Road, Kamalia
              </p>
            </div>

            <motion.p
              className="font-arabic text-gold/40 text-sm mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
            </motion.p>
          </motion.div>
        </section>

        {/* ===== BAGHI ===== */}
        <section className="scroll-snap-section flex-shrink-0 w-screen h-screen relative flex items-center justify-center bg-section-gradient overflow-hidden">
          <IslamicPattern className="w-[400px] h-[400px] top-10 left-10" />
          <FloatingLanterns count={4} />
          <GlowingLights count={12} />

          <motion.div className="relative z-30 text-center px-6 max-w-md" {...sectionAnim}>
            <motion.div
              className="text-7xl mb-6"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
            >
              🐴
            </motion.div>
            <h2 className="font-display text-4xl sm:text-5xl text-gold-gradient glow-gold mb-2">The Baghi</h2>
            <OrnamentDivider />

            <div className="border-ornate rounded-2xl p-6 sm:p-8 mt-4">
              <p className="text-foreground font-body text-base leading-relaxed mb-4">
                The groom arrives in style on the traditional Baghi — a beautifully decorated horse cart,
                a symbol of joy and celebration in our wedding traditions.
              </p>
              <motion.div
                className="flex justify-center items-end gap-1 text-3xl my-6"
                animate={{ x: [-20, 20, -20] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span>🎵</span>
                <motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 0.6, repeat: Infinity }}>🐴</motion.span>
                <span>🎶</span>
                <span className="text-2xl">🛒</span>
              </motion.div>
              <p className="text-gold/50 text-sm font-body italic">
                Dedicated for Lovable ❤️
              </p>
            </div>
          </motion.div>
        </section>

        {/* ===== CLOSING ===== */}
        <section className="scroll-snap-section flex-shrink-0 w-screen h-screen relative flex items-center justify-center bg-section-gradient overflow-hidden">
          <IslamicPattern className="w-[500px] h-[500px] top-0 right-0" />
          <FloatingPetals count={8} />
          <GlowingLights count={20} />

          <motion.div className="relative z-30 text-center px-6 max-w-md" {...sectionAnim}>
            <span className="text-5xl mb-4 block">💌</span>
            <h2 className="font-display text-3xl sm:text-4xl text-gold-gradient glow-gold mb-2 leading-tight">
              Looking Forward to Celebrating with All Family Members
            </h2>
            <OrnamentDivider />

            <div className="border-ornate rounded-2xl p-6 sm:p-8 mt-4">
              <p className="text-gold/60 font-body text-sm uppercase tracking-widest mb-3">Contact</p>
              <p className="text-foreground font-body text-lg mb-1">Hassan</p>
              <p className="text-gold/80 font-body text-sm mb-1">(Younger Brother)</p>
              <a
                href="tel:03008007152"
                className="text-gold font-display text-xl tracking-wider hover:underline"
              >
                0300-8007152
              </a>
            </div>

            <div className="mt-8">
              <ConfettiExplosion />
            </div>

            <motion.p
              className="font-arabic text-gold/40 text-sm mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              جزاكم الله خيرا
            </motion.p>
          </motion.div>
        </section>
      </div>

      <SwipeIndicator
        currentIndex={currentSection}
        totalSections={sectionLabels.length}
        onNavigate={navigateTo}
      />
    </div>
  );
};

export default Index;
