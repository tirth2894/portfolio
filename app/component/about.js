'use client';
import { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import NotepadWindow from "./notePad"; 

export default function About() {
  const files = [
    "Intro",
    "Skills & Activities",
    "Contact",
  ];

  const [openedFile, setOpenedFile] = useState(null);

  return (
    <div className="h-full p-2">
      {/* File icons */}
      <div className="flex flex-wrap gap-3">
        {files.map((file, index) => (
          <div
            key={index}
            className="w-28 py-3 rounded flex flex-col items-center hover:bg-[var(--hover)] transition text-center cursor-pointer select-none"
            onDoubleClick={() => setOpenedFile(file)}
            title={'Double click to open'}
          >
            <FaFileAlt className="text-blue-600 text-5xl mb-2"/>

            <span className="text-xs break-words">{file}</span>
          </div>
        ))}
      </div>

      {/* Notepad-style popup */}
      {openedFile && (
        <NotepadWindow openedFile={openedFile} setOpenedFile={setOpenedFile} />
      )}
    </div>
  );
}
