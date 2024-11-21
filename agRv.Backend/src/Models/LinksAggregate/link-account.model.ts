import { IsString } from 'class-validator';
import { BaseModel } from '../Base/base.model';

export class LinkAccountModel extends BaseModel {
  @IsString()
  link: string;

  // @ValidateNested()
  // @Type(() => UrlBaseModel)
  @IsString()
  urlBaseId: string;

  // account: AccountModel;
}
