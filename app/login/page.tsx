import React from 'react';

const LoginPage = () => {
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
          <h1 className="text-lg tracking-[0.2em] mb-4 uppercase">I Already Have An Account</h1>
          <p className="text-[10px] leading-relaxed tracking-widest opacity-80 uppercase px-4">
            If you already have an account, please enter your email and password
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8">
          {/* Email Input */}
          <div className="relative border-b border-gray-600 pb-1">
            <label className="block text-[9px] tracking-widest uppercase text-gray-400 mb-1">
              Email Adress*
            </label>
            <div className="flex justify-between items-center">
              <input 
                type="email" 
                defaultValue="GUEST123@GMAIL.COM"
                className="bg-transparent w-full outline-none text-xs tracking-widest uppercase"
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
              type="password" 
              className="bg-transparent w-full outline-none text-xs tracking-widest uppercase"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-center">
            <a href="#" className="text-[10px] text-blue-400/60 underline tracking-widest hover:text-blue-300 transition-colors">
              Forgot your password?
            </a>
          </div>

          {/* Buttons */}
          <div className="space-y-4 pt-4">
            <button 
              type="submit"
              className="w-full bg-[#8B4513]/80 hover:bg-[#8B4513] text-white py-4 rounded-full text-[10px] tracking-[0.3em] uppercase transition-all"
            >
              Login
            </button>
            <button 
              type="button"
              className="w-full border border-gray-500 hover:bg-white hover:text-black text-white py-4 rounded-full text-[10px] tracking-[0.3em] uppercase transition-all"
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