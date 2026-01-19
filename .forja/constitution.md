# Constitution: Современные Решения

> Неизменные правила проекта. Все блоки следуют этим стандартам.

## 1. Технологический стек

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

### Данные
- **Каталог:** JSON файлы (позже можно мигрировать в БД)
- **Формы:** Server Actions → внешний API

### Инфраструктура
- **Деплой:** Docker
- **Хостинг:** VPS (Russia MCP сервер)
- **CI/CD:** GitHub Actions (опционально)

---

## 2. Дизайн-система

### Цветовая схема (светлая тема)
```css
/* Основные */
--background: #ffffff;
--foreground: #1a1a2e;

/* Акценты */
--primary: #2563eb;       /* Синий */
--primary-hover: #1d4ed8;
--secondary: #64748b;     /* Серый */

/* Поверхности */
--card: #f8fafc;
--card-border: #e2e8f0;

/* Текст */
--text-primary: #1e293b;
--text-secondary: #64748b;
--text-muted: #94a3b8;
```

### Типографика
- **Заголовки:** Inter или Manrope, bold
- **Текст:** Inter, regular
- **Размеры:** 
  - h1: 48-64px
  - h2: 36-48px
  - h3: 24-32px
  - body: 16-18px

### Отступы
- **Секции:** py-16 md:py-24
- **Контейнер:** max-w-7xl mx-auto px-4

### Анимации
- **Появление:** fade-in + slide-up
- **Длительность:** 0.3-0.6s
- **Easing:** ease-out

---

## 3. Структура проекта

```
sovr-resheniya/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── catalog/
│   │   ├── page.tsx
│   │   └── [category]/
│   │       ├── page.tsx
│   │       └── [slug]/
│   │           └── page.tsx
│   ├── calculator/
│   │   └── page.tsx
│   ├── mars/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── contacts/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Partners.tsx
│   │   ├── About.tsx
│   │   ├── Catalog.tsx
│   │   └── Contacts.tsx
│   ├── features/
│   │   ├── ROICalculator.tsx
│   │   └── MarsShowcase.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── ...
├── data/
│   ├── products.json
│   ├── categories.json
│   └── brands.json
├── lib/
│   └── utils.ts
├── public/
│   ├── images/
│   └── videos/
├── .forja/
│   ├── manifest.yaml
│   ├── constitution.md
│   └── contracts/
└── docker/
    └── Dockerfile
```

---

## 4. Правила кода

### Компоненты
- Функциональные компоненты
- Props через interface, не type
- Деструктуризация props
- Экспорт по умолчанию для страниц
- Именованный экспорт для компонентов

```tsx
// ✅ Правильно
interface HeroProps {
  title: string;
  subtitle?: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (...)
}
```

### Стили
- Tailwind классы inline
- Группировка: layout → spacing → typography → colors → effects
- Адаптив: mobile-first (без префикса → sm → md → lg → xl)

```tsx
// ✅ Правильно
<div className="flex flex-col gap-4 p-6 text-lg text-gray-800 bg-white rounded-xl shadow-lg">
```

### Именование
- Компоненты: PascalCase
- Файлы компонентов: PascalCase.tsx
- Утилиты: camelCase
- Константы: UPPER_SNAKE_CASE

---

## 5. SEO

### Обязательно
- Мета-теги на каждой странице
- Open Graph теги
- Структурированные данные (JSON-LD)
- Sitemap.xml
- Robots.txt

### Schema.org
- Organization (на всех страницах)
- Product (для товаров)
- BreadcrumbList (навигация)

---

## 6. Производительность

### Изображения
- Формат: WebP
- Next.js Image компонент
- Lazy loading
- Размеры: указывать width/height

### Видео
- Lazy load
- Poster image
- Muted autoplay для фоновых

### Шрифты
- next/font для оптимизации
- Subset: latin, cyrillic

---

## 7. Доступность

- Семантический HTML
- Alt для изображений
- ARIA labels где нужно
- Keyboard navigation
- Контрастность текста

---

## 8. Формы

### Валидация
- Клиентская: react-hook-form + zod
- Серверная: Server Actions

### Отправка
- Server Action → API
- Показать статус (loading, success, error)
- Уведомление в Telegram (опционально)

---

## 9. Что запрещено

- ❌ Inline styles (кроме динамических)
- ❌ `any` в TypeScript
- ❌ console.log в production
- ❌ Хардкод текстов (выносить в константы/data)
- ❌ Картинки без оптимизации
- ❌ Блокирующие ресурсы

---

## 10. Чеклист блока

Перед завершением каждый блок проверяет:

- [ ] TypeScript без ошибок
- [ ] Адаптив (mobile, tablet, desktop)
- [ ] Анимации работают
- [ ] Нет console.log
- [ ] Изображения оптимизированы
- [ ] Доступность (alt, aria)
- [ ] Соответствует дизайну
