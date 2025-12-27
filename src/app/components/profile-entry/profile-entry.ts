import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-entry',
  templateUrl: './profile-entry.html',
  styleUrl: './profile-entry.css',
})
export class ProfileEntry {
  @Input({ required: true }) label!: string;
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'email' = 'text';
  @Input() value: string = '';
}
