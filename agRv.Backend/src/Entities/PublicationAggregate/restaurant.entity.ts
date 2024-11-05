import { Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { DayEntity } from './day.entity';

@Entity('restaurants')
export class RestaurantEntity extends BaseEntity {
  @OneToMany(() => DayEntity, (day) => day.restaurant)
  day: DayEntity[];
}
