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
      blue: { 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8' },
      purple: { 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9' },
      green: { 500: '#10b981', 600: '#059669', 700: '#047857' },
      orange: { 500: '#f97316', 600: '#ea580c', 700: '#c2410c' },
      red: { 500: '#ef4444', 600: '#dc2626', 700: '#b91c1c' }
    };
    
    const current = colors[color];
    
    // Set CSS variables
    root.style.setProperty('--primary-color', current[600]);
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