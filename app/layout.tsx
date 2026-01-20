import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Основной шрифт — для body, UI
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

// Акцидентный шрифт — для заголовков H1, H2
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

// Моноширинный — для кода, спецификаций
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Современные Решения — роботы для бизнеса",
  description: "Первый в России центр интеграции промышленных и коммерческих роботов. Официальный дистрибьютор Pudu, Viggo, X-Human, Yarbo.",
  keywords: "роботы для бизнеса, промышленные роботы, сервисные роботы, Pudu, Viggo, уборочные роботы, роботы доставки",
  openGraph: {
    title: "Современные Решения — роботы для бизнеса",
    description: "Первый в России центр интеграции промышленных и коммерческих роботов",
    url: "https://b2b-robotics.ru",
    siteName: "Современные Решения",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body 
        className={`
          ${inter.variable} 
          ${spaceGrotesk.variable} 
          ${jetbrainsMono.variable} 
          font-sans antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
