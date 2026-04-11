"use client";
import React, { useState } from 'react';
import { ChefHat, Clock, MapPin, Zap } from 'lucide-react';

export default function DeliciousDeal() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-[#f0d0d8] p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      {/* Container */}
      <div className="w-full max-w-6xl">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Card - Details */}
          <div 
            className="bg-gradient-to-br from-rose-400 to-pink-400 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl transform transition-all duration-300 hover:shadow-3xl hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #E597A8 0%, #E67A9F 50%, #D45E8A 100%)'
            }}
          >
            {/* Header */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Delicious deal
            </h1>

            {/* Includes Section */}
            <div className="mb-8">
              <p className="text-white text-sm font-semibold mb-4 tracking-widest uppercase">
                Includes:
              </p>
              <ul className="space-y-3">
                {[
                  { icon: ChefHat, label: 'Expertise' },
                  { icon: Zap, label: 'Ingredients' },
                  { icon: ChefHat, label: 'Guidance' },
                  { icon: Zap, label: 'Environment' },
                  { icon: ChefHat, label: 'Cake' },
                  { icon: Zap, label: 'Refreshments' },
                  { icon: ChefHat, label: 'Photos' }
                ].map((item, idx) => (
                  <li 
                    key={idx}
                    className="text-white text-base font-semibold flex items-center gap-3 transform transition-all hover:translate-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price and Details */}
            <div className="mb-8 pt-8 border-t border-white border-opacity-30">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-6xl sm:text-7xl font-bold text-white">50</span>
                <span className="text-3xl sm:text-4xl font-bold text-white">£</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Duration: 2-3 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-white" />
                  <span className="text-white font-medium">Location: London</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              className="w-full bg-white text-pink-500 font-bold py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl active:scale-95 uppercase tracking-wider"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              JOIN NOW
            </button>
          </div>

          {/* Right Card - Image Preview */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:shadow-3xl hover:scale-105">
            {/* Background Image with Gradient Overlay */}
            <div 
              className="relative h-96 sm:h-full min-h-80 md:min-h-96 lg:min-h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(229,151,168,0.8) 0%, rgba(198,93,120,0.8) 100%), url('/images/Rainbow-Cake-High-Altitude-Sprinkles-Lucky-Charms-St-Patricks-Day-007.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Decorative Elements */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8">
                {/* Container and Utensils Illustration */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Pink Glass/Container */}
                  <div className="absolute w-24 h-32 sm:w-32 sm:h-40 lg:w-40 lg:h-48 rounded-2xl border-4 border-pink-300 opacity-70 transform -rotate-12 animate-pulse"></div>
                  
                  {/* Add animations to global CSS or style */}
                  <style jsx>{`
                    @keyframes spin-slow {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                    }
                    
                    .animate-spin-slow { animation: spin-slow 8s linear infinite; }
                    .animate-spin-medium { animation: spin-slow 4s linear infinite; }
                    .animate-spin-fast { animation: spin-slow 2s linear infinite; }
                    .animate-spin-reverse { animation: spin-slow 6s linear infinite reverse; }
                    .animate-pulse-spin { animation: spin-slow 6s linear infinite, pulse 2s ease-in-out infinite; }
                    
                    @keyframes pulse {
                      0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
                      50% { opacity: 0.8; transform: scale(1.1) rotate(180deg); }
                    }
                    
                    .animate-bounce-spin { animation: spin-slow 6s linear infinite, bounce 2s ease infinite; }
                    
                    @keyframes bounce {
                      0%, 100% { transform: translateY(0) rotate(0deg); }
                      50% { transform: translateY(-10px) rotate(180deg); }
                    }
                    
                    .hover-spin { transition: transform 0.5s ease; }
                    .hover-spin:hover { transform: rotate(360deg); }
                  `}</style>

                  {/* Single White Container Box with multiple spinning elements */}
                  <div className="absolute w-20 h-24 sm:w-24 sm:h-32 lg:w-32 lg:h-40 bg-white rounded-2xl border-4 border-pink-200 shadow-2xl transform rotate-6 flex items-center justify-center">
                    <img 
                      src="/images/images.jpg" 
                      alt="" 
                      className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 border-pink-300 shadow-lg animate-spin-slow"
                    />
                  </div>

                  {/* Additional container with multiple images */}
                  <div className="absolute w-20 h-24 sm:w-24 sm:h-32 lg:w-32 lg:h-40 bg-white rounded-2xl border-4 border-pink-200 shadow-2xl transform rotate-6 flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img 
                        src="/images/images.jpg" 
                        alt="" 
                        className="absolute w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full object-cover border-2 border-pink-300 shadow-lg animate-spin-slow"
                        style={{ transform: 'translate(-15px, -15px)' }}
                      />
                      <img 
                        src="/images/images.jpg" 
                        alt="" 
                        className="absolute w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full object-cover border-2 border-pink-300 shadow-lg animate-spin-reverse"
                        style={{ transform: 'translate(15px, 15px)' }}
                      />
                    </div>
                  </div>

                  {/* Gradient Circle with Image */}
                  <div className="absolute w-20 h-24 sm:w-24 sm:h-32 lg:w-32 lg:h-40 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl border-4 border-white shadow-2xl transform rotate-6 flex items-center justify-center">
                    <div className="relative">
                      <img 
                        src="/images/images.jpg" 
                        alt="" 
                        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover border-4 border-white shadow-lg animate-spin-slow"
                      />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-ping"></div>
                    </div>
                  </div>

                  {/* Pink Utensils/Brushes */}
                  <div className="absolute top-12 right-8 sm:top-16 sm:right-12 lg:top-24 lg:right-16 flex flex-col gap-2">
                    <div className="w-3 h-16 sm:w-4 sm:h-20 lg:w-5 lg:h-28 bg-pink-300 rounded-full opacity-60 transform rotate-45"></div>
                    <div className="w-3 h-16 sm:w-4 sm:h-20 lg:w-5 lg:h-28 bg-pink-400 rounded-full opacity-70 transform -rotate-12"></div>
                    <div className="w-3 h-16 sm:w-4 sm:h-20 lg:w-5 lg:h-28 bg-rose-300 rounded-full opacity-60 transform rotate-25"></div>
                  </div>

                  {/* Decorative Dots */}
                  <div className="absolute bottom-16 left-8 sm:bottom-20 sm:left-12 space-y-2 sm:space-y-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-200 rounded-full opacity-50"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-300 rounded-full opacity-60"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-200 rounded-full opacity-50"></div>
                  </div>

                  {/* Glass with Pink Drink */}
                  <div className="absolute top-8 left-8 sm:top-12 sm:left-12 lg:top-16 lg:left-16">
                    <div className="w-12 h-20 sm:w-16 sm:h-28 lg:w-20 lg:h-36 border-2 border-pink-200 rounded-lg opacity-60 flex flex-col justify-end">
                      <div className="h-1/2 bg-pink-300 opacity-70 rounded-b-md"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-transparent to-rose-200 opacity-40"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Text for Mobile */}
      <style>{`
        @media (max-width: 640px) {
          .space-y-3 > li {
            font-size: 0.875rem;
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}