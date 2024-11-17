import { BaseDto } from '../Base/base.dto';
import { UrlBaseDto } from './urlBase.dto';

export interface LinkAccountDto extends BaseDto {
  link: string;
  urlBase: UrlBaseDto;
  // account: AccountDto; // Comentado porque não é necessário aqui
}
