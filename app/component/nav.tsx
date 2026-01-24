import BurgerMenu from "./burger-menu";
import SearchOverlay from "./search";
import { useState } from "react";

// Definisikan tipe props untuk TypeScript
interface NavProps {
  color?: "black" | "white";
}

const Nav = ({ color = "black" }: NavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Helper untuk menentukan class warna berdasarkan prop
  const isWhite = color === "white";
  
  // Class kondisional
  const textColor = isWhite ? "text-white" : "text-black";
  const borderColor = isWhite ? "border-white/20" : "border-black/10";
  const bgColor = isWhite ? "bg-white" : "bg-black";
  const strokeColor = isWhite ? "white" : "currentColor";

  return (
    <nav className={`flex items-center justify-between px-8 py-6 border-b ${borderColor} ${textColor} transition-colors duration-300`}>
      {/* Menu Button */}
      <div
        className="flex items-center space-x-2 cursor-pointer group"
        onClick={() => setIsMenuOpen(true)}
      >
        <div className="flex flex-col space-y-1">
          <span className={`w-6 h-px ${bgColor}`}></span>
          <span className={`w-6 h-px ${bgColor}`}></span>
        </div>
        <span className="text-xs tracking-widest uppercase font-medium">
          Menu
        </span>
      </div>
      
      <BurgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Logo */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase">
          Seth Milot
        </h1>
      </div>

      {/* Action Icons */}
      <div className="flex items-center space-x-6">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setIsSearchOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke={strokeColor}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="hidden md:inline text-xs tracking-widest uppercase font-medium">
            Search
          </span>
        </div>
        
        <SearchOverlay
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />

        <button className="hover:opacity-60 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke={strokeColor}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </button>

        <button className="hover:opacity-60 transition-opacity relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke={strokeColor}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Nav;