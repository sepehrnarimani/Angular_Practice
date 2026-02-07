import { Component, input } from '@angular/core';

type StatsIcon = 'bolt' | 'shield' | 'users';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  templateUrl: './stats-card.html',
})
export class StatsCardComponent {
  icon = input.required<StatsIcon>();
  title = input.required<string>();
  description = input.required<string>();
}
