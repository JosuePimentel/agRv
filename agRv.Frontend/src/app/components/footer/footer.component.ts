import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { SocialMediaLinkComponent } from '../social-media-link/social-media-link.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, SocialMediaLinkComponent],
  templateUrl: './footer.component.html',
  host: {
    class: 'flex justify-between py-[40px] mt-[40px] items-center'
  }
})
export class FooterComponent {
  socialMediaLinks: any[] = [
    {
      link: "",
      type: "instagram"
    },
    {
      link: "",
      type: "X"
    }
  ]
}
