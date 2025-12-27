import { Component, Input } from '@angular/core';
import { IconType, NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './stats-card.html',
})
export class StatsCardComponent {
  @Input({ required: true }) icon!: IconType;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
}
