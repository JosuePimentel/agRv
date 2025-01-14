import { BaseModelInterface } from "../Base/base.model.interface";

export interface PersonModelInterface extends BaseModelInterface {
  name: string;
  artisticName?: string;
  birthDate?: Date;
  countryId: string;
}
