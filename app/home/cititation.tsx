import React from "react";
import Image from "next/image";
const CitationSection: React.FC = () => {
  const products = [
    { id: 1, img: "/photo/cititation.png" },
    { id: 2, img: "/photo/cititation1.png" },
    { id: 3, img: "/photo/cititation2.png" },
    { id: 4, img: "/photo/cititation3.png" },
    { id: 5, img: "/photo/cititation4.png" },
  ];

  return (
    <section className="bg-[#F2E8DF] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-serif text-[#8B5E3C] leading-tight mb-8">
          &quot;Seth Milot Is More Than Just A Brand&mdash; It&apos;s A
          Carefully Curated And Creatively Designed Space.&quot;
        </h2>
        <p className="text-xs tracking-widest uppercase text-gray-600">
          - Ashley Joseph
        </p>
      </div>

      {/* Product Row */}
      <div className="flex justify-center items-center overflow-x-auto no-scrollbar">
        <div className="flex border border-black/5 bg-white/30 backdrop-blur-sm">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-40 h-48 md:w-56 md:h-64 border-r border-black/5 last:border-r-0 p-8 flex items-center justify-center group cursor-pointer transition-colors hover:bg-white/50"
            >
              <Image
                src={product.img}
                alt="Collection Item"
                className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                width={500} // Lebar gambar dalam piksel
                height={300} // Tinggi gambar dalam piksel
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitationSection;
