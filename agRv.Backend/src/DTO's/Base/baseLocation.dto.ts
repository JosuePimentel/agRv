import { Point } from 'typeorm';
import { BaseDto } from './base.dto';

export class BaseLocationDto extends BaseDto {
  name: string;
  location?: Point;
  abbr?: string;
}
