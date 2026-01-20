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
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-navy)]/30",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    {
      // Variants - updated to navy/cyan palette
      "bg-[var(--color-navy)] text-white shadow-lg shadow-[var(--color-navy)]/20 hover:shadow-xl hover:shadow-[var(--color-navy)]/25 hover:bg-[var(--color-navy-light)]":
        variant === "primary",
      "bg-slate-800 text-white shadow-lg shadow-slate-800/20 hover:shadow-xl hover:shadow-slate-800/30 hover:bg-slate-700":
        variant === "secondary",
      "border-2 border-slate-200 text-slate-700 hover:border-[var(--color-navy)]/30 hover:bg-[var(--color-navy)]/5":
        variant === "outline",
      "text-slate-600 hover:text-[var(--color-navy)] hover:bg-[var(--color-navy)]/5":
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
