import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  Input,
  PLATFORM_ID,
} from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PublicationCardComponent } from '../publication-card/publication-card.component';
import { SwiperContainer } from 'swiper/element';
import { isPlatformBrowser } from '@angular/common';
import { SwiperOptions } from 'swiper/types';
import { PublicationDtoInterface } from '../../module/interfaces/DTO\'s/PublicationAggregate/publication.dto.interface';

@Component({
  selector: 'app-list-top-publications',
  standalone: true,
  imports: [MatTooltipModule, PublicationCardComponent],
  templateUrl: './list-top-publications.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  host: {
    class: 'block px-32 pb-16 h-fit max-lg:px-24 max-sm:px-12'
  }
})
export class ListTopPublicationsComponent {
  @Input({ required: true }) data!: PublicationDtoInterface[];
  @Input({ required: true }) title!: string;
}
