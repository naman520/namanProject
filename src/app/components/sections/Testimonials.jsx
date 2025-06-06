"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The Aurora Sofa transformed our living room. It's both stylish and incredibly comfortable.",
    author: "Sarah J.",
    role: "Interior Designer",
  },
  {
    quote: "I've never had a dining table that gets so many compliments. The quality is exceptional.",
    author: "Michael T.",
    role: "Homeowner",
  },
  {
    quote: "Our Nova Bed is the perfect centerpiece for our bedroom. The storage is a game-changer.",
    author: "Emma & David",
    role: "Couple",
  },
];

export default function Testimonials() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-teal-800 mb-4">
          Happy Customers
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Hear what our customers say about our products
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-black"
          >
            <div className="text-4xl mb-4"></div>
            <p className="text-lg italic font-semibold text-gray-900 mb-6">{testimonial.quote}</p>
            <div>
              <div className="font-semibold text-blue-900">{testimonial.author}</div>
              <div className="text-sm text-gray-600">{testimonial.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}