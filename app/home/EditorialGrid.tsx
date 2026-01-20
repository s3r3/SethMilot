import React from "react";
import Image from "next/image";

const EditorialGrid: React.FC = () => {
  return (
    <section className="bg-white">
      {/* Main Container with one rounded corner */}
      <div className="bg-[#F2E8DF] rounded-tr-[150px] md:rounded-tr-[300px] p-10 md:p-24 relative overflow-hidden min-h-250">
        {/* Decorative Thin Lines */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20"
          viewBox="0 0 800 1200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50 400C100 400 300 350 300 150"
            stroke="#8B4513"
            strokeWidth="0.5"
          />
          <path
            d="M-50 480C150 480 350 430 350 200"
            stroke="#8B4513"
            strokeWidth="0.5"
          />
        </svg>

        {/* Floating Images Grid */}
        <div className="relative z-10 grid grid-cols-12 gap-4">
          {/* Large Top Left Image */}
          <div className="col-span-12 md:col-span-5 mb-12 transform hover:scale-[1.02] transition-transform duration-500">
            <Image
              src="/photo/woman1.jpg"
              alt="Portrait"
              className="w-full h-auto object-cover shadow-xl"
              width={500}
              height={300}
            />
          </div>

          {/* Middle Right Image (Product/Branding) */}
          <div className="col-span-12 md:col-start-7 md:col-span-5 mt-20 md:mt-40 transform hover:scale-[1.02] transition-transform duration-500">
            <Image
              src="/photo/editorial.png"
              alt="Portrait"
              className="w-full h-auto object-cover shadow-xl"
              width={500}
              height={300}
            />
          </div>

          {/* Center Small Image (Couple/Lifestyle) */}
          <div className="col-span-8 col-start-3 md:col-start-5 md:col-span-3 -mt-10 md:-mt-32 transform hover:rotate-2 hover:scale-105 transition-transform duration-500">
            <Image
              src="/photo/editorial1.png"
              alt="Portrait"
              className="w-full h-auto object-cover shadow-xl"
              width={500}
              height={300}
            />
          </div>

          {/* Bottom Left Image (Product Detail) */}
          <div className="col-span-10 md:col-span-4 mt-12 md:mt-20 transform hover:scale-[1.02] transition-transform duration-500">
            <Image
              src="/photo/editorial3.jpg"
              alt="Portrait"
              className="w-full h-auto object-cover shadow-xl"
              width={500}
              height={300}
            />
          </div>
        </div>

        {/* Decorative Watermark or Small Text if needed */}
        <div className="absolute bottom-10 right-10 flex items-center space-x-4">
          <div className="w-12 h-px bg-black/20"></div>
          <span className="text-[10px] uppercase tracking-widest text-black/40">
            Editorial Edition
          </span>
        </div>
      </div>
    </section>
  );
};

export default EditorialGrid;