"use client";
import { motion } from "framer-motion";

export default function SectionIndicator({ sections, activeSection, setActiveSection }) {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
      {sections.map((_, index) => (
        <button
          key={index}
          onClick={() => setActiveSection(index)}
          className="flex items-center justify-end gap-2 group"
        >
          <motion.span
            animate={{
              width: activeSection === index ? "24px" : "12px",
              opacity: activeSection === index ? 1 : 0.5,
            }}
            className="h-[2px] bg-white rounded-full block"
          />
          {activeSection === index && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="text-lg text-black font-semibold hidden md:block"
            >
              {["Home", "Features", "Products", "Reviews", "Pricing", "Contact"][index]}
            </motion.span>
          )}
        </button>
      ))}
    </div>
  );
}