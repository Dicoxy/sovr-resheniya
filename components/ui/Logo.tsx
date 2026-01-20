'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  /** Вариант отображения */
  variant?: 'full' | 'symbol';
  /** Цветовая схема */
  theme?: 'color' | 'white' | 'mono';
  /** Размер символа */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Показывать текст */
  showText?: boolean;
  /** Дополнительные классы */
  className?: string;
  /** Ссылка */
  href?: string;
}

const sizes = {
  sm: { symbol: 24, text: 'text-base' },
  md: { symbol: 32, text: 'text-lg' },
  lg: { symbol: 40, text: 'text-xl' },
  xl: { symbol: 48, text: 'text-2xl' },
};

// SVG компонент логотипа (Lock — Сцепление)
function LogoSymbol({ 
  theme = 'color', 
  size = 32 
}: { 
  theme: 'color' | 'white' | 'mono'; 
  size: number;
}) {
  const leftColor = theme === 'white' ? '#FFFFFF' : '#1E3A5F';
  const rightColor = theme === 'mono' ? '#1E3A5F' : '#00D4AA';
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path 
        d="M20 30 L20 70 L45 70 L45 55 L35 55 L35 45 L45 45 L45 30 Z" 
        fill={leftColor}
      />
      <path 
        d="M80 70 L80 30 L55 30 L55 45 L65 45 L65 55 L55 55 L55 70 Z" 
        fill={rightColor}
      />
    </svg>
  );
}

export function Logo({
  variant = 'full',
  theme = 'color',
  size = 'md',
  showText = true,
  className,
  href = '/',
}: LogoProps) {
  const sizeConfig = sizes[size];
  const textColor = theme === 'white' ? 'text-white' : 'text-[#1E3A5F]';
  
  const content = (
    <div className={cn('flex items-center gap-3', className)}>
      <LogoSymbol theme={theme} size={sizeConfig.symbol} />
      
      {variant === 'full' && showText && (
        <span 
          className={cn(
            'font-heading font-semibold tracking-tight',
            sizeConfig.text,
            textColor
          )}
        >
          Современные Решения
        </span>
      )}
    </div>
  );
  
  if (href) {
    return (
      <Link 
        href={href} 
        className="inline-flex items-center transition-opacity hover:opacity-80"
        aria-label="Современные Решения — На главную"
      >
        {content}
      </Link>
    );
  }
  
  return content;
}

// Экспорт отдельного символа для favicon и т.д.
export { LogoSymbol };
