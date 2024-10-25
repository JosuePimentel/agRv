import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SlideComponent } from '../../components/slide/slide.component';
import { ButtonsNavComponent } from '../../components/buttons-nav/buttons-nav.component';
import { ListPublicationsComponent } from '../../components/list-publications/list-publications.component';

export type nav = { name: string; link: string; icon: string };

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SlideComponent,
    ButtonsNavComponent,
    ListPublicationsComponent
  ],
  templateUrl: './home.component.html',
  host: {
    class: 'block h-full'
  },
})
export class HomeComponent {
  nav: nav[] = [
    {
      name: "SHOWS",
      link: "",
      icon: "festival"
    },
    {
      name: "PERFORMANCE E ARTES VISUAIS",
      link: "",
      icon: "theater_comedy"
    },
    {
      name: "RESTAURANTES",
      link: "",
      icon: "restaurant"
    },
    {
      name: "SHOW",
      link: "",
      icon: "restaurant"
    }
  ]
}
