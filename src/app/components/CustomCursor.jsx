"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (
        target instanceof Element &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a"))
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-200 ${
          isHovering ? "w-8 h-8" : "w-4 h-4"
        }`}
        style={{
          transform: `translate(${position.x - (isHovering ? 16 : 8)}px, ${
            position.y - (isHovering ? 16 : 8)
          }px)`,
          background: isHovering
            ? "rgba(255,255,255,0.2)"
            : "rgba(255,255,255,0.8)",
          borderRadius: "50%",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}