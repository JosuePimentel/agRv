import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { SlideCardComponent } from '../slide-card/slide-card.component';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [SlideCardComponent],
  templateUrl: './slide.component.html',
  host: {
    class: 'w-full block h-[80vh] relative rounded-2xl overflow-hidden',
  },
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SlideComponent implements OnInit {
  swiperEl: SwiperContainer | undefined;

  constructor(@Inject(PLATFORM_ID) private platformID: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformID)) {
      this.swiperEl = document.querySelector(
        'swiper-container'
      ) as SwiperContainer;
      const swiperParams: SwiperOptions = {
        slidesPerView: 1,
        loop: true,
        autoplay: { delay: 5000, pauseOnMouseEnter: true},
        direction: 'horizontal',
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
