"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "../component/nav";
import { useRouter } from "next/navigation";
import ElevatedArtistry from "./ElevatedArtistry";
import UniqueDetails from "./UniqueDetails";
import HeritageShowcase from "./Section";
import Footer from "../home/footer";
const HeritagePage = () => {
  const containerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Fade in text content
      gsap.from(".heritage-text", {
        opacity: 0,
        y: 30,
        duration: 1.5,
        stagger: 0.3,
        ease: "power3.out",
      });

      // 2. Parallax effect for the runway images
      gsap.to(".runway-image", {
        scrollTrigger: {
          trigger: ".image-grid",
          start: "top bottom",
          scrub: true,
        },
        y: -50,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className=" min-h-screen pt-7 ">
      <Nav />
      {/* Hero Section */}
      <section className="px-8 md:px-16 mb-24 relative overflow-hidden pt-5">
        {/* Monogram Background (Watermark style) */}
        <div className="absolute inset-0 flex justify-center items-start pt-10 pointer-events-none opacity-5">
          <span className="text-[60vh] font-bold leading-none">sm</span>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <nav className="flex justify-center space-x-2 text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-12 heritage-text">
            <span
              onClick={() => router.push("/home")}
              className="cursor-pointer"
            >
              Home
            </span>
            <span>/</span>
            <span>Page</span>
            <span>/</span>
            <span className="text-black">Heritage</span>
          </nav>

          <h1 className="text-xl md:text-2xl font-light tracking-[0.15em] uppercase leading-relaxed heritage-text">
            A Brand Founded Under The Visionary Guidance Of <br />
            <span className="font-serif italic capitalize text-3xl md:text-4xl tracking-normal">
              Ashley Joseph
            </span>
          </h1>
        </div>
      </section>

      {/* Runway Image Grid */}
      <section className="image-grid px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative aspect-3/4 overflow-hidden runway-image">
            <Image
              src="/photo/heritage1.png" // Ganti dengan path gambar runway Anda
              alt="Seth Milot Runway Show"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative aspect-3/4 overflow-hidden runway-image">
            <Image
              src="/photo/heritage1.png" // Ganti dengan path gambar runway Anda
              alt="Seth Milot Collection"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 px-8 md:px-16 flex justify-center">
        <div className="max-w-2xl text-center space-y-8">
          <h2 className="font-serif  text-9xl md:text-9xl">HERITAGE</h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-600 font-light tracking-wide">
            Originates from the family name Joseph, which embodies the notion of
            prosperity and abundance. Milot derives from the illustrious Haitian
            city of Milot, honoring the Haitian ancestors who built
            architectural royal palaces
          </p>
          <div className="w-24 h-px bg-black/20 mx-auto mt-12"></div>
        </div>
      </section>
      <ElevatedArtistry />
      <UniqueDetails />
      <HeritageShowcase/>
      <Footer/>
    </main>
  );
};

export default HeritagePage;
