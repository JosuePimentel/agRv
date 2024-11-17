import { BaseDto } from '../Base/base.dto';
import { LinkAccountDto } from '../LinksAggregate/linkAccount.dto';
import { AddressDto } from '../LocationAggregate/address.dto';
import { PublicationDto } from '../PublicationAggregate/publication.dto';
import { GenreAccountDto } from './genre-account.dto';

export interface AccountDto extends BaseDto {
  name: string;
  birthDate: Date;
  email: string;
  phone?: string;
  password: string;
  genreAccount: GenreAccountDto;
  address: AddressDto;
  linkAccount: LinkAccountDto[];
  publication: PublicationDto[];
}
