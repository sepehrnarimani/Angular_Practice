import { Component, input } from '@angular/core';

@Component({
  selector: 'app-profile-entry',
  templateUrl: './profile-entry.html',
  styleUrl: './profile-entry.css',
})
export class ProfileEntry {
  label = input.required<string>();
  placeholder = input('');
  type = input<'text' | 'email'>('text');
  value = input('');
}
