"use client";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter Bundle",
    price: "$2,499",
    features: [
      "1 Living Room Piece",
      "1 Bedroom Piece",
      "Basic Assembly",
      "1-Year Warranty",
    ],
    popular: false,
  },
  {
    name: "Premium Bundle",
    price: "$4,999",
    features: [
      "3 Living Room Pieces",
      "2 Bedroom Pieces",
      "White Glove Delivery",
      "5-Year Warranty",
      "Design Consultation",
    ],
    popular: true,
  },
  {
    name: "Luxury Suite",
    price: "$8,999",
    features: [
      "Complete Living Room",
      "Master Bedroom Suite",
      "Premium White Glove Delivery",
      "10-Year Warranty",
      "Personal Design Consultant",
      "Priority Customer Service",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
          Complete Packages
        </h2>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Curated bundles for every home and budget
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`relative p-8 rounded-3xl border ${
              plan.popular
                ? "bg-gradient-to-b from-emerald-500/10 to-transparent border-emerald-500/30"
                : "bg-white/5 border-white/10"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                MOST POPULAR
              </div>
            )}
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold text-white mb-6">{plan.price}</div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 rounded-full font-semibold ${
                plan.popular
                  ? "bg-emerald-500 text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}