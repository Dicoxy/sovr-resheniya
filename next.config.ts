import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Разрешаем dev-запросы с внешнего IP
  allowedDevOrigins: [
    "http://5.44.45.166:3004",
    "http://localhost:3004",
  ],
};

export default nextConfig;
