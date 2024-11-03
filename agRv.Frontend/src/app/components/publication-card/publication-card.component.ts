import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-publication-card',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './publication-card.component.html',
  host: {
    class: 'w-full flex flex-col gap-[10px] cursor-pointer group hover:bg-white transition-colors rounded-md overflow-hidden'
  }
})
export class PublicationCardComponent {
  @Input() pub!: any;
}
