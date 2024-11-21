import { IsString } from 'class-validator';
import { BaseModel } from '../Base/base.model';
// import { Type } from 'class-transformer';
// import { UrlBaseModel } from './url-base.model';

export class LinkPublicationModel extends BaseModel {
  @IsString()
  link: string;

  // @ValidateNested()
  // @Type(() => UrlBaseModel)
  @IsString()
  urlBaseId: string;

  // @ValidateNested()
  // @Type(() => PublicationModel)
  // publication: PublicationModel;
}
