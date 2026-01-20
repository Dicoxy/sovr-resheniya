"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  motion, 
  useScroll, 
  useMotionValueEvent,
  useTransform,
  AnimatePresence 
} from "framer-motion";
import { Menu, X, Phone, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

const navItems = [
  { label: "Каталог", href: "/catalog", hasDropdown: true },
  { label: "Калькулятор ROI", href: "/calculator" },
  { label: "MARS", href: "/mars" },
  { label: "О компании", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

const catalogItems = [
  { label: "Влажная уборка", href: "/catalog/vlazhnaya-uborka", icon: "💧" },
  { label: "Сухая уборка", href: "/catalog/suhaya-uborka", icon: "🌀" },
  { label: "Роботы для улицы", href: "/catalog/ulica", icon: "🌳" },
  { label: "Доставка", href: "/catalog/dostavka", icon: "📦" },
  { label: "Гуманоиды", href: "/catalog/gumanoidy", icon: "🤖" },
  { label: "Роботы для фасадов", href: "/catalog/fasady", icon: "🏢" },
];

export function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const { scrollY } = useScroll();
  
  // Morphing values based on scroll
  const headerHeight = useTransform(scrollY, [0, 100], [80, 64]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.92]);
  const headerBg = useTransform(
    scrollY, 
    [0, 50], 
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"]
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ["0 0 0 0 transparent", "0 4px 30px -5px rgba(0,0,0,0.1)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  // Hide/show on scroll direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY ? "down" : "up";
    
    if (direction === "down" && latest > 150 && !isMobileMenuOpen) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    
    setLastScrollY(latest);
  });

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isHidden ? -100 : 0, 
          opacity: isHidden ? 0 : 1 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          height: headerHeight,
          backgroundColor: headerBg,
          boxShadow: headerShadow,
        }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
      >
        {/* Gradient border bottom */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ 
            opacity: borderOpacity,
            background: "linear-gradient(90deg, transparent, rgba(30,58,95,0.15) 20%, rgba(0,212,170,0.2) 50%, rgba(30,58,95,0.15) 80%, transparent)"
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo - responsive */}
            <motion.div style={{ scale: logoScale }}>
              {/* Desktop: full logo */}
              <div className="hidden sm:block">
                <Logo 
                  variant="full" 
                  size="responsive"
                  showText={true}
                />
              </div>
              {/* Mobile: symbol only */}
              <div className="sm:hidden">
                <Logo 
                  variant="symbol" 
                  size="md"
                />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setIsDropdownOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setIsDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      "text-slate-600 hover:text-[var(--color-navy)]",
                      "relative group flex items-center gap-1"
                    )}
                  >
                    {/* Hover background */}
                    <span className="absolute inset-0 rounded-lg bg-[var(--color-navy)]/5 scale-0 group-hover:scale-100 transition-transform duration-200" />
                    <span className="relative">{item.label}</span>
                    {item.hasDropdown && (
                      <ChevronDown 
                        className={cn(
                          "w-4 h-4 transition-transform duration-200 relative",
                          isDropdownOpen && "rotate-180"
                        )} 
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
                        >
                          <div className="p-3">
                            <div className="grid grid-cols-2 gap-1">
                              {catalogItems.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-slate-600 hover:text-[var(--color-navy)] hover:bg-[var(--color-navy)]/5 transition-all duration-200"
                                >
                                  <span className="text-base">{subItem.icon}</span>
                                  <span>{subItem.label}</span>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-2 pt-2 border-t border-slate-100">
                              <Link
                                href="/catalog"
                                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-[var(--color-navy)] hover:bg-[var(--color-navy)]/5 transition-all duration-200"
                              >
                                <span>Все категории</span>
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Phone */}
              <a
                href="tel:+78002345440"
                className="hidden md:flex items-center gap-2 text-sm text-slate-600 hover:text-[var(--color-navy)] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[var(--color-navy)]/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-[var(--color-navy)]" />
                </div>
                <span className="font-medium">+7 800 234 54 40</span>
              </a>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl",
                  "bg-[var(--color-navy)] text-white text-sm font-medium",
                  "shadow-lg shadow-[var(--color-navy)]/20 hover:shadow-xl hover:shadow-[var(--color-navy)]/25",
                  "hover:bg-[var(--color-navy-light)]",
                  "transition-all duration-300"
                )}
              >
                <span>Заказать звонок</span>
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6 text-slate-600" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6 text-slate-600" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100">
                  <Logo variant="full" size="sm" showText={true} href={undefined} />
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-xl hover:bg-slate-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Nav items */}
                <nav className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-600 hover:text-[var(--color-navy)] hover:bg-[var(--color-navy)]/5 transition-all"
                        >
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Catalog grid */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider px-4">
                      Каталог
                    </span>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {catalogItems.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + index * 0.03 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex flex-col items-center gap-1 p-3 rounded-xl text-center text-sm text-slate-500 hover:text-[var(--color-navy)] hover:bg-[var(--color-navy)]/5 transition-all"
                          >
                            <span className="text-xl">{item.icon}</span>
                            <span className="text-xs">{item.label}</span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-slate-100 space-y-4 bg-slate-50/50">
                  <a
                    href="tel:+78002345440"
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-navy)]/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[var(--color-navy)]" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Бесплатный звонок</div>
                      <div className="font-medium">+7 800 234 54 40</div>
                    </div>
                  </a>
                  
                  <button className="w-full py-3 rounded-xl bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)] text-white font-medium shadow-lg shadow-[var(--color-navy)]/20 transition-colors">
                    Заказать звонок
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
