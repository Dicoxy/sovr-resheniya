"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverScale?: number;
}

export function GlowCard({
  children,
  className,
  glowColor = "rgba(37, 99, 235, 0.15)",
  hoverScale = 1.02,
}: GlowCardProps) {
  return (
    <motion.div
      className={cn(
        "relative group rounded-2xl bg-white",
        "border border-slate-200/80",
        "shadow-lg shadow-slate-200/50",
        "transition-shadow duration-300",
        "hover:shadow-xl hover:shadow-slate-200/80",
        className
      )}
      whileHover={{ scale: hoverScale }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Glow effect */}
      <div 
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ background: glowColor }}
      />
      
      {/* Border glow */}
      <div 
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ 
          background: `linear-gradient(135deg, ${glowColor}, transparent 50%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 rounded-2xl bg-white h-full">
        {children}
      </div>
    </motion.div>
  );
}
