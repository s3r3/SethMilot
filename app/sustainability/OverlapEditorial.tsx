"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const OverlapEditorial: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi masuk untuk kedua gambar
      gsap.from(".image-card", {
        opacity: 0,
        y: 60,
        duration: 1.5,
        stagger: 0.4,
        ease: "power4.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main 
      ref={containerRef}
      className="min-h-screen bg-[#87968A] flex items-center justify-center p-8 overflow-hidden"
    >
      {/* Container utama dengan posisi relatif */}
      <div className="relative w-full max-w-4xl aspect-square md:aspect-video flex items-center justify-center">
        
        {/* Gambar Kiri (Latar Belakang/Atas) */}
        <div className="image-card absolute top-0 left-0 w-[55%] z-10 shadow-2xl">
          <div className="relative aspect-3/4 w-full border-12 border-transparent">
            <Image
              src="/photo/sus4.jpg" // Ganti dengan image model berbaju krem di taman
              alt="Model in Autumn"
              fill
              priority
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>

        {/* Gambar Kanan (Depan/Bawah) */}
        <div className="image-card absolute bottom-0 right-0 w-[55%] z-20 shadow-2xl">
          <div className="relative aspect-3/4 w-full border-12 border-transparent">
            <Image
              src="/photo/sus5.png" // Ganti dengan image model tas putih
              alt="Model with White Bag"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>

      </div>
    </main>
  );
};

export default OverlapEditorial;