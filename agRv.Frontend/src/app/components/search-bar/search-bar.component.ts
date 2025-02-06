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
export class SearchBarComponent {

  constructor(private readonly containerRefModules: ContainerRefModules) {}

  create() {
    this.containerRefModules.createComponent(SearchComponent);
  }
}
