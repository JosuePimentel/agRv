import { IsPostalCode, IsString, ValidateNested } from 'class-validator';
import { BaseLocationModel } from '../Base/baseLocation.model';
import { Type } from 'class-transformer';
import { CityModel } from './city.model';

export class AddressModel extends BaseLocationModel {
  @IsPostalCode('BR')
  CEP: string;

  @IsString()
  complement?: string;

  @ValidateNested()
  @Type(() => CityModel)
  city: CityModel;
}
