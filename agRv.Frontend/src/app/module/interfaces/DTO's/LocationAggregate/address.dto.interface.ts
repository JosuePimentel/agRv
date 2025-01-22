import { BaseLocationDtoInterface } from '../Base/baseLocation.dto.interface';
import { CityDtoInterface } from './city.dto.interface';

export interface AddressDtoInterface extends BaseLocationDtoInterface {
  CEP: string;
  complement?: string;
  cityId: CityDtoInterface;
  neighborhood: string;
}
