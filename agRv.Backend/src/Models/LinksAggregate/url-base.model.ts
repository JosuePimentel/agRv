import { IsString, IsUrl } from 'class-validator';
import { BaseModel } from '../Base/base.model';

export class UrlBaseModel extends BaseModel {
  @IsUrl()
  url: string;

  @IsString()
  name: string;

  // linkAccount: LinkAccountModel[];

  // linkPublication: LinkPublicationModel[];
}
