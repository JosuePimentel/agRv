import { BaseModelInterface } from "./base.model.interface";

export interface BaseLocationModelInterface extends BaseModelInterface {
  name: string;
  location?: string;
  abbr?: string;
}
