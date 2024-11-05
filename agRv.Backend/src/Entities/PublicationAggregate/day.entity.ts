import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { RestaurantEntity } from './restaurant.entity';

@Entity('days')
export class DayEntity extends BaseEntity {
  @Column({ name: 'begin_date' })
  beginDate: Date;

  @Column({ name: 'end_date' })
  endDate: Date;

  @Column({ name: 'begin_time', type: 'timetz' })
  beginTime: Date;

  @Column({ name: 'end_time', type: 'timetz' })
  endTime: Date;

  @ManyToOne(() => RestaurantEntity, (restaurant) => restaurant.day)
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: RestaurantEntity;
}
