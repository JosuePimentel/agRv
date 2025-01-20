import { Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { DaysOpenEntity } from './days-open.entity';

@Entity('cinemas')
export class CinemaEntity extends BaseEntity {
  // @OneToMany(() => SectionEntity, (section) => section.cinemaId)
  // sectionId: string[];

  @ManyToMany(() => DaysOpenEntity, {
    eager: true,
    cascade: ['insert', 'remove', 'update'],
  })
  @JoinTable({
    name: 'cinema_days_of_week',
    inverseJoinColumn: {
      name: 'days_open_id',
      referencedColumnName: 'id',
    },
    joinColumn: {
      name: 'cinema_id',
      referencedColumnName: 'id',
    },
  })
  daysOpenId: string[];
}
