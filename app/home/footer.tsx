import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F2E8DF]  ">
      <div className="bg-[#111111] text-white rounded-tr-[100px] md:rounded-tr-[250px] p-8 md:p-16 relative overflow-hidden">
        
        {/* Top Section: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="mb-12">
              <span className="text-6xl font-bold tracking-tighter">sm</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif mb-6">Become Part Of The Milot Royale</h3>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-8 max-w-sm">
              Subscribe to our newsletter to receive the most recent products and news firsthand
            </p>
            
            {/* Email Input */}
            <div className="relative flex items-center max-w-md group border-b border-gray-700 focus-within:border-white transition-colors">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent w-full py-4 text-[10px] tracking-widest outline-none uppercase"
              />
              <button className="p-2 hover:translate-x-1 transition-transform">
                <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm">
                  <span className="text-lg">→</span>
                </div>
              </button>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FooterLinkGroup title="Products" links={['Women', 'Men', 'Collection', 'Care Guide']} />
            <FooterLinkGroup title="Seth Milot" links={['Heritage', 'Sustainability', 'Packaging']} />
            <FooterLinkGroup title="Client Service" links={['FAQ', 'Pre-order Guidelines', 'Shipping', 'Track My Order']} />
            <FooterLinkGroup title="Help" links={['Contact', 'Terms and Conditions', 'Privacy Policy', 'Disclaimer']} />
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social */}
        <div className="pt-12 border-t border-white/10 flex flex-wrap justify-between items-center gap-6 text-[10px] tracking-[0.2em] uppercase text-gray-400">
          <p>SETHMILOT © 2023</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Youtube</a>
            <a href="#" className="hover:text-white transition-colors">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Sub-component untuk grup link agar kode lebih bersih
const FooterLinkGroup = ({ title, links }: { title: string; links: string[] }) => (
  <div className="flex flex-col gap-6">
    <h4 className="text-[10px] tracking-[0.2em] uppercase text-gray-500 font-bold">{title}</h4>
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="text-[10px] tracking-[0.15em] uppercase hover:text-white transition-colors">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;