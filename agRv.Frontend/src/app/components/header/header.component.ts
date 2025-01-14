import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, SearchBarComponent],
  templateUrl: './header.component.html',
  host: {
    class: 'flex h-24 px-[5%] absolute top-0 left-0 w-full items-center bg-[rgba(0,0,0,0.35)] backdrop-blur-[6px] justify-evenly gap-5 z-10',
  },
})
export class HeaderComponent {}
