import { BaseLocationModel } from '../Base/baseLocation.model';
import { CityModel } from './city.model';

export interface AddressModel extends BaseLocationModel {
  CEP: string;
  complement?: string;
  city: CityModel;
}
