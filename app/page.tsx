import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero - временная заглушка */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Роботы для
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                бизнеса
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-500 mb-8 max-w-2xl mx-auto">
              Первый в России центр интеграции промышленных и коммерческих роботов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Смотреть каталог
              </Button>
              <Button variant="outline" size="lg">
                Рассчитать окупаемость
              </Button>
            </div>
            
            {/* Статус разработки */}
            <div className="mt-16 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-md mx-auto">
              <p className="text-sm text-slate-500">
                🚧 Сайт в разработке по методологии Forja
              </p>
              <p className="text-xs text-slate-400 mt-2">
                ✓ setup • ✓ header • → footer, hero, partners...
              </p>
            </div>
          </div>
        </section>
        
        {/* Пустые секции для тестирования скролла */}
        <section className="h-screen bg-slate-50 flex items-center justify-center">
          <p className="text-slate-400">Секция 2 — проверка скролла header</p>
        </section>
        
        <section className="h-screen bg-white flex items-center justify-center">
          <p className="text-slate-400">Секция 3 — проверка скролла header</p>
        </section>
      </main>
    </>
  );
}
