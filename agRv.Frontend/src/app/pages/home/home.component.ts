import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SlideComponent } from '../../components/slide/slide.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SlideComponent
  ],
  templateUrl: './home.component.html',
  host: {
    class: 'block h-full'
  },
})
export class HomeComponent {

}
