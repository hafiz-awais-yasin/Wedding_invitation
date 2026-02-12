import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Car, MapPin } from "lucide-react";
import introBg from "@/assets/intro-background.png";
import mehndiBg from "@/assets/mehndi-background.png";
import baratBg from "@/assets/barat-background.png";
import {
  FloatingButterflies,
  FloatingRoses,
  FloatingYellowFlowers,
  FloatingPinkFlowers,
  FloatingRedFlowers,
  FloatingPetals,
  FloatingMarigolds,
  ConfettiExplosion,
} from "@/components/wedding/FloatingElements";
import { FireworksBackground } from "@/components/wedding/FireworksBackground";
import { OrnamentDivider } from "@/components/wedding/IslamicPattern";
import { SwipeIndicator, SwipeHint } from "@/components/wedding/SwipeIndicator";
import BaghiAnimation from "@/components/wedding/BaghiAnimation";
import WeddingCarAnimation from "@/components/wedding/WeddingCarAnimation";

const sectionLabels = ["Intro", "Mehndi", "Barat", "Walima"];

/** Parallax layer that shifts based on horizontal scroll */
const ParallaxLayer = ({
  children,
  scrollProgress,
  speed = 0.2,
  className = "",
}: {
  children: React.ReactNode;
  scrollProgress: ReturnType<typeof useScroll>["scrollXProgress"];
  speed?: number;
  className?: string;
}) => {
  const x = useTransform(scrollProgress, [0, 1], ["0%", `${-speed * 50}%`]);
  return (
    <motion.div className={`absolute inset-0 ${className}`} style={{ x }}>
      {children}
    </motion.div>
  );
};

interface IndexProps {
  isDesktopIframe?: boolean;
}

