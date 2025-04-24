"use client";
import Image from 'next/image';
import { IoMdClose } from "react-icons/io";
import { FaRegSquare, FaMinus } from "react-icons/fa";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData from "@/app/data/content"; // Assuming you have a file with the file data

export default function Photos({ openedFile, setOpenedFile }) {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setOpenedFile(null);
            setIsClosing(false);
        }, 300);
    };

    const animationVariants = {
        hidden: {
            opacity: 0,
            scale: 0.85,
            y: 30,
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
            },
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            y: 50,
            transition: {
                duration: 0.25,
                ease: "easeInOut",
            },
        },
    };

    console.log(portfolioData["SIH 2023"]);
    return (
        <AnimatePresence>
            {!isClosing && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={animationVariants}
                    className={`${isFullScreen ? "w-screen h-screen top-0 right-0" : "w-3/4 h-4/5 top-10 right-5"} absolute border-[var(--hover)] bg-[var(--bg)] rounded-lg shadow-2xl border flex flex-col font-sans z-50`}
                >
                    {/* Top Bar */}
                    <div className="flex justify-between items-center px-3 h-8 border-[var(--hover)] border-b text-[var(--text)] text-sm">
                        <div className="flex items-center space-x-3">
                            <span className="font-medium">Photos</span>
                            <span className="text-gray-500">{openedFile}.png</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button title='Minimize' onClick={handleClose} className="py-2 cursor-pointer hover:bg-[var(--hover)]">
                                <FaMinus className="text-[var(--text)] mx-4 rounded text-sm leading-none cursor-pointer" />
                            </button>
                            <button title='Maximize' onClick={() => setIsFullScreen(!isFullScreen)} className="py-2 cursor-pointer hover:bg-[var(--hover)]">
                                <FaRegSquare className="text-[var(--text)] mx-4 rounded text-sm leading-none" />
                            </button>
                            <button title='Close' onClick={handleClose} className="py-1 cursor-pointer hover:bg-red-400 hover:text-white">
                                <IoMdClose size={18} className="mx-4 rounded text-sm leading-none cursor-pointer" />
                            </button>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="flex flex-1 items-center justify-center px-4 py-2 text-[var(--text)] text-sm whitespace-pre-wrap overflow-auto space-y-4">
                        {(
                            <Image
                                src={portfolioData[openedFile].src}
                                alt="Preview"
                                height={800}
                                width={700}
                                className="object-contain h-fit"
                            />
                        )}
                    </div>

                    {/* Status Bar */}
                    <div className="h-7 px-3 text-xs text-[var(--text)] flex items-center justify-end border-t border-[var(--hover)]">
                        <div className="flex gap-4">
                            <span>100%</span>
                            <span>Windows (CRLF)</span>
                            <span>UTF-8</span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
