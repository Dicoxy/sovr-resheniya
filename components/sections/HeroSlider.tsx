"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { heroSlides } from "@/data/heroSlides";
import { MagneticButton } from "@/components/ui/MagneticButton";

const AUTOPLAY_INTERVAL = 6000;

// Trust logos
const trustLogos = [
  { name: "Pudu" },
  { name: "Viggo" },
  { name: "X-Human" },
  { name: "Yarbo" },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // Restart video when slide changes
  useEffect(() => {
    if (videoRef.current && currentSlide.video) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [currentIndex, currentSlide.video]);

  const textVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction < 0 ? 40 : -40,
      opacity: 0,
    }),
  };

  return (
    <section 
      className="relative h-screen flex items-center overflow-hidden bg-[var(--color-dark)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* === BACKGROUND LAYER === */}
      
      {/* Base dark background - always visible */}
      <div className="absolute inset-0 bg-[var(--color-dark)]" />
      
      {/* Video background - DESKTOP ONLY */}
      <AnimatePresence mode="wait">
        {currentSlide.video && (
          <motion.div 
            key={`video-${currentSlide.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 hidden md:block"
          >
            {/* Video positioned to the right, extends beyond left edge for smooth gradient */}
            <div className="absolute top-0 bottom-0 left-[20%] right-0">
              <video
                ref={videoRef}
                src={currentSlide.video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center center' }}
              />
            </div>
            
            {/* Wide gradient overlay - starts from far left for smooth blend */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(
                  to right,
                  rgba(10, 15, 28, 1) 0%,
                  rgba(10, 15, 28, 1) 20%,
                  rgba(10, 15, 28, 0.95) 30%,
                  rgba(10, 15, 28, 0.85) 40%,
                  rgba(10, 15, 28, 0.65) 50%,
                  rgba(10, 15, 28, 0.5) 60%,
                  rgba(10, 15, 28, 0.35) 75%,
                  rgba(10, 15, 28, 0.25) 100%
                )`
              }}
            />
            
            {/* Top/bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-dark)]/50 via-transparent to-[var(--color-dark)]/60 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Static image fallback for slides without video - DESKTOP ONLY */}
      {!currentSlide.video && (
        <div className="absolute inset-0 hidden md:block">
          <div className="absolute top-0 bottom-0 left-[20%] right-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${currentSlide.image})` }}
            />
          </div>
          
          {/* Same wide gradient overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(
                to right,
                rgba(10, 15, 28, 1) 0%,
                rgba(10, 15, 28, 1) 20%,
                rgba(10, 15, 28, 0.95) 30%,
                rgba(10, 15, 28, 0.85) 40%,
                rgba(10, 15, 28, 0.65) 50%,
                rgba(10, 15, 28, 0.5) 60%,
                rgba(10, 15, 28, 0.35) 75%,
                rgba(10, 15, 28, 0.25) 100%
              )`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-dark)]/50 via-transparent to-[var(--color-dark)]/60 pointer-events-none" />
        </div>
      )}

      {/* MOBILE: Simple gradient background, no video/image */}
      <div className="absolute inset-0 md:hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark)] via-[var(--color-navy)]/30 to-[var(--color-dark)]" />
        {/* Subtle glow */}
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-[var(--color-cyan)]/5 rounded-full blur-[100px]" />
      </div>

      {/* === CONTENT LAYER === */}
      <div className="relative z-10 w-full">
        <div className="wrapper-wide">
          
          {/* Main content - left aligned, max-width for text zone */}
          <div className="max-w-xl lg:max-w-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide.id}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="space-y-4 md:space-y-6"
              >
                {/* Badge */}
                {currentSlide.badge && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-white/70 backdrop-blur-sm"
                  >
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[var(--color-cyan)] animate-pulse" />
                    <span>{currentSlide.badge}</span>
                  </motion.div>
                )}

                {/* HUGE Title - responsive sizing */}
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold leading-[0.95] tracking-tight"
                >
                  <span className="text-white">{currentSlide.title}</span>
                  {currentSlide.titleAccent && (
                    <span className="text-[var(--color-cyan)] block">{currentSlide.titleAccent}</span>
                  )}
                </motion.h1>

                {/* Subtitle */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-base md:text-lg lg:text-xl text-white/60 max-w-md lg:max-w-lg leading-relaxed"
                >
                  {currentSlide.subtitle}
                </motion.p>

                {/* CTA buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4"
                >
                  {/* Mobile: full width button */}
                  <MagneticButton 
                    variant="primary" 
                    size="lg" 
                    href={currentSlide.cta.primary.href}
                    className="w-full sm:w-auto justify-center"
                  >
                    {currentSlide.cta.primary.label}
                    <ArrowRight className="w-5 h-5" />
                  </MagneticButton>
                  
                  {currentSlide.cta.secondary && (
                    <MagneticButton 
                      variant="ghost" 
                      size="lg" 
                      href={currentSlide.cta.secondary.href}
                      className="w-full sm:w-auto justify-center text-white/80 hover:text-white hover:bg-white/10 border-white/20"
                    >
                      {currentSlide.cta.secondary.label}
                    </MagneticButton>
                  )}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Trust logos - DESKTOP ONLY */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden md:block mt-16 lg:mt-20"
          >
            <p className="text-xs text-white/40 uppercase tracking-wider mb-3">Официальный дистрибьютор</p>
            <div className="flex items-center gap-6 lg:gap-8">
              {trustLogos.map((logo) => (
                <div 
                  key={logo.name}
                  className="text-white/40 font-medium text-sm lg:text-base hover:text-white/60 transition-colors cursor-default"
                >
                  {logo.name}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* === NAVIGATION LAYER === */}
      
      {/* Bottom navigation bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="wrapper-wide py-6 md:py-8">
          <div className="flex items-center justify-between">
            
            {/* Slide indicators - dots on mobile, bars on desktop */}
            <div className="flex items-center gap-2 md:gap-3">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className="group relative"
                  aria-label={`Слайд ${index + 1}: ${slide.title}`}
                >
                  {/* Mobile: dots */}
                  <div className={`
                    md:hidden w-2 h-2 rounded-full transition-all duration-300
                    ${index === currentIndex 
                      ? "bg-[var(--color-cyan)] scale-125" 
                      : "bg-white/30 group-hover:bg-white/50"
                    }
                  `} />
                  
                  {/* Desktop: bars with progress */}
                  <div className={`
                    hidden md:block h-1 rounded-full transition-all duration-500
                    ${index === currentIndex 
                      ? "w-12 bg-[var(--color-cyan)]" 
                      : "w-6 bg-white/20 group-hover:bg-white/40"
                    }
                  `} />
                  
                  {/* Progress animation for current slide - desktop only */}
                  {index === currentIndex && !isPaused && (
                    <motion.div
                      className="hidden md:block absolute inset-0 h-1 bg-white/30 rounded-full origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }}
                      key={`progress-${currentIndex}`}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Slide counter & arrows - simplified on mobile */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Counter - desktop only */}
              <span className="hidden md:inline text-white/40 text-sm font-mono">
                {String(currentIndex + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
              </span>
              
              <div className="flex gap-2">
                <button
                  onClick={goPrev}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all active:scale-95"
                  aria-label="Предыдущий слайд"
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                <button
                  onClick={goNext}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all active:scale-95"
                  aria-label="Следующий слайд"
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator - desktop only */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2">
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-white/40 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
