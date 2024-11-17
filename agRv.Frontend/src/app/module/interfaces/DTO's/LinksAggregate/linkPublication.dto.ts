import { BaseDto } from '../Base/base.dto';
import { UrlBaseDto } from './urlBase.dto';

export interface LinkPublicationDto extends BaseDto {
  link: string;
  urlBase: UrlBaseDto;
  // publication: PublicationDto; // Comentado porque não é necessário aqui
}
