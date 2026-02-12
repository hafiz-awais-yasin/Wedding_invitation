import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { DesktopPhoneFrame } from "./DesktopPhoneFrame";

const PHONE_NUMBER = "03008007152";
const WHATSAPP_NUMBER = "923008007152";

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export const DesktopShell = () => {
  const iframeSrc = "/phone?device=phone";

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 lg:p-10 relative overflow-hidden">
      {/* Soft gradient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"
          style={{ background: "radial-gradient(circle, hsl(43 72% 52% / 0.15) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"
          style={{ background: "radial-gradient(circle, hsl(43 72% 52% / 0.12) 0%, transparent 70%)" }}
        />
      </div>

      <div className="w-full max-w-[min(1600px,95vw)] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16 relative z-10">
        {/* Left: Wedding invitation with animations */}
        <div className="flex-shrink-0 text-center lg:text-left order-2 lg:order-1 max-w-md relative">
          <div
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-24 sm:h-32 rounded-full opacity-40"
            style={{
              background: "linear-gradient(180deg, transparent, hsl(43 72% 52% / 0.6), hsl(43 72% 52% / 0.3), transparent)",
            }}
          />
          <motion.p
            className="font-arabic text-base sm:text-lg mb-3"
            style={{ color: "hsl(43 70% 45%)" }}
            {...fadeInUp(0.1)}
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </motion.p>
          <motion.p
            className="font-body text-xs sm:text-sm mb-4 leading-relaxed tracking-[0.15em] uppercase font-semibold text-amber-900"
            {...fadeInUp(0.2)}
          >
            You are cordially invited to the wedding of
          </motion.p>
          <motion.h2
            className="text-gold-dark font-display text-2xl sm:text-3xl font-bold tracking-wide"
            {...fadeInUp(0.3)}
          >
            Hafiz Awais Yasin
          </motion.h2>
          <motion.p
            className="text-amber-800 text-lg sm:text-xl mt-1 italic font-medium"
            {...fadeInUp(0.35)}
          >
            Weds
          </motion.p>
          <motion.h2
            className="text-gold-dark font-display text-2xl sm:text-3xl font-bold tracking-wide"
            {...fadeInUp(0.4)}
          >
            Miral Fatima
          </motion.h2>
          <motion.div
            className="flex items-center justify-center lg:justify-start gap-2 my-4"
            {...fadeInUp(0.5)}
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold/50" />
            <span className="text-gold text-lg">✦</span>
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-gold/70 text-sm">☪</span>
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-gold text-lg">✦</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-gold/50" />
          </motion.div>
          <motion.p
            className="font-arabic text-xs sm:text-sm leading-relaxed"
            style={{ color: "hsl(43 60% 40%)" }}
            {...fadeInUp(0.6)}
          >
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
          </motion.p>
        </div>

        {/* Center: iPhone mockup - fixed height 650px, width from aspect ratio */}
        <div
          className="flex-shrink-0 flex items-center justify-center order-1 lg:order-2 h-[790px] w-auto max-w-full max-h-[90vh]"
          style={{ aspectRatio: "1424 / 2956" }}
        >
          <DesktopPhoneFrame src={iframeSrc} isDesktop className="w-full h-full object-contain" />
        </div>

        {/* Right: Contact with animations */}
        <div className="flex-shrink-0 flex flex-col items-center lg:items-start gap-5 order-3 relative">
          <div
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-24 sm:h-32 rounded-full opacity-40"
            style={{
              background: "linear-gradient(180deg, transparent, hsl(43 72% 52% / 0.6), hsl(43 72% 52% / 0.3), transparent)",
            }}
          />
          <motion.div className="text-center lg:text-left" {...fadeInUp(0.2)}>
            <p className="text-amber-800 font-display text-lg font-semibold">Get in touch</p>
            <p className="text-neutral-700 text-sm mt-1 max-w-[200px] font-medium">
              We'd love to hear from you. Call or message us for any queries.
            </p>
          </motion.div>
          <motion.div className="flex items-center gap-3" {...fadeInUp(0.3)}>
            <motion.a
              href={`tel:${PHONE_NUMBER}`}
              className="w-12 h-12 rounded-full border-2 border-gold/50 flex items-center justify-center text-gold-dark bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              title="Call"
              whileHover={{ scale: 1.08, borderColor: "hsl(43 72% 52%)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={22} />
            </motion.a>
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-gold/50 flex items-center justify-center bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              title="WhatsApp"
              whileHover={{ scale: 1.08, borderColor: "hsl(43 72% 52%)" }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </motion.a>
          </motion.div>
          <motion.p
            className="text-neutral-600 text-xs italic font-medium"
            {...fadeInUp(0.4)}
          >
            Swipe the invite to explore
          </motion.p>
        </div>
      </div>
    </div>
  );
};
