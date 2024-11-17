import { BaseDto } from '../Base/base.dto';
import { UrlBaseDto } from './urlBase.dto';

export class LinkAccountDto extends BaseDto {
  link: string;
  urlBase: UrlBaseDto;
  // account: AccountDto;
}
