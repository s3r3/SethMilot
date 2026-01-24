"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Nav from "../component/nav";
import EditorialLayout from "./JacquemusLayout";
import OverlapEditorial from "./OverlapEditorial";
import MindfulInnovations from "./Mindfull";
import RedefiningValues from "./Redefining";
import HarmonyLayout from "./Harmony";
import Footer from "../home/footer";

gsap.registerPlugin(ScrollTrigger);

const SustainabilityHero = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal bingkai melengkung saat load
      gsap.fromTo(
        containerRef.current,
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut" },
      );

      // Animasi Teks "SUSTAINABILITY"
      gsap.fromTo(
        textRef.current,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          delay: 0.8,
        },
      );

      // Parallax pada gambar
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#87968A] flex flex-col overflow-hidden"
    >
      {/* Nav diletakkan di atas dengan z-index tinggi */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Nav color="white" />
      </div>

      {/* Breadcrumb: Posisi tepat di bawah Nav */}
      <div className="pt-32 pb-6 px-8 md:px-16 flex gap-2 text-[9px] uppercase tracking-[0.2em] text-white/60 font-medium">
        <span>Home</span> / <span>Page</span> /{" "}
        <span className="text-white">Sustainability</span>
      </div>

      {/* Container Gambar dengan Sudut Melengkung Ikonik */}
             <div
        ref={containerRef}
        className="relative w-full h-[65vh] md:h-[85vh] overflow-hidden rounded-br-[120px] md:rounded-br-[400px]"
      >
        {/* Gunakan h-full dan hapus offset -top jika ingin posisi standar,
      atau sesuaikan h-[110%] untuk ruang parallax yang cukup */}
        <div ref={imageRef} className="relative w-full h-[110%]">
          <Image
            src="/photo/sus1.jpg"
            alt="Sustainability Section"
            fill
            /* Ubah object-top menjadi object-center atau koordinat spesifik.
         'object-center' akan menyeimbangkan tampilan badan.
         Jika ingin lebih banyak badan bawah, gunakan 'object-[center_20%]'
      */
            className="object-cover object-center md:object-[center_35%]"
            priority
          />
        </div>
      </div>

      {/* Teks Judul Besar (Gunakan Serif Jenjang) */}
      <div className="w-full flex justify-center py-24 md:py-32 overflow-hidden">
        <h1
          ref={textRef}
          className="text-[14vw] md:text-[160px] font-serif uppercase tracking-tight text-white leading-none inline-block italic"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Sustainability
        </h1>
      </div>
      <EditorialLayout />
      <OverlapEditorial />
      <MindfulInnovations />
      <RedefiningValues />
      <HarmonyLayout />
      <Footer />
    </section>
  );
};

export default SustainabilityHero;
