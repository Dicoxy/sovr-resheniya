/**
 * Design Tokens — Современные Решения
 * Единый источник правды для дизайн-системы
 */

// =============================================================================
// ЦВЕТА
// =============================================================================

export const colors = {
  // Основная палитра
  primary: {
    navy: '#1E3A5F',      // Основной синий — доверие, технологии
    navyLight: '#2D5A8A', // Светлее — hover состояния
    navyDark: '#152A45',  // Темнее — активные состояния
  },
  
  accent: {
    cyan: '#00D4AA',      // Акцент — энергия, современность
    cyanLight: '#33DDBB', // Светлее
    cyanDark: '#00B894',  // Темнее
  },
  
  // Нейтральные
  neutral: {
    white: '#FFFFFF',
    slate50: '#F8FAFC',   // Фон страницы
    slate100: '#F1F5F9',  // Карточки
    slate200: '#E2E8F0',  // Границы
    slate300: '#CBD5E1',
    slate400: '#94A3B8',  // Muted текст
    slate500: '#64748B',  // Secondary текст
    slate600: '#475569',  // Body текст
    slate700: '#334155',
    slate800: '#1E293B',  // Заголовки
    slate900: '#0F172A',
    dark: '#0D1B2A',      // Самый тёмный
  },
  
  // Акценты брендов-партнёров
  brand: {
    pudu: '#00A0E9',      // Pudu Blue
    orange: '#FF6B35',    // Energy Orange (KUKA-style)
    green: '#22C55E',     // Eco Green (Yarbo)
  },
  
  // Семантические
  semantic: {
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
} as const;

// =============================================================================
// ТИПОГРАФИКА
// =============================================================================

export const typography = {
  // Семейства шрифтов
  fonts: {
    heading: 'var(--font-space-grotesk), system-ui, sans-serif',
    body: 'var(--font-inter), system-ui, sans-serif',
    mono: 'var(--font-jetbrains-mono), monospace',
  },
  
  // Размеры (desktop / mobile)
  sizes: {
    // Заголовки
    h1: { desktop: '3.5rem', mobile: '2.5rem', lineHeight: '1.1', weight: '700' },   // 56px / 40px
    h2: { desktop: '2.5rem', mobile: '1.75rem', lineHeight: '1.2', weight: '600' },  // 40px / 28px
    h3: { desktop: '1.75rem', mobile: '1.375rem', lineHeight: '1.3', weight: '600' }, // 28px / 22px
    h4: { desktop: '1.375rem', mobile: '1.125rem', lineHeight: '1.4', weight: '500' }, // 22px / 18px
    
    // Текст
    bodyLarge: { size: '1.125rem', lineHeight: '1.7', weight: '400' },  // 18px
    body: { size: '1rem', lineHeight: '1.7', weight: '400' },           // 16px
    bodySmall: { size: '0.875rem', lineHeight: '1.6', weight: '400' },  // 14px
    
    // UI элементы
    caption: { size: '0.75rem', lineHeight: '1.5', weight: '500' },     // 12px
    button: { size: '0.9375rem', lineHeight: '1', weight: '600' },      // 15px
    nav: { size: '0.9375rem', lineHeight: '1', weight: '500' },         // 15px
    label: { size: '0.8125rem', lineHeight: '1', weight: '500' },       // 13px
  },
} as const;

// =============================================================================
// SPACING
// =============================================================================

export const spacing = {
  // Базовая единица: 4px
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
} as const;

// =============================================================================
// РАДИУСЫ
// =============================================================================

export const radius = {
  none: '0',
  sm: '0.25rem',    // 4px
  md: '0.5rem',     // 8px
  lg: '0.75rem',    // 12px
  xl: '1rem',       // 16px
  '2xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

// =============================================================================
// ТЕНИ
// =============================================================================

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.05)',
  glow: {
    cyan: '0 0 20px rgba(0, 212, 170, 0.3)',
    navy: '0 0 20px rgba(30, 58, 95, 0.3)',
  },
} as const;

// =============================================================================
// BREAKPOINTS
// =============================================================================

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// =============================================================================
// TRANSITIONS
// =============================================================================

export const transitions = {
  fast: '150ms ease',
  normal: '200ms ease',
  slow: '300ms ease',
  spring: '500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

// =============================================================================
// Z-INDEX
// =============================================================================

export const zIndex = {
  behind: -1,
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
} as const;
