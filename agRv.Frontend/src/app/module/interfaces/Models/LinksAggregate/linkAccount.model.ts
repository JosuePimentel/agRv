import { BaseModel } from '../Base/base.model';
import { UrlBaseModel } from './urlBase.model';


export interface LinkAccountModel extends BaseModel {
  link: string;
  urlBase: UrlBaseModel;
  // account: AccountModel;
}
