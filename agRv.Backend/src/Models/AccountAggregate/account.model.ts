import {
  IsDateString,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { BaseModel } from '../Base/base.model';

export class AccountModel extends BaseModel {
  @IsString()
  name: string;
  @IsDateString()
  birthDate: Date;
  @IsEmail()
  email: string;
  @IsPhoneNumber()
  @IsOptional()
  phone: string;
  @IsStrongPassword()
  password: string;

  // @ValidateNested()
  // @Type(() => GenreAccountModel)
  @IsString()
  genreAccountId: string;

  // @ValidateNested()
  // @Type(() => AddressModel)
  @IsOptional()
  @IsString()
  addressId: string;

  // linkAccount: LinkAccountModel[];
  // publication: PublicationModel[];
}
