import { BaseLocationDto } from '../Base/baseLocation.dto';
import { CityDto } from './city.dto';

export interface AddressDto extends BaseLocationDto {
  CEP: string;
  complement?: string;
  city: CityDto;
}
