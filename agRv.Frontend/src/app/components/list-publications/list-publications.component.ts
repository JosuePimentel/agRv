import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-publications',
  standalone: true,
  imports: [],
  templateUrl: './list-publications.component.html',
})
export class ListPublicationsComponent {
  @Input() title: string = 'Publicações'
  @Input() desc: string = '';
}
