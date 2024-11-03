import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchCardComponent } from '../search-card/search-card.component';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    FormsModule,
    SearchCardComponent
  ],
  templateUrl: './search-bar.component.html',
  host: {
    class: 'flex items-center py-[8px] px-[11px] rounded shadow-shiny h-min w-[560px] flex absolute left-[50%] -translate-x-[280px]'
  }
})
export class SearchBarComponent {
  searchInput: string = '';

  search() {
    console.log(this.searchInput);
  }

  escrever(e: any) {
    console.log(e);
  }
}
