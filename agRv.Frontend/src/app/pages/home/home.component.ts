import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SlideBannerComponent } from '../../components/slide-banner/slide-banner.component';
import { ButtonsNavComponent } from '../../components/buttons-nav/buttons-nav.component';
import { ListPublicationsComponent } from '../../components/list-publications/list-publications.component';
import { CountryService } from '../../Services/LocationAggregate/country.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TopIndicationsComponent } from '../../components/top-indications/top-indications.component';

export type nav = { name: string; link: string; icon: string };

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlideBannerComponent, MatTooltipModule, TopIndicationsComponent],
  templateUrl: './home.component.html',
  host: {
    class: 'block h-full relative',
  },
})
export class HomeComponent implements OnInit {
  constructor() {}

  async ngOnInit(): Promise<void> { }
}
