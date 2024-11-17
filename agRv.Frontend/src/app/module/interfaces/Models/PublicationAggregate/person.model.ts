import { BaseModel } from '../Base/base.model';
import { CountryModel } from '../LocationAggregate/country.model';

export interface PersonModel extends BaseModel {
  name: string;
  artisticName?: string;
  birthDate?: Date;
  // film: FilmModel;
  country: CountryModel;
}
