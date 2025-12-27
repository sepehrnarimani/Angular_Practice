import { Component, Input } from '@angular/core';
import { IconType, NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './info-card.html',
})
export class InfoCardComponent {
  @Input({ required: true }) icon!: IconType;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
}
