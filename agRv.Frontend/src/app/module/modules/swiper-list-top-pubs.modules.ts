import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, OnInit, PLATFORM_ID } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Injectable({ providedIn: 'root' })
export class SwiperListTopPubs {
  swiperEl: NodeListOf<SwiperContainer> | undefined;

  constructor(@Inject(PLATFORM_ID) private platformID: object) {}

  async init(): Promise<void> {
    if (isPlatformBrowser(this.platformID)) {
      this.swiperEl = document.querySelectorAll('swiper-container.topPubs');
      const swiperParams: SwiperOptions = {
        slidesPerView: 'auto',
        direction: 'horizontal',
        spaceBetween: 60,
        loop: true,
        grabCursor: true,
        // mousewheel: true,
        autoplay: { delay: 5000, pauseOnMouseEnter: true },
      };

      this.swiperEl.forEach((swiper) => {
        Object.assign(swiper!, swiperParams);
        swiper?.initialize();
      });
    }
  }
}
