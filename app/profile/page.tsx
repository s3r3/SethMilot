"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { createClient } from "../auth/server";
import { useRouter } from "next/navigation";
import Nav from "../component/nav";

const ProfilePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [userEmail, setUserEmail] = useState<string>("");
  const [initials, setInitials] = useState<string>("??");
  const [loading, setLoading] = useState(true);

  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    // 1. Ambil Data User dari Supabase
    const getUserData = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        router.push("/login"); // Tendang ke login jika tidak ada session
        return;
      }

      setUserEmail(user.email || "");

      // Ambil inisial dari email (contoh: marga@gmail.com -> MA)
      if (user.email) {
        const parts = user.email.split("@")[0];
        const res = parts.substring(0, 2).toUpperCase();
        setInitials(res);
      }
      setLoading(false);
    };

    getUserData();

    // 2. Animasi GSAP
    const ctx = gsap.context(() => {
      gsap.from(".reveal", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
      });

      gsap.to(".bg-grid", {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [router, supabase.auth]);

  if (loading)
    return (
      <div className="min-h-screen bg-white flex items-center justify-center font-mono uppercase tracking-widest text-xs">
        Loading Profile...
      </div>
    );

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-white font-sans text-[#1a1a1a]"
    >
      <Nav />
      {/* --- Header Section --- */}
      <div
        className="relative h-[40vh] w-full overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/photo/milot1.jpg')" }}
      >
        

        {/* Profile Initials Circle - SEKARANG DINAMIS */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-999">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100">
            <span className="text-2xl md:text-3xl font-serif text-[#8b4513] tracking-tighter">
              {initials}
            </span>
          </div>
        </div>
      </div>

      {/* --- Main Content --- */}
      <div className="pt-20 pb-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="reveal text-[10px] tracking-[0.2em] uppercase font-medium text-gray-400 mb-8">
          Welcome {userEmail.split("@")[0]}
        </h2>

        {/* Sub-navigation */}
        <div className="reveal flex justify-center space-x-8 border-y border-gray-100 py-6 mb-16">
          {["PROFILE", "ADDRESSES", "ORDERS", "WISHLIST"].map((item, idx) => (
            <button
              key={item}
              className={`text-[10px] tracking-[0.2em] font-bold ${idx === 0 ? "text-[#1a1a1a]" : "text-gray-300"} hover:text-[#1a1a1a] transition-colors`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* --- Form Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Modify Login Section */}
          <div className="reveal border border-gray-100 p-8 flex flex-col justify-between">
            <div className="space-y-8">
              <h4 className="text-[10px] tracking-[0.2em] font-bold uppercase mb-4">
                Modify your login
              </h4>

              <div className="relative border-b border-gray-200 py-2">
                <label className="block text-[8px] text-gray-400 tracking-widest uppercase mb-1">
                  Current Email Address
                </label>
                <input
                  type="email"
                  value={userEmail}
                  readOnly
                  className="w-full bg-transparent outline-none text-[11px] font-medium tracking-wider uppercase text-gray-500"
                />
                <span className="absolute right-0 bottom-2 text-green-500 text-xs">
                  ✓
                </span>
              </div>

              <div className="relative border-b border-gray-200 py-2">
                <label className="block text-[8px] text-gray-400 tracking-widest uppercase mb-1">
                  New Email Address*
                </label>
                <input
                  type="email"
                  placeholder="ENTER NEW EMAIL"
                  className="w-full bg-transparent outline-none text-[11px] font-medium tracking-wider uppercase"
                />
              </div>
            </div>
            <button className="mt-12 w-full py-4 border border-[#8b4513] rounded-full text-[10px] tracking-[0.2em] font-bold text-[#8b4513] hover:bg-[#8b4513] hover:text-white transition-all">
              UPDATE EMAIL
            </button>
          </div>

          {/* Change Password Section */}
          <div className="reveal border border-gray-100 p-8 flex flex-col justify-between">
            <div className="space-y-8">
              <h4 className="text-[10px] tracking-[0.2em] font-bold uppercase mb-4">
                Security
              </h4>

              <div className="relative border-b border-gray-200 py-2">
                <label className="block text-[8px] text-gray-400 tracking-widest uppercase mb-1">
                  Password*
                </label>
                <input
                  type="password"
                  value="**********"
                  className="w-full bg-transparent outline-none text-[11px] tracking-wider"
                  readOnly
                />
                <button className="absolute right-0 bottom-2 text-gray-400">
                  👁️
                </button>
              </div>

              <div className="relative border-b border-gray-200 py-2">
                <label className="block text-[8px] text-gray-400 tracking-widest uppercase mb-1">
                  New Password*
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-transparent outline-none text-[11px] font-medium tracking-wider uppercase"
                />
              </div>
            </div>
            <button className="mt-12 w-full py-4 border border-[#8b4513] rounded-full text-[10px] tracking-[0.2em] font-bold text-[#8b4513] hover:bg-[#8b4513] hover:text-white transition-all">
              CHANGE PASSWORD
            </button>
          </div>
        </div>

        {/* Tombol Logout */}
        <button
          onClick={async () => {
            await supabase.auth.signOut();
            router.push("/home");
          }}
          className="reveal mt-16 text-[9px] tracking-[0.3em] uppercase underline text-gray-400 hover:text-black transition-colors"
        >
          Sign Out of Account
        </button>
      </div>
    </main>
  );
};

export default ProfilePage;
