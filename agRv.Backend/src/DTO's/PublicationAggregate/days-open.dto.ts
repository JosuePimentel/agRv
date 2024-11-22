import { dayOfWeek } from 'src/Entities/PublicationAggregate/days-open.entity';
import { BaseDto } from '../Base/base.dto';

export class DaysOpenDto extends BaseDto {
  dayOfWeek: dayOfWeek;
  beginTime: string;
  endTime: string;
  // restaurant: RestaurantDto;
}
