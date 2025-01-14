import { BaseModelInterface } from "../Base/base.model.interface";

export interface AccountModelInterface extends BaseModelInterface {
  name: string;
  birthDate: Date;
  email: string;
  phone?: string;
  password: string;
  genreAccountId: string;
  addressId?: string;

  // linkAccount: LinkAccountModel[];
  // publication: PublicationModel[];
}
