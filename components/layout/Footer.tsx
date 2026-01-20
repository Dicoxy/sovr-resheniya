"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight, Send } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const catalogLinks = [
  { label: "Влажная уборка", href: "/catalog/vlazhnaya-uborka" },
  { label: "Сухая уборка", href: "/catalog/suhaya-uborka" },
  { label: "Роботы для улицы", href: "/catalog/ulica" },
  { label: "Доставка", href: "/catalog/dostavka" },
  { label: "Гуманоиды", href: "/catalog/gumanoidy" },
  { label: "Все категории", href: "/catalog" },
];

const companyLinks = [
  { label: "О компании", href: "/about" },
  { label: "MARS — управление флотом", href: "/mars" },
  { label: "ROI-калькулятор", href: "/calculator" },
  { label: "Сервис и поддержка", href: "/service" },
  { label: "Контакты", href: "/contacts" },
];

const brands = ["Pudu", "Viggo", "X-Human", "Yarbo"];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-dark)] text-white relative overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-navy)]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-cyan)]/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Main footer content */}
      <div className="relative z-10">
        {/* Top section with links */}
        <div className="container py-16 xl:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Logo & description */}
            <div className="lg:col-span-4 space-y-6">
              <Logo variant="full" size="responsive" showText={true} theme="white" />
              <p className="text-slate-400 text-sm xl:text-base leading-relaxed max-w-xs">
                Первый в России центр интеграции промышленных и коммерческих роботов. 
                Официальный дистрибьютор ведущих мировых производителей.
              </p>
              {/* Brands */}
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span 
                    key={brand}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 text-slate-400 border border-white/5"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Catalog links */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-5">
                Каталог
              </h4>
              <ul className="space-y-3">
                {catalogLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-sm xl:text-base text-slate-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-5">
                Компания
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-sm xl:text-base text-slate-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-5">
                Контакты
              </h4>
              <div className="space-y-4">
                <a 
                  href="tel:+78002345440"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-cyan)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-cyan)]/20 transition-colors">
                    <Phone className="w-4 h-4 text-[var(--color-cyan)]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Бесплатный звонок</div>
                    <div className="text-base xl:text-lg font-medium text-white group-hover:text-[var(--color-cyan)] transition-colors">
                      +7 800 234 54 40
                    </div>
                  </div>
                </a>

                <a 
                  href="mailto:info@b2b-robotics.ru"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-navy)]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-navy)]/50 transition-colors">
                    <Mail className="w-4 h-4 text-slate-300" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Email</div>
                    <div className="text-sm xl:text-base text-slate-300 group-hover:text-white transition-colors">
                      info@b2b-robotics.ru
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-navy)]/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-slate-300" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Доставка</div>
                    <div className="text-sm xl:text-base text-slate-300">
                      Россия и СНГ
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[var(--color-cyan)] text-[var(--color-dark)] font-semibold text-sm shadow-lg shadow-[var(--color-cyan)]/20 hover:shadow-xl hover:shadow-[var(--color-cyan)]/30 transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                <span>Оставить заявку</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-slate-500 text-center md:text-left">
                © {currentYear} ООО «Современные Решения». Все права защищены.
              </div>
              
              <div className="flex items-center gap-6">
                <Link 
                  href="/privacy" 
                  className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                >
                  Политика конфиденциальности
                </Link>
                <a 
                  href="https://b2b-robotics.ru" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-slate-300 inline-flex items-center gap-1 transition-colors"
                >
                  <span>b2b-robotics.ru</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
