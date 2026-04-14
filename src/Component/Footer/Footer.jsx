import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#295c4a] text-white py-16 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          KeenKeeper
        </h1>

        {/* Subtitle */}
        <p className="text-gray-200 max-w-2xl mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <h3 className="text-lg font-semibold mb-4">Social Links</h3>

        <div className="flex justify-center gap-4 mb-10">
          <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
            <FaInstagram />
          </div>

          <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
            <FaFacebookF />
          </div>

          <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
            <FaXTwitter />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-400 opacity-30 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">
          
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:underline">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:underline">
              Terms of Service
            </span>
            <span className="cursor-pointer hover:underline">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}