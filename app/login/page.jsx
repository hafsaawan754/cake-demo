"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { signIn } from "next-auth/react"; // 1. NextAuth ka signIn function import karein


export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 2. Microsoft Login handle karne ka function
  const handleMicrosoftLogin = async () => {
    try {
      // "azure-ad" wahi provider name hai jo aapne api/auth/[...nextauth]/route.js mein rakha hai
      await signIn("azure-ad", { callbackUrl: "/" }); 
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 overflow-x-hidden">
      <div className="flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
        <div className={`w-full max-w-lg bg-[#E597A8] rounded-[30px] md:rounded-[40px] shadow-2xl overflow-hidden relative p-8 md:p-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-white mb-2">Welcome Back</h2>
              <p className="text-white/80 text-sm">Sign in to your account</p>
            </div>

            {/* Email/Password Form (Standard) */}
            <form className="space-y-4 mb-6" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="w-full bg-[#D97D91] hover:bg-[#c46a7d] text-white py-4 rounded-2xl uppercase tracking-widest text-xs font-bold transition-all shadow-lg">
                Login
              </button>
            </form>

            {/* OR Divider */}
            <div className="relative flex items-center gap-4 mb-6">
              <div className="flex-grow h-px bg-white/20"></div>
              <span className="text-white/50 text-xs font-bold uppercase">OR</span>
              <div className="flex-grow h-px bg-white/20"></div>
            </div>

            {/* 3. Microsoft Button - Yahan onClick function lagaya hai */}
            <button 
              onClick={handleMicrosoftLogin}
              className="w-full group flex items-center justify-center gap-3 bg-white text-gray-700 py-4 rounded-2xl font-bold text-sm shadow-xl hover:bg-gray-50 transition-all transform hover:scale-[1.02]"
            >
              <svg className="w-5 h-5" viewBox="0 0 23 23">
                <path fill="#f35325" d="M1 1h10v10H1z"/><path fill="#81bc06" d="M12 1h10v10H12z"/><path fill="#05a6f0" d="M1 12h10v10H1z"/><path fill="#ffba08" d="M12 12h10v10H12z"/>
              </svg>
              Continue with Microsoft
            </button>

            <div className="mt-8 text-center pt-6 border-t border-white/10">
              <p className="text-white/70 text-sm">
                New here? <Link href="/signup" className="text-white font-bold hover:underline">Create Account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}