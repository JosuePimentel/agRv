import { BaseDto } from '../Base/base.dto';

export interface GenreAccountDto extends BaseDto {
  name: string;
  // account: AccountEntity[]; // Comentado porque não faz parte do Angular
}
