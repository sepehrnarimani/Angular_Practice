import { Component, EventEmitter, input, output, booleanAttribute, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-notification-card',
  standalone: true,
  imports: [FormsModule, ToggleSwitchModule],
  templateUrl: './notification-card.html',
})
export class NotificationCardComponent {
  title = input.required<string>();
  description = input.required<string>();

  enabled = model(false);
  enabledChange = output<boolean>();

  onEnabledChange(value: boolean) {
    this.enabled.set(value);
    this.enabledChange.emit(value);
  }
}
