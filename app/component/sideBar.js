import { AiOutlineDesktop, AiOutlineFolder, AiOutlinePicture } from "react-icons/ai";
import { BsFillHouseDoorFill } from "react-icons/bs";

export default function Sidebar({ onSelect, activeItem }) {
  const items = [
    { icon: <BsFillHouseDoorFill className="text-lg text-amber-700" />, label: "Home" },
    { icon: <AiOutlineDesktop className="text-lg text-blue-500" />, label: "About" },
    { icon: <AiOutlinePicture className="text-lg text-emerald-600" />, label: "Pictures" },
    { icon: <AiOutlineFolder className="text-lg text-yellow-600" />, label: "Projects" },
    // { icon: <BsMusicNote className="text-lg text-pink-600" />, label: "Music" },
    // { icon: <CgGames className="text-lg text-red-600" />, label: "Games" },
  ];

  return (
    <div className="w-56 h-full border-r-2 border-[var(--hover)] text-[var(--text)] overflow-y-auto py-4">
      <ul className="space-y-1">
        {items.map(({ icon, label }) => {
          const isActive = activeItem === label;
          return (
            <li
              key={label}
              onClick={() => label !== 'Home' ? onSelect(label) : onSelect(null)}
              className={`flex items-center space-x-3 px-3 py-2 cursor-pointer transition ${
                isActive ? "bg-[var(--hover)]  font-medium" : "text-[var(--text)] hover:bg-[var(--hover)]"
              }`}
            title={'Click to open'}
            >
              {icon}
              <span className="text-sm">{label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
