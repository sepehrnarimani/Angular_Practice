import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [PrimaryButtonComponent],
  templateUrl: './cta-section.html',
})
export class CtaSectionComponent {}
