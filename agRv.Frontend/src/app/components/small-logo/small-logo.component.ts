import { Component } from '@angular/core';

@Component({
  selector: 'app-small-logo',
  standalone: true,
  imports: [],
  templateUrl: './small-logo.component.html',
  host: {
    class: 'flex text-white gap-1 h-[30px] items-center w-fit'
  }
})
export class SmallLogoComponent {

}
