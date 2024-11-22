import { BaseDto } from '../Base/base.dto';
import { DaysOpenDto } from './days-open.dto';

export class RestaurantDto extends BaseDto {
  daysOpen: DaysOpenDto[];
}
