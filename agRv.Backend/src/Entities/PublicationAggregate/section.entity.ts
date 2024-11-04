import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { FilmEntity } from './film.entity';
import { TagSectionsEntity } from './tag-section.entity';
import { CinemaEntity } from './cinema.entity';

@Entity('sections')
export class SectionEntity extends BaseEntity {
  @Column({ type: 'timetz' })
  date: Date;

  @Column()
  amount: number;

  @ManyToOne(() => FilmEntity, (filme) => filme.section)
  @JoinColumn({ name: 'film_id' })
  film: FilmEntity;

  @ManyToMany(() => TagSectionsEntity)
  @JoinTable({
    name: 'section_tag_section',
    joinColumn: { name: 'section_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_section_id', referencedColumnName: 'id' },
  })
  tagSection: TagSectionsEntity[];

  @ManyToOne(() => CinemaEntity, (cinema) => cinema.section)
  @JoinColumn({ name: 'cinema_id' })
  cinema: CinemaEntity;
}
