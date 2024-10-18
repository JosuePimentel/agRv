import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  @Input('svg-width') width: string = '200';
}
