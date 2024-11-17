import { BaseDto } from '../Base/base.dto';
import { CountryDto } from '../LocationAggregate/country.dto';

export interface PersonDto extends BaseDto {
  name: string;
  artisticName?: string;
  birthDate?: Date;
  // film: FilmDto; // Comentado porque não é necessário aqui
  country: CountryDto;
}
