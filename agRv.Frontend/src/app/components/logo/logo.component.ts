import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  host: {
    class: "h-full block"
  }
})
export class LogoComponent {}
