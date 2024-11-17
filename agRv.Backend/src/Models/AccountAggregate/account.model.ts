import {
  IsDate,
  IsEmail,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  ValidateNested,
} from 'class-validator';
import { BaseModel } from '../Base/base.model';
import { Type } from 'class-transformer';
import { GenreAccountModel } from './genre-account.model';
import { AddressModel } from '../LocationAggregate/address.model';

export class AccountModel extends BaseModel {
  @IsString()
  name: string;
  @IsDate()
  birthDate: Date;
  @IsEmail()
  email: string;
  @IsPhoneNumber()
  phone: string;
  @IsStrongPassword()
  password: string;

  @ValidateNested()
  @Type(() => GenreAccountModel)
  genreAccount: GenreAccountModel;

  @ValidateNested()
  @Type(() => AddressModel)
  address: AddressModel;
  // linkAccount: LinkAccountModel[];
  // publication: PublicationModel[];
}
