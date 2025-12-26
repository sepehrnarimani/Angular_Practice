import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './primary-button.html',
})
export class PrimaryButtonComponent {
  @Input({ required: true }) text!: string;

  // default = primary blue from your UI
  @Input() color: string = '#2563eb';
}
