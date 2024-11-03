import { Component, Input } from '@angular/core';

export type socialMediaLink = 'instagram' | 'X' | 'whatsapp' | 'linkedin' | 'github';

@Component({
  selector: 'app-social-media-link',
  standalone: true,
  imports: [],
  templateUrl: './social-media-link.component.html',
  styleUrl: './social-media-link.component.scss'
})
export class SocialMediaLinkComponent {
  @Input() link: string = '';
  @Input({ required: true }) type!: socialMediaLink;
}
