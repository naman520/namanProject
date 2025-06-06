"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Premium Materials",
    description: "Crafted from the finest sustainable materials for durability and comfort",
    icon: "🌿",
  },
  {
    title: "Ergonomic Design",
    description: "Scientifically designed for optimal comfort and posture support",
    icon: "🧘",
  },
  {
    title: "Easy Assembly",
    description: "Simple tools-free assembly in under 10 minutes",
    icon: "🛠️",
  },
  {
    title: "10-Year Warranty",
    description: "Our confidence in quality backed by industry-leading warranty",
    icon: "🔒",
  },
];

export default function Features() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
          Unmatched Quality
        </h2>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Every piece is designed with care to transform your living space
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}