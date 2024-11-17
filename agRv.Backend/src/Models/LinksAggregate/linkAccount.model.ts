import { IsString, ValidateNested } from 'class-validator';
import { BaseModel } from '../Base/base.model';
import { UrlBaseModel } from './urlBase.model';
import { Type } from 'class-transformer';

export class LinkAccountModel extends BaseModel {
  @IsString()
  link: string;

  @ValidateNested()
  @Type(() => UrlBaseModel)
  urlBase: UrlBaseModel;

  // account: AccountModel;
}
