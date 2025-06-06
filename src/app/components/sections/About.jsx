"use client"
import { motion } from "framer-motion";

export default function About() {
  const skills = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'AWS'];
  
  return (
    <motion.div 
      className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex-1 space-y-6"
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.h2 
          className="text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="space-y-4 text-lg leading-relaxed text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.p
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.8 }}
          >
            I'm a <span className="text-purple-400 font-semibold">passionate full-stack architect</span> who transforms ideas into stunning digital realities.
          </motion.p>
          <motion.p
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.9 }}
          >
            My expertise spans the entire development spectrum, from pixel-perfect frontend interfaces to robust backend systems.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap gap-3 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {skills.map((skill, i) => (
            <motion.span 
              key={skill}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="px-4 py-2 bg-white bg-opacity-10 backdrop-blur-md rounded-full text-sm font-medium border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="flex-1 relative"
        initial={{ scale: 0.8, rotate: -5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, type: 'spring' }}
      >
        <div className="relative w-80 h-80 mx-auto">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-30"
            animate={{ 
              opacity: [0.2, 0.3, 0.2],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-4 border-white border-opacity-20 flex items-center justify-center text-6xl"
            whileHover={{ scale: 1.05 }}
          >
            👨‍💻
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}