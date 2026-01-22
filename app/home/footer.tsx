"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const Footer: React.FC = () => {
  // Varians untuk animasi muncul saat scroll (reveal)
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="bg-[#111111] text-white rounded-tr-[100px] md:rounded-tr-[250px] p-8 md:p-16 relative overflow-hidden"
      >
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div variants={itemVariants}>
            <div className="mb-12">
              <motion.span
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="text-6xl font-bold tracking-tighter inline-block cursor-default"
              >
                sm
              </motion.span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif mb-6">
              Become Part Of The Milot Royale
            </h3>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-8 max-w-sm">
              Subscribe to our newsletter to receive the most recent products
              and news firsthand
            </p>

            {/* Email Input */}
            <div className="relative flex items-center max-w-md group border-b border-gray-700 focus-within:border-white transition-colors duration-500">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-transparent w-full py-4 text-[10px] tracking-widest outline-none uppercase"
              />
              <motion.button
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2"
              >
                <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm">
                  <span className="text-lg">→</span>
                </div>
              </motion.button>
            </div>
          </motion.div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FooterLinkGroup
              title="Products"
              links={["Women", "Men", "Collection", "Care Guide"]}
            />
            <FooterLinkGroup
              title="Seth Milot"
              links={["Heritage", "Sustainability", "Packaging"]}
            />
            <FooterLinkGroup
              title="Client Service"
              links={[
                "FAQ",
                "Pre-order Guidelines",
                "Shipping",
                "Track My Order",
              ]}
            />
            <FooterLinkGroup
              title="Help"
              links={[
                "Contact",
                "Terms and Conditions",
                "Privacy Policy",
                "Disclaimer",
              ]}
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="pt-12 border-t border-white/10 flex flex-wrap justify-between items-center gap-6 text-[10px] tracking-[0.2em] uppercase text-gray-400"
        >
          <p>SETHMILOT © 2023</p>
          <div className="flex gap-8">
            {["Instagram", "Twitter", "Youtube", "Pinterest"].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ y: -2, color: "#ffffff" }}
                className="transition-colors"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

const FooterLinkGroup = ({
  title,
  links,
}: {
  title: string;
  links: string[];
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="flex flex-col gap-6"
  >
    <h4 className="text-[10px] tracking-[0.2em] uppercase text-gray-500 font-bold">
      {title}
    </h4>
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link}>
          <motion.a
            href="#"
            whileHover={{ x: 3, color: "#ffffff" }}
            className="text-[10px] tracking-[0.15em] uppercase text-gray-400 transition-colors inline-block"
          >
            {link}
          </motion.a>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default Footer;
