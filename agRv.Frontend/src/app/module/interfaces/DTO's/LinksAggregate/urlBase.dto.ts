import { BaseDto } from '../Base/base.dto';

export interface UrlBaseDto extends BaseDto {
  url: string;
  icon: string;
  name: string;
  // linkAccount: LinkAccountDto[]; // Comentado porque não é necessário aqui
  // linkPublication: LinkPublicationDto[]; // Comentado porque não é necessário aqui
}
