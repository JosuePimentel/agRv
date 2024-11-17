import { BaseModel } from '../Base/base.model';

export interface DayModel extends BaseModel {
  beginDate: Date;
  endDate: Date;
  beginTime: Date;
  endTime: Date;
  // restaurant: RestaurantModel;
}
