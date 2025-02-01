import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { PublicationService } from '../../Services/PublicationAggregate/publication.service';
import { PublicationDtoInterface } from '../../module/interfaces/DTO\'s/PublicationAggregate/publication.dto.interface';

@Component({
  selector: 'app-top-indications',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './top-indications.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  host: {
    class: 'block px-32 py-16 max-lg:px-24 max-sm:px-12 max-md:pt-0'
  }
})
export class TopIndicationsComponent {
  swiperEl: SwiperContainer | undefined;
  topPubs = signal<PublicationDtoInterface[]>([]);

  constructor(
    @Inject(PLATFORM_ID) private platformID: object,
    private readonly service: PublicationService
  ) {}

  async ngOnInit(): Promise<void> {
    this.topPubs.set(await this.service.topBanner());

    if (isPlatformBrowser(this.platformID)) {
      this.swiperEl = document.querySelector(
        'swiper-container#topIndication'
      ) as SwiperContainer;
      const swiperParams: SwiperOptions = {
        slidesPerView: "auto",
        direction: 'horizontal',
        spaceBetween: 60,
        rewind: true,
        grabCursor: true,
        // mousewheel: true,
        autoplay: { delay: 5000, pauseOnMouseEnter: true }
      };

      Object.assign(this.swiperEl!, swiperParams);
      this.swiperEl?.initialize();
    }
  }
}
