import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-notification-card',
  standalone: true,
  imports: [FormsModule, ToggleSwitchModule],
  templateUrl: './notification-card.html',
})
export class NotificationCardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;

  @Input() enabled = false;
  @Output() enabledChange = new EventEmitter<boolean>();

  @Input() disabled = false;

  onEnabledChange(value: boolean) {
    this.enabled = value;
    this.enabledChange.emit(value);
  }
}
