"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const UniqueDetails = () => {
  return (
    <section className="bg-[#F2E8DF] py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Quote Section */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-lg md:text-xl font-serif text-black/70 italic leading-relaxed mb-20 max-w-2xl"
        >
          &quot;A Legacy Of History Is An Invaluable Treasure For Any
          Establishment Fortunate Enough To Possess It.&quot;
        </motion.p>

        {/* First Image: Small/Medium Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative w-full md:w-[50%] aspect-3/4 mb-24 shadow-sm"
        >
          <Image
            src="/photo/heri1.jpg"
            alt="Unique Detail 1"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Second Image: Large Detail Close-up */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full md:w-[75%] aspect-video mb-12"
        >
          <Image
            src="/photo/heri2.jpg"
            alt="Unique Detail 2"
            fill
            className="object-cover"
            sizes="(max-width: 468px) 100vw, 75vw"
          />
        </motion.div>

        {/* Bottom Title */}
        <motion.h2 className="text-4xl md:text-6xl font-serif uppercase tracking-[0.2em] mt-8 text-black">
          Precious & Unique Details
        </motion.h2>

        {/* Decorative Divider */}
        <div className="w-16 h-px bg-black/20 mt-12"></div>
      </div>
    </section>
  );
};

export default UniqueDetails;
