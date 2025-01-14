import { BaseDtoInterface } from '../Base/base.dto.interface';
import { UrlBaseDtoInterface } from './urlBase.dto.interface';

export interface LinkAccountDtoInterface extends BaseDtoInterface {
  link: string;
  urlBase: UrlBaseDtoInterface;
  // account: AccountDto;
}
