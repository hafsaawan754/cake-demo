"use client";
import { useState, useEffect } from "react";

const slides = [
  { id:1, title:"Introduction", items:["Welcome and introduction to the participants","Brief overview of the history and traditions of bento cakes"], img:"https://picsum.photos/seed/agenda1/600/250" },
  { id:2, title:"Preparation", items:["Understanding the ingredients and tools","Mixing and preparing the sponge cake batter","Baking techniques and oven tips"], img:"https://picsum.photos/seed/agenda2/600/250" },
  { id:3, title:"Decoration", items:["Creating cream and frosting","Applying base layers and colours","Designing patterns and motifs"], img:"https://picsum.photos/seed/agenda3/600/250" },
  { id:4, title:"Finalisation", items:["Completing your personalised bento cake","Packaging and presentation of the finished work"], img:"https://picsum.photos/seed/agenda4/600/250" },
  { id:5, title:"Q&A", items:["Open discussion and tips from our expert mentors","Sharing your creations and feedback"], img:"https://picsum.photos/seed/agenda5/600/250" },
];

export default function AgendaSection() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [active]);

  const prev = () => {
    setDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      setActive((i) => (i - 1 + slides.length) % slides.length);
    }, 150);
    setTimeout(() => setIsAnimating(false), 650);
  };
  
  const next = () => {
    setDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 150);
    setTimeout(() => setIsAnimating(false), 650);
  };

  const prevSlide = slides[(active - 1 + slides.length) % slides.length];
  const nextSlide = slides[(active + 1) % slides.length];

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0" s>
        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float-medium" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float-fast" />
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-white/10 rounded-full blur-xl animate-float-medium" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl border border-white/30">
          <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-8 animate-fade-in">
            Culinary workshop agenda
          </h2>
          
          <div className="flex items-stretch gap-4 overflow-hidden">
            {/* Prev */}
            <div className="hidden md:block flex-shrink-0 w-40 opacity-50 pointer-events-none animate-slide-in-left">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 h-full border border-white/30">
                <h4 className="font-serif text-white text-lg font-semibold mb-2">{prevSlide.title}</h4>
                {prevSlide.items.slice(0,2).map((item,i) => (
                  <p key={i} className="text-white/80 text-xs mb-1">• {item}</p>
                ))}
              </div>
            </div>

            {/* Active */}
            <div className="flex-1 min-w-0">
              <div className={`bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
                isAnimating ? (direction === "right" ? "animate-slide-out-left" : "animate-slide-out-right") : "animate-slide-in"
              }`}>
                <div className="p-6">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#D45E8A] font-bold mb-3">
                    {slides[active].title}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {slides[active].items.map((item,i) => (
                      <li key={i} className="flex items-start gap-2 text-[#c0506a]/80 text-sm animate-fade-in" style={{animationDelay: `${i * 0.1}s`}}>
                        <span className="text-[#D45E8A] mt-0.5 flex-shrink-0 animate-bounce-in">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <img 
                  src={slides[active].img} 
                  alt={slides[active].title} 
                  className="w-full h-44 object-cover transition-transform duration-700 hover:scale-105" 
                />
              </div>
            </div>

            {/* Next */}
            <div className="hidden md:block flex-shrink-0 w-40 opacity-50 pointer-events-none animate-slide-in-right">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 h-full border border-white/30">
                <h4 className="font-serif text-white text-lg font-semibold mb-2">{nextSlide.title}</h4>
                {nextSlide.items.slice(0,2).map((item,i) => (
                  <p key={i} className="text-white/80 text-xs mb-1">• {item}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button 
              onClick={prev} 
              className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-x-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            
            {slides.map((_,i) => (
              <button 
                key={i} 
                onClick={() => {
                  setDirection(i > active ? "right" : "left");
                  setActive(i);
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === active 
                    ? "w-6 h-2.5 bg-white shadow-lg" 
                    : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60 hover:scale-110"
                }`} 
              />
            ))}
            
            <button 
              onClick={next} 
              className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110 hover:translate-x-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, 40px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, -20px); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.5; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slide-out-left {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(-100%); }
        }
        @keyframes slide-out-right {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(100%); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 0.5; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 0.5; transform: translateX(0); }
        }
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0); }
          60% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 10s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 12s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        .animate-slide-in { animation: slide-in 0.5s ease-out forwards; }
        .animate-slide-out-left { animation: slide-out-left 0.3s ease-in forwards; }
        .animate-slide-out-right { animation: slide-out-right 0.3s ease-in forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.5s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.5s ease-out forwards; }
        .animate-bounce-in { animation: bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; }
      `}</style>
    </section>
  );
}