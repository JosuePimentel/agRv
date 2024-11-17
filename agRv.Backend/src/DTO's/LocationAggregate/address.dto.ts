import { BaseLocationDto } from '../Base/baseLocation.dto';
import { CityDto } from './city.dto';

export class AddressDto extends BaseLocationDto {
  CEP: string;
  complement?: string;
  city: CityDto;
}
