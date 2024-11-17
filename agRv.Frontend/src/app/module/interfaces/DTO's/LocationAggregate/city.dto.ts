import { BaseLocationDto } from '../Base/baseLocation.dto';
import { StateDto } from './state.dto';

export interface CityDto extends BaseLocationDto {
  CEP: string;
  // address: AddressDto[]; // Comentado porque não é necessário aqui
  state: StateDto;
  // capitalOfState: StateDto[]; // Comentado porque não é necessário aqui
}
