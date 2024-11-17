import { BaseModel } from '../Base/base.model';
import { UrlBaseModel } from './urlBase.model';

export interface LinkPublicationModel extends BaseModel {
  link: string;
  urlBase: UrlBaseModel;
  // @ValidateNested()
  // @Type(() => PublicationModel)
  // publication: PublicationModel;
}
