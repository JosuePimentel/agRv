import { BaseDtoInterface } from '../Base/base.dto.interface';
import { AddressDtoInterface } from '../LocationAggregate/address.dto.interface';
import { dayOpen } from './cinema.dto.interface';

export interface RestaurantDtoInterface extends BaseDtoInterface {
  restaurantDays: dayOpen[];
  addressId?: AddressDtoInterface;
}
