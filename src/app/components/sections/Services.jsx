"use client"
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    { icon: '🚀', title: 'Custom Web Development', desc: 'Tailored solutions that exceed expectations' },
    { icon: '🎨', title: 'UI/UX Design', desc: 'Beautiful interfaces that users love' },
    { icon: '⚡', title: 'Performance Optimization', desc: 'Lightning-fast, scalable applications' },
    { icon: '🔧', title: 'Full-Stack Development', desc: 'End-to-end application architecture' },
    { icon: '📱', title: 'Mobile-First Design', desc: 'Responsive across all devices' },
    { icon: '🛡️', title: 'Security & SEO', desc: 'Protected and discoverable solutions' },
  ];

  return (
    <motion.div 
      className="max-w-6xl space-y-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="text-center space-y-4"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.h2 
          className="text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Services I Offer
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Comprehensive solutions to bring your digital vision to life
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1 + index * 0.1 }}
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className="group relative p-6 bg-white bg-opacity-5 backdrop-blur-md rounded-2xl border border-white border-opacity-10 transition-all duration-300"
          >
            <motion.div 
              className="text-4xl mb-4"
              whileHover={{ rotate: 10 }}
            >
              {service.icon}
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
            <p className="text-gray-300">{service.desc}</p>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}