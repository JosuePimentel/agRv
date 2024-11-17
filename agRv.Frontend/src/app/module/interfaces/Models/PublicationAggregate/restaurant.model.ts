import { BaseModel } from '../Base/base.model';
import { DayModel } from './day.model';

export interface RestaurantModel extends BaseModel {
  day: DayModel[];
}
