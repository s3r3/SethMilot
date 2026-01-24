"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const EditorialLayout: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi Fade In & Up untuk konten
      gsap.from(".animate-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
      

      // Animasi Scale subtle pada gambar
      gsap.from(".img-container", {
        scale: 1.05,
        duration: 2,
        ease: "power2.out"
      });
    }, containerRef);

    

    return () => ctx.revert();
  }, []);

  return (
    <main 
      ref={containerRef}
      className="min-h-screen bg-[#87968A] flex flex-col items-center justify-center p-6 md:p-12 lg:p-20"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 items-start">
        
        {/* Sisi Kiri: Foto Workshop & Teks Bawah */}
        <div className="flex flex-col space-y-8">
          <div className="animate-reveal img-container relative aspect-4/3 w-full overflow-hidden shadow-xl">
            <Image
              src="/photo/sus2.jpg" // Ganti dengan path lokal atau URL remote
              alt="Leather Crafting Tools"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="animate-reveal max-w-70">
            <p className="text-[10px] md:text-[11px] tracking-[0.15em] text-white/90 leading-relaxed uppercase font-light">
              Our commitment to sustainable luxury is at the forefront of our brand
            </p>
          </div>
        </div>

        {/* Sisi Kanan: Foto Model & Teks Bawah Kanan */}
        <div className="flex flex-col space-y-8 md:mt-24">
          <div className="animate-reveal img-container relative aspect-3/4 w-full overflow-hidden shadow-xl">
            <Image
              src="/photo/sus3.png" // Ganti dengan path lokal atau URL remote
              alt="Model holding Jacquemus bag"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="animate-reveal self-end text-right max-w-[320px]">
            <p className="text-[10px] md:text-[11px] tracking-[0.15em] text-white/90 leading-relaxed uppercase font-light">
              We take careful consideration in each step of our production process, 
              including the end-of-life of our products
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default EditorialLayout;