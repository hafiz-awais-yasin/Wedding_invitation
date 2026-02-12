/**
 * iPhone mockup frame with iframe for the mobile app.
 * Screen rect derived from mockup.svg viewBox 0 0 1424 2956:
 * - Mask/screen: x=26, y=18, w=1372, h=2920, rx=212
 */

export interface DesktopPhoneFrameProps {
  src: string;
  isDesktop?: boolean;
  className?: string;
}

const MOCKUP_VIEWBOX = { w: 1424, h: 2956 };
const SCREEN = { x: 26, y: 18, w: 1372, h: 2920, rx: 212 };

const leftPct = (SCREEN.x / MOCKUP_VIEWBOX.w) * 100;
const topPct = (SCREEN.y / MOCKUP_VIEWBOX.h) * 100;
const widthPct = (SCREEN.w / MOCKUP_VIEWBOX.w) * 100;
const heightPct = (SCREEN.h / MOCKUP_VIEWBOX.h) * 100;
const radiusPctW = (SCREEN.rx / MOCKUP_VIEWBOX.w) * 100;
const radiusPctH = (SCREEN.rx / MOCKUP_VIEWBOX.h) * 100;

export const DesktopPhoneFrame = ({
  src,
  isDesktop = true,
  className = "",
}: DesktopPhoneFrameProps) => {
  const iframeSrc = isDesktop ? `${src}${src.includes("?") ? "&" : "?"}desktop=true` : src;

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <div
        className="relative w-full bg-transparent"
        style={{
          aspectRatio: `${MOCKUP_VIEWBOX.w} / ${MOCKUP_VIEWBOX.h}`,
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      >
        <img
          src="/mockup.svg"
          alt="iPhone mockup"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
          draggable={false}
        />
        <div
          className="absolute overflow-hidden"
          style={{
            left: `${leftPct}%`,
            top: `${topPct}%`,
            width: `${widthPct}%`,
            height: `${heightPct}%`,
            borderRadius: `${radiusPctW}% / ${radiusPctH}%`,
          }}
        >
          <iframe
            src={iframeSrc}
            title="Wedding invitation"
            className="w-full h-full border-0 block"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          />
        </div>
      </div>
    </div>
  );
};
