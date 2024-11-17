import { ValidateNested } from 'class-validator';
import { BaseModel } from '../Base/base.model';
import { Type } from 'class-transformer';
import { DayModel } from './day.model';

export class RestaurantModel extends BaseModel {
  @ValidateNested({ each: true })
  @Type(() => DayModel)
  day: DayModel[];
}
