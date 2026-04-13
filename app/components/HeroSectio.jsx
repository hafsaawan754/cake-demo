"use client";
import DeliciousDealSection from "./DeliciousDealSection";
import MentorSection from "./MentorSection";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import PerfectForYouSection from "./PerfectForYouSection";
import AgendaSection from "./AgendaSection";
import TestimonialsSection from "./TestimonialsSection";
import JoinSection from "./JoinSection";
import FAQAndFooter from "./FAQAndFooter";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 overflow-x-hidden">
      {/* Wrapper to contain the layout */}
      <div className="bg-[#E597A8] rounded-t-[20px] sm:rounded-t-[30px] md:rounded-t-[40px] overflow-hidden relative mx-2 sm:mx-4 md:mx-6 lg:mx-8 mt-0 shadow-2xl transform transition-all duration-700 hover:shadow-3xl">

        {/* Decorative Elements - Responsive sizing */}
        <div className="absolute top-0 left-0 w-24 sm:w-32 md:w-48 lg:w-64 h-24 sm:h-32 md:h-48 lg:h-64 bg-white/5 rounded-full blur-2xl sm:blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-36 sm:w-48 md:w-72 lg:w-96 h-36 sm:h-48 md:h-72 lg:h-96 bg-pink-300/20 rounded-full blur-2xl sm:blur-3xl translate-x-1/2 translate-y-1/2"></div>

        {/* Animated floating elements - Show on tablet and above */}
        <div className="hidden sm:block absolute top-20 right-20 w-3 h-3 sm:w-4 sm:h-4 bg-white/40 rounded-full animate-ping"></div>
        <div className="hidden sm:block absolute bottom-40 left-10 w-4 h-4 sm:w-6 sm:h-6 bg-white/30 rounded-full animate-bounce"></div>

        {/* Top Navigation */}
        <Navbar />

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 md:gap-6 p-3 sm:p-4 md:p-5 lg:p-8 xl:p-10 relative z-10">

          {/* Main Title Section */}
          <div className={`sm:col-span-7 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.2] sm:leading-[1.1] lg:leading-[0.9] tracking-tight mb-3 sm:mb-4 md:mb-6 lg:mb-8 font-bold">
              Master the art of <br className="hidden xs:block sm:block" />
              <span className="relative inline-block">
                Bento Cakes
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white/30 rounded-full"></span>
              </span>{" "}
              <span className="italic font-light text-pink-100">in</span>{" "}
              <span className="relative">
                London
                <span className="absolute -top-1 -right-3 sm:-right-4 text-lg sm:text-xl md:text-2xl">MBL</span>
              </span>
            </h1>
          </div>

          {/* Top Right Image (Portrait) */}
          <div className={`sm:col-span-5 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative group">
              <div className="w-full h-[200px] xs:h-[240px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[3rem] overflow-hidden border-2 sm:border-4 border-white/30 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=400"
                  alt="Cake Detail"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Floating badge */}
              <div className="hidden xs:block sm:block absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white text-[#E597A8] px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-bounce">
                Fresh!
              </div>
            </div>
          </div>

          {/* Bottom Left Image (Bento Boxes) */}
          <div className={`sm:col-span-4 mt-3 sm:mt-4 lg:-mt-10 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative group">
              <div className="rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=400"
                  alt="Bento boxes"
                  className="w-full aspect-[4/3] sm:aspect-square object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              {/* Price tag */}
              <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 bg-black/70 backdrop-blur-sm text-white px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1 rounded-full text-[10px] xs:text-xs sm:text-sm">
                From £45
              </div>
            </div>
          </div>

          {/* Description and Buttons */}
          <div className={`sm:col-span-8 flex flex-col justify-between pl-0 sm:pl-4 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="max-w-2xl">
              <p className="text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-sans mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-relaxed">
                Prepare your own bento cake under the guidance of an experienced pastry chef,
                in the pleasant company of Russian speakers in London.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 mb-4 sm:mb-6 md:mb-8">
                <div className="text-center">
                  <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white">500+</div>
                  <div className="text-[10px] xs:text-xs sm:text-sm text-white/80">Happy Bakers</div>
                </div>
                <div className="text-center">
                  <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white">15+</div>
                  <div className="text-[10px] xs:text-xs sm:text-sm text-white/80">Classes Monthly</div>
                </div>
                <div className="text-center">
                  <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white">5★</div>
                  <div className="text-[10px] xs:text-xs sm:text-sm text-white/80">Reviews</div>
                </div>
              </div>
            </div>

            {/* Buttons - Side by side on tablet and mobile */}
            <div className="flex flex-row gap-2 xs:gap-3 w-full sm:w-auto mb-4 sm:mb-6 md:mb-8">
              <button className="group relative bg-[#D97D91] hover:bg-[#c46a7d] text-white py-2.5 xs:py-3 sm:py-3 md:py-4 px-4 xs:px-5 sm:px-6 md:px-8 rounded-xl md:rounded-2xl uppercase tracking-wider xs:tracking-widest text-[11px] xs:text-xs sm:text-sm md:text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden flex-1">
                <span className="relative z-10">Join Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              <button className="group border-2 border-white/50 text-white py-2.5 xs:py-3 sm:py-3 md:py-4 px-4 xs:px-5 sm:px-6 md:px-8 rounded-xl md:rounded-2xl uppercase tracking-wider xs:tracking-widest text-[11px] xs:text-xs sm:text-sm md:text-sm font-bold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex-1">
                <span className="flex items-center justify-center gap-1 xs:gap-2">
                  Contact
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
            </div>

            {/* Bottom Right Image and Testimonial Container */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
              {/* Bottom Right Image (Close-up) - Visible on tablet and mobile */}
              <div className="block sm:block lg:hidden xl:block w-full sm:w-1/2">
                <div className="relative group max-w-md">
                  <div className="rounded-xl md:rounded-2xl lg:rounded-[2rem] overflow-hidden h-28 xs:h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600"
                      alt="Cake Slice"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {/* Mini badge */}
                  <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-white/90 backdrop-blur-sm text-[#E597A8] px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-[9px] xs:text-xs font-bold">
                    New Recipe
                  </div>
                </div>
              </div>

              {/* Testimonial - Visible on tablet and mobile */}
              <div className="block w-full sm:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 max-w-xs">
                  <p className="text-white/80 sm:text-white/90 text-[11px] xs:text-xs sm:text-sm italic">
                    "Amazing experience! Learned so much and made new friends. Highly recommend!"
                  </p>
                  <div className="flex items-center gap-1.5 sm:gap-2 mt-1.5 sm:mt-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 rounded-full"></div>
                    <span className="text-white/70 sm:text-white/80 text-[10px] xs:text-xs">- Sarah, London</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Removed mobile-only bottom image since tablet view is now on mobile */}
        </div>
        
        {/* Sections with consistent responsive margins */}
        <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-8">
          <MentorSection />
        </div>
        <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-8">
          <DeliciousDealSection />
        </div>
        <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-8">
          <PerfectForYouSection />
        </div>
        {/* <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-8">
          <AgendaSection />
        </div> */}
        <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-8">
          <TestimonialsSection />
        </div>
        <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-8">
          <JoinSection />
        </div>
        <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-8">
          <FAQAndFooter />
        </div>
      
        {/* Bottom wave decoration - Responsive height */}
        <div className="relative h-8 xs:h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 overflow-hidden">
          <svg className="absolute w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="white" className="fill-current text-white/20"></path>
            <path d="M0,0V15.81C13,21.25,27.93,25.76,44.24,28.78c56.55,11.49,115.5,9.2,172.13-4,50.57-11.79,98.28-31.15,147.36-44.5,67.55-18.38,138.59-25.34,208.71-12.4,58.7,10.83,112.84,34.26,167.63,49.92C797.38,50.36,934.43,68.57,1070.22,44.9c24-4.29,47.25-11.56,69.78-20.08V0Z" opacity=".5" fill="white" className="fill-current text-white/40"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,118.42-7.4,177.14,4.62,44.58,9.15,87.47,23.93,131.45,35.27C983.58,79.87,1108.79,89.84,1200,36.58V0Z" fill="white" className="fill-current text-white/60"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}