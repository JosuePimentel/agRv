import { BaseLocationDto } from '../Base/baseLocation.dto';
import { StateDto } from './state.dto';

export class CityDto extends BaseLocationDto {
  CEP: string;
  // address: AddressDto[];
  state: StateDto;
  // capitalOfState: StateDto[];
}
