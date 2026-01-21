"use client";
import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input saat search dibuka
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop gelap transparan */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 z-110 backdrop-blur-[2px]"
          />

          {/* Search Panel dengan lengkungan khas */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 left-0 w-full bg-[#F2E8DF] z-120 px-8 md:px-16 pt-32 pb-20 rounded-br-[100px] md:rounded-br-[250px] shadow-2xl"
          >
            <div className="max-w-7xl mx-auto">
              <button
                onClick={onClose}
                className="absolute top-10 right-8 md:right-16 text-[10px] tracking-[0.3em] uppercase hover:opacity-50 transition-opacity"
              >
                Close
              </button>

              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-medium">
                  What are you looking for?
                </span>
                
                <div className="relative group">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search For Product"
                    className="w-full bg-transparent text-4xl md:text-7xl font-light tracking-tight outline-none border-b border-black/10 pb-6 focus:border-black transition-colors placeholder:text-gray-300"
                  />
                  
                  {/* Animasi underline saat diketik */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    className="absolute bottom-0 left-0 w-full h-px bg-black origin-left"
                  />
                </div>

                {/* Search Suggestions (Opsional) */}
                <div className="mt-8 flex flex-wrap gap-4">
                  {['Handbags', 'Couture', 'New Arrival', 'Men'].map((tag) => (
                    <span 
                      key={tag}
                      className="text-[9px] tracking-widest uppercase border border-black/10 px-4 py-2 rounded-full hover:bg-black hover:text-white cursor-pointer transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;