import { BaseDtoInterface } from "../Base/base.dto.interface";
import { dayOfWeekEnum } from "./day-of-week.dto.interface";

export interface DaysOpenDtoInterface extends BaseDtoInterface {
  dayOfWeek: dayOfWeekEnum;
  beginTime: string;
  endTime: string;
  // restaurant: RestaurantDto;
}
