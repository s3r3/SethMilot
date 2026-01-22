"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const ElevatedArtistry = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Efek Parallax: y1 lambat, y2 cepat (kedalaman visual)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -450]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Variasi animasi untuk kemunculan gambar
  const fadeIn = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden min-h-450 md:min-h-775 "
    >
      <div className="max-w-360 mx-auto px-6 relative h-full">
        {/* 1. Gambar Utama (Kiri Atas) */}
        <motion.div
          style={{ y: y1 }}
          {...fadeIn}
          className="absolute top-0 left-0 w-[55%] md:w-[42%] z-10"
        >
          <div className="relative aspect-3/4 overflow-hidden rounded-tl-[100px] md:rounded-tl-[200px] shadow-2xl">
            <Image
              src="/photo/heritage2.png"
              alt="Artistry 1"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 55vw, 42vw"
              priority
            />
          </div>
        </motion.div>

        {/* 2. Gambar Detail Kecil (Floating Overlap) */}
        <motion.div
          style={{ y: y2 }}
          {...fadeIn}
          className="absolute top-30 left-[45%] md:left-[38%] w-[30%] md:w-[20%] z-30 shadow-2xl border-10 border-[#F2E8DF]"
        >
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/photo/heritage3.png"
              alt="Detail"
              fill
              className="object-cover"
              sizes="20vw"
            />
          </div>
        </motion.div>

        {/* 3. Typography "ELEVATED ARTISTRY" */}
        <div className="absolute top-187.5 md:top-225 left-0 md:left-[15%]  pointer-events-none w-full">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="text-[14vw] md:text-[150px] font-serif uppercase leading-[0.8] tracking-tighter text-black mix-blend-multiply"
          >
            Elevated <br />
            <span className="ml-20 md:ml-40 italic">Artistry</span>
          </motion.h2>
        </div>

        {/* 4. Gambar Tengah (Di belakang teks) */}
        <motion.div
          style={{ y: y3 }}
          {...fadeIn}
          className="absolute top-212.5 md:top-275 left-[5%] w-[45%] md:w-[35%] z-10"
        >
          <div className="relative aspect-3/5 overflow-hidden shadow-xl  hover:grayscale-0 transition-all duration-700">
            <Image
              src="/photo/heritage4.png"
              alt="Couture"
              fill
              className="object-cover"
              sizes="35vw"
            />
          </div>
        </motion.div>

        {/* 5. Gambar Kanan Besar (Desain Melengkung) */}
        <motion.div
          style={{ y: y2 }}
          {...fadeIn}
          className="absolute top-300 md:top-375 right-0 w-[60%] md:w-[45%] z-20"
        >
          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-full h-full border border-black/10 rounded-tl-[120px] -z-10" />
            <div className="relative aspect-4/3 overflow-hidden rounded-tl-[100px] md:rounded-tl-[180px] shadow-2xl bg-white p-2">
              <div className="relative w-full h-full overflow-hidden rounded-tl-[90px] md:rounded-tl-[170px]">
                <Image
                  src="/photo/heritage5.png"
                  alt="Collection"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="45vw"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* 6. Gambar Portrait (Kiri Bawah) */}
        <motion.div
          style={{ y: y1 }}
          {...fadeIn}
          className="absolute top-412.5 md:top-525 left-[8%] w-[42%] md:w-[32%] z-10"
        >
          <div className="relative aspect-2/3 overflow-hidden shadow-2xl">
            <Image
              src="/photo/heritage6.png"
              alt="Portrait 1"
              fill
              className="object-cover"
              sizes="32vw"
            />
          </div>
        </motion.div>

        {/* 7. Gambar Portrait (Kanan Bawah - Diperbaiki posisinya) */}
        <motion.div
          style={{ y: y3 }}
          {...fadeIn}
          className="absolute top-450 md:top-562.5 right-[5%] w-[40%] md:w-[28%] z-10"
        >
          <div className="relative aspect-2/3 overflow-hidden shadow-2xl rounded-tr-[80px]">
            <Image
              src="/photo/heritage7.png"
              alt="Portrait 2"
              fill
              className="object-cover"
              sizes="28vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ElevatedArtistry;
