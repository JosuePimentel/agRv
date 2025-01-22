import { Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { CinemaDaysWeekEntity } from './cinema-days-week.entity';
import { AddressEntity } from '../LocationAggregate/address.entity';

@Entity('cinemas')
export class CinemaEntity extends BaseEntity {
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

  @OneToOne(() => AddressEntity, { eager: true })
  @JoinColumn({ name: 'address_id' })
  addressId: string;

  @OneToMany(() => CinemaDaysWeekEntity, (cinemaDays) => cinemaDays.cinema, {
    eager: true,
  })
  cinemaDays: CinemaDaysWeekEntity[];
}
