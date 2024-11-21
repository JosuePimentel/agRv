import { IsArray, IsString } from 'class-validator';
import { BaseModel } from '../Base/base.model';

export class RestaurantModel extends BaseModel {
  @IsArray()
  @IsString({ each: true })
  dayId: string[];
}
