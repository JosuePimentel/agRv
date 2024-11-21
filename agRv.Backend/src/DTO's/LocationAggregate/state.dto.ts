import { BaseLocationDto } from '../Base/baseLocation.dto';
import { CountryDto } from './country.dto';

export class StateDto extends BaseLocationDto {
  country: CountryDto;
  // city: CityDto[];
  // capitalCity?: CityDto;
}
