"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import { heroSlides, HeroSlide } from "@/data/heroSlides";
import { MagneticButton } from "@/components/ui/MagneticButton";

const AUTOPLAY_INTERVAL = 6000; // 6 секунд

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  const currentSlide = heroSlides[currentIndex];

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Автопереключение
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(goNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, goNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const imageVariants = {
    enter: {
      scale: 1.1,
      opacity: 0,
      filter: "brightness(0.5)",
    },
    center: {
      scale: 1,
      opacity: 1,
      filter: "brightness(1)",
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    exit: {
      scale: 0.95,
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section 
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[var(--color-navy)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[var(--color-cyan)]/5 rounded-full blur-3xl" />
      </div>

      <div className="wrapper-wide relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          
          {/* Left: Text content */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Badge */}
                {currentSlide.badge && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-navy)]/5 border border-[var(--color-navy)]/10 text-sm xl:text-base text-[var(--color-navy)] mb-6"
                  >
                    <Sparkles className="w-4 h-4 xl:w-5 xl:h-5" />
                    <span>{currentSlide.badge}</span>
                  </motion.div>
                )}

                {/* Title */}
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-6"
                >
                  <span className="text-slate-800">{currentSlide.title}</span>
                  {currentSlide.titleAccent && (
                    <>
                      <br />
                      <span className="text-[var(--color-cyan)]">{currentSlide.titleAccent}</span>
                    </>
                  )}
                </motion.h1>

                {/* Subtitle */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg xl:text-xl text-slate-500 mb-8 max-w-lg leading-relaxed"
                >
                  {currentSlide.subtitle}
                </motion.p>

                {/* CTA buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <MagneticButton variant="primary" size="lg" href={currentSlide.cta.primary.href}>
                    {currentSlide.cta.primary.label}
                    <ArrowRight className="w-5 h-5" />
                  </MagneticButton>
                  
                  {currentSlide.cta.secondary && (
                    <MagneticButton variant="outline" size="lg" href={currentSlide.cta.secondary.href}>
                      {currentSlide.cta.secondary.label}
                    </MagneticButton>
                  )}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Image/Video */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative w-full h-full"
                >
                  {/* Glow effect behind image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-cyan)]/20 to-[var(--color-navy)]/10 rounded-3xl blur-3xl scale-90" />
                  
                  {/* Robot image */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={currentSlide.image}
                      alt={currentSlide.title}
                      width={600}
                      height={600}
                      className="object-contain drop-shadow-2xl"
                      priority={currentIndex === 0}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 lg:mt-12">
          {/* Dots */}
          <div className="flex gap-2">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${index === currentIndex 
                    ? "w-8 bg-[var(--color-cyan)]" 
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                  }
                `}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={goPrev}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-colors"
              aria-label="Предыдущий слайд"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goNext}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-colors"
              aria-label="Следующий слайд"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-0.5 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[var(--color-cyan)]"
            initial={{ width: "0%" }}
            animate={{ width: isPaused ? `${((currentIndex + 1) / heroSlides.length) * 100}%` : "100%" }}
            transition={{ 
              duration: isPaused ? 0 : AUTOPLAY_INTERVAL / 1000, 
              ease: "linear" 
            }}
            key={`${currentIndex}-${isPaused}`}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-sm">Листайте вниз</span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
