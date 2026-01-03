import { Component, input } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';

type StatsIcon = 'bolt' | 'shield' | 'users';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase],
  templateUrl: './stats-card.html',
})
export class StatsCardComponent {
  icon = input.required<StatsIcon>();
  title = input.required<string>();
  description = input.required<string>();
}
