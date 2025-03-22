import React, { useState, useEffect, useCallback, useRef, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CiShare1 = lazy(() => import("react-icons/ci").then((mod) => ({ default: mod.CiShare1 })));

const projectsData = [
  { id: 1, title: "Cityscape Challenges", description: "Embark on an urban adventure, where players complete missions to uncover hidden treasures.", demo: "https://tirth2894.github.io/Cityscape_Challenge/" },
  { id: 2, title: "Homotrack", description: "A blood bank management system designed to streamline blood donation and distribution.", demo: "https://homotracks.wuaze.com" },
  { id: 3, title: "Attendance System", description: "An attendance management system built to streamline and accurately track attendance records.", demo: "#" },
];

function EducationProjects() {
  const [projects, setProjects] = useState(projectsData);
  const intervalRef = useRef(null);
  const [randomRotations] = useState(projectsData.map(() => (Math.random() - 0.7) * 15));
  const [isHovered, setIsHovered] = useState(false);

  const shuffleProjects = useCallback((draggedIndex = null) => {
    setProjects((prev) => {
      let shuffled = [...prev];
      if (draggedIndex !== null) {
        const draggedCard = shuffled.splice(draggedIndex, 1)[0];
        shuffled.push(draggedCard);
      } else if (!isHovered) {
        shuffled.push(shuffled.shift());
      }
      return shuffled;
    });
  }, [isHovered]);

  useEffect(() => {
    intervalRef.current = setInterval(() => shuffleProjects(), 3000);
    return () => clearInterval(intervalRef.current);
  }, [shuffleProjects]);

  return (
    <div className="flex flex-wrap justify-evenly">
      <div className="backdrop-blur-2xl w-full md:w-1/3 mx-3 my-3 bg-[#15374d]/80 rounded-2xl min-h-[25rem]" id="project">
        <p className="text-center text-2xl md:text-3xl m-4">Projects</p>
        <div 
          className="flex justify-center items-center relative h-[17rem]"
          
        >
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`w-[16rem] h-[15rem] flex flex-col justify-between absolute top-10 rounded-lg shadow-lg cursor-pointer p-4 ${index === 0 ? "bg-primary" : "bg-white/10"}`}
                style={{ zIndex: projects.length - index }}
                drag
                dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
                dragElastic={0.15}
                onDragStart={() => setIsHovered(true)}
                onDragEnd={(event, info) => {
                  setIsHovered(false);
                  if (Math.abs(info.offset.x) > 80 || Math.abs(info.offset.y) > 80) {
                    shuffleProjects(index);
                  }
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ opacity: 0, scale: 0.95, y: index * -12, rotate: randomRotations[index] }}
                animate={{ opacity: 1, scale: index === 0 ? 1.05 : 1, y: index * -12,x: 0, rotate: randomRotations[index] }}
                exit={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <p className="text-xl font-bold mb-1">{project.title}</p>
                <p>{project.description}</p>
                <div className="flex items-center mt-3">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-full">
                    <button className="w-full border-2 border-white p-1 rounded-lg hover:bg-white hover:text-secondary flex items-center justify-center">
                      Let's Try <Suspense fallback={<span>...</span>}><CiShare1 className="h-5 w-5 ml-2" /></Suspense>
                    </button>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="backdrop-blur-2xl w-full md:w-3/5 mx-3 my-3 bg-[#15374d]/80 rounded-2xl" id="education">
        <p className="text-center text-2xl md:text-3xl m-4">Education</p>
        <ol className="relative border-s border-gray-600 px-4 mx-5">
          {[
            { year: "March 2019-20", title: "SSC", location: "Ahmedabad, Gujarat" },
            { year: "March 2021-22", title: "HSC", location: "Ahmedabad, Gujarat" },
            { year: "June 2022-Present", title: "Bachelor in Computer Science", location: "Gujarat University, Ahmedabad, Gujarat", highlight: true }
          ].map((edu, index) => (
            <li key={index} className="mb-5 ms-4">
              <div className={`absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border ${edu.highlight ? "bg-primary border-primary animate-ping" : "bg-gray-500 border-gray-500"}`}></div>
              <time className="mb-1 text-sm font-normal text-gray-400">{edu.year}</time>
              <h3 className="text-lg font-semibold text-white">{edu.title}</h3>
              <p className="text-base font-normal text-gray-400">{edu.location}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default EducationProjects;