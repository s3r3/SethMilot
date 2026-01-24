"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const HarmonyLayout: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi Judul Utama (Scale & Fade)
      gsap.from(".title-harmony", {
        letterSpacing: "0.5em",
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
      });

      // Animasi Gambar Muncul dari Bawah
      gsap.from(".reveal-img", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out"
      });

      // Animasi Teks Deskripsi
      gsap.from(".reveal-text", {
        opacity: 0,
        duration: 1,
        delay: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main 
      ref={containerRef}
      className="min-h-screen bg-[#87968A] relative overflow-hidden p-8 md:p-20 flex flex-col justify-between"
    >
      {/* --- Section Atas: Judul & Gambar Kecil --- */}
      <div className="relative w-full">
        <h1 className="title-harmony text-[15vw] md:text-[12vw] font-serif leading-none text-[#1a1a1a] absolute top-[-5vw] left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          HARMONY
        </h1>
        
        <div className="flex justify-end pt-20">
          <div className="reveal-img relative aspect-square w-48 md:w-72 shadow-2xl overflow-hidden">
            <Image
              src="/photo/susa4.jpg" // Gambar tas di rumput
              alt="Luxury bag in nature"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* --- Section Tengah: Gambar Utama & Deskripsi --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-[-5vw]">
        <div className="reveal-img relative aspect-3/4 w-full max-w-md shadow-2xl overflow-hidden">
          <Image
            src="/photo/susa3.png" // Gambar model baju putih
            alt="Editorial fashion model"
            fill
            className="object-cover"
          />
        </div>

        <div className="reveal-text max-w-sm">
          <p className="text-[10px] md:text-xs tracking-[0.2em] text-[#f4f4f4] leading-relaxed uppercase">
            We proudly uphold our transparency and ethical values, ensuring our clients 
            can feel confident in their decision to support an eco-conscious brand 
            that inspires positive change.
          </p>
        </div>
      </div>

      {/* --- Section Bawah: Navigasi Minimalis --- */}
      <nav className="flex justify-end space-x-6 mt-12">
        {['WOMEN', 'MEN', 'BAGS'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[10px] tracking-[0.3em] text-[#1a1a1a] hover:opacity-50 transition-opacity border-b border-[#1a1a1a] pb-1"
          >
            {item}
          </a>
        ))}
      </nav>
    </main>
  );
};

export default HarmonyLayout;