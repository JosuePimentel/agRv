import { IsString } from 'class-validator';
import { BaseLocationModel } from '../Base/baseLocation.model';

export class StateModel extends BaseLocationModel {
  // @ValidateNested()
  // @Type(() => CountryModel)
  @IsString()
  countryId: string;

  // city: CityModel[];

  // @ValidateNested()
  // @Type(() => CityModel)
  // capitalCity: CityModel;
}
