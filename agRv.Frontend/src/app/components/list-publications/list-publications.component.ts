import { Component, Input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PublicationCardComponent } from '../publication-card/publication-card.component';

@Component({
  selector: 'app-list-publications',
  standalone: true,
  imports: [MatTooltipModule, PublicationCardComponent],
  templateUrl: './list-publications.component.html',
})
export class ListPublicationsComponent {
  @Input() data: any[] = [];
  @Input() title: string = 'Publicações'
  @Input() desc: string = '';
}
