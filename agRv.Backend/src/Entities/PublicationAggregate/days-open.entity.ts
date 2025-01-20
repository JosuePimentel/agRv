import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

export enum dayOfWeek {
  'Sunday' = 0,
  'Monday' = 1,
  'Tuesday' = 2,
  'Wednesday' = 3,
  'Thursday' = 4,
  'Friday' = 5,
  'Saturday' = 6,
}

@Entity('days')
export class DaysOpenEntity extends BaseEntity {
  @Column({ name: 'day_of_week', enum: dayOfWeek })
  dayOfWeek: dayOfWeek;

  @Column({ name: 'begin_time', type: 'time' })
  beginTime: string;

  @Column({ name: 'end_time', type: 'time' })
  endTime: string;
}
