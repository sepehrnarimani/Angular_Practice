import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  templateUrl: './primary-button.html',
})
export class PrimaryButtonComponent {
  @Input() text = '';
  @Input() route?: string;

  constructor(private router: Router) {}

  navigate() {
    if (this.route) {
      this.router.navigateByUrl(this.route);
    }
  }
}
