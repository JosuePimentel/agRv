import { ValidateNested } from 'class-validator';
import { BaseLocationModel } from '../Base/baseLocation.model';
import { Type } from 'class-transformer';
import { CityModel } from './city.model';
import { CountryModel } from './country.model';

export class StateModel extends BaseLocationModel {
  @ValidateNested()
  @Type(() => CountryModel)
  country: CountryModel;

  // city: CityModel[];

  @ValidateNested()
  @Type(() => CityModel)
  capitalCity: CityModel;
}
