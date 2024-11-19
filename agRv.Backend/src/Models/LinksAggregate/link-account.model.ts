import { IsString } from 'class-validator';
import { BaseModel } from '../Base/base.model';

export class LinkAccountModel extends BaseModel {
  @IsString()
  link: string;

  // @ValidateNested()
  // @Type(() => UrlBaseModel)
  urlBaseId: string;

  // account: AccountModel;
}
