import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Временная заглушка - будет заменена на секции */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-50">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Современные Решения
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-8 max-w-2xl mx-auto">
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
          <div className="mt-16 p-6 bg-card rounded-xl border border-card-border max-w-md mx-auto">
            <p className="text-sm text-muted">
              🚧 Сайт в разработке по методологии Forja
            </p>
            <p className="text-xs text-muted mt-2">
              Блок setup ✓ • Следующий: header
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
