import { Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { SectionEntity } from './section.entity';

@Entity('cinemas')
export class CinemaEntity extends BaseEntity {
  @OneToMany(() => SectionEntity, (section) => section.cinema)
  section: SectionEntity[];
}
