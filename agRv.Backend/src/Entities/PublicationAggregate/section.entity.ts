import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { PublicationEntity } from './publication.entity';

@Entity('sections')
export class SectionEntity extends BaseEntity {
  @Column({ type: 'timestamp' })
  beginDate: Date;

  @Column({ type: 'timestamp' })
  endDate: Date;

  @Column({ type: 'time' })
  time: Date;

  @Column()
  amount: number;

  @ManyToOne(() => PublicationEntity, {
    eager: true,
    nullable: false,
  })
  @JoinColumn({ name: 'film_id' })
  filmId: string;

  // @ManyToMany(() => TagSectionsEntity)
  // @JoinTable({
  //   name: 'section_tag_section',
  //   joinColumn: { name: 'section_id', referencedColumnName: 'id' },
  //   inverseJoinColumn: { name: 'tag_section_id', referencedColumnName: 'id' },
  // })
  // tagSectionId: string[];

  @ManyToOne(() => PublicationEntity, {
    eager: true,
    nullable: false,
  })
  @JoinColumn({ name: 'cinema_id' })
  cinemaId: string;
}
