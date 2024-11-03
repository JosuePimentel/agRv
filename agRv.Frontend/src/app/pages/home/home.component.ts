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
      name: "Filmes",
      link: "",
      icon: "videocam"
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
      name: "Notícias",
      link: "",
      icon: "news "
    }
  ]

  data: any[] = [
    {
      title: 'Chat-GPT for Profit: A Tehc Talk for Non-Techies',
      day: 'Terça, 8 de Janeiro - 15hrs GMT-3',
      author: 'josué pimentel',
      tags: [
        'Online'
      ],
      score: 123,
      promoted: true
    },
    {
      title: 'Chat-GPT for Profit: A Tehc Talk for Non-Techies',
      day: 'Terça, 8 de Janeiro - 15hrs GMT-3',
      author: 'josué pimentel',
      tags: [
        'Online'
      ],
      score: 130,
      promoted: false
    },
    {
      title: 'Chat-GPT for Profit: A Tehc Talk for Non-Techies',
      day: 'Terça, 8 de Janeiro - 15hrs GMT-3',
      author: 'josué pimentel',
      tags: [
        'Online'
      ],
      score: 123,
      promoted: true
    },
    {
      title: 'Chat-GPT for Profit: A Tehc Talk for Non-Techies',
      day: 'Terça, 8 de Janeiro - 15hrs GMT-3',
      author: 'josué pimentel',
      tags: [
        'Restaurante'
      ],
      score: 123,
      promoted: false
    },
    {
      title: 'Chat-GPT for Profit: A Tehc Talk for Non-Techies',
      day: 'Terça, 8 de Janeiro - 15hrs GMT-3',
      author: 'josué pimentel',
      tags: [
        'Online'
      ],
      score: 123,
      promoted: true
    },
    {
      title: 'Chat-GPT for Profit: A Tehc Talk for Non-Techies',
      day: 'Terça, 8 de Janeiro - 15hrs GMT-3',
      author: 'josué pimentel',
      tags: [
        'Online'
      ],
      score: 130,
      promoted: false
    },
    {
      title: 'Chat-GPT for Profit: A Tehc Talk for Non-Techies',
      day: 'Terça, 8 de Janeiro - 15hrs GMT-3',
      author: 'josué pimentel',
      tags: [
        'Online'
      ],
      score: 123,
      promoted: true
    },
    {
      title: 'Chat-GPT for Profit: A Tehc Talk for Non-Techies',
      day: 'Terça, 8 de Janeiro - 15hrs GMT-3',
      author: 'josué pimentel',
      tags: [
        'Restaurante'
      ],
      score: 123,
      promoted: false
    }
  ]
}
