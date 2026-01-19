"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  onClick,
  href,
  variant = "primary",
  size = "md",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    setPosition({
      x: distanceX * strength,
      y: distanceY * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = cn(
    "relative inline-flex items-center justify-center font-medium rounded-xl",
    "transition-all duration-200 overflow-hidden",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    // Glow effect on hover
    "before:absolute before:inset-0 before:rounded-xl before:opacity-0",
    "before:transition-opacity before:duration-300 hover:before:opacity-100",
    {
      // Variants
      "bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 before:bg-gradient-to-r before:from-primary before:to-blue-500":
        variant === "primary",
      "bg-slate-800 text-white shadow-lg shadow-slate-800/20 hover:shadow-xl hover:shadow-slate-800/30 before:bg-gradient-to-r before:from-slate-700 before:to-slate-600":
        variant === "secondary",
      "border-2 border-primary/20 text-primary hover:border-primary/40 hover:bg-primary/5 before:bg-primary/5":
        variant === "outline",
      "text-slate-600 hover:text-primary hover:bg-primary/5 before:bg-primary/5":
        variant === "ghost",
      // Sizes
      "px-4 py-2 text-sm": size === "sm",
      "px-6 py-3 text-base": size === "md",
      "px-8 py-4 text-lg": size === "lg",
    },
    className
  );

  const content = (
    <motion.span
      className="relative z-10 flex items-center gap-2"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={baseStyles}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      className={baseStyles}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
