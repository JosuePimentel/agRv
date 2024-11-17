import { BaseLocationModel } from '../Base/baseLocation.model';
import { StateModel } from './state.model';

export interface CityModel extends BaseLocationModel {
  CEP: string;
  // address: AddressModel[];
  state: StateModel;
  // capitalOfState: StateModel[];
}
