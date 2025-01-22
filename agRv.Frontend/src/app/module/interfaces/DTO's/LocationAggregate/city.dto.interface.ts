import { BaseLocationDtoInterface } from '../Base/baseLocation.dto.interface';
import { StateDtoInterface } from './state.dto.interface';

export interface CityDtoInterface extends BaseLocationDtoInterface {
  CEP: string;
  stateId: StateDtoInterface;
}
