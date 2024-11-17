import { BaseModel } from "../Base/base.model";
import { AddressModel } from "../LocationAggregate/address.model";
import { GenreAccountModel } from "./genre-account.model";

export interface AccountModel extends BaseModel {
  name: string;
  birthDate: Date;
  email: string;
  phone: string;
  password: string;
  genreAccount: GenreAccountModel;
  address: AddressModel;
  // linkAccount: LinkAccountModel[]; // Comentado porque não é necessário aqui
  // publication: PublicationModel[]; // Comentado porque não é necessário aqui
}
