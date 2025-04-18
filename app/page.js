"use client";
import dynamic from "next/dynamic";

// Lazy loaded components
const About = dynamic(() => import("./component/about"));
const Projects = dynamic(() => import("./component/project"));
const Picture = dynamic(() => import("./component/picture"));

// Eager load lightweight ones
import WelcomeScreen from "./component/welcomeScreen";
import Topbar from "./component/topbar";
import Sidebar from "./component/sideBar";
import HomePage from "./component/home";
import { useState } from "react";

export default function Home() {
  const [currentPath, setCurrentPath] = useState(["Home"]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const renderPage = () => {
    const folder = currentPath[1];

    switch (folder) {
      case "About":
        return <About />;
      case "Pictures":
        return <Picture />;
      case "Projects":
        return <Projects />;
      default:
        return <HomePage onNavigate={(name) => setCurrentPath(["Home", name])} />;
    }
  };

  return showWelcome ? (
    <WelcomeScreen onSkip={() => setShowWelcome(false)} />
  ) : (
    <main
      className={`${isFullScreen ? "p-0" : "px-12 py-7"
        } flex h-screen w-screen items-center justify-center select-none overflow-hidden`}
    >
      <div className="w-full h-full shadow-xl border-1 border-gray-700 rounded-lg flex flex-col overflow-hidden">
        <div className="h-28">
          <Topbar
            path={currentPath}
            setPath={setCurrentPath}
            isFullScreen={isFullScreen}
            setIsFullScreen={setIsFullScreen}
            setShowWelcome={setShowWelcome}
          />
        </div>
        <div className="flex flex-1 overflow-hidden">
          <Sidebar
            activeItem={currentPath[1]}
            onSelect={(folder) =>
              folder === null
                ? setCurrentPath(["Home"])
                : setCurrentPath(["Home", folder])
            }
          />
          <div className="flex-1 bg-[var(--bg)] text-[var(--text)] overflow-auto p-4">
            {renderPage()}
          </div>
        </div>
      </div>
    </main>
  );
}
