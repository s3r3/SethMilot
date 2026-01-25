"use client"
import React, { useState } from "react";
import { createClient } from "../auth/server";
import { useRouter } from "next/navigation";

interface AuthOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthOverlay = ({ isOpen, onClose }: AuthOverlayProps) => {
  // State untuk menentukan tampilan: 'login' atau 'signup'
  const [view, setView] = useState<'login' | 'signup'>('login');
  
  // State Form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const router = useRouter();
  const supabase = createClient();

  if (!isOpen) return null;

  // Fungsi Reset Form saat pindah view
  const toggleView = () => {
    setView(view === 'login' ? 'signup' : 'login');
    setErrorMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    if (view === 'login') {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setErrorMsg(error.message);
        setLoading(false);
      } else {
        onClose();
        router.refresh();
        router.push("/profile");
      }
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setErrorMsg(error.message);
        setLoading(false);
      } else {
        alert("Success! Check your email for confirmation.");
        setView('login'); // Pindah ke login setelah daftar
        setLoading(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-[#111111] text-white pt-12 pb-20 px-10 rounded-br-[100px] shadow-2xl animate-in fade-in zoom-in duration-300">
        
        <button onClick={onClose} className="absolute top-6 right-8 text-[10px] tracking-widest uppercase hover:opacity-70">
          Close
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <div className="text-5xl font-serif tracking-tighter border-2 border-white px-2 py-1">
            <span className="font-bold">S</span><span className="font-light italic">M</span>
          </div>
        </div>

        {/* Header Dinamis */}
        <div className="text-center mb-10">
          <h1 className="text-lg tracking-[0.2em] mb-4 uppercase">
            {view === 'login' ? "I Already Have An Account" : "Create An Account"}
          </h1>
          <p className="text-[9px] leading-relaxed tracking-widest opacity-80 uppercase px-2 text-gray-400">
            {view === 'login' 
              ? "If you already have an account, please enter your email and password"
              : "Follow orders, save shipping details, and track favourite pieces on any device."}
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 text-[10px] text-center p-2 bg-red-900/30 text-red-400 uppercase tracking-widest border border-red-900/50">
            {errorMsg}
          </div>
        )}

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="relative border-b border-gray-700 pb-1">
            <label className="block text-[8px] tracking-[0.2em]  text-gray-500 mb-1">Email Address*</label>
            <input
              type="email"
              required
              value={email}
              className="bg-transparent w-full outline-none text-[11px] tracking-widest "
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative border-b border-gray-700 pb-1">
            <label className="block text-[8px] tracking-[0.2em] uppercase text-gray-500 mb-1">
              {view === 'login' ? "Password*" : "Create Password*"}
            </label>
            <input
              type="password"
              required
              value={password}
              className="bg-transparent w-full outline-none text-[11px] tracking-widest"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="space-y-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#8C4433] hover:bg-[#74382a] text-white py-4 rounded-full text-[10px] tracking-[0.3em] uppercase transition-all"
            >
              {loading ? "Processing..." : (view === 'login' ? "Login" : "Continue")}
            </button>
            
            <button
              type="button"
              className="w-full border border-gray-600 hover:bg-white/5 text-white py-4 rounded-full text-[10px] tracking-[0.3em] uppercase transition-all"
              onClick={toggleView}
            >
              {view === 'login' ? "Create Account" : "I Already Have An Account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthOverlay;