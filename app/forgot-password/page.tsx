import React from 'react';

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen bg-[#F2E8DF] flex items-start justify-center ">
      {/* Container Utama dengan desain yang sama (rounded bottom right) */}
      <div className="relative w-full max-w-md bg-[#1A1A1A] text-white pt-12 pb-24 px-10 rounded-br-[100px] shadow-2xl">
        
        {/* Tombol Close */}
        <button className="absolute top-6 right-8 text-[10px] tracking-widest uppercase hover:opacity-70 transition-opacity">
          Close
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <div className="text-5xl font-serif tracking-tighter border-2 border-white px-2 py-1">
            <span className="font-bold">S</span>
            <span className="font-light italic">M</span>
          </div>
        </div>

        {/* Header Seksi Forgot Password */}
        <div className="text-center mb-12">
          <h1 className="text-lg tracking-[0.2em] mb-4 uppercase">Forgot Your Password?</h1>
          <p className="text-[10px] leading-relaxed tracking-widest opacity-80 uppercase px-2">
            Please enter the email address you registered with. We will send you a link for changing your password
          </p>
        </div>

        {/* Form Input */}
        <form className="space-y-12">
          {/* Email Input */}
          <div className="border-b border-gray-600 pb-1">
            <label className="block text-[9px] tracking-widest uppercase text-gray-400 mb-1">
              Email Adress*
            </label>
            <input 
              type="email" 
              placeholder=""
              className="bg-transparent w-full outline-none text-xs tracking-widest uppercase py-1"
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-6 pt-4 text-center">
            <button 
              type="submit"
              className="w-full border border-gray-500 hover:bg-white hover:text-black text-white py-4 rounded-full text-[10px] tracking-[0.3em] uppercase transition-all"
            >
              Send
            </button>
            
            <div>
              <a 
                href="#" 
                className="text-[10px] text-gray-400 underline tracking-widest uppercase hover:text-white transition-colors"
              >
                Back to login
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;