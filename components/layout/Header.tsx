"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Каталог", href: "/catalog", hasDropdown: true },
  { label: "Калькулятор ROI", href: "/calculator" },
  { label: "MARS", href: "/mars" },
  { label: "О компании", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

const catalogItems = [
  { label: "Влажная уборка", href: "/catalog/vlazhnaya-uborka" },
  { label: "Сухая уборка", href: "/catalog/suhaya-uborka" },
  { label: "Роботы для улицы", href: "/catalog/ulica" },
  { label: "Доставка", href: "/catalog/dostavka" },
  { label: "Гуманоиды", href: "/catalog/gumanoidy" },
  { label: "Роботы для фасадов", href: "/catalog/fasady" },
  { label: "Все категории →", href: "/catalog" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Закрываем мобильное меню при ресайзе
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-slate-200/50"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/25">
                  <span className="text-white font-bold text-lg">СР</span>
                </div>
                <div className="absolute -inset-1 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
              <div className="hidden sm:block">
                <span className="font-bold text-lg text-foreground">
                  Современные
                </span>
                <span className="font-bold text-lg text-primary ml-1">
                  Решения
                </span>
              </div>
            </Link>

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
                      "text-slate-600 hover:text-primary hover:bg-primary/5",
                      "flex items-center gap-1"
                    )}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown 
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
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
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl shadow-black/10 border border-slate-100 overflow-hidden"
                        >
                          <div className="p-2">
                            {catalogItems.map((subItem, index) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={cn(
                                  "block px-4 py-3 rounded-xl text-sm transition-all duration-200",
                                  "text-slate-600 hover:text-primary hover:bg-primary/5",
                                  index === catalogItems.length - 1 && "font-medium text-primary"
                                )}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-4">
              {/* Phone - desktop */}
              <a
                href="tel:+78002345440"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+7 800 234 54 40</span>
              </a>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl",
                  "bg-gradient-to-r from-primary to-blue-600 text-white text-sm font-medium",
                  "shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30",
                  "transition-all duration-200"
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
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-slate-600" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-600" />
                )}
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
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
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
                  <span className="font-bold text-lg">Меню</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-xl hover:bg-slate-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav items */}
                <nav className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-2">
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
                          className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-600 hover:text-primary hover:bg-primary/5 transition-all"
                        >
                          <span className="font-medium">{item.label}</span>
                          {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Catalog submenu */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider px-4">
                      Каталог
                    </span>
                    <div className="mt-3 space-y-1">
                      {catalogItems.slice(0, -1).map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.03 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-2.5 rounded-lg text-sm text-slate-500 hover:text-primary hover:bg-primary/5 transition-all"
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-slate-100 space-y-4">
                  <a
                    href="tel:+78002345440"
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Бесплатный звонок</div>
                      <div className="font-medium">+7 800 234 54 40</div>
                    </div>
                  </a>
                  
                  <button className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-blue-600 text-white font-medium shadow-lg shadow-primary/25">
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
