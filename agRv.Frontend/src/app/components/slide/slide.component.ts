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

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [
    SlideCardComponent
  ],
  templateUrl: './slide.component.html',
  host: {
    class: 'w-full block',
  },
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SlideComponent implements OnInit{
  constructor(@Inject(PLATFORM_ID) private platformID: object) {}

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformID)) {
      const swiperEl = document.querySelector('swiper-container');
      const swiperParams: SwiperOptions = {
        navigation: true,
        pagination: {
          type: 'bullets',
          dynamicBullets: true,
          clickable: true,
          enabled: true,
        },
        loop: true,
      }

      Object.assign(swiperEl!, swiperParams);
      swiperEl?.initialize();
    }
  }
}
