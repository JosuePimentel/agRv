import { CountryDtoInterface } from "./country.dto.interface";
import { BaseLocationDtoInterface } from '../Base/baseLocation.dto.interface';

export interface StateDtoInterface extends BaseLocationDtoInterface {
  countryId: CountryDtoInterface;
  // city: CityDto[];
  // capitalCity?: CityDto;
}
