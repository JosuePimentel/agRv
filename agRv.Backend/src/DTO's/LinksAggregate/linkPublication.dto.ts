import { BaseDto } from '../Base/base.dto';
import { UrlBaseDto } from './urlBase.dto';

export class LinkPublicationDto extends BaseDto {
  link: string;
  urlBase: UrlBaseDto;
  // publication: PublicationDto;
}
