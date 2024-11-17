import { IsString } from 'class-validator';
import { BaseModel } from '../Base/base.model';

export class GenreAccountModel extends BaseModel {
  @IsString()
  name: string;

  // account: AccountModel[];
}
