// src/app/settings/appearance/appearance.component.ts
import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { SettingsSidebar } from "../../../components/settings-sidebar/settings-sidebar";
import { NavbarComponent } from "../../../components/navbar/navbar";

@Component({
  selector: 'app-appearance',
  standalone: true,
  imports: [
    SettingsSidebar,
    NavbarComponent,
    SelectButtonModule,
    ButtonModule,
    SelectModule,
    FormsModule
  ],
  templateUrl: './appearance.html',
  styleUrls: ['./appearance.css']
})
export class AppearanceComponent {
  private themeService = inject(ThemeService);
  
  // ✅ LOCAL state for two-way binding
  currentTheme = signal<'light' | 'dark'>('light');
  currentPrimaryColor = signal<'blue' | 'purple' | 'green' | 'orange' | 'red'>('blue');
  
  constructor() {
    // ✅ Initialize from ThemeService
    this.currentTheme.set(this.themeService.getCurrentTheme());
    this.currentPrimaryColor.set(this.themeService.getCurrentPrimaryColor());
  }
  
  // ✅ Theme options
  themes = signal([
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' }
  ]);
  
  // ✅ Primary color options
  primaryColors = signal([
    { label: 'Blue', value: 'blue', icon: 'pi pi-circle-fill', twClass: 'bg-blue-500' },
    { label: 'Purple', value: 'purple', icon: 'pi pi-circle-fill', twClass: 'bg-purple-500' },
    { label: 'Green', value: 'green', icon: 'pi pi-circle-fill', twClass: 'bg-green-500' },
    { label: 'Orange', value: 'orange', icon: 'pi pi-circle-fill', twClass: 'bg-orange-500' },
    { label: 'Red', value: 'red', icon: 'pi pi-circle-fill', twClass: 'bg-red-500' }
  ]);

  // ✅ Font size options
  fontSizes = signal([
    { label: 'Default', value: 'default' },
    { label: 'Small', value: 'small' },
    { label: 'Large', value: 'large' }
  ]);

  fontSize = signal('default');

  // ✅ Handle theme change
  onThemeChange(newTheme: string) {
    this.currentTheme.set(newTheme as 'light' | 'dark');
    this.themeService.setTheme(newTheme as 'light' | 'dark');
  }

  // ✅ Handle primary color change
  onColorChange(color: string) {
    this.currentPrimaryColor.set(color as 'blue' | 'purple' | 'green' | 'orange' | 'red');
    this.themeService.setPrimaryColor(color as 'blue' | 'purple' | 'green' | 'orange' | 'red');
  }
}