"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Variabel untuk kurva bezier yang halus (Sesuai kode BurgerMenu Anda)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const animEase = [0.76, 0, 0.24, 1] as unknown as any;

  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className="relative">
        {/* Overlay Panel 1: Hitam dengan lengkungan ikonik */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "100%" }}
          exit={{ y: 0 }}
          transition={{ duration: 0.8, ease: animEase }}
          className="fixed inset-0 bg-[#111111] z-9999 rounded-t-[100px] md:rounded-t-[350px]"
        />

        {/* Overlay Panel 2: Aksen Warna Krem (Brand Identity) */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "100%" }}
          exit={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: animEase }}
          className="fixed inset-0 bg-[#F2E8DF] z-9998"
        />

        {/* Animasi untuk Konten Halaman */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>

        {/* Panel Penutup saat halaman baru muncul (Reverse) */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 0.9, delay: 0.2, ease: animEase }}
          className="fixed inset-0 bg-[#111111] z-9999 rounded-b-[100px] md:rounded-b-[350px]"
        />
      </div>
    </AnimatePresence>
  );
}
