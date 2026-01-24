"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MindfulInnovations: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in untuk judul tengah
      gsap.from(".title-reveal", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".title-reveal",
          start: "top 85%",
        }
      });

      // Animasi stagger untuk grid atas
      gsap.from(".gallery-top", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Animasi untuk bagian bawah
      gsap.from(".bottom-card", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".bottom-section",
          start: "top 80%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen bg-[#87968A] py-20 px-6 md:px-12 flex flex-col items-center"
    >
      {/* --- Top Gallery Grid --- */}
      <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4 items-end mb-20">
        <div className="gallery-top relative aspect-4/5 w-full">
          <Image src="/photo/suss1.png" alt="Tan Bag" fill className="object-cover" />
        </div>
        <div className="gallery-top relative aspect-square w-[80%] mx-auto">
          <Image src="/photo/suss2.png" alt="Small Bag" fill className="object-contain bg-white/10" />
        </div>
        <div className="gallery-top relative aspect-3/4 w-full">
          <Image src="/photo/suss3.png" alt="Model White" fill className="object-cover" />
        </div>
        <div className="gallery-top relative aspect-square w-[70%] bg-white/20 p-4">
          <Image src="/photo/suss4.png" alt="Brown Bag" fill className="object-contain p-4" />
        </div>
      </div>

      {/* --- Center Title --- */}
      <div className="title-reveal text-center mb-24">
        <h2 className="text-4xl md:text-7xl font-serif italic text-[#1a1a1a] tracking-tight">
          MINDFUL <span className="font-normal not-italic">INNOVATIONS</span>
        </h2>
      </div>

      {/* --- Bottom Asymmetric Section --- */}
      <div className="bottom-section w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-0 items-start">
        
        {/* Box Teks Coklat */}
        <div className="bottom-card bg-[#8b4513] aspect-square flex items-center justify-center p-8 md:translate-y-12">
          <p className="text-[10px] md:text-xs tracking-[0.15em] text-white/80 leading-relaxed uppercase text-center">
            We also employ recycled, post-consumer waste, and easily recyclable materials, 
            while striving for minimal consumption
          </p>
        </div>

        {/* Gambar Model 1 (Tengah) */}
        <div className="bottom-card relative aspect-2/3 w-full z-10">
          <Image src="/photo/suss5.png" alt="Model Black Suit" fill className="object-cover shadow-2xl" />
        </div>

        {/* Gambar Model 2 (Kanan) */}
        <div className="bottom-card relative aspect-2/3 w-full md:translate-y-24">
          <Image src="/photo/suss6.png" alt="Model Orange" fill className="object-cover shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default MindfulInnovations;