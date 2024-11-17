import { BaseDto } from '../Base/base.dto';
import { DayDto } from './day.dto';

export class RestaurantDto extends BaseDto {
  day: DayDto[];
}
