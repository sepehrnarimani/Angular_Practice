import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { HeroSectionComponent } from '../../components/hero-section/hero-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroSectionComponent],
  templateUrl: './home.html',
})
export class HomeComponent {}
