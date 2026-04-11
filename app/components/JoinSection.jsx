"use client";
import { useState } from "react";

export default function JoinSection() {
  const [form, setForm] = useState({ name:"", email:"", phone:"" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className=" py-16 px-4 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0" style={{
        
      }}>
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="rounded-3xl p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-7 flex flex-col gap-5">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-2">Join the<br />cake class</h2>
                <p className="text-white/60 text-sm">We will get in touch with you for more information</p>
              </div>
              {submitted ? (
                <div className="flex-1 flex items-center justify-center py-8">
                  <div className="text-center">
                    <div className="text-5xl mb-3">🎉</div>
                    <p className="text-white font-semibold">Thank you! We'll be in touch soon.</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {["name","email","phone"].map((field) => (
                    <input key={field} type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      value={form[field]}
                      onChange={(e) => setForm({...form, [field]: e.target.value})}
                      className="w-full bg-white/80 placeholder-[#c06a74]/60 text-[#c06a74] text-sm rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-white/50"
                    />
                  ))}
                  <button onClick={() => setSubmitted(true)}
                    className="w-full bg-[#c0506a] text-white text-sm font-bold tracking-widest uppercase py-3.5 rounded-full hover:bg-[#a83c56] transition-colors mt-1 shadow-lg">
                    JOIN NOW
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon:"✈️", label:"Join our Telegram community", href:"#" },
                { icon:"📸", label:"Follow us on Instagram", href:"#" },
                { icon:"📍", label:"We are located in London", href:"#" },
              ].map((item) => (
                <a key={item.label} href={item.href}
                  className="bg-white/15 hover:bg-white/25 border border-white/20 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 transition-colors">
                  <span className="text-3xl">{item.icon}</span>
                  <p className="text-white text-sm text-center font-medium leading-snug">{item.label}</p>
                </a>
              ))}
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=300&h=300&fit=crop" 
                  alt="Delicious decorated cake" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.6; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}