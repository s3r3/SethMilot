"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

type BurgerMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const menuVariants = {
    closed: {
      x: "-100%",
      transition: {
        duration: 0.7,
        // cast easing array to any to satisfy framer-motion Typescript types
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ease: [0.76, 0, 0.24, 1] as unknown as any,
        when: "afterChildren",
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0.7,
        // cast easing array to any to satisfy framer-motion Typescript types
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ease: [0.76, 0, 0.24, 1] as unknown as any,
        when: "beforeChildren",
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const linkVariants = {
    closed: {
      y: 80,
      opacity: 0,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] as unknown as any },
    },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.1 + i * 0.06,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ease: [0.33, 1, 0.68, 1] as unknown as any,
      },
    }),
  };

  const navLinks = [
    "Home",
    "Collections",
    "Women",
    "Men",
    "Heritage",
    "Sustainability",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-100 bg-white flex flex-col md:flex-row"
        >
          {/* Sisi Kiri: Black Curved Overlay (Sesuai gambar referensi) */}
          <div className="relative w-full md:w-[45%] bg-[#111111] text-white p-8 md:p-16 flex flex-col justify-between rounded-br-[100px] md:rounded-br-[350px]">
            <button
              onClick={onClose}
              className="text-[10px] tracking-widest uppercase self-start hover:opacity-50 transition-opacity"
            >
              Close
            </button>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, i) => {
                const key = link.toLowerCase();
                const route =
                  key === "heritage"
                    ? "/heritage"
                    : key === "home"
                      ? "/home"
                      : `#${key}`;
                const isRoute = route.startsWith("/");
                return (
                  <div key={link} className="overflow-hidden">
                    <motion.a
                      custom={i}
                      variants={linkVariants}
                      href={isRoute ? undefined : route}
                      onClick={
                        isRoute
                          ? (e) => {
                              e.preventDefault();
                              router.push(route);
                              onClose();
                            }
                          : undefined
                      }
                      className="text-4xl md:text-6xl font-serif block hover:italic transition-all cursor-pointer"
                    >
                      {link}
                    </motion.a>
                  </div>
                );
              })}
            </nav>

            <div className="flex gap-4 border-t border-white/10 pt-8">
              {["Instagram", "Twitter", "Youtube", "Pinterest"].map((s) => (
                <span
                  key={s}
                  className="text-[9px] tracking-widest uppercase text-gray-500"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Sisi Kanan: Menu Categories & Featured Image */}
          <div className="flex-1 bg-white p-8 md:p-16 flex flex-col md:flex-row gap-12">
            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-400 mb-6">
                  Handbags
                </h4>
                <ul className="space-y-4 text-xs tracking-widest uppercase">
                  <li className="hover:text-[#C2A391] cursor-pointer">
                    All Women
                  </li>
                  <li className="text-[#C2A391] cursor-pointer italic font-medium">
                    Top Handle
                  </li>
                  <li className="hover:text-[#C2A391] cursor-pointer">
                    Clutch
                  </li>
                  <li className="hover:text-[#C2A391] cursor-pointer">
                    Cross Body
                  </li>
                  <li className="hover:text-[#c2a391] cursor-pointer">
                    {" "}
                    Mini Top Handle
                  </li>
                  <li className="hover:text-[#c2a391] cursor-pointer">
                    {" "}
                    Pouch
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-400 mb-6">
                  Collections
                </h4>
                <ul className="space-y-4 text-xs tracking-widest uppercase">
                  <li className="hover:text-[#C2A391] cursor-pointer">
                    Brunch Bag
                  </li>
                  <li className="text-[#C2A391] cursor-pointer italic font-medium">
                    Eden Collection
                  </li>
                  <li className="hover:text-[#C2A391] cursor-pointer">FW/23</li>
                </ul>
              </div>
            </div>
            <div className="hidden md:block ml-auto self-end">
              <div className="relative w-64 aspect-3/4 overflow-hidden">
                <Image
                  src="/photo/bag1.png"
                  alt="Featured Bag"
                  className="w-full h-full object-contain bg-[#F5EBE1] p-8"
                  width={500}
                  height={500}
                />
                <p className="text-center text-[10px] tracking-widest uppercase mt-4">
                  Milot BC Bag
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default BurgerMenu;
