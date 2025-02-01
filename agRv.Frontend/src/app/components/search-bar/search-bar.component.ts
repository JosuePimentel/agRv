import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../search/search.component';
import { CommonModule } from '@angular/common';
import { ContainerRefModules } from '../../module/modules/container-ref-search.modules';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  host: {
    class: '',
  },
})
export class SearchBarComponent implements AfterViewInit {
  @ViewChild('containerSearch', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  constructor(private readonly containerRefModules: ContainerRefModules) {}

  ngAfterViewInit() {
    this.containerRefModules.setViewContainerRef = this.container;
  }

  create() {
    this.containerRefModules.createComponent(SearchComponent);
  }
}
