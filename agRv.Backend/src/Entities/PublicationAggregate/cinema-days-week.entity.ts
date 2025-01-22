import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { DaysOpenEntity } from './days-open.entity';
import { CinemaEntity } from './cinema.entity';

@Entity('cinema_days_week')
export class CinemaDaysWeekEntity {
  @PrimaryColumn('uuid', { name: 'days_open_id' })
  daysOpenId: string;

  @PrimaryColumn('uuid', { name: 'cinema_id' })
  cinemaId: string;

  @ManyToOne(() => DaysOpenEntity, { eager: true })
  @JoinColumn({ name: 'days_open_id' })
  daysOpen: DaysOpenEntity;

  @ManyToOne(() => CinemaEntity)
  @JoinColumn({ name: 'cinema_id' })
  cinema: CinemaEntity;

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
