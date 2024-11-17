import { BaseModel } from "./base.model";

export interface BaseLocationModel extends BaseModel {
  name: string;
  location?: [number, number];
  abbr?: string;
}
