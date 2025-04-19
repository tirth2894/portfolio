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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg)]/60 backdrop-blur-sm">
      <div className="bg-[var(--bg)] text-[var(--text)] rounded-2xl p-6 max-w-xs shadow-lg text-center space-y-4">
        <h2 className="text-xl font-semibold">Desktop Recommended</h2>
        <p className="text-sm text-[var(--text)]">
          This portfolio is optimized for desktop view. For the best experience, please open it on a larger screen.
        </p>
      </div>
    </div>
  );
}
