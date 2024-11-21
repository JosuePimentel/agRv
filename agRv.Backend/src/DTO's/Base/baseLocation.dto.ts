import { BaseDto } from './base.dto';

export class BaseLocationDto extends BaseDto {
  name: string;
  location?: string;
  abbr?: string;
}
