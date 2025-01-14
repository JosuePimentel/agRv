import { BaseDtoInterface } from './base.dto.interface';

export interface BaseLocationDtoInterface extends BaseDtoInterface {
  name: string;
  location?: string;
  abbr?: string;
}
