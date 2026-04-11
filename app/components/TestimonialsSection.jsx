"use client";
import { useState, useEffect } from "react";

const testimonials = [
  { id:1, handle:"@_kristuuusha_", text:"This is just so delicious, I've never had a cake like this before because this cake combines all the flavors I love, and it's just the perfect combination. It's sweet enough, but not too sweet to make you feel sick. Thank you so much! It's insanely delicious!!", img:"https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=60&h=60&fit=crop" },
  { id:2, handle:"@aleeeksanndraa", text:"Hello, Kristina. Thank you very much for the cake. It is very delicious. I've never had anything like it before.", img:"https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=60&h=60&fit=crop" },
  { id:3, handle:"@_milamoorr_", text:"Wow, what beauty! Oh my gosh, it's divine. Thank you so much for your incredible work and art. I've already envied you a hundred times for not being able to be there on that day.", img:"https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=60&h=60&fit=crop" },
  { id:4, handle:"@d8voffical", text:"Very delicious, tender sponge cake, tasty cream, and a gorgeous design, all prepared on time. I am very pleased. The birthday person is thrilled. I think I'll order something else in the future.", img:"https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=60&h=60&fit=crop" },
];

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0" >
        {/* Animated floating background elements */}
        <div className="absolute top-10 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float-medium" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float-fast" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-float-medium" />
        
        {/* Animated stars/dots */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl border border-white/30">
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-8 animate-slide-down">
            Happy bakers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Testimonial - Large */}
            <div 
              className={`bg-white rounded-2xl p-5 flex flex-col gap-3 transition-all duration-500 ${
                isVisible ? 'animate-slide-in-left' : 'opacity-0'
              } hover:shadow-2xl hover:-translate-y-2 cursor-pointer`}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img 
                    src={testimonials[0].img} 
                    alt="Cake" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#D45E8A]/30 transition-all duration-300 hover:scale-110 hover:border-[#D45E8A]" 
                  />
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white transition-all duration-300 ${hoveredCard === 1 ? 'scale-110' : ''}`} />
                </div>
                <span className="text-[#D45E8A] text-sm font-semibold transition-all duration-300 hover:text-[#E597A8]">
                  {testimonials[0].handle}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed transition-all duration-300 group-hover:text-gray-800">
                "{testimonials[0].text}"
              </p>
              {/* Rating stars */}
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current animate-pulse-once" style={{animationDelay: `${i * 0.1}s`}} viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </div>

            {/* Second and Third Testimonials - Stacked */}
            <div className="flex flex-col gap-4">
              {[testimonials[1], testimonials[2]].map((t, idx) => (
                <div 
                  key={t.id} 
                  className={`bg-white rounded-2xl p-5 flex flex-col gap-3 transition-all duration-500 ${
                    isVisible ? 'animate-slide-in-right' : 'opacity-0'
                  } hover:shadow-2xl hover:-translate-y-2 cursor-pointer`}
                  onMouseEnter={() => setHoveredCard(t.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ animationDelay: `${0.2 + idx * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img 
                        src={t.img} 
                        alt="Cake" 
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#D45E8A]/30 transition-all duration-300 hover:scale-110 hover:border-[#D45E8A]" 
                      />
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white transition-all duration-300 ${hoveredCard === t.id ? 'scale-110' : ''}`} />
                    </div>
                    <span className="text-[#D45E8A] text-sm font-semibold transition-all duration-300 hover:text-[#E597A8]">
                      {t.handle}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">"{t.text}"</p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Fourth Testimonial - Full Width */}
            <div 
              className={`md:col-span-2 bg-white rounded-2xl p-5 flex flex-col gap-3 transition-all duration-500 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              } hover:shadow-2xl hover:-translate-y-2 cursor-pointer`}
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img 
                    src={testimonials[3].img} 
                    alt="Cake" 
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#D45E8A]/30 transition-all duration-300 hover:scale-110 hover:border-[#D45E8A]" 
                  />
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white transition-all duration-300 ${hoveredCard === 4 ? 'scale-110' : ''}`} />
                </div>
                <span className="text-[#D45E8A] text-sm font-semibold transition-all duration-300 hover:text-[#E597A8]">
                  {testimonials[3].handle}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">"{testimonials[3].text}"</p>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, -40px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-50px, 30px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 50px); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.6; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-once {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 12s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 8s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 15s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
        .animate-slide-down { animation: slide-down 0.8s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-pulse-once { animation: pulse-once 0.5s ease-out forwards; }
      `}</style>
    </section>
  );
}