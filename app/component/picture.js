"use client";
import { useState } from 'react';
import { FaRegImage } from 'react-icons/fa';
import Photos from './photos';

export default function Picture() {
  const [openedFile, setOpenedFile] = useState(null);

  const images = [
    "Certificate1",
    "Certificate2",
  ];

  return (
    <div className="h-full p-1">
      <div className="flex flex-wrap gap-3">
        {images.map((file, index) => (
          <div
            key={index}
            className="w-28 py-3 rounded flex flex-col items-center hover:bg-[var(--hover)] transition text-center cursor-pointer select-none"
            onDoubleClick={() => setOpenedFile(file)}
            title={'Double click to open'}
          >
            <FaRegImage className="text-purple-600 text-5xl mb-2" />
            <span className="text-xs break-words">{file}</span>
          </div>
        ))}
      </div>

      {openedFile && (
        <Photos openedFile={openedFile} setOpenedFile={setOpenedFile} />
      )}
    </div>
  );
}
