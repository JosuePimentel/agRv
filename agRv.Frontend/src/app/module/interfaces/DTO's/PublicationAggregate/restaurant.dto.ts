import { BaseDto } from '../Base/base.dto';
import { DayDto } from './day.dto';

export interface RestaurantDto extends BaseDto {
  day: DayDto[];
}
