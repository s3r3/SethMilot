import BurgerMenu from "./burger-menu";
import SearchOverlay from "./search";
import { useState } from "react";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-black/10">
      <div
        className="flex items-center space-x-2 cursor-pointer group"
        onClick={() => setIsMenuOpen(true)}
      >
        <div className="flex flex-col space-y-1">
          <span className="w-6 h-px bg-black"></span>
          <span className="w-6 h-px bg-black"></span>
        </div>
        <span className="text-xs tracking-widest uppercase font-medium">
          Menu
        </span>
      </div>
      <BurgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase">
          Seth Milot
        </h1>
      </div>

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
            stroke="currentColor"
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
            stroke="currentColor"
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
            stroke="currentColor"
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
