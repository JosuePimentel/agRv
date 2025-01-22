import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { SlideBannerComponent } from '../../components/slide-banner/slide-banner.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TopIndicationsComponent } from '../../components/top-indications/top-indications.component';
import { ListTopPublicationsComponent } from '../../components/list-top-publications/list-top-publications.component';
import { PublicationService } from '../../Services/PublicationAggregate/publication.service';
import { PublicationDtoInterface } from '../../module/interfaces/DTO\'s/PublicationAggregate/publication.dto.interface';
import { CommonModule } from '@angular/common';
import { SwiperListTopPubs } from '../../module/modules/swiper-list-top-pubs.modules';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SlideBannerComponent,
    MatTooltipModule,
    TopIndicationsComponent,
    ListTopPublicationsComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  host: {
    class: 'block h-full relative',
  },
})
export class HomeComponent implements OnInit {
  show: PublicationDtoInterface[] = [];
  rest: PublicationDtoInterface[] = [];
  cin: PublicationDtoInterface[] = [];
  film: PublicationDtoInterface[] = [];
  new: PublicationDtoInterface[] = [];

  constructor(private readonly service: PublicationService, private readonly swiperPubs: SwiperListTopPubs) {}

  async ngOnInit(): Promise<void> {
    this.swiperPubs.init();

    this.show = await this.service.topPubs(0);
    this.rest = await this.service.topPubs(4);
    this.cin = await this.service.topPubs(1);
    this.film = await this.service.topPubs(2);
    this.new = await this.service.topPubs(3);
  }
}
