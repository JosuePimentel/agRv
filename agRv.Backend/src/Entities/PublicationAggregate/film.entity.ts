import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

@Entity('films')
export class FilmEntity extends BaseEntity {
  @Column()
  video: string;

  @Column({ type: 'timestamptz', name: 'date_debut' })
  dateDebut: Date;

  @Column()
  duration: number;
}
