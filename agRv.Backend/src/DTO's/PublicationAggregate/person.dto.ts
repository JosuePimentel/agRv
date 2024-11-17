import { BaseDto } from '../Base/base.dto';
import { CountryDto } from '../LocationAggregate/country.dto';

export class PersonDto extends BaseDto {
  name: string;
  artisticName?: string;
  birthDate?: Date;
  // film: FilmDto;
  country: CountryDto;
}
