import React from "react";
import Image from "next/image";

const PreOrderSection: React.FC = () => {
  const products = [
    { id: 1, image: "/photo/bag1.png", alt: "Dark Green Tote Bag" },
    { id: 2, image: "/photo/bag2.png", alt: "Tan Backpack" },
    { id: 3, image: "/photo/bag3.png", alt: "Brown Croco Briefcase" },
  ];

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-360 mx-auto px-4">
        
        {/* Product Grid Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full">
            {products.map((product, index) => (
              <div
                key={product.id}
                /* Menggunakan aspect-square dan h-full untuk memaksa kotak menjadi sama besar */
                className={`bg-[#F5EBE1] aspect-square flex items-center justify-center p-8 md:p-16 transition-all duration-500 hover:bg-[#ede0d4] group relative
                  ${index !== products.length - 1 ? "border-r border-white" : ""}
                `}
              >
                {/* Image Wrapper untuk menjaga dimensi gambar tetap konsisten */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.alt}
                   
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Floating Pre-Order Text Overlay */}
          <div className="absolute left-1/2 -bottom-10 md:-bottom-20 -translate-x-1/2 z-10 text-center w-full pointer-events-none">
            <h2 className="text-[15vw] md:text-[12rem] font-serif text-black leading-none tracking-tight">
              Pre-Order
            </h2>
          </div>
        </div>

        {/* CTA Button Section */}
        <div className="mt-32 flex justify-center">
          <button className="px-16 py-3 border border-[#C2A391] rounded-full text-[10px] tracking-[0.2em] uppercase text-[#C2A391] transition-all duration-300 hover:bg-[#C2A391] hover:text-white font-medium">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreOrderSection;