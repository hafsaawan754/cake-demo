"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
 

export default function SignUpPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 overflow-x-hidden">
    

      <div className="flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
        <div 
          className={`w-full max-w-lg bg-[#E597A8] rounded-[30px] md:rounded-[40px] shadow-2xl overflow-hidden relative p-8 md:p-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          {/* Decorative Elements (Branding Consistency) */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                Join the <span className="italic font-light text-pink-100">Lab</span>
              </h2>
              <p className="text-white/80 font-sans text-sm md:text-base">
                Create an account to start your sweet journey in London
              </p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Full Name Field */}
              <div className="space-y-1.5">
                <label className="text-white text-[10px] uppercase tracking-[0.2em] font-bold ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Alex Doe"
                  className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 focus:ring-2 focus:ring-white/30 transition-all duration-300"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label className="text-white text-[10px] uppercase tracking-[0.2em] font-bold ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="chef@example.com"
                  className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 focus:ring-2 focus:ring-white/30 transition-all duration-300"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-1.5">
                <label className="text-white text-[10px] uppercase tracking-[0.2em] font-bold ml-1">Create Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full px-5 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 focus:ring-2 focus:ring-white/30 transition-all duration-300"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3 px-1 pt-2">
                <input type="checkbox" className="mt-1 rounded accent-pink-500 w-4 h-4 border-none" required />
                <p className="text-[11px] text-white/80 leading-relaxed">
                  I agree to the <a href="#" className="underline">Terms of Service</a> and want to receive sweet updates about new classes.
                </p>
              </div>

              {/* Submit Button */}
              <button className="w-full group relative bg-white text-[#E597A8] py-4 mt-4 rounded-2xl uppercase tracking-[0.2em] text-xs font-bold shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 overflow-hidden">
                <span className="relative z-10">Create Account</span>
              </button>
            </form>

            {/* Link back to Login */}
            <div className="mt-8 text-center border-t border-white/10 pt-6">
              <p className="text-white/70 text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-white font-bold hover:underline decoration-2 underline-offset-4 transition-all">
                  Sign In Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}