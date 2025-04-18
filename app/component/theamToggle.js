"use client";
import { useEffect, useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      root.classList.add("light-theme");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    }
    setIsDark(!isDark);
  };

  return (
    <>
      <button className="p-2 cursor-pointer" onClick={toggleTheme} title="Theme">
        {isDark ? (
          <MdOutlineDarkMode className="text-2xl text-gray-800" size={19} />
        ) : (
          <MdOutlineLightMode className="text-2xl text-gray-200" size={19} />
        )}
      </button>
    </>
  );
}
