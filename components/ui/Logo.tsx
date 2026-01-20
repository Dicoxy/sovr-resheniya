'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  /** Вариант отображения */
  variant?: 'full' | 'symbol';
  /** Цветовая схема */
  theme?: 'color' | 'white' | 'mono';
  /** Размер - теперь responsive по умолчанию */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'responsive';
  /** Показывать текст */
  showText?: boolean;
  /** Дополнительные классы */
  className?: string;
  /** Ссылка */
  href?: string;
}

// Фиксированные размеры
const sizes = {
  sm: { symbol: 24, text: 'text-base', gap: 'gap-2' },
  md: { symbol: 32, text: 'text-lg', gap: 'gap-2.5' },
  lg: { symbol: 40, text: 'text-xl', gap: 'gap-3' },
  xl: { symbol: 48, text: 'text-2xl', gap: 'gap-3.5' },
};

// SVG компонент логотипа (Lock — Сцепление)
function LogoSymbol({ 
  theme = 'color', 
  size = 32,
  className,
}: { 
  theme: 'color' | 'white' | 'mono'; 
  size: number | 'responsive';
  className?: string;
}) {
  const leftColor = theme === 'white' ? '#FFFFFF' : '#1E3A5F';
  const rightColor = theme === 'mono' ? '#1E3A5F' : '#00D4AA';
  
  // Responsive размер через CSS классы
  if (size === 'responsive') {
    return (
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={cn('w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10', className)}
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
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
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
  size = 'responsive',
  showText = true,
  className,
  href = '/',
}: LogoProps) {
  const textColor = theme === 'white' ? 'text-white' : 'text-[#1E3A5F]';
  
  // Responsive или фиксированный размер
  const isResponsive = size === 'responsive';
  const sizeConfig = isResponsive ? null : sizes[size];
  
  const content = (
    <div className={cn(
      'flex items-center',
      isResponsive ? 'gap-2.5 lg:gap-3 xl:gap-3.5' : sizeConfig?.gap,
      className
    )}>
      <LogoSymbol 
        theme={theme} 
        size={isResponsive ? 'responsive' : sizeConfig!.symbol} 
      />
      
      {variant === 'full' && showText && (
        <span 
          className={cn(
            'font-heading font-semibold tracking-tight',
            isResponsive 
              ? 'text-lg lg:text-xl xl:text-2xl' 
              : sizeConfig?.text,
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
