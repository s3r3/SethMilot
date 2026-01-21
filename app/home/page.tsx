"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ProductGallery from "./productGallery";
import PreOrderSection from "./preOrderSection";
import EditorialGrid from "./EditorialGrid";
import MilotCouture from "./MilotCouture";
import CitationSection from "./cititation";
import Footer from "./footer";
import { useState } from "react";
import BurgerMenu from "../component/burger-menu";
import SearchOverlay from "../component/search";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // 1. Hero Animation (Load-in)
      const tlHero = gsap.timeline();
      tlHero
        .from(".hero-title", {
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
          skewY: 7,
        })
        .from(
          ".hero-subtitle",
          {
            opacity: 0,
            y: 20,
            duration: 1,
          },
          "-=0.8",
        )
        .from(
          ".sm-watermark",
          {
            opacity: 0,
            scale: 0.8,
            duration: 2,
            ease: "power2.out",
          },
          0,
        );

      // 2. Parallax Effect untuk Product Collection Section
      gsap.to(".bag-image", {
        scrollTrigger: {
          trigger: ".collection-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -100,
      });

      // 3. Bespoke Section Reveal
      gsap.from(".bespoke-text", {
        scrollTrigger: {
          trigger: ".bespoke-section",
          start: "top 80%",
        },
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });

      gsap.from(".brunch-text", {
        scrollTrigger: {
          trigger: ".bespoke-section",
          start: "top 80%",
        },
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });

      // 4. Image Reveal Animation (Efek tirai)
      gsap.from(".bespoke-img-container", {
        scrollTrigger: {
          trigger: ".bespoke-section",
          start: "top 60%",
        },
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.8,
        ease: "power4.inOut",
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={mainRef}
      className="min-h-screen bg-[#F2E8DF] flex flex-col font-sans text-[#1a1a1a]"
    >
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-black/10">
        <div className="flex items-center space-x-2 cursor-pointer group" onClick={()=>setIsMenuOpen(true)}>
          <div className="flex flex-col space-y-1">
            <span className="w-6 h-px bg-black"></span>
            <span className="w-6 h-px bg-black"></span>
          </div>
          <span className="text-xs tracking-widest uppercase font-medium">
            Menu
          </span>
        </div>
        <BurgerMenu isOpen={isMenuOpen} onClose={()=>setIsMenuOpen(false)}/>

        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase">
            Seth Milot
          </h1>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={()=>setIsSearchOpen(true)}>
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
          <SearchOverlay isOpen={isSearchOpen} onClose={()=>setIsSearchOpen(false)}/>
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

      {/* Main Content / Hero Section */}
      <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Large Watermark 'SM' in background */}
        <div className="sm-watermark absolute select-none pointer-events-none opacity-[0.04] transition-opacity">
          <span className="text-[40rem] font-serif leading-none italic">
            sm
          </span>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 text-center px-4">
          <h2 className="hero-title text-6xl md:text-9xl font-serif italic mb-4 tracking-tight">
            Emblem{" "}
            <span className="text-4xl md:text-6xl not-italic font-light lowercase">
              of
            </span>{" "}
            Prestige
          </h2>
          <p className="hero-subtitle text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium text-black/70">
            Dedicated to Artisanship & Timeless Allure
          </p>
        </div>
      </main>

      {/* Product Collection Section */}
      <section className="collection-section relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center py-20">
        {/* Background Decorative Shapes (The Curved Effect) */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Grey Rectangle behind */}
          <div className="absolute w-[120%] h-[120%] bg-[#A8A39D] rotate-[-15deg] translate-y-[-10%]"></div>

          {/* The White/Cream Curved Canvas */}
          <div
            className="relative w-[90%] h-[80vh] bg-[#F2E8DF] overflow-hidden"
            style={{
              clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)", // Simulasi kemiringan
              borderRadius: "40% 5% 40% 5% / 10% 10% 10% 10%", // Memberikan efek lengkung halus
            }}
          ></div>
        </div>

        {/* Foreground Content */}
        <div className="bag-image relative z-20 flex flex-col items-center justify-center">
          {/* Product Image */}
          <div className="relative w-72 md:w-125 transition-transform duration-700 hover:scale-105">
            <Image
              src="/photo/bag.png"
              alt="Leather Bag"
              className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]"
              width={500} // Lebar gambar dalam piksel
              height={300} // Tinggi gambar dalam piksel
            />

            {/* Text Overlay on Bag */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
              <h3 className="text-5xl md:text-8xl font-serif font-bold uppercase tracking-widest drop-shadow-lg">
                Seth Milot
              </h3>

              {/* Call to Action Button */}
              <button className="mt-4 px-8 py-2 border border-white/60 rounded-full text-[10px] tracking-[0.2em] uppercase backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300">
                Discover Collection
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Bar (Grey line at corner) */}
        <div className="absolute bottom-0 right-0 w-1/3 h-24 bg-[#A8A39D] -rotate-12 translate-x-20 translate-y-10"></div>
      </section>

      {/* Bespoke Brunch Section */}
      <section className="bespoke-section bg-white py-24 px-6 md:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="relative flex items-center justify-center w-full">
            {/* Left Vertical Text */}
            <div className="bespoke-text absolute left-0 z-10 hidden lg:block">
              <h2 className="text-8xl md:text-[10rem] font-serif leading-none tracking-tighter text-black">
                Bespoke
              </h2>
            </div>

            {/* Center Image with Curved Top */}
            <div className="bespoke-img-container relative w-full max-w-2xl z-0">
              <div
                className="w-full h-125 md:h-175 overflow-hidden bg-gray-100"
                style={{
                  borderRadius: "50% 50% 0 0 / 15% 15% 0 0",
                }}
              >
                <Image
                  src="/photo/woman1.png"
                  alt="Bespoke Brunch Collection"
                  className="w-full h-full object-cover"
                  width={500}
                  height={300}
                />
              </div>

              {/* Mobile & Tablet Text (Visible when vertical text is too big) */}
              <div className="lg:hidden text-center mt-8">
                <h2 className="text-6xl font-serif mb-2">Bespoke</h2>
                <h2 className="text-6xl font-serif">Brunch</h2>
              </div>
            </div>

            {/* Right Vertical Text */}
            <div className="brunch-text absolute right-0 z-10 hidden lg:block">
              <h2
                className="text-8xl md:text-[10rem] font-serif leading-none tracking-tighter text-black rotate-180"
                style={{ writingMode: "vertical-rl" }}
              >
                Brunch
              </h2>
            </div>
          </div>

          {/* Bottom Content: Description & CTA */}
          <div className="mt-12 max-w-lg text-center">
            <p className="text-[10px] md:text-xs leading-relaxed tracking-widest text-gray-600 uppercase mb-8">
              Lorem ipsum dolor sit amet consectetur. Porttitor turpis nulla
              iaculis eget. Nulla id habitasse neque vel dolor id ipsum dui.
              Nulla mi condimentum nisl vitae nisi. Hendrerit molestie amet
              tellus sit.
            </p>

            <button className="group relative px-12 py-3 border border-black/20 rounded-full overflow-hidden transition-all duration-300 hover:border-black">
              <span className="relative z-10 text-[10px] tracking-[0.2em] uppercase font-medium">
                Learn More
              </span>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="absolute inset-0 z-20 flex items-center justify-center text-white text-[10px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
              </span>
            </button>
          </div>
        </div>
      </section>
      <section>
        <ProductGallery />
      </section>
      <section>
        <PreOrderSection />
      </section>
      <section>
        <EditorialGrid />
      </section>
      <section>
        <MilotCouture />
      </section>
      <section>
        <CitationSection />
        <Footer />
      </section>
    </div>
  );
}
