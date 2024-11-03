import { Component } from '@angular/core';

@Component({
  selector: 'app-search-card',
  standalone: true,
  imports: [],
  templateUrl: './search-card.component.html',
  host: {
    class: 'flex gap-4 hover:bg-white h-24 rounded group cursor-pointer transition-colors',
  }
})
export class SearchCardComponent {}
