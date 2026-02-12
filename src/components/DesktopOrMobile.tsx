import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { DesktopShell } from "./DesktopShell";
import Index from "@/pages/Index";

const DESKTOP_BREAKPOINT = 768;

export const DesktopOrMobile = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== "undefined" && window.innerWidth > DESKTOP_BREAKPOINT);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth > DESKTOP_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const forcePhone = location.pathname === "/phone" || searchParams.get("device") === "phone";
  const isDesktopIframe = searchParams.get("desktop") === "true";

  if (isDesktop && !forcePhone) {
    return <DesktopShell />;
  }

  return <Index isDesktopIframe={isDesktopIframe} />;
};
