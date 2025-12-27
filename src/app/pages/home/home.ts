import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { HeroSectionComponent } from '../../components/hero-section/hero-section';
import { DescriptionSectionComponent } from "../../components/description-section/description-section";
import { CtaSectionComponent } from "../../components/cta-section/cta-section";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroSectionComponent, DescriptionSectionComponent, CtaSectionComponent],
  templateUrl: './home.html',
})
export class HomeComponent {}
