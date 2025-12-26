import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [PrimaryButtonComponent],
  templateUrl: './hero-section.html',
})
export class HeroSectionComponent {}
