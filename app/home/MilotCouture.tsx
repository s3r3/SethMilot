import React from "react";
import Image from "next/image";
const MilotCouture: React.FC = () => {
  const collections = [
    {
      id: 1,
      name: "BRUNCH BAG",
      image: "/photo/milot1.jpg",
      className: "col-span-12 md:col-span-4 mt-12",
    },
    {
      id: 2,
      name: "BEYOND BOLD",
      image: "/photo/milot2.png",
      className: "col-span-12 md:col-span-4 mt-24 md:mt-64",
    },
    {
      id: 3,
      name: "EARLY EDEN",
      image: "/photo/milot3.jpg",
      className: "col-span-12 md:col-span-4 mt-12 md:mt-20",
    },
  ];

  return (
    <section className="bg-white overflow-hidden ">
      {/* Title Section */}
      <div className="mb-12 py-24 px-8 md:px-16 ">
        <h2 className="text-6xl md:text-7xl font-light tracking-tight">
          Milot{" "}
          <span className="font-serif italic text-7xl md:text-8xl">
            Couture
          </span>
        </h2>
      </div>

      {/* Staggered Grid Layout */}
      <div className="grid grid-cols-12 gap-8 md:gap-12 items-start px-5">
        {collections.map((item) => (
          <div
            key={item.id}
            className={`${item.className} group flex flex-col`}
          >
            {/* Product Label */}
            <span className="text-[9px] tracking-[0.2em] uppercase text-gray-400 mb-4 self-end md:self-start">
              {item.name}
            </span>

            {/* Image Container */}
            <div className="relative overflow-hidden bg-gray-50 aspect-3/4">
              <Image
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                width={500} // Lebar gambar dalam piksel
                height={300} // Tinggi gambar dalam piksel
              />
              {/* Subtle Overlay on Hover */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Bottom Line */}
      <div className="mt-32 flex justify-end">
        <div className="w-1/4 h-px bg-black/10"></div>
      </div>
    </section>
  );
};

export default MilotCouture;
