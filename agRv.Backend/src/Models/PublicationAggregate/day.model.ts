import { IsDateString } from 'class-validator';
import { BaseModel } from '../Base/base.model';

export class DayModel extends BaseModel {
  @IsDateString()
  beginDate: Date;

  @IsDateString()
  endDate: Date;

  @IsDateString()
  beginTime: Date;

  @IsDateString()
  endTime: Date;

  // restaurant: RestaurantModel;
}
