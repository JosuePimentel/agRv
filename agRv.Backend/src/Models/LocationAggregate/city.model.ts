import { IsPostalCode, ValidateNested } from 'class-validator';
import { BaseLocationModel } from '../Base/baseLocation.model';
import { Type } from 'class-transformer';
import { StateModel } from './state.model';

export class CityModel extends BaseLocationModel {
  @IsPostalCode('BR')
  CEP: string;

  // address: AddressModel[];

  @ValidateNested()
  @Type(() => StateModel)
  state: StateModel;

  // capitalOfState: StateModel[];
}
