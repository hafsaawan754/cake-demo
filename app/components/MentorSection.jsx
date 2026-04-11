'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MentorsSectionV2() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeMentor, setActiveMentor] = useState(0);

  useEffect(() => {
    setActiveMentor(activeSlide % 2);
  }, [activeSlide]);

  const mentors = [
    {
      id: 1,
      name: 'Kristina',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1c958e?w=400&h=400&fit=crop',
      thumbImage: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=300&h=350&fit=crop',
      bio: 'Meet Kristina, our expert chef with over 8 years of experience, who has enhanced her skills through various pastry courses, including the prestigious Le Cordon Bleu.'
    },
    {
      id: 2,
      name: 'Milana',
      image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=400&fit=crop',
      thumbImage: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=300&h=350&fit=crop',
      bio: 'Meet Milana, our expert chef with over 8 years of experience, who has enhanced her skills through various pastry courses.'
    }
  ];

  const slides = [
    { type: 'mentors', content: 'mentors' },
    { type: 'certificate', content: 'certificate' },
    { type: 'mentors', content: 'mentors' }
  ];

  const handlePrev = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const handleNext = () => setActiveSlide((prev) => (prev + 1) % slides.length);

  return (
    <div className="min-h-screen p-3 sm:p-6 md:p-8 lg:p-12 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-56 sm:h-56 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 leading-tight hover:scale-105 transition-all duration-500">
            Meet your<br className="hidden sm:block" />sweet mentors
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            We are a team of professionals passionate about the art of pastry. We conduct online classes for the aspiring bakers worldwide.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">

          {/* Left Card */}
          <div
            className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl transition-all duration-500 flex flex-col justify-between min-h-80 sm:min-h-96 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #E597A8 0%, #E67A9F 50%, #D45E8A 100%)',
              boxShadow: '0 20px 60px rgba(236, 72, 153, 0.3)'
            }}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-6 leading-tight hover:translate-x-2 transition-all duration-500">
                Master the Art<br />of Pastry
              </h2>
              <p className="text-white/95 text-xs sm:text-sm md:text-base leading-relaxed">
                We are a team of professionals passionate about the art of pastry. We conduct online classes tailored for aspiring bakers worldwide.
              </p>
            </div>

            {/* Mentor Thumbnail Cards */}
            <div className="mt-6 sm:mt-8">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {mentors.map((mentor, idx) => (
                  <div
                    key={mentor.id}
                    className={`rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-500 cursor-pointer group ${
                      activeMentor === idx ? 'ring-3 sm:ring-4 ring-white scale-105' : ''
                    }`}
                    onClick={() => setActiveMentor(idx)}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={mentor.thumbImage}
                        alt={mentor.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="bg-white p-2 sm:p-3">
                      <p className="font-bold text-pink-600 text-center text-xs sm:text-sm">{mentor.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div
            className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl transition-all duration-500 flex flex-col hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #E597A8 0%, #E67A9F 50%, #D45E8A 100%)',
              boxShadow: '0 20px 60px rgba(236, 72, 153, 0.3)'
            }}
          >
            {/* Mentor Profile */}
            <div className="mb-4 sm:mb-6 md:mb-8 transition-all duration-500">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:scale-110 transition-all duration-500">
                    <img
                      src={mentors[activeMentor].image}
                      alt={mentors[activeMentor].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 hover:translate-x-2 transition-all duration-500">
                    {mentors[activeMentor].name}
                  </h3>
                  <p className="text-white/95 text-xs sm:text-sm md:text-base leading-relaxed">
                    {mentors[activeMentor].bio}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <button className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-500 mb-4 sm:mb-6 uppercase tracking-wide hover:scale-105 active:scale-95 text-xs sm:text-sm">
              Contact
            </button>

            {/* Certificate Section */}
            <div className="mb-4 sm:mb-6 md:mb-8">
              <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <img
                  src="https://picsum.photos/seed/diploma1/600/200"
                  alt="Certificate"
                  className="w-full h-24 sm:h-32 object-cover opacity-60"
                />
                <div className="p-3 sm:p-4 flex items-center gap-3">
                  <span className="text-2xl">📜</span>
                  <div>
                    <p className="text-gray-700 font-bold text-xs sm:text-sm">CERTIFICATE</p>
                    <p className="text-gray-500 text-xs">Professional Qualification</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Dots & Navigation */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-auto pt-3 sm:pt-4 md:pt-6 border-t border-white/20">
              <button
                onClick={handlePrev}
                className="p-1.5 sm:p-2 md:p-3 hover:bg-white/20 rounded-full transition-all duration-500 hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
              </button>
              <div className="flex gap-1.5 sm:gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`rounded-full transition-all duration-500 hover:scale-110 active:scale-95 h-1.5 sm:h-2 ${
                      index === activeSlide ? 'bg-white w-5 sm:w-6 md:w-8' : 'bg-white/40 w-1.5 sm:w-2 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="p-1.5 sm:p-2 md:p-3 hover:bg-white/20 rounded-full transition-all duration-500 hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
        .animate-fade-in { animation: fadeIn 0.6s ease-out; }
        .animate-slide-in-left { animation: slideInLeft 0.7s ease-out; }
        .animate-slide-in-right { animation: slideInRight 0.7s ease-out 0.1s both; }
        @media (max-width: 640px) { .text-6xl { font-size: 2rem; } .text-5xl { font-size: 1.875rem; } .min-h-96 { min-height: 20rem; } }
        @media (min-width: 641px) and (max-width: 1023px) { .text-6xl { font-size: 2.5rem; } .text-5xl { font-size: 2rem; } }
      `}</style>
    </div>
  );
}
