import { BaseDto } from '../Base/base.dto';
import { RestaurantDto } from './restaurant.dto';

export interface DayDto extends BaseDto {
  beginDate: Date;
  endDate: Date;
  beginTime: Date;
  endTime: Date;
  restaurant: RestaurantDto;
}
