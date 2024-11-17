import { IsString, ValidateNested } from 'class-validator';
import { BaseModel } from '../Base/base.model';
import { Type } from 'class-transformer';
import { UrlBaseModel } from './urlBase.model';

export class LinkPublicationModel extends BaseModel {
  @IsString()
  link: string;

  @ValidateNested()
  @Type(() => UrlBaseModel)
  urlBase: UrlBaseModel;

  // @ValidateNested()
  // @Type(() => PublicationModel)
  // publication: PublicationModel;
}
