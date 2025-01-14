import { LinkAccountDtoInterface } from '../LinksAggregate/linkAccount.dto.interface';
import { AddressDtoInterface } from '../LocationAggregate/address.dto.interface';
import { BaseDtoInterface } from '../Base/base.dto.interface';
import { GenreAccountDtoInterface } from './genre-account.dto.interface';
import { PublicationDtoInterface } from '../PublicationAggregate/publication.dto.interface';

export interface AccountDtoInterface extends BaseDtoInterface {
  name: string;
  birthDate: Date;
  email: string;
  phone?: string;
  password: string;
  genreAccount: GenreAccountDtoInterface;
  address: AddressDtoInterface;
  linkAccount: LinkAccountDtoInterface[];
  publication: PublicationDtoInterface[];
}
