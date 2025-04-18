import Image from 'next/image';
import { IoMdClose } from "react-icons/io";
import { FaRegSquare, FaMinus } from "react-icons/fa";
import { useState } from 'react';
import certificate1 from "../images/certi1.jpeg";
import certificate2 from "../images/certi2.jpg";


export default function Photos({ openedFile, setOpenedFile }) {
    const [isFullScreen, setIsFullScreen] = useState(false);
    let src = null;

    switch (openedFile) {
        case "Certificate1":
            src = certificate1;
            break;
        case "Certificate2":
            src = certificate2;
            break;

        default:
            break;
    }
    // Construct the image path dynamically using the openedFile value

    return (
        <div className={`${isFullScreen ? "w-full h-full top-0 right-0" : "w-3/4 h-4/5 top-10 right-5"} absolute border-[var(--hover)] bg-[var(--bg)] rounded-lg shadow-2xl border flex flex-col font-sans z-50`}>

            {/* Top Bar */}
            <div className="flex justify-between items-center px-3 h-8 border-[var(--hover)] bg-[var(--bg)] border-b text-[var(--text)] text-sm">
                <div className="flex items-center space-x-3">
                    <span className="font-medium">Photos</span>
                    <span className="text-gray-400">{openedFile}.png</span>
                </div>
                <div className="flex items-center space-x-2">
                    <button title='Minimize' onClick={() => setOpenedFile(null)} className="py-2 cursor-pointer hover:bg-[var(--hover)]">
                        <FaMinus className="text-[var(--text)] mx-4 rounded text-sm leading-none cursor-pointer" />
                    </button>
                    <button title='Maximize' onClick={() => isFullScreen ? setIsFullScreen(false) : setIsFullScreen(true)} className="py-2 cursor-pointer hover:bg-[var(--hover)]">
                        <FaRegSquare className="text-[var(--text)] mx-4 rounded text-sm leading-none" />
                    </button>
                    <button title='Close' onClick={() => setOpenedFile(null)} className="py-1 cursor-pointer hover:bg-red-400 hover:text-white">
                        <IoMdClose size={18} className="mx-4 rounded text-sm leading-none cursor-pointer" />
                    </button>
                </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-1 items-center justify-center px-4 py-2 bg-[var(--bg)] font-mono text-[var(--text)] text-sm whitespace-pre-wrap overflow-auto space-y-4">
                <Image
                    src={src}
                    alt="Preview"
                    width={700}
                    className="object-contain"
                />
            </div>

            {/* Status Bar */}
            <div className="h-7 px-3 text-xs text-[var(--text)] flex items-center justify-end border-t border-[var(--hover)] bg-[var(--bg)]">
                <div className="flex gap-4">
                    <span>100%</span>
                    <span>Windows (CRLF)</span>
                    <span>UTF-8</span>
                </div>
            </div>
        </div>

    );
}