const Index = ({ isDesktopIframe = false }: IndexProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const { scrollXProgress } = useScroll({ container: containerRef });

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
    <div className="min-h-screen flex justify-center md:items-center md:py-6 md:bg-neutral-950">
      {/* Desktop: centered card (430px = ~iPhone width); Mobile: full width */}
      <div
        className="w-full h-screen md:w-[430px] md:h-[90vh] md:max-h-[932px] md:rounded-[2.5rem] md:overflow-hidden md:shadow-2xl md:border md:border-white/10 relative"
        style={{ transform: "translateZ(0)" }}
      >
      <div
        ref={containerRef}
        className="scroll-snap-container flex h-full w-full"
      >
        {/* ===== INTRO ===== */}
        <section className="scroll-snap-section flex-shrink-0 min-w-full w-full min-h-screen h-screen relative flex flex-col overflow-hidden pb-safe-bar pt-4">
          {/* Intro background - ornate bridal illustration */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${introBg})`,
              backgroundSize: "auto 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#FAF8F5",
            }}
          />
          <ParallaxLayer scrollProgress={scrollXProgress} speed={0.15}>
            <FireworksBackground count={8} light />
          </ParallaxLayer>
          <ParallaxLayer scrollProgress={scrollXProgress} speed={0.06}>
            <FloatingButterflies count={4} />
          </ParallaxLayer>
          <ParallaxLayer scrollProgress={scrollXProgress} speed={0.04}>
            <FloatingRoses count={12} />
          </ParallaxLayer>

          {/* All content centered in central white area */}
          <motion.div
            className="relative z-30 flex-1 min-h-0 flex flex-col items-center justify-center px-5 sm:px-8 py-4 max-w-[440px] mx-auto overflow-y-auto overflow-x-hidden isolate"
            {...sectionAnim}
          >
            {/* Top: Bismillah */}
            <motion.p
              className="font-arabic text-base sm:text-lg mb-2 text-center drop-shadow-lg"
              style={{ color: "hsl(43 70% 45%)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </motion.p>

            {/* Invite text */}
            <motion.p
              className="font-body text-sm sm:text-base mb-5 leading-relaxed tracking-[0.2em] uppercase text-center font-medium text-amber-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              You are cordially invited to the wedding of
            </motion.p>

            {/* Names - bold, prominent, with reveal animation */}
            <div className="flex flex-col items-center gap-1 w-full flex-shrink-0">
              <motion.h1
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center"
                style={{
                  background: "linear-gradient(135deg, hsl(43 90% 65%) 0%, hsl(38 65% 35%) 50%, hsl(43 80% 50%) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 0.7,
                  duration: 0.9,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                Hafiz Awais Yasin
              </motion.h1>
              <motion.p
                className="text-2xl sm:text-3xl font-display italic font-semibold"
                style={{ color: "hsl(43 65% 40%)" }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                Weds
              </motion.p>
              <motion.h1
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center"
                style={{
                  background: "linear-gradient(135deg, hsl(43 90% 65%) 0%, hsl(38 65% 35%) 50%, hsl(43 80% 50%) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 1.1,
                  duration: 0.9,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                Miral Fatima
              </motion.h1>
            </div>

            <OrnamentDivider />

            {/* Arabic verse */}
            <motion.p
              className="font-arabic text-xs sm:text-sm mt-1 text-center max-w-[300px] leading-relaxed"
              style={{ color: "hsl(43 60% 40%)" }}
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
        <section className="scroll-snap-section flex-shrink-0 min-w-full w-full min-h-screen h-screen relative flex flex-col overflow-hidden pb-safe-bar pt-4">
          {/* Mehndi background - fills entire section, image height 100% */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${mehndiBg})`,
              backgroundSize: "auto 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#F5F0E8",
            }}
          />
          <ParallaxLayer scrollProgress={scrollXProgress} speed={0.12}>
            <FireworksBackground count={10} light />
          </ParallaxLayer>
          <ParallaxLayer scrollProgress={scrollXProgress} speed={0.06}>
            <FloatingButterflies count={8} />
          </ParallaxLayer>
          <ParallaxLayer scrollProgress={scrollXProgress} speed={0.04}>
            <FloatingYellowFlowers count={14} />
          </ParallaxLayer>

          {/* Card section */}
          <motion.div
            className="relative z-30 flex-1 min-h-0 flex flex-col items-center justify-center px-4 py-4 max-w-md mx-auto overflow-y-auto overflow-x-hidden"
            {...sectionAnim}
          >
            <h2
              className="font-display text-4xl sm:text-5xl mb-2 flex-shrink-0 font-bold tracking-wide"
              style={{
                background: "linear-gradient(135deg, hsl(45 95% 55%) 0%, hsl(30 75% 35%) 50%, hsl(38 80% 45%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Mehndi
            </h2>
            <OrnamentDivider />

            {/* Event card - animated gradient border */}
            <div className="w-full flex-shrink-0 mt-3 rounded-2xl p-[2px] card-animated-border">
              <div
                className="rounded-[14px] p-5 sm:p-7 relative overflow-hidden text-left"
                style={{
                  background: "linear-gradient(165deg, hsl(55 50% 97%) 0%, hsl(45 45% 93%) 25%, hsl(40 40% 90%) 50%, hsl(38 35% 88%) 75%, hsl(35 30% 85%) 100%)",
                }}
              >
                <div className="card-shimmer-overlay" aria-hidden />
                <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl sm:text-3xl flex-shrink-0">📅</span>
                <p className="font-body text-base sm:text-lg font-medium text-amber-900 min-w-0">
                  April 2, 2026 — Thursday
                </p>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl sm:text-3xl flex-shrink-0">🕖</span>
                <p className="font-body text-base sm:text-lg font-medium text-amber-900 min-w-0">
                  7:00 PM
                </p>
              </div>
              <div className="h-px my-4" style={{ background: "linear-gradient(90deg, transparent, hsl(43 60% 65% / 0.7), transparent)" }} />
              <p className="text-amber-800 font-body text-xs uppercase tracking-[0.2em] mb-2 font-semibold">
                Venue
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=House+229B+Dargahi+Shah+Kamalia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-800 font-body text-sm sm:text-base leading-relaxed flex items-center gap-2 hover:text-amber-700 transition-colors"
              >
                <MapPin size={16} className="flex-shrink-0 text-amber-600" />
                House # 229B, Dargahi Shah, Kamalia
              </a>
              </div>
            </div>

            <motion.p
              className="font-arabic text-xs mt-4 pb-2 flex-shrink-0"
              style={{ color: "hsl(43 50% 45%)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              An evening of color, joy & celebration
            </motion.p>
          </motion.div>
        </section>

        {/* ===== BARAT ===== */}
        <section className="scroll-snap-section flex-shrink-0 min-w-full w-full h-screen relative flex flex-col overflow-hidden pb-safe-bar pt-4">
          {/* Barat background - fills entire section */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${baratBg})`,
              backgroundSize: "auto 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#EEE9E5",
            }}
          />
          {/* Fireworks */}
          <ParallaxLayer scrollProgress={scrollXProgress} speed={0.08}>
            <FireworksBackground count={6} light />
          </ParallaxLayer>
          <ParallaxLayer scrollProgress={scrollXProgress} speed={0.04}>
            <FloatingPinkFlowers count={14} />
          </ParallaxLayer>

          {/* Card section */}
          <motion.div
            className="relative z-20 flex-1 flex flex-col items-center justify-start px-4 py-3 pt-1 max-w-md mx-auto min-h-0"
            {...sectionAnim}
          >
            <motion.h2
              className="font-display text-4xl sm:text-5xl mb-2 flex-shrink-0 font-bold tracking-wide"
              style={{
                background: "linear-gradient(135deg, hsl(45 95% 55%) 0%, hsl(30 75% 35%) 50%, hsl(38 80% 45%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Barat
            </motion.h2>
            <OrnamentDivider />

            <motion.div
              className="w-full flex-shrink-0 mt-3 rounded-2xl p-[2px] card-animated-border"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div
                className="rounded-[14px] p-5 sm:p-7 relative overflow-hidden text-left"
                style={{
                  background: "linear-gradient(165deg, hsl(55 50% 97%) 0%, hsl(45 45% 93%) 25%, hsl(40 40% 90%) 50%, hsl(38 35% 88%) 75%, hsl(35 30% 85%) 100%)",
                }}
              >
                <div className="card-shimmer-overlay" aria-hidden />
                <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl sm:text-3xl flex-shrink-0">📅</span>
                <p className="font-body text-base sm:text-lg font-medium text-amber-900 min-w-0">
                  April 3, 2026 — Friday
                </p>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl sm:text-3xl flex-shrink-0">🎀</span>
                <p className="font-body text-base sm:text-lg font-medium text-amber-900 min-w-0">
                  Sehra Bandi: 1:00 PM
                </p>
              </div>
              <div className="h-px my-4" style={{ background: "linear-gradient(90deg, transparent, hsl(43 60% 65% / 0.7), transparent)" }} />
              <p className="text-amber-800 font-body text-xs uppercase tracking-[0.2em] mb-2 font-semibold">
                Departure
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=House+229B+Dargahi+Shah+Kamalia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-800 font-body text-sm sm:text-base leading-relaxed mb-2 flex items-center gap-2 hover:text-amber-700 transition-colors"
              >
                <MapPin size={16} className="flex-shrink-0 text-amber-600" />
                House # 229B, Dargahi Shah, Kamalia
              </a>
              <p className="text-amber-800 font-body text-sm flex items-center gap-2 mb-4">
                <Car size={18} className="text-amber-700 flex-shrink-0" /> Departure Time: 2:30 PM
              </p>
              <div className="h-px my-4" style={{ background: "linear-gradient(90deg, transparent, hsl(43 60% 65% / 0.7), transparent)" }} />
              <p className="text-amber-800 font-body text-xs uppercase tracking-[0.2em] mb-2 font-semibold">
                Venue
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Topaz+Marquee+Block+D-2+LDA+Sports+Complex+Johar+Town+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-800 font-body text-sm sm:text-base leading-relaxed flex items-start gap-2 hover:text-amber-700 transition-colors"
              >
                <MapPin size={16} className="flex-shrink-0 text-amber-600 mt-0.5" />
                <span>Topaz Marquee, Plot # 411–416, Block D-2, Behind LDA Sports Complex, Johar Town, Lahore</span>
              </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Baghi area - blends with gradient above, fireworks on top of image */}
          <div className="relative h-[170px] sm:h-[190px] flex-shrink-0 z-10 min-h-0 overflow-hidden">
            <BaghiAnimation />
          </div>
        </section>

        {/* ===== WALIMA + CLOSING ===== */}
        <section className="scroll-snap-section flex-shrink-0 min-w-full w-full h-screen relative flex flex-col overflow-hidden pb-safe-bar pt-4">
          {/* Same background as Barat */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${baratBg})`,
              backgroundSize: "auto 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#EEE9E5",
            }}
          />
          <ParallaxLayer scrollProgress={scrollXProgress} speed={0.12}>
            <FireworksBackground count={6} light />
          </ParallaxLayer>
          <ParallaxLayer scrollProgress={scrollXProgress} speed={0.06}>
            <FloatingButterflies count={14} />
          </ParallaxLayer>
          <ParallaxLayer scrollProgress={scrollXProgress} speed={0.04}>
            <FloatingRedFlowers count={14} />
          </ParallaxLayer>

          <motion.div className="relative z-20 flex-1 min-h-0 flex flex-col items-center justify-start px-6 py-3 pt-1 max-w-md mx-auto overflow-y-auto overflow-x-hidden" {...sectionAnim}>
            <h2
              className="font-display text-4xl sm:text-5xl mb-2 flex-shrink-0 font-bold tracking-wide"
              style={{
                background: "linear-gradient(135deg, hsl(45 95% 55%) 0%, hsl(30 75% 35%) 50%, hsl(38 80% 45%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Walima
            </h2>
            <OrnamentDivider />

            <div className="rounded-2xl p-[2px] mt-4 w-full card-animated-border flex-shrink-0">
              <div
                className="rounded-[14px] p-6 sm:p-8 relative overflow-hidden text-left"
                style={{
                  background: "linear-gradient(165deg, hsl(55 50% 97%) 0%, hsl(45 45% 93%) 25%, hsl(40 40% 90%) 50%, hsl(38 35% 88%) 75%, hsl(35 30% 85%) 100%)",
                }}
              >
                <div className="card-shimmer-overlay" aria-hidden />
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl sm:text-3xl flex-shrink-0">📅</span>
                  <p className="font-body text-base sm:text-lg font-medium text-amber-900 min-w-0">April 4, 2026 — Saturday</p>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl sm:text-3xl flex-shrink-0">🕕</span>
                  <p className="font-body text-base sm:text-lg font-medium text-amber-900 min-w-0">6:00 PM</p>
                </div>
                <div className="h-px my-4" style={{ background: "linear-gradient(90deg, transparent, hsl(43 60% 65% / 0.7), transparent)" }} />
                <p className="text-amber-800 font-body text-xs uppercase tracking-[0.2em] mb-2 font-semibold">Venue</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Royal+Palace+Rajhana+Road+Kamalia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-800 font-body text-sm sm:text-base leading-relaxed flex items-center gap-2 hover:text-amber-700 transition-colors"
                >
                  <MapPin size={16} className="flex-shrink-0 text-amber-600" />
                  Royal Palace, Rajhana Road, Kamalia
                </a>
              </div>
            </div>

            {/* Closing info */}
            <div className="mt-4 flex-shrink-0">
              <p className="text-amber-700 font-body text-sm mb-3">
                Looking forward to celebrating with all family members 💌
              </p>
            </div>

            <div className="mt-4">
              <ConfettiExplosion />
            </div>

            <motion.p
              className="font-arabic text-sm mt-4 flex-shrink-0"
              style={{ color: "hsl(43 50% 45%)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              جزاكم الله خيرا
            </motion.p>
          </motion.div>

          {/* Wedding car area - same animation style as Baghi */}
          <div className="relative h-[170px] sm:h-[190px] flex-shrink-0 z-10 min-h-0 overflow-hidden">
            <WeddingCarAnimation />
          </div>
        </section>
      </div>

      {/* Gradient shadow so swipe icons are always visible */}
      <div
        className="no-print fixed left-0 right-0 pointer-events-none z-40"
        style={{
          bottom: 0,
          height: "calc(10rem + env(safe-area-inset-bottom, 0px))",
          background: "linear-gradient(180deg, transparent 0%, hsl(30 20% 8% / 0.4) 40%, hsl(30 25% 6% / 0.7) 100%)",
        }}
      />
      {/* Bottom bar - extra offset on mobile for Safari nav bar; normal on desktop */}
      <div className="no-print fixed left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 gap-3 pointer-events-none [&>*]:pointer-events-auto bottom-bar-safe">
        <SwipeIndicator
          currentIndex={currentSection}
          totalSections={sectionLabels.length}
          onNavigate={navigateTo}
        />
        <div
          className="flex items-center gap-1.5 sm:gap-2 opacity-80 hover:opacity-100 transition-opacity rounded-full px-2 py-1.5 sm:px-3 sm:py-2 h-10 sm:h-11 flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, hsl(30 20% 12% / 0.6) 0%, hsl(30 25% 8% / 0.55) 100%)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 hsl(43 72% 52% / 0.2)",
          }}
        >
        <a
          href="tel:03008007152"
          className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold/70 hover:text-gold hover:border-gold transition-colors flex-shrink-0"
          title="Call on phone"
        >
          <Phone size={16} />
        </a>
        <a
          href="https://wa.me/923008007152"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center transition-colors hover:border-gold flex-shrink-0"
          title="Connect on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="#25D366">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Index;
