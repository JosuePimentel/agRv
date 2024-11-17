import { Point } from 'typeorm';
import { BaseModel } from './base.model';
import { IsString } from 'class-validator';

export class BaseLocationModel extends BaseModel {
  @IsString()
  name: string;
  location?: Point;
  @IsString()
  abbr?: string;
}
