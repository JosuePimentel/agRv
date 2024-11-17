import { BaseModel } from '../Base/base.model';

export interface UrlBaseModel extends BaseModel {
  url: string;
  icon: string;
  name: string;
  // linkAccount: LinkAccountModel[];
  // linkPublication: LinkPublicationModel[];
}
