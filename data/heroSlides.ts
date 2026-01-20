export interface HeroSlide {
  id: string;
  badge?: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  image: string;
  video?: string;
  cta: {
    primary: {
      label: string;
      href: string;
    };
    secondary?: {
      label: string;
      href: string;
    };
  };
}

export const heroSlides: HeroSlide[] = [
  {
    id: "main",
    badge: "Первый в России центр интеграции роботов",
    title: "Роботы для",
    titleAccent: "бизнеса",
    subtitle: "Автоматизируйте уборку, доставку и обслуживание с помощью промышленных роботов от мировых лидеров",
    image: "/images/robots/hero-main.png",
    cta: {
      primary: {
        label: "Смотреть каталог",
        href: "/catalog",
      },
      secondary: {
        label: "Рассчитать окупаемость",
        href: "/calculator",
      },
    },
  },
  {
    id: "cleaning",
    badge: "Pudu · Viggo",
    title: "Автономная",
    titleAccent: "уборка",
    subtitle: "Поломоечные роботы для торговых центров, складов, офисов и производств. Работают 24/7 без перерывов.",
    image: "/images/robots/cleaning.png",
    cta: {
      primary: {
        label: "Подробнее",
        href: "/catalog/roboty-dlya-vlazhnoy-uborki",
      },
    },
  },
  {
    id: "delivery",
    badge: "Pudu Robotics",
    title: "Роботы-",
    titleAccent: "курьеры",
    subtitle: "Автономная доставка в ресторанах, отелях, больницах и офисах. Увеличьте скорость обслуживания.",
    image: "/images/robots/delivery.png",
    cta: {
      primary: {
        label: "Подробнее",
        href: "/catalog/roboty-dlya-dostavki",
      },
    },
  },
  {
    id: "facade",
    badge: "X-Human",
    title: "Очистка",
    titleAccent: "фасадов",
    subtitle: "Мойка панорамного остекления и высотных зданий. Безопасно, быстро, без альпинистов.",
    image: "/images/robots/facade.png",
    cta: {
      primary: {
        label: "Подробнее",
        href: "/catalog/roboty-dlya-fasadov",
      },
    },
  },
  {
    id: "outdoor",
    badge: "Yarbo",
    title: "Уборка",
    titleAccent: "территории",
    subtitle: "Снегоуборщики, газонокосилки, воздуходувки. Модульная система — один робот, много задач.",
    image: "/images/robots/outdoor.png",
    video: "/videos/yarbo-snow.mp4",
    cta: {
      primary: {
        label: "Подробнее",
        href: "/catalog/roboty-dlya-sada",
      },
    },
  },
  {
    id: "rent",
    badge: "Услуга",
    title: "Аренда",
    titleAccent: "роботов",
    subtitle: "Попробуйте робота на вашем объекте без покупки. Аренда от 1 дня с полным сервисом.",
    image: "/images/robots/cleaning.png",
    cta: {
      primary: {
        label: "Условия аренды",
        href: "/rent",
      },
    },
  },
];
