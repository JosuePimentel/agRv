import { Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { RestaurantDaysWeekEntity } from './restaurant-days-week.entity';
import { AddressEntity } from '../LocationAggregate/address.entity';

@Entity('restaurants')
export class RestaurantEntity extends BaseEntity {
  // @OneToMany(() => DayEntity, (day) => day.restaurant)
  // day: DayEntity[];

  // @ManyToMany(() => DaysOpenEntity)
  // @JoinTable({
  //   name: 'restaurant_days_of_week',
  //   inverseJoinColumn: {
  //     name: 'days_open_id',
  //     referencedColumnName: 'id',
  //   },
  //   joinColumn: {
  //     name: 'restaurant_id',
  //     referencedColumnName: 'id',
  //   },
  // })
  // daysOpenId: string[];

  @OneToOne(() => AddressEntity, { eager: true })
  @JoinColumn({ name: 'address_id' })
  addressId: string;

  @OneToMany(
    () => RestaurantDaysWeekEntity,
    (restaurantDays) => restaurantDays.restaurant,
    { eager: true },
  )
  restaurantDays: RestaurantDaysWeekEntity[];
}
