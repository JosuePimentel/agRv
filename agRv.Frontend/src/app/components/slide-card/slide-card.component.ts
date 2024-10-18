import { Component, Input } from '@angular/core';
import { PublicationInterface } from '../../interfaces/publicationAggregate/publication.interface';

@Component({
  selector: 'app-slide-card',
  standalone: true,
  imports: [],
  templateUrl: './slide-card.component.html',
})
export class SlideCardComponent {
  @Input({ required: true }) data!: PublicationInterface;
}
