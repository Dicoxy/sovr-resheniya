import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionReveal, StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";
import { Cpu, Truck, Shield, Sparkles, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Официальный дистрибьютор",
    description: "Прямые поставки от производителей. Гарантия подлинности.",
    color: "rgba(30, 58, 95, 0.1)", // navy
  },
  {
    icon: Truck,
    title: "Бесплатный тест-драйв",
    description: "Протестируйте робота на вашем объекте до покупки.",
    color: "rgba(0, 212, 170, 0.1)", // cyan
  },
  {
    icon: Shield,
    title: "Сервисный центр",
    description: "Крупнейший в России сертифицированный сервис.",
    color: "rgba(30, 58, 95, 0.1)", // navy
  },
];

const brands = [
  { name: "Pudu", desc: "Сервисная робототехника" },
  { name: "Viggo", desc: "Промышленная уборка" },
  { name: "X-Human", desc: "Очистка фасадов" },
  { name: "Yarbo", desc: "Придомовая территория" },
];

export default function Home() {
  return (
    <>
      {/* Global effects */}
      <CursorGlow />
      <ScrollProgress />
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section — uses wider container */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
          {/* Background - subtle gradient */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[var(--color-navy)]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[var(--color-cyan)]/5 rounded-full blur-3xl" />
          </div>
          
          {/* Wide container for Hero */}
          <div className="wrapper-wide text-center relative z-10">
            <SectionReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-navy)]/5 border border-[var(--color-navy)]/10 text-sm xl:text-base text-[var(--color-navy)] mb-8">
                <Sparkles className="w-4 h-4 xl:w-5 xl:h-5" />
                <span>Первый в России центр интеграции роботов</span>
              </div>
            </SectionReveal>
            
            <SectionReveal delay={0.2}>
              <h1 className="text-h1 mb-6">
                <span className="text-slate-800">Роботы для</span>
                <br />
                <span className="text-[var(--color-cyan)]">
                  бизнеса
                </span>
              </h1>
            </SectionReveal>
            
            <SectionReveal delay={0.3}>
              <p className="text-lg xl:text-xl 2xl:text-2xl text-slate-500 mb-10 xl:mb-12 max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto leading-relaxed">
                Автоматизируйте уборку, доставку и обслуживание с помощью 
                промышленных роботов от мировых лидеров
              </p>
            </SectionReveal>
            
            <SectionReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton variant="primary" size="lg" href="/catalog">
                  Смотреть каталог
                  <ArrowRight className="w-5 h-5" />
                </MagneticButton>
                <MagneticButton variant="outline" size="lg" href="/calculator">
                  Рассчитать окупаемость
                </MagneticButton>
              </div>
            </SectionReveal>
            
            {/* Scroll indicator */}
            <SectionReveal delay={0.6}>
              <div className="mt-16 xl:mt-20 flex flex-col items-center gap-2 text-slate-400">
                <span className="text-sm xl:text-base">Листайте вниз</span>
                <div className="w-6 h-10 xl:w-7 xl:h-12 rounded-full border-2 border-slate-300 flex justify-center pt-2">
                  <div className="w-1.5 h-3 xl:w-2 xl:h-4 bg-slate-400 rounded-full animate-bounce" />
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Features Section */}
        <section className="section bg-slate-50/50">
          <div className="wrapper">
            <SectionReveal>
              <div className="text-center mb-16 xl:mb-20">
                <h2 className="text-h2 mb-4">
                  Почему выбирают нас
                </h2>
                <p className="text-slate-500 max-w-2xl xl:max-w-3xl mx-auto text-base xl:text-lg">
                  Комплексный подход к автоматизации вашего бизнеса
                </p>
              </div>
            </SectionReveal>
            
            <StaggerContainer className="grid md:grid-cols-3 gap-6 xl:gap-8" staggerDelay={0.15}>
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <GlowCard glowColor={feature.color} className="h-full">
                    <div className="p-8 xl:p-10">
                      <div 
                        className="w-14 h-14 xl:w-16 xl:h-16 rounded-2xl flex items-center justify-center mb-6"
                        style={{ backgroundColor: feature.color }}
                      >
                        <feature.icon className="w-7 h-7 xl:w-8 xl:h-8 text-[var(--color-navy)]" />
                      </div>
                      <h3 className="text-xl xl:text-2xl font-semibold text-slate-800 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed text-base xl:text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </GlowCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Brands Section */}
        <section className="section">
          <div className="wrapper">
            <SectionReveal>
              <div className="text-center mb-16 xl:mb-20">
                <h2 className="text-h2 mb-4">
                  Наши партнёры
                </h2>
                <p className="text-slate-500 text-base xl:text-lg">
                  Официальный дистрибьютор ведущих производителей
                </p>
              </div>
            </SectionReveal>
            
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-6" staggerDelay={0.1}>
              {brands.map((brand) => (
                <StaggerItem key={brand.name}>
                  <GlowCard hoverScale={1.03}>
                    <div className="p-6 xl:p-8 text-center">
                      <div className="w-16 h-16 xl:w-20 xl:h-20 mx-auto mb-4 rounded-2xl bg-slate-100 flex items-center justify-center">
                        <span className="text-2xl xl:text-3xl font-bold text-[var(--color-navy)]/40">
                          {brand.name[0]}
                        </span>
                      </div>
                      <h3 className="font-semibold text-slate-800 mb-1 text-base xl:text-lg">{brand.name}</h3>
                      <p className="text-sm xl:text-base text-slate-500">{brand.desc}</p>
                    </div>
                  </GlowCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section — uses wider container */}
        <section className="section bg-[var(--color-dark)] relative overflow-hidden">
          {/* Gradient orbs - subtle */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-navy)]/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-cyan)]/10 rounded-full blur-3xl" />
          
          <div className="wrapper-wide text-center relative z-10">
            <SectionReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-heading font-bold text-white mb-6">
                Готовы автоматизировать
                <br />
                <span className="text-[var(--color-cyan)]">
                  ваш бизнес?
                </span>
              </h2>
            </SectionReveal>
            
            <SectionReveal delay={0.1}>
              <p className="text-slate-400 text-lg xl:text-xl mb-10 xl:mb-12 max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto">
                Получите бесплатную консультацию и расчёт окупаемости 
                для вашего объекта
              </p>
            </SectionReveal>
            
            <SectionReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton variant="primary" size="lg">
                  Заказать консультацию
                </MagneticButton>
                <MagneticButton 
                  variant="ghost" 
                  size="lg" 
                  className="text-white hover:text-white hover:bg-white/10"
                >
                  +7 800 234 54 40
                </MagneticButton>
              </div>
            </SectionReveal>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
