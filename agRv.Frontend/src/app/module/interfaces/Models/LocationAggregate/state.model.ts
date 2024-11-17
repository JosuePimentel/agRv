import { BaseLocationModel } from '../Base/baseLocation.model';
import { CityModel } from './city.model';
import { CountryModel } from './country.model';

export interface StateModel extends BaseLocationModel {
  country: CountryModel;
  // city: CityModel[];
  capitalCity: CityModel;
}
