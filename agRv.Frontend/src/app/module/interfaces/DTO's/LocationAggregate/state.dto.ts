import { BaseLocationDto } from '../Base/baseLocation.dto';
import { CityDto } from './city.dto';
import { CountryDto } from './country.dto';

export interface StateDto extends BaseLocationDto {
  country: CountryDto;
  // city: CityDto[]; // Comentado porque não é necessário aqui
  capitalCity?: CityDto;
}
