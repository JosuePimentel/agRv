import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

@Entity('period_time')
export class PeriodTime extends BaseEntity {
  @Column({ name: 'begin_time', type: 'timetz' })
  beginTime: Date;

  @Column({ name: 'end_time', type: 'timetz' })
  endTime: Date;
}
