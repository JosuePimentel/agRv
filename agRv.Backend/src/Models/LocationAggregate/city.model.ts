import { IsPostalCode, IsString } from 'class-validator';
import { BaseLocationModel } from '../Base/baseLocation.model';

export class CityModel extends BaseLocationModel {
  @IsPostalCode('BR')
  CEP: string;

  // address: AddressModel[];

  @IsString()
  stateId: string;

  // capitalOfState: StateModel[];
}
