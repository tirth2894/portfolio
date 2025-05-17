"use client";
import { useEffect, useState, useRef } from "react";
import {
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
  AiOutlineHome,
  AiOutlinePicture
} from "react-icons/ai";
import {
  BsTrash3,
  BsFolder2,
  BsFilter,
  BsViewList,
  BsSortDown,
  BsFileEarmarkText
} from "react-icons/bs";
import { BiLogoGmail, BiLogoInstagramAlt } from "react-icons/bi";
import { FaRegSquare, FaMinus, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { LiaDownloadSolid } from "react-icons/lia";
import { PiFinnTheHumanBold } from "react-icons/pi";
import ThemeToggle from "./theamToggle";
import portfolioData from "../data/content";
import NotepadWindow from "./notePad";
import Photos from "./photos";


export default function Topbar({ path, setPath, isFullScreen, setIsFullScreen, setShowWelcome }) {
  const currentPath = path.join(" > ");

  const [history, setHistory] = useState([path]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [openedFile, setOpenedFile] = useState(null);

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    if (isProfileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileOpen]);

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

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();

    const results = Object.entries(portfolioData)
      .filter(([key, value]) => {
        const keyMatch = key.toLowerCase().includes(lowerQuery);
        const sectionMatch = value.section?.toLowerCase().includes(lowerQuery);
        const contentMatch =
          value.type === "text" &&
          value.data?.some(
            item =>
              item.title?.toLowerCase().includes(lowerQuery) ||
              item.description?.toLowerCase().includes(lowerQuery)
          );
        return keyMatch || sectionMatch || contentMatch;
      })
      .map(([key, value]) => ({
        key,
        type: value.type,
      }));

    setSearchResults(results);
  };


  return (
    <div className="text-[var(--text)] rounded-lg rounded-b-none pb-1 h-full">
      <div className="w-full rounded-t-xl flex justify-between items-center px-2 pt-1 border-b-0">
        <div onClick={() => window.location.reload()} className="flex items-center justify-center space-x-1 cursor-pointer">
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
        <div className="flex items-center justify-between text-sm py-0.5">
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
            <ThemeToggle />

          </div>
          <div className="relative flex items-center justify-center" >
            <div ref={profileRef}>
              <button
                title="Tirth Profile"
                className="bg-purple-400 px-4 py-1 rounded-md flex items-center justify-center space-x-1 cursor-pointer text-[var(--text)]"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <span>CV</span>
                <LiaDownloadSolid size={20}/>
              </button>

              {isProfileOpen && (
                <div className="absolute top-5 right-0 mt-2 w-80 bg-[var(--bg)]/70 backdrop-blur-lg shadow-2xl rounded-2xl p-6 animate-fade-in z-60 flex flex-col items-center space-y-5">
                  {/* Profile Picture */}
                  <img
                    src="/images/uphoto.webp"
                    alt="Tirth Patel"
                    className="w-32 h-32 rounded-full object-cover"
                  />

                  {/* Name & Email */}
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-[var(--text)]">Tirth Patel</h2>
                    <p className="text-sm text-[var(--text)] opacity-80">tirthptl2894@gmail.com</p>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-5 text-[var(--text)]">
                    <a
                      href="mailto:tirth@example.com"
                      title="Email"
                      className="transition-opacity opacity-70 hover:opacity-100"
                    >
                      <BiLogoGmail size={22} />
                    </a>
                    <a
                      href="https://github.com/tirth2894"
                      title="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity opacity-70 hover:opacity-100"
                    >
                      <FaGithub size={22} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tirth-patel-0a5a18257"
                      title="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity opacity-70 hover:opacity-100"
                    >
                      <FaLinkedin size={22} />
                    </a>
                    <a
                      href="https://www.instagram.com/_tirth_patel_04_?igsh=MXdraGE4M2lpazE2bQ=="
                      title="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity opacity-70 hover:opacity-100"
                    >
                      <BiLogoInstagramAlt size={22} />
                    </a>
                  </div>

                  {/* Download CV */}
                  <a
                    href="/resources/cv.pdf"
                    download
                    className="w-full flex items-center justify-center"
                  >
                    <button className="w-full opacity-90 hover:opacity-100 py-2 rounded-md text-sm font-medium bg-purple-400 cursor-pointer transition-all">Download CV</button>
                  </a>
                </div>


              )}
            </div>

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
              <AiOutlineHome size={14} className="mr-1 cursor-pointer" onClick={()=>setPath(["Home"])} />
              <span>{currentPath}</span>
            </div>
          </div>

          <div className="relative w-64 ml-2">
            <input
              type="text"
              placeholder="Search Home"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full text-sm px-3 py-1 rounded outline-none border border-gray-500"
            />
            <AiOutlineSearch className="absolute right-2 top-2 text-gray-500" size={16} />

            {searchResults.length > 0 && (
              <div className="absolute left-0 w-full bg-[var(--bg)] shadow-2xl border border-[var(--hover)] z-50">
                {searchResults.map(({ key, type }) => (
                  <div
                    key={key}
                    onClick={() => {
                      if (type === "text") {
                        setOpenedFile({ key, type });
                      } else if (type === "image") {
                        setOpenedFile({ key, type });
                      }
                      setSearchQuery("");
                      setSearchResults([]);
                    }}
                    className="px-3 py-2 hover:bg-[var(--hover)] border-b-2 border-[var(--hover)] cursor-pointer text-sm flex justify-between"
                  >
                    <span className="flex items-center max-w-full space-x-2 overflow-hidden">
                      {type === "text" ? (
                        <BsFileEarmarkText size={16} className="text-blue-600 shrink-0" />
                      ) : (
                        <AiOutlinePicture size={16} className="text-emerald-600 shrink-0" />
                      )}
                      <span className="truncate block">{key}</span>
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {
        openedFile && openedFile.type === "text" && (
          <NotepadWindow
            openedFile={openedFile.key}
            setOpenedFile={setOpenedFile}
          />
        )
      }
      {
        openedFile && openedFile.type === "image" && (
          <Photos
            openedFile={openedFile.key}
            setOpenedFile={setOpenedFile}
          />
        )
      }
    </div>
  );
}
