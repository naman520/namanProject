"use client";
import { motion } from "framer-motion";
import sofa from "@/assets/R.png"
import Image from "next/image";

const products = [
  {
    name: "Aurora Sofa",
    price: "$1,299",
    description: "Modern modular sofa with premium fabric",
    image: sofa, // Replace with your image
  },
  {
    name: "Zenith Dining Table",
    price: "$899",
    description: "Solid oak table with minimalist design",
    image: sofa, // Replace with your image
  },
  {
    name: "Nova Bed",
    price: "$1,599",
    description: "Platform bed with integrated storage",
    image: sofa, // Replace with your image
  },
];

export default function Products() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
          Our Collection
        </h2>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Curated selection of modern furniture pieces
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md border border-white/10"
          >
            <div className="h-64 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                className="h-48 object-contain"
                
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
              <p className="text-gray-300 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-white">{product.price}</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-semibold"
                >
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}