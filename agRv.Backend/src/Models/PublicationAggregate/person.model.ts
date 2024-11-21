import { IsDateString, IsOptional, IsString } from 'class-validator';
import { BaseModel } from '../Base/base.model';

export class PersonModel extends BaseModel {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  artisticName?: string;

  @IsDateString()
  @IsOptional()
  birthDate?: Date;

  // film: FilmModel;

  @IsString()
  countryId: string;
}
