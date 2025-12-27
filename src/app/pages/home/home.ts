import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { HeroSectionComponent } from '../../components/hero-section/hero-section';
import { DescriptionSectionComponent } from "../../components/description-section/description-section";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroSectionComponent, DescriptionSectionComponent],
  templateUrl: './home.html',
})
export class HomeComponent {}
