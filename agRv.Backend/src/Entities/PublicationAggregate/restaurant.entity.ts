import { Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { DaysOpenEntity } from './days-open.entity';

@Entity('restaurants')
export class RestaurantEntity extends BaseEntity {
  // @OneToMany(() => DayEntity, (day) => day.restaurant)
  // day: DayEntity[];

  @ManyToMany(() => DaysOpenEntity)
  @JoinTable({
    name: 'restaurant_days_of_week',
    inverseJoinColumn: {
      name: 'days_open_id',
      referencedColumnName: 'id',
    },
    joinColumn: {
      name: 'restaurant_id',
      referencedColumnName: 'id',
    },
  })
  daysOpenId: string[];
}
