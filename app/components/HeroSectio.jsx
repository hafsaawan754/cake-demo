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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      {/* Wrapper to contain the layout */}
      <div className="bg-[#E597A8] rounded-t-[40px] overflow-hidden relative mx-4 md:mx-6 lg:mx-8 mt-0 shadow-2xl transform transition-all duration-700 hover:shadow-3xl">

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-pink-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        {/* Animated floating elements */}
        <div className="hidden lg:block absolute top-20 right-20 w-4 h-4 bg-white/40 rounded-full animate-ping"></div>
        <div className="hidden lg:block absolute bottom-40 left-10 w-6 h-6 bg-white/30 rounded-full animate-bounce"></div>

        {/* Top Navigation */}
        <Navbar />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 p-4 sm:p-5 md:p-8 lg:p-10 relative z-10">

          {/* Main Title Section */}
          <div className={`lg:col-span-7 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.1] lg:leading-[0.9] tracking-tight mb-4 md:mb-6 lg:mb-8 font-bold">
              Master the art of <br className="hidden sm:block" />
              <span className="relative inline-block">
                Bento Cakes
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/30 rounded-full"></span>
              </span>{" "}
              <span className="italic font-light text-pink-100">in</span>{" "}
              <span className="relative">
                London
                <span className="absolute -top-1 -right-4 text-xl sm:text-2xl">MBL</span>
              </span>
            </h1>
          </div>

          {/* Top Right Image (Portrait) - Mobile First */}
          <div className={`lg:col-span-5 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative group">
              <div className="w-full h-[250px] xs:h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] rounded-2xl md:rounded-3xl lg:rounded-[3rem] overflow-hidden border-4 border-white/30 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=400"
                  alt="Cake Detail"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-white text-[#E597A8] px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce hidden sm:block">
                Fresh!
              </div>
            </div>
          </div>

          {/* Bottom Left Image (Bento Boxes) */}
          <div className={`lg:col-span-4 mt-4 lg:-mt-10 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative group">
              <div className="rounded-2xl md:rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=400"
                  alt="Bento boxes"
                  className="w-full aspect-[4/3] sm:aspect-square object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              {/* Price tag */}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                From £45
              </div>
            </div>
          </div>

          {/* Description and Buttons */}
          <div className={`lg:col-span-8 flex flex-col justify-between pl-0 lg:pl-4 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="max-w-2xl">
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-sans mb-4 md:mb-6 lg:mb-8 leading-relaxed">
                Prepare your own bento cake under the guidance of an experienced pastry chef,
                in the pleasant company of Russian speakers in London.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">500+</div>
                  <div className="text-xs sm:text-sm text-white/80">Happy Bakers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">15+</div>
                  <div className="text-xs sm:text-sm text-white/80">Classes Monthly</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">5★</div>
                  <div className="text-xs sm:text-sm text-white/80">Reviews</div>
                </div>
              </div>
            </div>

            {/* Buttons - Stack on mobile, side by side on tablet/desktop */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-6 md:mb-8">
              <button className="group relative bg-[#D97D91] hover:bg-[#c46a7d] text-white py-3 md:py-4 px-5 sm:px-6 md:px-8 rounded-xl md:rounded-2xl uppercase tracking-widest text-xs md:text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden">
                <span className="relative z-10">Join Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              <button className="group border-2 border-white/50 text-white py-3 md:py-4 px-5 sm:px-6 md:px-8 rounded-xl md:rounded-2xl uppercase tracking-widest text-xs md:text-sm font-bold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                <span className="flex items-center justify-center gap-2">
                  Contact
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
            </div>

            {/* Bottom Right Image and Testimonial Container */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              {/* Bottom Right Image (Close-up) - Hidden on mobile, visible on larger screens */}
              <div className="hidden sm:block lg:hidden xl:block w-full sm:w-1/2">
                <div className="relative group max-w-md">
                  <div className="rounded-xl md:rounded-2xl lg:rounded-[2rem] overflow-hidden h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600"
                      alt="Cake Slice"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {/* Mini badge */}
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-[#E597A8] px-2 py-1 rounded-full text-xs font-bold">
                    New Recipe
                  </div>
                </div>
              </div>

              {/* Testimonial - Hidden on mobile/tablet, visible on xl screens */}
              <div className="hidden xl:block w-full sm:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-xs">
                  <p className="text-white/90 text-xs sm:text-sm italic">
                    "Amazing experience! Learned so much and made new friends. Highly recommend!"
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                    <span className="text-white/80 text-xs">- Sarah, London</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-only bottom image */}
          <div className="block sm:hidden col-span-12 mt-4">
            <div className="rounded-xl overflow-hidden h-32">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600"
                alt="Cake Slice"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mx-4 sm:mx-6 lg:mx-8">
          <MentorSection />
        </div>
        <div className="mx-4 sm:mx-6 lg:mx-8">
          <DeliciousDealSection />
        </div>
        <div className="mx-4 sm:mx-6 lg:mx-8">
          <PerfectForYouSection />
        </div>
{/* <div className="mx-4 sm:mx-6 lg:mx-8">
          <AgendaSection />
        </div> */}
        
<div className="mx-4 sm:mx-6 lg:mx-8">
          <TestimonialsSection />
        </div>
        <div className="mx-4 sm:mx-6 lg:mx-8">
          <JoinSection />
        </div>
        <div className="mx-4 sm:mx-6 lg:mx-8">
          <FAQAndFooter />
        </div>
        
      
       
        {/* Bottom wave decoration */}
        <div className="relative h-10 sm:h-12 md:h-16 lg:h-20 overflow-hidden">
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