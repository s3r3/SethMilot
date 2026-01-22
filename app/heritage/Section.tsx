"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeritageShowcase = () => {
  return (
    <section className="relative w-full bg-white pt-10 pb-20">
      <div className="max-w-360 mx-auto px-4 md:px-10">
        
        {/* Kontainer Gambar Utama */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full aspect-16/10 md:aspect-video overflow-hidden group"
        >
          <Image
            src="/photo/heri3.png" // Ganti dengan path image_724829.jpg Anda
            alt="Seth Milot Signature Collection"
            fill
            className="object-cover transition-transform duration-[2s] group-hover:scale-105"
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* Mini Navigation di Bawah Gambar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 flex justify-center items-center gap-8 md:gap-12"
        >
          {["WOMEN", "MEN", "BAGS"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[10px] md:text-[12px] tracking-[0.2em] font-medium text-black/60 hover:text-black transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-1px bg-black transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HeritageShowcase;