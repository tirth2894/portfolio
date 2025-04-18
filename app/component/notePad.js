"use client";
import { IoMdClose } from "react-icons/io";
import { FaRegSquare, FaMinus } from "react-icons/fa";
import portfolioData from "../data/content"; // Adjust path as needed
import { useState } from "react";

export default function NotepadWindow({ openedFile, setOpenedFile }) {
    const contentKey = openedFile;
    const content = portfolioData[contentKey];
    const [isFullScreen, setIsFullScreen] = useState(false);

    return (
        <div className={`${isFullScreen ? "w-full h-full top-0 right-0" : "w-3/4 h-4/5 top-10 right-5"} absolute border-[var(--hover)] bg-[var(--bg)] rounded-lg shadow-2xl border flex flex-col font-sans z-50`}>

            {/* Top Bar */}
            <div className="flex justify-between items-center px-3 h-8 border-[var(--hover)] bg-[var(--bg)] border-b text-[var(--text)] text-sm">
                <div className="flex items-center space-x-3">
                    <span className="font-medium">Notepad</span>
                    <span className="text-gray-400">{openedFile}.txt</span>
                </div>
                <div className="flex items-center space-x-2">
                    <button title="Minimize" onClick={() => setOpenedFile(null)} className="py-2 cursor-pointer hover:bg-[var(--hover)]">
                        <FaMinus className="text-[var(--text)] mx-4 rounded text-sm leading-none cursor-pointer" />
                    </button>
                    <button title="Maximize" onClick={() => isFullScreen ? setIsFullScreen(false) : setIsFullScreen(true)} className="py-2 cursor-pointer hover:bg-[var(--hover)]">
                        <FaRegSquare className="text-[var(--text)] mx-4 rounded text-sm leading-none" />
                    </button>
                    <button title="Close" onClick={() => setOpenedFile(null)} className="py-1 cursor-pointer hover:bg-red-400 hover:text-white">
                        <IoMdClose size={18} className="mx-4 rounded text-sm leading-none cursor-pointer" />
                    </button>
                </div>
            </div>

            {/* Menu Bar */}
            <div className="flex px-4 h-7 text-sm items-center border-b border-[var(--hover)] bg-[var(--bg)] text-[var(--text)] space-x-6">
                <span className="cursor-default opacity-50">File</span>
                <span className="cursor-default opacity-50">Edit</span>
                <span className="cursor-default opacity-50">View</span>
            </div>

            {/* Text Content */}
            <div className="flex-1 px-4 py-2 bg-[var(--bg)] font-mono text-[var(--text)] text-sm whitespace-pre-wrap overflow-auto space-y-4">
                {Array.isArray(content) ? (
                    content.map((section, idx) => (
                        <div key={idx} className="mb-7">
                            <div className="text-lg font-bold mb-1">{section.title}:</div>
                            {section.description && (
                                <div className="text-sm text-[var(--text)]">{section.description}</div>
                            )}
                            {section.links && (
                                <div className="mt-2 flex flex-wrap gap-3">
                                    {section.links.map((link, index) => (
                                        <button
                                            key={index}
                                            onClick={() => window.open(link.url, "_blank")}
                                            className="bg-blue-500 text-white text-xs px-4 py-2 rounded-md shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer"
                                        >
                                            {link.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))
                ) : content ? (
                    <div>
                        <div className="text-lg font-bold mb-1">{content.title}</div>
                        <div className="text-sm text-[var(--text)]">{content.description}</div>
                        {content.links && (
                            <div className="mt-2 flex flex-wrap gap-3 text-blue-500 text-xs">
                                {content.links.map((link, index) => (
                                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-400">
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-sm text-gray-400">No content found.</div>
                )}
            </div>

            {/* Status Bar */}
            <div className="h-7 px-3 text-xs text-[var(--text)] flex items-center justify-between border-t border-[var(--hover)] bg-[var(--bg)]">
                <div>Ln 1, Col 1</div>
                <div className="flex gap-4">
                    <span>100%</span>
                    <span>Windows (CRLF)</span>
                    <span>UTF-8</span>
                </div>
            </div>
        </div>
    );
}
