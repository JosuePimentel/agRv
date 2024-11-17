import { BaseDto } from "./base.dto";

export interface BaseLocationDto extends BaseDto {
  name: string;
  location?: [number, number];
  abbr?: string;
}
