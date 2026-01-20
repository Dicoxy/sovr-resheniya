"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
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
];

const legalLinks = [
  { label: "Политика конфиденциальности", href: "/privacy" },
  { label: "Пользовательское соглашение", href: "/terms" },
  { label: "Публичная оферта", href: "/offer" },
];

const brands = [
  { name: "Pudu", color: "#00A0E9", hoverBg: "hover:bg-[#00A0E9]/20", border: "border-[#00A0E9]/30" },
  { name: "Viggo", color: "#FF6B35", hoverBg: "hover:bg-[#FF6B35]/20", border: "border-[#FF6B35]/30" },
  { name: "X-Human", color: "#00C4B4", hoverBg: "hover:bg-[#00C4B4]/20", border: "border-[#00C4B4]/30" },
  { name: "Yarbo", color: "#F5A623", hoverBg: "hover:bg-[#F5A623]/20", border: "border-[#F5A623]/30" },
];

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
        <div className="wrapper py-12 lg:py-16 2xl:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 2xl:gap-8">
            
            {/* Logo + Description + Brands */}
            <div className="col-span-2 lg:col-span-4 space-y-5 2xl:space-y-6">
              <Logo variant="full" size="responsive" showText={true} theme="white" />
              <p className="text-sm 2xl:text-[15px] text-slate-400 leading-relaxed max-w-xs 2xl:max-w-sm">
                Первый в России центр интеграции промышленных и коммерческих роботов. 
                Официальный дистрибьютор ведущих мировых производителей.
              </p>
              {/* Brands with colors */}
              <div className="flex flex-wrap gap-2 2xl:gap-3">
                {brands.map((brand) => (
                  <span 
                    key={brand.name}
                    className={`px-3 py-1.5 2xl:px-4 2xl:py-2 text-xs 2xl:text-sm font-medium rounded-lg bg-white/5 border transition-colors cursor-default ${brand.border} ${brand.hoverBg}`}
                    style={{ color: brand.color }}
                  >
                    {brand.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Catalog links */}
            <div className="lg:col-span-2">
              <h4 className="text-xs 2xl:text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 2xl:mb-5">
                Каталог
              </h4>
              <ul className="space-y-2.5 2xl:space-y-3">
                {catalogLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-sm 2xl:text-[15px] text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div className="lg:col-span-2">
              <h4 className="text-xs 2xl:text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 2xl:mb-5">
                Компания
              </h4>
              <ul className="space-y-2.5 2xl:space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-sm 2xl:text-[15px] text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal links */}
            <div className="lg:col-span-2">
              <h4 className="text-xs 2xl:text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 2xl:mb-5">
                Документы
              </h4>
              <ul className="space-y-2.5 2xl:space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-sm 2xl:text-[15px] text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts - Compact version */}
            <div className="col-span-2 lg:col-span-2">
              <h4 className="text-xs 2xl:text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 2xl:mb-5">
                Контакты
              </h4>
              <div className="space-y-4">
                {/* Phone */}
                <a 
                  href="tel:+78002345440"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 2xl:w-11 2xl:h-11 rounded-xl bg-[var(--color-cyan)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-cyan)]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[var(--color-cyan)]" />
                  </div>
                  <div>
                    <div className="text-[11px] 2xl:text-xs text-slate-500">Бесплатно по России</div>
                    <div className="text-base 2xl:text-lg font-semibold text-white group-hover:text-[var(--color-cyan)] transition-colors">
                      8 800 234 54 40
                    </div>
                  </div>
                </a>

                {/* All contacts link */}
                <Link 
                  href="/contacts"
                  className="inline-flex items-center gap-2 text-sm 2xl:text-[15px] text-slate-400 hover:text-[var(--color-cyan)] transition-colors group"
                >
                  <span>Все контакты</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5">
          <div className="wrapper py-6 2xl:py-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              {/* Copyright */}
              <div className="text-sm 2xl:text-[15px] text-slate-400">
                © {currentYear} ООО «Современные Решения». Все права защищены.
              </div>
              
              {/* Requisites */}
              <div className="text-sm 2xl:text-[15px] text-slate-400 lg:text-right">
                <span>ИНН 7813674295 • ОГРН 1237800092750</span>
                <span className="hidden lg:inline"> • </span>
                <br className="lg:hidden" />
                <span>г. Санкт-Петербург, ул. Большая Зеленина, д. 24, стр. 1, офис 165-Н</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
