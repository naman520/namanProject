"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Have questions? Our team is here to help
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
                placeholder="Your message..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 bg-white text-gray-900 rounded-lg font-semibold"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">Contact Info</h3>
            <p className="text-gray-300">123 Design Street, Creative City</p>
            <p className="text-gray-300">hello@modernfurnish.com</p>
            <p className="text-gray-300">+1 (555) 123-4567</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">Showroom Hours</h3>
            <p className="text-gray-300">Monday - Friday: 10AM - 7PM</p>
            <p className="text-gray-300">Saturday: 11AM - 6PM</p>
            <p className="text-gray-300">Sunday: 12PM - 5PM</p>
          </div>
          
          <div className="space-y-4 pt-4">
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <div className="flex gap-4">
              {["Instagram", "Pinterest", "Twitter", "Facebook"].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}