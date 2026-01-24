"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const RedefiningValues: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi masuk untuk gambar samping
      gsap.from(".side-image", {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.3
      });

      // Animasi untuk kartu tengah (arch)
      gsap.from(".center-arch", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5
      });

      // Animasi teks di dalam arch
      gsap.from(".text-reveal", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.2,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-[#87968A] flex items-center justify-center p-6 md:p-12"
    >
      <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        
        {/* Gambar Kiri - Crafting */}
        <div className="side-image relative aspect-3/4 w-full overflow-hidden order-2 md:order-1">
          <Image
            src="/photo/susa1.jpg" // Ganti dengan path gambar pengrajin kiri
            alt="Craftsman checking bag"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Elemen Tengah - Arch & Title */}
        <div className="center-arch z-20 relative bg-[#f2e7da] py-20 px-10 border border-[#d4c5b3] 
          rounded-t-[200px] rounded-b-none h-full flex flex-col justify-center items-center order-1 md:order-2 shadow-2xl">
          
          {/* Garis Border Tipis Dalam (Optional, untuk detail presisi) */}
          <div className="absolute inset-2 border border-[#d4c5b3] rounded-t-[190px] pointer-events-none" />
          
          <div className="text-reveal text-center relative">
            <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[0.9] font-serif tracking-tight text-[#1a1a1a]">
              REDEFINING <br />
              <span className="font-light italic">SUSTAINABLE</span> <br />
              <span className="text-2xl md:text-4xl italic block mt-2">VALUES</span>
            </h2>
          </div>
        </div>

        {/* Gambar Kanan - Cutting Leather */}
        <div className="side-image relative aspect-3/4 w-full overflow-hidden order-3">
          <Image
            src="/photo/susa2.jpg" // Ganti dengan path gambar pengrajin kanan
            alt="Craftsman cutting leather"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

      </div>
    </section>
  );
};

export default RedefiningValues;