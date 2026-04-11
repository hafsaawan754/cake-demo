"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const reasons = [
  { text: "You love cooking and want to start mastering new pastry art", img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=200&fit=crop" },
  { text: "You value an individual approach", img: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&h=200&fit=crop" },
  { text: "You seek inspiration and want to develop your creative skills.", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=200&fit=crop" },
  { text: "You want to meet new people in the Russian-speaking community of London", img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=200&fit=crop" },
];

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const centerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, type: "spring", stiffness: 100 },
  },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" },
  tap: { scale: 0.95 },
};

export default function PerfectForYouSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.section
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-16 px-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #E597A8 0%, #E67A9F 50%, #D45E8A 100%)"
      }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          {/* Left Column */}
          <motion.div variants={containerVariants} className="flex flex-col gap-5">
            {[reasons[0], reasons[2]].map((r, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-white/40 backdrop-blur-sm border border-white/50 rounded-2xl overflow-hidden shadow-md"
              >
                <motion.img
                  src={r.img}
                  alt="Cake"
                  className="w-full h-28 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="text-[#c0506a] text-sm text-center leading-snug font-medium p-4">{r.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Center Column */}
          <motion.div variants={centerVariants} className="flex flex-col items-center gap-5">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/20 backdrop-blur-md rounded-3xl px-8 py-14 flex flex-col items-center justify-center text-center shadow-xl border border-white/30"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-serif text-4xl md:text-5xl text-white font-bold leading-tight"
              >
                Perfect<br />for you<br />if...
              </motion.h2>
            </motion.div>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white/90 text-[#D45E8A] text-sm font-bold tracking-widest uppercase py-3 px-10 rounded-full shadow-lg transition-all"
            >
              JOIN NOW
            </motion.button>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={containerVariants} className="flex flex-col gap-5">
            {[reasons[1], reasons[3]].map((r, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-white/40 backdrop-blur-sm border border-white/50 rounded-2xl overflow-hidden shadow-md"
              >
                <motion.img
                  src={r.img}
                  alt="Cake"
                  className="w-full h-28 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="text-[#c0506a] text-sm text-center leading-snug font-medium p-4">{r.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}