import { IsDate } from 'class-validator';
import { BaseModel } from '../Base/base.model';

export class DayModel extends BaseModel {
  @IsDate()
  beginDate: Date;

  @IsDate()
  endDate: Date;

  @IsDate()
  beginTime: Date;

  @IsDate()
  endTime: Date;

  // restaurant: RestaurantModel;
}
