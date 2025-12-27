import { Component, Input } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';

type StatsIcon = 'bolt' | 'shield' | 'users';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase],
  templateUrl: './stats-card.html',
})
export class StatsCardComponent {
  @Input({ required: true }) icon!: StatsIcon;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
}
