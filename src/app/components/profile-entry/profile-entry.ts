import { Component, input, model } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-profile-entry',
  templateUrl: './profile-entry.html',
  imports: [InputTextModule],
  styleUrl: './profile-entry.css',
})
export class ProfileEntry {
  label = input.required<string>();
  placeholder = input('');
  type = input<'text' | 'email'>('text');

  value = model<string>('John');

  required = input<boolean>(false);

  email = input<boolean>(false);

  private readonly emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  onInput(e: Event) {
    this.value.set((e.target as HTMLInputElement).value);
  }

  get isEmpty(): boolean {
    return this.value().trim().length === 0;
  }

  get showRequiredError(): boolean {
    return this.required() && this.isEmpty;
  }

  get isEmailInvalid(): boolean {
    return this.email() && !this.isEmpty && !this.emailRegex.test(this.value());
  }

  get hasError(): boolean {
    return this.showRequiredError || this.isEmailInvalid;
  }
}
