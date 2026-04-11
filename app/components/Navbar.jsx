"use client"; 
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 md:p-6 lg:p-8 relative z-20">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
          <span className="text-[#E597A8] font-bold text-lg">🍰</span>
        </div>
        <span className="text-white font-bold text-lg md:text-xl">BentoCake</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        <a href="#" className="text-white/90 hover:text-white transition-colors text-sm lg:text-base">Classes</a>
        <a href="#" className="text-white/90 hover:text-white transition-colors text-sm lg:text-base">About</a>
        <a href="#" className="text-white/90 hover:text-white transition-colors text-sm lg:text-base">Gallery</a>
        <a href="#" className="text-white/90 hover:text-white transition-colors text-sm lg:text-base">Contact</a>
        <button className="bg-white text-[#E597A8] px-4 py-2 rounded-xl text-sm font-bold hover:shadow-lg transform hover:scale-105 transition-all">
          Book Now
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-10 h-10 bg-white/20 rounded-xl flex flex-col items-center justify-center gap-1.5"
      >
        <span className={`w-5 h-0.5 bg-white rounded-full transition-transform ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
        <span className={`w-5 h-0.5 bg-white rounded-full transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-5 h-0.5 bg-white rounded-full transition-transform ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white rounded-2xl p-6 shadow-xl md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#" className="text-gray-800 hover:text-[#E597A8] transition-colors py-2">Classes</a>
            <a href="#" className="text-gray-800 hover:text-[#E597A8] transition-colors py-2">About</a>
            <a href="#" className="text-gray-800 hover:text-[#E597A8] transition-colors py-2">Gallery</a>
            <a href="#" className="text-gray-800 hover:text-[#E597A8] transition-colors py-2">Contact</a>
            <button className="bg-[#E597A8] text-white px-4 py-3 rounded-xl text-sm font-bold">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}