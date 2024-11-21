import { BaseModel } from './base.model';
import { IsOptional, IsString } from 'class-validator';

export class BaseLocationModel extends BaseModel {
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  location?: string;
  @IsString()
  @IsOptional()
  abbr?: string;
}
