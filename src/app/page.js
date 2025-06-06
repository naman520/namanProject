"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import CustomCursor from "./components/CustomCursor";
import SectionIndicator from "./components/SectionIndicator";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Products from "./components/sections/Products";
import Testimonials from "./components/sections/Testimonials";
import Pricing from "./components/sections/Pricing";
import Contact from "./components/sections/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const sections = [
    { component: Hero, bg: "bg-gradient-to-br from-indigo-900 to-purple-900" },
    { component: Features, bg: "bg-gradient-to-br from-purple-900 to-blue-900" },
    { component: Products, bg: "bg-gradient-to-br from-blue-900 to-teal-900" },
    { component: Testimonials, bg: "bg-gradient-to-br from-teal-900 to-emerald-900" },
    { component: Pricing, bg: "bg-gradient-to-br from-emerald-900 to-green-900" },
    { component: Contact, bg: "bg-gradient-to-br from-green-900 to-gray-900" },
  ];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        setActiveSection((prev) => Math.min(prev + 1, sections.length - 1));
      } else if (e.key === "ArrowUp") {
        setActiveSection((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Touch navigation
  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e) => {
      touchEndY = e.changedTouches[0].screenY;
      if (touchEndY < touchStartY - 50) {
        setActiveSection((prev) => Math.min(prev + 1, sections.length - 1));
      } else if (touchEndY > touchStartY + 50) {
        setActiveSection((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Wheel navigation
  useEffect(() => {
    let wheelTimeout;
    const handleWheel = (e) => {
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
          setActiveSection((prev) => Math.min(prev + 1, sections.length - 1));
        } else {
          setActiveSection((prev) => Math.max(prev - 1, 0));
        }
      }, 100);
    };
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <CustomCursor />
      <SectionIndicator 
        sections={sections} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full h-full absolute top-0 left-0 ${sections[activeSection].bg}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-cyan-100 " />
          <div className="relative z-10 w-full h-full flex items-center justify-center px-4 overflow-y-auto">
            {React.createElement(sections[activeSection].component, {
              setActiveSection,
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}