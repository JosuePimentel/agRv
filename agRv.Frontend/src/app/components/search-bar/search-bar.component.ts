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
    class: 'flex gap-[20px] rounded-full px-4 py-2 relative overflow-hidden text-white cursor-pointer border border-solid border-[rgba(255,255,255,.05)] bg-[rgba(217,217,217,0.1)]'
  }
})
export class SearchBarComponent {
  searchInput: string = '';
}
