import { Component, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  templateUrl: './primary-button.html',
})
export class PrimaryButtonComponent {
  text = input('');
  route = input<string | undefined>(undefined);

  constructor(private router: Router) {}

  navigate() {
    const route = this.route();
    if (route) {
      this.router.navigateByUrl(route);
    }
  }
}
