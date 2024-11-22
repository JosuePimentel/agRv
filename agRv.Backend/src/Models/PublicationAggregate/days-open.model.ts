import { IsEnum, IsString } from 'class-validator';
import { BaseModel } from '../Base/base.model';
import { dayOfWeek } from 'src/Entities/PublicationAggregate/days-open.entity';

export class DaysOpenModel extends BaseModel {
  @IsEnum(dayOfWeek)
  dayOfWeek: dayOfWeek;

  @IsString()
  beginTime: string;

  @IsString()
  endTime: string;
}
