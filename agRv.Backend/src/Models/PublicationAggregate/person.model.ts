import { IsDateString, IsString, ValidateNested } from 'class-validator';
import { BaseModel } from '../Base/base.model';
import { CountryModel } from '../LocationAggregate/country.model';
import { Type } from 'class-transformer';

export class PersonModel extends BaseModel {
  @IsString()
  name: string;

  @IsString()
  artisticName?: string;

  @IsDateString()
  birthDate?: Date;

  // film: FilmModel;

  @ValidateNested()
  @Type(() => CountryModel)
  country: CountryModel;
}
