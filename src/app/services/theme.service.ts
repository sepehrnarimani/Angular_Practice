// src/app/core/services/theme.service.ts
import { Injectable, inject, signal, effect } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private document = inject(DOCUMENT);
  
  // ✅ Signals for theme state
  private theme = signal<'light' | 'dark'>('light');
  private primaryColor = signal<'blue' | 'purple' | 'green' | 'orange' | 'red'>('blue');

  constructor() {
    // Initialize from localStorage
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const storedColor = localStorage.getItem('primaryColor') as 
      'blue' | 'purple' | 'green' | 'orange' | 'red' | null;
    
    if (storedTheme) this.theme.set(storedTheme);
    if (storedColor) this.primaryColor.set(storedColor);
    
    // Apply theme immediately
    this.applyTheme();
    
    // Auto-save to localStorage when signals change
    effect(() => {
      this.applyTheme();
      localStorage.setItem('theme', this.theme());
      localStorage.setItem('primaryColor', this.primaryColor());
    });
  }

  // ✅ Apply theme to DOM
  private applyTheme() {
    const html = this.document.documentElement;
    html.setAttribute('data-theme', this.theme());
    html.setAttribute('data-primary', this.primaryColor());
    this.updateCssVariables();
  }

  // ✅ Update CSS variables for PrimeNG + Tailwind
  private updateCssVariables() {
    const root = this.document.documentElement;
    const isDark = this.theme() === 'dark';
    const color = this.primaryColor();
    
    // Color mappings
    const colors = {
      blue: {
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af'
  },
  purple: {
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6'
  },
  green: {
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46'
    },
  orange: {
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412'
  },
  red: {
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b'
  }
    };
    
    const current = colors[color];
    
    // Set CSS variables
    root.style.setProperty('--primary-color', current[600]);
    root.style.setProperty('--primary-500', current[100]);
    root.style.setProperty('--primary-500', current[200]);
    root.style.setProperty('--primary-600', current[300]);
    root.style.setProperty('--primary-700', current[400]);
    root.style.setProperty('--primary-500', current[500]);
    root.style.setProperty('--primary-600', current[600]);
    root.style.setProperty('--primary-700', current[700]);
    
    // Dark/light mode variables
    if (isDark) {
      root.style.setProperty('--surface-0', '#111827');
      root.style.setProperty('--surface-50', '#1f2937');
      root.style.setProperty('--surface-100', '#374151');
      root.style.setProperty('--surface-200', '#4b5563');
      root.style.setProperty('--surface-800', '#f3f4f6');
      root.style.setProperty('--surface-900', '#ffffff');
      root.style.setProperty('--text-color', '#f3f4f6');
      root.style.setProperty('--text-color-secondary', '#9ca3af');
    } else {
      root.style.setProperty('--surface-0', '#ffffff');
      root.style.setProperty('--surface-50', '#f9fafb');
      root.style.setProperty('--surface-100', '#f3f4f6');
      root.style.setProperty('--surface-200', '#e5e7eb');
      root.style.setProperty('--surface-800', '#1f2937');
      root.style.setProperty('--surface-900', '#111827');
      root.style.setProperty('--text-color', '#111827');
      root.style.setProperty('--text-color-secondary', '#6b7280');
    }
  }

  // ✅ Public API
  setTheme(theme: 'light' | 'dark') {
    this.theme.set(theme);
  }

  setPrimaryColor(color: 'blue' | 'purple' | 'green' | 'orange' | 'red') {
    this.primaryColor.set(color);
  }

  // ✅ Getter methods (return values, not signals)
  getCurrentTheme(): 'light' | 'dark' {
    return this.theme();
  }

  getCurrentPrimaryColor(): 'blue' | 'purple' | 'green' | 'orange' | 'red' {
    return this.primaryColor();
  }
}