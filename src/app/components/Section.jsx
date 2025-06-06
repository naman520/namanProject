// components/Section.jsx
"use client";
import { motion } from "framer-motion";
import FloatingParticles from "./FloatingParticles";

export default function Section({ children, gradient }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-screen flex items-center justify-center text-white px-4 text-center relative overflow-hidden"
      style={{ background: gradient }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10" />
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {children}
        <FloatingParticles />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white bg-opacity-5 rounded-full blur-xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500 bg-opacity-10 rounded-full blur-2xl" />
    </motion.div>
  );
}