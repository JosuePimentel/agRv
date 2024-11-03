import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-card',
  standalone: true,
  imports: [],
  templateUrl: './slide-card.component.html',
  host: {
    class: 'block w-full h-full cursor-grab active:cursor-grabbing relative overflow-hidden'
  }
})
export class SlideCardComponent {
  @Input({ required: true }) data!: any;
}
