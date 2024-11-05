import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PublicationComponent } from './pages/publication/publication.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: "Home"
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'publication',
    redirectTo: 'publication/news',
    pathMatch: 'full'
  },
  {
    path: 'publication/:type',
    component: PublicationComponent
  }
];
