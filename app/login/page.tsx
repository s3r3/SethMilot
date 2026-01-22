"use client"
import React, { useState } from "react";
import { createClient } from "../auth/server";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    // Fungsi Supabase untuk Login
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
    } else {
      // Jika berhasil, arahkan ke dashboard atau home
      router.push("/home");
      router.refresh();
    }
  };
  return (
    <div className="min-h-screen bg-[#F2E8DF] flex items-start justify-center ">
      {/* Container Utama dengan sisi kanan bawah melengkung */}
      <div className="relative w-full max-w-md bg-[#1A1A1A] text-white pt-12 pb-20 px-10 rounded-br-[100px] shadow-2xl">
        {/* Tombol Close */}
        <button className="absolute top-6 right-8 text-[10px] tracking-widest uppercase hover:opacity-70 transition-opacity">
          Close
        </button>

        {/* Logo (Placeholder S/M) */}
        <div className="flex justify-center mb-10">
          <div className="text-5xl font-serif tracking-tighter border-2 border-white px-2 py-1">
            <span className="font-bold">S</span>
            <span className="font-light italic">M</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-lg tracking-[0.2em] mb-4 uppercase">
            I Already Have An Account
          </h1>
          <p className="text-[10px] leading-relaxed tracking-widest opacity-80 uppercase px-4">
            If you already have an account, please enter your email and password
          </p>
        </div>
        {/* error Message */}
        {errorMsg && (
          <div className="mb-6 text-[10px] text-center p-2 bg-red-900/30 text-red-400 uppercase tracking-widest border border-red-900/50">
            {errorMsg}
          </div>
        )}

        {/* Form */} 
        <form className="space-y-8" onSubmit={handleLogin} >
          {/* Email Input */}
          <div className="relative border-b border-gray-600 pb-1">
            <label className="block text-[9px] tracking-widest uppercase text-gray-400 mb-1">
              Email Adress*
            </label>
            <div className="flex justify-between items-center">
              <input
                name="email"
                type="email"
                defaultValue="GUEST123@GMAIL.COM"
                className="bg-transparent w-full outline-none text-xs tracking-widest "
                onChange={(e)=>setEmail(e.target.value)}
              />
              <span className="text-orange-800 text-xs">✓</span>
            </div>
          </div>

          {/* Password Input */}
          <div className="border-b border-gray-600 pb-1">
            <label className="block text-[9px] tracking-widest uppercase text-gray-400 mb-1">
              Password*
            </label>
            <input
              name="password"
              type="password"
              className="bg-transparent w-full outline-none text-xs tracking-widest "
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          {/* Forgot Password */}
          <div className="text-center">
            <a
              href="#"
              className="text-[10px] text-blue-400/60 underline tracking-widest hover:text-blue-300 transition-colors"
              onClick={()=> router.push('/home')}
            >
              Forgot your password?
            </a>
          </div>

          {/* Buttons */}
          <div className="space-y-4 pt-4">
            <button
              type="submit"
              className="w-full bg-[#8B4513]/80 hover:bg-[#8B4513] text-white py-4 rounded-full text-[10px] tracking-[0.3em] uppercase transition-all"
              disabled={loading}
            >
              {loading ? "Authentication..." : "Login"}

            </button>
            <button
              type="button"
              className="w-full border border-gray-500 hover:bg-white hover:text-black text-white py-4 rounded-full text-[10px] tracking-[0.3em] uppercase transition-all"
              onClick={()=>router.push("/home")}
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
