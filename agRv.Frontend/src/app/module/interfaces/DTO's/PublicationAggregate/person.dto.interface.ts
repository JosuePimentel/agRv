import { BaseDtoInterface } from '../Base/base.dto.interface';
import { CountryDtoInterface } from '../LocationAggregate/country.dto.interface';

export interface PersonDtoInterface extends BaseDtoInterface {
  name: string;
  artisticName?: string;
  birthDate?: Date;
  // film: FilmDto;
  country: CountryDtoInterface;
}
