import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ContainerRefModules } from '../../module/modules/container-ref-search.modules';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, SearchBarComponent],
  templateUrl: './header.component.html',
  host: {
    class:
      'flex h-24 px-[5%] fixed top-0 left-0 w-full items-center bg-[rgba(0,0,0,0.35)] backdrop-blur-[6px] justify-evenly gap-5 z-10 max-lg:justify-around max-md:justify-between max-lg:px-5 max-lg:h-[5.5rem]',
  },
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('containerSearch', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
  menuActive: boolean = false;

  constructor(private readonly containerRefModules: ContainerRefModules) {}

  ngAfterViewInit() {
    this.containerRefModules.setViewContainerRef = this.container;
  }

  create() {
    this.containerRefModules.createComponent(SearchComponent);
  }
}
