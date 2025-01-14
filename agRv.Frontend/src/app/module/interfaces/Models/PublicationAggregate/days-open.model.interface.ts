import { dayOfWeekEnum } from "../../DTO's/PublicationAggregate/day-of-week.dto.interface";
import { BaseModelInterface } from "../Base/base.model.interface";

export interface DaysOpenModelInterface extends BaseModelInterface {
  dayOfWeek: dayOfWeekEnum;
  beginTime: string;
  endTime: string;
}
