"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import avatar from "@/public/images/tirth.jpg"; // Replace with your own image

export default function welcomeScreen({ onSkip }) {
  const [time, setTime] = useState(new Date());
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedDate = time.toLocaleDateString("en-GB", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const handleUnlock = () => {
    setExit(true);
    setTimeout(() => onSkip(), 1000);
  };

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center "
          onClick={handleUnlock}
        >
          <div className="z-10 flex flex-col justify-center items-center text-white space-y-1 h-full">
            <div className="text-lg ">{formattedDate}</div>
            <div className="text-5xl font-bold">{formattedTime}</div>

            <div className="mt-10 p-6 flex flex-col items-center space-y-3 ">
              <Image
                src={avatar}
                alt="User"
                width={100}
                height={100}
                className="rounded-full border-2 border-white/20 shadow-lg"
              />
              <div className="flex flex-col items-center">
                <p className="font-medium text-lg">Tirth Patel</p>
                <p className="text-sm text-gray-300">A Full stack developer</p>
              </div>
              <button className="mt-4 px-4 py-1 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-md border border-white/20 transition-all duration-300">
                Sign in
              </button>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
