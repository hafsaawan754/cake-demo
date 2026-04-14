"use client";
import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <nav className="flex items-center justify-between p-4 md:p-6 lg:p-8 relative z-20">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-sm">
          <span className="text-[#E597A8] font-bold text-lg">🍰</span>
        </div>
        <span className="text-white font-bold text-lg md:text-xl tracking-tight">BentoCake</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        <Link href="/" className="text-white/90 hover:text-white transition-colors text-sm lg:text-base">Classes</Link>
        <Link href="#" className="text-white/90 hover:text-white transition-colors text-sm lg:text-base">About</Link>
        <Link href="#" className="text-white/90 hover:text-white transition-colors text-sm lg:text-base">Gallery</Link>
        
        {/* Auth Section */}
        <div className="flex items-center gap-4 border-l border-white/20 pl-6 ml-2">
          {!loading && (
            <>
              {session ? (
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-white text-xs font-bold leading-none">{session.user.name}</p>
                    <button 
                      onClick={() => signOut({ callbackUrl: '/logout' })}
                      className="text-white/70 hover:text-white text-[10px] uppercase tracking-widest transition-all"
                    >
                      Sign Out
                    </button>
                  </div>
                  {session.user.image ? (
                    <img src={session.user.image} alt="Profile" className="w-8 h-8 rounded-full border border-white/50" />
                  ) : (
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white text-xs">
                      {session.user.name?.charAt(0)}
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  href="/login" 
                  className="text-white/90 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider"
                >
                  Login
                </Link>
              )}
            </>
          )}
          
          <button className="bg-white text-[#E597A8] px-5 py-2.5 rounded-xl text-sm font-bold hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
            Book Now
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-10 h-10 bg-white/20 rounded-xl flex flex-col items-center justify-center gap-1.5"
      >
        <span className={`w-5 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-5 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-5 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white rounded-3xl p-6 shadow-2xl md:hidden flex flex-col gap-5 animate-in fade-in zoom-in duration-200">
          {session && (
            <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-2xl">
              <div className="w-10 h-10 bg-[#E597A8] rounded-full flex items-center justify-center text-white font-bold">
                {session.user.name?.charAt(0)}
              </div>
              <div>
                <p className="text-gray-800 font-bold text-sm">{session.user.name}</p>
                <p className="text-gray-500 text-xs">{session.user.email}</p>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <Link href="#" className="text-gray-700 font-medium py-2">Classes</Link>
            <Link href="#" className="text-gray-700 font-medium py-2">About</Link>
            <Link href="#" className="text-gray-700 font-medium py-2">Gallery</Link>
          </div>

          <div className="h-px bg-gray-100 w-full"></div>

          <div className="flex flex-col gap-3">
            {session ? (
              <button 
                onClick={() => signOut({ callbackUrl: '/logout' })}
                className="text-center text-red-400 font-bold py-2 text-sm"
              >
                Logout
              </button>
            ) : (
              <Link href="/login" onClick={() => setIsOpen(false)} className="text-center text-[#E597A8] font-bold py-2">
                Login
              </Link>
            )}
            <button className="bg-[#E597A8] text-white py-4 rounded-2xl font-bold">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}