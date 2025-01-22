import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { SocialMediaLinkComponent } from '../social-media-link/social-media-link.component';
import { SmallLogoComponent } from '../small-logo/small-logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, SocialMediaLinkComponent, SmallLogoComponent],
  templateUrl: './footer.component.html',
  host: {
    class: 'w-full flex flex-col bg-black rounded-t-[20px] relative after:content-[""] after:absolute after:-top-2 after:-z-10  after:left-0 after:bg-PRIMARY-default after:w-full after:h-6'
  }
})
export class FooterComponent {}
