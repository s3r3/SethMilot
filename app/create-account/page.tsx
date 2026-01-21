import React from 'react';

const CreateAccountPage = () => {
  return (
    <div className="min-h-screen bg-[#F2E8DF] flex items-start justify-center ">
      {/* Container Utama dengan desain rounded-br khusus */}
      <div className="relative w-full max-w-md bg-[#111111] text-white pt-12 pb-20 px-10 rounded-br-[100px] shadow-2xl">
        
        {/* Tombol Close */}
        <button className="absolute top-6 right-8 text-[10px] tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">
          Close
        </button>

        {/* Logo Section */}
        <div className="flex justify-center mb-10">
          <div className="text-5xl font-serif tracking-tighter border-2 border-white px-2 py-1 flex items-center">
            <span className="font-bold">S</span>
            <span className="font-light italic">M</span>
          </div>
        </div>

        {/* Header & Deskripsi */}
        <div className="text-center mb-10">
          <h1 className="text-lg tracking-[0.2em] mb-4 uppercase">Create An Account</h1>
          <p className="text-[9px] leading-[1.6] tracking-[0.15em] opacity-90 uppercase px-2">
            Follow orders, save shipping details, track favourite pieces for access on any device, opt in/out of digital communications
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-10">
          {/* Email Input */}
          <div className="relative border-b border-gray-700 pb-1">
            <label className="block text-[8px] tracking-[0.2em] uppercase text-gray-500 mb-1">
              Email Adress*
            </label>
            <div className="flex justify-between items-center">
              <input 
                type="email" 
                defaultValue="GUEST123@GMAIL.COM"
                className="bg-transparent w-full outline-none text-[11px] tracking-widest uppercase placeholder-gray-600"
              />
              {/* Checkmark Icon */}
              <span className="text-orange-900 text-xs">✓</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 pt-4">
            {/* Tombol Continue (Warna Cokelat Bata) */}
            <button 
              type="submit"
              className="w-full bg-[#8C4433] hover:bg-[#74382a] text-white py-4 rounded-full text-[10px] tracking-[0.3em] uppercase transition-colors"
            >
              Continue
            </button>
            
            {/* Tombol Switch ke Login (Outline) */}
            <button 
              type="button"
              className="w-full border border-gray-600 hover:bg-white/5 text-white py-4 rounded-full text-[10px] tracking-[0.3em] uppercase transition-all"
            >
              I Already Have An Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountPage;