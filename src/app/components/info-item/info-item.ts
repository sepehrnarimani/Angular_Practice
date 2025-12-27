import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-item',
  imports: [],
  templateUrl: './info-item.html',
  styleUrl: './info-item.css',
})
export class InfoItem {

  @Input({ required: true }) title!: string;
  
}
