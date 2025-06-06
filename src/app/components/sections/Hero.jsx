"use client";
import { motion } from "framer-motion";

export default function Hero({ setActiveSection }) {
  return (
    <div className="max-w-6xl mx-auto text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-8"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Elevate Your Space
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Discover our premium collection of modern furniture that blends comfort with cutting-edge design
        </motion.p>
        
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSection(3)}
            className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold"
          >
            Shop Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSection(1)}
            className="px-8 py-3 border border-white text-white rounded-full font-semibold"
          >
            Explore Features
          </motion.button>
        </motion.div>
      </motion.div>
      
      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="relative w-full max-w-3xl mx-auto">
          <motion.img
            src="/sofa.png" // Replace with your image
            alt="Premium Sofa"
            className="w-full h-auto animate-float"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
          <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl -z-10" />
        </div>
      </motion.div>
    </div>
  );
}