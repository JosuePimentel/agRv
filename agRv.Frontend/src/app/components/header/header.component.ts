import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LogoComponent,
    SearchBarComponent
  ],
  templateUrl: './header.component.html',
  host: {
    class: 'flex py-[40px] items-center'
  }
})
export class HeaderComponent {

}
