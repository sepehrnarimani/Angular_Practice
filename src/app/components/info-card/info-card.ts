import { Component, Input } from '@angular/core';
import { InfoItem } from "../info-item/info-item";
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [],
  templateUrl: './info-card.html',
})
export class InfoCardComponent {
  @Input({ required: true }) title!: string;
}
