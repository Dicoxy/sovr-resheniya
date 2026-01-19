import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
