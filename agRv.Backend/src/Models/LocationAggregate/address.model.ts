import { IsOptional, IsPostalCode, IsString } from 'class-validator';
import { BaseLocationModel } from '../Base/baseLocation.model';

export class AddressModel extends BaseLocationModel {
  @IsPostalCode('BR')
  CEP: string;

  @IsString()
  @IsOptional()
  complement?: string;

  @IsString()
  cityId: string;
}
