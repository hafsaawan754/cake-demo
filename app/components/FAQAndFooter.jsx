"use client";
import { useState } from "react";

const faqs = [
  { q:"What is included in the cost of the masterclass?", a:"The cost includes step-by-step guidance from an experienced pastry chef, all necessary materials, and ingredients for creating bento cakes." },
  { q:"Where and when are the masterclasses held?", a:"Our masterclasses are held at various locations across London. Dates and venues are confirmed upon registration. We typically host sessions on weekends." },
  { q:"How long does the masterclass last?", a:"The masterclass lasts approximately 2-3 hours, giving you plenty of time to learn, create, and enjoy the process." },
  { q:"Can I come to the class as part of a group?", a:"Absolutely! Group bookings are welcome and can be a wonderful experience for friends, colleagues or family. Please contact us for group rates." },
  { q:"How do I register for the masterclass?", a:"You can register by filling out the form on our website, or by contacting us via Telegram or Instagram." },
  { q:"What should I bring to the masterclass?", a:"Just yourself and your enthusiasm! All tools, ingredients, and aprons are provided. You'll take home your beautiful bento cake at the end." },
];

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e8758a]/20">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center py-4 text-left">
        <span className="text-[#c0506a] text-sm font-semibold pr-4">{faq.q}</span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-[#e8758a]/50 flex items-center justify-center transition-transform text-[#e8758a] ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <p className="pb-4 pr-10 text-gray-500 text-sm leading-relaxed">{faq.a}</p>}
    </div>
  );
}

export default function FAQAndFooter() {
  return (
    <>
      <section className="bg-[#f0d0d8] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-[#e8758a] font-bold leading-tight mb-8">
                Frequently<br />baked questions
              </h2>
              <div>{faqs.map((faq,i) => <FAQItem key={i} faq={faq} />)}</div>
            </div>
            <div className="hidden md:block">
              <img src="https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?w=400&h=200&fit=crop" alt="Cake" className="w-full h-80 object-cover rounded-3xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#e8758a] px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center">
                <span className="text-white text-xs font-bold">🎂</span>
              </div>
              {["📸","✈️"].map((icon, i) => (
                <a key={i} href="#" className="text-white/70 hover:text-white text-xl transition-colors">{icon}</a>
              ))}
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Links</h4>
              {["About","Agenda","Price","Feedback","Join us"].map((link) => (
                <a key={link} href="#" className="block text-white/70 text-sm hover:text-white transition-colors mb-1.5">{link}</a>
              ))}
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Contact</h4>
              <a href="tel:+34684243721" className="block text-white/70 text-sm hover:text-white mb-1.5">+34 684243721</a>
              <a href="mailto:cakelondo@w8v.org" className="block text-white/70 text-sm hover:text-white">cakelondo@w8v.org</a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-white/50 text-xs">All Rights Reserved</p>
            <p className="text-white/50 text-xs">©2024 Cake Londo / W8V LTD</p>
          </div>
        </div>
      </footer>
    </>
  );
}
