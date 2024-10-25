import { Component, Input } from '@angular/core';
import { nav } from '../../pages/home/home.component';

@Component({
  selector: 'app-buttons-nav',
  standalone: true,
  imports: [],
  templateUrl: './buttons-nav.component.html',
  host: {
    class: 'block flex flex-col justify-start items-center gap-[6px] w-[180px]'
  }
})
export class ButtonsNavComponent {
  @Input({ required: true }) data!: nav;
}
