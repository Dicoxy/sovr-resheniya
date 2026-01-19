"use client";

import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollProgressProps {
  color?: string;
  height?: number;
  showPercentage?: boolean;
}

export function ScrollProgress({ 
  color = "var(--primary)",
  height = 3,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] origin-left"
      style={{
        scaleX,
        height,
        background: `linear-gradient(90deg, ${color} 0%, #3b82f6 50%, #8b5cf6 100%)`,
      }}
    />
  );
}
