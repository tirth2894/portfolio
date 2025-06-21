"use client";
import { useEffect, useState } from "react";

export default function MobileWarning() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg)]/10 backdrop-blur-sm">
  <div className="bg-[var(--bg)] text-[var(--text)] rounded-2xl p-8 max-w-sm w-[90%] shadow-2xl text-center space-y-5">
    <h2 className="text-2xl font-bold">Optimized for larger screens</h2>
    <p className="text-sm text-[var(--text-muted)]">
      This portfolio is designed for larger screens to ensure the best visual and interactive experience.
      Please switch to a desktop or tablet device to explore it fully.
    </p>
  </div>
</div>

  );
}
