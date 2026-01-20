"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// Import required modules
import { Autoplay, EffectCoverflow } from "swiper/modules";

const ProductGallery = () => {
  const images = [
    "/photo/galery1.jpg",
    "/photo/galery2.png",
    "/photo/galery1.jpg",
    "/photo/galery3.png",
    "/photo/galery4.jpg",
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="w-full">
        {/* Container dengan perspective untuk efek 3D yang lebih dalam */}
        <div style={{ perspective: "2000px" }}>
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={false}
            speed={2000}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 5,
              stretch: 0,
              depth: 150,
              modifier: 2.5,
              slideShadows: false,
            }}
            className="mySwiper overflow-visible!"
          >
            {images.map((src, index) => (
              <SwiperSlide
                key={index}
                className="w-70! sm:w-87.5! md:w-112.5! flex items-center justify-center"
              >
                {/* Image Container with Hover Zoom */}
                <div
                  className="group relative w-full aspect-4/5 overflow-hidden transition-all duration-700 ease-in-out cursor-pointer rounded-sm shadow-xl"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Image
                    src={src}
                    alt={`Gallery Product ${index}`}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                    width={600}
                    height={800}
                    priority={index < 3}
                  />

                  {/* Overlay halus untuk kesan premium */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>

                  {/* Border dalam tipis */}
                  <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Decorative curvature simulation (Line) */}
      <div className="flex justify-center mt-16">
        <div className="w-24 h-px bg-black/20"></div>
      </div>
    </section>
  );
};

export default ProductGallery;