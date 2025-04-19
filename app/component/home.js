"use client";
import {
  AiOutlineDesktop,
  AiOutlineFolder,
  AiOutlinePicture,
} from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";
import { useState } from "react";
import NotepadWindow from "./notePad";
import Photos from './photos';

export default function HomePage({ onNavigate }) {

  const [openedFile, setOpenedFile] = useState(null);

  const pinnedFolders = [
    {
      name: "About",
      location: "TirthDrive",
      icon: <AiOutlineDesktop className="text-blue-500 text-3xl" />,
    },
    {
      name: "Pictures",
      location: "TirthDrive",
      icon: <AiOutlinePicture className="text-purple-600 text-3xl" />,
    },
    {
      name: "Projects",
      location: "TirthDrive",
      icon: <AiOutlineFolder className="text-yellow-600 text-3xl" />,
    },
  ];

  const pinnedFiles = [
    {
      name: "Intro",
      type: "text",
      path: "Home\\About",
      icon: <BsFileEarmarkText size={16} className="text-gray-500" />,
    },
    {
      name: "Skills & Activities",
      type: "text",
      path: "Home\\About",
      icon: <BsFileEarmarkText size={16} className="text-gray-500" />,
    },
    {
      name: "Contact",
      type: "text",
      path: "Home\\About",
      icon: <BsFileEarmarkText size={16} className="text-gray-500" />,
    },
    {
      name: "Attendence System",
      type: "text",
      path: "Home\\Projects",
      icon: <BsFileEarmarkText size={16} className="text-gray-500" />,
    },
    {
      name: "Collab",
      type: "text",
      path: "Home\\Projects",
      icon: <BsFileEarmarkText size={16} className="text-gray-500" />,
    },
    {
      name: "Cityscape Challenges",
      type: "text",
      path: "Home\\Projects",
      icon: <BsFileEarmarkText size={16} className="text-gray-500" />,
    },
    {
      name: "Certificate1",
      type: "image",
      path: "Home\\Pictures",
      icon: <AiOutlinePicture size={16} className="text-gray-500" />,
    },
    {
      name: "Certificate2",
      type: "image",
      path: "Home\\Pictures",
      icon: <AiOutlinePicture size={16} className="text-gray-500" />,
    },
    {
      name: "Certificate3",
      type: "image",
      path: "Home\\Pictures",
      icon: <AiOutlinePicture size={16} className="text-gray-500" />,
    }

  ];

  return (
    <div className="w-full px-4">
      {/* Pinned Folders */}
      <h2 className="text-sm text-gray-500 mb-2 font-semibold">Pinned folders</h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
        {pinnedFolders.map((folder, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[var(--hover)] rounded p-2"
            onDoubleClick={() => onNavigate(folder.name)}
            title={'Double click to open'}
          >
            {folder.icon}
            <span className="text-sm font-medium mt-1">{folder.name}</span>
            <span className="text-xs text-gray-500">{folder.location}</span>
          </div>
        ))}
      </div>

      {/* Recent Files */}
      <h2 className="text-sm text-gray-500 mb-2 font-semibold">Recent files</h2>
      <div className="grid grid-cols-[1fr_1fr_1fr] gap-2">
        <div className="text-xs font-semibold text-gray-500 pl-1">Name</div>
        <div className="text-xs font-semibold text-gray-500">Path</div>
        <div className="text-xs font-semibold text-gray-500">Type</div>
      </div>
      <div className="flex flex-col divide-y divide-[var(--hover)]">
        {pinnedFiles.map((file, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[1fr_1fr_1fr] gap-2 items-center py-2 px-1 hover:bg-[var(--hover)] cursor-pointer rounded"
            onDoubleClick={() => setOpenedFile(file)}
            title={'Double click to open'}
          >
            <div className="flex items-center gap-2">
              {file.icon}
              <span className="text-sm">{file.name}</span>
            </div>
            <span className="text-xs text-gray-500">{file.path}</span>
            <span className="text-xs text-gray-500">{file.type}</span>
          </div>
        ))}
      </div>


      {openedFile && openedFile.type === "text" && (
        <NotepadWindow openedFile={openedFile.name} setOpenedFile={setOpenedFile} />
      )}
      {openedFile && openedFile.type === "image" && (
        <Photos openedFile={openedFile.name} setOpenedFile={setOpenedFile} />
      )}
    </div>
  );
}
