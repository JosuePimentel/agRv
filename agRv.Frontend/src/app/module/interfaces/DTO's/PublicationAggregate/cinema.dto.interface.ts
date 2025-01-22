import { BaseDtoInterface } from '../Base/base.dto.interface';
import { SectionDtoInterface } from './section.dto.interface';
import { DaysOpenDtoInterface } from './days-open.dto.interface';
import { AddressDtoInterface } from '../LocationAggregate/address.dto.interface';

export interface dayOpen {
  daysOpen: DaysOpenDtoInterface;
}

export interface CinemaDtoInterface extends BaseDtoInterface {
  section: SectionDtoInterface[];
  cinemaDays: dayOpen[];
  addressId?: AddressDtoInterface;
}
