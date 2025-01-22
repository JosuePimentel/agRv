import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { DaysOpenEntity } from './days-open.entity';
import { RestaurantEntity } from './restaurant.entity';

@Entity('restaurant_days_week')
export class RestaurantDaysWeekEntity {
  @PrimaryColumn('uuid', { name: 'days_open_id' })
  daysOpenId: string;

  @PrimaryColumn('uuid', { name: 'restaurant_id' })
  restaurantId: string;

  @ManyToOne(() => DaysOpenEntity, { eager: true })
  @JoinColumn({ name: 'days_open_id' })
  daysOpen: DaysOpenEntity;

  @ManyToOne(() => RestaurantEntity)
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: RestaurantEntity;

  // @ManyToMany(() => DaysOpenEntity, {
  //   eager: true,
  //   cascade: true,
  //   orphanedRowAction: 'delete',
  // })
  // @JoinTable({
  //   name: 'cinema_days_of_week',
  //   inverseJoinColumn: {
  //     name: 'days_open_id',
  //     referencedColumnName: 'id',
  //   },
  //   joinColumn: {
  //     name: 'cinema_id',
  //     referencedColumnName: 'id',
  //   },
  // })
  // daysOpenId: DaysOpenEntity[];
}
