"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import uphoto from "@/public/images/uphoto.webp"; // Adjust the path as necessary

export default function WelcomeScreen({ onSkip }) {
  const [showMessage, setShowMessage] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      onSkip();
    }, 800); // Matches the animation duration
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          onClick={handleClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex h-screen w-screen items-center justify-center select-none overflow-hidden text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4 z-10">
            {/* Left: Text Content */}
            <div className="text-center md:text-left max-w-xl">
              <motion.h1
                transition={{ delay: 0.8, duration: 1 }}
                className="text-4xl md:text-5xl font-bold tracking-tight drop-shadow-md"
              >
                Welcome to <span className="text-[#9494d1]">Tirth's</span> Portfolio
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: showMessage ? 1 : 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-gray-300 mt-4 text-base md:text-lg"
              >
                A passionate developer & designer who loves to create beautiful and functional web applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showMessage ? 1 : 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-8 flex items-center justify-center md:justify-start gap-2 text-sm md:text-base text-white font-medium animate-pulse"
              >
                Click here to explore my portfolio
                <FaArrowRight size={16} />
              </motion.div>
            </div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showMessage ? 1 : 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="md:ml-8 w-98 h-98"
            >
              <Image
                src={uphoto}
                alt="Certificate preview"
                className="rounded-xl w-full h-full object-cover"
                priority={true}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
