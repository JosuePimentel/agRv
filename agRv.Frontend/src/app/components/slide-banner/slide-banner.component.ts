import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { SwiperContainer } from 'swiper/element';
import { PublicationPromotedBannerService } from '../../Services/PublicationAggregate/publication-promoted-banner.service';
import { PublicationDtoInterface } from '../../module/interfaces/DTO\'s/PublicationAggregate/publication.dto.interface';
import { PublicationPromotedBannerDtoInterface } from '../../module/interfaces/DTO\'s/PublicationAggregate/publication-promoted-banner.dto.interface';

@Component({
  selector: 'app-slide-banner',
  standalone: true,
  imports: [],
  templateUrl: './slide-banner.component.html',
  host: {
    class: 'w-full block h-screen relative overflow-hidden',
  },
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SlideBannerComponent implements OnInit {
  swiperEl: SwiperContainer | undefined;

  publications = signal<PublicationPromotedBannerDtoInterface[]>([]);

  constructor(
    @Inject(PLATFORM_ID) private platformID: object,
    private readonly service: PublicationPromotedBannerService
  ) {}

  async ngOnInit(): Promise<void> {
    this.publications.set(await this.service.getAll());

    if (isPlatformBrowser(this.platformID)) {
      this.swiperEl = document.querySelector(
        'swiper-container'
      ) as SwiperContainer;
      const swiperParams: SwiperOptions = {
        slidesPerView: 1,
        loop: true,
        autoplay: { delay: 4000, pauseOnMouseEnter: true },
        direction: 'horizontal',
        grabCursor: true,
        pagination: {
          type: 'bullets',
          dynamicBullets: true,
          clickable: true,
          enabled: true,
        },
      };

      Object.assign(this.swiperEl!, swiperParams);
      this.swiperEl?.initialize();
    }
  }
}
