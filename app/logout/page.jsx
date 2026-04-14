"use client";
import React from 'react';
import Link from 'next/link';

export default function LogoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center p-6">
      {/* Container with Hero-style borders and shadows */}
      <div className="w-full max-w-lg bg-white rounded-[30px] md:rounded-[40px] shadow-2xl p-10 md:p-16 text-center relative overflow-hidden border border-pink-100">
        
        {/* Soft pink glow in background */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-50 rounded-full blur-3xl opacity-60"></div>
        
        <div className="relative z-10">
          {/* Animated Icon */}
          <div className="w-24 h-24 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <span className="text-4xl">🍰</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 tracking-tight">
            See you <span className="text-[#E597A8] italic font-light">soon!</span>
          </h2>
          
          <p className="text-gray-500 font-sans mb-10 leading-relaxed">
            You have been successfully logged out. Your baking progress and sweet memories are safely saved.
          </p>

          <div className="flex flex-col gap-4">
            <Link 
              href="/" 
              className="bg-[#E597A8] text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#d48697] shadow-lg hover:shadow-pink-200 transition-all transform hover:-translate-y-1"
            >
              Return Home
            </Link>
            
            <Link 
              href="/login" 
              className="border-2 border-[#E597A8]/20 text-[#E597A8] py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-pink-50 transition-all"
            >
              Log Back In
            </Link>
          </div>

          <div className="mt-12 opacity-40">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">London Bento Lab © 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}