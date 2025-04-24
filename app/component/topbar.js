"use client";
import { useEffect, useState } from "react";
import {
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
  AiOutlineHome,
} from "react-icons/ai";
import {
  BsTrash3,
  BsFolder2,
  BsFilter,
  BsViewList,
  BsSortDown,
} from "react-icons/bs";
import { FaRegSquare, FaMinus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { PiFinnTheHumanBold } from "react-icons/pi";
import ThemeToggle from "./theamToggle";

export default function Topbar({ path, setPath, isFullScreen, setIsFullScreen, setShowWelcome }) {  
  const currentPath = path.join(" > ");

  const [history, setHistory] = useState([path]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update history if path changes externally
  useEffect(() => {
    if (JSON.stringify(history[currentIndex]) !== JSON.stringify(path)) {
      const updated = [...history.slice(0, currentIndex + 1), path];
      setHistory(updated);
      setCurrentIndex(updated.length - 1);
    }
  }, [path]);

  const goBack = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setPath(history[newIndex]);
    }
  };

  const goForward = () => {
    if (currentIndex < history.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setPath(history[newIndex]);
    }
  };

  const goUp = () => {
    if (path.length > 1) {
      const newPath = path.slice(0, path.length - 1);
      setPath(newPath);
    }
  };

  return (
    <div className="text-[var(--text)] rounded-lg rounded-b-none pb-1 h-full">
      <div className="w-full rounded-t-xl flex justify-between items-center px-2 pt-1 border-b-0">
        <div onClick={()=>window.location.reload()} className="flex items-center justify-center space-x-1 cursor-pointer">
          <PiFinnTheHumanBold className="ml-1" />
          <span className="text-md p-1 font-bold">Tirth's Portfolio</span>
        </div>

        <div className="flex items-center space-x-2 pr-1">
          <button title="Minimize" className="py-2 cursor-pointer hover:bg-[var(--hover)]" onClick={() => setShowWelcome(true)}>
            <FaMinus className="text-[var(--text)] mx-4 rounded text-sm" />
          </button>
          <button title="Maximize" className="py-2 cursor-pointer hover:bg-[var(--hover)]" onClick={() => isFullScreen ? setIsFullScreen(false) : setIsFullScreen(true)}>
            <FaRegSquare className="text-[var(--text)] mx-4 rounded text-sm" />
          </button>
          <button title="Close" className="py-1 cursor-pointer hover:bg-red-400 hover:text-white" onClick={() => setShowWelcome(true)}>
            <IoMdClose className="mx-4 rounded text-xl" />
          </button>
        </div>
      </div>

      <div className="w-full px-3 flex flex-col">
        {/* Top Row */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-3">
            <button className="p-2 cursor-pointer">
              <AiOutlinePlus size={16} className="opacity-50" />
            </button>
            <button className="p-2 cursor-pointer">
              <BsTrash3 size={16} className="opacity-50" />
            </button>
            <button className="p-2 cursor-pointer">
              <BsFolder2 size={16} className="opacity-50" />
            </button>
            <button className="p-2 cursor-pointer">
              <BsSortDown size={16} className="opacity-50" />
            </button>
            <button className="p-2 cursor-pointer">
              <BsViewList size={16} className="opacity-50" />
            </button>
            <button className="p-2 cursor-pointer">
              <BsFilter size={16} className="opacity-50" />
            </button>
              <ThemeToggle/>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex items-center justify-between mt-1 w-full">
          <div className="flex items-center space-x-4 w-full">
            <button title="Back" onClick={goBack} disabled={currentIndex === 0} className="cursor-pointer disabled:opacity-30 text-[var(--text)] py-1">
              <AiOutlineArrowLeft size={18} />
            </button>
            <button title="Forward" onClick={goForward} disabled={currentIndex === history.length - 1} className="cursor-pointer disabled:opacity-30 text-[var(--text)] py-1">
              <AiOutlineArrowRight size={18} />
            </button>
            <button title="Up" onClick={goUp} disabled={path.length <= 1} className="cursor-pointer disabled:opacity-30 text-[var(--text)] py-1">
              <AiOutlineArrowUp size={20} />
            </button>

            <div className="flex items-center w-full gap-1 text-sm px-2 py-1 rounded border border-gray-500">
              <AiOutlineHome size={14} className="mr-1" />
              <span>{currentPath}</span>
            </div>
          </div>

          <div className="relative w-64 ml-2">
            <input
              type="text"
              placeholder="Search Home"
              className="w-full text-sm px-3 py-1 rounded outline-none border border-gray-500"
            />
            <AiOutlineSearch className="absolute right-2 top-2 text-gray-500" size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
